export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  outcome: string;
  capabilities: string[];
  iconName: 'globe' | 'film' | 'cpu';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Website Design' | 'Video Editing' | 'AI Automation';
  technologies: string[];
  shortDescription: string;
  image: string;
  featured?: boolean;
  client: string;
  year: string;
  impactMetric: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  demoType: 'web' | 'commerce' | 'video' | 'ai';
  demoHighlights: {
    label: string;
    value: string;
  }[];
}

export interface StatItem {
  label: string;
  value: string;
  detail: string;
}

export interface SkillItem {
  name: string;
  domain: 'Frontend & Web' | 'Platforms & Backend' | 'AI & Automation' | 'Creative & Motion';
  proficiency: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  cadence: string;
  description: string;
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  outcome: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: 'Web Design' | 'AI Automation' | 'Video Marketing';
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-design',
    number: '01',
    title: 'Website Design',
    summary:
      'Conversion-focused digital storefronts and web applications engineered for speed, clarity, and search authority.',
    outcome: 'Built for sub-second loads and measurable inbound pipeline growth.',
    capabilities: [
      'Business Websites',
      'Landing Pages',
      'E-commerce',
      'WordPress',
      'Shopify',
    ],
    iconName: 'globe',
  },
  {
    id: 'video-editing',
    number: '02',
    title: 'Video Editing',
    summary:
      'High-retention narrative editing, motion design, and sound pacing crafted to turn attention into brand trust.',
    outcome: 'Structured hooks, dynamic rhythm, and broadcast-grade color finishing.',
    capabilities: [
      'Promotional Videos',
      'YouTube Editing',
      'Reels',
      'Motion Graphics',
    ],
    iconName: 'film',
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI Automation',
    summary:
      'Custom AI assistants, multi-step workflow pipelines, and CRM integrations that remove manual operational bottlenecks.',
    outcome: 'Automated lead triage, 24/7 customer resolution, and leaner operations.',
    capabilities: [
      'AI Chatbots',
      'Workflow Automation',
      'Business Automation',
      'AI Assistants',
    ],
    iconName: 'cpu',
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'atlas-enterprise-saas',
    title: 'Atlas Enterprise Web Platform',
    category: 'Website Design',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    shortDescription:
      'High-conversion B2B SaaS marketing site and interactive product telemetry showcase engineered for rapid enterprise buyer qualification.',
    image: '/src/assets/images/portfolio_web_platform_1794915120913.jpg',
    featured: true,
    client: 'Atlas Cloud Systems',
    year: '2026',
    impactMetric: '+142% Qualified Demo Requests in 90 Days',
    challenge:
      'Atlas had deep technical capabilities buried inside a slow legacy template, causing enterprise visitors to drop off before booking a discovery call.',
    solution:
      'Designed and built a modular Next.js architecture with interactive product previews, clear buyer pathways, and sub-second page transitions.',
    outcomes: [
      '99 Lighthouse performance score across desktop and mobile viewports',
      '+142% increase in qualified enterprise demo bookings within one quarter',
      '41% reduction in bounce rate across core product landing pages',
    ],
    demoType: 'web',
    demoHighlights: [
      { label: 'Core Web Vitals', value: '0.7s LCP' },
      { label: 'Conversion Lift', value: '+142%' },
      { label: 'Accessibility', value: 'WCAG AA' },
    ],
  },
  {
    id: 'aethel-audio-shopify',
    title: 'Aethel Precision Audio Storefront',
    category: 'Website Design',
    technologies: ['Shopify', 'Tailwind CSS', 'JavaScript', 'Figma'],
    shortDescription:
      'Bespoke headless Shopify e-commerce experience featuring tactile product specification views and streamlined checkout architecture.',
    image: '/src/assets/images/portfolio_commerce_shopify_1794915120694.jpg',
    featured: false,
    client: 'Aethel Acoustics',
    year: '2026',
    impactMetric: '+38% Average Order Value Post-Launch',
    challenge:
      'High-ticket acoustic hardware buyers needed detailed engineering specs and confidence-building editorial layouts before committing to $3,000+ purchases.',
    solution:
      'Crafted a custom Shopify storefront pairing studio hardware photography with frictionless variant switching and bundled accessory upsells.',
    outcomes: [
      '+38% increase in average order value through curated kit pairings',
      '2.4x faster mobile checkout completion compared to previous theme',
      'Zero layout shift across all high-resolution gallery frames',
    ],
    demoType: 'commerce',
    demoHighlights: [
      { label: 'AOV Growth', value: '+38%' },
      { label: 'Checkout Speed', value: '2.4x Faster' },
      { label: 'Cart Recovery', value: '29.4%' },
    ],
  },
  {
    id: 'nightfall-commercial-reel',
    title: 'Nightfall Brand Campaign & Motion Suite',
    category: 'Video Editing',
    technologies: ['Adobe Premiere Pro', 'After Effects', 'Motion Graphics'],
    shortDescription:
      'Multi-format launch film, kinetic typography package, and vertical social cutdowns built for maximum viewer retention.',
    image: '/src/assets/images/portfolio_video_showreel_1794915120869.jpg',
    featured: false,
    client: 'Nightfall Studios',
    year: '2026',
    impactMetric: '74% Average Watch Completion Across Reels',
    challenge:
      'Long-form brand assets were underperforming on modern feeds due to slow openings and inconsistent visual pacing across channels.',
    solution:
      'Re-engineered the edit around 3-second visual hooks, custom After Effects lower-thirds, cinema-grade color grading, and rhythmic sound design.',
    outcomes: [
      '74% average completion rate across 12 short-form vertical reels',
      '3.1M organic campaign impressions within the first 30 days',
      'Reusable motion graphics toolkit delivered for internal teams',
    ],
    demoType: 'video',
    demoHighlights: [
      { label: 'Hook Retention', value: '86% at 3s' },
      { label: 'Completion Rate', value: '74%' },
      { label: 'Formats Delivered', value: '16:9 & 9:16' },
    ],
  },
  {
    id: 'nexus-ai-operations-engine',
    title: 'n8n YouTube & AI Agent Automation Pipeline',
    category: 'AI Automation',
    technologies: ['n8n', 'AI Agent', 'OpenAI', 'Google Gemini', 'YouTube API'],
    shortDescription:
      'End-to-end n8n automation workflow combining AI Agents, script narration, AI image & voice generation, video rendering, and automated YouTube publishing.',
    image: '/src/assets/images/youtube_automation_cobalt_1794918581732.jpg',
    featured: true,
    client: 'KB Dev Automation Systems',
    year: '2026',
    impactMetric: '100% Automated Script-to-YouTube Pipeline',
    challenge:
      'Producing consistent long-form and short-form video content manually required scripting, voiceover synthesis, visual generation, rendering, and metadata publishing across five disconnected tools.',
    solution:
      'Engineered an end-to-end n8n orchestration pipeline linking an AI Agent with OpenRouter/LLM scripting, automated voice and image generation APIs, cloud video rendering, and direct YouTube upload.',
    outcomes: [
      'Fully automated production pipeline from prompt trigger to YouTube upload',
      'Unified JSON splitting, voice synthesis, visual prompt generation, and video merge',
      'Saved 20+ hours weekly on content research, asset assembly, and publishing',
    ],
    demoType: 'ai',
    demoHighlights: [
      { label: 'Pipeline Nodes', value: '12 Connected' },
      { label: 'Time Reclaimed', value: '20+ hrs/wk' },
      { label: 'Delivery Mode', value: 'Autonomous' },
    ],
  },
];

