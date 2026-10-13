// ==========================================
// Try It Yourself Interactive Editor
// ==========================================

const codeEditor = document.querySelector("#code-editor");
const runButton = document.querySelector("#run-button");
const clearButton = document.querySelector("#clear-button");
const resetButton = document.querySelector("#reset-button");

const codeOutput = document.querySelector("#code-output");
const outputStatus = document.querySelector("#output-status");
const exampleName = document.querySelector("#example-name");

const pygamePreview = document.querySelector("#pygame-preview");
const pygameStatus = document.querySelector("#pygame-status");
const pygameStopButton = document.querySelector("#pygame-stop-button");
const pygameFrame = document.querySelector("#pygame-frame");


// ==========================================
// Example Code Presets
// ==========================================

const examples = {
  "python-fundamentals": {
    name: "Python Fundamentals",
    code: `name = "Player"
score = 0

print("Welcome,", name)
print("Score:", score)`
  },

  "conditions-loops": {
    name: "Conditions & Loops",
    code: `score = 0

for points in range(5):
  score += 10

if score >= 50:
  print("Level complete!")`
  },

  "functions": {
    name: "Functions",
    code: `def add_score(score, points):
  return score + points

score = 100
score = add_score(score, 50)

print(score)`
  },

  "introduction-to-pygame": {
    name: "Introduction to Pygame",
    code: `import pygame

pygame.init()

screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()

running = True

while running:
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      running = False

  pygame.display.flip()
  clock.tick(60)

pygame.quit()`
  },

  "first-pygame-game": {
    name: "Your First Pygame Game",
    code: `import pygame

pygame.init()

screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()

player_x = 400
player_y = 300

running = True

while running:
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      running = False

  keys = pygame.key.get_pressed()

  if keys[pygame.K_LEFT]:
    player_x -= 5

  if keys[pygame.K_RIGHT]:
    player_x += 5

  screen.fill((15, 17, 26))

  pygame.draw.rect(
    screen,
    (139, 92, 246),
    (player_x, player_y, 50, 50)
  )

  pygame.display.flip()
  clock.tick(60)

pygame.quit()`
  }
};


// ==========================================
// Challenge Data
// ==========================================

const challenges = {
  greeting: {
    name: "Greeting Program",
    xp: 50,
    instructions: "Create a program that stores a player's name in a variable and prints a personalised greeting.",
    requirements: [
      "Create a variable containing a player's name.",
      "Use print() to display a greeting.",
      "Include the player's name in the output."
    ],
    code: `# Store the player's name in a variable\nname = ""\n\n# Print a personalised greeting\n`
  },

  "score-calculator": {
    name: "Score Calculator",
    xp: 75,
    instructions: "Create a program that stores game scores and calculates the player's total score.",
    requirements: [
      "Create variables for at least two scores.",
      "Add the scores together.",
      "Print the total score."
    ],
    code: `# Store the player's scores\nscore_1 = 0\nscore_2 = 0\n\n# Calculate the total score\n\n\n# Display the total\n`
  },

  "number-guessing": {
    name: "Number Guessing",
    xp: 100,
    instructions: "Create a program that checks whether a player's guess matches a secret number.",
    requirements: [
      "Create a variable containing the secret number.",
      "Create a variable containing the player's guess.",
      "Use an if statement to compare them.",
      "Print a message when the guess is correct."
    ],
    code: `# Set the secret number\nsecret_number = 7\n\n# Set the player's guess\nguess = 0\n\n# Check whether the guess is correct\n`
  },

  countdown: {
    name: "Countdown",
    xp: 100,
    instructions: "Use a loop to create a countdown that displays the numbers from ten down to one.",
    requirements: [
      "Use a for loop.",
      "Use range().",
      "Print the numbers from 10 down to 1."
    ],
    code: `# Create a countdown from 10 to 1\n`
  },

  "player-movement": {
    name: "Move a Player",
    xp: 150,
    instructions: "Use Pygame keyboard input to move a player around the screen.",
    requirements: [
      "Create a Pygame window.",
      "Create a player position.",
      "Read keyboard input.",
      "Move the player when a direction key is pressed.",
      "Draw the player on the screen."
    ],
    code: `import pygame\n\npygame.init()\n\nscreen = pygame.display.set_mode((800, 600))\nclock = pygame.time.Clock()\n\nplayer_x = 400\nplayer_y = 300\n\nrunning = True\n\nwhile running:\n  for event in pygame.event.get():\n    if event.type == pygame.QUIT:\n      running = False\n\n  # Add keyboard movement here\n\n\n  screen.fill((15, 17, 26))\n\n  # Draw the player here\n\n\n  pygame.display.flip()\n  clock.tick(60)\n\npygame.quit()\n`
  },

  "game-loop": {
    name: "Build a Game Loop",
    xp: 200,
    instructions: "Complete a basic Pygame game loop that handles events, updates the game, and draws each frame.",
    requirements: [
      "Create a Pygame window.",
      "Create a running variable.",
      "Handle the QUIT event.",
      "Draw something to the screen.",
      "Update the display.",
      "Control the game loop speed."
    ],
    code: `import pygame\n\npygame.init()\n\nscreen = pygame.display.set_mode((800, 600))\nclock = pygame.time.Clock()\n\nrunning = True\n\nwhile running:\n\n  # Handle events here\n\n\n  # Update the game here\n\n\n  # Draw the game here\n\n\n  pygame.display.flip()\n  clock.tick(60)\n\npygame.quit()\n`
  }
};


