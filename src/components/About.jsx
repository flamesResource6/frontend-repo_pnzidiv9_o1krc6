export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
        <p className="mt-4 max-w-3xl text-zinc-300">
          I’m a designer-developer who blends aesthetics with engineering. My approach is minimal yet expressive — focusing on clarity, hierarchy, and motion to create experiences that feel alive without getting in the way.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <p className="text-sm text-zinc-400">Focus</p>
            <p className="mt-1 font-medium">Interaction & Interfaces</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <p className="text-sm text-zinc-400">Stack</p>
            <p className="mt-1 font-medium">React • Next.js • Tailwind • Framer Motion • Spline</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <p className="text-sm text-zinc-400">Values</p>
            <p className="mt-1 font-medium">Performance, polish, and purpose</p>
          </div>
        </div>
      </div>
    </section>
  );
}
