import { Reel, Metric, Service, Brand } from '../types';

/* ================================================================
   CREATOR PROFILE
   ================================================================ */

export const CREATOR_PROFILE = {
  name: 'Ankita Bhadra',
  tagline: 'CONTENT CREATOR · ANCHOR',

  bio: 'I’m Ankita Bhadra — a content creator creating natural, engaging short-form videos that help brands connect with real people.',

  instagramHandle: '__bhadra___',

  instagramUrl: 'https://instagram.com/__bhadra___',

  email: 'collaborate.ankitabhadra@gmail.com',

  location: 'Mumbai & Kolkata, India',

  portraitImage: '/assets/images/profile.JPEG',

  experienceYears: '4+ Years',
  totalViews: '3.8M+',
  engagementRate: '8.2%',
  followersCount: '92.4K',
};

/* ================================================================
   METRICS
   ================================================================ */

export const METRICS: Metric[] = [
  {
    label: 'Total Video Views',
    value: '3.8M+',
    subtext: 'Across Instagram Reels & Shorts',
  },

  {
    label: 'Active Community',
    value: '92.4K+',
    subtext: 'High-intent urban demographic',
  },

  {
    label: 'Engagement Rate',
    value: '8.2%',
    subtext: '2.5x above industry creator benchmark',
  },

  {
    label: 'Brand Collaborations',
    value: '48+',
    subtext: 'Tech, FMCG, EdTech & Lifestyle',
  },
];

/* ================================================================
   REELS
   ================================================================ */

