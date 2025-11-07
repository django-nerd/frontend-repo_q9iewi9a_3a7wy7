import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-sky-900 text-white">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle aurora and galaxy glow overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,rgba(168,85,247,0.25),rgba(14,0,26,0)_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_50%,rgba(34,211,238,0.18),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span className="text-xs tracking-wider text-cyan-100/90">Introducing</span>
          <span className="text-xs font-semibold text-white">Astreon</span>
        </div>

        <h1 className="max-w-4xl bg-gradient-to-b from-white via-cyan-100 to-purple-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Clean Accounting for Cosmic Clarity
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
          Astreon simplifies bookkeeping with an interface as calm as the night sky. Track, reconcile, and report with
          effortless precision, powered by a serene, space-inspired experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Get a Demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <Star className="h-4 w-4 text-yellow-300" />
            Explore Features
          </a>
        </div>
      </div>

      {/* Decorative stars */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-10 top-16 h-1 w-1 animate-pulse rounded-full bg-cyan-300/80" />
        <div className="absolute right-14 top-24 h-[3px] w-[3px] animate-pulse rounded-full bg-purple-300/80 delay-200" />
        <div className="absolute bottom-20 left-1/3 h-1 w-1 animate-pulse rounded-full bg-blue-200/80 delay-500" />
      </div>
    </section>
  );
};

export default Hero;
