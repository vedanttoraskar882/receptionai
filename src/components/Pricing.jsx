import React from 'react';
import { Check, ArrowRight, Sparkles, Building, Layers, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Pricing({ onRequestPilot }) {
  const plans = [
    {
      name: 'STARTER',
      price: '£79',
      period: '/ month',
      subtitle: 'For single-site organisations starting with reception automation.',
      isPopular: false,
      features: [
        'Single site',
        'Core enquiry automation',
        'Core booking automation',
        'Reception workflow support',
        'Designed for smaller SMEs',
      ],
    },
    {
      name: 'PROFESSIONAL',
      price: '£149',
      period: '/ month',
      subtitle: 'Suitable for growing organisations requiring integrated workflows.',
      isPopular: true,
      features: [
        'Multi-channel automation',
        'Analytics',
        'HMS/PMS integration',
        'Advanced reception workflows',
        'Suitable for growing organisations',
      ],
    },
    {
      name: 'MULTI-SITE',
      price: '£299',
      period: '/ month',
      subtitle: 'Suitable for organisations operating multiple locations.',
      isPopular: false,
      features: [
        'Multi-site operations',
        'Advanced reporting',
        'Priority support',
        'Broader operational automation',
        'Suitable for organisations operating multiple locations',
      ],
    },
  ];

  const pilotResults = [
    {
      stat: '34%',
      label: 'Reduction in inbound calls requiring manual handling',
    },
    {
      stat: '21% → 9%',
      label: 'Missed-call rate reduction across pilot participants',
    },
    {
      stat: '5.2 Hours',
      label: 'Average administrative time saved per week per business',
    },
    {
      stat: '78%',
      label: 'Positive operational satisfaction reported by front-desk teams',
    },
    {
      stat: '11 of 18',
      label: 'Participants willing to continue after the pilot',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 mb-3">
            <span>TRANSPARENT UK SME PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Market Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Accessible front-desk intelligence engineered for small and mid-sized healthcare and hospitality providers.
          </p>
        </div>

        {/* 3 Critical Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                plan.isPopular
                  ? 'bg-slate-950 text-white shadow-2xl ring-2 ring-cyan-500 scale-100 lg:-translate-y-2'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  Popular
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-sm font-extrabold tracking-wider uppercase ${
                    plan.isPopular ? 'text-cyan-400' : 'text-slate-500'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                      plan.isPopular ? 'text-white' : 'text-slate-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm font-medium ${
                      plan.isPopular ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`mt-3 text-xs leading-relaxed ${
                    plan.isPopular ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {plan.subtitle}
                  </p>
                </div>

                {/* Features List */}
                <div className={`space-y-3 pt-6 border-t ${
                  plan.isPopular ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${
                    plan.isPopular ? 'text-slate-400' : 'text-slate-400'
                  }`}>
                    Included:
                  </p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`rounded-full p-0.5 mt-0.5 shrink-0 ${
                        plan.isPopular ? 'bg-cyan-500/20 text-cyan-400' : 'bg-teal-50 text-teal-600'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-xs ${
                        plan.isPopular ? 'text-slate-200' : 'text-slate-700'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6">
                <button
                  onClick={onRequestPilot}
                  className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 text-slate-950 hover:opacity-95 font-bold'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>Request a Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ADDITIONAL COMMERCIAL DETAILS */}
        <div className="mb-20 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            <Layers className="w-4 h-4 text-cyan-600" />
            <span>Additional Commercial Details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Onboarding & Configuration */}
            <div className="pr-0 md:pr-6">
              <div className="flex items-baseline justify-between mb-1">
                <h4 className="text-base font-bold text-slate-900">Onboarding &amp; Configuration</h4>
                <span className="text-lg font-extrabold text-slate-900">£199 <span className="text-xs font-normal text-slate-500">one-off</span></span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Applicable during initial onboarding and configuration where required.
              </p>
            </div>

            {/* Voice & Kiosk Channel Add-On */}
            <div className="pt-6 md:pt-0 pl-0 md:pl-6">
              <div className="flex items-baseline justify-between mb-1">
                <h4 className="text-base font-bold text-slate-900">Voice &amp; Kiosk Channel Add-On</h4>
                <span className="text-lg font-extrabold text-slate-900">£39 <span className="text-xs font-normal text-slate-500">/ month</span></span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Optional additional voice and kiosk channel capability.
              </p>
            </div>
          </div>
        </div>

        {/* PILOT / TRACTION SUPPORTING SECTION */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-cyan-400 border border-slate-700 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Pilot Evidence Strip</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tested Against Real SME Reception Challenges
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              18 UK SMEs participated in a structured pilot across a 6–8 week duration.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {pilotResults.map((res, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-800/80 border border-slate-750 flex flex-col justify-between"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 mb-2">
                  {res.stat}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {res.label}
                </p>
              </div>
            ))}
          </div>

          {/* Mandatory Disclaimer Note */}
          <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 italic">
            "Pilot outcomes represent reported results from the structured ReceptionAI pilot and should not be interpreted as guaranteed future performance."
          </div>
        </div>

      </div>
    </section>
  );
}
