import React, { useState } from 'react';
import { Reel } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ReelsSection } from './components/ReelsSection';
import { FAQSection } from './components/FAQSection';
import { ContactModal } from './components/ContactModal';
import { ReelModal } from './components/ReelModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleExploreReels = () => {
    const el = document.getElementById('brand-reels');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F8F4EE] text-[#1A1816] flex flex-col font-sans selection:bg-[#E8C5B8] selection:text-[#1A1816]">
      {/* Minimal Top Header */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenContact={() => setIsContactOpen(true)}
          onExploreReels={handleExploreReels}
        />

        {/* Brand Reels Showcase */}
        <ReelsSection
          onSelectReel={reel => setSelectedReel(reel)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Minimalist Logistics & Booking FAQ */}
        <FAQSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Minimalist Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Reel Viewer Modal */}
      {selectedReel && (
        <ReelModal
          reel={selectedReel}
          onClose={() => setSelectedReel(null)}
          onSelectReel={reel => setSelectedReel(reel)}
          onOpenContact={() => {
            setSelectedReel(null);
            setIsContactOpen(true);
          }}
        />
      )}

      {/* Quick Collaboration Modal */}
      {isContactOpen && (
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      )}
    </div>
  );
}