// ==========================================
// Project Data
// ==========================================

const projects = {
  snake: {
    name: "Snake",
    instructions: "Build a classic Snake game by combining movement, collision detection, scoring, and a game loop.",
    requirements: [
      "Create a Pygame window.",
      "Create a player-controlled snake.",
      "Move the snake using keyboard input.",
      "Create food for the snake to collect.",
      "Detect when the snake collects food.",
      "Track and display the player's score."
    ],
    code: `import pygame\n\npygame.init()\n\nscreen = pygame.display.set_mode((800, 600))\nclock = pygame.time.Clock()\n\nsnake_x = 400\nsnake_y = 300\n\nfood_x = 600\nfood_y = 300\n\nscore = 0\nrunning = True\n\nwhile running:\n  # Handle events here\n  for event in pygame.event.get():\n    if event.type == pygame.QUIT:\n      running = False\n\n  # Move the snake here\n\n  # Check for food collision here\n\n  # Draw the game here\n  screen.fill((15, 17, 26))\n\n  # Draw the snake here\n\n  # Draw the food here\n\n  pygame.display.flip()\n  clock.tick(10)\n\npygame.quit()\n`
  },

  "space-shooter": {
    name: "Space Shooter",
    instructions: "Create a simple space shooter by adding player movement, projectiles, enemies, and collision detection.",
    requirements: [
      "Create a Pygame window.",
      "Create a player that can move.",
      "Create projectiles.",
      "Create enemies.",
      "Allow the player to shoot.",
      "Detect projectile and enemy collisions."
    ],
    code: `import pygame\n\npygame.init()\n\nscreen = pygame.display.set_mode((800, 600))\nclock = pygame.time.Clock()\n\nplayer_x = 375\nplayer_y = 520\n\nbullets = []\nenemies = []\n\nrunning = True\n\nwhile running:\n  # Handle events here\n  for event in pygame.event.get():\n    if event.type == pygame.QUIT:\n      running = False\n\n    # Add shooting here\n\n  # Move the player here\n\n  # Move bullets here\n\n  # Move enemies here\n\n  # Check collisions here\n\n  screen.fill((15, 17, 26))\n\n  # Draw the player here\n\n  # Draw bullets here\n\n  # Draw enemies here\n\n  pygame.display.flip()\n  clock.tick(60)\n\npygame.quit()\n`
  },

  platformer: {
    name: "Platformer",
    instructions: "Build a 2D platformer using gravity, jumping, platforms, and collision detection.",
    requirements: [
      "Create a Pygame window.",
      "Create a player position.",
      "Add horizontal movement.",
      "Add gravity.",
      "Allow the player to jump.",
      "Create platforms.",
      "Detect collisions with platforms."
    ],
    code: `import pygame\n\npygame.init()\n\nscreen = pygame.display.set_mode((800, 600))\nclock = pygame.time.Clock()\n\nplayer_x = 100\nplayer_y = 400\n\nplayer_velocity_y = 0\ngravity = 1\n\nrunning = True\n\nwhile running:\n  # Handle events here\n  for event in pygame.event.get():\n    if event.type == pygame.QUIT:\n      running = False\n\n    # Add jumping here\n\n  # Add horizontal movement here\n\n  # Apply gravity here\n\n  # Check platform collisions here\n\n  screen.fill((15, 17, 26))\n\n  # Draw the player here\n\n  # Draw platforms here\n\n  pygame.display.flip()\n  clock.tick(60)\n\npygame.quit()\n`
  },

  adventure: {
    name: "Top-Down Adventure",
    instructions: "Combine your Pygame skills to create a top-down adventure game with enemies, health, levels, and game states.",
    requirements: [
      "Create a Pygame window.",
      "Create a player that can move.",
      "Create enemies.",
      "Add a health system.",
      "Detect collisions with enemies.",
      "Create multiple game states or levels."
    ],
    code: `import pygame\n\npygame.init()\n\nscreen = pygame.display.set_mode((800, 600))\nclock = pygame.time.Clock()\n\nplayer_x = 400\nplayer_y = 300\n\nplayer_health = 100\n\ngame_state = "playing"\n\nrunning = True\n\nwhile running:\n  # Handle events here\n  for event in pygame.event.get():\n    if event.type == pygame.QUIT:\n      running = False\n\n  # Move the player here\n\n  # Update enemies here\n\n  # Check enemy collisions here\n\n  # Update player health here\n\n  # Update the game state here\n\n  screen.fill((15, 17, 26))\n\n  # Draw the player here\n\n  # Draw enemies here\n\n  pygame.display.flip()\n  clock.tick(60)\n\npygame.quit()\n`
  }
};


