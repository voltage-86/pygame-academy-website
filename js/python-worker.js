// ==========================================
// Python Web Worker
// ==========================================

importScripts("https://cdn.jsdelivr.net/pyodide/v0.29.0/full/pyodide.js");

let pyodide = null;

// ==========================================
// Initialise Pyodide Environment
// ==========================================

async function initialisePython() {
  try {
    // Load Pyodide and micropip package manager
    pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/",
      packages: ["micropip"]
    });

    // Run quick python check for installed modules
    const packages = await pyodide.runPythonAsync(`
import sys
import json

json.dumps({
  "python": sys.version,
  "micropip": "micropip" in sys.modules,
  "pygame": "pygame" in sys.modules
})
`);

    // Signal main UI thread that python engine is ready
    self.postMessage({
      type: "ready",
      diagnostic: packages
    });

  } catch (error) {
    self.postMessage({
      type: "initialisation-error",
      error: error.message || String(error)
    });
  }
}


// ==========================================
// Run Python Code
// ==========================================

async function runPython(code) {
  if (!pyodide) {
    self.postMessage({
      type: "error",
      error: "Python is still loading. Please try again."
    });
    return;
  }

  try {
    const usesPygame = code.includes("import pygame") || code.includes("from pygame");

    // Load Pygame CE package dynamically if code imports pygame
    if (usesPygame) {
      self.postMessage({ type: "pygame-loading" });

      pyodide.setStdout({});
      pyodide.setStderr({});

      await pyodide.loadPackage("pygame-ce");
    }

    // Capture standard output and send to main thread
    let output = "";

    pyodide.setStdout({
      batched: (text) => {
        output += text + "\n";
        self.postMessage({
          type: "output",
          output: output
        });
      }
    });

    // Ignore runtime stderr warning messages
    pyodide.setStderr({
      batched: () => {}
    });

    // Execute user code asynchronously
    const result = await pyodide.runPythonAsync(code);

    if (result !== undefined && result !== null) {
      output += String(result);
      self.postMessage({
        type: "output",
        output: output
      });
    }

    // Default message if print wasn't used
    if (output.trim() === "") {
      output = "Code finished successfully with no output.";
    }

    self.postMessage({
      type: "complete",
      output: output,
      pygame: usesPygame
    });

  } catch (error) {
    self.postMessage({
      type: "error",
      error: error.message || String(error)
    });
  }
}


// ==========================================
// Worker Message Listener
// ==========================================

self.addEventListener("message", (event) => {
  const data = event.data;

  if (data.type === "run") {
    runPython(data.code);
  }
});


// ==========================================
// Start Setup
// ==========================================

initialisePython();
