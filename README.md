# 🌐 My Portfolio

A personal portfolio website built with **React, JavaScript, Tailwind CSS, and Vite**.

The website showcases my web development projects, technical skills, and professional experience.

Designed as a responsive single-page application (SPA), it provides project presentations, video demonstrations, and links to GitHub repositories.

## 🔗 Live Website

[![Portfolio](https://img.shields.io/badge/VIEW_MY_PORTFOLIO-2563EB?style=for-the-badge&logo=react&logoColor=white)](https://monika464.github.io/Portfolio/)

## ✨ Features

- 📱 Responsive design using Tailwind CSS.
- 🧭 Client-side navigation with React Router.
- 🎬 Embedded project demonstrations using YouTube and Vimeo.
- 💻 Dedicated sections for projects and professional information.
- 🎨 React Icons for interface elements.
- ⚡ Fast development and optimized builds with Vite.
- 🚀 Deployment via GitHub Pages.

## 🛠️ Technologies

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=react&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

## ⚙️ Local Setup

### Prerequisites

- Node.js (LTS version recommended)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Monika464/Portfolio.git
```

Navigate to the project directory:

```bash
cd Portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |

## 🚀 Deployment

The website is deployed using **GitHub Pages**.

Vite is configured with the repository's base path:

```javascript
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react(), svgr],
  server: {
    port: 3000,
  },
});
```

React Router handles navigation between portfolio sections.

## 👩‍💻 Author

**Monika Kubianka — Full Stack Developer**

[![GitHub](https://img.shields.io/badge/GITHUB_PROFILE-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Monika464)

[![Portfolio](https://img.shields.io/badge/LIVE_WEBSITE-2563EB?style=for-the-badge&logo=react&logoColor=white)](https://monika464.github.io/Portfolio/)

---

© 2026 Monika Kubianka