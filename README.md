# Ali Ahmed — Developer Portfolio

Modern single-page React portfolio built with Vite, Tailwind CSS, Framer Motion, and react-icons.

## Design direction

The original site used GitHub Pages/Jekyll Minimal styling. This upgrade keeps that simple, content-first feel while adding a custom warm-amber accent (`#F59E0B`), dark/light mode, subtle glass navigation, responsive layouts, and motion.

## Tech

- React + Vite
- Tailwind CSS
- Framer Motion
- react-icons
- GitHub REST API
- Google Fonts: Space Grotesk + Inter

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite URL shown in your terminal, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Personalize

Edit `src/data/site.js` for your email and social links.

Place your PDF resume at `public/AliAhmed_Cv.pdf` so the **Download Resume** button works.

## Project data

The Projects section fetches public repositories from:

`https://api.github.com/users/ZeeeeCS/repos`

It filters out forks and supports language filters for All, React, JavaScript, and Python.

## Structure

```text
zeeeecs-portfolio/
├── public/
│   └── AliAhmed_Cv.pdf      # add your resume here
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── site.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```
