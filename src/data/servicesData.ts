import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    number: '01',
    title: 'Search Engine Optimization (SEO)',
    shortDescription: 'Improve search visibility and organic traffic through technical, on-page, and content-focused SEO.',
    fullDescription: 'Our search engine optimization methodology combines deep technical site audits, semantic architecture, search intent analysis, and authority building to position your brand directly in front of active prospective buyers.',
    iconName: 'Search',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Comprehensive technical SEO architecture & crawlability audits',
      'Targeted keyword intent research & competitive gap analysis',
      'On-page optimization including schema markup and metadata',
      'Core Web Vitals acceleration & site speed enhancement',
      'Content strategy for high-intent commercial queries'
    ],
    keyCapabilities: [
      'Technical Audits',
      'Keyword Mapping',
      'Structured Data',
      'Internal Linking',
      'Rank Tracking'
    ],
    businessOutcome: 'Generates compounding, high-intent organic traffic that decreases long-term customer acquisition costs.'
  },
  {
    id: 'smma',
    number: '02',
    title: 'Social Media Marketing & Management (SMMA)',
    shortDescription: 'Social media strategy, content management, audience engagement, and campaign planning.',
    fullDescription: 'We plan and execute coherent social strategies that establish brand authority, engage specific market segments, and maintain an active digital dialogue across primary business platforms.',
    iconName: 'Share2',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Channel-specific content planning & editorial scheduling',
      'Brand voice guidelines & community management protocols',
      'Visual asset creation tailored to LinkedIn, Instagram, X, and YouTube',
      'Proactive audience engagement and inquiry triaging',
      'Monthly engagement & audience demographic reporting'
    ],
    keyCapabilities: [
      'Channel Strategy',
      'Editorial Calendar',
      'Community Oversight',
      'Cross-Platform Publishing',
      'Sentiment Monitoring'
    ],
    businessOutcome: 'Builds sustained brand recall, trusted authority, and direct touchpoints with relevant market audiences.'
  },
  {
    id: 'web-dev',
    number: '03',
    title: 'Website Development',
    shortDescription: 'Professional, responsive, user-friendly websites designed for businesses and organizations.',
    fullDescription: 'We build modern, performant, and secure web applications and corporate websites engineered for conversion clarity, fast load speeds, and seamless cross-device experiences.',
    iconName: 'Code2',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Custom frontend architecture built on modern component standards',
      'Responsive design across mobile, tablet, and ultra-wide screens',
      'Content management system (CMS) integration and workflow setup',
      'Rigorous accessibility (WCAG AA), speed, and security audits',
      'Analytics, event tracking, and CRM form integrations'
    ],
    keyCapabilities: [
      'Custom Frontend',
      'CMS Integration',
      'Responsive Layouts',
      'Performance Optimization',
      'Security Hardening'
    ],
    businessOutcome: 'Provides an authoritative digital flagship that converts qualified visitors into verified leads.'
  },
  {
    id: 'analytics',
    number: '04',
    title: 'Data Analytics',
    shortDescription: 'Data analysis, reporting, performance tracking, and actionable business insights.',
    fullDescription: 'Transform disparate customer interactions into cohesive, accurate reporting. We configure robust tracking architectures, build executive dashboards, and extract actionable insights to guide commercial strategy.',
    iconName: 'BarChart3',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Server-side & client-side event tracking architecture',
      'Executive dashboard design with unified KPI reporting',
      'Funnel attribution modeling & drop-off diagnosis',
      'Customer lifetime value & cohort analysis',
      'Regular data interpretation meetings with actionable recommendations'
    ],
    keyCapabilities: [
      'GA4 Architecture',
      'Custom Dashboards',
      'Attribution Modeling',
      'Conversion Tracking',
      'Cohort Analysis'
    ],
    businessOutcome: 'Removes guesswork from marketing investments by providing verifiable clarity on what drives revenue.'
  },
  {
    id: 'ppc',
    number: '05',
    title: 'Pay-Per-Click Advertising (PPC)',
    shortDescription: 'Paid search advertising, campaign management, keyword targeting, and performance optimization.',
    fullDescription: 'Disciplined paid acquisition across search and digital display platforms. We structure campaigns around commercial intent, tight keyword governance, negative bidding, and landing page continuity.',
    iconName: 'Target',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Commercial intent keyword research and match-type structuring',
      'High-converting ad copy iterations & responsive search ads',
      'Negative keyword maintenance to prevent budget wastage',
      'Bid strategy management (target CPA, target ROAS, maximize conversions)',
      'Landing page alignment recommendations for quality score enhancement'
    ],
    keyCapabilities: [
      'Search Ads',
      'Display Targeting',
      'Bid Management',
      'Negative Keyword Mining',
      'Budget Efficiency'
    ],
    businessOutcome: 'Delivers immediate market visibility and predictable acquisition volume with controlled cost parameters.'
  },
  {
    id: 'video-editing',
    number: '06',
    title: 'Video Editing',
    shortDescription: 'Professional editing for promotional videos, social media content, advertisements, and business videos.',
    fullDescription: 'High-impact post-production that sharpens your message. From corporate brand overviews to concise ad creatives and product demonstrations, we deliver crisp pacing, color grading, sound design, and motion graphics.',
    iconName: 'Film',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Narrative structure editing and pacing optimization',
      'Professional color correction and cinematic grading',
      'Clean audio leveling, noise reduction, and sound design',
      'Motion graphics, title cards, and animated lower-thirds',
      'Multi-aspect ratio exports optimized for landscape, vertical, and square platforms'
    ],
    keyCapabilities: [
      'Post-Production',
      'Color Grading',
      'Sound Engineering',
      'Motion Graphics',
      'Aspect Formatting'
    ],
    businessOutcome: 'Captures and holds viewer attention in media-dense channels, communicating complex value propositions in seconds.'
  },
  {
    id: 'translation',
    number: '07',
    title: 'Translation Services',
    shortDescription: 'Accurate translation and localization of business, website, marketing, and digital content.',
    fullDescription: 'Expand into multilingual markets with cultural nuance and technical accuracy. We localize digital assets, enterprise websites, documentation, and campaign messaging so your value translates authentically.',
    iconName: 'Languages',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Website and software interface localization',
      'Marketing campaign, ad copy, and brochure translation',
      'Technical documentation and terms localization',
      'Cultural nuance auditing to ensure regional resonance',
      'Terminology glossaries and translation memory management'
    ],
    keyCapabilities: [
      'Multilingual Localization',
      'Marketing Translation',
      'Technical Copy',
      'Cultural Nuance Audit',
      'Terminology Governance'
    ],
    businessOutcome: 'Eliminates linguistic barriers to entry and enables credible global expansion into non-native markets.'
  },
  {
    id: 'content-copywriting',
    number: '08',
    title: 'Content & Copywriting',
    shortDescription: 'Website copy, blog content, marketing copy, product descriptions, and other business-focused content.',
    fullDescription: 'Clear, compelling language designed to articulate differentiation and persuade decision-makers. We write authoritative, well-researched business content that educates prospects and drives conversions.',
    iconName: 'PenTool',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'High-converting website copy for home, services, and product pages',
      'In-depth business articles, whitepapers, and thought leadership',
      'Technical product descriptions and feature breakdowns',
      'Sales collateral, pitch decks, and case narrative writing',
      'SEO-aligned editorial content mapped to buyer stage'
    ],
    keyCapabilities: [
      'Conversion Copywriting',
      'Thought Leadership',
      'Technical Writing',
      'Messaging Frameworks',
      'Editorial Strategy'
    ],
    businessOutcome: 'Establishes industry authority, answers buyer questions, and systematically moves prospects toward purchase decisions.'
  },
  {
    id: 'graphic-design',
    number: '09',
    title: 'Graphic Design',
    shortDescription: 'Professional visual designs for digital marketing, social media, websites, advertisements, and business materials.',
    fullDescription: 'Intentional visual communication that conveys professionalism and brand cohesion. We craft cohesive graphic systems, marketing collaterals, digital campaign assets, and presentation decks.',
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Digital ad creatives across Google, Meta, LinkedIn, and display formats',
      'Comprehensive brand asset kits, icon systems, and typography rules',
      'Infographics and data visualizers for editorial and business reporting',
      'Executive presentation decks and corporate pitch materials',
      'Social media template systems for team-wide consistency'
    ],
    keyCapabilities: [
      'Digital Ad Creative',
      'Brand Systems',
      'Information Design',
      'Pitch Presentations',
      'Vector Asset Creation'
    ],
    businessOutcome: 'Reinforces brand credibility at every touchpoint and elevates market perception above competitors.'
  },
  {
    id: 'email-marketing',
    number: '10',
    title: 'Email Marketing',
    shortDescription: 'Email campaigns, promotional emails, newsletters, audience communication, and campaign optimization.',
    fullDescription: 'Direct, owned-channel communication engineered for retention and revenue. We design, code, and automate segmented email sequences that nurture prospects and strengthen long-term client relationships.',
    iconName: 'Mail',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Automated onboarding, nurture, and re-engagement workflows',
      'Responsive, cross-client email templates tested across devices',
      'Audience segmentation based on behavior, lifecycle, and engagement',
      'Subject line and content split-testing (A/B testing) framework',
      'Deliverability audits, SPF/DKIM verification, and list hygiene'
    ],
    keyCapabilities: [
      'Automated Sequences',
      'Audience Segmentation',
      'Template Engineering',
      'A/B Testing',
      'Deliverability Management'
    ],
    businessOutcome: 'Generates reliable recurring revenue from existing relationships while maintaining direct audience ownership.'
  }
];
