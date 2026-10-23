/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialArtistProfile, portfolioItems } from './data/portfolioData';
import { ArtistProfile } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DemoCustomizer } from './components/DemoCustomizer';
import { Sliders, MessageCircle } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<ArtistProfile>(initialArtistProfile);
  const [preselectedService, setPreselectedService] = useState<string>('Bridal Makeup');
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWhatsApp = () => {
    const cleanNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
    const message = `Hello ${profile.name}, I am visiting your bridal portfolio and would like to enquire about booking bridal makeup for my upcoming wedding.`;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEnquireLook = (lookTitle: string) => {
    const cleanNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
    const message = `Hello ${profile.name}, I love the "${lookTitle}" look from your bridal portfolio and would like to check availability.`;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#EBDDCF]">
      {/* Top Navbar */}
      <Navbar
        profile={profile}
        onBookWhatsApp={handleBookWhatsApp}
        onOpenCustomizer={() => setCustomizerOpen(true)}
      />

      <main className="flex-1">
        {/* Homepage Hero */}
        <Hero
          profile={profile}
          onViewPortfolio={() => scrollToSection('portfolio')}
          onBookWhatsApp={handleBookWhatsApp}
        />

        {/* Section 1: Bridal Portfolio */}
        <Portfolio
          items={portfolioItems}
          onEnquireLook={handleEnquireLook}
        />

        {/* Section 2: Services */}
        <Services
          onSelectService={handleSelectService}
        />

        {/* Section 3: Contact */}
        <Contact
          profile={profile}
          preselectedService={preselectedService}
        />
      </main>

      {/* Minimal Footer */}
      <Footer
        profile={profile}
        onOpenCustomizer={() => setCustomizerOpen(true)}
      />

      {/* Demo Customizer Drawer for pitching to clients */}
      <DemoCustomizer
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
      />

      {/* Floating Demo Settings Launcher */}
      <div className="fixed bottom-5 left-5 z-30">
        <button
          type="button"
          onClick={() => setCustomizerOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#57534E] hover:text-[#1C1917] bg-white/90 hover:bg-white border border-[#DCD3C5] shadow-md backdrop-blur-xs transition-all hover:border-[#9E7B49] rounded-full"
          title="Customize demo for client"
        >
          <Sliders className="w-3.5 h-3.5 text-[#9E7B49]" />
          <span>Demo Settings</span>
        </button>
      </div>

      {/* Floating WhatsApp Quick Action */}
      <div className="fixed bottom-5 right-5 z-30">
        <button
          type="button"
          onClick={handleBookWhatsApp}
          className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg transition-transform hover:scale-105 rounded-full"
          aria-label="Direct WhatsApp Booking"
        >
          <MessageCircle className="w-4 h-4 fill-white text-transparent" />
          <span className="hidden sm:inline">Book on WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
