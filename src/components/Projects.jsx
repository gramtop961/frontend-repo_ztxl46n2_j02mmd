export default function Projects() {
  const projects = [
    {
      name: 'Wellness Mobile App',
      desc: 'Cross-platform React Native app with offline mode and push notifications.',
      tags: ['React Native', 'Expo', 'SQLite', 'Notifications'],
      link: '#',
    },
    {
      name: 'E-commerce Platform',
      desc: 'Headless storefront with blazing-fast SPA and serverless backend.',
      tags: ['React', 'Tailwind', 'FastAPI', 'MongoDB'],
      link: '#',
    },
    {
      name: 'Analytics Dashboard',
      desc: 'Real-time charts, role-based access, and audit logging.',
      tags: ['React', 'Node', 'WebSockets', 'Auth'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="mt-2 text-slate-300">A few things I loved building.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur p-6">
              <div className="h-36 rounded-xl bg-gradient-to-br from-indigo-400/30 to-cyan-400/30 group-hover:from-indigo-400/40 group-hover:to-cyan-400/40" />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-slate-300 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
