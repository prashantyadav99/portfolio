/**
 * Portfolio Data & State Management
 * Prashant Yadav | Software Developer
 */

const PORTFOLIO_CONFIG = {
  profile: {
    name: "Prashant Yadav",
    role: "Software Developer",
    email: "prashantyadav6400@gmail.com",
    location: "India",
    github: "https://github.com/prashantyadav99",
    linkedin: "https://linkedin.com",
  },

  // Typewriter phrases for hero subtitle
  typewriterPhrases: [
    "Python & FastAPI backends.",
    "real-time data platforms.",
    "analytics & predictive models.",
    "fast, responsive web interfaces."
  ],

  // Skills & proficiencies categorized
  skills: [
    { 
      name: "Python", 
      category: "languages", 
      level: "Core Proficiency", 
      percent: 92, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.804v.826H3.88S0 5.78 0 11.905c0 6.124 3.396 5.922 3.396 5.922h2.028v-2.853s-.11-3.396 3.342-3.396h5.753v-.853H8.765s-2.853.11-2.853-2.744c0-2.853 2.502-2.744 2.502-2.744h8.344S21.6 4.935 21.6 10.985v.852H14.58s-3.342-.11-3.342 3.396v2.853h2.028s3.396.202 3.396-5.922c0-6.125-4.748-6.16-4.748-6.16h-5.804V2.656S6.008 0 11.914 0z"/></svg>`
    },
    { 
      name: "FastAPI & Flask", 
      category: "backend", 
      level: "Backend Frameworks", 
      percent: 88, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
    },
    { 
      name: "Pandas & Jupyter", 
      category: "backend", 
      level: "Data Analytics", 
      percent: 86, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
    },
    { 
      name: "JavaScript (ES6+)", 
      category: "languages", 
      level: "Modern JS", 
      percent: 85, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.621-1.797-1.025-.112-.19-.136-.377-.136-.508 0-.44.298-.797.947-.946.438-.1 1.099-.074 1.79.358.33.208.563.486.685.748l1.79-1.127c-.367-.655-.916-1.196-1.637-1.547-.84-.408-1.849-.553-2.735-.458-1.546.166-2.589 1.01-2.857 2.215-.365 1.638.644 2.825 2.502 3.567.892.358 1.488.665 1.684.996.115.195.143.435.097.682-.131.697-.832 1.077-1.821 1.042-.947-.034-1.611-.476-2.062-1.037l-1.868 1.155c.621 1.074 1.666 1.838 2.868 2.083 1.942.395 3.753-.338 4.29-1.921.035-.104.053-.207.053-.314l-.001-.002.001-.002zm-8.324-7.234v8.835h-2.316v-8.835h2.316z"/></svg>`
    },
    { 
      name: "HTML5 & Modern CSS", 
      category: "frontend", 
      level: "Semantic & Responsive", 
      percent: 92, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
    },
    { 
      name: "SQL & Relational DBs", 
      category: "backend", 
      level: "Database Queries", 
      percent: 82, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`
    },
    { 
      name: "Git & GitHub", 
      category: "tools", 
      level: "Version Control", 
      percent: 90, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
    },
    { 
      name: "Docker & Compose", 
      category: "tools", 
      level: "Containerization", 
      percent: 78, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`
    },
    { 
      name: "Linux & Bash", 
      category: "tools", 
      level: "Shell & Environment", 
      percent: 82, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`
    },
    { 
      name: "WebSockets & REST", 
      category: "backend", 
      level: "Real-Time Protocols", 
      percent: 85, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`
    },
    { 
      name: "Algorithms & DSA", 
      category: "languages", 
      level: "Problem Solving", 
      percent: 87, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
    },
    { 
      name: "UI/UX & Accessibility", 
      category: "frontend", 
      level: "Modern Standards", 
      percent: 89, 
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "automation-pipeline",
      title: "Automated Data Ingestion & Pipeline Engine",
      category: "python",
      badge: "Python & Automation",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
      description: "Python-based automated data extraction pipeline for fetching records from REST endpoints, parsing structured JSON payloads, and generating clean normalized datasets.",
      tags: ["Python 3", "REST APIs", "Automation", "JSON Processing", "Data Pipelines"],
      demoUrl: "https://github.com/prashantyadav99/python-program",
      repoUrl: "https://github.com/prashantyadav99/python-program",
      features: [
        "Automated API data ingestion with custom error handling and retry logic",
        "Data normalization pipelines formatting records into structured CSV and JSON feeds",
        "Modular utility architecture for recurring script execution and automation",
        "Configurable CLI options and environment-driven parameterization"
      ]
    },
    {
      id: "customer-analytics",
      title: "Customer Segmentation & Predictive Analytics",
      category: "data",
      badge: "Data Science & ML",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
      description: "Exploratory data analysis and clustering engine analyzing customer transaction histories. Includes automated data cleaning pipelines for noisy historical records, RFM segmentation, and an interactive sales dashboard.",
      tags: ["Python", "Pandas", "Jupyter", "Machine Learning", "Data Viz"],
      demoUrl: "https://github.com/prashantyadav99/Data-Analytics-project",
      repoUrl: "https://github.com/prashantyadav99/Data-Analytics-project",
      features: [
        "Data cleaning pipeline handling null imputation, type coercion, and outlier removal",
        "K-Means and RFM (Recency, Frequency, Monetary) clustering for customer cohort analysis",
        "Predictive modeling identifying customer churn likelihood and revenue drivers",
        "Standalone interactive HTML sales dashboard visualizing analytical findings"
      ]
    },
    {
      id: "python-algo-suite",
      title: "Python Data Structures & Algorithm Suite",
      category: "python",
      badge: "CS Fundamentals",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      description: "Structured repository of fundamental algorithms, custom data structure implementations, and computational problem solutions with asymptotic complexity analysis and benchmarking.",
      tags: ["Python 3", "Data Structures", "Algorithms", "Optimization", "Testing"],
      demoUrl: "https://github.com/prashantyadav99/python-program",
      repoUrl: "https://github.com/prashantyadav99/python-program",
      features: [
        "Optimized implementations of sorting, tree traversals, graphs, and dynamic programming",
        "Execution benchmark utilities measuring asymptotic time and space performance",
        "Modular object-oriented architecture designed for clean extensibility",
        "Comprehensive unit tests validating edge cases and input variations"
      ]
    },
    {
      id: "developer-portfolio",
      title: "Personal Developer Portfolio & Showcase",
      category: "web",
      badge: "Web Engineering",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
      description: "Fast, accessible developer portfolio website engineered using pure web standards without heavy runtime frameworks. Features modern CSS glassmorphism, dynamic theme toggling, and automated CI/CD deployment.",
      tags: ["HTML5", "Modern CSS", "JavaScript", "GitHub Actions", "GitHub Pages"],
      demoUrl: "https://prashantyadav99.github.io/portfolio/",
      repoUrl: "https://github.com/prashantyadav99/portfolio",
      features: [
        "Pure vanilla web stack delivering sub-second load times and zero dependency bloat",
        "System-aware dark and light mode toggle with local storage persistence",
        "Semantic HTML5 and accessible dialog modals for project specifications",
        "Automated GitHub Actions workflow deploying to GitHub Pages on git push"
      ]
    }
  ],

  // Milestones & Journey
  milestones: [
    {
      period: "2025 - Present",
      role: "Backend & Full-Stack Development",
      place: "Independent Projects & Open Source",
      description: "Developing Python backend services, working with REST APIs, automating data workflows, and building responsive web interfaces."
    },
    {
      period: "2024 - 2025",
      role: "Data Analytics & Machine Learning Projects",
      place: "Applied Project Work",
      description: "Developed customer segmentation clustering models, data transformation notebooks, and predictive analytics pipelines using Python and Pandas."
    },
    {
      period: "2023 - 2024",
      role: "Computer Science Foundations & Problem Solving",
      place: "Core Studies & Development",
      description: "Built strong foundations in data structures, algorithms, object-oriented programming in Python, Linux tooling, and web development fundamentals."
    }
  ]
};