export const REELS: Reel[] = [
  /* ================================================================
     REEL 1
     ================================================================ */

  {
    id: 'reel-dv3',

    title: 'NEET & JEE Crash Course Induction 2026 📚✨',

    caption:
      'Had the privilege of hosting the Induction Session for NEET & JEE Crash Course 2026 at Imperial Coaching Centre. 📚✨ A room full of ambitious minds, big dreams, and the determination to achieve top ranks. This is more than just a coaching program — it’s the starting point of a journey built on discipline, dedication, and success. 💯 Excited to see these future doctors and engineers rise and shine! 🌟 #NEET2026 #JEE2026 #FutureDoctors #FutureEngineers #imperialcoachingcentre',

    creatorHandle: '__bhadra___',

    collaboratorHandle:
      'imperialcoachingcentre and __bhadra___',

    audioTrack: 'Original audio - __bhadra___',

    category: 'Anchoring & Events',

    thumbnailUrl: '/src/assets/images/reel-dv3.jpg',

    views: '185K',
    likes: '21.6K',
    commentsCount: '482',
    date: 'Recently',

    brandTag: 'Imperial Coaching Centre',

    isFeatured: true,
  },

  /* ================================================================
     REEL 2
     ================================================================ */

  {
    id: 'reel-dbq',

    title: 'NEET 2026 Felicitation Ceremony 🌟',

    caption:
      'Loved hosting the NEET 2026 Felicitation Ceremony for our achievers at Imperial Coaching Centre. Congratulations to all the stars! 🌟 Celebrating hard work, national rank holders, and memorable student moments on stage.',

    creatorHandle: '__bhadra___',

    collaboratorHandle:
      'imperialcoachingcentre and __bhadra___',

    audioTrack: 'Original audio - __bhadra___',

    category: 'Anchoring & Events',

    thumbnailUrl: '/src/assets/images/reel-dbq.jpg',

    views: '142K',
    likes: '16.8K',
    commentsCount: '389',
    date: 'Recently',

    brandTag: 'Imperial Coaching Centre',

    isFeatured: true,
  },

  /* ================================================================
     REEL 3
     ================================================================ */

  {
    id: 'reel-dz5',

    title: 'Felicitation Day Celebration & Gala 🎤✨',

    caption:
      'Another memorable day, another beautiful stage. 🎤✨ Honoured to host the Felicitation Day celebration at Imperial Coaching Centre and be a part of such a special event filled with achievements, inspiration, and unforgettable moments. ❤️',

    creatorHandle: '__bhadra___',

    collaboratorHandle:
      'imperialcoachingcentre and __bhadra___',

    audioTrack: 'Original audio - __bhadra___',

    category: 'Anchoring & Events',

    thumbnailUrl: '/src/assets/images/reel-dz5.jpg',

    views: '198K',
    likes: '24.1K',
    commentsCount: '512',
    date: 'Recently',

    brandTag: 'Imperial Coaching Centre',

    isFeatured: true,
  },

  /* ================================================================
     REEL 4
     ================================================================ */

  {
    id: 'reel-railway',

    title: 'An anchoring day with Indian Railways 🇮🇳',

    caption:
      'Behind the scenes and live on the podium! 🎙️ Honored to host the official national cultural initiative with Indian Railways. Such immense pride anchoring for our nation’s heritage & future. #AnchorLife #IndianRailways #LiveEvents',

    creatorHandle: '__bhadra___',

    audioTrack: 'Original audio - __bhadra___',

    category: 'Anchoring & Events',

    thumbnailUrl:
      '/src/assets/images/reel_railway_1789556564385.jpg',

    views: '168K',
    likes: '19.4K',
    commentsCount: '524',
    date: '3 weeks ago',

    brandTag: 'Indian Railways',

    isFeatured: true,
  },

  /* ================================================================
     REEL 5
     ================================================================ */

  {
    id: 'reel-studynext',

    title: 'StudyNext Campus Takeover & Launch 🚀',

    caption:
      'Learning that actually feels fun! ✨ Partnered with @studynextofficial to test their interactive skill platform with university students. The unfiltered reactions were gold! Check the link in bio for free access. #StudyNext #Ad #EdTech',

    creatorHandle: '__bhadra___',

    collaboratorHandle:
      'studynextofficial and __bhadra___',

    audioTrack: 'Original audio - studynextofficial',

    category: 'Brand Collabs',

    thumbnailUrl:
      '/src/assets/images/reel_edtech_1789556583965.jpg',

    views: '294K',
    likes: '34.2K',
    commentsCount: '680',
    date: '1 month ago',

    brandTag: 'StudyNext',

    isFeatured: true,
  },

  /* ================================================================
     REEL 6
     ================================================================ */

  {
    id: 'reel-techforward',

    title: 'Global Tech Leaders Summit & Awards 2026 🎙️',

    caption:
      'From keynote introductions to high-energy award presentations! ⚡ Thrilled to anchor the mainstage at TechForward 2026. Bringing charisma, smooth transitions, and stage command. #StageAnchor #Emcee #TechSummit',

    creatorHandle: '__bhadra___',

    audioTrack: 'Original audio - __bhadra___',

    category: 'Anchoring & Events',

    thumbnailUrl:
      '/src/assets/images/reel_emcee_1789556601198.jpg',

    views: '112K',
    likes: '14.1K',
    commentsCount: '340',
    date: '1 month ago',

    brandTag: 'TechForward',

    isFeatured: true,
  },

  /* ================================================================
     REEL 7
     ================================================================ */

  {
    id: 'reel-campusfest',

    title: 'National University Fest & Star Night 🌟',

    caption:
      'The electric vibe of hosting 3,000+ passionate students! 🎤 Pure adrenaline on stage with back-to-back artist intros, spontaneous crowd banters, and unmatchable festival spirit. #EmceeDiaries #CampusFest #CollegeHost',

    creatorHandle: '__bhadra___',

    audioTrack: 'Original audio - __bhadra___',

    category: 'Anchoring & Events',

    thumbnailUrl:
      '/src/assets/images/reel_campus_fest_1789560331889.jpg',

    views: '226K',
    likes: '28.9K',
    commentsCount: '495',
    date: '2 months ago',

    brandTag: 'Campus StarFest',

    isFeatured: false,
  },

  /* ================================================================
     REEL 8
     ================================================================ */

  {
    id: 'reel-nykaa',

    title: 'Festive Glow Skincare Routine & Unboxing 💄✨',

    caption:
      'My go-to pre-event skincare secrets for the camera! 🧴✨ Teaming up with @nykaabeauty to test hydrating serum formulations before long anchoring shoot days. Glowing, non-cakey, and camera-ready all day long.',

    creatorHandle: '__bhadra___',

    collaboratorHandle:
      'nykaabeauty and __bhadra___',

    audioTrack: 'Trending Audio - Acoustic Pop',

    category: 'Brand Collabs',

    thumbnailUrl:
      '/src/assets/images/reel_beauty_collab_1789560354770.jpg',

    views: '315K',
    likes: '41.2K',
    commentsCount: '870',
    date: '2 months ago',

    brandTag: 'Nykaa',

    isFeatured: false,
  },

  /* ================================================================
     REEL 9
     INSTAGRAM URL
     ================================================================ */

  {
    id: 'reel-boat',

    title: 'boAt Nirvana ANC Headphones Demo & Review 🎧',

    caption:
      'ANC test in the noisy middle of Mumbai local commute! 🚇 Testing if the active noise cancellation holds up for creators on the move. Super punchy bass and crystal clear calling. #boAt #NirvanaANC #SoundThatMatters',

    creatorHandle: '__bhadra___',

    audioTrack: 'Original audio - __bhadra___',

    category: 'EdTech & Reviews',

    thumbnailUrl:
      '/src/assets/images/reel_audio_tech_1789560377226.jpg',

    views: '178K',
    likes: '22.4K',
    commentsCount: '360',
    date: '3 months ago',

    brandTag: 'boAt',

    isFeatured: false,

    /* YOUR REEL #9 URL */
    instagramUrl:
      'https://www.instagram.com/reel/DV3R9JxkR5E/?stkn=bW40cWpkcGdjOGl4',

    shortcode: 'DV3R9JxkR5E',
  },

  /* ================================================================
     REEL 10
     INSTAGRAM URL
     ================================================================ */

  {
    id: 'reel-zomato',

    title: 'Zomato Great Indian Food Carnival Vlog 🍜🍢',

    caption:
      'Eating our way through 40+ iconic regional food stalls in one evening! 🥟 Hosted the live food challenge stage with Chef specials and crazy street dessert discoveries. Tag a foodie friend who needs to go next! #ZomatoCarnival #FoodHost',

    creatorHandle: '__bhadra___',

    audioTrack: 'Original audio - __bhadra___',

    category: 'Vlogs & Lifestyle',

    thumbnailUrl:
      '/src/assets/images/reel_food_vlog_1789560391759.jpg',

    views: '245K',
    likes: '31.8K',
    commentsCount: '580',
    date: '3 months ago',

    brandTag: 'Zomato',

    isFeatured: false,

    /* YOUR REEL #10 URL */
    instagramUrl:
      'https://www.instagram.com/reel/DbqszA3zpLX/?stkn=dnYycWo2bWc0ZzV2',

    shortcode: 'DbqszA3zpLX',
  },

  /* ================================================================
     REEL 11
     INSTAGRAM URL
     ================================================================ */

  {
    id: 'reel-essentials',

    title: 'Anchor Essentials: What’s in my Stage Kit? 🎤🎒',

    caption:
      'Everything I carry to survive 10-hour stage hosting days: cue cards, throat lozenges, wireless monitors, backup mics, and emergency touch-up kits! The behind-the-scenes reality nobody talks about. #StagePrep #HostLife #AnchorKit',

    creatorHandle: '__bhadra___',

    audioTrack: 'Original audio - __bhadra___',

    category: 'Vlogs & Lifestyle',

    thumbnailUrl:
      '/src/assets/images/ankita_portrait_1789556546665.jpg',

    views: '135K',
    likes: '18.7K',
    commentsCount: '312',
    date: '4 months ago',

    brandTag: 'Creator Life',

    isFeatured: false,

    /* YOUR REEL #11 URL */
    instagramUrl:
      'https://www.instagram.com/reel/DZ5PpbKT7hJ/?stkn=MXhzMjl1YjZibWx1bw==',

    shortcode: 'DZ5PpbKT7hJ',
  },
];

