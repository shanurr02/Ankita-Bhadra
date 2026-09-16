import React, { useMemo, useState } from 'react';
import {
  Instagram,
  ExternalLink,
  CalendarDays,
  Play,
} from 'lucide-react';

/* ================================================================
   TYPES
================================================================ */

interface InstagramReel {
  id: string;
  shortcode: string;
  url: string;
  title: string;
  caption: string;
  category: string;
  date: string;
  brand: string;
}

/* ================================================================
   CREATOR
================================================================ */

const CREATOR = {
  name: 'Ankita Bhadra',
  username: '__bhadra___',
  instagramUrl: 'https://www.instagram.com/__bhadra___/',
  profileImage: '/assets/images/profile.JPEG',
};

/* ================================================================
   INSTAGRAM REELS
================================================================ */

const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'reel-dv3',
    shortcode: 'DV3R9JxkR5E',
    url: 'https://www.instagram.com/reel/DV3R9JxkR5E/',
    title: 'Instagram Reel',
    caption:
      'Watch Ankita Bhadra on Instagram. Open the Reel to explore the original content and engagement.',
    category: 'Instagram Reels',
    date: 'Latest',
    brand: '',
  },

  {
    id: 'reel-dbq',
    shortcode: 'DbqszA3zpLX',
    url: 'https://www.instagram.com/reel/DbqszA3zpLX/',
    title: 'Instagram Reel',
    caption:
      'Watch Ankita Bhadra on Instagram. Open the Reel to explore the original content and engagement.',
    category: 'Instagram Reels',
    date: 'Latest',
    brand: '',
  },

  {
    id: 'reel-dz5',
    shortcode: 'DZ5PpbKT7hJ',
    url: 'https://www.instagram.com/reel/DZ5PpbKT7hJ/',
    title: 'Instagram Reel',
    caption:
      'Watch Ankita Bhadra on Instagram. Open the Reel to explore the original content and engagement.',
    category: 'Instagram Reels',
    date: 'Latest',
    brand: '',
  },

  {
    id: 'reel-dt9',
    shortcode: 'DT9rWKzkryZ',
    url: 'https://www.instagram.com/reel/DT9rWKzkryZ/',
    title: 'Instagram Reel',
    caption:
      'Watch Ankita Bhadra on Instagram. Open the Reel to explore the original content and engagement.',
    category: 'Instagram Reels',
    date: 'Latest',
    brand: '',
  },

  {
    id: 'reel-dcs',
    shortcode: 'DcsxZLHT0xs',
    url: 'https://www.instagram.com/reel/DcsxZLHT0xs/',
    title: 'Instagram Reel',
    caption:
      'Watch Ankita Bhadra on Instagram. Open the Reel to explore the original content and engagement.',
    category: 'Instagram Reels',
    date: 'Latest',
    brand: '',
  },

  {
    id: 'reel-dcg',
    shortcode: 'DcGJ1kpTzvf',
    url: 'https://www.instagram.com/reel/DcGJ1kpTzvf/',
    title: 'Instagram Reel',
    caption:
      'Watch Ankita Bhadra on Instagram. Open the Reel to explore the original content and engagement.',
    category: 'Instagram Reels',
    date: 'Latest',
    brand: '',
  },

  {
    id: 'reel-daq',
    shortcode: 'DaQO6_lSlLB',
    url: 'https://www.instagram.com/reel/DaQO6_lSlLB/',
    title: 'Instagram Reel',
    caption:
      'Watch Ankita Bhadra on Instagram. Open the Reel to explore the original content and engagement.',
    category: 'Instagram Reels',
    date: 'Latest',
    brand: '',
  },

  {
    id: 'reel-dzg',
    shortcode: 'DZgmKYrza79',
    url: 'https://www.instagram.com/reel/DZgmKYrza79/',
    title: 'Instagram Reel',
    caption:
      'Watch Ankita Bhadra on Instagram. Open the Reel to explore the original content and engagement.',
    category: 'Instagram Reels',
    date: 'Latest',
    brand: '',
  },

  {
    id: 'reel-dwj',
    shortcode: 'DWjNN_6EZse',
    url: 'https://www.instagram.com/reel/DWjNN_6EZse/',
    title: 'Instagram Reel',
    caption:
      'Watch Ankita Bhadra on Instagram. Open the Reel to explore the original content and engagement.',
    category: 'Instagram Reels',
    date: 'Latest',
    brand: '',
  },
];