// 2. Initialization on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypewriter();
  initNavigation();
  renderSkills("all");
  renderProjects("all");
  renderTimeline();
  initFilters();
  initContactForm();
  initCopyEmail();
  initProjectModal();
  initBackToTop();
  updateCopyrightYear();
});

// 3. Theme Management (Dark / Light Mode)
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Retrieve saved preference or check system preference
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  htmlElement.setAttribute("data-theme", initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      htmlElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  }
}

// 4. Typewriter Effect
function initTypewriter() {
  const typewriterElem = document.getElementById("typewriter-text");
  if (!typewriterElem) return;

  const phrases = PORTFOLIO_CONFIG.typewriterPhrases;
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const pauseEnd = 1800;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterElem.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElem.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delta = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      delta = pauseEnd;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delta = 400;
    }

    setTimeout(type, delta);
  }

  type();
}

// 5. Navigation & Mobile Drawer
function initNavigation() {
  const mobileToggleBtn = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileToggleBtn.classList.toggle("active");
      mobileToggleBtn.setAttribute("aria-expanded", isOpen);
      mobileDrawer.setAttribute("aria-hidden", !isOpen);
    });

    // Close drawer when any mobile link is clicked
    document.querySelectorAll(".mobile-nav-link, .mobile-drawer-cta a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        mobileToggleBtn.classList.remove("active");
        mobileToggleBtn.setAttribute("aria-expanded", "false");
        mobileDrawer.setAttribute("aria-hidden", "true");
      });
    });
  }

  // Active section indicator on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

// 6. Skills Rendering & Filtering
function renderSkills(filter = "all") {
  const container = document.getElementById("skills-container");
  if (!container) return;

  const filteredSkills = filter === "all"
    ? PORTFOLIO_CONFIG.skills
    : PORTFOLIO_CONFIG.skills.filter(s => s.category === filter);

  container.innerHTML = filteredSkills.map(skill => `
    <div class="skill-card glass-card">
      <div class="skill-icon-wrap" aria-hidden="true">${skill.icon}</div>
      <div class="skill-meta">
        <h4>${skill.name}</h4>
        <span class="skill-level-text">${skill.level}</span>
        <div class="skill-bar" aria-label="Skill proficiency ${skill.percent}%">
          <div class="skill-progress" style="width: ${skill.percent}%;"></div>
        </div>
      </div>
    </div>
  `).join("");
}

