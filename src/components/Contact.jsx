import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { site } from '../data/site'

export default function Contact() {
  const links = [
    { label: 'Email', href: `mailto:${site.email}`, icon: FiMail },
    { label: 'GitHub', href: site.github, icon: FiGithub },
    { label: 'LinkedIn', href: site.linkedin, icon: FiLinkedin }
  ]

  return (
    <section id="contact" className="border-t border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
      <div className="site-shell scroll-mt-28 py-28 sm:py-36">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className="max-w-3xl">
          <p className="eyebrow">06 · Contact</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-6xl">Let’s build something useful.</h2>
          <p className="mt-5 text-base leading-8 text-black/55 dark:text-white/55">A project, an internship, a data problem, or just a good technical conversation — my inbox is open.</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noreferrer'} className="flex items-center gap-3 rounded-2xl border border-black/10 bg-paper p-4 font-medium transition hover:-translate-y-1 hover:border-accent dark:border-white/10 dark:bg-ink">
                <Icon className="text-lg text-accent" /> {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
