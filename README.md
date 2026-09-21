# Prashant Yadav | Software Developer Portfolio

[![Live Website](https://img.shields.io/badge/Live%20Website-GitHub%20Pages-2ea44f?style=flat-square&logo=github)](https://prashantyadav99.github.io/portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-prashantyadav99%2Fportfolio-blue?style=flat-square&logo=github)](https://github.com/prashantyadav99/portfolio)

Personal developer portfolio website showcasing projects, backend engineering with Python & FastAPI, data analytics, and responsive web development. Built with clean semantic HTML5, modern CSS3, and vanilla JavaScript.

🌐 **Live URL**: [https://prashantyadav99.github.io/portfolio/](https://prashantyadav99.github.io/portfolio/)

---

## Features

- **Dark & Light Mode**: System theme detection with persistent local storage.
- **Featured Projects**: Highlights real-world systems including **Automated Data Ingestion & Pipeline Engine**, **Customer Segmentation Analytics**, and **Data Structures & Algorithms**.
- **Interactive Modals**: Accessible `<dialog>` popups detailing technical architecture and features.
- **Skills & Stack**: Filterable categories across languages, backends, data, and dev tools.
- **Contact Form**: Client-side validation, direct mailto fallback, and one-click email copying.
- **Performance**: Zero runtime framework dependencies, instant load speeds.
- **Responsive & Accessible**: Keyboard navigable, semantic markup, and mobile-friendly layout.

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
