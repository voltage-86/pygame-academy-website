// ==========================================
// Lesson Data
// ==========================================

const lessons = {
  "python-fundamentals": {
    number: "LESSON 1",
    title: "Python Fundamentals",
    description:
      "Learn the fundamentals of Python programming and build the foundation for creating games.",
    difficulty: "Beginner",
    duration: "~20 min",
    introductionTitle: "Welcome to Python",
    introduction: [
      "Python is a programming language designed to be readable and relatively easy to learn. It is used for everything from automation and websites to data science and game development.",
      "In this lesson, you will learn the basic concepts you need before moving on to game development with Pygame."
    ],
    concepts: [
      {
        title: "Variables",
        description:
          "Variables allow you to store information and use it later in your program.",
        code: `name = "Alex"\nscore = 100`
      },
      {
        title: "Data Types",
        description:
          "Python has different types of data, such as text, whole numbers, decimal numbers, and true or false values.",
        code: `name = "Alex"\nscore = 100\nspeed = 4.5\ngame_over = False`
      },
      {
        title: "Input and Output",
        description:
          "Programs can display information using print() and receive information from users using input().",
        code: `name = input("What is your name?")\n\nprint("Hello", name)`
      }
    ],
    exampleDescription:
      "Here is a simple example that combines some of the concepts from this lesson.",
    exampleCode: `name = "Player"\nscore = 0\n\nprint("Welcome,", name)\nprint("Score:", score)`,
    question:
      "Which Python function is used to display information in the console?",
    options: [
      { text: "input()", correct: false },
      { text: "print()", correct: true },
      { text: "display()", correct: false },
      { text: "output()", correct: false }
    ]
  },

  "conditions-loops": {
    number: "LESSON 2",
    title: "Conditions & Loops",
    description:
      "Control the flow of your programs using conditions and loops.",
    difficulty: "Beginner",
    duration: "~25 min",
    introductionTitle: "Making Decisions",
    introduction: [
      "Programs often need to make decisions based on information. Python uses conditional statements to determine which code should run.",
      "Loops also allow programs to repeat instructions without writing the same code over and over again."
    ],
    concepts: [
      {
        title: "If Statements",
        description:
          "An if statement runs a section of code when a condition is true.",
        code: `score = 100\n\nif score >= 100:\n  print("Level complete!")`
      },
      {
        title: "While Loops",
        description:
          "A while loop repeatedly runs code while a condition remains true.",
        code: `lives = 3\n\nwhile lives > 0:\n  print("You are still playing")\n  lives -= 1`
      },
      {
        title: "For Loops",
        description:
          "A for loop can repeat code for each item in a sequence or range.",
        code: `for number in range(5):\n  print(number)`
      }
    ],
    exampleDescription:
      "This example uses a condition and a loop to control what the program does.",
    exampleCode: `score = 0\n\nfor points in range(5):\n  score += 10\n\nif score >= 50:\n  print("Level complete!")`,
    question:
      "Which keyword is used to repeat code while a condition is true?",
    options: [
      { text: "if", correct: false },
      { text: "for", correct: false },
      { text: "while", correct: true },
      { text: "repeat", correct: false }
    ]
  },

  "functions": {
    number: "LESSON 3",
    title: "Functions",
    description:
      "Organise your code with functions, parameters, return values, and reusable pieces of logic.",
    difficulty: "Beginner",
    duration: "~25 min",
    introductionTitle: "Reusable Code",
    introduction: [
      "As programs become larger, repeating the same code makes them harder to maintain. Functions allow you to group instructions into reusable blocks.",
      "Functions are especially useful in game development because many actions need to happen repeatedly."
    ],
    concepts: [
      {
        title: "Creating Functions",
        description:
          "Functions are created using the def keyword followed by a function name.",
        code: `def say_hello():\n  print("Hello!")`
      },
      {
        title: "Parameters",
        description:
          "Parameters allow information to be passed into a function.",
        code: `def greet(name):\n  print("Hello", name)\n\ngreet("Player")`
      },
      {
        title: "Return Values",
        description:
          "A function can return a value that the rest of the program can use.",
        code: `def add_score(score, points):\n  return score + points\n\nscore = add_score(50, 25)`
      }
    ],
    exampleDescription:
      "This example uses a function to calculate a player's new score.",
    exampleCode: `def add_score(score, points):\n  return score + points\n\nscore = 100\nscore = add_score(score, 50)\n\nprint(score)`,
    question:
      "Which keyword is used to create a function in Python?",
    options: [
      { text: "function", correct: false },
      { text: "def", correct: true },
      { text: "create", correct: false },
      { text: "func", correct: false }
    ]
  },

  "introduction-to-pygame": {
    number: "LESSON 4",
    title: "Introduction to Pygame",
    description:
      "Discover Pygame and learn how to create a game window, handle input, draw graphics, and run a game loop.",
    difficulty: "Intermediate",
    duration: "~30 min",
    introductionTitle: "What is Pygame?",
    introduction: [
      "Pygame is a Python library designed to make it easier to create games and other multimedia applications.",
      "It provides tools for graphics, sound, keyboard input, mouse input, and other features needed to build interactive games."
    ],
    concepts: [
      {
        title: "Creating a Window",
        description:
          "Pygame can create a window where your game will be displayed.",
        code: `import pygame\n\npygame.init()\n\nscreen = pygame.display.set_mode((800, 600))\npygame.display.set_caption("My Game")`
      },
      {
        title: "The Game Loop",
        description:
          "A game loop repeatedly checks for events, updates the game, and draws the current state.",
        code: `running = True\n\nwhile running:\n  for event in pygame.event.get():\n    if event.type == pygame.QUIT:\n      running = False`
      },
      {
        title: "Drawing Graphics",
        description:
          "Pygame can draw shapes and images onto the game window.",
        code: `pygame.draw.rect(\n  screen,\n  (255, 0, 0),\n  (100, 100, 50, 50)\n)`
      }
    ],
    exampleDescription:
      "This is a basic Pygame program that creates a window and keeps it running.",
    exampleCode: `import pygame\n\npygame.init()\n\nscreen = pygame.display.set_mode((800, 600))\nclock = pygame.time.Clock()\n\nrunning = True\n\nwhile running:\n  for event in pygame.event.get():\n    if event.type == pygame.QUIT:\n      running = False\n\n  pygame.display.flip()\n  clock.tick(60)\n\npygame.quit()`,
    question:
      "Which function creates a new Pygame display window?",
    options: [
      { text: "pygame.window()", correct: false },
      { text: "pygame.display.set_mode()", correct: true },
      { text: "pygame.create_screen()", correct: false },
      { text: "pygame.screen()", correct: false }
    ]
  },

  "first-pygame-game": {
    number: "LESSON 5",
    title: "Your First Pygame Game",
    description:
      "Put everything together and build your first complete game using the skills you have learned.",
    difficulty: "Intermediate",
    duration: "~40 min",
    introductionTitle: "Building Your First Game",
    introduction: [
      "You now have the Python and Pygame knowledge needed to start building a complete game.",
      "In this lesson, you will combine game loops, input, variables, conditions, functions, and graphics into a simple playable project."
    ],
    concepts: [
      {
        title: "Player Movement",
        description:
          "Keyboard input can be used to control a player's position on the screen.",
        code: `keys = pygame.key.get_pressed()\n\nif keys[pygame.K_LEFT]:\n  player_x -= 5\n\nif keys[pygame.K_RIGHT]:\n  player_x += 5`
      },
      {
        title: "Game Objects",
        description:
          "Variables can store information about objects such as their position, size, and speed.",
        code: `player_x = 400\nplayer_y = 300\nplayer_speed = 5`
      },
      {
        title: "Putting It Together",
        description:
          "A complete game combines input, updating, drawing, and a game loop.",
        code: `while running:\n  handle_input()\n  update_game()\n  draw_game()\n\n  pygame.display.flip()`
      }
    ],
    exampleDescription:
      "This example demonstrates the basic structure of a simple Pygame game.",
    exampleCode: `import pygame\n\npygame.init()\n\nscreen = pygame.display.set_mode((800, 600))\nclock = pygame.time.Clock()\n\nplayer_x = 400\nplayer_y = 300\n\nrunning = True\n\nwhile running:\n  for event in pygame.event.get():\n    if event.type == pygame.QUIT:\n      running = False\n\n  keys = pygame.key.get_pressed()\n\n  if keys[pygame.K_LEFT]:\n    player_x -= 5\n\n  if keys[pygame.K_RIGHT]:\n    player_x += 5\n\n  screen.fill((15, 17, 26))\n\n  pygame.draw.rect(\n    screen,\n    (139, 92, 246),\n    (player_x, player_y, 50, 50)\n  )\n\n  pygame.display.flip()\n  clock.tick(60)\n\npygame.quit()`,
    question:
      "Which part of a game is responsible for repeatedly updating and drawing the game?",
    options: [
      { text: "The game loop", correct: true },
      { text: "The title", correct: false },
      { text: "The import statement", correct: false },
      { text: "The window size", correct: false }
    ]
  }
};

