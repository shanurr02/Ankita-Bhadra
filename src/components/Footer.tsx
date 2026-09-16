import React from 'react';
import { CREATOR_PROFILE } from '../data/creatorData';
import { Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="border-t border-[#E8DFC2] bg-[#F7F3EC] px-4 sm:px-8 lg:px-20 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div>
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#B56B5A] block mb-2 sm:mb-3">
            COLLABORATIONS & BOOKINGS
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#1A1816]">
            Let's create together.
          </h3>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#595149] max-w-md leading-relaxed">
            Available for brand reels, sponsored campaigns, and live stage anchoring across India.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-full bg-[#1A1816] text-[#FAF6F0] text-xs sm:text-sm font-medium hover:bg-[#332E29] transition-all cursor-pointer shadow-xs flex items-center justify-center touch-manipulation"
          >
            Get in touch
          </button>

          <a
            href={CREATOR_PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center space-x-1.5 px-5 py-3 rounded-full border border-[#D9CEBF] text-xs sm:text-sm font-medium text-[#2C2621] hover:bg-white transition-colors touch-manipulation"
          >
            <Instagram className="w-4 h-4 text-[#B56B5A]" />
            <span>@{CREATOR_PROFILE.instagramHandle}</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E8DFC2]/80 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#827568] gap-3 text-center sm:text-left">
        <span>© {new Date().getFullYear()} Ankita Bhadra. All rights reserved.</span>
      </div>
    </footer>
  );
};
