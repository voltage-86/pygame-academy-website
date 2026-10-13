// ==========================================
// Learning Path Progress Logic
// ==========================================

// Order of lessons in the course
const lessons = [
  "python-fundamentals",
  "conditions-loops",
  "functions",
  "introduction-to-pygame",
  "first-pygame-game"
];

// Load saved progress from local storage (or default to empty)
const savedProgress = JSON.parse(
  localStorage.getItem("pygameAcademyProgress")
) || { completed: [] };

// Update the progress bar, completion counts, and status message
function updateProgress() {
  const completedCount = savedProgress.completed.length;
  const percentage = Math.round((completedCount / lessons.length) * 100);

  const completedElement = document.querySelector("#lessons-completed");
  const percentageElement = document.querySelector("#learn-progress-percent");
  const progressFill = document.querySelector("#learn-progress-fill");
  const progressBar = document.querySelector(".learn-progress-card .progress-bar");
  const progressMessage = document.querySelector("#learn-progress-message");

  if (completedElement) {
    completedElement.textContent = completedCount;
  }

  if (percentageElement) {
    percentageElement.textContent = percentage;
  }

  if (progressFill) {
    progressFill.style.width = `${percentage}%`;
  }

  if (progressBar) {
    progressBar.setAttribute("aria-valuenow", percentage);
  }

  // Set message based on how many lessons are done
  if (progressMessage) {
    if (completedCount === 0) {
      progressMessage.textContent =
        "Start your learning journey by completing your first lesson.";
    } else if (completedCount === lessons.length) {
      progressMessage.textContent =
        "Learning path complete! You are ready to build your own games.";
    } else {
      progressMessage.textContent =
        "Keep going! Complete the next lesson to continue your journey.";
    }
  }
}

// Update card states
function updateLessonStates() {
  const lessonCards = document.querySelectorAll(".lesson-card");

  lessonCards.forEach((card) => {
    const lessonId = card.dataset.lessonId;
    const lessonNumber = Number(card.dataset.lessonNumber);

    const status = card.querySelector(".lesson-status");
    const button = card.querySelector(".lesson-button");

    const completed = savedProgress.completed.includes(lessonId);

    // First lesson is always unlocked, others require previous lesson done
    const previousLessonCompleted =
      lessonNumber === 1 ||
      savedProgress.completed.includes(lessons[lessonNumber - 2]);

    card.classList.remove(
      "lesson-card-active",
      "lesson-card-completed",
      "lesson-card-locked"
    );

    // If completed
    if (completed) {
      card.classList.add("lesson-card-completed");

      if (status) {
        status.textContent = "COMPLETE";
      }

      if (button) {
        button.textContent = "Review Lesson";
        button.classList.remove("button-secondary");
        button.classList.add("button-primary");
      }
      return;
    }

    // If unlocked and ready to start
    if (previousLessonCompleted) {
      card.classList.add("lesson-card-active");

      if (status) {
        status.textContent = "START";
      }

      if (button) {
        button.textContent = "Start Lesson";
        button.classList.remove("button-secondary");
        button.classList.add("button-primary");
      }
      return;
    }

    // If still locked
    card.classList.add("lesson-card-locked");

    if (status) {
      status.textContent = "LOCKED";
    }

    if (button) {
      button.textContent = "Locked";
      button.classList.remove("button-primary");
      button.classList.add("button-secondary");
    }
  });
}

// Save current progress back to local storage
function saveProgress() {
  localStorage.setItem(
    "pygameAcademyProgress",
    JSON.stringify(savedProgress)
  );
}

// Run initial updates when page loads
updateProgress();
updateLessonStates();
saveProgress();
