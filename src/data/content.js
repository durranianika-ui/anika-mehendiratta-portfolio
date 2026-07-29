/* ============================================================
   CONTENT — Anika Mehendiratta
   ------------------------------------------------------------
   Single source of truth. All TEXT is real, from Anika's CV.
   Images are career-themed placeholders (Unsplash) — swap for
   real campaign / dashboard / brand visuals by dropping files
   in /public and referencing "/my-image.jpg".
   ============================================================ */

const VID = `${import.meta.env.BASE_URL}video/` // base-aware /public/video path

/* -------- 1. PROFILE -------- */
export const profile = {
  firstName: 'Anika',
  lastName: 'Mehendiratta',
  // Loader letter = firstName[0] → "A"
  role: 'Commercial Growth Leader', // single restrained hero line
  titleLines: ['Commercial Growth Leader', 'Revenue & OTA Distribution', 'AI-Enabled Marketing Ops'],
  title: 'Growth & Commercial Marketing Manager',
  tagline:
    'I turn distribution, pricing and paid demand into direct revenue — 4× direct bookings and occupancy from 50% to 79% across an 80+ unit portfolio.',
  location: 'Dubai, United Arab Emirates',
  email: 'anikamehendiratta1@gmail.com',
  phone: '+971 58 920 1927',
  socials: {
    LinkedIn: 'https://linkedin.com/in/anika-mehendiratta',
    Email: 'mailto:anikamehendiratta1@gmail.com',
    Phone: 'tel:+971589201927',
  },
  role2: 'Marketing & Growth Leader',
  valueProp: 'I build integrated growth systems across performance marketing, revenue strategy, CRM, automation and analytics — connecting marketing activity to measurable commercial outcomes and scalable business growth.',
  headline: 'Commercial growth for hospitality & travel — direct revenue, distribution and AI-enabled marketing ops.',
  // Hero background priority: heroGif → heroVideo → heroImage (ken-burns).
  // User-provided GIF (public/hero.gif). Set to '' to fall back to the video below.
  heroGif: `${import.meta.env.BASE_URL}hero.gif`,
  // Cinematic hero loop — Dubai Marina at night (Pexels, free/commercial licence).
  heroVideo: `${import.meta.env.BASE_URL}hero.mp4`,
  heroImage:
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80', // Dubai skyline
  portrait:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80', // ← replace with a real photo of Anika
  // Original CV document (served verbatim on Download CV).
  resumeFile: `${import.meta.env.BASE_URL}Anika-Mehendiratta-CV.docx`,
}

/* -------- WATCH PROFILES ("Who's Watching?") --------
   These are AUDIENCE types, not Anika. Each is a furry monster character.
   route = where selecting it lands (all enter the same portfolio).
*/
export const audienceProfiles = [
  { id: 'recruiter', name: 'Recruiter', subtitle: 'Looking for the right hire', emoji: '👔', color: '#22b8dd', route: '/browse', emphasis: ['Commercial & Revenue', 'Leadership & Operations', 'Analytics & Reporting'] },
  { id: 'marketing-manager', name: 'Marketing Manager', subtitle: 'Evaluating marketing expertise', emoji: '📈', color: '#e8443a', route: '/browse', emphasis: ['Marketing & Growth', 'Analytics & Reporting', 'CRM & Lifecycle'] },
  { id: 'hiring-manager', name: 'Hiring Manager', subtitle: 'Assessing overall business value', emoji: '💼', color: '#f5a623', route: '/browse', emphasis: ['Commercial & Revenue', 'Hospitality Distribution', 'Automation & Systems', 'Leadership & Operations'] },
  { id: 'stalker', name: 'Stalker', subtitle: 'Just curious', emoji: '👀', color: '#9b59d0', route: '/browse', emphasis: [] },
]

/* -------- HERO METRIC STRIP (CV-true only) -------- */
export const heroStats = [
  { value: 'AED 1.4M+', label: 'Revenue generated' },
  { value: '4×', label: 'Direct booking revenue' },
  { value: '79%', label: 'Average occupancy' },
  { value: '−60%', label: 'Cost per lead' },
  { value: '~90%', label: 'Less manual reporting' },
]

/* -------- HERO METRIC WALL — animated proof, CV-true, one canonical number each -------- */
export const heroMetrics = [
  { to: 1.4, from: 0, prefix: 'AED ', suffix: 'M+', decimals: 1, label: 'Revenue generated' },
  { to: 4, from: 0, suffix: '×', decimals: 0, label: 'Direct booking revenue' },
  { to: 79, from: 50, suffix: '%', decimals: 0, label: 'Occupancy (from 50%)' },
  { to: 60, from: 0, prefix: '−', suffix: '%', decimals: 0, label: 'Cost per lead' },
]

/* -------- "TRUSTED WITH" — animated counters (CV-true) -------- */
export const trustedWith = [
  { value: 1.4, prefix: 'AED ', suffix: 'M+', label: 'Revenue generated', decimals: 1 },
  { value: 79, suffix: '%', label: 'Average occupancy' },
  { value: 100, suffix: '%', label: 'Peak occupancy' },
  { value: 16, suffix: '%', label: 'Direct booking share' },
  { value: 60, prefix: '−', suffix: '%', label: 'Cost per qualified lead' },
  { value: 190, suffix: '/mo', label: 'Qualified leads' },
  { value: 80, suffix: '+', label: 'Units managed' },
  { value: 9, label: 'Team members led' },
]

/* -------- 2. PROFESSIONAL SUMMARY -------- */
export const summary =
  'Commercial growth leader for hospitality, travel and real-estate businesses in the UAE, with ownership of direct revenue growth, OTA distribution strategy and acquisition efficiency across an 80+ unit holiday-home portfolio and a four-company group. I combine revenue and channel strategy — pricing, rate parity, channel mix — with paid customer acquisition, CRM and lifecycle automation, and AI-enabled marketing operations.'

/* -------- 3. TOP CAREER HIGHLIGHTS (About) -------- */
export const highlights = [
  { rank: 1, stat: '4×', headline: 'Direct booking revenue', detail: 'AED 40K → 160K / month — AED 1.4M+ annualised incremental revenue.' },
  { rank: 2, stat: '79%', headline: 'Average annual occupancy', detail: 'Up from 50% across an 80+ unit portfolio, with peaks at 100%.' },
  { rank: 3, stat: '−60%', headline: 'Cost per qualified lead', detail: 'AED 48 → AED 19, while quadrupling qualified demand (46 → 190 / month).' },
  { rank: 4, stat: '+11pp', headline: 'Direct booking contribution', detail: 'From 5% to 16% — cutting OTA commission dependency by 11 points.' },
  { rank: 5, stat: '~90%', headline: 'Less reporting effort', detail: 'Weekly commercial reporting automated with AI workflows (n8n, Claude, Gemini).' },
  { rank: 6, stat: '9', headline: 'Cross-functional team led', detail: 'Marketing, OTA, reservations and content across four business units.' },
]

