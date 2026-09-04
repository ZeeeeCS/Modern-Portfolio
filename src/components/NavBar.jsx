import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { navItems } from '../data/site'

export default function NavBar({ theme, toggleTheme, activeSection }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="site-shell pt-4">
        <nav className="flex items-center justify-between rounded-2xl border border-black/10 bg-paper/85 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-ink/80 dark:shadow-black/20">
          <a href="#home" className="font-display text-lg font-bold tracking-tight">
            ^-^<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-xl px-3 py-2 text-sm font-medium text-black/65 transition hover:text-black dark:text-white/65 dark:hover:text-white"
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span layoutId="active-nav" className="absolute inset-0 rounded-xl bg-black/5 dark:bg-white/10" />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 transition hover:-translate-y-0.5 hover:border-accent dark:border-white/10"
          >
            {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
