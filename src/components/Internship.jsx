
import { motion } from 'framer-motion'
import {
  FaAws,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import {
  SiJupyter,
  SiMlflow,
  SiPandas,
  SiScikitlearn,
  SiStreamlit,
} from 'react-icons/si'

const groups = [
  {
    title: 'DEPI Data Science Training',
    icon: FaPython,
    description:
      'Data Science training focused on data analysis, machine learning, Python, and building practical data-driven applications.',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
  },
  {
    title: 'DEPI AI Engineering',
    icon: SiScikitlearn,
    description:
      'AI Engineering training focused on machine learning workflows, model development, deployment, and MLOps concepts.',
    skills: ['Deep Learning', 'PyTorch', 'TensorFlow', 'LLM', 'fine-tuning','Deep Learning'],
  },
  {
    title: 'IoT Project',
    icon: FaReact,
    description:
      'Built an ESP32-based pet-feeding system using IR and water-level sensors to monitor feeding and fluid needs.',
    skills: ['ESP32', 'C++', 'MQTT', 'Flutter', 'Supabase'],
  },
]

export default function Internship() {
  return (
    <section
      id="internship"
      className="border-y border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]"
    >
      <div className="site-shell scroll-mt-28 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="eyebrow">03 · Internship</p>

          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Experience & Training
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 dark:text-white/60 sm:text-lg">
            My training and practical experience across data science, AI
            engineering, and IoT development.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {groups.map((group, index) => {
              const Icon = group.icon

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-black/10 bg-paper p-6 shadow-sm transition dark:border-white/10 dark:bg-ink"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.04]">
                    <Icon className="text-2xl text-accent transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-display text-xl font-bold">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-6 text-black/60 dark:text-white/60">
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium dark:border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

