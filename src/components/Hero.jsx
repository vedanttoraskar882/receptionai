import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, Shield, Cpu, Zap } from 'lucide-react';
import HeroWorkflowVisual from './HeroWorkflowVisual';

export default function Hero({ onRequestPilot }) {
  const scrollToPlatform = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#platform');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-950 text-white flex items-center">
      {/* Background Animated Gradient Shapes and Subtle Grid */}
      <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-sm shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>AI-Powered Reception Automation</span>
            </div>

            {/* Main Headline H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Turning Enquiries Into Appointments,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                Automatically.
              </span>
            </h1>

            {/* Alternative visual line below */}
            <p className="text-lg sm:text-xl font-medium text-slate-300 tracking-tight">
              Adaptive AI for Smarter Front-Desk Operations.
            </p>

            {/* Supporting paragraph */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              ReceptionAI is an intelligent reception automation platform built for healthcare and hospitality SMEs. Automate enquiries, bookings, check-ins, documents, communication and front-desk workflows across voice, WhatsApp, SMS, web chat and kiosks — while connecting with the systems you already use.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onRequestPilot}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 shadow-lg shadow-cyan-600/25 transition-all transform active:scale-[0.98]"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToPlatform}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
              >
                <span>Explore the Platform</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 border-t border-slate-850 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                <span>Works on top of core HMS / PMS</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Adaptive micro-workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>Fast SME onboarding</span>
              </div>
            </div>

          </div>

          {/* Right Column: Workflow Visualization */}
          <div className="lg:col-span-6 lg:pl-4">
            <HeroWorkflowVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
