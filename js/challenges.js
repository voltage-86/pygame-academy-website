// ==========================================
// Challenges Page Logic
// ==========================================

// Get elements for filters and cards
const challengeFilters = document.querySelectorAll(".challenge-filter");
const challengeCards = document.querySelectorAll(".challenge-card");
const challengeEmpty = document.querySelector("#challenge-empty");

// Load completed challenge IDs saved in localStorage
const completedChallenges = JSON.parse(
  localStorage.getItem("pygame-academy-completed-challenges") || "[]"
);

// Check saved progress and update card buttons/badges
function updateChallengeStatus() {
  challengeCards.forEach((card) => {
    const challengeId = card.dataset.challenge;
    const button = card.querySelector(".challenge-button");
    const status = card.querySelector(".challenge-status");

    if (completedChallenges.includes(challengeId)) {
      card.classList.add("completed");

      if (status) {
        status.textContent = "COMPLETED";
      }

      if (button) {
        button.textContent = "✓ Completed";
        button.classList.add("completed");
      }
    } else {
      card.classList.remove("completed");

      if (status) {
        status.textContent = "NOT STARTED";
      }
    }
  });
}

// Show or hide cards based on selected filter category
function filterChallenges(category) {
  let visibleChallenges = 0;

  challengeCards.forEach((card) => {
    const categories = (card.dataset.category || "")
      .split(" ")
      .filter(Boolean);

    const showCard = category === "all" || categories.includes(category);

    card.hidden = !showCard;

    if (showCard) {
      visibleChallenges++;
    }
  });

  // Show empty state message if no cards match the filter
  if (challengeEmpty) {
    challengeEmpty.hidden = visibleChallenges > 0;
  }
}

// Set up click events on filter buttons
challengeFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;

    // Toggle active class and accessibility state for filter buttons
    challengeFilters.forEach((button) => {
      const isActive = button === filter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    filterChallenges(category);
  });
});

// Initialise status and filter on page load
updateChallengeStatus();
filterChallenges("all");
