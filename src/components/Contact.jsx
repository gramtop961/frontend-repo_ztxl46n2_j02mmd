import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's build something great</h2>
          <p className="mt-2 text-slate-300">Open to interesting roles, freelance, or collaborations.</p>
          <a
            href="mailto:hello@example.com"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 font-semibold px-5 py-3 transition-colors"
          >
            <Mail size={18} /> Email Me
          </a>
        </div>
      </div>
    </section>
  )
}
