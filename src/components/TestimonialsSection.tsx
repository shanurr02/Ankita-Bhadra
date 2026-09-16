import React from 'react';
import { TESTIMONIALS } from '../data/creatorData';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-20 sm:py-28 bg-[#F6F0E7]/60 border-b border-[#E8DFC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B56B5A] block mb-2">
            CLIENT & AGENCY REVIEWS
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#1A1816] tracking-tight">
            What Brand Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#FBF8F5] border border-[#E8DFC2] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#D9CFC1] mb-2" />
                <p className="text-xs sm:text-sm text-[#473E36] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#EFE7DC]">
                <h4 className="text-sm font-bold text-[#1A1816]">{item.author}</h4>
                <p className="text-xs text-[#7A6D60]">{item.role} · {item.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
