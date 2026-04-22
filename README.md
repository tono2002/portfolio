# Portfolio

Personal portfolio website built with React + Vite.

## Tech Stack

- **React 19** — UI components
- **Vite** — dev server and bundler
- **CSS custom properties** — theming and global styles

## Project Structure

```
portfolio/
├── public/               # Static assets (favicon, etc.)
└── src/
    ├── components/       # Reusable UI pieces (Navbar, Footer, etc.)
    ├── sections/         # Page sections: Hero, About, Projects, Skills, Contact
    ├── data/
    │   └── content.js    # All editable text content in one place
    ├── styles/
    │   └── global.css    # CSS variables, resets, base styles
    ├── hooks/             # Custom React hooks (add as needed)
    ├── assets/
    │   ├── images/        # Photos and illustrations
    │   └── icons/         # SVG icons
    ├── App.jsx            # Root component — assembles sections
    └── main.jsx           # Entry point
```

## How We Work

**Content lives in `src/data/content.js`** — update your name, bio, projects, and skills there without touching any component.

**Each section is its own file** in `src/sections/`. Add, remove, or reorder sections by editing `App.jsx`.

**Reusable UI pieces** (buttons, cards, modals) go in `src/components/`.

**Styling** uses CSS custom properties defined in `global.css`. Override variables there to change the theme globally.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## Deployment

The `dist/` folder after `npm run build` can be deployed to:
- **Vercel** — connect the GitHub repo, auto-deploys on push
- **GitHub Pages** — set `base` in `vite.config.js` to `'/portfolio/'`
- **Netlify** — drag and drop `dist/` or connect the repo
