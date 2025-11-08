import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,0,0,0.18)_0%,rgba(0,0,0,0.8)_60%,rgba(0,0,0,1)_100%)]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-40 text-left">
        <p className="text-sm uppercase tracking-[0.25em] text-red-400/80">Creative Developer</p>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
          Building immersive, modern interfaces
          <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">with precision and style.</span>
        </h1>
        <p className="max-w-xl text-base text-zinc-300 md:text-lg">
          I craft elegant, high-performance web experiences that blend interaction, motion, and clarity.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(239,68,68,0.6)] transition hover:bg-red-500"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-sm font-medium text-red-300 transition hover:border-red-500/60 hover:bg-red-500/20 hover:text-red-200"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