// Get current lesson ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const lessonId = urlParams.get("id") || "python-fundamentals";
const currentLesson = lessons[lessonId] || lessons["python-fundamentals"];

// Load user completion data from localStorage
const progressKey = "pygameAcademyProgress";
const savedProgress = JSON.parse(
  localStorage.getItem(progressKey)
) || { completed: [] };


// ==========================================
// Helper Functions
// ==========================================

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify(savedProgress));
}


// ==========================================
// Load Lesson Content
// ==========================================

function loadLesson() {
  // Fill in header details
  setText("#lesson-number", currentLesson.number);
  setText("#lesson-title", currentLesson.title);
  setText("#lesson-description", currentLesson.description);
  setText("#lesson-difficulty", currentLesson.difficulty);
  setText("#lesson-duration", currentLesson.duration);

  // Fill in introduction text
  setText("#content-introduction-title", currentLesson.introductionTitle);

  const introduction = document.querySelector("#content-introduction");
  if (introduction) {
    introduction.innerHTML = "";
    currentLesson.introduction.forEach((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      introduction.appendChild(element);
    });
  }

  // Generate concept blocks
  const conceptContent = document.querySelector("#concept-content");
  if (conceptContent) {
    conceptContent.innerHTML = "";
    currentLesson.concepts.forEach((concept) => {
      const block = document.createElement("div");
      block.className = "concept-block";

      const heading = document.createElement("h3");
      heading.textContent = concept.title;

      const paragraph = document.createElement("p");
      paragraph.textContent = concept.description;

      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.textContent = concept.code;

      pre.appendChild(code);
      block.appendChild(heading);
      block.appendChild(paragraph);
      block.appendChild(pre);

      conceptContent.appendChild(block);
    });
  }

  // Set example section code and button
  setText("#example-description", currentLesson.exampleDescription);
  setText("#lesson-example-code", currentLesson.exampleCode);

  const tryItButton = document.querySelector("#try-it-button");
  if (tryItButton) {
    tryItButton.href = `tryityourself.html?example=${lessonId}`;
  }

  loadPracticeQuestion();
}


