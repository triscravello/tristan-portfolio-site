# Tristan Portfolio Site

A personal portfolio website built with React showcasing my projects and experience.

## Live Demo
Visit the live site: [https://triscravello.github.io/tristan-portfolio-site/]

## Built With
- React 19
- React Router
- CSS3
- BootStrap 5

## Project Structure 
- `/src/components` - Reusable React components (Navbar, Footer, and ProjectCard)
- `/src/pages/` - Main page components (Home, About, Projects, Contact)
- `/src/assets/` - Images and static assets
- `/public/` - Public assets and HTML template

```
├── 📜 README.md
├── 🟨 eslint.config.js
├── 📄 index.html
├── 🗂️ package-lock.json
├── 🗂️ package.json
├── 📁 public
├── 📁 src
│ ├── 🎨 App.css
│ ├── 🟦 App.jsx
│ ├── 📁 assets
│ │ ├── 🖼️ react.svg
│ ├── 📁 components
│ │ ├── 🎨 Footer.css
│ │ ├── 🟦 Footer.jsx
│ │ ├── 🎨 Navbar.css
│ │ ├── 🟦 Navbar.jsx
│ │ ├── 🎨 ProjectCard.css
│ │ ├── 🟦 ProjectCard.jsx
│ ├── 📁 data
│ │ ├── 🟦 projectsData.jsx
│ ├── 🎨 index.css
│ ├── 🟦 main.jsx
│ ├── 📁 pages
│ │ ├── 🎨 About.css
│ │ ├── 🟦 About.jsx
│ │ ├── 🎨 Contact.css
│ │ ├── 🟦 Contact.jsx
│ │ ├── 🎨 Home.css
│ │ ├── 🟦 Home.jsx
│ │ ├── 🎨 Projects.css
│ │ ├── 🟦 Projects.jsx
├── 🟨 vite.config.js

```

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/triscravello/tristan-portfolio-site.git

# Navigate to project directory
cd tristan-portfolio-site

# Start development server
npm start
```

### Available Scripts
- `npm start` - Runs the app in development mode 
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to a GitHub Pages

## Deployment
This site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch. 
