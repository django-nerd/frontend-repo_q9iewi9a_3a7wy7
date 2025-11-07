import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Astreon turned our month-end close from a stressful marathon into a calm, one-hour routine. The interface is a joy to use.',
    name: 'Elena Park',
    role: 'CFO, Northwind Traders',
  },
  {
    quote:
      'Reconciliation rules saved us countless hours. Our books are cleaner and our team is happier.',
    name: 'Marcus Chen',
    role: 'Founder, Harbor & Co.',
  },
  {
    quote:
      'The dashboards are exactly what we needed: clear, accurate, and fast. Highly recommend.',
    name: 'Priya Nair',
    role: 'Operations Lead, Aurora Labs',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_80%_0%,rgba(99,102,241,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">Loved by modern finance teams</h2>
          <p className="mt-3 text-slate-600">Real stories from teams using Astreon to close faster and operate calmer.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#EAB308" className="text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-slate-900">{t.name}</div>
              <div className="text-sm text-slate-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
