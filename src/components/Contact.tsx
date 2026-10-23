import React, { useState, useEffect } from 'react';
import { ArtistProfile } from '../types';
import { MessageCircle, Instagram, MapPin, Calendar, User, ArrowRight } from 'lucide-react';

interface ContactProps {
  profile: ArtistProfile;
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ profile, preselectedService }) => {
  const [name, setName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [service, setService] = useState(preselectedService || 'Bridal Makeup');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const [formError, setFormError] = useState('');
  const [directUrl, setDirectUrl] = useState<string | null>(null);

  const cleanNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');

  const handleDirectWhatsApp = () => {
    const text = `Hello ${profile.name}, I would like to check your availability for bridal makeup services.`;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!eventDate) {
      setFormError('Please select your wedding / event date.');
      return;
    }
    setFormError('');

    const text = `Hello ${profile.name},

I would like to enquire about your availability:
• Client Name: ${name.trim()}
• Event Type: ${service}
• Event Date: ${eventDate}
• Location / Venue: ${city.trim() || profile.location}

Please let me know if your date is open. Thank you!`;

    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
    setDirectUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E7B49] font-medium block mb-2">
            Reservations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-normal tracking-tight mb-3">
            Book on WhatsApp
          </h2>
          <p className="text-sm text-[#78716C] font-light max-w-md">
            Check availability directly with {profile.name} for your wedding dates.
          </p>
        </div>

        {/* Minimal 2-Column Contact & Form Box */}
        <div className="bg-[#FAF8F5] border border-[#EAE3D6] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Quick Links Column */}
            <div className="md:col-span-5 space-y-6 md:border-r md:border-[#EAE3D6] md:pr-8">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E7B49] font-semibold block mb-1">
                  Instant Enquiry
                </span>
                <p className="text-sm text-[#44403C] font-light mb-4">
                  Tap below to message directly or fill the quick details on the right.
                </p>
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1917] hover:bg-[#9E7B49] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* Minimal links: Instagram & Location */}
              <div className="pt-6 border-t border-[#EAE3D6] space-y-3 text-xs text-[#57534E]">
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#9E7B49] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#9E7B49] shrink-0" />
                  <span className="font-medium">{profile.instagramHandle}</span>
                </a>

                <div className="flex items-center gap-2.5 text-[#78716C]">
                  <MapPin className="w-4 h-4 text-[#9E7B49] shrink-0" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Date Availability Form */}
            <div className="md:col-span-7">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#78716C] mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Radhika"
                        className="w-full px-3 py-2.5 bg-white border border-[#EAE3D6] text-xs text-[#1C1917] focus:outline-none focus:border-[#9E7B49]"
                      />
                      <User className="w-3.5 h-3.5 text-[#A8A29E] absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#78716C] mb-1">
                      Event Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        min={todayStr}
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-[#EAE3D6] text-xs text-[#1C1917] focus:outline-none focus:border-[#9E7B49]"
                      />
                      <Calendar className="w-3.5 h-3.5 text-[#A8A29E] absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#78716C] mb-1">
                      Service
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-[#EAE3D6] text-xs text-[#1C1917] focus:outline-none focus:border-[#9E7B49]"
                    >
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Reception">Reception</option>
                      <option value="Party Makeup">Party Makeup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#78716C] mb-1">
                      City / Venue
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Mumbai or Udaipur"
                      className="w-full px-3 py-2.5 bg-white border border-[#EAE3D6] text-xs text-[#1C1917] focus:outline-none focus:border-[#9E7B49]"
                    />
                  </div>
                </div>

                {formError && (
                  <p className="text-xs text-red-600 font-medium bg-red-50 p-2 border border-red-200">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1917] hover:bg-[#9E7B49] transition-colors"
                >
                  <span>Send Enquiry on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {directUrl && (
                  <p className="text-xs text-center text-[#9E7B49] pt-1">
                    WhatsApp opened in a new tab.{' '}
                    <a
                      href={directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium hover:text-[#1C1917]"
                    >
                      Click here
                    </a>{' '}
                    if it did not open automatically.
                  </p>
                )}

                <p className="text-[11px] text-center text-[#8C827A] pt-1">
                  Enquiries are confirmed only after date availability and advance booking receipt.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
