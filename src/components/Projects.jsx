import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiStar, FiMapPin } from 'react-icons/fi'

const username = 'ZeeeeCS'
const filters = ['All', 'React', 'Jupyter Notebook', 'Python', 'ml', 'embeddings']

function formatDate(date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
          { signal: controller.signal }
        )

        if (!response.ok) throw new Error('GitHub API request failed')

        const data = await response.json()

        setRepos(
          data
            .filter((repo) => !repo.fork)
            .sort((a, b) => {
              // ⭐ Starred projects first
              if (b.stargazers_count !== a.stargazers_count) {
                return b.stargazers_count - a.stargazers_count
              }

              // Same number of stars → recently updated first
              return new Date(b.updated_at) - new Date(a.updated_at)
            })
        )
      } catch (err) {
        if (err.name !== 'AbortError') setError(true)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadRepos()

    return () => controller.abort()
  }, [])

  const visibleRepos = useMemo(() => {
    if (filter === 'All') return repos

    return repos.filter((repo) => {
      const language = (repo.language || '').toLowerCase()
      const topics = (repo.topics || []).map((topic) => topic.toLowerCase())

      // Language filters
      if (
        filter.toLowerCase() === 'python' ||
        filter.toLowerCase() === 'react' ||
        filter.toLowerCase() === 'jupyter notebook'
      ) {
        return language === filter.toLowerCase()
      }

      // Topic filters
      return topics.includes(filter.toLowerCase())
    })
  }, [filter, repos])

  return (
    <section
      id="projects"
      className="site-shell scroll-mt-28 py-28 sm:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <p className="eyebrow">05 · Projects</p>

        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Recent work, straight from GitHub.
            </h2>

            <p className="mt-4 max-w-2xl text-black/55 dark:text-white/55">
              Projects I have Built on my own, and with team members, from scratch.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full border px-3.5 py-2 text-xs font-bold transition ${
                  filter === item
                    ? 'border-accent bg-accent text-black'
                    : 'border-black/10 hover:border-accent dark:border-white/10'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="mt-10 rounded-3xl border border-black/10 p-10 text-center text-sm text-black/50 dark:border-white/10 dark:text-white/50">
            Loading GitHub projects…
          </div>
        )}

        {error && !loading && (
          <div className="mt-10 rounded-3xl border border-red-400/30 p-10 text-center text-sm text-black/55 dark:text-white/55">
            Couldn’t load GitHub right now. Please try again later.
          </div>
        )}

        {!loading && !error && visibleRepos.length === 0 && (
          <div className="mt-10 rounded-3xl border border-black/10 p-10 text-center text-sm text-black/50 dark:border-white/10 dark:text-white/50">
            No projects match this filter yet.
          </div>
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {visibleRepos.map((repo, index) => (
            <motion.article
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-paper p-6 dark:border-white/10 dark:bg-ink"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-accent opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold">
                    {repo.name}
                  </h3>

                  <p className="mt-2 line-clamp-3 min-h-18 text-sm leading-6 text-black/55 dark:text-white/55">
                    {repo.description ||
                      'No description yet — check the repository for the details.'}
                  </p>
                </div>

                <FiGithub className="shrink-0 text-xl text-black/25 dark:text-white/25" />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {repo.language && (
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {repo.language}
                  </span>
                )}

                {(repo.topics || []).slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium dark:bg-white/5"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 text-xs text-black/45 dark:text-white/45">
                <span className="inline-flex items-center gap-1">
                  <FiMapPin />
                  {repo.owner.location || 'Location not available'}
                </span>

                <span className="inline-flex items-center gap-1">
                  <FiStar />
                  {repo.stargazers_count}
                </span>

                <span>
                  Updated {formatDate(repo.updated_at)}
                </span>
              </div>

              <div className="mt-6 flex gap-2 opacity-100 transition md:pointer-events-none md:translate-y-2 md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-black"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-2.5 text-xs font-bold dark:border-white/10"
                >
                  <FiGithub />
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}