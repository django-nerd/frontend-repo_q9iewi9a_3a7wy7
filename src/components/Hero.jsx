import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-sky-50 via-indigo-50 to-cyan-50 text-slate-900">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Aurora sky overlays on top of Spline - keep interactive */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_35%,rgba(99,102,241,0.18),rgba(14,0,26,0)_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_60%_55%,rgba(34,211,238,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_20%_20%,rgba(168,85,247,0.14),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/70 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-cyan-600" />
          <span className="text-xs tracking-wider text-slate-700">Introducing</span>
          <span className="text-xs font-semibold text-slate-900">Astreon</span>
        </div>

        <h1 className="max-w-4xl bg-gradient-to-b from-slate-900 via-indigo-800 to-cyan-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Accounting clarity under aurora skies
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Calm, modern bookkeeping for teams that value focus. Track, reconcile, and report with a light, sky-inspired interface.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Start Free Trial
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <Star className="h-4 w-4 text-yellow-500" />
            Explore Features
          </a>
        </div>
      </div>

      {/* Subtle twinkles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-10 top-16 h-1 w-1 animate-pulse rounded-full bg-cyan-400/70" />
        <div className="absolute right-14 top-24 h-[3px] w-[3px] animate-pulse rounded-full bg-indigo-400/70 delay-200" />
        <div className="absolute bottom-20 left-1/3 h-1 w-1 animate-pulse rounded-full bg-purple-400/70 delay-500" />
      </div>
    </section>
  );
};

export default Hero;
