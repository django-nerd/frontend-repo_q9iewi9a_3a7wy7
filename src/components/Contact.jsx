import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will reach out shortly.');
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_30%,rgba(59,130,246,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Contact us
            </h2>
            <p className="mt-4 text-slate-300">
              Ready to experience Astreon? Book a demo or ask us anything.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur">
              <p>
                Email: <a href="mailto:hello@astreon.app" className="text-cyan-300 underline decoration-cyan-400/50 underline-offset-4">hello@astreon.app</a>
              </p>
              <p className="mt-2">Support hours: Mon–Fri, 9am–6pm</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-slate-300">First name</label>
                <input required className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Alex" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Last name</label>
                <input required className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Vega" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-slate-300">Work email</label>
                <input type="email" required className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-slate-300">Message</label>
                <textarea rows="4" className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tell us about your needs..." />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110">
              Request demo
            </button>
            {status && <p className="mt-4 text-center text-sm text-cyan-200">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
