import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { ArtistProfile } from '../types';
import heroBrideImg from '../assets/images/hero_indian_bride_1792749500113.jpg';

interface HeroProps {
  profile: ArtistProfile;
  onViewPortfolio: () => void;
  onBookWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onViewPortfolio,
  onBookWhatsApp,
}) => {
  return (
    <section className="relative bg-[#FAF8F5] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#EFE8DD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Focused Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            {/* Artist Brand Tagline */}
            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E7B49] font-medium">
                {profile.name} · {profile.tagline || 'Luxury Bridal Artistry'}
              </span>
            </div>

            {/* Large Attractive Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal leading-[1.12] tracking-tight mb-5 text-balance">
              Your Beauty, <br />
              <span className="italic font-normal text-[#9E7B49]">Your Bridal Story</span>
            </h1>

            {/* Subtitle & Short 2-Sentence About */}
            <p className="text-base sm:text-lg text-[#44403C] leading-relaxed mb-4 font-light">
              Professional Bridal Makeup for Your Most Special Moments.
            </p>
            <p className="text-sm text-[#78716C] leading-relaxed mb-8 max-w-lg font-light">
              Enhancing your authentic radiance with bespoke, long-wearing artistry tailored to your
              outfit and ceremonies. Based in {profile.location}.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onBookWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#1C1917] hover:bg-[#9E7B49] transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Book on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={onViewPortfolio}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] border border-[#D5C9B8] hover:border-[#1C1917] transition-all"
              >
                <span>View Portfolio</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#9E7B49]" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Bridal Photo */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden bg-[#F3EDE2] border border-[#E7DFD4] shadow-lg">
                <img
                  src={heroBrideImg}
                  alt="Radiant Indian bride in royal red bridal lehenga"
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] sm:h-[520px] object-cover object-center transform transition-transform duration-700 hover:scale-[1.02]"
                />
                
                {/* Subtle caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white flex items-center justify-between">
                  <span className="font-display text-base tracking-wide text-white">
                    Bespoke Indian Bridal Artistry
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#FAF8F5]/90 border border-white/20 px-2.5 py-0.5">
                    HD Base
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
