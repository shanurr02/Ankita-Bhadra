import React from 'react';
import { METRICS } from '../data/creatorData';
import { TrendingUp, Users, Eye, Award } from 'lucide-react';

const icons = [Eye, Users, TrendingUp, Award];

export const StatsBar: React.FC = () => {
  return (
    <section id="metrics-strip" className="border-y border-[#E8DFC2] bg-[#F6F0E7]/60 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {METRICS.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={metric.label}
                className="flex flex-col items-start sm:items-center text-left sm:text-center p-3 rounded-xl transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-[#EFE4D7] flex items-center justify-center text-[#B56B5A] mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1816] tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#302B27] mt-1">
                  {metric.label}
                </span>
                <span className="text-[11px] sm:text-xs text-[#7D7267] mt-0.5">
                  {metric.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
