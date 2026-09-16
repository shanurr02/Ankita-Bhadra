import React from 'react';
import { CREATOR_PROFILE } from '../data/creatorData';
import { Mic, Video, Award, Heart, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about-section" className="py-20 sm:py-28 bg-[#FBF8F5] border-b border-[#E8DFC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#EFE8DF] aspect-[4/5] bg-[#1E1B18]">
              <img
                src={CREATOR_PROFILE.portraitImage}
                alt="Ankita Bhadra on Stage and Camera"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C2B4]">
                  Anchor · Host · Digital Creator
                </span>
                <p className="font-serif text-xl font-normal mt-1">
                  "Authentic connection beats rehearsed pitches every single time."
                </p>
              </div>
            </div>

            {/* Quick Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#1A1816] text-[#FBF8F5] p-4 rounded-2xl shadow-xl flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#B56B5A] flex items-center justify-center text-white">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold">4+ Years</p>
                <p className="text-[11px] text-[#A69C91]">Live Anchoring & Reels</p>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 lg:pl-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B56B5A] block mb-2">
              MEET THE CREATOR
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#1A1816] tracking-tight leading-[1.15]">
              Natural storytelling that bridges brands and real people.
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#524941] leading-relaxed">
              <p>
                I started my journey holding a microphone on stage, anchoring national cultural events, tech conferences, and university summits. That live experience taught me how to read people in real-time, hold audience attention, and speak with warmth and unshakeable confidence.
              </p>
              <p>
                When short-form video revolutionized digital storytelling, I brought that same energy to Instagram Reels. Rather than stiff, scripted ads that people instantly swipe away, I focus on natural conversations, relatable hooks, and high-retention pacing that makes branded content feel like a friend’s genuine recommendation.
              </p>
            </div>

            {/* What sets Ankita apart */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#F6F0E7] border border-[#E8DEC8]">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-[#B56B5A]" />
                  <span>Script-to-Screen Production</span>
                </div>
                <p className="text-xs text-[#6B5F54] mt-1.5 leading-relaxed">
                  Concept ideation, copywriting, multi-angle 4K filming, and audio sync handled end-to-end.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F0E7] border border-[#E8DEC8]">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-[#B56B5A]" />
                  <span>Poised Stage Command</span>
                </div>
                <p className="text-xs text-[#6B5F54] mt-1.5 leading-relaxed">
                  Zero stage fright, dynamic crowd improvisation, and flawless VIP speaker moderation.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-full bg-[#1D1B18] hover:bg-[#342F2A] text-[#FBF8F5] text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer"
              >
                Let’s Talk Collaborations
              </button>

              <a
                href={CREATOR_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-[#B56B5A] hover:text-[#1A1816] transition-colors"
              >
                <span>Follow along on Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
