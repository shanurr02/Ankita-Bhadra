import React, { useState } from 'react';
import { Instagram, Menu, X, ArrowUpRight } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/creatorData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="w-full pt-5 pb-4 sm:pt-8 sm:pb-6 px-4 sm:px-8 lg:px-20 relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-center">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-6 sm:space-x-8 text-xs sm:text-sm font-medium text-[#4A433D]">

          <a
            href="#brand-reels"
            className="hover:text-[#1A1816] transition-colors py-1"
          >
            Brand Reels
          </a>

          <a
            href="#faq-section"
            className="hover:text-[#1A1816] transition-colors py-1"
          >
            FAQ
          </a>

          <a
            href={CREATOR_PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-[#8A564A] hover:text-[#1A1816] transition-colors py-1"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@{CREATOR_PROFILE.instagramHandle}</span>
          </a>

          <button
            onClick={onOpenContact}
            className="px-4 py-2 rounded-full border border-[#DCD3C7] text-[#1A1816] hover:bg-[#F2ECE3] transition-colors cursor-pointer text-xs font-semibold"
          >
            Get in touch
          </button>

        </nav>

        {/* Mobile Action Controls */}
        <div className="w-full flex md:hidden items-center justify-end space-x-2">

          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 rounded-full bg-[#1A1816] text-[#FAF6F0] text-xs font-medium cursor-pointer"
          >
            Contact
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full text-[#1A1816] hover:bg-[#EFE8DF] transition-colors focus:outline-hidden touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#FAF6F0] border border-[#E8DFC2] rounded-2xl shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">

          <div className="flex flex-col space-y-3 text-sm font-medium text-[#4A433D]">

            <button
              onClick={() => handleNavClick('brand-reels')}
              className="text-left py-2.5 px-3 rounded-xl hover:bg-[#F0E9DF] text-[#1A1816] transition-colors min-h-[44px] flex items-center"
            >
              Brand Reels
            </button>

            <button
              onClick={() => handleNavClick('faq-section')}
              className="text-left py-2.5 px-3 rounded-xl hover:bg-[#F0E9DF] text-[#1A1816] transition-colors min-h-[44px] flex items-center"
            >
              Frequently Asked Questions
            </button>

            <a
              href={CREATOR_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-[#F0E9DF] text-[#8A564A] transition-colors min-h-[44px]"
            >
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <span>@{CREATOR_PROFILE.instagramHandle}</span>
              </div>

              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            <div className="pt-2 border-t border-[#E8DFC2]">

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-[#1A1816] text-[#FAF6F0] text-xs font-semibold text-center min-h-[44px]"
              >
                Inquire for Collaboration
              </button>

            </div>

          </div>
        </div>
      )}
    </header>
  );
};