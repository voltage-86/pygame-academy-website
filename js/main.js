// ==========================================
// Mobile Navigation
// ==========================================

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");

// Functions to toggle mobile navbar drawer
function openMobileMenu() {
  mobileMenu.classList.add("open");
  menuButton.setAttribute("aria-expanded", "true");
  mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}

// Open and close button listeners
if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", openMobileMenu);
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener("click", closeMobileMenu);
}

// Close mobile menu when a navigation link inside is clicked
if (mobileMenu) {
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

// Close menu if pressing Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu?.classList.contains("open")) {
    closeMobileMenu();
  }
});


// ==========================================
// Homepage Progress & Level Tracking
// ==========================================

const playerLevelElement = document.querySelector("#player-level");

// Only run homepage calculations if the widget exists on the page
if (playerLevelElement) {

  // List of course lessons
  const lessonProgress = [
    {
      id: "python-fundamentals",
      title: "Python Fundamentals",
      description: "Start learning the basics of Python programming."
    },
    {
      id: "conditions-loops",
      title: "Conditions & Loops",
      description: "Learn how to control the flow of your programs."
    },
    {
      id: "functions",
      title: "Functions",
      description: "Organise your code with reusable functions."
    },
    {
      id: "introduction-to-pygame",
      title: "Introduction to Pygame",
      description: "Learn the fundamentals of creating games with Pygame."
    },
    {
      id: "first-pygame-game",
      title: "Your First Pygame Game",
      description: "Build your first complete game using Pygame."
    }
  ];

  // LocalStorage keys
  const homepageProgressKey = "pygameAcademyProgress";
  const challengeProgressKey = "pygame-academy-completed-challenges";
  const projectProgressKey = "pygame-academy-project-progress";

  // Saved user data
  const homepageProgress = JSON.parse(
    localStorage.getItem(homepageProgressKey)
  ) || { completed: [] };

  const completedChallenges = JSON.parse(
    localStorage.getItem(challengeProgressKey)
  ) || [];

  const projectProgress = JSON.parse(
    localStorage.getItem(projectProgressKey)
  ) || {};

  // XP values for challenges
  const challengeXp = {
    greeting: 50,
    "score-calculator": 75,
    "number-guessing": 100,
    countdown: 100,
    "player-movement": 150,
    "game-loop": 200
  };

  // XP values for completed projects
  const projectXp = {
    snake: 250,
    "space-shooter": 350,
    platformer: 350,
    adventure: 500
  };

  // Calculate user total combined XP across lessons, challenges, and projects
  function calculateTotalXp() {
    // 100 XP per lesson
    const completedLessons = homepageProgress.completed.filter((lessonId) =>
      lessonProgress.some((lesson) => lesson.id === lessonId)
    );
    const lessonXp = completedLessons.length * 100;

    // Challenge XP total
    const challengeXpTotal = completedChallenges.reduce(
      (total, challengeId) => total + (challengeXp[challengeId] || 0),
      0
    );

    // Project XP total
    const completedProjects = Object.keys(projectProgress).filter(
      (projectId) => projectProgress[projectId] === "completed"
    );

    const projectXpTotal = completedProjects.reduce(
      (total, projectId) => total + (projectXp[projectId] || 0),
      0
    );

    return lessonXp + challengeXpTotal + projectXpTotal;
  }

  // Update homepage UI cards, level display, and progress bar
  function updateHomepageProgress() {
    const totalXp = calculateTotalXp();
    const level = Math.floor(totalXp / 100) + 1;
    const currentLevelXp = totalXp % 100;
    const percentage = currentLevelXp;

    // Update level and XP counters
    const currentLevelElement = document.querySelector("#player-level");
    const currentXpElement = document.querySelector("#current-xp");
    const nextLevelXpElement = document.querySelector("#next-level-xp");

    if (currentLevelElement) {
      currentLevelElement.textContent = level;
    }

    if (currentXpElement) {
      currentXpElement.textContent = currentLevelXp;
    }

    if (nextLevelXpElement) {
      nextLevelXpElement.textContent = 100;
    }

    // Update XP progress bar
    const progressPercentElement = document.querySelector("#progress-percent");
    const progressFillElement = document.querySelector("#progress-bar-fill");
    const progressBarElement = document.querySelector(".progress-card .progress-bar");

    if (progressPercentElement) {
      progressPercentElement.textContent = percentage;
    }

    if (progressFillElement) {
      progressFillElement.style.width = `${percentage}%`;
    }

    if (progressBarElement) {
      progressBarElement.setAttribute("aria-valuenow", percentage);
    }

    // Find the next incomplete lesson
    const nextLesson = lessonProgress.find(
      (lesson) => !homepageProgress.completed.includes(lesson.id)
    );

    const currentLessonElement = document.querySelector("#current-lesson");
    const currentLessonDescriptionElement = document.querySelector(
      "#current-lesson-description"
    );
    const continueButton = document.querySelector("#continue-button");

    if (nextLesson) {
      if (currentLessonElement) {
        currentLessonElement.textContent = nextLesson.title;
      }

      if (currentLessonDescriptionElement) {
        currentLessonDescriptionElement.textContent = nextLesson.description;
      }

      if (continueButton) {
        continueButton.href = `lesson.html?id=${nextLesson.id}`;
        continueButton.textContent = "Continue Learning";
      }
    } else {
      // User has finished every lesson
      if (currentLessonElement) {
        currentLessonElement.textContent = "Learning Path Complete";
      }

      if (currentLessonDescriptionElement) {
        currentLessonDescriptionElement.textContent =
          "You have completed every lesson. Great work!";
      }

      if (continueButton) {
        continueButton.href = "learn.html";
        continueButton.textContent = "View Learning Path";
      }
    }
  }

  // Load stats on page start
  updateHomepageProgress();
}