export const ABOUT_STATS: StatItem[] = [
  {
    label: 'Projects Completed',
    value: '48+',
    detail: 'Websites, campaigns & AI pipelines shipped',
  },
  {
    label: 'Happy Clients',
    value: '32+',
    detail: 'Founders, agencies & scaling brands',
  },
  {
    label: 'Years of Experience',
    value: '5+',
    detail: 'Bridging design, media & automation',
  },
  {
    label: 'Client Satisfaction',
    value: '99%',
    detail: 'On-time delivery & ongoing retention',
  },
];

export const SKILLS_LIST: SkillItem[] = [
  { name: 'HTML', domain: 'Frontend & Web', proficiency: 'Semantic & Accessible' },
  { name: 'CSS', domain: 'Frontend & Web', proficiency: 'Layout & Motion' },
  { name: 'JavaScript', domain: 'Frontend & Web', proficiency: 'ES2024 & DOM' },
  { name: 'React', domain: 'Frontend & Web', proficiency: 'Component Architecture' },
  { name: 'Next.js', domain: 'Frontend & Web', proficiency: 'App Router & SSR' },
  { name: 'Tailwind CSS', domain: 'Frontend & Web', proficiency: 'Design Systems' },
  { name: 'WordPress', domain: 'Platforms & Backend', proficiency: 'Custom Themes' },
  { name: 'Shopify', domain: 'Platforms & Backend', proficiency: 'Liquid & Headless' },
  { name: 'Node.js', domain: 'Platforms & Backend', proficiency: 'APIs & Webhooks' },
  { name: 'AI Automation', domain: 'AI & Automation', proficiency: 'End-to-End Pipelines' },
  { name: 'OpenAI', domain: 'AI & Automation', proficiency: 'Assistants & Functions' },
  { name: 'Google Gemini', domain: 'AI & Automation', proficiency: 'Multimodal Agents' },
  { name: 'Figma', domain: 'Creative & Motion', proficiency: 'UI & Prototyping' },
  { name: 'Adobe Premiere Pro', domain: 'Creative & Motion', proficiency: 'Narrative & Color' },
  { name: 'After Effects', domain: 'Creative & Motion', proficiency: 'Motion Graphics' },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery',
    cadence: 'Days 1–2',
    description:
      'Audit existing digital touchpoints, customer friction, content bottlenecks, and repetitive manual tasks.',
    deliverable: 'Opportunity Audit & Scope Brief',
  },
  {
    step: 2,
    title: 'Strategy',
    cadence: 'Days 3–5',
    description:
      'Define conversion architecture, visual direction, video retention hooks, or AI automation workflows.',
    deliverable: 'Technical & Creative Roadmap',
  },
  {
    step: 3,
    title: 'Design',
    cadence: 'Week 2',
    description:
      'Craft high-contrast interfaces in Figma, storyboards for video edits, and clear system diagrams for AI pipelines.',
    deliverable: 'Interactive Prototypes & Visual Kit',
  },
  {
    step: 4,
    title: 'Development',
    cadence: 'Weeks 2–4',
    description:
      'Build clean React/Next.js codebases, Shopify or WordPress stores, precision video timelines, and API integrations.',
    deliverable: 'Staging Environment & Draft Cuts',
  },
  {
    step: 5,
    title: 'Testing',
    cadence: 'Week 4',
    description:
      'Verify Core Web Vitals, cross-device responsiveness, audio loudness standards, and AI edge-case reliability.',
    deliverable: 'QA Sign-off & Performance Report',
  },
  {
    step: 6,
    title: 'Launch',
    cadence: 'Go-Live',
    description:
      'Zero-downtime deployment, SEO schema indexing, tracking setup, and production automation handoff.',
    deliverable: 'Live Production Release',
  },
  {
    step: 7,
    title: 'Support',
    cadence: 'Ongoing',
    description:
      'Continuous optimization, iterative video retainers, prompt tuning, and priority technical maintenance.',
    deliverable: 'Monthly Growth & Reliability Care',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-marcus',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Atlas Cloud Systems',
    avatar: '/src/assets/images/avatar_client_one_1794915122481.jpg',
    rating: 5,
    quote:
      'KB Dev rebuilt our entire web presence from the ground up and connected an AI qualification workflow directly to our CRM. Our demo pipeline doubled within three months.',
    outcome: '+142% Inbound Pipeline',
  },
  {
    id: 't-elena',
    name: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Nightfall Studios',
    avatar: '/src/assets/images/avatar_client_two_1794915122821.jpg',
    rating: 5,
    quote:
      'Rarely do you find one specialist who understands both visual pacing in Premiere and After Effects and the technical side of web conversion. Every cut arrived sharp and on schedule.',
    outcome: '3.1M Organic Views',
  },
  {
    id: 't-david',
    name: 'David Mercer',
    role: 'VP of E-Commerce',
    company: 'Aethel Acoustics',
    avatar: '/src/assets/images/avatar_client_three_1794915123547.jpg',
    rating: 5,
    quote:
      'Our Shopify migration felt effortless. The new dark editorial storefront elevated how customers perceive our hardware and pushed average order value up by 38%.',
    outcome: '+38% Order Value',
  },
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    id: 'high-converting-web-architecture',
    title: 'Why Visual Hierarchy Outperforms Flashy Gimmicks in B2B Web Design',
    category: 'Web Design',
    date: 'October 2026',
    readTime: '5 min read',
    image: '/src/assets/images/blog_web_architecture_1794915121536.jpg',
    excerpt:
      'How disciplined contrast, sub-second page transitions, and clear buyer pathways turn skeptical visitors into booked discovery calls.',
    content: [
      'Most modern business websites suffer from the same quiet failure: they try to say everything at once while hiding the next logical step behind visual noise.',
      'When designing high-converting interfaces for technical founders and e-commerce brands, restraint is a performance multiplier. Every section should answer one concrete buyer question—what you build, how it works, proof it delivers results, and how to start.',
      'By pairing strict 60-30-10 color contrast with crisp geometric typography and purposeful whitespace, visitors scan your value proposition in under four seconds. Combined with clean React and Next.js rendering, speed and trust reinforce each other.',
    ],
    keyTakeaways: [
      'Lead every viewport with one unmistakable value proposition and a single primary CTA.',
      'Place quantified proof and client outcomes directly beside capability claims.',
      'Keep Core Web Vitals under 1.0s LCP to protect paid and organic acquisition ROI.',
    ],
  },
  {
    id: 'practical-ai-automation-workflows',
    title: 'Designing Reliable AI Workflows That Actually Save 20+ Hours a Week',
    category: 'AI Automation',
    date: 'November 2026',
    readTime: '6 min read',
    image: '/src/assets/images/blog_ai_systems_1794915122003.jpg',
    excerpt:
      'Moving beyond novelty chat widgets to build structured Gemini and OpenAI pipelines integrated cleanly into your CRM and inbox.',
    content: [
      'Businesses rarely fail with AI because the underlying model is weak—they fail because the workflow lacks deterministic guardrails and clean data handoffs.',
      'Instead of dropping an unguided chat box onto a website, effective business automation breaks operations into verifiable stages: intake classification, structured JSON extraction, CRM enrichment, and human-in-the-loop approval for high-value actions.',
      'Using Google Gemini and OpenAI behind lightweight Node.js webhooks lets small teams respond to leads in under a minute while eliminating hours of repetitive copy-pasting every week.',
    ],
    keyTakeaways: [
      'Use structured outputs and strict validation schemas between AI steps and your CRM.',
      'Automate repetitive triage and summarization first before autonomous customer replies.',
      'Measure hours reclaimed and response latency before and after deployment.',
    ],
  },
  {
    id: 'video-retention-systems-for-brands',
    title: 'The 3-Second Retention Framework for Commercial Video & Social Reels',
    category: 'Video Marketing',
    date: 'November 2026',
    readTime: '4 min read',
    image: '/src/assets/images/blog_video_cinema_1794915122818.jpg',
    excerpt:
      'Editing techniques from Premiere Pro and After Effects that hold audience attention across YouTube, Reels, and product launches.',
    content: [
      'Viewers decide whether to keep watching within the first three seconds of playback—often before the first sentence finishes. Great video editing respects that reality without resorting to chaotic clutter.',
      'Opening with visual contrast, clear motion typography, and immediate narrative tension sets expectations cleanly. From there, alternating wide architectural shots with tight motion graphics callouts keeps cognitive momentum high.',
      'Whether editing long-form YouTube breakdowns or vertical brand reels, audio clarity and rhythmic pacing carry just as much weight as color grading.',
    ],
    keyTakeaways: [
      'Anchor the opening 3 seconds with a visual shift and concrete viewer payoff.',
      'Use clean After Effects motion callouts to simplify complex software or metrics.',
      'Master audio levels and pacing first—visual polish amplifies strong structure.',
    ],
  },
];