// ==========================================
// URL Parameters & Initial Code Selection
// ==========================================

const urlParams = new URLSearchParams(window.location.search);
const challengeId = urlParams.get("challenge");
const exampleId = urlParams.get("example");
const projectId = urlParams.get("project");

const currentChallenge = challengeId && challenges[challengeId] ? challenges[challengeId] : null;
const currentProject = projectId && projects[projectId] ? projects[projectId] : null;
const currentExample = examples[exampleId] || examples["python-fundamentals"];

const isChallenge = currentChallenge !== null;
const isProject = currentProject !== null;

let startingCode = currentExample.code;
let currentName = currentExample.name;

if (isChallenge) {
  startingCode = currentChallenge.code;
  currentName = currentChallenge.name;
} else if (isProject) {
  startingCode = currentProject.code;
  currentName = currentProject.name;
}


// ==========================================
// Load Editor & CodeMirror Setup
// ==========================================

function loadExample() {
  if (!codeEditor) return;
  codeEditor.value = startingCode;

  if (exampleName) {
    exampleName.textContent = currentName;
  }
}

loadExample();

const codeMirror = CodeMirror.fromTextArea(codeEditor, {
  mode: "python",
  theme: "default",
  lineNumbers: true,
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: false,
  lineWrapping: false,
  autofocus: false
});

codeMirror.setValue(startingCode);

function getEditorCode() {
  return codeMirror.getValue();
}


// ==========================================
// Challenge Panel Construction
// ==========================================

function createChallengePanel() {
  if (!isChallenge) return;

  const trySection = document.querySelector(".try-section");
  if (!trySection) return;

  const panel = document.createElement("section");
  panel.className = "challenge-instructions";

  panel.innerHTML = `
    <div class="challenge-instructions-content">
      <p class="section-label">CODING CHALLENGE</p>
      <h2>${currentChallenge.name}</h2>
      <p class="challenge-description">${currentChallenge.instructions}</p>
      <div class="challenge-requirements">
        <h3>Your Goal</h3>
        <ul>
          ${currentChallenge.requirements.map(req => `<li>${req}</li>`).join("")}
        </ul>
      </div>
      <div class="challenge-reward">
        <strong>+${currentChallenge.xp} XP</strong>
        <span>Complete the challenge to earn XP.</span>
      </div>
    </div>
  `;

  trySection.prepend(panel);
}

createChallengePanel();


// ==========================================
// Project Panel Construction & Goal Tracking
// ==========================================

