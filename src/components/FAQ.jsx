import React from 'react';

const faqs = [
  {
    q: 'Can I try Astreon for free?',
    a: 'Yes. Start with the Starter plan or begin a 14-day free trial on Growth. No credit card required.'
  },
  {
    q: 'Is my data secure?',
    a: 'We use encryption in transit and at rest, with regular audits and role-based access controls.'
  },
  {
    q: 'Do you support multiple entities?',
    a: 'Yes, the Scale plan includes multi-entity consolidation and advanced reporting.'
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. You can change or cancel your plan in one click from your billing settings.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="relative w-full bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_0%,rgba(236,72,153,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Everything you need to know about getting started with Astreon.</p>
        </div>
        <div className="mx-auto grid max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {faqs.map((item) => (
            <details key={item.q} className="group px-6 py-5 open:bg-slate-50">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-slate-900">
                <span className="pr-6 font-medium">{item.q}</span>
                <span className="ml-6 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
