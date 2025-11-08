import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — I will get back to you shortly.');
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Let’s build something exceptional</h2>
        <p className="mt-2 text-zinc-400">Tell me about your project — I’ll reply within 24 hours.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-red-500/60" placeholder="Name" required />
            <input type="email" className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-red-500/60" placeholder="Email" required />
          </div>
          <input className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-red-500/60" placeholder="Subject" />
          <textarea rows={5} className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-red-500/60" placeholder="Message" required />
          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-500">
              Send message
            </button>
            {status && <p className="text-sm text-red-300">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