// 7. Projects Rendering & Filtering
function renderProjects(filter = "all") {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const filteredProjects = filter === "all"
    ? PORTFOLIO_CONFIG.projects
    : PORTFOLIO_CONFIG.projects.filter(p => p.category === filter);

  container.innerHTML = filteredProjects.map(project => `
    <article class="project-card glass-panel" data-id="${project.id}">
      <div class="project-card-header">
        <span class="project-icon" aria-hidden="true">${project.icon}</span>
        <span class="project-badge">${project.badge}</span>
      </div>
      <div class="project-card-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="project-card-footer">
        <div class="project-links">
          <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link" title="View Source Code">
            <span>Code</span> &rarr;
          </a>
        </div>
        <button class="project-details-btn" data-project-id="${project.id}">
          Details &amp; Specs
        </button>
      </div>
    </article>
  `).join("");

  // Attach modal triggers to project cards
  document.querySelectorAll(".project-details-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project-id");
      openProjectModal(projectId);
    });
  });
}

// 8. Experience / Milestones Rendering
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_CONFIG.milestones.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-content glass-card">
        <div class="timeline-header">
          <h3 class="timeline-role">${item.role}</h3>
          <span class="timeline-period">${item.period}</span>
        </div>
        <div class="timeline-place">${item.place}</div>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join("");
}

// 9. Filter Controls Interaction
function initFilters() {
  // Skill Filters
  const skillBtns = document.querySelectorAll("[data-skill-filter]");
  skillBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      skillBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-skill-filter");
      renderSkills(category);
    });
  });

  // Project Filters
  const projectBtns = document.querySelectorAll("[data-project-filter]");
  projectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      projectBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-project-filter");
      renderProjects(category);
    });
  });
}

// 10. Project Modal Handling
function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.close();
  });

  // Close when clicking modal backdrop
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

  const project = PORTFOLIO_CONFIG.projects.find(p => p.id === projectId);
  if (!modal || !project) return;

  modalTitle.innerHTML = `<span class="modal-title-icon" style="display:inline-flex; vertical-align:middle; margin-right:8px; color:var(--accent-primary);">${project.icon}</span><span>${project.title}</span>`;
  modalBody.innerHTML = `
    <p>${project.description}</p>
    <h4 style="margin-bottom: 0.75rem; font-size: 1.1rem;">Key Highlights & Architecture:</h4>
    <ul class="modal-features-list">
      ${project.features.map(f => `<li>${f}</li>`).join("")}
    </ul>
    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem; font-size: 0.95rem; color: var(--text-muted);">Technologies Used:</h4>
      <div class="project-tags">
        ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
      </div>
    </div>
    <div class="modal-footer">
      <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        View on GitHub &rarr;
      </a>
      <button class="btn btn-secondary btn-sm" onclick="document.getElementById('project-modal').close()">
        Close
      </button>
    </div>
  `;

  modal.showModal();
}

// 11. Contact Form Validation & Submission
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("submit-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset error messages
    clearErrors();

    // Validate Name
    if (!nameInput.value.trim()) {
      showError("name-error", nameInput, "Please enter your name.");
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError("email-error", emailInput, "Please enter your email.");
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      showError("email-error", emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showError("subject-error", subjectInput, "Please enter a subject.");
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError("message-error", messageInput, "Please enter your message.");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError("message-error", messageInput, "Message should be at least 10 characters long.");
      isValid = false;
    }

    if (!isValid) return;

    // Simulate sending state
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
      form.reset();
      showToast("Thank you! Your message has been sent successfully.");
    }, 1000);
  });

  function showError(errorId, inputElem, message) {
    const errorElem = document.getElementById(errorId);
    if (errorElem) errorElem.textContent = message;
    if (inputElem) inputElem.classList.add("error");
  }

  function clearErrors() {
    document.querySelectorAll(".field-error").forEach(el => el.textContent = "");
    document.querySelectorAll(".form-input").forEach(el => el.classList.remove("error"));
  }

  // Clear errors dynamically on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener("input", () => {
      input.classList.remove("error");
      const errElem = document.getElementById(`${input.id}-error`);
      if (errElem) errElem.textContent = "";
    });
  });
}

// 12. Copy Email Button
function initCopyEmail() {
  const copyBtn = document.getElementById("copy-email-btn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    const email = PORTFOLIO_CONFIG.profile.email;
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`);
    }).catch(() => {
      showToast("Failed to copy. Please copy manually.");
    });
  });
}

// 13. Toast Notification helper
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// 14. Scroll to Top Button
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// 15. Copyright Year
function updateCopyrightYear() {
  const yearElem = document.getElementById("current-year");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}
