import React from 'react';
import { Sparkles, ArrowRight, Shield } from 'lucide-react';

export default function Footer({ onRequestPilot }) {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const platformLinks = [
    { name: 'AI Receptionist', href: '#platform' },
    { name: 'Smart Check-In', href: '#platform' },
    { name: 'Document Intelligence', href: '#platform' },
    { name: 'Predictive Staffing', href: '#platform' },
    { name: 'HMS/PMS Integration', href: '#platform' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-850 pt-10 pb-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl font-extrabold tracking-tight text-white block">
              Reception<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">AI</span>
            </span>

            <p className="text-sm font-semibold text-slate-200">
              Turning Enquiries Into Appointments, Automatically.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Adaptive AI-powered front-desk automation for healthcare and hospitality SMEs.
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestPilot}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-cyan-600/20 transition active:scale-[0.98]"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Platform Modules
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, UK Location, Placeholder Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span>© 2026 ReceptionAI. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="font-medium text-slate-300">United Kingdom</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
