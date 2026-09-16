import React, { useState } from "react";
import { Reel } from "./types";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import ReelsSection from "./components/ReelsSection";
import ContactModal from "./components/ContactModal";
import { ReelModal } from "./components/ReelModal";
import { Footer } from "./components/Footer";
import { BrandsMarquee } from "./components/BrandsMarquee";

export default function App() {
  const [selectedReel, setSelectedReel] =
    useState<Reel | null>(null);

  const [isContactOpen, setIsContactOpen] =
    useState(false);

  const handleExploreReels = () => {
    const el = document.getElementById("brand-reels");

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="
        flex
        min-h-screen
        w-full
        flex-col
        overflow-x-hidden
        bg-[#F8F4EE]
        font-sans
        text-[#1A1816]
        selection:bg-[#E8C5B8]
        selection:text-[#1A1816]
      "
    >
      {/* ============================================================
          NAVBAR
          Desktop only
          Hidden completely on mobile
      ============================================================ */}

      <div className="hidden sm:block">
        <Navbar
          onOpenContact={() =>
            setIsContactOpen(true)
          }
        />
      </div>

      {/* ============================================================
          MAIN CONTENT
      ============================================================ */}

      <main className="flex-1">
        {/* HERO */}
        <HeroSection
          onOpenContact={() =>
            setIsContactOpen(true)
          }
          onExploreReels={handleExploreReels}
        />

        {/* REELS */}
        <ReelsSection />

        {/* BRANDS */}
        <BrandsMarquee />
      </main>

      {/* ============================================================
          FOOTER
      ============================================================ */}

      <Footer
        onOpenContact={() =>
          setIsContactOpen(true)
        }
      />

      {/* ============================================================
          REEL MODAL
      ============================================================ */}

      {selectedReel && (
        <ReelModal
          reel={selectedReel}
          onClose={() =>
            setSelectedReel(null)
          }
          onSelectReel={(reel) =>
            setSelectedReel(reel)
          }
          onOpenContact={() => {
            setSelectedReel(null);
            setIsContactOpen(true);
          }}
        />
      )}

      {/* ============================================================
          CONTACT MODAL
      ============================================================ */}

      {isContactOpen && (
        <ContactModal
          isOpen={isContactOpen}
          onClose={() =>
            setIsContactOpen(false)
          }
        />
      )}
    </div>
  );
}