import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'A blazing-fast analytics dashboard with micro-interactions and dark neon aesthetics.',
    tags: ['React', 'Tailwind', 'D3'],
  },
  {
    title: 'Interactive 3D Landing',
    desc: 'A modern hero with Spline and WebGL shaders for an immersive brand experience.',
    tags: ['Spline', 'Three.js', 'Vite'],
  },
  {
    title: 'E-commerce Motion',
    desc: 'Conversion-focused storefront with buttery transitions and smart filtering.',
    tags: ['Next.js', 'Framer Motion', 'Stripe'],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-xl text-zinc-400">
              A curated collection of interfaces focused on clarity, motion, and performance.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300 transition hover:border-red-500/60 hover:bg-red-500/20 md:block">
            Start a project
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-red-500/30 hover:bg-zinc-900/70"
            >
              <div className="mb-4 h-40 w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900" />
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-xs text-red-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
