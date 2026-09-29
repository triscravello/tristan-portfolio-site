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
├── 📁 dist
│ ├── 📁 assets
│ │ ├── 🖼️ AISecurityScannerPython-BFtcf8xt.webp
│ │ ├── 🖼️ AWSSecurityMonitoring-DoISUugv.webp
│ │ ├── 🖼️ AutomateCICDforEKS-CX5TMhIj.webp
│ │ ├── 🖼️ ClassPulse-Cw8eHORq.webp
│ │ ├── 🖼️ ContainerizeNextwithECR-DG0ai_DX.webp
│ │ ├── 🖼️ DbtMCP-CApuwL5s.webp
│ │ ├── 🖼️ DeployNextjstoEKS-BiXE7E0Y.webp
│ │ ├── 🖼️ Grafana-BTVF_nAv.webp
│ │ ├── 🖼️ HeatRiskAlert-CgHk6RgV.webp
│ │ ├── 🖼️ JupyterMCP-C6B0rUP0.webp
│ │ ├── 🖼️ Pokegame-DzFQE9tt.webp
│ │ ├── 🖼️ PostgresDockerMCP-kWXW3M5l.webp
│ │ ├── 🖼️ RAGDeployKube-B2CrGTEK.webp
│ │ ├── 🖼️ RAGFastAPI-DrHe7cad.webp
│ │ ├── 🖼️ RunlayerDemo-DQ-i9nmL.webp
│ │ ├── 🖼️ SecureSecretsManager-DCKyVc9i.webp
│ │ ├── 🖼️ ThreatEventPlatform-D8_StTI5.webp
│ │ ├── 🖼️ WorldCupDashboard-BaXy_N3v.webp
│ │ ├── 🖼️ background-image-BMCnOaNV.webp
│ │ ├── 🖼️ dog-api-postman-c0QQsy5k.webp
│ │ ├── 🎨 index-Aa4OcTJd.css
│ │ ├── 🟨 index-Dz0ozZ_l.js
│ │ ├── 🖼️ portfolio-site-Vg82uBk2.webp
│ │ ├── 🖼️ profile-picture-C28qEH1q.webp
│ ├── 📁 images
│ │ ├── 📄 TristanCravello2026SoftwareEngineering.pdf
│ │ ├── 📄 TristanCravelloSWEResume2026.pdf
│ │ ├── 📄 TristanCravelloSWEResume7162026.docx.pdf
│ │ ├── 📄 TristanCravelloSWEResume7162026.pdf
│ ├── 📄 index.html
├── 🟨 eslint.config.js
├── 📄 index.html
├── 🗂️ package-lock.json
├── 🗂️ package.json
├── 📁 public
│ ├── 📁 images
│ │ ├── 📄 TristanCravello2026SoftwareEngineering.pdf
│ │ ├── 📄 TristanCravelloSWEResume2026.pdf
│ │ ├── 📄 TristanCravelloSWEResume7162026.docx.pdf
│ │ ├── 📄 TristanCravelloSWEResume7162026.pdf
│ │ ├── 📄 TristanCravelloSoftware-EngineerResume.docx.pdf
├── 📁 src
│ ├── 🎨 App.css
│ ├── 🟦 App.jsx
│ ├── 📁 assets
│ │ ├── 🖼️ AISecurityScannerPython.webp
│ │ ├── 🖼️ AIandSearchMode.webp
│ │ ├── 🖼️ AWSSecurityMonitoring.webp
│ │ ├── 🖼️ AmazonBedrockChatbot.webp
│ │ ├── 🖼️ AutomateCICDforEKS.webp
│ │ ├── 🖼️ ClassPulse.webp
│ │ ├── 🖼️ ContainerizeNextwithECR.webp
│ │ ├── 🖼️ DbtMCP.webp
│ │ ├── 🖼️ DebugPaymentOutage.webp
│ │ ├── 🖼️ DeployEKS.webp
│ │ ├── 🖼️ DeployNextjstoEKS.webp
│ │ ├── 🖼️ DockerDesktop.webp
│ │ ├── 🖼️ EventPipelineTeams.webp
│ │ ├── 🖼️ GatedExpress.webp
│ │ ├── 🖼️ GitHubActionTestFlow.webp
│ │ ├── 🖼️ Grafana.webp
│ │ ├── 🖼️ HeatRiskAlert.webp
│ │ ├── 🖼️ IdempotentReservation.webp
│ │ ├── 🖼️ JupyterMCP.webp
│ │ ├── 🖼️ PlayerLeaderboard.webp
│ │ ├── 🖼️ Pokegame.webp
│ │ ├── 🖼️ PolicyRepairController.webp
│ │ ├── 🖼️ PostgresDockerMCP.webp
│ │ ├── 🖼️ PrivacySafeGrid.webp
│ │ ├── 🖼️ PublishToSearch.webp
│ │ ├── 🖼️ RAGDeployKube.webp
│ │ ├── 🖼️ RAGFastAPI.webp
│ │ ├── 🖼️ RunlayerDemo.webp
│ │ ├── 🖼️ SecureSecretsManager.webp
│ │ ├── 🖼️ SpaceTravel.webp
│ │ ├── 🖼️ StrideSyncDesign.webp
│ │ ├── 🖼️ ThreatEventPlatform.webp
│ │ ├── 🖼️ WorldCupDashboard.webp
│ │ ├── 🖼️ background-image.webp
│ │ ├── 🖼️ dog-api-postman.webp
│ │ ├── 🖼️ portfolio-site.webp
│ │ ├── 🖼️ profile-picture.webp
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