function createProjectPanel() {
  if (!isProject) return;

  const trySection = document.querySelector(".try-section");
  if (!trySection) return;

  const projectProgressKey = "pygame-academy-project-progress";
  const projectProgress = JSON.parse(localStorage.getItem(projectProgressKey) || "{}");

  const projectGoalsKey = "pygame-academy-project-goals";
  const projectGoals = JSON.parse(localStorage.getItem(projectGoalsKey) || "{}");

  if (!projectGoals[projectId]) {
    projectGoals[projectId] = [];
  }

  const completedGoals = projectGoals[projectId];

  const panel = document.createElement("section");
  panel.className = "challenge-instructions project-instructions";

  panel.innerHTML = `
    <div class="challenge-instructions-content">
      <p class="section-label">GAME PROJECT</p>
      <h2>${currentProject.name}</h2>
      <p class="challenge-description">${currentProject.instructions}</p>

      <div class="challenge-requirements">
        <div class="project-goals-header">
          <h3>Project Goals</h3>
          <span class="project-goals-progress" id="project-goals-progress">
            0/${currentProject.requirements.length}
          </span>
        </div>

        <div class="project-goals" id="project-goals">
          ${currentProject.requirements.map((requirement, index) => {
            const completed = completedGoals.includes(index);
            return `
              <label class="project-goal ${completed ? "completed" : ""}">
                <input type="checkbox" data-goal="${index}" ${completed ? "checked" : ""}>
                <span>${requirement}</span>
              </label>
            `;
          }).join("")}
        </div>
      </div>

      <div class="project-complete-area">
        <button type="button" class="project-complete-button" id="project-complete-button">
          Mark Project Complete
        </button>
        <p class="project-complete-message" id="project-complete-message"></p>
      </div>
    </div>
  `;

  trySection.prepend(panel);

  const goals = panel.querySelectorAll(".project-goal input");
  const progressElement = panel.querySelector("#project-goals-progress");
  const completeButton = panel.querySelector("#project-complete-button");
  const completeMessage = panel.querySelector("#project-complete-message");

  function updateGoalProgress() {
    const completed = projectGoals[projectId];
    const count = completed.length;
    const total = currentProject.requirements.length;

    if (progressElement) {
      progressElement.textContent = `${count}/${total}`;
    }

    goals.forEach((checkbox) => {
      const goal = checkbox.closest(".project-goal");
      goal.classList.toggle("completed", checkbox.checked);
    });
  }

  goals.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const goalIndex = Number(checkbox.dataset.goal);

      if (checkbox.checked) {
        if (!projectGoals[projectId].includes(goalIndex)) {
          projectGoals[projectId].push(goalIndex);
        }
      } else {
        projectGoals[projectId] = projectGoals[projectId].filter(idx => idx !== goalIndex);
      }

      localStorage.setItem(projectGoalsKey, JSON.stringify(projectGoals));
      startProjectProgress();
      updateGoalProgress();
    });
  });

  function startProjectProgress() {
    if (projectProgress[projectId] !== "completed") {
      projectProgress[projectId] = "started";
      localStorage.setItem(projectProgressKey, JSON.stringify(projectProgress));
    }
  }

  if (projectProgress[projectId] === "completed") {
    completeButton.textContent = "✓ Project Completed";
    completeButton.classList.add("completed");
    completeButton.disabled = true;
    completeMessage.textContent = "Great work! You completed this project.";
  }

  if (completeButton) {
    completeButton.addEventListener("click", () => {
      const completed = projectGoals[projectId].length;
      const total = currentProject.requirements.length;

      if (completed < total) {
        if (completeMessage) {
          completeMessage.textContent = `Complete all ${total} project goals first.`;
        }
        return;
      }

      projectProgress[projectId] = "completed";
      localStorage.setItem(projectProgressKey, JSON.stringify(projectProgress));

      completeButton.textContent = "✓ Project Completed";
      completeButton.classList.add("completed");
      completeButton.disabled = true;

      if (completeMessage) {
        completeMessage.textContent = "Great work! You completed this project.";
      }
    });
  }

  updateGoalProgress();
}

createProjectPanel();


// ==========================================
// Python Worker Execution Logic
// ==========================================

let pythonWorker = null;
let pythonRunning = false;
let pythonReady = false;
let pythonTimeout = null;

let pygameRunning = false;
let pendingPygameCode = null;

