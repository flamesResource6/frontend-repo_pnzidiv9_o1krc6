import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="w-full bg-black py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="text-zinc-400 transition hover:text-red-400">Top</a>
          <a href="#work" className="text-zinc-400 transition hover:text-red-400">Work</a>
          <a href="#contact" className="text-zinc-400 transition hover:text-red-400">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
