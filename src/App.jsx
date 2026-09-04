import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Skills from './components/Skills'
import { useTheme } from './hooks/useTheme'
import { navItems } from './data/site'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.href.slice(1))).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { threshold: [0.2, 0.4, 0.6], rootMargin: '-15% 0px -50% 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors dark:bg-ink dark:text-paper">
      <NavBar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Internship />
        <Skills />

        <Projects />
        <Contact />
      </main>
      <footer className="site-shell border-t border-black/10 py-8 text-xs text-black/40 dark:border-white/10 dark:text-white/40">
        © {new Date().getFullYear()} Ali Ahmed. Built with React, Tailwind & Framer Motion.
      </footer>
    </div>
  )
}
