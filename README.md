<div align="center">

# 🌐 Yohannes Woldeyes — Modern Interactive Developer Portfolio

<p align="center">
  <b>Production Full-Stack, Mobile & AI Systems Engineer Portfolio</b>
</p>

<p align="center">
  <a href="https://yohannes-woldeyes.vercel.app/"><img src="https://img.shields.io/badge/Live%20Demo-yohannes--woldeyes.vercel.app-8B5CF6?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" /></a>
  <a href="https://www.linkedin.com/in/yohannes-woldeyes/"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://github.com/TedXpro"><img src="https://img.shields.io/badge/GitHub-TedXpro-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="mailto:johannes.woldeyes@gmail.com"><img src="https://img.shields.io/badge/Email-johannes.woldeyes%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

A high-performance, responsive personal portfolio built with **React 18**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Three.js / React Three Fiber**. Features dynamic dark/light theme switching, a live **GitHub Activity Heatmap**, native **OpenGraph Link Share Cards**, and an ultra-fast **Skeleton Loading Architecture**.

</div>

---

## ✨ Key Features & Architectural Highlights

- 🌓 **Dynamic Theme Architecture**: Fluid dark/light theme system synchronized via `ThemeContext` and Tailwind `class` strategies with CSS custom variable design tokens.
- 📊 **Live GitHub Developer Intelligence Hub**:
  - Direct live sync with GitHub unauthenticated APIs for real-time contribution metrics (**771+ contributions**).
  - 53-week 1:1 pixel-accurate contribution heatmap with automatic right-scrolling to latest months and zero-jitter hover interactions.
  - Multi-segment proportional programming language distribution progress bar.
- 🔗 **Standard OpenGraph Link Share Previews**:
  - Native Telegram and WhatsApp-grade rich link preview cards with 16:9 banner displays.
  - Multi-tier graceful degradation (Live remote URL -> Local optimized asset -> Minimal typography fallback).
- ⚡ **Skeleton Loading & Code-Splitting**:
  - Asynchronous chunk splitting via `React.lazy` + `<Suspense>` for sub-second First Contentful Paint (FCP).
  - Pixel-accurate responsive skeleton placeholders matching exact desktop and mobile grid geometries.
- 🛡️ **Enterprise Resilience & Edge Performance**:
  - Global `ErrorBoundary` preventing 3D Canvas or network exceptions from disrupting the user session.
  - Production `vercel.json` with 1-year immutable caching for static assets and enterprise security headers (`nosniff`, `DENY`, strict referrer policy).

---

## 🛠️ Tech Stack & Dependencies

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 18 · Vite 6 · React Router DOM |
| **Styling & Design** | Tailwind CSS · Glassmorphism Tokens · Lucide Icons |
| **Animation & 3D** | Framer Motion · Three.js · React Three Fiber · Drei · Maath |
| **API & Integrations** | Live GitHub Contributions REST API · EmailJS |
| **Deployment & Edge** | Vercel Edge Network · Immutable Static Cache Policies |

---

## 📁 Repository Structure

```text
personalportfolio/
├── public/
│   ├── logo.svg               # Adaptive signature vector favicon
│   └── Resume.pdf             # Engineering Resume / CV
├── src/
│   ├── assets/                # Optimized project banners, tech icons & company marks
│   ├── components/
│   │   ├── About.jsx          # Professional overview & engineering disciplines
│   │   ├── BentoGrid.jsx      # High-density Bento Grid developer hub
│   │   ├── Contact.jsx        # Direct contact channels & interactive EmailJS form
│   │   ├── CountUp.jsx        # Smooth numeric ease-out counter animation
│   │   ├── ErrorBoundary.jsx  # Resilient application error boundary
│   │   ├── Experience.jsx     # Alternating timeline with OpenGraph link previews
│   │   ├── Footer.jsx         # Multi-column responsive footer
│   │   ├── GitHubStatsCard.jsx# Live 53-week GitHub contribution heatmap
│   │   ├── Hero.jsx           # Fluid hero with 3D canvas and animated CTA
│   │   ├── Navbar.jsx         # Glassmorphism header navigation with ThemeToggle
│   │   ├── OpenGraphCard.jsx  # Telegram/WhatsApp standard link preview cards
│   │   ├── Skeleton.jsx       # Universal responsive shimmer skeleton suite
│   │   ├── Tech.jsx           # Interactive 3D tech floating balls
│   │   ├── ThemeToggle.jsx    # Smooth liquid sun/moon theme switcher
│   │   ├── Toast.jsx          # Lightweight floating status notification
│   │   └── Works.jsx          # Categorized project showcase with 16:10 banners
│   ├── context/
│   │   └── ThemeContext.jsx   # Global dark/light theme state provider
│   ├── constants/             # Centralized project data, timeline records, & skills
│   ├── hoc/                   # Higher-Order Components (SectionWrapper)
│   ├── styles/                # Tailwind layout tokens and glass variables
│   ├── utils/                 # Motion variants and canvas math
│   ├── App.jsx                # Root app with Suspense code-splitting & ErrorBoundary
│   ├── index.css              # Global styles, scrollbars, and keyframe animations
│   └── main.jsx               # React DOM root mounting
├── index.html                 # SEO metadata, OpenGraph tags, and Twitter cards
├── tailwind.config.cjs        # Tailwind dark mode & custom color palette
├── vercel.json                # Edge caching rules and security headers
└── package.json               # Project dependencies and build scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or later recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TedXpro/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional for EmailJS):**
   Create a `.env` file in the root directory:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build & Deployment

To compile the production build:

```bash
npm run build
```

The optimized static assets will be output to the `dist/` directory, ready for deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 👤 Author

**Yohannes Belay Woldeyes**
- **GitHub**: [@TedXpro](https://github.com/TedXpro)
- **LinkedIn**: [yohannes-woldeyes](https://www.linkedin.com/in/yohannes-woldeyes/)
- **Email**: [johannes.woldeyes@gmail.com](mailto:johannes.woldeyes@gmail.com)
- **Portfolio**: [yohannes-woldeyes.vercel.app](https://yohannes-woldeyes.vercel.app/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).