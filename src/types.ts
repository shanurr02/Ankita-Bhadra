export interface Reel {
  id: string;
  title: string;
  caption: string;
  creatorHandle: string;
  collaboratorHandle?: string;
  audioTrack: string;
  category: 'Brand Collabs' | 'Anchoring & Events' | 'Vlogs & Lifestyle' | 'EdTech & Reviews';
  thumbnailUrl: string;
  views: string;
  likes: string;
  commentsCount: string;
  date: string;
  brandTag?: string;
  isFeatured?: boolean;
  instagramUrl?: string;
  shortcode?: string;
  videoUrl?: string;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface Brand {
  name: string;
  category: string;
  logoText: string;
}

export interface AudienceStat {
  label: string;
  percentage: number;
}
