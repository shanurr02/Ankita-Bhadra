import React from 'react';
import { ShieldCheck } from 'lucide-react';

/* ================================================================
   BRANDS
================================================================ */

const BRANDS = [
  {
    name: 'Amazon',
    logo: 'amazon',
    category: 'E-Commerce',
  },
  {
    name: 'Flipkart',
    logo: 'flipkart',
    category: 'Shopping',
  },
  {
    name: 'Myntra',
    logo: 'myntra',
    category: 'Fashion',
  },
  {
    name: 'Nykaa',
    logo: 'nykaa',
    category: 'Beauty',
  },
  {
    name: 'Mamaearth',
    logo: 'mamaearth',
    category: 'Beauty & Wellness',
  },
  {
    name: 'boAt',
    logo: 'boAt',
    category: 'Lifestyle & Tech',
  },
  {
    name: 'MARS Cosmetics',
    logo: 'mars',
    category: 'Cosmetics',
  },
  {
    name: 'Sugar Cosmetics',
    logo: 'sugar',
    category: 'Beauty',
  },
  {
    name: 'Meesho',
    logo: 'meesho',
    category: 'E-Commerce',
  },
  {
    name: 'AJIO',
    logo: 'ajio',
    category: 'Fashion',
  },
  {
    name: 'Purplle',
    logo: 'purplle',
    category: 'Beauty',
  },
  {
    name: 'WOW Skin Science',
    logo: 'wow',
    category: 'Personal Care',
  },
];

/* ================================================================
   BRAND LOGO
================================================================ */