/* -------- 4. PROJECTS (Netflix "titles") — real case studies -------- */
export const projects = [
  {
    id: 'direct-revenue-4x',
    title: 'The 4× Revenue Play',
    category: 'Commercial Growth',
    featured: true,
    year: '2025',
    match: '99',
    stat: '4×',
    maturity: 'Flagship',
    duration: 'Nov 2025 – Present',
    logline: 'Direct bookings quadrupled and the OTAs lost their grip on the margin. Here’s exactly how.',
    role: 'Commercial Marketing & OTA Manager — Durrani Group',
    summary:
      'Owned the commercial marketing and channel strategy that grew direct booking revenue 4× and lifted the direct-booking share from 5% to 16% — reducing OTA commission dependency across an 80+ unit holiday-home portfolio.',
    tags: ['Revenue Strategy', 'Direct Bookings', 'Channel Mix', 'Paid Acquisition'],
    poster: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}revenue.mp4`,
    impact: [
      { k: '4×', v: 'Direct booking revenue (AED 40K → 160K/mo)' },
      { k: '5% → 16%', v: 'Direct booking contribution' },
      { k: 'AED 1.4M+', v: 'Annualised incremental revenue' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'Revenue leaned heavily on OTAs, surrendering margin to commissions while the direct channel sat at just 5% of bookings.' },
      { h: 'The strategy', p: 'Rebuilt the commercial plan around a profitable direct channel — pricing, listing quality and paid acquisition reinforcing each other — while reallocating monthly spend by return through continuous testing.' },
      { h: 'The execution', p: 'Ran always-on Google and Meta acquisition into an optimised booking journey, tightened rate parity across channels, and reported performance to ownership monthly to steer pricing and investment.' },
      { h: 'The result', p: 'Direct revenue grew from AED 40K to 160K per month — AED 1.4M+ annualised — lifting direct contribution to 16% and cutting OTA commission dependency by 11 points.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Direct revenue is won where pricing, distribution and demand generation are run as one system — not three separate teams.',
  },
  {
    id: 'occupancy-engine',
    title: 'The Occupancy Engine',
    category: 'Revenue & Distribution',
    year: '2025',
    match: '98',
    stat: '79%',
    maturity: 'Revenue',
    duration: '80+ unit portfolio',
    role: 'Commercial Marketing & OTA Manager — Durrani Group',
    logline: 'Half-empty to 79% full across 80+ units — the pricing-and-distribution system behind the swing.',
    summary:
      'Owned OTA distribution and channel strategy across an 80+ unit portfolio and every major channel — using dynamic pricing, listing optimisation and channel expansion to raise average annual occupancy from 50% to 79%.',
    tags: ['Dynamic Pricing', 'Rate Parity', 'OTA Distribution', 'Listing Optimisation'],
    poster: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}occupancy.mp4`,
    impact: [
      { k: '50% → 79%', v: 'Average annual occupancy' },
      { k: '100%', v: 'Occupancy at peak periods' },
      { k: '80+', v: 'Units across the portfolio' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'An 80+ unit portfolio running at ~50% average occupancy, with pricing and availability managed inconsistently across many channels.' },
      { h: 'The strategy', p: 'Treat the portfolio as one revenue-managed inventory — parity and availability disciplined across Booking.com, Airbnb, Expedia, Agoda and global B2B wholesale networks.' },
      { h: 'The execution', p: 'Dynamic pricing tuned to demand, listings optimised for conversion, and the channel mix expanded — including corporate wholesale — to fill shoulder periods.' },
      { h: 'The result', p: 'Average annual occupancy rose from 50% to 79%, with multiple peak periods operating at full 100% occupancy.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Occupancy is a distribution problem before it is a marketing one — parity and availability discipline unlock the rest.',
  },
  {
    id: 'acquisition-efficiency',
    title: 'Acquisition Cost Halved',
    category: 'Customer Acquisition',
    year: '2025',
    match: '97',
    stat: '−60%',
    maturity: 'Performance',
    duration: 'Ongoing',
    role: 'Commercial Marketing & OTA Manager — Durrani Group',
    logline: 'Leads got 60% cheaper while demand grew 4× — the counter-intuitive playbook that did both at once.',
    summary:
      'Rebuilt paid acquisition across Google Ads (Search, Demand Gen) and Meta to cut cost per qualified lead by 60% while quadrupling qualified demand — an estimated 4×+ blended return on marketing spend.',
    tags: ['Google Ads', 'Meta Ads', 'CRO', 'ROAS', 'Lead Gen'],
    poster: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}revenue.mp4`,
    impact: [
      { k: '−60%', v: 'Cost per qualified lead (AED 48 → 19)' },
      { k: '46 → 190', v: 'Qualified leads per month' },
      { k: '4×+', v: 'Blended return on marketing spend' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'Qualified demand was expensive and thin — acquisition spend was not converting into efficient, bookable leads.' },
      { h: 'The strategy', p: 'Restructure campaigns around qualified-lead economics: message-matched journeys, disciplined testing, and budget reallocated by return.' },
      { h: 'The execution', p: 'Ran Search and Demand Gen on Google alongside Meta, optimised landing pages and creative, and fed leads into CRM lifecycle automation for nurture.' },
      { h: 'The result', p: 'Cost per qualified lead fell 60% (AED 48 → 19) while qualified demand quadrupled to 190 leads per month.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Optimise for qualified demand, not clicks — the funnel downstream is where cost per lead is really won.',
  },
  {
    id: 'ai-reporting-automation',
    title: 'The Self-Writing Report',
    category: 'AI & Automation',
    year: '2025',
    match: '96',
    stat: '~90%',
    maturity: 'Ops',
    duration: 'Ongoing',
    role: 'Commercial Marketing & OTA Manager — Durrani Group',
    logline: 'The report that writes itself — five hours of work vanished into twenty minutes. See the build.',
    summary:
      'Implemented AI-assisted reporting and workflow automation with n8n, Claude and Gemini — cutting weekly campaign reporting from 4–5 hours to 20–30 minutes and freeing the team for strategy.',
    tags: ['n8n', 'Claude', 'Gemini', 'Workflow Automation', 'GA4'],
    poster: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}automation.mp4`,
    impact: [
      { k: '~90%', v: 'Less weekly reporting effort' },
      { k: '4–5h → 20m', v: 'Time to a campaign report' },
      { k: '3', v: 'AI tools orchestrated (n8n · Claude · Gemini)' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'Commercial reporting consumed 4–5 hours every week — time the team could not spend on optimisation.' },
      { h: 'The strategy', p: 'Automate the mechanical parts of reporting end-to-end and keep humans on interpretation and decisions.' },
      { h: 'The execution', p: 'Built AI-assisted workflows in n8n orchestrating Claude and Gemini to pull, summarise and format commercial KPIs into executive-ready reporting.' },
      { h: 'The result', p: 'Weekly reporting dropped to 20–30 minutes — roughly a 90% reduction — with faster, more consistent insight to ownership.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Automate the reporting, not the judgement — the value is the time it hands back for strategy.',
  },
  {
    id: 'ramadan-campaign',
    title: 'Ramadan, Sold Out',
    category: 'Campaigns',
    year: '2024',
    match: '95',
    stat: '2,200+',
    maturity: 'Campaign',
    duration: 'Seasonal',
    role: 'Cluster Marketing Coordinator — Sharjah National Hotels',
    logline: 'One season, four properties, 2,200+ qualified enquiries — how a single campaign sold them out.',
    summary:
      'Led the group’s Ramadan digital campaign across four hospitality properties, generating 2,200+ qualified enquiries through coordinated Meta, Google and CRM activation.',
    tags: ['Campaign Strategy', 'Meta', 'Google', 'CRM', 'Seasonal Demand'],
    poster: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}city.mp4`,
    impact: [
      { k: '2,200+', v: 'Qualified enquiries' },
      { k: '4', v: 'Hospitality properties' },
      { k: '15+', v: 'Influencer & UGC collaborations' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'Drive a concentrated burst of seasonal demand across four distinct properties within a tight Ramadan window.' },
      { h: 'The strategy', p: 'A coordinated always-on and campaign push spanning Meta, Google and CRM, amplified by influencer and UGC collaboration.' },
      { h: 'The execution', p: 'Managed the cross-property campaign end to end and coordinated 15+ influencer/UGC partners plus co-marketing with regional brands.' },
      { h: 'The result', p: '2,200+ qualified enquiries generated across the four properties from a single seasonal campaign.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Seasonal demand rewards coordination — paid, organic and CRM firing together beat any single channel.',
  },
  {
    id: 'corporate-distribution',
    title: 'The Fortune 500 Door',
    category: 'Distribution',
    year: '2025',
    match: '94',
    stat: 'F500',
    maturity: 'B2B',
    duration: '2025',
    role: 'Commercial Marketing & OTA Manager — Durrani Group',
    logline: 'How a holiday-home portfolio landed on the travel desks of Fortune 500 companies.',
    summary:
      'Expanded corporate distribution by onboarding SilverDoor and AltoVita — connecting the portfolio to global corporate travel networks that serve Fortune 500 organisations.',
    tags: ['B2B Distribution', 'Corporate Travel', 'Partnerships', 'Wholesale'],
    poster: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}automation.mp4`,
    impact: [
      { k: '2', v: 'Corporate networks onboarded (SilverDoor, AltoVita)' },
      { k: 'Fortune 500', v: 'Client organisations reachable' },
      { k: '8+', v: 'Global OTA & wholesale channels managed' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'Diversify demand beyond leisure OTAs into steadier, higher-value corporate travel.' },
      { h: 'The strategy', p: 'Target corporate housing aggregators that plug the portfolio into global business-travel demand.' },
      { h: 'The execution', p: 'Onboarded SilverDoor and AltoVita and integrated them into the wider channel mix alongside Booking.com, Airbnb, Expedia, Agoda, Hotelbeds, WebBeds, Dnata and Amadeus.' },
      { h: 'The result', p: 'New access to global corporate travel networks serving Fortune 500 organisations, broadening and stabilising the demand base.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'The right distribution partner is a growth channel — corporate networks bring demand leisure channels can’t.',
  },
]

/* -------- 5. ROWS (Netflix shelves — project-based) -------- */
export const rows = [
  { label: 'Continue Exploring My Career', kind: 'continue', filter: (p) => ['direct-revenue-4x', 'occupancy-engine', 'acquisition-efficiency'].includes(p.id) },
  { label: 'Revenue & Commercial Growth', kind: 'poster', filter: (p) => ['Commercial Growth', 'Revenue & Distribution', 'Distribution'].includes(p.category) },
  { label: 'Marketing & Performance', kind: 'poster', filter: (p) => ['Customer Acquisition', 'Campaigns'].includes(p.category) },
  { label: 'Automation & AI Systems', kind: 'poster', filter: (p) => p.category === 'AI & Automation' },
  { label: 'Currently Building', kind: 'poster', filter: (p) => p.year === '2025' },
]

/* Ranked list for the Top 10 row (by impact) */
export const topTen = ['direct-revenue-4x', 'occupancy-engine', 'acquisition-efficiency', 'ramadan-campaign', 'ai-reporting-automation', 'corporate-distribution']

/* -------- 6. CAPABILITIES ("What I bring") — outcome-led --------
   Each answers: what you achieve (outcomes), what I can do (capabilities),
   what I use (platforms). All CV-true.
*/
export const skillCollections = [
  {
    name: 'Commercial & Revenue',
    headline: 'Grow revenue, protect margin, scale commercial strategy.',
    blurb: 'Grow revenue, protect margin, scale commercial strategy.',
    outcomes: ['Increase revenue', 'Reduce OTA dependence', 'Improve occupancy', 'Protect margin'],
    capabilities: ['Revenue growth strategy', 'Revenue management', 'Pricing & dynamic pricing', 'Occupancy optimisation', 'Forecasting & demand planning', 'Distribution strategy', 'Corporate partnerships', 'Direct booking growth', 'Budget planning', 'Portfolio performance', 'KPI development', 'Executive reporting'],
    platforms: ['Booking.com', 'Airbnb', 'Expedia', 'Agoda', 'PriceLabs', 'SiteMinder'],
    items: ['Revenue growth', 'Revenue management', 'Dynamic pricing', 'Occupancy optimisation', 'Distribution strategy', 'Executive reporting'],
  },
  {
    name: 'Marketing & Growth',
    headline: 'Generate demand, cut acquisition cost, scale predictable growth.',
    blurb: 'Generate demand, cut acquisition cost, scale predictable growth.',
    outcomes: ['Generate qualified leads', 'Reduce acquisition cost', 'Improve ROAS', 'Higher conversion'],
    capabilities: ['Google Ads (Search, Demand Gen)', 'Meta Ads', 'SEM', 'SEO', 'CRO', 'Landing page optimisation', 'Performance marketing', 'Demand & lead generation', 'Funnel optimisation', 'Campaign planning & scaling', 'Audience segmentation', 'A/B testing', 'Attribution modelling', 'Budget management', 'Email marketing', 'Marketing analytics'],
    platforms: ['Google Ads', 'Meta Business Suite', 'GA4', 'Tag Manager', 'HubSpot'],
    items: ['Google Ads', 'Meta Ads', 'SEO', 'CRO', 'Demand generation', 'Marketing analytics'],
  },
  {
    name: 'CRM & Lifecycle',
    headline: 'Turn prospects into long-term customers.',
    blurb: 'Turn prospects into long-term customers.',
    outcomes: ['Convert more leads', 'Retain customers', 'Automate follow-up'],
    capabilities: ['Lead scoring', 'Lead qualification', 'Sales pipeline design', 'Lifecycle automation', 'WhatsApp automation', 'Email nurturing', 'Customer segmentation', 'Retention campaigns', 'SLA workflows', 'Task & workflow automation', 'Process mapping'],
    platforms: ['HubSpot', 'Zoho CRM', 'WhatsApp Business', 'Monday.com'],
    items: ['Lead scoring', 'Sales pipelines', 'Lifecycle automation', 'WhatsApp automation', 'Email nurturing', 'Retention'],
  },
  {
    name: 'Analytics & Reporting',
    headline: 'Turn business data into executive decisions.',
    blurb: 'Turn business data into executive decisions.',
    outcomes: ['Faster decisions', 'Automated reporting', 'Revenue attribution'],
    capabilities: ['Executive dashboards', 'Business intelligence', 'Marketing & revenue analytics', 'Funnel & attribution analysis', 'KPI reporting', 'Automated reporting', 'Data visualisation', 'Forecasting', 'Trend & cohort analysis', 'Decision support'],
    platforms: ['GA4', 'Looker Studio', 'Tag Manager', 'Microsoft Clarity', 'Sheets / Excel'],
    items: ['Executive dashboards', 'GA4 & attribution', 'KPI reporting', 'Forecasting', 'Data visualisation', 'Automated reporting'],
  },
  {
    name: 'AI & Automation',
    headline: 'Eliminate repetitive work. Scale operations with AI.',
    blurb: 'Eliminate repetitive work. Scale operations with AI.',
    outcomes: ['Save hundreds of hours', 'Automate reporting', 'Scale ops without headcount'],
    capabilities: ['AI workflow design', 'AI reporting automation', 'AI content operations', 'Prompt engineering', 'Workflow & process automation', 'Business process automation', 'CRM & marketing automation', 'API integrations', 'Data pipelines'],
    platforms: ['Claude', 'ChatGPT', 'Gemini', 'GitHub Copilot', 'n8n'],
    items: ['AI workflow design', 'AI reporting', 'Prompt engineering', 'Process automation', 'CRM automation', 'API integrations'],
  },
  {
    name: 'Leadership & Operations',
    headline: 'Build teams, systems and processes that scale.',
    blurb: 'Build teams, systems and processes that scale.',
    outcomes: ['Lead cross-functional teams', 'Standardise operations', 'Drive transformation'],
    capabilities: ['Cross-functional leadership (9-member team)', 'Strategic planning', 'Stakeholder management', 'Vendor & agency management', 'Process improvement', 'SOPs & documentation', 'Change management', 'Budget ownership', 'Executive communication', 'Decision-making'],
    platforms: ['Monday.com', 'ClickUp', 'Google Workspace'],
    items: ['Team leadership', 'Strategic planning', 'Stakeholder management', 'Process improvement', 'Vendor management', 'Executive communication'],
  },
]

/* -------- CAPABILITY ROWS (home middle section) --------
   Netflix rows of capability cards — what Anika brings in each domain.
   No metrics / case-study names here (those live on Projects & Achievements).
   img = themed thumbnail (Unsplash placeholder, swap freely).
*/
const CIMG = {
  revenue: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  charts: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80',
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  meeting: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  resort: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
  dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  ads: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
  data: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=80',
  analytics: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  strategy: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  creative: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  ai2: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
  code: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
}

export const capabilityRows = [
  {
    label: 'Commercial & Revenue',
    cards: [
      { title: 'Revenue Strategy', img: CIMG.revenue, value: 'Build commercially focused strategies that grow revenue while protecting profitability.', skills: ['Revenue growth strategy', 'Commercial planning', 'Revenue management', 'Budget planning', 'Profitability improvement', 'Margin protection', 'Portfolio performance', 'Executive KPI management'] },
      { title: 'Pricing & Forecasting', img: CIMG.charts, value: 'Improve pricing decisions using demand, market, occupancy and performance data.', skills: ['Pricing strategy', 'Dynamic pricing', 'Demand forecasting', 'Revenue forecasting', 'Occupancy forecasting', 'Market analysis', 'Competitor benchmarking', 'Seasonal planning'] },
      { title: 'Distribution & Channels', img: CIMG.hotel, value: 'Build a balanced distribution mix that improves visibility, conversion and margins.', skills: ['Distribution strategy', 'OTA optimisation', 'Channel mix optimisation', 'Rate parity', 'Listing optimisation', 'Availability management', 'Direct booking growth', 'Channel performance analysis'], platforms: ['Booking.com', 'Airbnb', 'Expedia', 'Agoda', 'SiteMinder', 'PriceLabs', 'PMS platforms'] },
      { title: 'Business Development', img: CIMG.meeting, value: 'Develop new commercial channels, strategic partnerships and revenue opportunities.', skills: ['Corporate partnerships', 'B2B partnerships', 'Agency partnerships', 'Account development', 'Market expansion', 'Partnership strategy', 'Commercial negotiations', 'Relationship management'] },
      { title: 'Hospitality Commercial Ops', img: CIMG.resort, value: 'Connect commercial strategy with hospitality operations and property performance.', skills: ['Occupancy optimisation', 'Yield management', 'Property performance', 'Booking conversion', 'Guest demand analysis', 'Inventory strategy', 'Corporate bookings', 'Hospitality revenue operations'] },
      { title: 'Executive Commercial Reporting', img: CIMG.dashboard, value: 'Give leadership clear visibility into revenue, risk, performance and future demand.', skills: ['Commercial dashboards', 'Revenue analysis', 'Forecast reporting', 'Budget tracking', 'Performance reviews', 'Variance analysis', 'Decision-support reporting', 'Management presentations'] },
    ],
  },
  {
    label: 'Marketing & Growth',
    cards: [
      { title: 'Paid Search', img: CIMG.ads, value: 'Generate qualified demand through tightly controlled, conversion-focused paid search.', skills: ['Google Ads', 'Microsoft Ads', 'Search campaign strategy', 'Keyword research', 'Ad group architecture', 'Search term optimisation', 'Negative keyword management', 'Bid strategy', 'Budget allocation', 'Ad copy testing', 'Conversion tracking', 'Lead-quality optimisation'], platforms: ['Google Ads', 'Microsoft Advertising', 'Keyword Planner', 'Tag Manager'] },
      { title: 'Paid Social', img: CIMG.data, value: 'Build targeted paid-social campaigns that support awareness, lead generation and remarketing.', skills: ['Meta Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Audience targeting', 'Retargeting', 'Lookalike audiences', 'Creative testing', 'Campaign scaling', 'Lead-generation campaigns', 'Funnel segmentation', 'Paid social reporting'], platforms: ['Meta Business Suite', 'Meta Ads Manager', 'LinkedIn Campaign Manager'] },
      { title: 'SEO', img: CIMG.analytics, value: 'Improve organic visibility by aligning content, structure and technical performance with search demand.', skills: ['Search engine optimisation', 'Technical SEO', 'On-page SEO', 'Local SEO', 'Keyword strategy', 'Search intent mapping', 'Internal linking', 'Metadata optimisation', 'Content optimisation', 'Indexing management', 'Search visibility analysis', 'Competitor SEO analysis'], platforms: ['Search Console', 'GA4', 'Ahrefs', 'SEMrush', 'Screaming Frog'] },
      { title: 'Performance Marketing', img: CIMG.charts, value: 'Build measurable marketing systems focused on profitable acquisition rather than vanity metrics.', skills: ['Full-funnel strategy', 'Customer acquisition', 'Demand generation', 'Lead generation', 'Campaign optimisation', 'Budget management', 'ROAS optimisation', 'CAC reduction', 'Conversion-rate optimisation', 'Attribution analysis', 'Performance forecasting', 'Growth experimentation'] },
      { title: 'Conversion Optimisation', img: CIMG.dashboard, value: 'Turn more existing traffic into qualified leads and customers.', skills: ['Landing-page optimisation', 'Conversion-rate optimisation', 'A/B testing', 'Form optimisation', 'CTA optimisation', 'Funnel analysis', 'User-journey analysis', 'Lead-friction reduction', 'Mobile conversion improvement', 'Message testing', 'Offer testing', 'Behaviour analysis'], platforms: ['GA4', 'Microsoft Clarity', 'Tag Manager'] },
      { title: 'Marketing Strategy', img: CIMG.strategy, value: 'Translate business objectives into structured, cross-channel marketing plans.', skills: ['Marketing planning', 'Go-to-market strategy', 'Audience segmentation', 'Positioning', 'Campaign planning', 'Channel strategy', 'Budget planning', 'Growth roadmaps', 'Customer journey mapping', 'Competitive analysis', 'Brand-development strategy', 'Integrated marketing'] },
      { title: 'Content & Brand', img: CIMG.creative, value: 'Create consistent messaging and content systems that strengthen brand perception and support conversion.', skills: ['Content strategy', 'Social media strategy', 'Campaign messaging', 'Brand positioning', 'Creative direction', 'Editorial planning', 'Short-form content', 'Website content', 'Sales-support content', 'Employer branding', 'Brand consistency', 'Content performance analysis'], platforms: ['Canva', 'Adobe Express', 'Meta Business Suite', 'CMS platforms'] },
      { title: 'Email & Lifecycle', img: CIMG.data, value: 'Move prospects and customers through structured communication journeys.', skills: ['Email marketing', 'Lead nurturing', 'Drip campaigns', 'Customer segmentation', 'Lifecycle campaigns', 'Retention campaigns', 'Re-engagement', 'Personalisation', 'Triggered communication', 'Campaign automation', 'Email performance analysis', 'Customer journey design'], platforms: ['HubSpot', 'Mailchimp', 'Brevo', 'Respond.io'] },
      { title: 'Marketing Analytics', img: CIMG.analytics, value: 'Turn campaign and customer data into clear optimisation decisions.', skills: ['GA4', 'Attribution analysis', 'Campaign reporting', 'Funnel reporting', 'Conversion tracking', 'Lead-source analysis', 'Channel comparison', 'Customer-acquisition analysis', 'Marketing dashboards', 'Budget pacing', 'Performance insights', 'Executive reporting'], platforms: ['GA4', 'Looker Studio', 'Tag Manager', 'Search Console', 'Microsoft Clarity'] },
      { title: 'CRM-Connected Marketing', img: CIMG.strategy, value: 'Connect marketing activity to lead quality, pipeline movement and revenue.', skills: ['Lead tracking', 'Source attribution', 'Campaign-to-pipeline reporting', 'Lead qualification', 'Lifecycle automation', 'Sales & marketing alignment', 'Follow-up workflows', 'Lead scoring', 'Pipeline visibility', 'CRM campaign integration', 'WhatsApp lead handling', 'Email nurturing'], platforms: ['Monday.com', 'HubSpot CRM', 'Respond.io', 'WhatsApp Business'] },
    ],
  },
  {
    label: 'Automation & Systems',
    cards: [
      { title: 'AI Workflow Automation', img: CIMG.ai, value: 'Replace repetitive manual work with reliable AI-assisted workflows.', skills: ['AI workflow design', 'Business process automation', 'AI agents', 'Task orchestration', 'Human-in-the-loop workflows', 'Decision automation', 'Repetitive-task elimination', 'Workflow optimisation', 'AI-assisted operations', 'Process scaling'] },
      { title: 'AI Tools & Platforms', img: CIMG.ai2, value: 'Select and apply the right AI tools to real business processes rather than using AI as a novelty.', skills: ['Claude', 'Claude Code', 'ChatGPT', 'OpenAI API', 'Codex', 'GitHub Copilot', 'Microsoft Copilot', 'Gemini', 'Prompt engineering', 'AI tool evaluation'] },
      { title: 'Marketing Automation', img: CIMG.code, value: 'Reduce execution time and improve consistency across marketing operations.', skills: ['Campaign automation', 'Lead-routing automation', 'Reporting automation', 'Content workflow automation', 'Email automation', 'Audience workflow automation', 'Conversion monitoring', 'Performance alerts', 'Data synchronisation', 'Marketing operations automation'] },
      { title: 'CRM Systems', img: CIMG.strategy, value: 'Build structured CRM systems that improve lead handling, accountability and conversion.', skills: ['CRM architecture', 'Lead register design', 'Qualification workflows', 'Lead scoring', 'Pipeline design', 'Opportunity management', 'Follow-up automation', 'SLA logic', 'Business rules', 'Customer lifecycle systems', 'Workflow governance', 'Reporting structures'], platforms: ['Monday.com', 'HubSpot', 'Respond.io', 'WhatsApp Business', 'Google Workspace'] },
      { title: 'Reporting Automation', img: CIMG.dashboard, value: 'Turn fragmented data into dependable, repeatable management reporting.', skills: ['Automated data extraction', 'KPI calculation', 'Dashboard automation', 'Scheduled reporting', 'Data validation', 'Management reporting', 'Excel report generation', 'Structured datasets', 'Trend analysis', 'Error diagnostics', 'Deterministic reporting', 'Executive summaries'], platforms: ['Python', 'Excel', 'Google Sheets', 'Looker Studio', 'GA4', 'Google Ads API'] },
      { title: 'Process & Operations Systems', img: CIMG.creative, value: 'Convert informal ways of working into scalable, documented operating systems.', skills: ['Process mapping', 'SOP development', 'Workflow design', 'Operational governance', 'Approval logic', 'Quality controls', 'Exception handling', 'Standardisation', 'Documentation systems', 'Cross-functional workflows', 'Risk reduction', 'Continuous improvement'] },
      { title: 'API & Systems Integration', img: CIMG.code, value: 'Connect business tools so information moves accurately between systems.', skills: ['REST APIs', 'JSON', 'Webhooks', 'Data transfer workflows', 'Platform integration', 'Authentication flows', 'API-based reporting', 'System synchronisation', 'Error handling', 'Structured automation', 'Data mapping', 'Integration documentation'] },
      { title: 'Python & Technical Automation', img: CIMG.data, value: 'Build practical technical tools that reduce manual effort and improve data reliability.', skills: ['Python automation', 'Data processing', 'Report generation', 'File automation', 'API clients', 'Validation systems', 'Command-line tools', 'Testing', 'Git workflows', 'Structured logging', 'Error handling', 'Offline processing'], platforms: ['Python', 'Git', 'GitHub', 'VS Code', 'OpenPyXL', 'REST APIs'] },
      { title: 'AI-Assisted Development', img: CIMG.ai2, value: 'Accelerate development while maintaining structure, testing and governance.', skills: ['Claude Code', 'Codex', 'GitHub Copilot', 'Prompt-driven development', 'Code review', 'Test generation', 'Documentation', 'Debugging', 'Refactoring', 'Architecture planning', 'Repository analysis', 'Development automation'] },
      { title: 'Knowledge & Documentation', img: CIMG.strategy, value: 'Preserve operational knowledge and reduce dependence on individual employees.', skills: ['Knowledge-base design', 'SOP libraries', 'Business-rule catalogues', 'Technical documentation', 'Process documentation', 'AI-assisted documentation', 'Structured handovers', 'Decision logs', 'Governance registers', 'Training documentation', 'Searchable knowledge systems', 'Version control'] },
    ],
  },
  {
    label: 'Hospitality Distribution',
    cards: [
      { title: 'Direct Booking Growth', img: CIMG.revenue, value: 'Shift demand away from OTAs into profitable direct channels.', skills: ['Direct booking strategy', 'Booking funnel optimisation', 'Rate parity', 'Promotions', 'Guest loyalty', 'Conversion'], platforms: ['Website', 'Google Hotel Ads', 'Meta'] },
      { title: 'OTA Strategy', img: CIMG.hotel, value: 'Maximise visibility and margin across every OTA.', skills: ['OTA account management', 'Listing optimisation', 'Ranking', 'Content', 'Promotions', 'Reviews'], platforms: ['Booking.com', 'Airbnb', 'Expedia', 'Agoda', 'Trip.com'] },
      { title: 'Channel Management', img: CIMG.dashboard, value: 'Keep rates, availability and inventory in sync everywhere.', skills: ['Channel manager ops', 'Availability', 'Rate distribution', 'Inventory control', 'Overbooking prevention'], platforms: ['SiteMinder', 'PriceLabs', 'Hostaway', 'Guesty'] },
      { title: 'Revenue Management', img: CIMG.charts, value: 'The right price, for the right room, at the right time.', skills: ['Dynamic pricing', 'Demand forecasting', 'Occupancy optimisation', 'Yield management', 'Competitor benchmarking', 'Seasonal strategy'] },
      { title: 'Corporate & B2B Sales', img: CIMG.meeting, value: 'Open steady, high-value corporate demand.', skills: ['Corporate partnerships', 'B2B wholesale', 'Account development', 'Commercial negotiations', 'Corporate housing networks'], platforms: ['SilverDoor', 'AltoVita', 'Hotelbeds', 'WebBeds', 'Amadeus'] },
      { title: 'Distribution & Acquisition', img: CIMG.resort, value: 'Design the whole distribution mix and grow the portfolio.', skills: ['Distribution strategy', 'Channel mix', 'Market analysis', 'Property acquisition', 'Portfolio performance', 'D2C growth'] },
    ],
  },
  {
    label: 'Software Development',
    cards: [
      { title: 'CRM Systems', img: CIMG.strategy, value: 'Structured CRMs that convert and never drop a lead.', skills: ['CRM architecture', 'Lead register design', 'Sales pipelines', 'Lead scoring', 'SLA workflows', 'Reporting'], platforms: ['Monday.com', 'HubSpot', 'Zoho CRM', 'Respond.io'] },
      { title: 'Workflow Automation', img: CIMG.code, value: 'Automate the busywork, end to end.', skills: ['Process automation', 'Lead routing', 'Notifications', 'Data sync', 'Approvals', 'Business rules'], platforms: ['n8n', 'Make', 'Zapier'] },
      { title: 'AI Agents & Claude Code', img: CIMG.ai, value: 'Build and ship with AI in the loop.', skills: ['AI workflow design', 'Prompt engineering', 'AI agents', 'Code review', 'Test generation', 'Documentation'], platforms: ['Claude', 'Claude Code', 'ChatGPT', 'GitHub Copilot', 'Gemini'] },
      { title: 'API & Integrations', img: CIMG.code, value: 'Make business tools talk to each other reliably.', skills: ['REST APIs', 'JSON', 'Webhooks', 'Auth flows', 'Data mapping', 'Error handling'] },
      { title: 'Dashboards & Reporting', img: CIMG.dashboard, value: 'Turn scattered data into decisions.', skills: ['Executive dashboards', 'KPI reporting', 'Automated reporting', 'Data visualisation', 'Forecasting'], platforms: ['Looker Studio', 'GA4', 'Sheets', 'Excel'] },
      { title: 'Web Development', img: CIMG.data, value: 'Modern, fast, cinematic front-ends — like this site.', skills: ['React', 'Vite', 'Responsive UI', 'Motion design', 'Performance', 'Deployment'], platforms: ['React', 'Vite', 'GitHub', 'GitHub Pages'] },
    ],
  },
]

/* -------- TOOLS & PLATFORMS (from CV Technical Skills) -------- */
export const tools = [
  { group: 'Performance Marketing', items: ['Google Ads (Search, Demand Gen)', 'Meta Ads Manager', 'Meta Business Suite'] },
  { group: 'Analytics', items: ['Google Analytics 4', 'Google Tag Manager', 'Looker Studio', 'Microsoft Clarity'] },
  { group: 'OTA / Distribution', items: ['Booking.com', 'Airbnb', 'Expedia', 'Agoda', 'Trip.com', 'Hotelbeds', 'WebBeds', 'Dnata', 'Amadeus'] },
  { group: 'Revenue & PMS', items: ['PriceLabs', 'SiteMinder', 'Oracle OPERA / Micros', 'Guesty', 'Hostaway', 'Hostify'] },
  { group: 'CRM', items: ['HubSpot', 'Zoho CRM', 'WhatsApp Business', 'Meta Lead Forms'] },
  { group: 'AI & Automation', items: ['Claude', 'ChatGPT', 'Gemini', 'GitHub Copilot', 'n8n'] },
  { group: 'Design & Video', items: ['Canva', 'Photoshop', 'Illustrator', 'Lightroom', 'Premiere Pro', 'CapCut', 'Figma'] },
  { group: 'Project Management', items: ['ClickUp', 'Monday.com'] },
]

/* -------- 7. SEASONS (career, chronological) --------
   Presented as a documentary "series". Each season = a chapter of the arc;
   flagship episodes link to their full case study (to) and carry a headline
   stat. All CV-true. */
export const seasons = [
  {
    season: 1,
    theme: 'The Foundations',
    title: 'Co-Founder',
    org: 'Marketing Monkey',
    place: 'India',
    period: 'Jun 2019 – Jun 2020',
    logline: 'Where it began — building a marketing consultancy from zero.',
    art: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    episodes: [
      { n: 1, title: 'Zero to One', desc: 'Co-founded a marketing consultancy serving SMBs, owning end-to-end client delivery from acquisition to execution.' },
      { n: 2, title: 'Full-Stack Marketing', desc: 'Oversaw branding, digital marketing, operations and client relationship management.' },
      { n: 3, title: 'Building the Machine', desc: 'Built the internal workflows and service-delivery processes for the launch phase.' },
    ],
  },
  {
    season: 2,
    theme: 'Hospitality, Commercially',
    title: 'Business Development & Marketing Executive',
    org: 'Hystay Living',
    place: 'India',
    period: 'Jun 2020 – Jan 2021',
    logline: 'Selling and marketing hospitality across B2B and B2C.',
    art: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    episodes: [
      { n: 1, title: 'Enterprise Relationships', desc: 'Developed relationships with corporate clients, travel agencies, airlines and government organisations.' },
      { n: 2, title: 'Sales × Marketing', desc: 'Combined sales and digital marketing initiatives to support occupancy and revenue growth.' },
      { n: 3, title: 'Market Intelligence', desc: 'Ran Google Ads, social media, and competitor & pricing research to steer commercial strategy.' },
    ],
  },
  {
    season: 3,
    theme: 'The Performance Craft',
    title: 'Performance Marketing Executive',
    org: 'Vb Groups',
    place: 'United Arab Emirates',
    period: 'Mar 2021 – Feb 2022',
    logline: 'Sharpening the performance-marketing craft.',
    art: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
    episodes: [
      { n: 1, title: 'Paid at Scale', desc: 'Managed Google Ads across multiple business verticals from planning through optimisation and reporting.' },
      { n: 2, title: '25+ Campaigns', desc: 'Planned and executed 25+ campaigns across paid search, SEO and social media.', stat: '25+' },
      { n: 3, title: 'Executive Reporting', desc: 'Produced performance reports informing monthly budget and creative decisions.' },
    ],
  },
  {
    season: 4,
    theme: 'Marketing at Scale',
    title: 'Cluster Marketing Coordinator',
    org: 'Sharjah National Hotels',
    place: 'Sharjah, UAE',
    period: 'Mar 2022 – Nov 2025',
    logline: 'Four hotels, always-on demand, standout seasonal campaigns.',
    art: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    episodes: [
      { n: 1, title: 'The Ramadan Campaign', desc: 'Led the group’s Ramadan digital campaign — 2,200+ qualified enquiries across four properties.', stat: '2,200+', to: '/projects/ramadan-campaign' },
      { n: 2, title: 'Always-On, Four Hotels', desc: 'Managed always-on digital marketing across four hotels spanning Meta, Google and CRM.', stat: '4 hotels' },
      { n: 3, title: 'Influence & Partnerships', desc: 'Coordinated 15+ influencer/UGC collaborations and negotiated co-marketing with Zomato, Sharaf DG, TravelPass and Travel Trends Magazine.', stat: '15+' },
      { n: 4, title: '50+ a Year', desc: 'Executed 50+ digital campaigns annually across the hospitality brands.', stat: '50+/yr' },
    ],
  },
  {
    season: 5,
    theme: 'Commercial Growth & Systems',
    title: 'Commercial Marketing & OTA Manager',
    org: 'Durrani Group',
    place: 'Dubai, UAE',
    period: 'Nov 2025 – Present',
    logline: 'Acting Marketing Manager — commercial growth across a four-company group.',
    art: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    episodes: [
      { n: 1, title: 'Leading the Team', desc: 'Manage a nine-member marketing, OTA, reservations and content team across four business units.', stat: '9' },
      { n: 2, title: 'The Revenue Transformation', desc: 'Grew direct booking revenue 4× (AED 40K → 160K/mo) and lifted direct contribution 5% → 16%.', stat: '4×', to: '/projects/direct-revenue-4x' },
      { n: 3, title: 'The Occupancy Engine', desc: 'Raised average annual occupancy 50% → 79% across an 80+ unit portfolio via pricing, listings and channel expansion.', stat: '50→79%', to: '/projects/occupancy-engine' },
      { n: 4, title: 'Acquisition Cost Halved', desc: 'Cut cost per qualified lead 60% while quadrupling qualified demand to 190/month.', stat: '−60%', to: '/projects/acquisition-efficiency' },
      { n: 5, title: 'The Self-Writing Report', desc: 'Automated weekly reporting with n8n, Claude and Gemini — ~90% less effort.', stat: '~90%', to: '/projects/ai-reporting-automation' },
      { n: 6, title: 'The Fortune 500 Door', desc: 'Opened corporate distribution via SilverDoor and AltoVita — access to Fortune 500 corporate-travel networks.', stat: 'F500', to: '/projects/corporate-distribution' },
    ],
  },
]

/* Series-level framing for the Career page. */
export const seriesMeta = {
  title: 'The Career',
  tagline: 'From a marketing consultancy in India to commercial growth leadership in Dubai — six years, five chapters, one throughline: turning marketing into measurable revenue.',
  seasonsLabel: '5 Chapters',
  spanLabel: '2019 — Present',
}

/* -------- 8. CERTIFICATIONS -------- */
export const certifications = [
  { provider: 'Google', items: ['Ads Search', 'Ads Display', 'Ads Video', 'Ads Measurement', 'Analytics 4 (GA4)', 'Tag Manager', 'Looker Studio'] },
  { provider: 'HubSpot', items: ['Inbound Marketing', 'Digital Marketing', 'Content Marketing', 'Social Media', 'Email Marketing', 'SEO', 'AI for Marketing', 'Revenue Operations'] },
  { provider: 'Meta, SEO & Analytics', items: ['Meta Blueprint', 'SEMrush SEO Fundamentals', 'SEMrush Technical SEO', 'Ahrefs SEO', 'Microsoft Clarity'] },
  { provider: 'Hospitality & Distribution', items: ['Booking.com Partner Academy', 'PriceLabs University', 'SiteMinder Learning Hub'] },
  { provider: 'AI & Automation', items: ['n8n Fundamentals', 'Microsoft AI Skills Challenge'] },
  { provider: 'In Progress', items: ['Diploma in Generative AI Prompt Engineering & Neuro Marketing — The Knowledge Academy, Copenhagen (expected 2026)'] },
]

/* -------- 9. STATS (About counters) -------- */
export const stats = [
  { value: 4, suffix: '×', label: 'Direct booking revenue growth' },
  { value: 79, suffix: '%', label: 'Average annual occupancy' },
  { value: 60, suffix: '%', label: 'Lower cost per lead' },
  { value: 80, suffix: '+', label: 'Units in the portfolio' },
]

/* -------- 10. EDUCATION & LANGUAGES -------- */
export const education = {
  degree: 'Bachelor’s Degree in Tourism Studies',
  school: 'Indira Gandhi National Open University (IGNOU), New Delhi, India',
  period: '2018 – 2022',
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Punjabi', level: 'Conversational' },
    { name: 'Russian', level: 'Basic' },
  ],
  extra: 'Valid UAE driving licence',
}

/* -------- HIRE ME -------- */
export const hireMe = {
  valueProp:
    'A commercial growth leader who owns the full revenue engine — pricing and OTA distribution, paid acquisition, CRM and AI-enabled marketing operations — with a track record of quadrupling direct revenue and lifting occupancy across an 80+ unit portfolio.',
  targetRoles: [
    'Commercial / Growth Marketing Manager',
    'Revenue & Distribution Manager',
    'Head of Performance Marketing',
    'Marketing Operations Lead',
    'Digital / E-commerce Manager (Hospitality & Travel)',
  ],
  industries: ['Hospitality', 'Travel', 'Real Estate', 'Holiday Homes / Short-stay'],
  location: 'Dubai, United Arab Emirates',
  arrangement: 'On-site · Hybrid · Open to relocation',
  strengths: [
    'Direct revenue growth & OTA distribution strategy',
    'Paid acquisition efficiency (Google & Meta)',
    'AI-enabled marketing operations & reporting automation',
    'Leading cross-functional marketing teams',
  ],
}

/* -------- ASK ANIKA — grounded knowledge base (no LLM, no invention) --------
   Deterministic Q&A. Each entry answers from real CV data and cites a section.
*/
export const askAnika = {
  intro: 'Ask about Anika’s experience, results, industries, tools or fit. Answers come only from her CV.',
  suggestions: [
    'What revenue impact has Anika delivered?',
    'What industries has she worked in?',
    'What is her leadership experience?',
    'What marketing platforms does she use?',
    'What are her strongest achievements?',
    'Which roles is she suited for?',
    'Show projects related to automation.',
    'Summarise her hospitality experience.',
  ],
  // keyword-matched intents → grounded answer + citation (route)
  intents: [
    {
      match: ['revenue', 'impact', 'money', 'aed', 'sales', 'roas', 'return'],
      answer:
        'Anika grew direct booking revenue 4× — from AED 40K to AED 160K per month (AED 1.4M+ annualised incremental) — lifting direct contribution from 5% to 16% and cutting OTA commission dependency by 11 points. She also cut cost per qualified lead by 60% while quadrupling qualified demand.',
      cite: 'Achievements',
      route: '/achievements',
    },
    {
      match: ['industry', 'industries', 'sector', 'hospitality', 'travel', 'real estate', 'hotel'],
      answer:
        'Anika works across hospitality, travel and real estate in the UAE — an 80+ unit holiday-home portfolio and a four-company group (holiday homes, facility services, real estate, construction, transportation), plus prior hotel groups in Sharjah and hospitality in India.',
      cite: 'Professional',
      route: '/professional',
    },
    {
      match: ['leadership', 'team', 'manage', 'lead', 'people'],
      answer:
        'As Acting Marketing Manager at Durrani Group she leads a nine-member cross-functional team (marketing, OTA, reservations and content) across four business units, allocating workloads and approving campaign launches.',
      cite: 'Professional',
      route: '/professional',
    },
    {
      match: ['platform', 'tool', 'software', 'stack', 'google', 'meta', 'ota', 'crm', 'ga4'],
      answer:
        'Platforms include Google Ads (Search, Demand Gen), Meta Ads, GA4, Tag Manager, Looker Studio; OTA/distribution: Booking.com, Airbnb, Expedia, Agoda, Hotelbeds, WebBeds, Dnata, Amadeus, PriceLabs, SiteMinder; CRM: HubSpot, Zoho, WhatsApp Business; AI/automation: Claude, ChatGPT, Gemini, n8n.',
      cite: 'Skills',
      route: '/skills',
    },
    {
      match: ['achievement', 'best', 'strongest', 'top', 'win', 'result'],
      answer:
        'Top wins: 4× direct booking revenue; average occupancy up 50% → 79% (peaks at 100%) across 80+ units; −60% cost per qualified lead with 4× the demand; ~90% less weekly reporting effort via AI automation; direct contribution +11 points; leading a 9-person team.',
      cite: 'Achievements',
      route: '/achievements',
    },
    {
      match: ['role', 'suited', 'fit', 'hire', 'position', 'job'],
      answer:
        'Anika suits Commercial/Growth Marketing Manager, Revenue & Distribution Manager, Head of Performance Marketing, Marketing Operations Lead, or Digital/E-commerce Manager roles in hospitality and travel. Based in Dubai; on-site, hybrid or open to relocation.',
      cite: 'Hire Me',
      route: '/hire-me',
    },
    {
      match: ['automation', 'ai', 'n8n', 'workflow', 'report'],
      answer:
        'Her automation work: AI-assisted reporting and workflow automation with n8n, Claude and Gemini cut weekly campaign reporting from 4–5 hours to 20–30 minutes (~90% reduction). See the “Self-Writing Report” project.',
      cite: 'Projects',
      route: '/projects/ai-reporting-automation',
    },
    {
      match: ['occupancy', 'distribution', 'pricing', 'channel', 'parity'],
      answer:
        'Anika raised average annual occupancy from 50% to 79% (peaks at 100%) across an 80+ unit portfolio through dynamic pricing, listing optimisation and channel expansion across every major OTA and global B2B wholesale network. See the “Occupancy Engine” project.',
      cite: 'Projects',
      route: '/projects/occupancy-engine',
    },
    {
      match: ['education', 'degree', 'study', 'university', 'qualification'],
      answer:
        'Anika holds a Bachelor’s Degree in Tourism Studies from IGNOU, New Delhi (2018–2022), and is completing a Diploma in Generative AI Prompt Engineering & Neuro Marketing (The Knowledge Academy, Copenhagen, expected 2026).',
      cite: 'Resume',
      route: '/resume',
    },
    {
      match: ['language', 'speak', 'languages'],
      answer:
        'Languages: English (Fluent), Hindi (Native), Punjabi (Conversational), Russian (Basic). She also holds a valid UAE driving licence.',
      cite: 'Resume',
      route: '/resume',
    },
    {
      match: ['acquisition', 'lead', 'cac', 'cpl', 'ads', 'paid', 'campaign'],
      answer:
        'On acquisition, Anika cut cost per qualified lead by 60% (AED 48 → 19) while quadrupling qualified demand to 190 leads/month across Google Ads (Search, Demand Gen) and Meta — an estimated 4×+ blended return. See “Acquisition, Halved.”',
      cite: 'Projects',
      route: '/projects/acquisition-efficiency',
    },
  ],
  fallback:
    'I can only answer from Anika’s CV. Try asking about her revenue impact, industries, leadership, tools, achievements, automation work, or which roles she suits.',
}

/* -------- 11. CONTACT / CREDITS -------- */
export const contact = {
  headline: 'Let’s grow the next chapter.',
  sub: 'Open to commercial marketing, revenue and growth leadership roles.',
  cta: 'Start a conversation',
  credits: [
    ['Starring', `${profile.firstName} ${profile.lastName}`],
    ['As', 'Growth & Commercial Marketing Manager'],
    ['Filmed in', profile.location],
    ['Contact', profile.email],
    ['Direct line', profile.phone],
  ],
}
