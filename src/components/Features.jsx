import React from 'react';
import { Shield, BarChart3, Receipt, Wallet } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Real-time Dashboards',
    desc: 'Instant insights with live P&L, cash flow, and receivables at a glance.'
  },
  {
    icon: Receipt,
    title: 'Smart Reconciliation',
    desc: 'Auto-match transactions across banks and ledgers with audit-ready trails.'
  },
  {
    icon: Wallet,
    title: 'Effortless Invoicing',
    desc: 'Branded invoices, reminders, and multi-currency support built-in.'
  },
  {
    icon: Shield,
    title: 'Bank-grade Security',
    desc: 'End-to-end encryption and roles-based access keep your data safe.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-white py-20 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_30%_20%,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_70%_60%,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-indigo-700 via-cyan-600 to-purple-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Features built for focus
          </h2>
          <p className="mt-4 text-slate-600">
            Streamline your accounting flow from capture to close with precision tooling.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 to-indigo-100 text-cyan-700 ring-1 ring-cyan-200/60">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
