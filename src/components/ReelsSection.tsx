import React, { useState } from 'react';
import { Reel } from '../types';
import { REELS, CREATOR_PROFILE } from '../data/creatorData';

import {
  Heart,
  MessageCircle,
  Instagram,
  ExternalLink,
} from 'lucide-react';

interface ReelsSectionProps {
  onSelectReel: (reel: Reel) => void;
  onOpenContact?: () => void;
}

/* ================================================================
   INSTAGRAM HELPERS
   ================================================================ */

/**
 * Extract Instagram Reel shortcode from:
 *
 * https://www.instagram.com/reel/DV3R9JxkR5E/
 *
 * or
 *
 * https://www.instagram.com/reel/DV3R9JxkR5E/?stkn=xxxx
 */
const getInstagramShortcode = (
  reel: Reel
): string | null => {
  // First preference: explicit shortcode
  if (reel.shortcode) {
    return reel.shortcode;
  }

  // Otherwise extract it from instagramUrl
  if (!reel.instagramUrl) {
    return null;
  }

  const match = reel.instagramUrl.match(
    /instagram\.com\/reel\/([^/?#]+)/
  );

  return match?.[1] || null;
};

/**
 * Convert Instagram Reel URL into official embed URL.
 */
const getInstagramEmbedUrl = (
  reel: Reel
): string | null => {
  const shortcode = getInstagramShortcode(reel);

  if (!shortcode) {
    return null;
  }

  return `https://www.instagram.com/reel/${shortcode}/embed/`;
};

/* ================================================================
   COMPONENT
   ================================================================ */

export const ReelsSection: React.FC<ReelsSectionProps> = ({
  onSelectReel,
}) => {
  const [likedReelIds, setLikedReelIds] = useState<
    Record<string, boolean>
  >({});

  const [selectedCategory, setSelectedCategory] =
    useState<string>('All');

  /* ================================================================
     CATEGORIES
     ================================================================ */

  const categories = [
    'All',
    'Anchoring & Events',
    'Brand Collabs',
    'EdTech & Reviews',
    'Vlogs & Lifestyle',
  ];

  /* ================================================================
     FILTER
     ================================================================ */

  const filteredReels =
    selectedCategory === 'All'
      ? REELS
      : REELS.filter(
          (reel) =>
            reel.category === selectedCategory
        );

  /* ================================================================
     LIKE
     ================================================================ */

  const handleLike = (
    event: React.MouseEvent<HTMLButtonElement>,
    reelId: string
  ) => {
    event.stopPropagation();

    setLikedReelIds((previous) => ({
      ...previous,
      [reelId]: !previous[reelId],
    }));
  };

  /* ================================================================
     RENDER
     ================================================================ */

  return (
    <section
      id="brand-reels"
      className="
        bg-[#FBF8F4]
        px-4
        sm:px-8
        lg:px-16
        xl:px-20
        pt-10
        sm:pt-14
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
          <div className="max-w-2xl">

            {/* Small Label */}

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
                Portfolio Showcase
              </span>
            </div>

            {/* Title */}

            <div
              className="
                flex
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
                  hidden
                  sm:flex
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
                {REELS.length}
              </span>
            </div>

            {/* Description */}

            <p
              className="
                mt-3
                text-sm
                sm:text-[15px]
                leading-6
                text-[#7A6E63]
                max-w-xl
              "
            >
              Explore selected collaborations, events,
              campaigns and lifestyle content.
            </p>
          </div>

          {/* ========================================================
              CATEGORY FILTERS
          ========================================================= */}

          <div
            className="
              flex
              items-center
              gap-2
              overflow-x-auto
              pb-1
              -mx-4
              px-4
              sm:mx-0
              sm:px-0
              scrollbar-hide
            "
          >
            {categories.map((category) => {
              const isActive =
                selectedCategory === category;

              const count =
                category === 'All'
                  ? REELS.length
                  : REELS.filter(
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
                      isActive
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
        </div>

        {/* ==========================================================
            REELS GRID
        =========================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            sm:gap-7
            lg:gap-8
          "
        >
          {filteredReels.map((reel) => {
            const isLiked =
              likedReelIds[reel.id] || false;

            const instagramEmbed =
              getInstagramEmbedUrl(reel);

            return (
              <article
                key={reel.id}
                className="
                  group
                  bg-white
                  rounded-[22px]
                  overflow-hidden
                  border
                  border-[#E8DED3]
                  shadow-[0_6px_25px_rgba(50,40,30,0.06)]
                  hover:shadow-[0_18px_45px_rgba(50,40,30,0.13)]
                  hover:-translate-y-1
                  transition-all
                  duration-500
                "
              >

                {/* ==================================================
                    CARD HEADER
                =================================================== */}

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
                  {/* Creator */}

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
                      "
                    >
                      <img
                        src={
                          CREATOR_PROFILE.portraitImage
                        }
                        alt={
                          CREATOR_PROFILE.name
                        }
                        className="
                          w-full
                          h-full
                          object-cover
                        "
                      />
                    </div>

                    <div className="min-w-0">

                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                        "
                      >
                        <span
                          className="
                            text-xs
                            font-semibold
                            text-[#1A1816]
                            truncate
                          "
                        >
                          {reel.collaboratorHandle ||
                            CREATOR_PROFILE.instagramHandle}
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
                          truncate
                        "
                      >
                        <span className="truncate">
                          {reel.audioTrack}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Instagram Button */}

                  <a
                    href={
                      reel.instagramUrl ||
                      CREATOR_PROFILE.instagramUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) =>
                      event.stopPropagation()
                    }
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
                      transition-all
                    "
                    aria-label="Open Instagram Reel"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                {/* ==================================================
                    INSTAGRAM REEL
                =================================================== */}

                <div
                  className="
                    relative
                    aspect-[9/16]
                    w-full
                    overflow-hidden
                    bg-[#171513]
                  "
                >

                  {instagramEmbed ? (
                    <iframe
                      src={instagramEmbed}
                      title={`Instagram Reel - ${reel.title}`}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        border-0
                      "
                      frameBorder="0"
                      scrolling="no"
                      allow="
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        picture-in-picture;
                        web-share
                      "
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        onSelectReel(reel)
                      }
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        cursor-pointer
                      "
                    >
                      <img
                        src={reel.thumbnailUrl}
                        alt={reel.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-black/25
                        "
                      />
                    </button>
                  )}

                  {/* ==================================================
                      INSTAGRAM BADGE
                  =================================================== */}

                  {instagramEmbed && (
                    <div
                      className="
                        absolute
                        top-4
                        left-4
                        z-20
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
                          border-white/20
                          text-white
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
                          Instagram Reel
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ==================================================
                      ACTION BUTTONS
                  =================================================== */}

                  <div
                    className="
                      absolute
                      right-4
                      bottom-5
                      z-30
                      flex
                      flex-col
                      gap-2
                    "
                  >

                    {/* LIKE */}

                    <button
                      type="button"
                      onClick={(event) =>
                        handleLike(
                          event,
                          reel.id
                        )
                      }
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-black/60
                        backdrop-blur-md
                        border
                        border-white/20
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-black/80
                        hover:scale-105
                        transition-all
                      "
                      aria-label="Like reel"
                    >
                      <Heart
                        className={`
                          w-4
                          h-4
                          transition-all

                          ${
                            isLiked
                              ? 'text-rose-400 fill-rose-400 scale-110'
                              : ''
                          }
                        `}
                      />
                    </button>

                    {/* COMMENTS */}

                    <button
                      type="button"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-black/60
                        backdrop-blur-md
                        border
                        border-white/20
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-black/80
                        hover:scale-105
                        transition-all
                      "
                      aria-label="Comments"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>

                  {/* ==================================================
                      BOTTOM OVERLAY
                  =================================================== */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      bottom-0
                      z-20
                      p-4
                      pr-16
                      pointer-events-none
                      bg-gradient-to-t
                      from-black/85
                      via-black/30
                      to-transparent
                      pt-24
                    "
                  >
                    {reel.brandTag && (
                      <span
                        className="
                          inline-block
                          mb-2
                          px-2.5
                          py-1
                          rounded-full
                          bg-white/15
                          backdrop-blur-sm
                          border
                          border-white/20
                          text-[9px]
                          font-medium
                          text-white
                        "
                      >
                        {reel.brandTag}
                      </span>
                    )}

                    <h3
                      className="
                        text-sm
                        sm:text-[15px]
                        font-semibold
                        leading-snug
                        text-white
                        line-clamp-2
                      "
                    >
                      {reel.title}
                    </h3>
                  </div>
                </div>

                {/* ==================================================
                    CARD FOOTER
                =================================================== */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    px-4
                    py-3
                    bg-[#FFFCF9]
                    border-t
                    border-[#F0E8E0]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      min-w-0
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        text-[#8A7D72]
                        whitespace-nowrap
                      "
                    >
                      {reel.date}
                    </span>

                    {reel.brandTag && (
                      <>
                        <span
                          className="
                            w-1
                            h-1
                            rounded-full
                            bg-[#CBBEAF]
                            shrink-0
                          "
                        />

                        <span
                          className="
                            text-[10px]
                            font-medium
                            text-[#5E544B]
                            truncate
                            max-w-[110px]
                          "
                        >
                          {reel.brandTag}
                        </span>
                      </>
                    )}
                  </div>

                  {/* ==================================================
                      VIEW REEL
                  =================================================== */}

                  {reel.instagramUrl ? (
                    <a
                      href={reel.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                      className="
                        flex
                        items-center
                        gap-1
                        shrink-0
                        text-[10px]
                        font-semibold
                        text-[#9C5A4B]
                        hover:text-[#7D4438]
                        transition-colors
                      "
                    >
                      View Reel

                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        onSelectReel(reel)
                      }
                      className="
                        flex
                        items-center
                        gap-1
                        shrink-0
                        text-[10px]
                        font-semibold
                        text-[#9C5A4B]
                        hover:text-[#7D4438]
                        transition-colors
                      "
                    >
                      View Details

                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* ==========================================================
            EMPTY STATE
        =========================================================== */}

        {filteredReels.length === 0 && (
          <div
            className="
              py-20
              text-center
              rounded-3xl
              bg-white
              border
              border-[#E8DED3]
            "
          >
            <div
              className="
                w-12
                h-12
                mx-auto
                mb-4
                rounded-full
                bg-[#F2E9E1]
                flex
                items-center
                justify-center
              "
            >
              <Instagram
                className="
                  w-5
                  h-5
                  text-[#9C5A4B]
                "
              />
            </div>

            <p
              className="
                text-sm
                text-[#7A6E63]
              "
            >
              No reels found in this category.
            </p>

            <button
              type="button"
              onClick={() =>
                setSelectedCategory('All')
              }
              className="
                mt-5
                px-5
                py-2.5
                rounded-full
                bg-[#1A1816]
                text-white
                text-xs
                font-medium
                hover:bg-[#302C29]
                transition-colors
              "
            >
              View All Reels
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReelsSection;