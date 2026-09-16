import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is your typical turnaround time for a sponsored reel?",
    answer: "From script approval to first video draft, turnaround is usually 4 to 6 business days. For urgent campaign launches or event coverage, expedited delivery within 48 to 72 hours is also possible with advance notice."
  },
  {
    question: "Are you available for live stage emceeing outside Mumbai & Kolkata?",
    answer: "Yes, absolutely. While I am primarily based between Mumbai and Kolkata, I frequently travel pan-India for corporate summits, award nights, brand launches, and campus festivals. Travel and accommodation logistics are typically arranged by the organizing team."
  },
  {
    question: "What deliverables are included in a standard brand collaboration?",
    answer: "A standard engagement includes concept ideation, scriptwriting, professional 4K filming, on-camera delivery, licensed/trending audio pairing, 1 round of editorial revisions, and publishing with the Instagram Collab Tag for shared engagement reach."
  },
  {
    question: "Do you provide creative concepts and script drafts before filming?",
    answer: "Yes! Every video starts with a collaborative brief. I provide 2 to 3 creative hooks and an outline script so your marketing team can ensure brand messaging, key claims, and compliance guidelines are satisfied before camera rolls."
  },
  {
    question: "How do usage rights and paid advertising permissions work?",
    answer: "Organic cross-posting rights via Instagram Collab are included with every reel. Paid digital ad amplification rights (Meta Spark Ads or whitelisting) are available for 30, 60, or 90-day license windows upon request."
  },
  {
    question: "How do we get started and confirm a collaboration?",
    answer: "Simply send an inquiry through the 'Get in touch' button or email collaborate.ankitabhadra@gmail.com with your campaign brief, desired timeline, and deliverable format. My team responds within 12 hours with availability and tailored package options."
  }
];

interface FAQSectionProps {
  onOpenContact: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq-section" className="px-4 sm:px-8 lg:px-20 py-14 sm:py-24 border-t border-[#E8DFC2]/80">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#B56B5A] block mb-2">
            COLLABORATION & LOGISTICS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1816] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#5C534B]">
            Clear answers to common questions about timelines, stage hosting, deliverables, and booking terms.
          </p>
        </div>

        {/* Minimalist Accordion List */}
        <div className="divide-y divide-[#E6DDD0]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-4 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full min-h-[44px] flex items-center justify-between text-left group cursor-pointer focus:outline-hidden touch-manipulation py-1"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-[#1A1816] group-hover:text-[#B56B5A] transition-colors pr-4 leading-snug">
                    {item.question}
                  </span>
                  
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D9CEBF] flex items-center justify-center shrink-0 text-[#6B5F55] group-hover:border-[#B56B5A] group-hover:text-[#B56B5A] transition-colors">
                    {isOpen ? (
                      <Minus className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    ) : (
                      <Plus className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-2.5 sm:mt-4 pr-4 sm:pr-8 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-[#554D45] leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E8DFC2]/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#6B5F55] gap-3">
          <span>Have a custom campaign format or multi-day summit requirement?</span>
          <button
            onClick={onOpenContact}
            className="text-xs font-semibold text-[#B56B5A] hover:underline self-start sm:self-auto cursor-pointer min-h-[44px] flex items-center touch-manipulation"
          >
            Ask a custom question →
          </button>
        </div>

      </div>
    </section>
  );
};
