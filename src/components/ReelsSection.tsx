import React, { useEffect, useRef, useState } from 'react';
import { Reel } from '../types';
import { REELS, CREATOR_PROFILE } from '../data/creatorData';
import {
  Music2,
  Heart,
  MessageCircle,
  Instagram,
  Volume2,
  VolumeX,
  ExternalLink,
  Play,
} from 'lucide-react';

interface ReelsSectionProps {
  onSelectReel: (reel: Reel) => void;
  onOpenContact: () => void;
}

export const ReelsSection: React.FC<ReelsSectionProps> = ({
  onSelectReel,
}) => {
  const [likedReelIds, setLikedReelIds] = useState<
    Record<string, boolean>
  >({});

  const [selectedCategory, setSelectedCategory] =
    useState<string>('All');

  const [hoveredReelId, setHoveredReelId] =
    useState<string | null>(null);

  const [mutedStates, setMutedStates] = useState<
    Record<string, boolean>
  >({});

  const videoRefs = useRef<
    Record<string, HTMLVideoElement | null>
  >({});

  const categories = [
    'All',
    'Anchoring & Events',
    'Brand Collabs',
    'EdTech & Reviews',
    'Vlogs & Lifestyle',
  ];

  const filteredReels =
    selectedCategory === 'All'
      ? REELS
      : REELS.filter(
          (reel) => reel.category === selectedCategory
        );

  /*
   * ============================================================
   * INITIALIZE ALL VIDEOS AS MUTED
   * ============================================================
   */

  useEffect(() => {
    const initialMutedStates: Record<string, boolean> = {};

    REELS.forEach((reel) => {
      initialMutedStates[reel.id] = true;
    });

    setMutedStates(initialMutedStates);
  }, []);

  /*
   * ============================================================
   * INSTAGRAM SHORTCODE
   * ============================================================
   */

  const getInstagramShortcode = (
    reel: Reel
  ): string | null => {
    if (reel.shortcode) {
      return reel.shortcode;
    }

    if (!reel.instagramUrl) {
      return null;
    }

    const match = reel.instagramUrl.match(
      /instagram\.com\/reel\/([^/?#]+)/
    );

    return match ? match[1] : null;
  };

  /*
   * ============================================================
   * INSTAGRAM EMBED URL
   * ============================================================
   */

  const getInstagramEmbedUrl = (
    reel: Reel
  ): string | null => {
    const shortcode =
      getInstagramShortcode(reel);

    if (!shortcode) {
      return null;
    }

    return `https://www.instagram.com/reel/${shortcode}/embed/`;
  };

  /*
   * ============================================================
   * LIKE
   * ============================================================
   */

  const handleLike = (
    event: React.MouseEvent,
    reelId: string
  ) => {
    event.stopPropagation();

    setLikedReelIds((previous) => ({
      ...previous,
      [reelId]: !previous[reelId],
    }));
  };

  /*
   * ============================================================
   * HOVER ENTER
   *
   * DEFAULT:
   * Video is already playing muted.
   *
   * HOVER:
   * Video continues playing.
   * Sound attempts to turn ON.
   * ============================================================
   */

  const handleMouseEnter = async (
    reel: Reel
  ) => {
    if (!reel.videoUrl) {
      return;
    }

    setHoveredReelId(reel.id);

    const video =
      videoRefs.current[reel.id];

    if (!video) {
      return;
    }

    try {
      /*
       * Turn sound ON.
       */
      video.muted = false;
      video.volume = 1;

      setMutedStates((previous) => ({
        ...previous,
        [reel.id]: false,
      }));

      /*
       * Video should already be playing.
       * If browser stopped it, resume it.
       */
      if (video.paused) {
        await video.play();
      }
    } catch {
      /*
       * Browser autoplay policy can block
       * unmuted playback.
       *
       * Keep the video playing muted.
       */
      video.muted = true;

      setMutedStates((previous) => ({
        ...previous,
        [reel.id]: true,
      }));

      video.play().catch(() => {});
    }
  };

  /*
   * ============================================================
   * HOVER LEAVE
   *
   * IMPORTANT:
   * Video DOES NOT pause.
   *
   * Only sound is turned OFF.
   * ============================================================
   */

  const handleMouseLeave = (
    reel: Reel
  ) => {
    if (!reel.videoUrl) {
      return;
    }

    setHoveredReelId(null);

    const video =
      videoRefs.current[reel.id];

    if (!video) {
      return;
    }

    /*
     * Turn sound OFF.
     */
    video.muted = true;

    setMutedStates((previous) => ({
      ...previous,
      [reel.id]: true,
    }));

    /*
     * DO NOT pause.
     *
     * If for any reason browser paused it,
     * start it again.
     */
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  /*
   * ============================================================
   * SOUND BUTTON
   * ============================================================
   */

  const toggleSound = async (
    event: React.MouseEvent,
    reel: Reel
  ) => {
    event.stopPropagation();

    if (!reel.videoUrl) {
      return;
    }

    const video =
      videoRefs.current[reel.id];

    if (!video) {
      return;
    }

    /*
     * Currently muted -> turn sound ON.
     */
    if (video.muted) {
      try {
        video.muted = false;
        video.volume = 1;

        await video.play();

        setMutedStates((previous) => ({
          ...previous,
          [reel.id]: false,
        }));
      } catch {
        /*
         * If browser blocks sound,
         * remain muted.
         */
        video.muted = true;

        setMutedStates((previous) => ({
          ...previous,
          [reel.id]: true,
        }));
      }

      return;
    }

    /*
     * Currently sound ON -> mute.
     */
    video.muted = true;

    setMutedStates((previous) => ({
      ...previous,
      [reel.id]: true,
    }));

    /*
     * Keep video playing.
     */
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

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

        {/* ========================================================
            HEADER
        ========================================================= */}

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

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <h2
                id="brand-reels-heading"
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

          {/* ======================================================
              CATEGORY FILTER
          ======================================================= */}

          <div
            className="
              flex
              items-center
              gap-2
              overflow-x-auto
              pb-1
              scrollbar-hide
              -mx-4
              px-4
              sm:mx-0
              sm:px-0
            "
          >
            {categories.map((category) => {
              const isActive =
                selectedCategory === category;

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
                  {category === 'All'
                    ? `All (${REELS.length})`
                    : category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            REELS GRID
        ========================================================= */}

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
              likedReelIds[reel.id] ?? false;

            const isHovered =
              hoveredReelId === reel.id;

            const isMuted =
              mutedStates[reel.id] ?? true;

            const hasVideo =
              Boolean(reel.videoUrl);

            const instagramEmbed =
              getInstagramEmbedUrl(reel);

            return (
              <article
                key={reel.id}
                id={`reel-card-${reel.id}`}
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
                        referrerPolicy="no-referrer"
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
                            `_${reel.creatorHandle}_`}
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
                        <Music2
                          className="
                            w-2.5
                            h-2.5
                            shrink-0
                          "
                        />

                        <span className="truncate">
                          {reel.audioTrack}
                        </span>
                      </div>

                    </div>
                  </div>

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
                    aria-label="Open Instagram"
                  >
                    <Instagram
                      className="w-4 h-4"
                    />
                  </a>
                </div>

                {/* ==================================================
                    MEDIA
                =================================================== */}

                <div
                  className="
                    relative
                    aspect-[9/16]
                    w-full
                    overflow-hidden
                    bg-[#171513]
                    cursor-pointer
                  "
                  onClick={() =>
                    onSelectReel(reel)
                  }
                  onMouseEnter={() =>
                    handleMouseEnter(reel)
                  }
                  onMouseLeave={() =>
                    handleMouseLeave(reel)
                  }
                >

                  {/* ==================================================
                      LOCAL MP4 VIDEO
                  =================================================== */}

                  {hasVideo ? (
                    <>
                      <video
                        ref={(element) => {
                          videoRefs.current[
                            reel.id
                          ] = element;
                        }}
                        src={reel.videoUrl}
                        poster={reel.thumbnailUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className={`
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          ${
                            isHovered
                              ? 'scale-[1.025]'
                              : 'scale-100'
                          }
                        `}
                        onLoadedMetadata={(
                          event
                        ) => {
                          const video =
                            event.currentTarget;

                          /*
                           * Always begin muted.
                           */
                          video.muted = true;

                          /*
                           * Start immediately.
                           */
                          video
                            .play()
                            .catch(() => {});
                        }}
                      />

                      {/* Top gradient */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          top-0
                          h-32
                          bg-gradient-to-b
                          from-black/35
                          to-transparent
                          pointer-events-none
                        "
                      />

                      {/* Bottom gradient */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          h-56
                          bg-gradient-to-t
                          from-black/90
                          via-black/35
                          to-transparent
                          pointer-events-none
                        "
                      />

                      {/* =================================================
                          SOUND BUTTON
                      ================================================== */}

                      <button
                        type="button"
                        onClick={(event) =>
                          toggleSound(
                            event,
                            reel
                          )
                        }
                        className="
                          absolute
                          top-4
                          right-4
                          z-30
                          w-10
                          h-10
                          rounded-full
                          bg-black/55
                          backdrop-blur-md
                          border
                          border-white/20
                          text-white
                          flex
                          items-center
                          justify-center
                          hover:bg-black/75
                          hover:scale-105
                          transition-all
                        "
                        aria-label={
                          isMuted
                            ? 'Turn sound on'
                            : 'Mute video'
                        }
                      >
                        {isMuted ? (
                          <VolumeX
                            className="w-4 h-4"
                          />
                        ) : (
                          <Volume2
                            className="w-4 h-4"
                          />
                        )}
                      </button>

                      {/* =================================================
                          HOVER SOUND MESSAGE
                      ================================================== */}

                      <div
                        className={`
                          absolute
                          left-1/2
                          top-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          z-20
                          pointer-events-none
                          transition-all
                          duration-300
                          ${
                            isHovered &&
                            !isMuted
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-90'
                          }
                        `}
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            px-4
                            py-2.5
                            rounded-full
                            bg-black/60
                            backdrop-blur-md
                            border
                            border-white/20
                            text-white
                            text-[11px]
                            font-medium
                          "
                        >
                          <Volume2
                            className="w-3.5 h-3.5"
                          />

                          Sound On
                        </div>
                      </div>
                    </>
                  ) : instagramEmbed ? (

                    /* ==================================================
                       INSTAGRAM EMBED
                    =================================================== */

                    <div
                      className="
                        absolute
                        inset-0
                        bg-white
                      "
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    >
                      <iframe
                        src={instagramEmbed}
                        title={reel.title}
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
                    </div>

                  ) : (

                    /* ==================================================
                       FALLBACK IMAGE
                    =================================================== */

                    <div
                      className="
                        absolute
                        inset-0
                      "
                    >
                      <img
                        src={
                          reel.thumbnailUrl
                        }
                        alt={reel.title}
                        referrerPolicy="no-referrer"
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
                          bg-black/20
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <div
                          className="
                            w-14
                            h-14
                            rounded-full
                            bg-white/90
                            shadow-xl
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Play
                            className="
                              w-5
                              h-5
                              ml-0.5
                              text-[#1A1816]
                              fill-[#1A1816]
                            "
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ==================================================
                      INSTAGRAM BADGE
                  =================================================== */}

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
                        bg-black/50
                        backdrop-blur-md
                        border
                        border-white/20
                        text-white
                      "
                    >
                      <Instagram
                        className="w-3 h-3"
                      />

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

                  {/* ==================================================
                      ACTION BUTTONS
                  =================================================== */}

                  <div
                    className="
                      absolute
                      right-4
                      bottom-20
                      z-20
                      flex
                      flex-col
                      gap-2
                    "
                  >
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
                        bg-black/55
                        backdrop-blur-md
                        border
                        border-white/20
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-black/75
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

                    <button
                      type="button"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-black/55
                        backdrop-blur-md
                        border
                        border-white/20
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-black/75
                        hover:scale-105
                        transition-all
                      "
                      aria-label="Comments"
                    >
                      <MessageCircle
                        className="w-4 h-4"
                      />
                    </button>
                  </div>

                  {/* ==================================================
                      TITLE / CAPTION
                  =================================================== */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      bottom-0
                      z-10
                      p-4
                      pr-16
                      pointer-events-none
                    "
                  >
                    {reel.brandTag && (
                      <span
                        className="
                          inline-block
                          max-w-[160px]
                          truncate
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
                        drop-shadow-lg
                      "
                    >
                      {reel.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        sm:text-[11px]
                        text-white/75
                        line-clamp-1
                      "
                    >
                      {reel.caption}
                    </p>
                  </div>
                </div>

                {/* ==================================================
                    FOOTER
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
                            max-w-[100px]
                          "
                        >
                          {reel.brandTag}
                        </span>
                      </>
                    )}
                  </div>

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
                    Open Reel

                    <ExternalLink
                      className="w-3 h-3"
                    />
                  </a>
                </div>

              </article>
            );
          })}
        </div>

        {/* ========================================================
            EMPTY STATE
        ========================================================= */}

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