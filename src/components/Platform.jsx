import React from 'react';
import { 
  Bot, 
  UserCheck, 
  FileText, 
  TrendingUp, 
  MessageSquareShare, 
  Network, 
  Check, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BrainCircuit,
  Eye,
  Workflow,
  HeartHandshake,
  AlertTriangle,
  Boxes
} from 'lucide-react';

export default function Platform({ onRequestPilot }) {
  const primaryModules = [
    {
      id: 'receptionist',
      title: 'AI Receptionist Assistant',
      badge: 'Multi-Channel Interface',
      icon: Bot,
      color: 'from-blue-600 to-cyan-500',
      description: 'A multi-channel reception interface designed to manage enquiries and routine customer interactions.',
      capabilities: [
        'Automated booking & rescheduling',
        'Document intake & triage',
        'Multilingual support',
        'Pre-visit & post-visit communication',
        'Voice interactions & call handling',
        'WhatsApp, SMS & web chat',
      ],
    },
    {
      id: 'checkin',
      title: 'Intelligent Check-In',
      badge: 'Arrival Automation',
      icon: UserCheck,
      color: 'from-cyan-600 to-teal-500',
      description: 'Digital check-in capabilities designed for clinics, hospitality businesses and other front-desk environments.',
      capabilities: [
        'Voice-enabled self check-in',
        'ID and OCR scanning',
        'Dynamic queue updates & wait estimates',
        'Optional biometric verification readiness',
        'Future-ready payment integration',
      ],
    },
    {
      id: 'documents',
      title: 'AI Document Understanding',
      badge: 'Intake to Structured Data',
      icon: FileText,
      color: 'from-teal-600 to-emerald-500',
      description: 'Processes reception-related documents and converts information into structured data for operational use.',
      capabilities: [
        'Referrals & doctor instructions',
        'Insurance cards & policy checks',
        'Identity documents & passes',
        'Booking vouchers & intake records',
        'Synchronised with connected HMS/PMS environments',
      ],
    },
    {
      id: 'staffing',
      title: 'Predictive Traffic & Staffing',
      badge: 'Operational Forecasting',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-600',
      description: 'Uses historical and operational patterns to estimate visitor volume, waiting times and resource needs.',
      capabilities: [
        'Visitor & patient volume projection',
        'Queue pressure prediction',
        'Expected waiting time calculation',
        'Staffing requirements forecasting',
        'Front-desk resource allocation guidance',
      ],
    },
    {
      id: 'handover',
      title: 'AI Handover Messaging',
      badge: 'Inter-Team Continuity',
      icon: MessageSquareShare,
      color: 'from-purple-600 to-indigo-500',
      description: 'Creates structured, context-aware operational summaries between teams.',
      capabilities: [
        'Reception → Nursing → Administration flows',
        'Reception → Housekeeping → Operations flows',
        'Highlights priority actions for next shifts',
        'Flags potentially missed items or delays',
        'Context-rich shift handoff logs',
      ],
    },
    {
      id: 'integration',
      title: 'HMS/PMS Integration Layer',
      badge: 'System Interoperability',
      icon: Network,
      color: 'from-cyan-600 to-blue-600',
      description: 'ReceptionAI is designed to complement existing management systems through integrations.',
      capabilities: [
        'Appointment systems synchronisation',
        'Room & bed allocation updates',
        'Identity verification handshakes',
        'Operational scheduling triggers',
        'Workflow orchestration & live data sync',
      ],
    },
  ];

  const intelligenceCards = [
    {
      title: 'Adaptive Micro-Workflow Engine',
      desc: 'ReceptionAI can adapt reception workflows based on observed operational behaviour instead of relying solely on fixed automation rules.',
      icon: Workflow,
    },
    {
      title: 'Context Intelligence',
      desc: 'The system interprets factors such as workload, queues, urgency and operating conditions before determining the next action.',
      icon: Eye,
    },
    {
      title: 'Digital Reception Twin',
      desc: "ReceptionAI can model an organisation's communication style, escalation preferences and service behaviour.",
      icon: BrainCircuit,
    },
    {
      title: 'Emotion-Aware Queue Intelligence',
      desc: 'Context and sentiment signals can help inform service prioritisation rather than relying entirely on first-come-first-served logic.',
      icon: HeartHandshake,
    },
    {
      title: 'Predictive Failure Prevention',
      desc: 'The platform can identify potential workflow problems before execution, such as missing information or scheduling conflicts.',
      icon: AlertTriangle,
    },
    {
      title: 'Collective Intelligence',
      desc: 'Anonymised operational learning can help deployments improve while maintaining privacy.',
      icon: Boxes,
    },
  ];

  return (
    <section id="platform" className="py-14 sm:py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            One Intelligent Layer. Multiple Reception Workflows.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            ReceptionAI brings customer communication, workflow automation, operational intelligence and business-system integrations together within one AI-powered reception platform.
          </p>
        </div>

        {/* 6 Primary Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10">
          {primaryModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="group relative rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-cyan-500/50 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/50 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-300 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700">
                      {mod.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {mod.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 pt-4 border-t border-slate-750">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Key Capabilities:
                    </p>
                    {mod.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-cyan-400/80">HMS / PMS Ready</span>
                  <button
                    onClick={onRequestPilot}
                    className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-300 font-medium transition-colors"
                  >
                    <span>Request pilot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ADVANCED INTELLIGENCE LAYER */}
        <div className="rounded-3xl bg-slate-950/80 border border-slate-800 p-6 sm:p-9 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-7">
            <span className="text-xs font-semibold text-teal-400 tracking-wider uppercase">
              DEEP ARCHITECTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
              Powered by Adaptive Reception Intelligence
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Beyond simple decision trees, ReceptionAI operates as an adaptive layer evaluating live operational context before workflow dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intelligenceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 mb-3.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span>Built strictly to assist reception teams and operational coordinators without clinical claims.</span>
            <button
              onClick={onRequestPilot}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-850 hover:bg-slate-800 text-cyan-300 border border-slate-750 font-medium transition"
            >
              <span>Explore pilot deployment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
