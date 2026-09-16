import React, { useState, useEffect, useRef } from 'react';
import { Reel } from '../types';
import { CREATOR_PROFILE, REELS } from '../data/creatorData';
import { X, Heart, MessageCircle, Share2, Bookmark, Volume2, VolumeX, Play, ChevronLeft, ChevronRight, Send, Music2, ExternalLink, Sparkles } from 'lucide-react';

interface ReelModalProps {
  reel: Reel;
  onClose: () => void;
  onSelectReel: (reel: Reel) => void;
  onOpenContact: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({
  reel,
  onClose,
  onSelectReel,
  onOpenContact
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [progress, setProgress] = useState(25);
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const [mobileTab, setMobileTab] = useState<'video' | 'details'>('video');
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState<Array<{ user: string; text: string; time: string }>>([
    { user: 'brand_strat_lead', text: 'Loved the smooth pacing in this! Really natural delivery.', time: '2h' },
    { user: 'riya_sharma99', text: 'Your energy while anchoring is unmatched Ankita!! 🔥', time: '5h' },
    { user: 'studynextofficial', text: 'Outstanding collaboration! The numbers speak for themselves 👏', time: '1d' },
    { user: 'creator_circuit', text: 'How you explain technical stuff so simply is magical!', time: '2d' },
  ]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [reel]);

  // Sync video play/pause
  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  // Reset video time when reel changes
  useEffect(() => {
    setProgress(0);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [reel.id]);

  // Fallback progress simulation for image-only reels
  useEffect(() => {
    if (reel.videoUrl || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1.2));
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying, reel.videoUrl]);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  const currentIndex = REELS.findIndex(r => r.id === reel.id);
  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + REELS.length) % REELS.length;
    onSelectReel(REELS[prevIdx]);
    setProgress(0);
  };
  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % REELS.length;
    onSelectReel(REELS[nextIdx]);
    setProgress(0);
  };

  const handleDoubleTap = () => {
    setIsLiked(true);
    setShowHeartBurst(true);
    setTimeout(() => setShowHeartBurst(false), 800);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments(prev => [
      { user: 'you', text: commentInput.trim(), time: 'Just now' },
      ...prev,
    ]);
    setCommentInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Close button with large touch target */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors z-50 cursor-pointer flex items-center justify-center touch-manipulation"
        aria-label="Close reel player"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Desktop Prev Navigation Arrow */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-40 cursor-pointer"
        aria-label="Previous reel"
      >
        <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
      </button>

      {/* Desktop Next Navigation Arrow */}
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-40 cursor-pointer"
        aria-label="Next reel"
      >
        <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
      </button>

      {/* Main Reel Viewer Card */}
      <div className="relative w-full max-w-4xl max-h-[96dvh] sm:max-h-[92vh] bg-[#171513] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/10">
        
        {/* Mobile View Toggle Switch (visible only on small mobile) */}
        <div className="flex lg:hidden bg-[#1E1B18] border-b border-white/10 p-1">
          <button
            onClick={() => setMobileTab('video')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors min-h-[36px] ${
              mobileTab === 'video' ? 'bg-white/15 text-white' : 'text-white/60'
            }`}
          >
            Video Reel
          </button>
          <button
            onClick={() => setMobileTab('details')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors min-h-[36px] ${
              mobileTab === 'details' ? 'bg-white/15 text-white' : 'text-white/60'
            }`}
          >
            Campaign Details & Comments
          </button>
        </div>

        {/* Video Player Container */}
        <div
          className={`relative flex-1 lg:max-w-[420px] aspect-[9/16] bg-black mx-auto overflow-hidden select-none cursor-pointer ${
            mobileTab === 'details' ? 'hidden lg:block' : 'block'
          }`}
          onDoubleClick={handleDoubleTap}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {/* Progress Bar */}
          <div className="absolute top-2 inset-x-2 h-1 bg-white/25 rounded-full overflow-hidden z-30">
            <div
              className="h-full bg-white transition-all duration-150 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Reel media: Video or Image */}
          {reel.videoUrl ? (
            <video
              ref={videoRef}
              src={reel.videoUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster={reel.thumbnailUrl}
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <img
              src={reel.thumbnailUrl}
              alt={reel.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          )}

          {/* Floating Double-tap Heart Burst */}
          {showHeartBurst && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40 animate-ping">
              <Heart className="w-20 sm:w-24 h-20 sm:h-24 text-rose-500 fill-rose-500 drop-shadow-xl" />
            </div>
          )}

          {/* Pause overlay icon */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/35 z-20">
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-current ml-1" />
              </div>
            </div>
          )}

          {/* Top Video Header */}
          <div className="absolute top-4 inset-x-3 flex items-center justify-between z-20">
            <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-white text-[11px] sm:text-xs border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#B56B5A]" />
              <span className="font-medium">{reel.category}</span>
            </div>

            <button
              onClick={e => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 border border-white/10 flex items-center justify-center touch-manipulation"
              aria-label="Toggle mute"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#F5C2B4]" />}
            </button>
          </div>

          {/* Right Action Stack */}
          <div className="absolute right-2 sm:right-3 bottom-6 sm:bottom-8 flex flex-col items-center space-y-3 sm:space-y-4 z-20">
            <button
              onClick={e => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className="flex flex-col items-center text-white cursor-pointer touch-manipulation min-w-[40px]"
            >
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                isLiked ? 'bg-rose-500 text-white scale-110' : 'bg-black/50 text-white hover:bg-black/70'
              }`}>
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? 'fill-current' : ''}`} />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold mt-0.5 drop-shadow-sm">{reel.likes}</span>
            </button>

            <button
              onClick={e => {
                e.stopPropagation();
                setMobileTab('details');
              }}
              className="flex flex-col items-center text-white cursor-pointer touch-manipulation min-w-[40px]"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold mt-0.5 drop-shadow-sm">{reel.commentsCount}</span>
            </button>

            <button
              onClick={e => {
                e.stopPropagation();
                if (navigator.share) {
                  navigator.share({ title: reel.title, url: window.location.href }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Reel link copied!');
                }
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer touch-manipulation"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={e => {
                e.stopPropagation();
                setIsSaved(!isSaved);
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer touch-manipulation"
              aria-label="Bookmark"
            >
              <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 ${isSaved ? 'fill-white' : ''}`} />
            </button>
          </div>

          {/* Bottom Video Details */}
          <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 pr-14 sm:pr-16 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white z-10 pointer-events-none">
            <div className="flex items-center space-x-1.5 mb-1">
              <span className="font-semibold text-xs sm:text-sm">@{CREATOR_PROFILE.instagramHandle}</span>
              {reel.collaboratorHandle && (
                <span className="text-[11px] text-white/75 truncate">
                  with {reel.collaboratorHandle.split(' ')[0]}
                </span>
              )}
            </div>
            <p className="text-[11px] sm:text-xs text-white/90 line-clamp-2 leading-snug">
              {reel.title}
            </p>
            <div className="flex items-center space-x-1 text-[10px] sm:text-[11px] text-white/70 mt-1.5">
              <Music2 className="w-2.5 h-2.5 text-[#B56B5A]" />
              <span className="truncate">{reel.audioTrack}</span>
            </div>
          </div>

          {/* Mobile bottom prev/next buttons */}
          <div className="lg:hidden absolute bottom-2 left-2 flex items-center space-x-1 z-30 pointer-events-auto">
            <button
              onClick={e => {
                e.stopPropagation();
                handlePrev();
              }}
              className="p-1.5 rounded-full bg-black/50 text-white text-xs flex items-center"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={e => {
                e.stopPropagation();
                handleNext();
              }}
              className="p-1.5 rounded-full bg-black/50 text-white text-xs flex items-center"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Side / Mobile Details Tab: Info, Caption & Engagement Sheet */}
        <div className={`w-full lg:w-[380px] bg-[#1E1B18] p-4 sm:p-6 flex flex-col justify-between text-[#F5EFE6] border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto max-h-[75vh] lg:max-h-[85vh] ${
          mobileTab === 'video' ? 'hidden lg:flex' : 'flex'
        }`}>
          
          {/* Creator Profile Header */}
          <div>
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <img
                  src={CREATOR_PROFILE.portraitImage}
                  alt={CREATOR_PROFILE.name}
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-[#B56B5A]"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {CREATOR_PROFILE.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#A89C8F]">@{CREATOR_PROFILE.instagramHandle}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {reel.instagramUrl && (
                  <a
                    href={reel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={CREATOR_PROFILE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-[#B56B5A]/20 hover:bg-[#B56B5A]/30 text-[#F5B5A4] font-medium transition-colors"
                >
                  <span>Follow</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Reel Caption */}
            <div className="mt-3 sm:mt-4">
              <h3 className="font-serif text-base sm:text-lg font-normal text-white">
                {reel.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#D1C6B9] leading-relaxed whitespace-pre-line font-light">
                {reel.caption}
              </p>

              {reel.brandTag && (
                <div className="mt-2.5 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] sm:text-xs text-[#E5B5A7]">
                  <Sparkles className="w-3 h-3" />
                  <span>Verified Campaign: {reel.brandTag}</span>
                </div>
              )}
            </div>

            {/* Performance Snapshot */}
            <div className="mt-4 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <span className="block font-semibold text-white text-xs sm:text-sm">{reel.views}</span>
                <span className="text-[10px] text-[#A6998C]">Views</span>
              </div>
              <div>
                <span className="block font-semibold text-white text-xs sm:text-sm">{reel.likes}</span>
                <span className="text-[10px] text-[#A6998C]">Likes</span>
              </div>
              <div>
                <span className="block font-semibold text-white text-xs sm:text-sm">{reel.commentsCount}</span>
                <span className="text-[10px] text-[#A6998C]">Comments</span>
              </div>
            </div>

            {/* Comments Feed */}
            <div className="mt-4">
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#A89C8F] uppercase">
                Audience Feedback
              </span>
              <div className="mt-2 space-y-2 max-h-32 overflow-y-auto pr-1">
                {comments.map((c, i) => (
                  <div key={i} className="text-xs">
                    <span className="font-semibold text-white mr-1.5">@{c.user}</span>
                    <span className="text-[#C2B7A9]">{c.text}</span>
                    <span className="block text-[10px] text-[#7A6E63] mt-0.5">{c.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <form onSubmit={handleAddComment} className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Leave a comment..."
                value={commentInput}
                onChange={e => setCommentInput(e.target.value)}
                className="flex-1 bg-white/5 border border-white/15 rounded-full px-3 py-2 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-hidden focus:border-[#B56B5A]"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-[#B56B5A] text-white hover:bg-[#A85848] transition-colors cursor-pointer flex items-center justify-center shrink-0"
                aria-label="Post comment"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="mt-3 w-full py-2.5 rounded-xl bg-white text-[#171513] hover:bg-[#EBE3DA] text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2 min-h-[42px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B56B5A]" />
              <span>Book Ankita for Collaboration</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
