import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md/80 bg-black/40 border-b border-red-500/20' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-semibold tracking-tight text-white">
          <span className="text-red-500">/</span>portfolio
        </a>
        <ul className="hidden gap-8 md:flex">
          {[
            { href: '#home', label: 'Home' },
            { href: '#work', label: 'Work' },
            { href: '#about', label: 'About' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-zinc-300 transition-colors hover:text-white focus:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:border-red-500/60 hover:bg-red-500/20 hover:text-red-200"
        >
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