// ==========================================
// Practice Quiz Question
// ==========================================

function loadPracticeQuestion() {
  const question = document.querySelector(".practice-question");
  const optionsContainer = document.querySelector(".practice-options");

  if (!question || !optionsContainer) {
    return;
  }

  question.textContent = currentLesson.question;
  optionsContainer.innerHTML = "";

  // Render option buttons
  currentLesson.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "practice-option";
    button.textContent = option.text;
    button.dataset.correct = option.correct;

    optionsContainer.appendChild(button);
  });

  const feedback = document.querySelector(".practice-feedback");

  // Handle option click events
  optionsContainer.querySelectorAll(".practice-option").forEach((button) => {
    button.addEventListener("click", () => {
      const correct = button.dataset.correct === "true";

      optionsContainer.querySelectorAll(".practice-option").forEach((optionButton) => {
        optionButton.classList.remove("correct", "incorrect");
      });

      if (correct) {
        button.classList.add("correct");
        if (feedback) {
          feedback.textContent = "Correct! Nice work.";
        }
      } else {
        button.classList.add("incorrect");
        if (feedback) {
          feedback.textContent = "Not quite. Try again.";
        }
      }
    });
  });
}


// ==========================================
// Copy Code Button Logic
// ==========================================

const copyButton = document.querySelector(".copy-code-button");
const exampleCode = document.querySelector("#lesson-example-code");
const copyMessage = document.querySelector(".code-copy-message");

