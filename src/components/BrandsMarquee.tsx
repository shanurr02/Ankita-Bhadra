import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";

/* ================================================================
   BRAND IMAGES
================================================================ */

const BRANDS = [
  {
    name: "Amazon",
    image: "/assets/images/brands/1.png",
  },
  {
    name: "Flipkart",
    image: "/assets/images/brands/2.webp",
  },
  {
    name: "Myntra",
    image: "/assets/images/brands/3.jpeg",
  },
  {
    name: "Nykaa",
    image: "/assets/images/brands/4.png",
  },
  {
    name: "Mamaearth",
    image: "/assets/images/brands/5.jpeg",
  },
  {
    name: "boAt",
    image: "/assets/images/brands/6.jpeg",
  },
];

/* ================================================================
   BRAND CARD
================================================================ */

const BrandLogo: React.FC<{
  brand: (typeof BRANDS)[number];
  scale: number;
}> = ({ brand, scale }) => {
  return (
    <div
      className="
        brand-card
        group
        flex
        h-[90px]
        w-[150px]
        shrink-0
        items-center
        justify-center
        rounded-2xl
        border
        border-[#E8DEC8]
        bg-[#FAF6F0]
        px-5
        transition-transform
        duration-200
        ease-out
        sm:h-[100px]
        sm:w-[175px]
        lg:h-[110px]
        lg:w-[195px]
      "
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <img
        src={brand.image}
        alt={brand.name}
        loading="lazy"
        draggable={false}
        className="
          max-h-[55px]
          max-w-[125px]
          object-contain
          transition-transform
          duration-300
          group-hover:scale-105
          sm:max-h-[62px]
          sm:max-w-[145px]
          lg:max-h-[68px]
          lg:max-w-[165px]
        "
      />
    </div>
  );
};

/* ================================================================
   MARQUEE ROW
================================================================ */

const MarqueeRow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [scales, setScales] = useState<number[]>([]);

  const marqueeItems = [...BRANDS, ...BRANDS, ...BRANDS];

  /* ------------------------------------------------
     Calculate scale based on distance from center
  ------------------------------------------------ */

  useEffect(() => {
    let animationFrame = 0;

    const updateScales = () => {
      const container = containerRef.current;
      const track = trackRef.current;

      if (!container || !track) return;

      const containerRect = container.getBoundingClientRect();

      const viewportCenter =
        containerRect.left + containerRect.width / 2;

      const cards =
        track.querySelectorAll<HTMLElement>(".brand-card");

      const newScales: number[] = [];

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const cardCenter =
          rect.left + rect.width / 2;

        const distance =
          Math.abs(viewportCenter - cardCenter);

        /*
          0 distance = 1.18 scale
          Further away = smaller
        */

        const maxDistance =
          containerRect.width * 0.55;

        const normalized =
          Math.min(distance / maxDistance, 1);

        /*
          Smooth falloff
        */

        const scale =
          1.18 -
          normalized * 0.36;

        newScales.push(
          Math.max(0.82, Math.min(1.18, scale))
        );
      });

      setScales(newScales);

      animationFrame =
        requestAnimationFrame(updateScales);
    };

    animationFrame =
      requestAnimationFrame(updateScales);

    window.addEventListener(
      "resize",
      updateScales
    );

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        updateScales
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        overflow-hidden
        py-8
        sm:py-10
      "
    >
      {/* LEFT FADE */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-full
          w-14
          bg-gradient-to-r
          from-[#F8F3EC]
          to-transparent
          sm:w-24
          lg:w-32
        "
      />

      {/* RIGHT FADE */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          h-full
          w-14
          bg-gradient-to-l
          from-[#F8F3EC]
          to-transparent
          sm:w-24
          lg:w-32
        "
      />

      {/* CENTER GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[180px]
          w-[180px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#EAD8C8]/30
          blur-3xl
        "
      />

      {/* MOVING TRACK */}

      <div
        ref={trackRef}
        className="
          relative
          z-10
          flex
          w-max
          items-center
          gap-5
          animate-brand-marquee
          sm:gap-7
          lg:gap-8
        "
      >
        {marqueeItems.map((brand, index) => (
          <BrandLogo
            key={`${brand.name}-${index}`}
            brand={brand}
            scale={scales[index] || 0.82}
          />
        ))}
      </div>
    </div>
  );
};

/* ================================================================
   MAIN COMPONENT
================================================================ */

export const BrandsMarquee: React.FC = () => {
  return (
    <>
      {/* ============================================================
          ANIMATION
      ============================================================ */}

      <style>{`
        @keyframes brandMarquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(calc(-33.333333% - 7px));
          }
        }

        .animate-brand-marquee {
          animation:
            brandMarquee 28s
            linear
            infinite;
          will-change: transform;
        }

        .animate-brand-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-brand-marquee {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-brand-marquee {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      {/* ============================================================
          SECTION
      ============================================================ */}

      <section
        id="brands-section"
        className="
          relative
          overflow-hidden
          border-b
          border-[#E8DFC2]
          bg-[#F8F3EC]
          py-12
          sm:py-16
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* ========================================================
              HEADING
          ======================================================== */}

          <div
            className="
              mx-auto
              mb-6
              max-w-xl
              px-4
              text-center
              sm:mb-8
              sm:px-6
            "
          >
            <span
              className="
                block
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#B56B5A]
                sm:text-[11px]
              "
            >
              TRUSTED BY FORWARD-THINKING BRANDS
            </span>

            <h3
              className="
                mt-2
                font-serif
                text-2xl
                font-normal
                text-[#1A1816]
                sm:text-3xl
              "
            >
              Past Collaborations & Integrations
            </h3>

            <p
              className="
                mt-2
                text-xs
                text-[#85786D]
                sm:text-sm
              "
            >
              Creating authentic content that connects
              brands with real audiences.
            </p>
          </div>

          {/* ========================================================
              MARQUEE
          ======================================================== */}

          <MarqueeRow />

          {/* ========================================================
              TRUST MESSAGE
          ======================================================== */}

         
        </div>
      </section>
    </>
  );
};

export default BrandsMarquee;