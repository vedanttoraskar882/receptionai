import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQ({ onRequestPilot }) {
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is ReceptionAI?',
      a: 'ReceptionAI is an AI-powered reception automation platform designed for small and mid-sized healthcare and hospitality organisations. It automates front-desk micro-workflows such as enquiries, bookings, document processing, check-ins and communication.',
    },
    {
      q: 'Does ReceptionAI replace our existing HMS or PMS?',
      a: 'No. ReceptionAI is designed as an intelligent automation layer that works alongside existing Hospital Management Systems and Property Management Systems.',
    },
    {
      q: 'Which communication channels can ReceptionAI support?',
      a: 'The platform is designed around channels including voice, WhatsApp, SMS, web chat, dashboards and intelligent kiosks.',
    },
    {
      q: 'Who is ReceptionAI designed for?',
      a: 'ReceptionAI primarily targets healthcare practices, private clinics, dental providers, wellness businesses, independent hospitality operators and PMS/HMS technology partners.',
    },
    {
      q: 'Can ReceptionAI help with appointment booking?',
      a: 'Yes. Core reception workflows include customer enquiries, booking, rescheduling and related pre-visit and post-visit communication.',
    },
    {
      q: 'Can it process documents?',
      a: 'ReceptionAI includes AI document-understanding capabilities designed to process items such as referrals, identity documents, insurance information, booking vouchers and operational reports.',
    },
    {
      q: 'Does ReceptionAI support multiple locations?',
      a: 'Yes. The Multi-Site plan is designed for organisations operating across multiple sites and includes advanced reporting and priority support.',
    },
    {
      q: 'Do we need a kiosk?',
      a: 'No. Kiosk capability is optional. ReceptionAI can also operate across other supported communication channels.',
    },
    {
      q: 'How much does ReceptionAI cost?',
      a: 'Starter is £79 per month, Professional is £149 per month and Multi-Site is £299 per month. A £199 one-off onboarding/configuration fee may apply and an optional Voice & Kiosk add-on is available for £39 per month.',
    },
    {
      q: 'How can we evaluate ReceptionAI?',
      a: 'Businesses interested in exploring ReceptionAI can submit a Request a Pilot form and provide their organisation details.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Everything you need to know about ReceptionAI's micro-workflow automation architecture and pilot deployment.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'border-cyan-400/80 bg-slate-50/70 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-cyan-100 text-cyan-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA within FAQ */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            Have a specific HMS/PMS integration requirement?
          </p>
          <p className="text-sm text-slate-800 font-medium mb-3">
            Speak directly with our technical team during your pilot consultation.
          </p>
          <button
            onClick={onRequestPilot}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold shadow-sm transition"
          >
            <span>Request a Pilot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
