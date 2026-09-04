import { motion } from 'framer-motion'
import { FaAws, FaGitAlt, FaGithub, FaJava, FaPython, FaReact } from 'react-icons/fa'
import { SiJupyter, SiMlflow, SiPandas, SiScikitlearn, SiStreamlit } from 'react-icons/si'

const groups = [
  { title: 'Languages', items: [{ name: 'Python', icon: FaPython }, { name: 'Java', icon: FaJava }, { name: 'SQL', icon: SiJupyter }] },
  { title: 'Frameworks & Libraries', items: [{ name: 'React', icon: FaReact }, { name: 'Pandas', icon: SiPandas }, { name: 'Scikit-learn', icon: SiScikitlearn },{ name: 'TensorFlow', icon: SiScikitlearn },{ name: 'PyTorch', icon: SiScikitlearn }, { name: 'Streamlit', icon: SiStreamlit }] },
  { title: 'Tools', items: [{ name: 'AWS', icon: FaAws }, { name: 'Git', icon: FaGitAlt }, { name: 'GitHub', icon: FaGithub }, { name: 'MLflow', icon: SiMlflow }] },
]

export default function Skills() {
  return (
    <section id="skills" className="border-y border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
      <div className="site-shell scroll-mt-28 py-28 sm:py-36">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
          <p className="eyebrow">04 · Skills</p>
          <div className="mt-5 grid gap-12 md:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-xl font-bold">{group.title}</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {group.items.map(({ name, icon: Icon }) => (
                    <motion.div key={name} whileHover={{ scale: 1.04 }} className="flex items-center gap-3 rounded-2xl border border-black/10 bg-paper p-4 transition dark:border-white/10 dark:bg-ink">
                      <Icon className="text-2xl text-accent" />
                      <span className="text-sm font-medium">{name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
