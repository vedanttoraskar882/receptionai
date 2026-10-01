import React from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  Stethoscope, 
  Hotel, 
  HeartPulse, 
  Boxes, 
  PhoneOff, 
  CalendarClock, 
  Share2, 
  FileSpreadsheet,
  Zap, 
  Workflow, 
  Bot, 
  Layers,
  Award,
  ArrowRight
} from 'lucide-react';

export default function About({ onRequestPilot }) {
  const problemPoints = [
    { title: 'Missed Enquiries', desc: 'Unanswered calls during peak hours lead to lost patients and guests.' },
    { title: 'Manual Booking', desc: 'Staff bogged down in repetitive calendar lookups and phone coordination.' },
    { title: 'Disconnected Channels', desc: 'WhatsApp, phone, and walk-ins managed across disconnected tools.' },
    { title: 'Administrative Workload', desc: 'Intake forms, handovers, and data entry draining frontline time.' },
  ];

  const receptionSolutions = [
    { title: 'Automated Responses', desc: 'Instant 24/7 resolution across phone, WhatsApp, SMS, and web.' },
    { title: 'Smart Booking', desc: 'Autonomous scheduling synchronized directly with existing HMS / PMS.' },
    { title: 'Unified Communication', desc: 'Single conversational intelligence layer capturing all touchpoints.' },
    { title: 'Adaptive Workflows', desc: 'Dynamic triage, document intake, and context-aware operational routing.' },
  ];

  const marketCategories = [
    {
      title: 'Healthcare Practices',
      badge: '~24,500 Establishments',
      icon: Stethoscope,
      examples: ['GP practices', 'Dental clinics', 'Private clinics', 'Specialist providers'],
      color: 'from-blue-500/10 to-blue-600/5',
      borderColor: 'border-blue-200/80',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Independent Hospitality',
      badge: '~26,500 Businesses',
      icon: Hotel,
      examples: ['Boutique hotels', 'Guest houses', 'Hostels', 'Independent hotels'],
      color: 'from-cyan-500/10 to-cyan-600/5',
      borderColor: 'border-cyan-200/80',
      iconColor: 'text-cyan-600',
    },
    {
      title: 'Wellness & Specialist Care',
      badge: '~8,500 Organisations',
      icon: HeartPulse,
      examples: ['Physiotherapy', 'Wellness clinics', 'Gyms', 'Spas'],
      color: 'from-teal-500/10 to-teal-600/5',
      borderColor: 'border-teal-200/80',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Technology Partners',
      badge: '~200 Software Partners',
      icon: Boxes,
      examples: ['PMS developers', 'HMS developers', 'Vertical SaaS providers', 'System integrators'],
      color: 'from-indigo-500/10 to-indigo-600/5',
      borderColor: 'border-indigo-200/80',
      iconColor: 'text-indigo-600',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-16 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100/70 text-cyan-900 border border-cyan-300 mb-3">
            <span>OPERATIONAL CHALLENGE &amp; SOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Smarter Layer for Front-Desk Operations
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            ReceptionAI is designed to address one of the most persistent operational challenges in healthcare and hospitality: repetitive, fragmented and heavily manual reception processes.
          </p>
        </div>

        {/* Two-Column: Business Explanation (Left) vs Problem / Solution Matrix (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Left Column: Business Explanation */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                The Frontline Reality
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Many smaller organisations still rely on:
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  <span>Telephone-heavy booking systems</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  <span>Manual document processing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  <span>Human-dependent reception workflows</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  <span>Disconnected communication channels</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  <span>Manual handovers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  <span>Repetitive administrative work</span>
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-slate-200 text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                ReceptionAI introduces adaptive AI-based workflow automation that works alongside existing business systems.
              </div>
            </div>

            {/* Subsection: Built for Real Front-Desk Environments */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-lg border border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>Workflow Centric</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                Built for Real Front-Desk Environments
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                "ReceptionAI is designed around real reception workflows rather than generic task automation. The system interprets operational context, customer behaviour, workload patterns and service requirements before deciding how workflows should be executed."
              </p>
            </div>
          </div>

          {/* Right Column: Problem vs ReceptionAI Comparison */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Header comparison banner */}
            <div className="grid grid-cols-2 gap-4 pb-2.5 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-rose-700">Traditional Reception</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-800">ReceptionAI Layer</span>
              </div>
            </div>

            {/* Paired comparison cards */}
            <div className="space-y-3">
              {problemPoints.map((prob, idx) => {
                const sol = receptionSolutions[idx];
                return (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
                    
                    {/* Problem side */}
                    <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-100 flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm sm:text-base font-bold text-slate-900">{prob.title}</p>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">{prob.desc}</p>
                      </div>
                    </div>

                    {/* ReceptionAI side */}
                    <div className="p-3.5 rounded-xl bg-gradient-to-br from-teal-50/80 to-cyan-50/60 border border-teal-200/90 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm sm:text-base font-bold text-teal-950">{sol.title}</p>
                        <p className="text-xs sm:text-sm text-teal-800 mt-0.5 leading-relaxed">{sol.desc}</p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom summary highlight banner */}
            <div className="p-4 rounded-xl bg-cyan-900 text-white border border-cyan-800 text-sm flex items-center justify-between shadow-md">
              <span className="font-medium text-slate-200">Intelligent automation layer on top of existing PMS/HMS.</span>
              <button
                onClick={onRequestPilot}
                className="inline-flex items-center gap-1.5 font-bold text-cyan-300 hover:text-white transition"
              >
                <span>Request a pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* FULL-WIDTH PROMINENT FOUNDER SECTION */}
        <div className="w-full mb-10 rounded-3xl border border-slate-750 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-xl shadow-black/30 p-7 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Founder Bio & Experience */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Operational Leadership</span>
                </div>
                <span className="text-xs font-semibold text-teal-300 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
                  Co-Founder
                </span>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Sarita Kumari Chaudhary
                </h4>
                <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
                  Co-Founder • Operations &amp; Front-Desk Strategy
                </p>
              </div>

              <h5 className="text-base sm:text-lg font-bold text-slate-100 uppercase tracking-wide">
                Built from Front-Line Operational Experience
              </h5>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                "ReceptionAI is co-founded by Sarita Kumari Chaudhary, whose background spans healthcare front-desk operations, patient coordination, communications and business strategy. Her practical understanding of reception environments informs the platform's approach to customer journeys and workflow automation."
              </p>
            </div>

            {/* Right Col: Frontline Domain Expertise Cards */}
            <div className="lg:col-span-5 bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-3.5">
              <p className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider">
                Frontline Domain Expertise
              </p>
              
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 text-slate-200 bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 hover:border-cyan-500/40 transition">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
                  <span className="font-semibold text-sm">Healthcare Front-Desk Operations</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 hover:border-teal-500/40 transition">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shrink-0" />
                  <span className="font-semibold text-sm">Patient Coordination &amp; Triage</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 hover:border-blue-500/40 transition">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0" />
                  <span className="font-semibold text-sm">Multi-Channel Reception Communications</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 hover:border-indigo-500/40 transition">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shrink-0" />
                  <span className="font-semibold text-sm">SME Workflow Strategy &amp; Automation</span>
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={onRequestPilot}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <span>Request pilot partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* TARGET MARKET AREA: Built for UK Service Businesses */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Built for UK Service Businesses
            </h3>
            <p className="text-sm text-slate-600 mt-1.5">
              Tailored micro-workflows addressing operational realities across four foundational market categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {marketCategories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-5 bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center ${item.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold font-mono text-slate-600 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h4>
                    
                    <p className="text-xs text-slate-500 mb-3 font-medium">Examples:</p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {item.examples.map((ex, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Targeting over 60,000 independent UK establishments and 200 software developers without replacing existing HMS/PMS core systems.
          </div>
        </div>

      </div>
    </section>
  );
}
