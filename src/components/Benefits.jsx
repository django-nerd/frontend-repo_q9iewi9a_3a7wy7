import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Close books up to 3x faster with guided workflows',
  'Reduce manual errors with automated checks and rules',
  'Share beautiful reports with one secure link',
  'Scale from startup to enterprise with granular permissions'
];

const Benefits = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-indigo-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(34,211,238,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Benefits that feel like clear skies
            </h2>
            <p className="mt-4 text-slate-300">
              Navigate your finances with confidence. Astreon brings calm to complexity so your team can focus on what matters.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300" />
                  <span className="text-slate-200">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-2xl bg-gradient-to-b from-cyan-500/20 to-transparent p-6">
                  <div className="text-3xl font-extrabold text-cyan-200">98%+</div>
                  <div className="mt-1 text-xs text-slate-300">Bank match accuracy</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-b from-purple-500/20 to-transparent p-6">
                  <div className="text-3xl font-extrabold text-purple-200">3x</div>
                  <div className="mt-1 text-xs text-slate-300">Faster month-end</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-b from-cyan-500/20 to-transparent p-6">
                  <div className="text-3xl font-extrabold text-cyan-200">-45%</div>
                  <div className="mt-1 text-xs text-slate-300">Manual tasks</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-b from-purple-500/20 to-transparent p-6">
                  <div className="text-3xl font-extrabold text-purple-200">24/7</div>
                  <div className="mt-1 text-xs text-slate-300">Secure access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
