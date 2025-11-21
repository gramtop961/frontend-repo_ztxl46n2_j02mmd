import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-400" />
            <span className="text-white font-semibold tracking-tight">Senior Mobile & Web Dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-200/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <a href="mailto:hello@example.com" className="text-slate-200/80 hover:text-white" aria-label="Email"><Mail size={18} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur p-4 md:hidden">
            <div className="flex flex-col gap-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-200/90 hover:text-white">
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="mailto:hello@example.com" className="text-slate-200/80 hover:text-white" aria-label="Email"><Mail size={18} /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
