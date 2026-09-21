/**
 * ==========================================================================
 * PRASHANT PORTFOLIO - JAVASCRIPT LOGIC & DATA CONFIGURATION
 * ==========================================================================
 */

// 1. Centralized Portfolio Configuration & Data
// Edit this configuration anytime to update portfolio content!
const PORTFOLIO_CONFIG = {
  profile: {
    name: "Prashant",
    role: "Software Engineer & Full-Stack Developer",
    email: "prashantyadav6400@gmail.com",
    location: "Global / Remote",
    github: "https://github.com/prashantyadav99",
    linkedin: "https://linkedin.com",
  },

  // Typewriter phrases displayed on the hero section
  typewriterPhrases: [
    "Intelligent Python Systems.",
    "Responsive Web Applications.",
    "Automated Data Pipelines.",
    "Clean & Scalable Code."
  ],

  // Skills & proficiencies categorized
  skills: [
    { name: "Python", category: "languages", level: "Advanced", percent: 92, icon: "🐍" },
    { name: "JavaScript (ES6+)", category: "languages", level: "Advanced", percent: 90, icon: "⚡" },
    { name: "HTML5 & CSS3", category: "frontend", level: "Advanced", percent: 95, icon: "🎨" },
    { name: "REST APIs & JSON", category: "backend", level: "Advanced", percent: 88, icon: "🔗" },
    { name: "Flask & FastAPI", category: "backend", level: "Proficient", percent: 85, icon: "🚀" },
    { name: "Node.js Basics", category: "backend", level: "Intermediate", percent: 78, icon: "🟢" },
    { name: "SQL & Databases", category: "backend", level: "Proficient", percent: 82, icon: "💾" },
    { name: "Git & GitHub", category: "tools", level: "Advanced", percent: 90, icon: "🐙" },
    { name: "Web Scraping / Automation", category: "tools", level: "Advanced", percent: 89, icon: "🤖" },
    { name: "Responsive UI/UX", category: "frontend", level: "Advanced", percent: 92, icon: "📱" },
    { name: "Linux / Shell Scripting", category: "tools", level: "Proficient", percent: 80, icon: "💻" },
    { name: "Data Structures & Algos", category: "languages", level: "Proficient", percent: 86, icon: "🧩" }
  ],

  // Featured Projects
  projects: [
    {
      id: "weather-assistant",
      title: "MausamGuard - Weather Assistant AI",
      category: "python",
      badge: "Python & Weather API",
      icon: "🌤️",
      description: "An intelligent meteorological application that retrieves real-time forecasts, monitors atmospheric conditions, and provides smart alerts using weather API integrations.",
      tags: ["Python", "Weather API", "Automation", "Real-Time Alerts"],
      demoUrl: "#",
      repoUrl: "https://github.com/krishnakant09/MausamGuard",
      features: [
        "Real-time meteorological data fetching via open weather APIs",
        "Automated alerts for severe weather patterns and rain warnings",
        "Configurable city profiles and temperature metric unit switching",
        "Modular object-oriented architecture for easy extensibility"
      ]
    },
    {
      id: "algo-suite",
      title: "Python Algorithmic Problem Solver",
      category: "python",
      badge: "Data Structures",
      icon: "⚡",
      description: "Comprehensive Python algorithmic suite solving complex problems, data structure operations, and computational challenges with efficiency benchmarks.",
      tags: ["Python 3", "Algorithms", "Data Structures", "Problem Solving"],
      demoUrl: "#",
      repoUrl: "https://github.com/prashantyadav99/python-program",
      features: [
        "Optimized solutions for sorting, searching, tree traversal, and dynamic programming",
        "Built-in benchmark timers measuring asymptotic time and space complexity",
        "Comprehensive unit test suite validating edge cases and input variations",
        "Clean, documented code structure designed for pedagogical clarity"
      ]
    },
    {
      id: "modern-portfolio",
      title: "Interactive Developer Portfolio",
      category: "web",
      badge: "Full-Stack Web",
      icon: "🚀",
      description: "A fast, accessible, responsive portfolio platform engineered with modern CSS glassmorphism, dynamic theme toggling, and interactive filtering components.",
      tags: ["HTML5", "Modern CSS", "JavaScript", "A11y", "Glassmorphism"],
      demoUrl: "#",
      repoUrl: "https://github.com/prashantyadav99/portfolio",
      features: [
        "Sub-second load times with zero heavy client framework bloat",
        "Dynamic theme switching with automatic system dark/light preference detection",
        "Mobile-first responsive architecture designed for all screen sizes",
        "Accessible dialog modals, keyboard navigation, and form validation"
      ]
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Insights Engine",
      category: "tools",
      badge: "Data Science",
      icon: "📊",
      description: "Comprehensive data exploratory analysis and automated analytics workflows extracting meaningful patterns from real-world datasets.",
      tags: ["Python", "Jupyter", "Pandas", "Data Analytics"],
      demoUrl: "#",
      repoUrl: "https://github.com/prashantyadav99/Data-Analytics-project",
      features: [
        "Data cleaning and transformation pipelines handling noisy datasets",
        "Statistical correlation analysis and exploratory visualization",
        "Export pipelines outputting clean summary metrics and charts",
        "Automated notebook workflows for reproducible research"
      ]
    }
  ],

  // Milestones / Experience timeline
  milestones: [
    {
      period: "2025 - Present",
      role: "Software Developer & Project Lead",
      place: "Independent Projects & Open Source",
      description: "Building production-grade tools, exploring modern web technologies, building Python automation scripts, and designing user-centric web applications."
    },
    {
      period: "2024 - 2025",
      role: "Full-Stack Engineering & Python Specialization",
      place: "Technical Deep Dive & Development",
      description: "Deepened mastery in Python algorithmic foundations, object-oriented software patterns, REST API integration, and modern frontend styling."
    },
    {
      period: "2023 - 2024",
      role: "Foundation & Computer Science Core",
      place: "Engineering Exploration",
      description: "Initiated software journey focusing on algorithms, problem-solving, clean code principles, version control workflows, and responsive interface design."
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

  modalTitle.textContent = `${project.icon} ${project.title}`;
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
