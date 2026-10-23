import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const serviceList = [
    {
      name: 'Bridal Makeup',
      desc: 'Bespoke ceremony makeup, HD/airbrush skin prep, hair styling & draping.',
    },
    {
      name: 'Engagement',
      desc: 'Radiant, romantic soft glam for ring ceremony & roka celebrations.',
    },
    {
      name: 'Reception',
      desc: 'Sultry, camera-ready evening glam for dinner & cocktail parties.',
    },
    {
      name: 'Party Makeup',
      desc: 'Sophisticated event looks for bridesmaids, mothers & close family.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#FAF8F5] border-b border-[#EFE8DD]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with plenty of white space */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E7B49] font-medium block mb-2">
            Offerings
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-normal tracking-tight mb-3">
            Services
          </h2>
          <p className="text-sm text-[#78716C] font-light">
            Tailored makeup, hairstyling, and draping for every wedding celebration.
          </p>
        </div>

        {/* Minimal Short Labels Grid (No prices, no long paragraphs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((service, index) => (
            <div
              key={service.name}
              onClick={() => onSelectService(service.name)}
              className="group cursor-pointer bg-white border border-[#EAE3D6] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#9E7B49] hover:shadow-sm"
            >
              <div>
                <span className="text-[11px] font-mono text-[#9E7B49] tracking-wider block mb-3">
                  0{index + 1}
                </span>
                <h3 className="font-display text-2xl text-[#1C1917] font-medium mb-2 group-hover:text-[#9E7B49] transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed font-light mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5EFE6] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#1C1917] group-hover:text-[#9E7B49]">
                <span>Enquire</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