if (copyButton && exampleCode) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(exampleCode.textContent);
      copyButton.textContent = "Copied!";

      if (copyMessage) {
        copyMessage.textContent = "Code copied to your clipboard.";
      }

      setTimeout(() => {
        copyButton.textContent = "Copy";
        if (copyMessage) {
          copyMessage.textContent = "";
        }
      }, 2000);
    } catch {
      if (copyMessage) {
        copyMessage.textContent = "Unable to copy the code automatically.";
      }
    }
  });
}


// ==========================================
// Lesson Completion & Navigation
// ==========================================

const completeButton = document.querySelector("#complete-lesson-button");
const completionMessage = document.querySelector("#completion-message");
const nextLessonButton = document.querySelector("#next-lesson-button");

const lessonIds = [
  "python-fundamentals",
  "conditions-loops",
  "functions",
  "introduction-to-pygame",
  "first-pygame-game"
];

const currentIndex = lessonIds.indexOf(lessonId);
const previousLessonId = lessonIds[currentIndex - 1];
const nextLessonId = lessonIds[currentIndex + 1];

// Stop users from opening locked lessons directly from the URL
if (currentIndex > 0 && !savedProgress.completed.includes(previousLessonId)) {
  window.location.href = "learn.html";
}

// Update complete button and completion message based on state
function updateLessonUI() {
  const isCompleted = savedProgress.completed.includes(lessonId);

  if (completeButton) {
    completeButton.textContent = isCompleted ? "Lesson Complete" : "Complete Lesson";
    completeButton.disabled = isCompleted;
  }

  if (completionMessage && isCompleted) {
    completionMessage.textContent = "Lesson complete! You earned 100 XP.";
  }
}

// Save completion when user clicks button
if (completeButton) {
  completeButton.addEventListener("click", () => {
    if (!savedProgress.completed.includes(lessonId)) {
      savedProgress.completed.push(lessonId);
      saveProgress();
      updateLessonUI();
    }
  });
}

// Handle next lesson button link and lock check
if (nextLessonButton) {
  if (nextLessonId) {
    nextLessonButton.href = `lesson.html?id=${nextLessonId}`;

    nextLessonButton.addEventListener("click", (event) => {
      if (!savedProgress.completed.includes(lessonId)) {
        event.preventDefault();

        if (completionMessage) {
          completionMessage.textContent =
            "Complete this lesson before moving to the next one.";
        }

        document.querySelector("#complete")?.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  } else {
    nextLessonButton.href = "learn.html";
    nextLessonButton.textContent = "Back to Learning Path";
  }
}


// ==========================================
// Sidebar Active Link Highlight
// ==========================================

const contentLinks = document.querySelectorAll(".content-nav-link");

contentLinks.forEach((link) => {
  link.addEventListener("click", () => {
    contentLinks.forEach((item) => {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});


// ==========================================
// Initial Setup
// ==========================================

updateLessonUI();
loadLesson();
