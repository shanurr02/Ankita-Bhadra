import React from 'react';
import { CREATOR_PROFILE } from '../data/creatorData';
import { Play } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
  onExploreReels: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onExploreReels,
}) => {
  return (
    <section
      className="
        relative
        px-4
        sm:px-8
        lg:px-20
        pt-6
        sm:pt-12
        pb-14
        sm:pb-24
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            lg:gap-16
            items-center
          "
        >

          {/* ==========================================================
              LEFT CONTENT
          =========================================================== */}

          <div
            className="
              lg:col-span-7
              flex
              flex-col
              justify-center
              text-left
              order-1
            "
          >

            {/* EYEBROW */}

            <span
              id="hero-eyebrow"
              className="
                text-[11px]
                sm:text-xs
                font-medium
                tracking-[0.2em]
                sm:tracking-[0.26em]
                uppercase
                text-[#B56B5A]
                block
              "
            >
              C O N T E N T &nbsp; C R E A T O R
              &nbsp; · &nbsp; A N C H O R
            </span>


            {/* NAME */}

            <h1
              id="hero-title"
              className="
                mt-3
                sm:mt-6
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-[88px]
                font-serif
                font-normal
                text-[#1A1816]
                tracking-tight
                leading-[1.1]
                sm:leading-[1.05]
              "
            >
              Ankita Bhadra
            </h1>


            {/* BIO */}

            <p
              id="hero-bio"
              className="
                mt-4
                sm:mt-7
                text-base
                sm:text-lg
                lg:text-xl
                text-[#4A433D]
                font-light
                leading-relaxed
                max-w-xl
              "
            >
              I’m Ankita Bhadra — a content creator
              creating natural, engaging short-form
              videos that help brands connect with
              real people.
            </p>


            {/* ACTION BUTTONS */}

            <div
              className="
                mt-7
                sm:mt-10
                flex
                flex-col
                sm:flex-row
                items-stretch
                sm:items-center
                gap-3
                sm:gap-4
                w-full
                sm:w-auto
              "
            >

              {/* EXPLORE REELS */}

              <button
                onClick={onExploreReels}
                className="
                  w-full
                  sm:w-auto
                  min-h-[46px]
                  px-6
                  py-3
                  rounded-full
                  bg-[#1A1816]
                  text-[#FAF6F0]
                  text-xs
                  sm:text-sm
                  font-medium
                  hover:bg-[#332E29]
                  transition-all
                  cursor-pointer
                  shadow-sm
                  flex
                  items-center
                  justify-center
                  gap-2
                  touch-manipulation
                "
              >
                <Play
                  className="
                    w-3.5
                    h-3.5
                    fill-current
                  "
                />

                <span>
                  Explore Reels
                </span>
              </button>


              {/* CONTACT */}

              <button
                onClick={onOpenContact}
                className="
                  w-full
                  sm:w-auto
                  min-h-[46px]
                  px-6
                  py-3
                  rounded-full
                  border
                  border-[#D9CEBF]
                  text-[#2C2621]
                  text-xs
                  sm:text-sm
                  font-medium
                  hover:bg-[#EFE8DF]
                  transition-colors
                  cursor-pointer
                  flex
                  items-center
                  justify-center
                  touch-manipulation
                "
              >
                Inquire for Collaboration
              </button>

            </div>


            {/* MICRO DESCRIPTOR */}

            <p
              className="
                mt-8
                sm:mt-12
                text-[11px]
                sm:text-xs
                tracking-wider
                text-[#8A7D71]
                uppercase
                font-medium
              "
            >
              Brand integrations & stage emceeing
              across India
            </p>

          </div>


          {/* ==========================================================
              RIGHT — PORTRAIT FRAME
          =========================================================== */}

          <div
            className="
              lg:col-span-5
              flex
              justify-center
              lg:justify-end
              order-2
              mt-4
              lg:mt-0
            "
          >

            <div
              className="
                relative
                w-full
                max-w-[290px]
                sm:max-w-[330px]
                md:max-w-[360px]
              "
            >

              {/* ======================================================
                  SOFT BACKGROUND SHAPE
              ======================================================= */}

              <div
                className="
                  absolute
                  -inset-5
                  sm:-inset-7
                  bg-[#EFE8DF]
                  rounded-[55px]
                  sm:rounded-[70px]
                  -z-10
                "
              />


              {/* ======================================================
                  DECORATIVE BACK FRAME
              ======================================================= */}

              <div
                className="
                  absolute
                  -right-3
                  sm:-right-5
                  top-5
                  bottom-5
                  w-full
                  rounded-[32px]
                  sm:rounded-[42px]
                  border
                  border-[#D9CCBE]
                  -z-10
                "
              />


              {/* ======================================================
                  MAIN PHOTO FRAME
              ======================================================= */}

              <div
                className="
                  relative
                  bg-[#F8F3ED]
                  p-2.5
                  sm:p-3
                  rounded-[32px]
                  sm:rounded-[40px]
                  border
                  border-[#D9CEBF]
                  shadow-[0_25px_70px_rgba(55,43,35,0.16)]
                "
              >

                {/* INNER FRAME */}

                <div
                  className="
                    relative
                    aspect-[4/5]
                    w-full
                    rounded-[25px]
                    sm:rounded-[32px]
                    overflow-hidden
                    bg-[#E8DED4]
                    border
                    border-[#E2D5C9]
                  "
                >

                  {/* PHOTO */}

                  <img
                    id="hero-portrait-image"
                    src={CREATOR_PROFILE.portraitImage}
                    alt="Ankita Bhadra - Content Creator & Anchor"
                    referrerPolicy="no-referrer"
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />


                  {/* ==================================================
                      BOTTOM GRADIENT
                  =================================================== */}

                  <div
                    className="
                      absolute
                      bottom-0
                      inset-x-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/30
                      to-transparent
                      pt-24
                      pb-5
                      px-5
                      text-white
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        mb-1.5
                      "
                    >

                      <span
                        className="
                          text-xs
                          sm:text-sm
                          font-semibold
                        "
                      >
                        @Ankita Bhadra
                      </span>

                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-emerald-400
                        "
                      />

                    </div>

                    <p
                      className="
                        text-[10px]
                        sm:text-xs
                        text-white/80
                        font-light
                      "
                    >
                      Anchor · Creator · Storyteller
                    </p>

                  </div>

                </div>

              </div>


              {/* ======================================================
                  SMALL DECORATIVE ELEMENT
              ======================================================= */}

              <div
                className="
                  absolute
                  -bottom-4
                  -left-4
                  sm:-left-6
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  rounded-full
                  bg-[#DCC9BA]
                  opacity-50
                  blur-[1px]
                  -z-10
                "
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};