/* ================================================================
   BRANDS
   ================================================================ */

export const BRANDS: Brand[] = [
  {
    name: 'Imperial Coaching Centre',
    category: 'Education & Coaching',
    logoText: 'IMPERIAL',
  },

  {
    name: 'Indian Railways',
    category: 'Government & Tourism',
    logoText: 'INDIAN RAILWAYS',
  },

  {
    name: 'StudyNext',
    category: 'EdTech Platform',
    logoText: 'STUDYNEXT',
  },

  {
    name: 'Nykaa',
    category: 'Beauty & Lifestyle',
    logoText: 'NYKAA',
  },

  {
    name: 'Zomato',
    category: 'Food Delivery',
    logoText: 'zomato',
  },

  {
    name: 'Boat Lifestyle',
    category: 'Audio & Wearables',
    logoText: 'boAt',
  },

  {
    name: 'Tata Consumer',
    category: 'Beverages',
    logoText: 'TATA',
  },

  {
    name: 'Spotify India',
    category: 'Entertainment',
    logoText: 'Spotify',
  },
];

/* ================================================================
   SERVICES
   ================================================================ */

export const SERVICES: Service[] = [
  {
    id: 'reels-production',

    title: 'Sponsored Brand Reels & UGC',

    subtitle:
      'High-retention storytelling built for algorithmic reach',

    description:
      'Natural, relatable short-form videos tailored to your brand’s campaign objective. Complete script-to-screen production including concept ideation, professional filming, on-camera delivery, and trending audio pairing.',

    deliverables: [
      '1x or 3x Dedicated Instagram Reels (9:16 vertical 4K)',
      'Cross-posting rights for Brand Handles (Collab Tag)',
      'High-converting hook variations for paid ad amplification',
      'Instagram Story swipe-ups & link placements',
    ],

    icon: 'Video',
  },

  {
    id: 'event-anchoring',

    title: 'Live Stage Emceeing & Anchoring',

    subtitle:
      'Commanding stage presence for corporate summits & awards',

    description:
      'Charismatic, articulate, and poised stage hosting for corporate conferences, tech summits, college festivals, and televised gala nights. Seamless flow, crowd engagement, and prompt VIP handling.',

    deliverables: [
      'Full-day or half-day on-stage emceeing',
      'Pre-event script collaboration & speaker briefings',
      'Audience interactive segments & live Q&A moderation',
      'Behind-the-scenes event vlog reel included',
    ],

    icon: 'Mic',
  },

  {
    id: 'product-unboxing',

    title: 'Product Demos & Unfiltered Reviews',

    subtitle:
      'Building authentic buyer trust with candid walkthroughs',

    description:
      'Engaging hands-on demos highlighting key features, value propositions, and everyday usability without sounding like a scripted advertisement.',

    deliverables: [
      'Unboxing & aesthetic product close-ups',
      'Pain-point addressal & solution demonstration',
      'Direct purchase link tracking & discount promo code',
    ],

    icon: 'PackageCheck',
  },

  {
    id: 'brand-ambassador',

    title: 'Long-term Brand Ambassadorship',

    subtitle:
      'Consistent, authentic brand voice over multi-month campaigns',

    description:
      'Deep integration into your brand ecosystem with recurring monthly content, live appearances, product testing, and authentic advocacy that builds lasting consumer affinity.',

    deliverables: [
      'Monthly content calendar (Reels + Stories + Carousels)',
      'Exclusive category partnership & digital rights',
      'Presence at offline launch events & PR campaigns',
    ],

    icon: 'Sparkles',
  },
];

