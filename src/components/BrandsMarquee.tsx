import React from 'react';
import { BRANDS } from '../data/creatorData';
import { ShieldCheck } from 'lucide-react';

export const BrandsMarquee: React.FC = () => {
  return (
    <section id="brands-section" className="py-12 sm:py-16 bg-[#F8F3EC] border-b border-[#E8DFC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#B56B5A] block">
            TRUSTED BY FORWARD-THINKING BRANDS
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1816] mt-1.5">
            Past Collaborations & Integrations
          </h3>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
          {BRANDS.map((brand, i) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DEC8] hover:border-[#D0C0A5] hover:bg-white transition-all shadow-xs group"
            >
              <span className="font-serif text-sm sm:text-base font-bold text-[#3B342D] tracking-wider group-hover:text-[#B56B5A] transition-colors">
                {brand.logoText}
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#85786D] text-center mt-1">
                {brand.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-[#706458]">
          <ShieldCheck className="w-4 h-4 text-[#B56B5A]" />
          <span>100% genuine audience with zero inorganic bot amplification</span>
        </div>
      </div>
    </section>
  );
};
