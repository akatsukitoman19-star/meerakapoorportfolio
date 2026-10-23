import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { ArtistProfile } from '../types';

interface NavbarProps {
  profile: ArtistProfile;
  onBookWhatsApp: () => void;
  onOpenCustomizer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onBookWhatsApp, onOpenCustomizer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EFE8DD]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Artist Name & Minimal Tagline */}
          <a
            href="#"
            className="flex flex-col tracking-wider text-left group whitespace-nowrap shrink-0"
          >
            <span className="font-display text-2xl sm:text-3xl font-medium tracking-wide text-[#1C1917] group-hover:text-[#9E7B49] transition-colors">
              {profile.name}
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C827A] font-sans -mt-0.5">
              Bridal Makeup
            </span>
          </a>

          {/* Zone 2: 3 Clean Single-Line Nav Links */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#57534E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="whitespace-nowrap hover:text-[#1C1917] transition-colors relative py-1 text-xs uppercase tracking-widest text-[#57534E]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Book on WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onOpenCustomizer && (
              <button
                type="button"
                onClick={onOpenCustomizer}
                className="text-[11px] text-[#8C827A] hover:text-[#1C1917] px-2.5 py-1.5 border border-[#E7DFD4] hover:border-[#9E7B49] transition-colors whitespace-nowrap"
                title="Edit demo details"
              >
                Demo Settings
              </button>
            )}
            <button
              type="button"
              onClick={onBookWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-semibold text-white bg-[#1C1917] hover:bg-[#9E7B49] transition-colors duration-200 shadow-xs whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
              <span>Book on WhatsApp</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#292524] hover:text-[#9E7B49]"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EFE8DD] bg-[#FAF8F5] px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm uppercase tracking-wider font-medium text-[#292524] hover:text-[#9E7B49] py-2 border-b border-[#F0EBE1]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookWhatsApp();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1917] hover:bg-[#9E7B49] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Book on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
