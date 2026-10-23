import React, { useState } from 'react';
import { LookCategory, PortfolioItem } from '../types';
import { X, Eye, MessageCircle } from 'lucide-react';

interface PortfolioProps {
  items: PortfolioItem[];
  onEnquireLook: (lookTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ items, onEnquireLook }) => {
  const [activeCategory, setActiveCategory] = useState<LookCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterTabs: { id: LookCategory; label: string }[] = [
    { id: 'all', label: 'All Looks' },
    { id: 'traditional', label: 'Traditional Bridal' },
    { id: 'modern', label: 'Modern Bridal' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'reception', label: 'Reception' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white border-b border-[#EFE8DD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with generous whitespace */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E7B49] font-medium block mb-2">
            Selected Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-normal tracking-tight mb-3">
            Bridal Portfolio
          </h2>
          <p className="text-sm text-[#78716C] font-light">
            A visual showcase of timeless rituals, modern day ceremonies, and evening celebrations.
          </p>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#1C1917] text-white'
                      : 'text-[#57534E] hover:text-[#1C1917] bg-[#FAF8F5] border border-[#EAE3D6]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Image-First Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-[#FAF8F5] border border-[#EAE3D6] overflow-hidden transition-all duration-300 hover:border-[#9E7B49] hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE9E0]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/95 text-xs uppercase tracking-wider font-medium text-[#1C1917]">
                    <Eye className="w-3.5 h-3.5 text-[#9E7B49]" />
                    <span>View Look</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium text-[#1C1917]">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Minimal Card Caption */}
              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#1C1917] font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#78716C] font-light mt-0.5">{item.occasion}</p>
                </div>

                <span className="text-xs uppercase tracking-wider text-[#9E7B49] font-medium group-hover:underline">
                  Enquire &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom View */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-white max-w-3xl w-full border border-[#E7DFD4] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white text-[#1C1917] transition-colors border border-[#EAE3D6]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] bg-[#FAF8F5]">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E7B49] font-semibold block mb-1">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="font-display text-2xl text-[#1C1917] font-medium">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#78716C] mt-1 font-light">
                  {selectedItem.occasion} · {selectedItem.palette}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const title = selectedItem.title;
                  setSelectedItem(null);
                  onEnquireLook(title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1917] hover:bg-[#9E7B49] transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
