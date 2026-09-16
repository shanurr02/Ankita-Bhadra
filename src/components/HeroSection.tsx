import React from 'react';
import { CREATOR_PROFILE } from '../data/creatorData';
import { Play } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
  onExploreReels: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onExploreReels }) => {
  return (
    <section className="relative px-4 sm:px-8 lg:px-20 pt-6 sm:pt-12 pb-14 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Eyebrow, Name, Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-1">
            {/* Tagline / Eyebrow */}
            <span
              id="hero-eyebrow"
              className="text-[11px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.26em] uppercase text-[#B56B5A] block"
            >
              C O N T E N T &nbsp; C R E A T O R &nbsp; · &nbsp; A N C H O R
            </span>

            {/* Name */}
            <h1
              id="hero-title"
              className="mt-3 sm:mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-serif font-normal text-[#1A1816] tracking-tight leading-[1.1] sm:leading-[1.05]"
            >
              Ankita Bhadra
            </h1>

            {/* Bio statement */}
            <p
              id="hero-bio"
              className="mt-4 sm:mt-7 text-base sm:text-lg lg:text-xl text-[#4A433D] font-light leading-relaxed max-w-xl"
            >
              I’m Ankita Bhadra — a content creator creating natural, engaging short-form videos that help brands connect with real people.
            </p>

            {/* Action buttons with full touch target sizing */}
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreReels}
                className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-full bg-[#1A1816] text-[#FAF6F0] text-xs sm:text-sm font-medium hover:bg-[#332E29] transition-all cursor-pointer shadow-xs flex items-center justify-center space-x-2 touch-manipulation"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Explore Reels</span>
              </button>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-full border border-[#D9CEBF] text-[#2C2621] text-xs sm:text-sm font-medium hover:bg-[#EFE8DF] transition-colors cursor-pointer flex items-center justify-center touch-manipulation"
              >
                Inquire for Collaboration
              </button>
            </div>

            {/* Micro descriptor */}
            <p className="mt-8 sm:mt-12 text-[11px] sm:text-xs tracking-wider text-[#8A7D71] uppercase font-medium">
              Brand integrations & stage emceeing across India
            </p>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center order-2 mt-4 lg:mt-0">
            <div className="relative w-full max-w-[270px] sm:max-w-[310px] md:max-w-[340px]">
              
              {/* Organic Soft Beige Arch in background */}
              <div className="absolute -inset-3 sm:-inset-5 bg-[#EFE8DF] rounded-[44px] sm:rounded-[56px] -z-10" />

              {/* Smartphone Frame */}
              <div className="relative bg-[#1A1816] p-2 sm:p-2.5 rounded-[38px] sm:rounded-[42px] shadow-xl border border-black/10">
                
                {/* Speaker Notch */}
                <div className="absolute top-3.5 sm:top-4 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-3 sm:h-3.5 bg-[#0F0E0D] rounded-full z-20 flex items-center justify-center">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#24211D] mr-1.5" />
                  <div className="w-1 h-1 rounded-full bg-[#36322C]" />
                </div>

                {/* Video / Portrait Container */}
                <div className="relative aspect-[9/16] w-full rounded-[30px] sm:rounded-[34px] overflow-hidden bg-[#24211D]">
                  <img
                    id="hero-portrait-image"
                    src={CREATOR_PROFILE.portraitImage}
                    alt="Ankita Bhadra - Content Creator & Anchor"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pt-12 pb-4 sm:pb-5 px-3.5 sm:px-4 text-white z-10">
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span className="text-[11px] sm:text-xs font-semibold">@{CREATOR_PROFILE.instagramHandle}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-white/85 line-clamp-1 font-light">
                      Anchor · Creator · Storyteller
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
