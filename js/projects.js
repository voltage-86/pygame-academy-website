// ==========================================
// Projects Page Logic
// ==========================================

const projectFilters = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card");
const projectEmpty = document.querySelector("#project-empty");

// Load project progress saved in localStorage
const projectProgressKey = "pygame-academy-project-progress";
const projectProgress = JSON.parse(
  localStorage.getItem(projectProgressKey) || "{}"
);

// Update status badges and button text for each project card
function updateProjectStatus() {
  projectCards.forEach((card) => {
    const projectId = card.dataset.project;
    const status = card.querySelector(".project-status");
    const button = card.querySelector(".project-button");

    if (projectProgress[projectId] === "completed") {
      card.classList.add("completed");
      card.classList.remove("started");

      if (status) {
        status.textContent = "COMPLETED";
      }

      if (button) {
        button.textContent = "✓ Completed";
        button.classList.add("completed");
      }
    } else if (projectProgress[projectId] === "started") {
      card.classList.add("started");
      card.classList.remove("completed");

      if (status) {
        status.textContent = "IN PROGRESS";
      }

      if (button) {
        button.innerHTML = `
          Continue Project
          <span aria-hidden="true">→</span>
        `;
        button.classList.remove("completed");
      }
    } else {
      card.classList.remove("completed", "started");

      if (status) {
        status.textContent = "NOT STARTED";
      }

      if (button) {
        button.innerHTML = `
          Start Project
          <span aria-hidden="true">→</span>
        `;
        button.classList.remove("completed");
      }
    }
  });
}

// Mark project as started when user opens it
function startProject(projectId) {
  if (projectProgress[projectId] !== "completed") {
    projectProgress[projectId] = "started";
    localStorage.setItem(
      projectProgressKey,
      JSON.stringify(projectProgress)
    );
  }
}

// Show/hide projects based on the chosen category tab
function filterProjects(category) {
  let visibleProjects = 0;

  projectCards.forEach((card) => {
    const projectCategory = card.dataset.category;
    const showCard = category === "all" || projectCategory === category;

    card.hidden = !showCard;

    if (showCard) {
      visibleProjects++;
    }
  });

  // Display empty state box if no projects match current filter
  if (projectEmpty) {
    projectEmpty.hidden = visibleProjects > 0;
  }
}

// Handle clicking on category filter buttons
projectFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;

    projectFilters.forEach((button) => {
      const isActive = button === filter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    filterProjects(category);
  });
});

// Add click listeners to project action buttons
projectCards.forEach((card) => {
  const projectId = card.dataset.project;
  const button = card.querySelector(".project-button");

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    startProject(projectId);
    updateProjectStatus();
  });
});

// Run initial status update and filter set to 'all' on page load
updateProjectStatus();
filterProjects("all");
