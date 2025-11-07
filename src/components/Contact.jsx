import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will reach out shortly.');
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-indigo-50 to-cyan-50 py-20 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_30%,rgba(59,130,246,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="bg-gradient-to-r from-indigo-700 via-cyan-600 to-purple-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Contact us
            </h2>
            <p className="mt-4 text-slate-600">
              Ready to experience Astreon? Book a demo or ask us anything.
            </p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
              <p>
                Email: <a href="mailto:hello@astreon.app" className="text-cyan-700 underline decoration-cyan-400/50 underline-offset-4">hello@astreon.app</a>
              </p>
              <p className="mt-2">Support hours: Mon–Fri, 9am–6pm</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-slate-600">First name</label>
                <input required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Alex" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-600">Last name</label>
                <input required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Vega" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-slate-600">Work email</label>
                <input type="email" required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-slate-600">Message</label>
                <textarea rows="4" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tell us about your needs..." />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 font-semibold text-white transition hover:brightness-110">
              Request demo
            </button>
            {status && <p className="mt-4 text-center text-sm text-cyan-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