function createPythonWorker() {
  if (pythonWorker) return pythonWorker;

  try {
    pythonWorker = new Worker("js/python-worker.js?v=" + Date.now());
    pythonWorker.addEventListener("message", handleWorkerMessage);
    pythonWorker.addEventListener("error", handleWorkerError);
  } catch (error) {
    outputStatus.textContent = "Error";
    codeOutput.textContent = error.message || "Unable to start the Python environment.";
    pythonWorker = null;
  }

  return pythonWorker;
}

function startPythonTimeout() {
  pythonTimeout = setTimeout(() => {
    if (!pythonRunning) return;

    if (pythonWorker) {
      pythonWorker.terminate();
      pythonWorker = null;
    }

    pythonReady = false;
    outputStatus.textContent = "Timed Out";
    codeOutput.textContent =
      "Execution stopped because the code took too long to finish.\n\n" +
      "Check your loops and make sure your program can finish.";

    finishRunning();
  }, 5000);
}

function clearPythonTimeout() {
  if (pythonTimeout) {
    clearTimeout(pythonTimeout);
    pythonTimeout = null;
  }
}

function completeChallenge() {
  if (!isChallenge) return;

  const completed = JSON.parse(
    localStorage.getItem("pygame-academy-completed-challenges") || "[]"
  );

  if (completed.includes(challengeId)) return;

  completed.push(challengeId);
  localStorage.setItem("pygame-academy-completed-challenges", JSON.stringify(completed));

  codeOutput.textContent += `\n\nChallenge complete! +${currentChallenge.xp} XP`;
  outputStatus.textContent = "Challenge Complete";
}

function handleWorkerMessage(event) {
  const data = event.data;

  if (data.type === "error-output") return;

  if (data.type === "ready") {
    pythonReady = true;
    outputStatus.textContent = "Ready";
    codeOutput.textContent = "Python is ready. Run your code to see the output here.";
    return;
  }

  if (data.type === "initialisation-error") {
    pythonReady = false;
    outputStatus.textContent = "Error";
    codeOutput.textContent = data.error;
    finishRunning();
    return;
  }

  if (data.type === "output") {
    codeOutput.textContent = data.output;
    return;
  }

  if (data.type === "complete") {
    clearPythonTimeout();
    codeOutput.textContent = data.output;
    outputStatus.textContent = "Complete";

    if (isChallenge) {
      checkPythonChallenge(getEditorCode(), data.output);
    }

    finishRunning();
    return;
  }

  if (data.type === "error") {
    clearPythonTimeout();
    codeOutput.textContent = data.error;
    outputStatus.textContent = "Error";
    finishRunning();
  }
}

function checkPythonChallenge(code, output) {
  if (!isChallenge) return;

  const cleanCode = code.toLowerCase();
  const cleanOutput = output.toLowerCase();
  let passed = false;

  if (challengeId === "greeting") {
    passed = cleanCode.includes("name") && cleanCode.includes("print") && cleanOutput.includes("player");
  } else if (challengeId === "score-calculator") {
    passed = cleanCode.includes("+") && cleanCode.includes("print");
  } else if (challengeId === "number-guessing") {
    passed = cleanCode.includes("if") && cleanCode.includes("guess") && cleanCode.includes("secret");
  } else if (challengeId === "countdown") {
    passed = cleanCode.includes("for") && cleanCode.includes("range") && cleanCode.includes("print");
  }

  if (passed) {
    completeChallenge();
  }
}

function handleWorkerError(event) {
  clearPythonTimeout();
  pythonReady = false;
  outputStatus.textContent = "Error";
  codeOutput.textContent = event.message || "The Python environment encountered an error.";
  finishRunning();
}


// ==========================================
// Pygame Execution & Communication Logic
// ==========================================

