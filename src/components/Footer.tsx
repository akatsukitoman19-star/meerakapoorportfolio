import React from 'react';
import { ArtistProfile } from '../types';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  profile: ArtistProfile;
  onOpenCustomizer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenCustomizer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] py-12 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2E2A27]">
          <div>
            <span className="font-display text-2xl tracking-wide text-white block">
              {profile.name}
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#9E7B49]">
              Bridal Artistry · {profile.location}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#9E7B49] text-[#A8A29E] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>{profile.instagramHandle}</span>
            </a>

            <a
              href={`https://wa.me/${cleanNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#9E7B49] text-[#A8A29E] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#78716C]">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

          <div className="flex items-center gap-5">
            {onOpenCustomizer && (
              <button
                type="button"
                onClick={onOpenCustomizer}
                className="hover:text-white transition-colors"
              >
                Demo Settings
              </button>
            )}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
