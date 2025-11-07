import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500" />
            <span className="font-semibold text-white">Astreon</span>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Astreon, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
