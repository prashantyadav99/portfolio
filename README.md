# Prashant | Software Engineer & Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-success?style=for-the-badge&logo=github)](https://prashantyadav99.github.io/portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-prashantyadav99%2Fportfolio-blue?style=for-the-badge&logo=github)](https://github.com/prashantyadav99/portfolio)

A modern, responsive, and aesthetically stunning developer portfolio website built using **Vanilla HTML5**, **Modern CSS3 (Glassmorphism & Variables)**, and **ES6+ JavaScript**.

🌐 **Live Website**: [https://prashantyadav99.github.io/portfolio/](https://prashantyadav99.github.io/portfolio/)

---

## ✨ Features

- 🌓 **Dark & Light Mode**: Seamless theme switching with system auto-detection and persistent storage (`localStorage`).
- 💫 **Modern Aesthetics**: Glassmorphism with `backdrop-filter`, neon ambient glow orbs, and smooth micro-animations.
- ⚡ **Lightning Fast**: Zero heavy framework overhead, 100% pure vanilla web standards, instantaneous initial page loads.
- ⌨️ **Dynamic Hero Typewriter**: Animated typing headline highlighting core engineering skills.
- 🗂️ **Interactive Projects Showcase**: Categorized filter tabs with expandable project specification modals (`<dialog>`).
- 🛠️ **Skills & Tech Stack Grid**: Interactive category filters with visual proficiency indicators.
- ⏱️ **Milestones & Journey Timeline**: Sleek vertical experience path highlighting engineering growth.
- 📬 **Interactive Contact Form**: Client-side field validation, one-click email copying, and floating toast notifications.
- 📱 **Fully Responsive**: Flawless layout across smartphones, tablets, laptops, and ultra-wide displays.
- ♿ **Accessibility First**: Semantic HTML5 elements, ARIA labeling, keyboard focus management, and `prefers-reduced-motion` compliance.

---

## 🚀 Getting Started & Previewing Locally

Because the project is built with vanilla web technologies, you do not need to install any heavy dependencies.

### Option 1: Using Python's Built-in Server (Recommended)
From your terminal:
```bash
cd /Users/prashant/Prashant.Projects/portfolio
python3 -m http.server 8000
```
Open your browser and navigate to: `http://localhost:8000`

### Option 2: Using Node / npx
```bash
cd /Users/prashant/Prashant.Projects/portfolio
npx serve .
```

### Option 3: Direct File
You can also double-click `index.html` to open it in your default web browser.

---

## 🛠️ Customization Guide

All the core data is conveniently managed in one place inside [`script.js`](file:///Users/prashant/Prashant.Projects/portfolio/script.js):

### 1. Updating Personal Information & Socials
Open `script.js` and locate the `PORTFOLIO_CONFIG.profile` object:
```javascript
profile: {
  name: "Prashant",
  role: "Software Engineer & Full-Stack Developer",
  email: "your.email@example.com",
  location: "Your City / Remote",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
}
```

### 2. Adding or Editing Projects
In `PORTFOLIO_CONFIG.projects`, simply edit or add new project objects:
```javascript
{
  id: "my-project-id",
  title: "My Awesome Project",
  category: "python", // Options: "python", "web", "tools"
  badge: "Category Badge",
  icon: "🚀",
  description: "Brief summary of what the project does...",
  tags: ["Python", "Flask", "PostgreSQL"],
  demoUrl: "https://your-demo.com",
  repoUrl: "https://github.com/yourusername/repo",
  features: [
    "Feature point 1",
    "Feature point 2"
  ]
}
```

### 3. Adding or Updating Skills
In `PORTFOLIO_CONFIG.skills`:
```javascript
{ name: "FastAPI", category: "backend", level: "Advanced", percent: 90, icon: "⚡" }
```

### 4. Changing Theme Colors
Open [`style.css`](file:///Users/prashant/Prashant.Projects/portfolio/style.css) and customize the CSS custom properties at the top under `:root` and `[data-theme="light"]`.

---

## 🌐 Free Deployment Options

### 1. GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### 2. Vercel
1. Install Vercel CLI: `npm i -g vercel` or link your GitHub repo on [vercel.com](https://vercel.com).
2. Run `vercel` in the project directory.

### 3. Netlify
1. Drag and drop the `portfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. Your portfolio will be live in seconds.

---

## 📄 License
MIT License. Free to use, adapt, and build upon.
