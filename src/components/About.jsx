import { motion } from 'framer-motion'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { site } from '../data/site'


export default function About() {
    const links = [
    { label: 'مستقل', href: site.mostaql, icon: FiArrowUpRight },
      { label: 'خمسات', href: site.khamsat, icon: FiArrowUpRight },
      { label: 'نفذلي', href: site.nafzly, icon: FiArrowUpRight }
  ]
  return (
    <section id="about" className="site-shell scroll-mt-28 py-28 sm:py-36">
      
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className="max-w-3xl">
          <p className="eyebrow">00 · Work</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-6xl">Open to work</h2>
          <p className="mt-5 text-base leading-8 text-black/55 dark:text-white/55">Message me! , let me know what you're working on.</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target='_blank' rel='noreferrer' className="flex items-center gap-3 rounded-2xl border border-black/10 bg-paper p-4 font-medium transition hover:-translate-y-1 hover:border-accent dark:border-white/10 dark:bg-ink">
                <Icon className="text-lg text-accent" /> {label}
              </a>
            ))}
          </div>
        </motion.div>
      
            <p className="mt-7 max-w-2xl text-base leading-7 text-black/60 dark:text-white/60 sm:text-lg">
            Specializing in data science and AI, transforming raw data into valuable insights through machine learning, statistical analysis, and data visualization to support strategic decision-making and develop AI-driven solutions & Multi-agents , (SWE) who enjoys building end-to-end Applications — from messy data and models to dashboards people can actually use.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-black transition hover:-translate-y-1 hover:shadow-glow">
              View Projects
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href={site.resume} className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/15 px-5 py-3.5 text-sm font-bold transition hover:-translate-y-1 hover:border-accent dark:border-white/15">
              <FiDownload /> Download Resume
            </a>
          </div>
          <br />
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
 
        <p className="eyebrow">01 · About</p>
        
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">A Software engineer who likes learning & building apps.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 dark:text-white/60">
            I like the part of a project where an idea turns into Real-World applications: Built Clinic Rag bot (AI assistant) with focusing on trusted data from mimic, analysis & dashboards on known websites, testing models, and shipping a usable result. Outside the terminal, I’m usually sharpening my problem-solving skills or exploring a new tool just to see what it can do, Curiosity in Linux disros like (fedora, ubuntu), Am using Fedora 44, VM.
          </p>

        </div>
        
      </motion.div>

    </section>
  )
}
