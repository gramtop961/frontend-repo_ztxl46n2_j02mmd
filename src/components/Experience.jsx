export default function Experience() {
  const roles = [
    {
      title: 'Senior Frontend Engineer',
      company: 'TechNova Labs',
      period: '2022 — Present',
      points: [
        'Led development of a modular design system used across 6 products',
        'Optimized React rendering and state, reducing bundle size by 35%',
        'Shipped 3 mobile apps with React Native and Expo, 4.8★ avg rating',
      ],
      stack: ['React', 'TypeScript', 'Tailwind', 'React Native', 'Expo'],
    },
    {
      title: 'Full‑Stack Engineer',
      company: 'CloudForge',
      period: '2019 — 2022',
      points: [
        'Built end-to-end features across Node/FastAPI backends and React frontends',
        'Implemented CI/CD and E2E tests, cutting regressions by 45%',
        'Migrated REST services to scalable serverless architecture',
      ],
      stack: ['Node', 'FastAPI', 'MongoDB', 'AWS', 'Cypress'],
    },
    {
      title: 'Frontend Developer',
      company: 'PixelWorks',
      period: '2018 — 2019',
      points: [
        'Delivered responsive web apps with accessibility best practices',
        'Introduced performance budgets and Lighthouse monitoring',
      ],
      stack: ['React', 'Sass', 'Jest'],
    },
  ]

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
          <p className="mt-2 text-slate-300">Highlights from 6+ years building for web and mobile.</p>
        </div>

        <div className="mt-10 grid gap-6">
          {roles.map((r, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{r.title}</h3>
                  <p className="text-slate-300">{r.company}</p>
                </div>
                <span className="text-slate-400 text-sm">{r.period}</span>
              </div>
              <ul className="mt-4 list-disc pl-5 text-slate-200/90 space-y-2">
                {r.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.stack.map((s, idx) => (
                  <span key={idx} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
