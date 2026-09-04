import { motion } from 'framer-motion'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { site } from '../data/site'
export default function About() {
  return (
    <section id="about" className="site-shell scroll-mt-28 py-28 sm:py-36">
                               <p className="mt-7 max-w-2xl text-base leading-7 text-black/60 dark:text-white/60 sm:text-lg">
            I’m a Fourth-year data science & AI (SWE) student who enjoys building end-to-end projects — from messy data and models to dashboards people can actually use & Multi-agents.
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
            I like the part of a project where an idea turns into Real-World applications: Bulit Clinic Rag bot (AI assistant) with focusing on trusted data from mimic, analysis & dashboards on known websites, testing models, and shipping a usable result. Outside the terminal, I’m usually sharpening my problem-solving skills or exploring a new tool just to see what it can do, Curiosity in Linux disros like (fedora, ubuntu), Am using Fedora 44, VM.
          </p>

        </div>
        
      </motion.div>

    </section>
  )
}