const BrandLogo: React.FC<{
  brand: (typeof BRANDS)[number];
}> = ({ brand }) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        min-w-[150px]
        sm:min-w-[180px]
        lg:min-w-[200px]
        h-[100px]
        sm:h-[110px]
        px-5
        rounded-2xl
        bg-[#FAF6F0]
        border
        border-[#E8DEC8]
        hover:bg-white
        hover:border-[#D0C0A5]
        hover:-translate-y-1
        transition-all
        duration-300
        group
        shrink-0
      "
    >
      {/* LOGO AREA */}

      <div
        className="
          h-10
          sm:h-11
          flex
          items-center
          justify-center
          text-[#332D28]
          group-hover:text-[#B56B5A]
          transition-colors
          duration-300
        "
      >
        {brand.logo === 'amazon' && (
          <span
            className="
              text-xl
              sm:text-2xl
              font-bold
              tracking-[-0.04em]
            "
          >
            amazon
          </span>
        )}

        {brand.logo === 'flipkart' && (
          <span
            className="
              text-lg
              sm:text-xl
              font-extrabold
              tracking-tight
            "
          >
            Flipkart
          </span>
        )}

        {brand.logo === 'myntra' && (
          <span
            className="
              text-xl
              sm:text-2xl
              font-black
              tracking-tight
            "
          >
            myntra
          </span>
        )}

        {brand.logo === 'nykaa' && (
          <span
            className="
              text-xl
              sm:text-2xl
              font-serif
              font-bold
              tracking-tight
            "
          >
            NYKAA
          </span>
        )}

        {brand.logo === 'mamaearth' && (
          <span
            className="
              text-lg
              sm:text-xl
              font-bold
              tracking-tight
            "
          >
            mamaearth
          </span>
        )}

        {brand.logo === 'boat' && (
          <span
            className="
              text-2xl
              sm:text-3xl
              font-black
              tracking-[-0.06em]
            "
          >
            boAt
          </span>
        )}

        {brand.logo === 'mars' && (
          <span
            className="
              text-lg
              sm:text-xl
              font-extrabold
              tracking-[0.08em]
            "
          >
            MARS
          </span>
        )}

        {brand.logo === 'sugar' && (
          <span
            className="
              text-lg
              sm:text-xl
              font-bold
              tracking-[0.12em]
            "
          >
            SUGAR
          </span>
        )}

        {brand.logo === 'meesho' && (
          <span
            className="
              text-xl
              sm:text-2xl
              font-extrabold
              tracking-tight
            "
          >
            meesho
          </span>
        )}

        {brand.logo === 'ajio' && (
          <span
            className="
              text-xl
              sm:text-2xl
              font-black
              tracking-[0.08em]
            "
          >
            AJIO
          </span>
        )}

        {brand.logo === 'purplle' && (
          <span
            className="
              text-xl
              sm:text-2xl
              font-bold
              tracking-tight
            "
          >
            purplle
          </span>
        )}

        {brand.logo === 'wow' && (
          <span
            className="
              text-xl
              sm:text-2xl
              font-black
              tracking-[0.05em]
            "
          >
            WOW
          </span>
        )}
      </div>

      {/* CATEGORY */}

      <span
        className="
          text-[9px]
          sm:text-[10px]
          text-[#85786D]
          text-center
          mt-1
          whitespace-nowrap
        "
      >
        {brand.category}
      </span>
    </div>
  );
};

/* ================================================================
   MARQUEE ROW
================================================================ */

const MarqueeRow: React.FC = () => {
  /*
   * Duplicate the list.
   * The animation moves exactly one complete set,
   * creating a seamless infinite loop.
   */

  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
        py-2
      "
    >

      {/* LEFT FADE */}

      <div
        className="
          absolute
          left-0
          top-0
          bottom-0
          w-12
          sm:w-20
          lg:w-28
          bg-gradient-to-r
          from-[#F8F3EC]
          to-transparent
          z-10
          pointer-events-none
        "
      />

      {/* RIGHT FADE */}

      <div
        className="
          absolute
          right-0
          top-0
          bottom-0
          w-12
          sm:w-20
          lg:w-28
          bg-gradient-to-l
          from-[#F8F3EC]
          to-transparent
          z-10
          pointer-events-none
        "
      />

      {/* MOVING TRACK */}

      <div
        className="
          flex
          items-center
          gap-4
          sm:gap-5
          w-max
          animate-brand-marquee
          hover:[animation-play-state:paused]
        "
      >
        {marqueeItems.map((brand, index) => (
          <BrandLogo
            key={`${brand.name}-${index}`}
            brand={brand}
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
          MARQUEE ANIMATION
      ============================================================= */}

      <style>{`
        @keyframes brandMarquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(calc(-50% - 10px));
          }
        }

        .animate-brand-marquee {
          animation: brandMarquee 35s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .animate-brand-marquee {
            animation-duration: 28s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-brand-marquee {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      <section
        id="brands-section"
        className="
          relative
          py-12
          sm:py-16
          bg-[#F8F3EC]
          border-b
          border-[#E8DFC2]
          overflow-hidden
        "
      >

        <div className="max-w-7xl mx-auto">

          {/* ========================================================
              HEADING
          ========================================================= */}

          <div
            className="
              text-center
              max-w-xl
              mx-auto
              px-4
              sm:px-6
              mb-8
              sm:mb-10
            "
          >
            <span
              className="
                text-[10px]
                sm:text-[11px]
                font-semibold
                tracking-[0.25em]
                uppercase
                text-[#B56B5A]
                block
              "
            >
              TRUSTED BY FORWARD-THINKING BRANDS
            </span>

            <h3
              className="
                font-serif
                text-2xl
                sm:text-3xl
                font-normal
                text-[#1A1816]
                mt-2
              "
            >
              Past Collaborations & Integrations
            </h3>

            <p
              className="
                mt-2
                text-xs
                sm:text-sm
                text-[#85786D]
              "
            >
              Creating authentic content that connects
              brands with real audiences.
            </p>
          </div>


          {/* ========================================================
              CONTINUOUS MARQUEE
          ========================================================= */}

          <MarqueeRow />


          {/* ========================================================
              TRUST MESSAGE
          ========================================================= */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-2
              px-4
              text-center
            "
          >
            <ShieldCheck
              className="
                w-4
                h-4
                shrink-0
                text-[#B56B5A]
              "
            />

            <span
              className="
                text-[10px]
                sm:text-xs
                text-[#706458]
              "
            >
              Authentic audience · Organic engagement ·
              Brand-safe collaborations
            </span>
          </div>

        </div>
      </section>
    </>
  );
};

export default BrandsMarquee;