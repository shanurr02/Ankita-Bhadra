import React, { useState } from 'react';
import { CREATOR_PROFILE } from '../data/creatorData';
import { X, Mail, Instagram, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: '1x Sponsored Reel',
    budgetRange: '₹30,000 - ₹60,000',
    timeline: 'Within 2 weeks',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FBF8F5] rounded-2xl sm:rounded-3xl border border-[#E8DFC2] shadow-2xl overflow-hidden max-h-[92dvh] flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-6 sm:p-8 bg-[#F6EFE5] border-b border-[#E8DFC2] flex items-start justify-between">
          <div className="pr-4">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#B56B5A] block">
              COLLABORATION INQUIRY
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-[#1A1816] mt-1">
              Work with Ankita Bhadra
            </h3>
            <p className="text-xs sm:text-sm text-[#665B51] mt-1">
              Share your campaign brief or stage event dates. Typical response time is within 12 hours.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-black/5 text-[#524941] transition-colors cursor-pointer flex items-center justify-center shrink-0 touch-manipulation"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 sm:py-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-serif text-[#1A1816]">Inquiry Sent Successfully!</h4>
              <p className="text-xs sm:text-sm text-[#5C5248] max-w-md mt-2 leading-relaxed">
                Thank you, <span className="font-semibold">{formData.contactName || formData.brandName}</span>! Ankita’s team has received your brief for <span className="font-semibold">{formData.serviceType}</span> and will reply at <span className="font-semibold">{formData.email}</span> shortly.
              </p>
              
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={`mailto:${CREATOR_PROFILE.email}?subject=Collaboration%20from%20${formData.brandName}`}
                  className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-full bg-[#1D1B18] text-[#FBF8F5] text-xs font-semibold flex items-center justify-center"
                >
                  Send Direct Email Instead
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-full border border-[#D9CEBF] text-xs font-semibold text-[#3D3630] flex items-center justify-center"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#3D352F] mb-1">
                    Brand / Agency Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. StudyNext or Nykaa"
                    value={formData.brandName}
                    onChange={e => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-[#D9CEC0] bg-white text-base sm:text-sm text-[#1A1816] focus:outline-hidden focus:ring-2 focus:ring-[#B56B5A]/40"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#3D352F] mb-1">
                    Your Name & Designation
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Brand Marketing Lead"
                    value={formData.contactName}
                    onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-[#D9CEC0] bg-white text-base sm:text-sm text-[#1A1816] focus:outline-hidden focus:ring-2 focus:ring-[#B56B5A]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#3D352F] mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marketing@brand.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-[#D9CEC0] bg-white text-base sm:text-sm text-[#1A1816] focus:outline-hidden focus:ring-2 focus:ring-[#B56B5A]/40"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#3D352F] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-[#D9CEC0] bg-white text-base sm:text-sm text-[#1A1816] focus:outline-hidden focus:ring-2 focus:ring-[#B56B5A]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#3D352F] mb-1">
                    Deliverable Required
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-[#D9CEC0] bg-white text-base sm:text-sm text-[#1A1816] focus:outline-hidden focus:ring-2 focus:ring-[#B56B5A]/40"
                  >
                    <option value="1x Sponsored Reel">1x Dedicated Instagram Reel (9:16)</option>
                    <option value="Reel + Stories Package">Reel + 3x Stories + Collab Tag</option>
                    <option value="Live Event Anchoring">Live Stage Anchoring / Emceeing</option>
                    <option value="UGC Product Walkthrough">UGC Product Demo / Ad Creative</option>
                    <option value="Long-term Ambassadorship">3-Month Brand Ambassadorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#3D352F] mb-1">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-[#D9CEC0] bg-white text-base sm:text-sm text-[#1A1816] focus:outline-hidden focus:ring-2 focus:ring-[#B56B5A]/40"
                  >
                    <option value="Immediate (Within 7 Days)">Immediate (Within 7 Days)</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="Next month">Next month</option>
                    <option value="Exploring for upcoming quarter">Exploring for upcoming quarter</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#3D352F] mb-1">
                  Campaign Objective & Brief
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the product, campaign goals, and deliverables..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-[#D9CEC0] bg-white text-base sm:text-sm text-[#1A1816] focus:outline-hidden focus:ring-2 focus:ring-[#B56B5A]/40"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-[#1D1B18] hover:bg-[#342F2A] text-[#FBF8F5] text-sm font-semibold tracking-wide flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer touch-manipulation"
                >
                  <Send className="w-4 h-4 text-[#E5B5A7]" />
                  <span>Submit Partnership Request</span>
                </button>
              </div>
            </form>
          )}

          {/* Direct channels */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#E8DEC8] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#6E6357] gap-2.5">
            <span>Or reach out directly:</span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${CREATOR_PROFILE.email}`}
                className="flex items-center space-x-1.5 text-[#B56B5A] font-semibold hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">{CREATOR_PROFILE.email}</span>
              </a>
              <a
                href={CREATOR_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-[#3B342D] font-semibold hover:text-[#B56B5A]"
              >
                <Instagram className="w-3.5 h-3.5 text-[#B56B5A]" />
                <span>@{CREATOR_PROFILE.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