/* ================================================================
   EMBED URL
================================================================ */

const getEmbedUrl = (shortcode: string): string => {
  return `https://www.instagram.com/reel/${shortcode}/embed/`;
};

/* ================================================================
   REEL CARD
================================================================ */

interface ReelCardProps {
  reel: InstagramReel;
  index: number;
}

const ReelCard: React.FC<ReelCardProps> = ({ reel, index }) => {
  const embedUrl = useMemo(
    () => getEmbedUrl(reel.shortcode),
    [reel.shortcode]
  );

  return (
    <article
      className="
        group
        bg-white
        rounded-[24px]
        overflow-hidden
        border
        border-[#E8DED3]
        shadow-[0_5px_24px_rgba(50,40,30,0.055)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(50,40,30,0.13)]
      "
    >
      {/* ==========================================================
          CARD HEADER
      =========================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-3
          px-4
          py-3
          bg-white
          border-b
          border-[#F0E8E0]
        "
      >
        {/* PROFILE */}

        <div
          className="
            flex
            items-center
            gap-2.5
            min-w-0
          "
        >
          <div
            className="
              w-9
              h-9
              rounded-full
              overflow-hidden
              shrink-0
              ring-2
              ring-[#F1E7DE]
              bg-[#F5EFE9]
            "
          >
            <img
              src={CREATOR.profileImage}
              alt={CREATOR.name}
              loading="lazy"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span
                className="
                  text-xs
                  font-semibold
                  text-[#1A1816]
                  truncate
                "
              >
                @{CREATOR.username}
              </span>

              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-[#B56B5A]
                  shrink-0
                "
              />
            </div>

            <div
              className="
                flex
                items-center
                gap-1
                mt-0.5
                text-[10px]
                text-[#8A7D72]
              "
            >
              <Instagram className="w-3 h-3" />

              <span>
                Instagram Reel #{index + 1}
              </span>
            </div>
          </div>
        </div>

        {/* INSTAGRAM BUTTON */}

        <a
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open Instagram Reel ${index + 1}`}
          className="
            w-9
            h-9
            rounded-full
            shrink-0
            border
            border-[#E3D8CE]
            flex
            items-center
            justify-center
            text-[#5E544B]
            hover:bg-[#F5EEE8]
            hover:text-[#9C5A4B]
            hover:scale-105
            transition-all
          "
        >
          <Instagram className="w-4 h-4" />
        </a>
      </div>

      {/* ==========================================================
          INSTAGRAM VIDEO
      =========================================================== */}

      <div
        className="
          relative
          w-full
          aspect-[9/16]
          overflow-hidden
          bg-[#171513]
        "
      >
        <iframe
          src={embedUrl}
          title={`Instagram Reel ${index + 1} - ${CREATOR.name}`}
          className="
            absolute
            inset-0
            w-full
            h-full
            border-0
          "
          frameBorder="0"
          scrolling="no"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="
            autoplay;
            clipboard-write;
            encrypted-media;
            picture-in-picture;
            web-share
          "
          allowFullScreen
        />

        {/* INSTAGRAM BADGE */}

        <div
          className="
            absolute
            top-4
            left-4
            z-10
            pointer-events-none
          "
        >
          <div
            className="
              flex
              items-center
              gap-1.5
              px-3
              py-1.5
              rounded-full
              bg-black/55
              backdrop-blur-md
              border
              border-white/15
              text-white
              shadow-lg
            "
          >
            <Instagram className="w-3 h-3" />

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.12em]
                uppercase
              "
            >
              Instagram
            </span>
          </div>
        </div>

        {/* SMALL PLAY INDICATOR */}

        <div
          className="
            absolute
            bottom-4
            left-4
            z-10
            pointer-events-none
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        >
          <div
            className="
              flex
              items-center
              gap-1.5
              px-3
              py-1.5
              rounded-full
              bg-black/55
              backdrop-blur-md
              border
              border-white/15
              text-white
            "
          >
            <Play className="w-3 h-3 fill-current" />

            <span className="text-[9px] font-medium">
              Watch Reel
            </span>
          </div>
        </div>
      </div>

      {/* ==========================================================
          DETAILS
          Footer intentionally removed
      =========================================================== */}

      <div
        className="
          px-4
          pt-4
          pb-5
          bg-white
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <h3
            className="
              text-sm
              sm:text-[15px]
              font-semibold
              leading-snug
              text-[#1A1816]
            "
          >
            {reel.title}
          </h3>

          <a
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              shrink-0
              inline-flex
              items-center
              gap-1
              text-[10px]
              font-semibold
              text-[#9C5A4B]
              hover:text-[#7D4438]
              transition-colors
            "
          >
            Open
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* DATE */}

        <div
          className="
            flex
            items-center
            gap-1.5
            mt-3
            text-[10px]
            text-[#8A7D72]
          "
        >
          <CalendarDays className="w-3.5 h-3.5" />

          <span>{reel.date}</span>
        </div>

        {/* CAPTION */}

        <p
          className="
            mt-3
            text-xs
            leading-5
            text-[#74695F]
          "
        >
          {reel.caption}
        </p>
      </div>
    </article>
  );
};

/* ================================================================
   MAIN COMPONENT
================================================================ */

const ReelsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('All');

  /* ================================================================
     CATEGORIES
  ================================================================ */

  const categories = useMemo(() => {
    return [
      'All',
      ...Array.from(
        new Set(
          INSTAGRAM_REELS.map(
            (reel) => reel.category
          )
        )
      ),
    ];
  }, []);

  /* ================================================================
     FILTERED REELS
  ================================================================ */

  const filteredReels = useMemo(() => {
    if (selectedCategory === 'All') {
      return INSTAGRAM_REELS;
    }

    return INSTAGRAM_REELS.filter(
      (reel) =>
        reel.category === selectedCategory
    );
  }, [selectedCategory]);

  /* ================================================================
     RENDER
  ================================================================ */

  return (
    <section
      id="brand-reels"
      className="
        w-full
        bg-[#FBF8F4]
        px-4
        sm:px-8
        lg:px-16
        xl:px-20
        pt-12
        sm:pt-16
        lg:pt-20
        pb-20
        sm:pb-28
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ==========================================================
            HEADER
        =========================================================== */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-7
            mb-10
            sm:mb-12
          "
        >
          {/* TITLE */}

          <div className="max-w-3xl">
            <div
              className="
                flex
                items-center
                gap-2
                mb-3
              "
            >
              <span
                className="
                  w-8
                  h-px
                  bg-[#B56B5A]
                "
              />

              <span
                className="
                  text-[10px]
                  sm:text-[11px]
                  font-semibold
                  tracking-[0.22em]
                  uppercase
                  text-[#B56B5A]
                "
              >
                Instagram Portfolio
              </span>
            </div>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-serif
                  font-normal
                  tracking-tight
                  text-[#1A1816]
                "
              >
                Brand Reels
              </h2>

              <span
                className="
                  flex
                  items-center
                  justify-center
                  min-w-8
                  h-7
                  px-2
                  rounded-full
                  bg-[#EFE6DC]
                  text-[#72594D]
                  text-[10px]
                  font-semibold
                "
              >
                {INSTAGRAM_REELS.length}
              </span>
            </div>

            <p
              className="
                mt-4
                text-sm
                sm:text-[15px]
                leading-6
                text-[#7A6E63]
                max-w-2xl
              "
            >
              Explore Ankita Bhadra&apos;s
              Instagram Reels and
              collaborations. Every Reel
              below is embedded directly
              from Instagram.
            </p>
          </div>

          {/* PROFILE BUTTON */}

          <a
            href={CREATOR.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              self-start
              lg:self-auto
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-[#1A1816]
              text-white
              text-xs
              font-semibold
              hover:bg-[#302C29]
              hover:-translate-y-0.5
              transition-all
              shadow-sm
            "
          >
            <Instagram className="w-4 h-4" />

            <span>
              @{CREATOR.username}
            </span>

            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ==========================================================
            PROFILE STRIP
        =========================================================== */}

        <div
          className="
            mb-8
            p-4
            sm:p-5
            rounded-2xl
            bg-white
            border
            border-[#E8DED3]
            flex
            items-center
            justify-between
            gap-4
            shadow-[0_4px_18px_rgba(50,40,30,0.035)]
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              min-w-0
            "
          >
            <div
              className="
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-full
                overflow-hidden
                shrink-0
                ring-2
                ring-[#F1E7DE]
                bg-[#F5EFE9]
              "
            >
              <img
                src={CREATOR.profileImage}
                alt={CREATOR.name}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            <div className="min-w-0">
              <h3
                className="
                  text-sm
                  sm:text-base
                  font-semibold
                  text-[#1A1816]
                  truncate
                "
              >
                {CREATOR.name}
              </h3>

              <p
                className="
                  text-xs
                  text-[#8A7D72]
                  mt-0.5
                  truncate
                "
              >
                @{CREATOR.username}
              </p>
            </div>
          </div>

          <a
            href={CREATOR.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              shrink-0
              flex
              items-center
              gap-1.5
              text-[10px]
              sm:text-xs
              font-semibold
              text-[#9C5A4B]
              hover:text-[#7D4438]
              transition-colors
            "
          >
            Open Profile

            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ==========================================================
            FILTERS
        =========================================================== */}

        {categories.length > 1 && (
          <div
            className="
              flex
              items-center
              gap-2
              overflow-x-auto
              pb-3
              mb-8
              scrollbar-hide
            "
          >
            {categories.map((category) => {
              const active =
                selectedCategory === category;

              const count =
                category === 'All'
                  ? INSTAGRAM_REELS.length
                  : INSTAGRAM_REELS.filter(
                      (reel) =>
                        reel.category === category
                    ).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                  className={`
                    shrink-0
                    px-4
                    py-2
                    rounded-full
                    text-[11px]
                    sm:text-xs
                    font-medium
                    whitespace-nowrap
                    border
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-[#1A1816]
                          border-[#1A1816]
                          text-white
                          shadow-md
                        `
                        : `
                          bg-white
                          border-[#E5DBD1]
                          text-[#62584F]
                          hover:bg-[#F5EFE9]
                          hover:border-[#D2C2B5]
                        `
                    }
                  `}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* ==========================================================
            REELS GRID
        =========================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-7
          "
        >
          {filteredReels.map((reel, index) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              index={index}
            />
          ))}
        </div>

        {/* ==========================================================
            EMPTY STATE
        =========================================================== */}

        {filteredReels.length === 0 && (
          <div
            className="
              py-16
              text-center
              rounded-3xl
              bg-white
              border
              border-[#E8DED3]
            "
          >
            <Instagram
              className="
                w-8
                h-8
                mx-auto
                text-[#B56B5A]
                mb-3
              "
            />

            <p
              className="
                text-sm
                font-medium
                text-[#5E544B]
              "
            >
              No Reels found.
            </p>
          </div>
        )}

        {/* ==========================================================
            BOTTOM INSTAGRAM CTA
        =========================================================== */}

        <div
          className="
            mt-12
            sm:mt-16
            p-6
            sm:p-8
            rounded-3xl
            bg-[#1A1816]
            text-white
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-5
            text-center
            sm:text-left
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                justify-center
                sm:justify-start
                gap-2
                mb-2
              "
            >
              <Instagram className="w-5 h-5" />

              <span
                className="
                  text-xs
                  font-semibold
                  tracking-wide
                  text-white/70
                "
              >
                FOLLOW ON INSTAGRAM
              </span>
            </div>

            <h3
              className="
                text-xl
                sm:text-2xl
                font-serif
              "
            >
              @{CREATOR.username}
            </h3>

            <p
              className="
                mt-1
                text-xs
                sm:text-sm
                text-white/60
              "
            >
              See the complete Instagram
              profile and latest Reels.
            </p>
          </div>

          <a
            href={CREATOR.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-white
              text-[#1A1816]
              text-xs
              font-semibold
              hover:bg-[#F2ECE3]
              hover:-translate-y-0.5
              transition-all
              shrink-0
            "
          >
            Open Instagram

            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;