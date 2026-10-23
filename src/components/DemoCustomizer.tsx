import React from 'react';
import { ArtistProfile } from '../types';
import { Sliders, X, Check, RotateCcw, Sparkles } from 'lucide-react';
import { initialArtistProfile } from '../data/portfolioData';

interface DemoCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ArtistProfile;
  onUpdateProfile: (updated: ArtistProfile) => void;
}

export const DemoCustomizer: React.FC<DemoCustomizerProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
}) => {
  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onUpdateProfile({
      ...profile,
      [name]: value,
      // Keep display phone and whatsapp number in sync if phone updated
      ...(name === 'displayPhone' ? { whatsappNumber: value.replace(/[^0-9]/g, '') } : {}),
      ...(name === 'instagramHandle'
        ? {
            instagramUrl: `https://instagram.com/${value.replace(/^@/, '')}`,
          }
        : {}),
    });
  };

  const applyPreset = (preset: {
    name: string;
    location: string;
    experience: string;
    handle: string;
  }) => {
    onUpdateProfile({
      ...profile,
      name: preset.name,
      location: preset.location,
      experienceYears: preset.experience,
      instagramHandle: preset.handle,
      instagramUrl: `https://instagram.com/${preset.handle.replace(/^@/, '')}`,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl border-l border-[#EAE3D6] flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EFE8DD] flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <div className="flex items-center gap-1.5 text-[#9E7B49] text-[11px] uppercase tracking-wider font-semibold">
              <Sliders className="w-3.5 h-3.5" />
              <span>Demo Presentation Controls</span>
            </div>
            <h3 className="font-display text-2xl text-[#1C1917] font-medium mt-1">
              Personalize for Client
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#78716C] hover:text-[#1C1917] hover:bg-[#EAE3D6] transition-colors"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 flex-1">
          <div className="p-3.5 bg-[#FAF8F5] border border-[#EAE3D6] text-xs text-[#57534E] leading-relaxed">
            <span className="font-semibold text-[#1C1917]">Sales Pitch Tip: </span>
            Type your prospect’s name, phone, and Instagram handle below. The entire portfolio,
            WhatsApp booking message, and top navigation will instantly update in real-time.
          </div>

          {/* Quick Presets */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#8C827A] mb-2">
              Quick Client Presets
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() =>
                  applyPreset({
                    name: 'Simran Kaur',
                    location: 'Delhi NCR & Destination',
                    experience: '6+ Years',
                    handle: '@simrankaur_artistry',
                  })
                }
                className="p-2 text-left bg-[#FAF8F5] border border-[#EAE3D6] hover:border-[#9E7B49] text-[#1C1917] transition-colors"
              >
                <div className="font-medium">Simran Kaur</div>
                <div className="text-[10px] text-[#78716C]">Delhi NCR</div>
              </button>

              <button
                type="button"
                onClick={() =>
                  applyPreset({
                    name: 'Pooja Varma',
                    location: 'Mumbai & Goa Destination',
                    experience: '9+ Years',
                    handle: '@poojavarma.bridal',
                  })
                }
                className="p-2 text-left bg-[#FAF8F5] border border-[#EAE3D6] hover:border-[#9E7B49] text-[#1C1917] transition-colors"
              >
                <div className="font-medium">Pooja Varma</div>
                <div className="text-[10px] text-[#78716C]">Mumbai & Goa</div>
              </button>
            </div>
          </div>

          {/* Fields */}
          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                Artist / Studio Name
              </label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#EAE3D6] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E7B49]"
              />
            </div>

            <div>
              <label className="block font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                WhatsApp & Phone Number
              </label>
              <input
                type="text"
                name="displayPhone"
                value={profile.displayPhone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#EAE3D6] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E7B49]"
              />
              <p className="text-[10px] text-[#8C827A] mt-1">
                WhatsApp messages will automatically route to this number.
              </p>
            </div>

            <div>
              <label className="block font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                Instagram Handle
              </label>
              <input
                type="text"
                name="instagramHandle"
                value={profile.instagramHandle}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#EAE3D6] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E7B49]"
              />
            </div>

            <div>
              <label className="block font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                City / Location
              </label>
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#EAE3D6] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E7B49]"
              />
            </div>

            <div>
              <label className="block font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                Experience
              </label>
              <input
                type="text"
                name="experienceYears"
                value={profile.experienceYears}
                onChange={handleInputChange}
                placeholder="e.g. 5+ Years"
                className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#EAE3D6] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E7B49]"
              />
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-[#EFE8DD] bg-[#FAF8F5] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onUpdateProfile(initialArtistProfile)}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-[#78716C] hover:text-[#1C1917] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1917] hover:bg-[#9E7B49] transition-colors"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Apply & Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};
