import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiDownload, FiTerminal } from 'react-icons/fi'
import { site } from '../data/site'

const phrases = ['AI Applications.', 'ML apps.', 'Web apps.', 'Rag systems','Chatbots','with AI-Tools.', 'Multi-agents.']

function TypingLine() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const displayTime = 1000
  useEffect(() => {
    const current = phrases[phraseIndex]
    const speed = deleting ? 45 : 80
    const timer = window.setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setPhraseIndex((index) => (index + 1) % phrases.length)
        return
      }
      setText((value) => deleting ? value.slice(0, -1) : current.slice(0, value.length + 1))
    }, !deleting && text === current ? displayTime : speed)

    return () => window.clearTimeout(timer)
  }, [text, deleting, phraseIndex])

  return (
    
    <span className="text-black/85 dark:text-white/85">
      {text}
      <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-1 animate-pulse bg-accent" />
      
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 sm:pt-44">
      <div className="pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.025] px-3 py-2 text-xs font-medium dark:border-white/10 dark:bg-white/[0.03]">
            <FiTerminal className="text-accent" />
            Alexandria, Egypt · Open to opportunities
          </div>

          <p className="eyebrow mb-5">{site.role}</p>
          <h1 className="font-display text-5xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Hi, I’m <span className="text-accent">Ali.</span>
            <br />
            I build 
            <br />
            <span className="text-black/20 dark:text-white/20">{`<`}</span>
            <TypingLine />
            <span className="text-black/20 dark:text-white/20">{` />`}</span>
          </h1>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black/35 dark:text-white/35"
        >
          <span className="h-px w-10 bg-current" /> Scroll to explore
        </motion.div>
      </div>
    </section>
  )
}
