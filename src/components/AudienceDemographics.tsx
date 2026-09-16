import React from 'react';
import { AUDIENCE_DEMOGRAPHICS } from '../data/creatorData';
import { Users, MapPin, BarChart3, Download, CheckCircle2 } from 'lucide-react';

interface AudienceDemographicsProps {
  onOpenContact: () => void;
}

export const AudienceDemographics: React.FC<AudienceDemographicsProps> = ({ onOpenContact }) => {
  const handleDownloadMediaKit = () => {
    alert('Ankita Bhadra Media Kit 2026 downloaded! (PDF format includes full rate card, engagement breakdowns, and case studies)');
  };

  return (
    <section id="demographics-section" className="py-20 sm:py-28 bg-[#F5EFE6]/50 border-b border-[#E8DFC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B56B5A] block mb-2">
              ANALYTICS & INSIGHTS
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#1A1816] tracking-tight">
              Audience Demographics
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#595048] max-w-xl">
              An engaged, high-intent millennial and Gen-Z demographic spanning major Indian metropolitan hubs.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <button
              onClick={handleDownloadMediaKit}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-[#D9CEC1] bg-[#FBF8F5] text-[#2E2823] text-xs sm:text-sm font-semibold hover:bg-white transition-all shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#B56B5A]" />
              <span>Download Full Media Kit (PDF)</span>
            </button>
          </div>
        </div>

        {/* Demographics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Age Distribution */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FBF8F5] border border-[#E8DFC2] shadow-xs">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F3E7DC] text-[#B56B5A] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1A1816]">Age Demographics</h3>
                <p className="text-xs text-[#7A6E63]">86% between 18–34 years</p>
              </div>
            </div>

            <div className="space-y-4">
              {AUDIENCE_DEMOGRAPHICS.ageGroups.map(group => (
                <div key={group.label}>
                  <div className="flex justify-between text-xs font-medium text-[#38312B] mb-1.5">
                    <span>{group.label}</span>
                    <span className="font-bold">{group.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#EFE8DF] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#B56B5A] rounded-full transition-all duration-500"
                      style={{ width: `${group.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gender Split */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FBF8F5] border border-[#E8DFC2] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F3E7DC] text-[#B56B5A] flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1A1816]">Gender Balance</h3>
                  <p className="text-xs text-[#7A6E63]">Balanced consumer reach</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-5 rounded-2xl bg-[#F6EFE5] border border-[#EAE0D3] text-center">
                  <span className="font-serif text-3xl font-normal text-[#1A1816]">51%</span>
                  <p className="text-xs font-semibold text-[#66594D] mt-1">Female Audience</p>
                  <p className="text-[11px] text-[#8C7D70] mt-0.5">Lifestyle, Skincare, EdTech</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F6EFE5] border border-[#EAE0D3] text-center">
                  <span className="font-serif text-3xl font-normal text-[#1A1816]">49%</span>
                  <p className="text-xs font-semibold text-[#66594D] mt-1">Male Audience</p>
                  <p className="text-[11px] text-[#8C7D70] mt-0.5">Tech, Events, Finance</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE0D3] text-xs text-[#6E6256] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B56B5A]" />
              <span>Ideal for mass-market & dual-gender campaigns</span>
            </div>
          </div>

          {/* Top Geographic Locations */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FBF8F5] border border-[#E8DFC2] shadow-xs">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F3E7DC] text-[#B56B5A] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1A1816]">Top Geographies</h3>
                <p className="text-xs text-[#7A6E63]">Tier 1 & Urban Centers</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {AUDIENCE_DEMOGRAPHICS.topCities.map(city => (
                <div key={city.city} className="flex items-center justify-between py-1.5 border-b border-[#F0E8DF] last:border-0 text-xs">
                  <span className="font-medium text-[#302A25]">{city.city}</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#EFE8DF] font-bold text-[#453D36]">
                    {city.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
