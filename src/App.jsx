import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Platform from './components/Platform';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PilotModal from './components/PilotModal';

export default function App() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);

  const openPilotModal = () => {
    setIsPilotModalOpen(true);
  };

  const closePilotModal = () => {
    setIsPilotModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation */}
      <Navbar onRequestPilot={openPilotModal} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Home Section */}
        <Hero onRequestPilot={openPilotModal} />

        {/* 2. About Section (Includes Problem vs ReceptionAI, Founder context & UK Target Markets) */}
        <About onRequestPilot={openPilotModal} />

        {/* 3. Platform Section (Includes 6 Modules + Advanced Intelligence Layer) */}
        <Platform onRequestPilot={openPilotModal} />

        {/* 4. How It Works Section (6-Step Structured Process) */}
        <HowItWorks onRequestPilot={openPilotModal} />

        {/* 5. Market Pricing Section (Exact tiers, add-ons & pilot evidence) */}
        <Pricing onRequestPilot={openPilotModal} />

        {/* 6. FAQ Section (10 Accordion Questions) */}
        <FAQ onRequestPilot={openPilotModal} />
      </main>

      {/* 7. Footer */}
      <Footer onRequestPilot={openPilotModal} />

      {/* Request a Pilot Modal */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={closePilotModal}
      />
    </div>
  );
}
