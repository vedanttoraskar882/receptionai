import React, { useState } from 'react';
import { 
  MessageSquare, 
  Brain, 
  Workflow, 
  ShieldAlert, 
  RefreshCw, 
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function HowItWorks({ onRequestPilot }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Customer Interaction',
      desc: 'An enquiry begins through voice, web chat, SMS, WhatsApp or an intelligent kiosk.',
      icon: MessageSquare,
      tag: 'Omni-channel Entry',
      detail: 'Captures caller audio, messages, or walk-in kiosk intent with zero hold time.',
    },
    {
      num: '02',
      title: 'Understand Context',
      desc: 'ReceptionAI interprets the request together with relevant operational and behavioural context.',
      icon: Brain,
      tag: 'Intent & Semantics',
      detail: 'Evaluates urgent symptoms, guest preferences, current clinic capacity, and tone.',
    },
    {
      num: '03',
      title: 'Build the Workflow',
      desc: 'The adaptive micro-workflow engine determines or refines the appropriate sequence of actions.',
      icon: Workflow,
      tag: 'Dynamic Orchestration',
      detail: 'Selects the exact micro-steps: booking, ID intake, reschedule, or escalation.',
    },
    {
      num: '04',
      title: 'Validate Before Execution',
      desc: 'The predictive safety layer checks for missing data, conflicts or potential workflow failures.',
      icon: ShieldAlert,
      tag: 'Safety & Guardrails',
      detail: 'Checks for overlapping clinician diaries, room availability, and prerequisite files.',
    },
    {
      num: '05',
      title: 'Execute & Synchronise',
      desc: 'The required action is completed and relevant information can be synchronised with connected HMS/PMS systems.',
      icon: RefreshCw,
      tag: 'Two-Way Sync',
      detail: 'Dispatches instant calendar update, SMS confirmation, and staff notification.',
    },
    {
      num: '06',
      title: 'Learn & Improve',
      desc: 'Anonymised optimisation signals can contribute to improving future workflow performance.',
      icon: Sparkles,
      tag: 'Continuous Tuning',
      detail: 'Feeds queue metrics and resolution patterns into operational forecasts.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 mb-3">
            <span>STRUCTURED PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Enquiry to Completed Workflow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            ReceptionAI coordinates customer interactions, operational intelligence and existing business systems through a structured AI workflow.
          </p>
        </div>

        {/* Desktop Process Display: Interactive Stepper & Pipeline */}
        <div className="hidden lg:block mb-12">
          {/* Step numbers navigation bar */}
          <div className="grid grid-cols-6 gap-3 mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
            
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = activeStep > idx;
              const StepIcon = step.icon;

              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 flex flex-col items-center text-center group focus:outline-none transition-all`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white ring-4 ring-cyan-500/20 scale-110'
                        : isPassed
                        ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 group-hover:border-slate-700'
                    }`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <span className={`mt-2.5 text-xs font-mono font-semibold tracking-wider ${
                    isSelected ? 'text-cyan-400' : 'text-slate-500'
                  }`}>
                    STEP {step.num}
                  </span>
                  <span className={`text-xs font-semibold mt-0.5 line-clamp-1 ${
                    isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'
                  }`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-700/80 p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800">
                    STEP {steps[activeStep].num}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {steps[activeStep].tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-base text-slate-200 mb-4 leading-relaxed font-normal">
                  "{steps[activeStep].desc}"
                </p>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span><strong>Operational Flow:</strong> {steps[activeStep].detail}</span>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 5))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < 5 ? prev + 1 : 0))}
                  className="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-sm transition"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Connected Step Cards */}
        <div className="lg:hidden space-y-4 relative">
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-800 -z-0" />
          
          {steps.map((step) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.num}
                className="relative z-10 flex items-start gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0 font-bold text-sm">
                  <StepIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                      STEP {step.num}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-2">
                    "{step.desc}"
                  </p>
                  <p className="text-[11px] text-slate-400 bg-slate-950/80 p-2 rounded-lg border border-slate-850">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onRequestPilot}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs uppercase tracking-wider shadow-md shadow-cyan-600/20"
          >
            <span>See how ReceptionAI adapts to your workflows</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
