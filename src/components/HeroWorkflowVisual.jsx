import React from 'react';
import { 
  MessageSquareText, 
  Bot, 
  GitBranch, 
  CheckCircle2, 
  FileCheck, 
  Users2, 
  ClipboardList, 
  TrendingUp, 
  Sparkles,
  ArrowDown
} from 'lucide-react';

export default function HeroWorkflowVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Glow background behind the visualization */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl -z-10 transform rotate-1 scale-95" />

      {/* Main Glass Container */}
      <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-xl p-5 sm:p-7 shadow-2xl shadow-black/40 overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400">reception-workflow.live</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Active Pipeline
            </span>
          </div>
        </div>

        {/* Central Vertical Micro-Workflow Pipeline */}
        <div className="relative space-y-3.5 z-10">
          
          {/* STEP 1: Incoming Enquiry */}
          <div className="relative flex items-center justify-between p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/70 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <MessageSquareText className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">Incoming Enquiry</p>
                <p className="text-[11px] text-slate-400">WhatsApp / Voice / Web / Kiosk</p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
              Received 10:42 AM
            </span>
          </div>

          {/* Connector 1 */}
          <div className="flex justify-center -my-1">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500/50 to-cyan-500/50" />
              <ArrowDown className="w-3.5 h-3.5 text-cyan-400 -mt-1" />
            </div>
          </div>

          {/* STEP 2: AI Reception Agent */}
          <div className="relative flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-slate-800/90 to-slate-850 border border-cyan-500/40 shadow-sm shadow-cyan-500/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-semibold text-white tracking-wide">AI Reception Agent</p>
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </div>
                <p className="text-[11px] text-cyan-300/80">Intent parsed • Context interpreted</p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              Autonomous
            </span>
          </div>

          {/* Connector 2 */}
          <div className="flex justify-center -my-1">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-gradient-to-b from-cyan-500/50 to-teal-500/50" />
              <ArrowDown className="w-3.5 h-3.5 text-teal-400 -mt-1" />
            </div>
          </div>

          {/* STEP 3: Workflow Intelligence */}
          <div className="relative flex items-center justify-between p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/70 hover:border-teal-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                <GitBranch className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">Workflow Intelligence</p>
                <p className="text-[11px] text-slate-400">HMS/PMS slot match & safety validation</p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
              Synced
            </span>
          </div>

          {/* Connector 3 */}
          <div className="flex justify-center -my-1">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-gradient-to-b from-teal-500/50 to-emerald-500/50" />
              <ArrowDown className="w-3.5 h-3.5 text-emerald-400 -mt-1" />
            </div>
          </div>

          {/* STEP 4: Booking Confirmed */}
          <div className="relative flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/50 shadow-sm shadow-emerald-500/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">Booking Confirmed</p>
                <p className="text-[11px] text-emerald-300/80">SMS reminder sent • Calendar updated</p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Completed &lt; 2.1s
            </span>
          </div>

        </div>

        {/* Floating Mini Cards - Subtly animated */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-800">
          
          <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 flex items-center gap-2 hover:border-slate-600 transition">
            <FileCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-slate-200 truncate">Document Verified</p>
              <p className="text-[9px] text-slate-400">OCR & NHS Referral</p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 flex items-center gap-2 hover:border-slate-600 transition">
            <Users2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-slate-200 truncate">Queue Updated</p>
              <p className="text-[9px] text-slate-400">Arrival marked 4m wait</p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 flex items-center gap-2 hover:border-slate-600 transition col-span-2 sm:col-span-1">
            <ClipboardList className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-slate-200 truncate">Handover Generated</p>
              <p className="text-[9px] text-slate-400">Ops briefing ready</p>
            </div>
          </div>

        </div>

        {/* Floating Mini Card Badge 4 & 5 inline */}
        <div className="mt-2.5 flex items-center justify-between text-[11px] px-3 py-1.5 rounded-lg bg-slate-850/60 border border-slate-800 text-slate-300">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-medium text-slate-200">Staffing Forecast Ready:</span>
            <span className="text-slate-400">Peak expected 14:00</span>
          </div>
          <span className="text-[10px] text-cyan-400 font-mono">Synced to HMS</span>
        </div>

      </div>

      {/* Floating Badges around the dashboard */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-700 shadow-sm backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          24/7 AI Assistance
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-700 shadow-sm backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          Multi-Channel
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-700 shadow-sm backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          HMS/PMS Ready
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-700 shadow-sm backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          UK SME Focused
        </span>
      </div>
    </div>
  );
}
