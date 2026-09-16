import React from 'react';
import { SERVICES } from '../data/creatorData';
import { Video, Mic, PackageCheck, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

const serviceIcons: Record<string, React.ElementType> = {
  Video,
  Mic,
  PackageCheck,
  Sparkles,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="services-section" className="py-20 sm:py-28 bg-[#FBF8F5] border-b border-[#E8DFC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B56B5A]">
            WHAT WE CAN BUILD TOGETHER
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-serif font-normal text-[#1A1816] tracking-tight">
            Services & Deliverables
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#574F47]">
            Flexible campaign packages tailored for marketing teams, consumer brands, and live event producers.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = serviceIcons[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F6F0E7]/80 border border-[#E3D8CA] hover:border-[#CBBCA9] hover:bg-[#F6EFE5] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EBE0D1] flex items-center justify-center text-[#B56B5A]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#918174]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#1A1816]">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#B56B5A] mt-1">
                    {service.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-[#504840] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#E5DACD]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3D3730] block mb-3">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start text-xs sm:text-sm text-[#473F38]">
                          <Check className="w-4 h-4 text-[#B56B5A] shrink-0 mr-2.5 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-3 px-5 rounded-full bg-[#1D1B18] hover:bg-[#342F2A] text-[#FBF8F5] text-xs font-semibold tracking-wide flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    <span>Inquire for {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4 text-[#E5B5A7]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