function handlePygameMessage(event) {
  const data = event.data;
  if (!data) return;

  if (data.type === "pygame-ready") {
    outputStatus.textContent = "Pygame";
    pygameStatus.textContent = "Running";
    codeOutput.textContent =
      "Pygame is running in the preview.\n\nUse the preview to interact with your program.";

    if (pendingPygameCode && pygameFrame && pygameFrame.contentWindow) {
      pygameFrame.contentWindow.postMessage({
        type: "run-pygame",
        code: pendingPygameCode
      }, "*");
      pendingPygameCode = null;
    }
    return;
  }

  if (data.type === "pygame-complete") {
    outputStatus.textContent = "Complete";
    codeOutput.textContent = "Pygame program finished.";
    pygameStatus.textContent = "Finished";

    if (isChallenge) {
      checkPygameChallenge(getEditorCode());
    }

    pygameRunning = false;
    finishRunning();
    return;
  }

  if (data.type === "pygame-error") {
    outputStatus.textContent = "Error";
    codeOutput.textContent = data.error;
    pygameRunning = false;
    hidePygamePreview();
    finishRunning();
  }
}

window.addEventListener("message", handlePygameMessage);

function checkPygameChallenge(code) {
  if (!isChallenge) return;

  const cleanCode = code.toLowerCase();
  let passed = false;

  if (challengeId === "player-movement") {
    passed =
      cleanCode.includes("pygame.key.get_pressed") &&
      cleanCode.includes("player_x") &&
      cleanCode.includes("player_y") &&
      cleanCode.includes("pygame.draw");
  } else if (challengeId === "game-loop") {
    passed =
      cleanCode.includes("pygame.event.get") &&
      cleanCode.includes("pygame.display.flip") &&
      cleanCode.includes("clock.tick");
  }

  if (passed) {
    completeChallenge();
  }
}

function showPygamePreview() {
  if (!pygamePreview) return;
  pygamePreview.hidden = false;

  if (pygameStatus) {
    pygameStatus.textContent = "Loading...";
  }

  pygamePreview.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function hidePygamePreview() {
  if (!pygamePreview) return;
  pygamePreview.hidden = true;

  if (pygameStatus) {
    pygameStatus.textContent = "Ready";
  }
}

function runPygame(code) {
  if (!pygameFrame) return;

  pygameRunning = true;
  pendingPygameCode = code;

  showPygamePreview();
  outputStatus.textContent = "Loading";
  codeOutput.textContent = "Starting the Pygame environment...";

  pygameFrame.src = "js/pygame-runner.html?v=" + Date.now();
  pygameFrame.onload = null;
}


// ==========================================
// Code Runner Control Actions
// ==========================================

function runCode() {
  if (!codeEditor || !runButton || pythonRunning) return;

  const code = getEditorCode();
  const usesPygame = code.includes("import pygame") || code.includes("from pygame");

  if (usesPygame) {
    if (pygameRunning) return;

    pythonRunning = true;
    runButton.disabled = true;
    runButton.textContent = "Running...";

    runPygame(code);
    return;
  }

  const worker = createPythonWorker();
  if (!worker) return;

  if (!pythonReady) {
    outputStatus.textContent = "Loading";
    codeOutput.textContent = "Python is still loading. Please wait a moment.";
    return;
  }

  pythonRunning = true;
  runButton.disabled = true;
  runButton.textContent = "Running...";
  outputStatus.textContent = "Running";
  codeOutput.textContent = "";

  hidePygamePreview();
  startPythonTimeout();

  worker.postMessage({ type: "run", code: code });
}

function finishRunning() {
  pythonRunning = false;
  if (runButton) {
    runButton.disabled = false;
    runButton.textContent = "Run Code";
  }
}

function clearCode() {
  if (!codeMirror) return;

  codeMirror.setValue("");
  codeOutput.textContent = "Run your code to see the output here.";
  outputStatus.textContent = "Ready";

  stopPygame();
}

function resetCode() {
  if (!codeMirror) return;

  codeMirror.setValue(startingCode);
  codeOutput.textContent = "Run your code to see the output here.";
  outputStatus.textContent = "Ready";

  stopPygame();
}

function stopPygame() {
  if (!pygameRunning) return;

  pygameRunning = false;
  pendingPygameCode = null;
  pygameFrame.src = "about:blank";

  hidePygamePreview();
  outputStatus.textContent = "Stopped";
  codeOutput.textContent = "Pygame program stopped.";

  finishRunning();
}


// ==========================================
// Event Listeners
// ==========================================

if (runButton) runButton.addEventListener("click", runCode);
if (clearButton) clearButton.addEventListener("click", clearCode);
if (resetButton) resetButton.addEventListener("click", resetCode);
if (pygameStopButton) pygameStopButton.addEventListener("click", stopPygame);
