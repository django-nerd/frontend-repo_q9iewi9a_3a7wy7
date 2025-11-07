import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    highlight: 'Best for solo founders',
    features: ['Up to 100 transactions/mo', 'Basic invoicing', 'Email support'],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$29',
    cadence: '/mo',
    highlight: 'Most popular',
    featured: true,
    features: ['Unlimited transactions', 'Advanced reconciliation', 'Automations & rules', 'Priority support'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Scale',
    price: '$79',
    cadence: '/mo',
    highlight: 'For teams & agencies',
    features: ['Multi-entity consolidation', 'Custom reports', 'SAML SSO', 'Dedicated success manager'],
    cta: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_35%_at_80%_10%,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-slate-600">
            Choose a plan that scales with your business. Cancel anytime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
                t.featured ? 'border-cyan-300/60 bg-cyan-50' : 'border-slate-200 bg-white'
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                {t.highlight && (
                  <span className={`rounded-full px-2 py-1 text-xs ${t.featured ? 'bg-white text-cyan-700' : 'bg-slate-100 text-slate-700'}`}>
                    {t.highlight}
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{t.price}</span>
                <span className="text-slate-500">{t.cadence}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  t.featured
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:brightness-110'
                    : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
