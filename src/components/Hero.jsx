import React from 'react';
import { Rocket, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-sky-50 via-indigo-50 to-cyan-50 text-slate-900">
      {/* Layered Sky Background: gradient, aurora, subtle clouds, mountains */}
      <div className="absolute inset-0">
        {/* Base sky gradient overlay for extra depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-100/70 via-cyan-50/60 to-indigo-100/60" />

        {/* Aurora veils */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_20%,rgba(56,189,248,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_65%_35%,rgba(99,102,241,0.16),transparent_75%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_35%_30%,rgba(168,85,247,0.14),transparent_80%)]" />

        {/* Subtle drifting clouds (soft blurs) */}
        <div className="pointer-events-none absolute -top-6 left-[-10%] h-48 w-[50%] rounded-full bg-white/60 blur-2xl" style={{ animation: 'floatSlow 20s ease-in-out infinite' }} />
        <div className="pointer-events-none absolute top-10 right-[-10%] h-40 w-[45%] rounded-full bg-white/50 blur-2xl" style={{ animation: 'floatSlow 24s ease-in-out infinite reverse' }} />
        <div className="pointer-events-none absolute top-32 left-1/4 h-36 w-1/3 rounded-full bg-white/40 blur-2xl" style={{ animation: 'floatSlow 28s ease-in-out infinite' }} />

        {/* Few stars */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-16 top-20 h-1 w-1 rounded-full bg-white/70" />
          <div className="absolute right-20 top-28 h-[3px] w-[3px] rounded-full bg-white/70" />
          <div className="absolute left-1/3 top-40 h-[2px] w-[2px] rounded-full bg-white/60" />
          <div className="absolute right-1/3 top-16 h-1 w-1 rounded-full bg-white/60" />
        </div>

        {/* Mountain silhouette at the bottom using SVG */}
        <svg className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="mountGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path fill="url(#mountGrad)" d="M0,160 L120,140 L240,170 L360,130 L480,160 L600,120 L720,155 L840,110 L960,150 L1080,120 L1200,150 L1320,130 L1440,150 L1440,200 L0,200 Z" />
          <path fill="url(#mountGrad)" d="M0,170 L130,150 L260,175 L390,145 L520,170 L650,140 L780,165 L910,135 L1040,160 L1170,145 L1300,165 L1440,155 L1440,200 L0,200 Z" />
        </svg>
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

      {/* Local keyframes for gentle cloud drift */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-6px) translateX(8px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
