import React, { useState } from 'react';
import { CREATOR_PROFILE } from '../data/creatorData';
import {
  X,
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ================================================================
   WHATSAPP NUMBER
   IMPORTANT:
   Add country code without +, spaces or hyphens.
   
   Example:
   919876543210
   ================================================================ */

const WHATSAPP_NUMBER = '919XXXXXXXXX';

/* ================================================================
   COMPONENT
   ================================================================ */

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');

  if (!isOpen) {
    return null;
  }

  /* ================================================================
     WHATSAPP CONNECT
     ================================================================ */

  const handleWhatsApp = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    const cleanName = name.trim();

    if (!cleanName) {
      return;
    }

    /*
     * First WhatsApp message.
     *
     * Example:
     * Hi Ankita, my name is Rahul. I’d like to connect regarding a collaboration.
     */

    const message =
      `Hi Ankita, my name is ${cleanName}. I’d like to connect regarding a collaboration.`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        p-4
        bg-black/75
        backdrop-blur-sm
        animate-in
        fade-in
        duration-200
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-md
          bg-[#FBF8F5]
          rounded-3xl
          border
          border-[#E8DFC2]
          shadow-2xl
          overflow-hidden
          animate-in
          zoom-in-95
          duration-200
        "
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* ==========================================================
            HEADER
        =========================================================== */}

        <div
          className="
            relative
            px-5
            py-5
            sm:px-7
            sm:py-7
            bg-[#F6EFE5]
            border-b
            border-[#E8DFC2]
          "
        >

          {/* Decorative element */}

          <div
            className="
              absolute
              top-0
              right-0
              w-32
              h-32
              rounded-full
              bg-[#B56B5A]/5
              blur-2xl
              pointer-events-none
            "
          />

          {/* Close */}

          <button
            type="button"
            onClick={onClose}
            className="
              absolute
              top-4
              right-4
              w-9
              h-9
              rounded-full
              flex
              items-center
              justify-center
              text-[#524941]
              hover:bg-black/5
              transition-colors
              cursor-pointer
              z-10
            "
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}

          <div className="relative pr-8">

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
                  w-7
                  h-px
                  bg-[#B56B5A]
                "
              />

              <span
                className="
                  text-[10px]
                  sm:text-[11px]
                  font-bold
                  tracking-[0.2em]
                  uppercase
                  text-[#B56B5A]
                "
              >
                LET'S CONNECT
              </span>
            </div>

            <h3
              className="
                text-2xl
                sm:text-3xl
                font-serif
                font-normal
                text-[#1A1816]
              "
            >
              Connect with Ankita
            </h3>

            <p
              className="
                mt-2
                text-xs
                sm:text-sm
                leading-5
                text-[#665B51]
                max-w-sm
              "
            >
              Enter your name and continue the
              conversation directly on WhatsApp.
            </p>
          </div>
        </div>

        {/* ==========================================================
            BODY
        =========================================================== */}

        <div
          className="
            px-5
            py-6
            sm:px-7
            sm:py-7
          "
        >

          <form
            onSubmit={handleWhatsApp}
            className="space-y-5"
          >

            {/* NAME */}

            <div>
              <label
                htmlFor="contact-name"
                className="
                  block
                  text-[11px]
                  sm:text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#3D352F]
                  mb-2
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
                autoFocus
                required
                className="
                  w-full
                  h-12
                  px-4
                  rounded-xl
                  border
                  border-[#D9CEC0]
                  bg-white
                  text-sm
                  text-[#1A1816]
                  placeholder:text-[#A59A90]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#B56B5A]/30
                  focus:border-[#B56B5A]
                  transition-all
                "
              />
            </div>

            {/* WHATSAPP BUTTON */}

            <button
              type="submit"
              disabled={!name.trim()}
              className="
                group
                w-full
                min-h-[52px]
                px-6
                py-3.5
                rounded-full
                bg-[#1D1B18]
                hover:bg-[#342F2A]
                disabled:bg-[#B9B1AA]
                disabled:cursor-not-allowed
                text-white
                text-sm
                font-semibold
                tracking-wide
                flex
                items-center
                justify-center
                gap-2.5
                transition-all
                duration-300
                shadow-md
                hover:shadow-lg
              "
            >
              <MessageCircle
                className="
                  w-5
                  h-5
                  text-[#9FE3B1]
                  group-hover:scale-110
                  transition-transform
                "
              />

              <span>
                Connect over WhatsApp
              </span>

              <ArrowUpRight
                className="
                  w-4
                  h-4
                  opacity-70
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  transition-transform
                "
              />
            </button>
          </form>

          {/* ========================================================
              DIRECT CHANNELS
          ========================================================= */}

          <div
            className="
              mt-6
              pt-5
              border-t
              border-[#E8DEC8]
            "
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.15em]
                font-semibold
                text-[#8A7D72]
                mb-3
              "
            >
              Or connect directly
            </p>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              {/* Instagram */}

              <a
                href={
                  CREATOR_PROFILE.instagramUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  min-h-[44px]
                  px-3
                  rounded-xl
                  border
                  border-[#E0D5C9]
                  bg-white
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-xs
                  font-semibold
                  text-[#3B342D]
                  hover:bg-[#F7F0E9]
                  hover:border-[#CDBCAF]
                  transition-all
                "
              >
                <Instagram
                  className="
                    w-4
                    h-4
                    text-[#B56B5A]
                  "
                />

                <span>
                  Instagram
                </span>
              </a>
            </div>
          </div>

          {/* ========================================================
              PRIVACY / SMALL NOTE
          ========================================================= */}

          <p
            className="
              mt-5
              text-[10px]
              leading-4
              text-center
              text-[#9A8F85]
            "
          >
            You’ll be redirected to WhatsApp to
            continue the conversation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;