/* ================================================================
   AUDIENCE DEMOGRAPHICS
   ================================================================ */

export const AUDIENCE_DEMOGRAPHICS = {
  ageGroups: [
    {
      label: '18 - 24 years',
      percentage: 44,
    },

    {
      label: '25 - 34 years',
      percentage: 42,
    },

    {
      label: '35 - 44 years',
      percentage: 11,
    },

    {
      label: '45+ years',
      percentage: 3,
    },
  ],

  genderSplit: [
    {
      label: 'Female',
      percentage: 51,
    },

    {
      label: 'Male',
      percentage: 49,
    },
  ],

  topCities: [
    {
      city: 'Mumbai',
      percentage: 28,
    },

    {
      city: 'Delhi NCR',
      percentage: 24,
    },

    {
      city: 'Kolkata',
      percentage: 19,
    },

    {
      city: 'Bengaluru',
      percentage: 16,
    },

    {
      city: 'Pune & Hyderabad',
      percentage: 13,
    },
  ],
};

/* ================================================================
   TESTIMONIALS
   ================================================================ */

export const TESTIMONIALS = [
  {
    quote:
      'Ankita delivered one of the most engaging creator campaigns we ran this quarter. Her storytelling is so warm and authentic that our conversion on the signup link was 38% higher than usual.',

    author: 'Pooja Varma',

    role: 'Growth Marketing Lead',

    company: 'StudyNext EdTech',
  },

  {
    quote:
      'Her stage command at our annual conference was flawless. She kept an audience of 1,200 energetic from the opening keynote to the closing banquet. Highly professional and thoroughly prepared.',

    author: 'Rohan Deshmukh',

    role: 'Head of Brand Events',

    company: 'TechForward Summit',
  },

  {
    quote:
      'Working with Ankita is effortless. She understands brand briefs immediately, delivers crisp edits on time, and the audience loves her natural on-screen persona.',

    author: 'Sneha Kapoor',

    role: 'Influencer Partnerships',

    company: 'Lifestyle & FMCG Agency',
  },
];