import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-slate-900" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-900" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur">
            6+ years • Mobile & Web • React • React Native • Node • FastAPI
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Building delightful, high-performance apps across mobile and web
          </h1>
          <p className="mt-4 text-lg text-slate-200/85">
            I craft modern, scalable products end-to-end: from pixel-perfect interfaces to robust backends. I love shipping fast, iterating with data, and making experiences people enjoy.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-xl bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 font-semibold px-5 py-3 transition-colors">
              See work
            </a>
            <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
