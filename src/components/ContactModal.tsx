import React, { useEffect, useState } from "react";
import {
  X,
  MessageCircle,
  Instagram,
  Video,
  Handshake,
  CalendarDays,
  Smartphone,
  Mic2,
  Camera,
  Sparkles,
  Megaphone,
  MoreHorizontal,
  Check,
  ArrowRight,
} from "lucide-react";

const CREATOR_PROFILE = {
  name: "Ankita Bhadra",
  instagram: "__bhadra___",
};

const WHATSAPP_NUMBER = "918787857617";

const PROJECT_OPTIONS = [
  {
    id: "short-reel",
    title: "Short Reel",
    icon: Video,
  },
  {
    id: "collaboration",
    title: "Collaboration",
    icon: Handshake,
  },
  {
    id: "monthly-package",
    title: "Monthly Package",
    icon: CalendarDays,
  },
  {
    id: "ugc-content",
    title: "UGC Content",
    icon: Smartphone,
  },
  {
    id: "event-hosting",
    title: "Event / Hosting",
    icon: Mic2,
  },
  {
    id: "product-shoot",
    title: "Product Shoot",
    icon: Camera,
  },
  {
    id: "beauty-fashion",
    title: "Beauty / Fashion",
    icon: Sparkles,
  },
  {
    id: "brand-promotion",
    title: "Brand Promotion",
    icon: Megaphone,
  },
  {
    id: "other",
    title: "Something Else",
    icon: MoreHorizontal,
  },
];

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] =
    useState("collaboration");

  /* ----------------------------------
     BODY SCROLL LOCK
  ---------------------------------- */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedProject = PROJECT_OPTIONS.find(
    (option) => option.id === selectedOption
  );

  const projectName =
    selectedProject?.title || "Collaboration";

  /* ----------------------------------
     WHATSAPP
  ---------------------------------- */
  const handleWhatsApp = () => {
    const cleanName = name.trim() || "there";

    const message =
      `Hi Ankita, my name is ${cleanName}. ` +
      `I'm interested in ${projectName}. ` +
      `I'd like to discuss the details with you.`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* ----------------------------------
     INSTAGRAM
  ---------------------------------- */
  const handleInstagram = () => {
    window.open(
      `https://www.instagram.com/${CREATOR_PROFILE.instagram}/`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/55
        p-3
        backdrop-blur-sm
        sm:p-5
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* ----------------------------------
          MODAL
      ---------------------------------- */}
      <div
        className="
          relative
          flex
          w-full
          max-w-[460px]
          max-h-[92vh]
          flex-col
          overflow-hidden
          rounded-[26px]
          border
          border-white/70
          bg-[#fffaf5]
          shadow-[0_30px_90px_rgba(0,0,0,0.28)]
        "
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        {/* TOP ACCENT */}
        <div
          className="
            h-[3px]
            w-full
            shrink-0
            bg-gradient-to-r
            from-[#d89a6a]
            via-[#b8754d]
            to-[#d89a6a]
          "
        />

        {/* ----------------------------------
            HEADER
        ---------------------------------- */}
        <div
          className="
            shrink-0
            px-5
            pb-1
            pt-5
            sm:px-6
            sm:pt-6
          "
        >
          <div className="flex items-start justify-between gap-4">
            {/* TITLE */}
            <div className="min-w-0">
              <div
                className="
                  mb-2
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#f2e3d7]
                  px-3
                  py-1
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#8a563d]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#b8754d]
                  "
                />

                Let's Connect
              </div>

              <h2
                className="
                  text-[23px]
                  font-semibold
                  leading-tight
                  tracking-[-0.03em]
                  text-[#25211f]
                  sm:text-[25px]
                "
              >
                Work with Ankita
              </h2>

              <p
                className="
                  mt-1.5
                  text-[12px]
                  leading-relaxed
                  text-[#81766f]
                "
              >
                Tell us what you're looking for and
                connect directly.
              </p>
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#eaded5]
                bg-white
                text-[#756a63]
                transition-all
                duration-200
                hover:border-[#d8b9a5]
                hover:bg-[#f7eee8]
                hover:text-[#8d5439]
                active:scale-95
              "
            >
              <X
                size={17}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>

        {/* ----------------------------------
            SCROLLABLE CONTENT
            Scrollbar hidden
        ---------------------------------- */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-5
            pb-5
            pt-5
            sm:px-6
            sm:pb-6
            scrollbar-hide
          "
        >
          {/* ----------------------------------
              NAME
          ---------------------------------- */}
          <div className="mb-4">
            <label
              htmlFor="contact-name"
              className="
                mb-1.5
                block
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#746860]
              "
            >
              Your Name
            </label>

            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Enter your name"
              autoComplete="name"
              className="
                h-11
                w-full
                rounded-xl
                border
                border-[#e7d9d0]
                bg-white
                px-3.5
                text-[13px]
                text-[#292522]
                outline-none
                placeholder:text-[#aaa09a]
                transition-all
                duration-200
                focus:border-[#bd8060]
                focus:ring-2
                focus:ring-[#bd8060]/10
              "
            />
          </div>

          {/* ----------------------------------
              OPTIONS HEADER
          ---------------------------------- */}
          <div className="mb-2">
            <div className="flex items-center justify-between">
              <label
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#746860]
                "
              >
                What can we work on?
              </label>

              <span
                className="
                  text-[10px]
                  text-[#a09791]
                "
              >
                {PROJECT_OPTIONS.length} options
              </span>
            </div>
          </div>

          {/* ----------------------------------
              OPTIONS GRID
          ---------------------------------- */}
          <div
            className="
              grid
              grid-cols-2
              gap-2
              sm:grid-cols-3
            "
          >
            {PROJECT_OPTIONS.map((option) => {
              const Icon = option.icon;

              const isSelected =
                selectedOption === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    setSelectedOption(option.id)
                  }
                  aria-pressed={isSelected}
                  className={`
                    group
                    relative
                    flex
                    min-h-[67px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[14px]
                    border
                    px-2
                    py-2.5
                    text-center
                    transition-all
                    duration-200
                    active:scale-[0.97]

                    ${
                      isSelected
                        ? `
                          border-[#b8754d]
                          bg-[#f5e5da]
                          shadow-[0_5px_18px_rgba(184,117,77,0.12)]
                        `
                        : `
                          border-[#eaded6]
                          bg-white
                          hover:border-[#d7bbaa]
                          hover:bg-[#fdf8f4]
                        `
                    }
                  `}
                >
                  {/* CHECK */}
                  {isSelected && (
                    <span
                      className="
                        absolute
                        right-1.5
                        top-1.5
                        flex
                        h-4
                        w-4
                        items-center
                        justify-center
                        rounded-full
                        bg-[#b8754d]
                        text-white
                      "
                    >
                      <Check
                        size={10}
                        strokeWidth={3}
                      />
                    </span>
                  )}

                  {/* ICON */}
                  <span
                    className={`
                      mb-1.5
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-lg
                      transition-all
                      duration-200

                      ${
                        isSelected
                          ? `
                            bg-[#b8754d]
                            text-white
                          `
                          : `
                            bg-[#f5eee9]
                            text-[#9a6a51]
                            group-hover:bg-[#f0e3da]
                          `
                      }
                    `}
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.9}
                    />
                  </span>

                  {/* TITLE */}
                  <span
                    className={`
                      max-w-full
                      truncate
                      text-[10.5px]
                      font-semibold
                      leading-tight
                      sm:text-[11px]

                      ${
                        isSelected
                          ? "text-[#7e4c35]"
                          : "text-[#514943]"
                      }
                    `}
                  >
                    {option.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ----------------------------------
              SELECTED OPTION
          ---------------------------------- */}
          <div
            className="
              mt-3
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-[#eee2da]
              bg-[#faf4ef]
              px-3
              py-2.5
            "
          >
            <div
              className="
                flex
                min-w-0
                items-center
                gap-2
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#ead6c8]
                  text-[#8b593f]
                "
              >
                <Check
                  size={12}
                  strokeWidth={2.5}
                />
              </span>

              <div className="min-w-0">
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    text-[#9b8c83]
                  "
                >
                  Selected
                </p>

                <p
                  className="
                    truncate
                    text-[11px]
                    font-semibold
                    text-[#51463f]
                  "
                >
                  {projectName}
                </p>
              </div>
            </div>

            <ArrowRight
              size={14}
              className="
                shrink-0
                text-[#b88a70]
              "
            />
          </div>

          {/* ----------------------------------
              WHATSAPP BUTTON
          ---------------------------------- */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="
              mt-3
              flex
              h-12
              w-full
              items-center
              justify-center
              gap-2.5
              rounded-[14px]
              bg-[#24211f]
              px-4
              text-[12px]
              font-semibold
              text-white
              shadow-[0_8px_25px_rgba(36,33,31,0.16)]
              transition-all
              duration-200
              hover:-translate-y-[1px]
              hover:bg-[#171514]
              hover:shadow-[0_12px_30px_rgba(36,33,31,0.2)]
              active:translate-y-0
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#25D366]
                text-white
              "
            >
              <MessageCircle
                size={15}
                fill="currentColor"
              />
            </span>

            <span>
              Connect on WhatsApp
            </span>

            <ArrowRight
              size={15}
              className="ml-0.5 opacity-70"
            />
          </button>

          {/* ----------------------------------
              INSTAGRAM
          ---------------------------------- */}
          <button
            type="button"
            onClick={handleInstagram}
            className="
              mt-2
              flex
              w-full
              items-center
              justify-center
              gap-1.5
              py-1.5
              text-[10.5px]
              font-medium
              text-[#8d7163]
              transition-colors
              duration-200
              hover:text-[#9b573a]
            "
          >
            <Instagram size={13} />

            View Instagram Profile
          </button>

          {/* ----------------------------------
              FOOT NOTE
          ---------------------------------- */}
          <p
            className="
              mt-1
              text-center
              text-[9px]
              leading-relaxed
              text-[#aaa09a]
            "
          >
            Your details will open directly in
            WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;