/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0b0d0f',
        paper: '#f5f3ed',
        accent: '#f59e0b',
        'accent-soft': '#fbbf24',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 50px rgba(245, 158, 11, 0.15)',
      },
    },
  },
  plugins: [],
}

