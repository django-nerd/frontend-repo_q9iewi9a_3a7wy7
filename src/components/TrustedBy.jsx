import React from 'react';

const logos = [
  { name: 'Northwind', text: 'NORTHWIND' },
  { name: 'Contoso', text: 'CONTOSO' },
  { name: 'Globex', text: 'GLOBEX' },
  { name: 'Umbrella', text: 'UMBRELLA' },
  { name: 'Initech', text: 'INITECH' },
];

const TrustedBy = () => {
  return (
    <section className="relative w-full bg-white py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-slate-500">Trusted by teams at</div>
        <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((l) => (
            <div key={l.name} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-6 text-center text-slate-700 shadow-sm">
              <span className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-purple-600 bg-clip-text font-extrabold tracking-wide text-transparent">
                {l.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
