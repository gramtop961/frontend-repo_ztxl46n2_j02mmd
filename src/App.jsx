import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-slate-400">
          © {new Date().getFullYear()} • Built with care
        </footer>
      </main>
    </div>
  )
}

export default App
