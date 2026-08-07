/* ============================================================
   CONTENT — Anika Mehendiratta
   ------------------------------------------------------------
   Single source of truth. All TEXT and every NUMBER comes from
   the final CV (Anika-Mehendiratta-CV-Marketing-Manager.pdf).
   Attribution discipline: portfolio revenue / occupancy results
   use "contributed to" / "supported" exactly as the CV does.
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
  role: 'Marketing Manager',
  titleLines: ['Marketing Manager', 'Growth & Commercial Strategy', 'Business Development'],
  title: 'Marketing Manager | Growth, Commercial Strategy & Business Development',
  tagline:
    'I build marketing systems that connect acquisition, CRM and distribution to commercial growth — across hospitality, travel and real estate in the UAE.',
  location: 'Dubai, United Arab Emirates',
  email: 'anikamehendiratta1@gmail.com',
  phone: '+971 58 920 1927',
  socials: {
    LinkedIn: 'https://linkedin.com/in/anika-mehendiratta',
    Email: 'mailto:anikamehendiratta1@gmail.com',
    Phone: 'tel:+971589201927',
  },
  role2: 'Marketing Manager — Growth & Commercial Strategy',
  valueProp:
    'Marketing systems that connect acquisition, CRM, distribution and AI-enabled automation to measurable commercial outcomes — contributing to AED 1.67M monthly portfolio revenue and 89% occupancy across a 60-property portfolio.',
  headline:
    'Commercial growth marketer — acquisition, CRM, hospitality distribution and AI-enabled marketing automation, connected to business outcomes.',
  // Hero background priority: heroGif → heroVideo → heroImage (ken-burns).
  // User-provided GIF (public/hero.gif). Set to '' to fall back to the video below.
  heroGif: `${import.meta.env.BASE_URL}hero.gif`,
  // Cinematic hero loop — Dubai Marina at night (Pexels, free/commercial licence).
  heroVideo: `${import.meta.env.BASE_URL}hero.mp4`,
  heroImage:
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80', // Dubai skyline
  portrait:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80', // ← replace with a real photo of Anika
  // Final CV document (served verbatim on Download CV).
  resumeFile: `${import.meta.env.BASE_URL}Anika-Mehendiratta-CV.pdf`,
}

/* -------- WATCH PROFILES ("Who's Watching?") --------
   These are AUDIENCE types, not Anika. Each is a furry monster character.
   route = where selecting it lands (all enter the same portfolio).
   emphasis = capabilityRows labels brought to the front for that persona.
*/
export const audienceProfiles = [
  { id: 'recruiter', name: 'Recruiter', subtitle: 'Looking for the right hire', emoji: '👔', color: '#22b8dd', route: '/browse', emphasis: ['Commercial Growth', 'Performance & Acquisition', 'Hospitality & Distribution'] },
  { id: 'marketing-manager', name: 'Marketing Manager', subtitle: 'Evaluating marketing expertise', emoji: '📈', color: '#e8443a', route: '/browse', emphasis: ['Performance & Acquisition', 'CRM & Lifecycle', 'AI & Marketing Automation'] },
  { id: 'hiring-manager', name: 'Hiring Manager', subtitle: 'Assessing overall business value', emoji: '💼', color: '#f5a623', route: '/browse', emphasis: ['Commercial Growth', 'Hospitality & Distribution', 'AI & Marketing Automation'] },
  { id: 'stalker', name: 'Stalker', subtitle: 'Just curious', emoji: '👀', color: '#9b59d0', route: '/browse', emphasis: [] },
]

/* -------- HERO METRIC STRIP (CV-true; attribution preserved) -------- */
export const heroStats = [
  { value: 'AED 1.67M', label: 'Monthly portfolio revenue (contributed to)' },
  { value: '89%', label: 'Portfolio occupancy (supported)' },
  { value: '3.25×', label: 'Direct-booking revenue growth' },
  { value: '−66%', label: 'Cost per lead' },
]

/* -------- "TRUSTED WITH" — executive counters (CV-true) --------
   * items marked contributed/supported carry the CV's attribution language
   via the note rendered under this grid on the home page.
*/
export const trustedWith = [
  { value: 1.67, prefix: 'AED ', suffix: 'M', label: 'Monthly portfolio revenue reached*', decimals: 2 },
  { value: 89, suffix: '%', label: 'Portfolio occupancy*' },
  { value: 3.25, suffix: '×', label: 'Direct-booking revenue growth', decimals: 2 },
  { value: 66, prefix: '−', suffix: '%', label: 'Cost per lead (AED 65 → 22)' },
  { value: 50, suffix: '+', label: 'Global OTA & demand channels' },
  { value: 70, suffix: '+', label: 'B2B, wholesale, GDS & trade sources' },
  { value: 1600, suffix: '+', label: 'Sold nights per month' },
  { value: 30, prefix: 'AED ', suffix: 'K+', label: 'Monthly marketing investment managed' },
]

export const trustedWithNote =
  '* Portfolio revenue and occupancy are team-wide commercial results Anika contributed to and supported as marketing lead — not marketing-only attribution. Acquisition, CPL and direct-booking figures are from programmes she owned.'

/* -------- 2. PROFESSIONAL SUMMARY -------- */
export const summary =
  'Marketing and business development professional with 6+ years of progressive UAE experience across hospitality, travel, real estate and service businesses. I build and own multi-channel marketing functions end to end — digital and performance acquisition, lead generation, CRM and lifecycle, strategic partnerships and global distribution — and contributed to scaling a 60-property holiday-home portfolio to AED 1.67M monthly revenue (AED 20M+ annualised) while cutting cost per lead 66% through data-driven campaign management and AI-enabled marketing automation.'

/* -------- 3. TOP CAREER HIGHLIGHTS (About / Achievements) -------- */
export const highlights = [
  { rank: 1, stat: 'AED 1.67M', headline: 'Monthly portfolio revenue reached', detail: 'Contributed to growth from AED 504K/month across a 60-property portfolio — an AED 20M+ annualised run rate.' },
  { rank: 2, stat: '89%', headline: 'Portfolio occupancy', detail: 'Supported improvement from ~45–52%, at ~AED 1,047 ADR, AED 932 RevPAR and 1,600+ sold nights per month.' },
  { rank: 3, stat: '3.25×', headline: 'Direct-booking revenue growth', detail: 'AED 80K → AED 260K per month through customer acquisition, CRM, email marketing and remarketing.' },
  { rank: 4, stat: '−66%', headline: 'Cost per lead', detail: 'AED 65 → AED 22 while scaling paid acquisition to 200–400 qualified leads per month.' },
  { rank: 5, stat: '50+', headline: 'Global OTA & demand channels', detail: 'Expanded from ~5–6 channels, plus 70+ B2B, wholesale, GDS and travel-trade sources.' },
  { rank: 6, stat: '5–6K', headline: 'Qualified enquiries per year', detail: 'Generated annually across a four-property hotel portfolio at Sharjah National Hotels.' },
]

/* -------- 4. PROJECTS (Netflix "titles") — impact stories from the CV --------
   Challenge → Strategy → Execution → Result, using only documented mechanisms.
   current: true marks Durrani-era work (drives the "Currently Building" rail).
*/
export const projects = [
  {
    id: 'commercial-growth-engine',
    title: 'The Commercial Growth Engine',
    category: 'Commercial Growth',
    featured: true,
    current: true,
    year: '2025–26',
    match: '99',
    stat: 'AED 1.67M',
    maturity: 'Flagship',
    duration: 'Nov 2025 – Present',
    logline: 'A marketing function built from zero across four business lines — and a portfolio that reached AED 1.67M a month.',
    role: 'Marketing & Business Development Manager — Durrani Group',
    summary:
      'Established the Durrani Group marketing function from the ground up across four business lines — owning strategy, demand generation, digital acquisition, CRM, distribution and commercial reporting — and contributed to scaling monthly portfolio revenue from AED 504K to AED 1.67M (AED 20M+ annualised) across a 60-property holiday-home portfolio.',
    tags: ['Commercial Strategy', 'Revenue Growth', 'Demand Generation', 'Cross-Functional Leadership'],
    poster: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}revenue.mp4`,
    impact: [
      { k: 'AED 504K → 1.67M', v: 'Monthly portfolio revenue (contributed to)' },
      { k: '~45–52% → 89%', v: 'Occupancy (supported), at ~AED 1,047 ADR / AED 932 RevPAR' },
      { k: '1,600+', v: 'Sold nights per month informing pricing & channel mix' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'A four-business group — holiday homes, real estate, Nacravo and Fleetjet Transport — with no marketing function: no owned demand generation, thin distribution and no commercial reporting rhythm.' },
      { h: 'The strategy', p: 'Build the function from the ground up as one commercial system: strategy, demand generation, digital acquisition, CRM, distribution and reporting — leading cross-functional initiatives spanning reservations, revenue, operations, finance, agencies and technology vendors.' },
      { h: 'The execution', p: 'Managed AED 30K+ in monthly marketing investment across paid acquisition, CRM, content and digital growth, allocating budget on CPL, conversion and revenue performance — and extended the growth model to real estate, facility services and transport, including scaling Nacravo to AED 80K–90K average monthly revenue during low season.' },
      { h: 'The result', p: 'Contributed to monthly portfolio revenue growing from AED 504K to AED 1.67M — an AED 20M+ annualised run rate — and supported occupancy improving from ~45–52% to 89% at ~AED 1,047 ADR and AED 932 RevPAR, with 1,600+ sold nights per month informing pricing, promotion and channel-mix decisions.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Commercial growth compounds when acquisition, CRM, distribution and reporting are built as one system — not four departments.',
  },
  {
    id: 'direct-booking-growth',
    title: 'The Direct Booking Play',
    category: 'Commercial Growth',
    current: true,
    year: '2025–26',
    match: '98',
    stat: '3.25×',
    maturity: 'Revenue',
    duration: 'Nov 2025 – Present',
    logline: 'Direct-booking revenue grew 3.25× — and the commission-heavy channels lost their grip on the margin.',
    role: 'Marketing & Business Development Manager — Durrani Group',
    summary:
      'Grew monthly direct-booking revenue 3.25× — from AED 80K to AED 260K — through customer acquisition, CRM, email marketing and remarketing programmes, reducing dependence on commission-heavy channels.',
    tags: ['Direct Booking Growth', 'CRM Strategy', 'Email Marketing', 'Remarketing'],
    poster: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}occupancy.mp4`,
    impact: [
      { k: 'AED 80K → 260K', v: 'Monthly direct-booking revenue' },
      { k: '3.25×', v: 'Direct-booking revenue growth' },
      { k: 'Lower', v: 'Dependence on commission-heavy channels' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'Bookings leaned on commission-heavy third-party channels, surrendering margin on every reservation while the direct channel underperformed at AED 80K per month.' },
      { h: 'The strategy', p: 'Grow the direct channel as a system: paid customer acquisition feeding CRM, with email marketing and remarketing converting and re-converting the database.' },
      { h: 'The execution', p: 'Ran acquisition campaigns into CRM-managed journeys — lead nurturing, email programmes and remarketing audiences — so demand captured once kept producing bookings.' },
      { h: 'The result', p: 'Monthly direct-booking revenue grew 3.25× to AED 260K, reducing dependence on commission-heavy channels.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Direct revenue is a lifecycle outcome — acquisition starts it, but CRM, email and remarketing are what make it compound.',
  },
  {
    id: 'acquisition-efficiency',
    title: 'CPL, Cut by Two-Thirds',
    category: 'Performance & Acquisition',
    current: true,
    year: '2025–26',
    match: '97',
    stat: '−66%',
    maturity: 'Performance',
    duration: 'Ongoing',
    logline: 'Leads got 66% cheaper while volume scaled to 200–400 a month — restructuring beat spending.',
    role: 'Marketing & Business Development Manager — Durrani Group',
    summary:
      'Reduced average cost per lead by 66% — from AED 65 to AED 22 — while scaling paid search (PPC) and paid social acquisition to 200–400 qualified leads per month through campaign restructuring, audience optimisation and creative testing.',
    tags: ['Google Ads', 'Meta Ads', 'PPC', 'Lead Generation', 'CPL Optimisation'],
    poster: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}revenue.mp4`,
    impact: [
      { k: 'AED 65 → 22', v: 'Average cost per lead (−66%)' },
      { k: '200–400', v: 'Qualified leads per month' },
      { k: 'PPC + Paid Social', v: 'Google Ads & Meta Ads, scaled together' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'Qualified demand was expensive — at AED 65 per lead, scaling volume meant scaling waste.' },
      { h: 'The strategy', p: 'Restructure the campaigns before increasing the budget: rebuild campaign architecture, tighten audiences and let creative testing decide what runs.' },
      { h: 'The execution', p: 'Campaign restructuring across paid search and paid social, audience optimisation against lead quality, and continuous creative testing — with budget allocated on CPL, conversion and revenue performance.' },
      { h: 'The result', p: 'Average cost per lead fell 66% to AED 22 while volume scaled to 200–400 qualified leads per month.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Efficiency comes from structure — restructuring, audiences and creative testing cut CPL further than budget ever will.',
  },
  {
    id: 'distribution-expansion',
    title: 'The Distribution Grid',
    category: 'Hospitality & Distribution',
    current: true,
    year: '2025–26',
    match: '96',
    stat: '50+',
    maturity: 'Distribution',
    duration: 'Nov 2025 – Present',
    logline: 'From ~5–6 channels to 50+ OTAs and 70+ B2B, wholesale, GDS and travel-trade sources — demand, diversified.',
    role: 'Marketing & Business Development Manager — Durrani Group',
    summary:
      'Expanded distribution from approximately 5–6 channels to 50+ global OTA and demand channels, and developed 70+ B2B, wholesale, GDS, corporate-travel and travel-trade sources — diversifying international demand for the portfolio.',
    tags: ['OTA Strategy', 'GDS', 'B2B & Wholesale Distribution', 'Travel Trade'],
    poster: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}automation.mp4`,
    impact: [
      { k: '~5–6 → 50+', v: 'Global OTA & demand channels' },
      { k: '70+', v: 'B2B, wholesale, GDS & travel-trade sources' },
      { k: 'Diversified', v: 'International demand base' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'The portfolio depended on a handful of channels — roughly five or six — leaving revenue exposed to any single source of demand.' },
      { h: 'The strategy', p: 'Diversify on two fronts at once: broad OTA and demand-channel coverage for consumer reach, plus a B2B layer of wholesale, GDS, corporate-travel and travel-trade sources for steadier international demand.' },
      { h: 'The execution', p: 'Onboarded and managed 50+ global OTA and demand channels, and developed 70+ B2B, wholesale, GDS and travel-trade relationships feeding the same inventory.' },
      { h: 'The result', p: 'A diversified international demand base — 50+ consumer channels and 70+ trade sources — supporting the portfolio’s occupancy and revenue growth.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Distribution is risk management as much as reach — a wide channel grid keeps demand flowing when any one source slows.',
  },
  {
    id: 'hotel-demand-generation',
    title: 'Four Hotels, Always On',
    category: 'Hospitality & Distribution',
    year: '2022–25',
    match: '95',
    stat: '5–6K',
    maturity: 'Demand Gen',
    duration: 'Mar 2022 – Nov 2025',
    logline: '50+ campaigns a year, 5,000–6,000 qualified enquiries annually — the long game across four properties.',
    role: 'Cluster Marketing Coordinator — Sharjah National Hotels',
    summary:
      'Led integrated campaign planning across a four-property hospitality portfolio — 50+ campaigns annually generating 5,000–6,000 qualified enquiries per year, growing campaign-generated enquiries ~35% year-on-year, with a 35,000+ guest database driving 700+ repeat and remarketing enquiries annually.',
    tags: ['Campaign Management', 'Lead Generation', 'CRM Strategy', 'Hospitality Marketing'],
    poster: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}city.mp4`,
    impact: [
      { k: '5,000–6,000', v: 'Qualified enquiries per year' },
      { k: '~35%', v: 'Year-on-year growth in campaign enquiries' },
      { k: '35,000+', v: 'CRM database → 700+ repeat enquiries/year' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'Four distinct properties — Oceanic Khorfakkan Resort & Spa, Marbella Resort, Hotel Holiday International and Nozol Al Rayaheen — each needing year-round demand for rooms, F&B, weddings and seasonal packages.' },
      { h: 'The strategy', p: 'An always-on, integrated calendar: 50+ campaigns annually across Google, Meta, CRM, social, influencer and partnership channels, tuned per property and segment.' },
      { h: 'The execution', p: 'Multi-channel lead-generation campaigns across staycations, room offers and F&B promotions; audience segmentation, creative testing and remarketing; CRM and email programmes across a 35,000+ guest and prospect database; 15+ influencer and UGC collaborations (~1.5M combined impressions) and co-marketing partnerships with Zomato, Sharaf DG, TravelPass and Travel Trends Magazine.' },
      { h: 'The result', p: 'Approximately 5,000–6,000 qualified enquiries generated annually, campaign-generated enquiries up ~35% year-on-year, and 700+ repeat and remarketing-driven enquiries each year from the database.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Sustained demand is a portfolio discipline — segmentation, testing and CRM compounding season after season beat one-off campaigns.',
  },
  {
    id: 'ramadan-campaign',
    title: 'The Ramadan Surge',
    category: 'Performance & Acquisition',
    year: '2022–25',
    match: '94',
    stat: '2,200+',
    maturity: 'Campaign',
    duration: 'Seasonal',
    role: 'Cluster Marketing Coordinator — Sharjah National Hotels',
    logline: 'One season, four properties, 2,200+ qualified enquiries — paid, CRM and organic firing together.',
    summary:
      'Led the group’s Ramadan digital campaign, generating 2,200+ qualified enquiries across four properties through integrated paid media, CRM and organic content.',
    tags: ['Campaign Management', 'Paid Media', 'CRM', 'Seasonal Demand'],
    poster: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}city.mp4`,
    impact: [
      { k: '2,200+', v: 'Qualified enquiries' },
      { k: '4', v: 'Properties covered by one campaign' },
      { k: 'Paid + CRM + Organic', v: 'Integrated channel mix' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'Concentrate a burst of seasonal demand across four distinct properties inside a tight Ramadan window.' },
      { h: 'The strategy', p: 'One coordinated push — integrated paid media, CRM activation and organic content working the same offer calendar.' },
      { h: 'The execution', p: 'Managed the cross-property digital campaign end to end across paid, CRM and organic channels.' },
      { h: 'The result', p: '2,200+ qualified enquiries generated across the four properties from a single seasonal campaign.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Seasonal peaks reward coordination — paid, CRM and organic firing together beat any single channel alone.',
  },
  {
    id: 'marketing-automation',
    title: 'The Reports That Write Themselves',
    category: 'AI & Automation',
    current: true,
    year: '2025–26',
    match: '93',
    stat: 'AI-Ops',
    maturity: 'Ops',
    duration: 'Ongoing',
    role: 'Marketing & Business Development Manager — Durrani Group',
    logline: 'AI-enabled workflows replaced recurring manual commercial reporting — and turned data into decisions.',
    summary:
      'Built AI-enabled marketing-automation and reporting workflows that replaced recurring manual commercial reporting — translating acquisition, occupancy and channel performance into senior-management recommendations on marketing investment, pricing and channel mix.',
    tags: ['AI Automation', 'n8n', 'Reporting Automation', 'Marketing Analytics'],
    poster: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80',
    video: `${VID}automation.mp4`,
    impact: [
      { k: 'Manual → Automated', v: 'Recurring commercial reporting' },
      { k: '3 lenses', v: 'Acquisition, occupancy & channel performance' },
      { k: 'Decision-ready', v: 'Recommendations on investment, pricing & channel mix' },
    ],
    caseStudy: [
      { h: 'The challenge', p: 'Recurring commercial reporting was manual — time spent assembling numbers instead of acting on them.' },
      { h: 'The strategy', p: 'Automate the mechanical work with AI-enabled workflows and keep the human effort on interpretation: what the numbers mean for investment, pricing and channel mix.' },
      { h: 'The execution', p: 'Built marketing-automation and reporting workflows using practical AI tooling — n8n, API and webhook integrations, and AI assistants — feeding acquisition, occupancy and channel performance into a consistent reporting rhythm.' },
      { h: 'The result', p: 'Recurring manual commercial reporting was replaced, with performance translated into senior-management recommendations on marketing investment, pricing and channel mix.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
    ],
    lessons: 'Automate the reporting, not the judgement — AI earns its place by handing time back to strategy.',
  },
]

/* -------- 5. ROWS (Netflix shelves — project-based) -------- */
export const rows = [
  { label: 'Continue Exploring My Career', kind: 'continue', filter: (p) => ['commercial-growth-engine', 'direct-booking-growth', 'acquisition-efficiency'].includes(p.id) },
  { label: 'Commercial Growth', kind: 'poster', filter: (p) => p.category === 'Commercial Growth' },
  { label: 'Performance & Acquisition', kind: 'poster', filter: (p) => p.category === 'Performance & Acquisition' },
  { label: 'Hospitality & Distribution', kind: 'poster', filter: (p) => p.category === 'Hospitality & Distribution' },
  { label: 'Currently Building', kind: 'poster', filter: (p) => p.current === true },
]

/* Ranked list for the Top 10 row (by impact) */
export const topTen = ['commercial-growth-engine', 'direct-booking-growth', 'acquisition-efficiency', 'distribution-expansion', 'hotel-demand-generation', 'ramadan-campaign', 'marketing-automation']

/* -------- 6. CAPABILITIES ("What I do") — five pillars, one story --------
   Each pillar answers the business problem it solves, not just keywords.
*/
export const skillCollections = [
  {
    name: 'Commercial Growth',
    headline: 'Turn marketing activity into revenue the business can see.',
    blurb: 'For businesses that need marketing tied to commercial outcomes — revenue growth, market expansion and business development, reported in numbers leadership acts on.',
    outcomes: ['Revenue growth', 'Market expansion', 'Commercial visibility'],
    capabilities: ['Marketing strategy', 'Commercial strategy', 'Revenue growth', 'Business development', 'Strategic partnerships', 'Go-to-market strategy', 'Budget ownership', 'Executive reporting', 'Cross-functional leadership', 'Stakeholder, agency & vendor management'],
    platforms: ['Looker Studio', 'GA4', 'Monday.com'],
    items: ['Marketing strategy', 'Revenue growth', 'Business development', 'Strategic partnerships', 'Budget ownership', 'Executive reporting'],
  },
  {
    name: 'Performance & Acquisition',
    headline: 'Buy demand efficiently — and prove it.',
    blurb: 'For funnels where leads cost too much or convert too little — paid search and paid social engineered around CPL, conversion and revenue, not impressions.',
    outcomes: ['Qualified leads at falling CPL', 'Higher conversion', 'Measured ROI'],
    capabilities: ['Performance marketing', 'Google Ads', 'Meta Ads', 'Paid search (PPC)', 'Paid social', 'Lead generation', 'CPL optimisation', 'Conversion rate optimisation (CRO)', 'A/B testing', 'SEO', 'Marketing analytics & attribution'],
    platforms: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'GA4', 'Google Tag Manager', 'Search Console'],
    items: ['Google Ads', 'Meta Ads', 'PPC & paid social', 'Lead generation', 'CRO & A/B testing', 'Analytics & attribution'],
  },
  {
    name: 'CRM & Lifecycle',
    headline: 'Make the demand you already paid for keep converting.',
    blurb: 'For databases that sit idle — CRM strategy, email marketing, lead nurturing and remarketing that turn captured demand into repeat, direct revenue.',
    outcomes: ['Direct-channel growth', 'Repeat business', 'Lower acquisition dependence'],
    capabilities: ['CRM strategy', 'Email marketing', 'Marketing automation', 'Lead nurturing', 'Customer journey design', 'Remarketing', 'Database marketing', 'Customer segmentation', 'Lifecycle marketing'],
    platforms: ['HubSpot', 'Zoho CRM', 'Mailchimp', 'WhatsApp Business'],
    items: ['CRM strategy', 'Email marketing', 'Lead nurturing', 'Remarketing', 'Customer journeys', 'Lifecycle marketing'],
  },
  {
    name: 'Hospitality & Distribution',
    headline: 'Fill the calendar — profitably, from everywhere.',
    blurb: 'For inventory that needs demand — OTA strategy, GDS and B2B wholesale distribution, direct-booking growth and the ADR / RevPAR / occupancy economics behind them.',
    outcomes: ['Occupancy & RevPAR', 'Diversified demand', 'Direct-booking growth'],
    capabilities: ['Hospitality marketing', 'OTA strategy', 'Direct booking growth', 'B2B & wholesale distribution', 'GDS', 'Corporate travel & travel trade', 'ADR / RevPAR / occupancy management', 'Channel-mix strategy'],
    platforms: ['Booking.com', 'Airbnb', 'Expedia', 'Agoda', 'Hotelbeds', 'WebBeds', 'Amadeus', 'Guesty', 'Hostaway', 'SiteMinder', 'PriceLabs', 'Oracle OPERA'],
    items: ['OTA strategy', 'Direct booking growth', 'GDS & wholesale', 'Travel trade', 'ADR / RevPAR / occupancy', 'Channel mix'],
  },
  {
    name: 'AI & Marketing Automation',
    headline: 'Run marketing operations that scale without headcount.',
    blurb: 'For teams drowning in manual reporting and repetitive ops — practical AI-enabled workflows, n8n automations and API integrations that free time for strategy.',
    outcomes: ['Automated reporting', 'Faster decisions', 'Scalable operations'],
    capabilities: ['AI-enabled marketing workflows', 'Reporting automation', 'n8n', 'API & webhook integrations', 'AI agents', 'Prompt engineering', 'Workflow design', 'Marketing operations'],
    platforms: ['n8n', 'Zapier', 'Make', 'ChatGPT', 'Claude', 'Claude Code', 'Gemini'],
    items: ['AI-enabled workflows', 'Reporting automation', 'n8n', 'APIs & webhooks', 'AI agents', 'Prompt engineering'],
  },
]

/* -------- CAPABILITY ROWS (home middle section) --------
   Netflix rows of capability cards — the five pillars as rails.
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
    label: 'Commercial Growth',
    cards: [
      { title: 'Marketing Strategy', img: CIMG.strategy, value: 'Translate business objectives into integrated marketing plans with owners, budgets and targets.', skills: ['Marketing strategy', 'Go-to-market strategy', 'Integrated marketing', 'Campaign planning', 'Positioning', 'Budget planning'] },
      { title: 'Revenue & Commercial Growth', img: CIMG.revenue, value: 'Connect marketing to revenue — pricing, promotion and channel-mix decisions informed by ADR, RevPAR and occupancy.', skills: ['Commercial strategy', 'Revenue growth', 'Channel-mix decisions', 'Promotion strategy', 'Marketing ROI', 'Performance-based budget allocation'] },
      { title: 'Business Development', img: CIMG.meeting, value: 'Open new demand through partnerships, B2B relationships and market expansion.', skills: ['Business development', 'Strategic partnerships', 'B2B/B2C marketing', 'Market expansion', 'Co-marketing partnerships', 'Travel-trade relationships'] },
      { title: 'Leadership & Reporting', img: CIMG.dashboard, value: 'Lead cross-functional initiatives and give leadership decision-ready commercial reporting.', skills: ['Cross-functional leadership', 'Stakeholder management', 'Agency & vendor management', 'Executive reporting', 'Marketing analytics', 'Budget ownership'] },
    ],
  },
  {
    label: 'Performance & Acquisition',
    cards: [
      { title: 'Paid Search (PPC)', img: CIMG.ads, value: 'Buy qualified demand through structured, conversion-focused search campaigns.', skills: ['Google Ads', 'Search campaign structure', 'Keyword strategy', 'Bid & budget management', 'Ad testing', 'Conversion tracking'], platforms: ['Google Ads', 'Google Tag Manager'] },
      { title: 'Paid Social', img: CIMG.data, value: 'Build paid-social programmes for lead generation, awareness and remarketing.', skills: ['Meta Ads', 'Audience targeting', 'Retargeting', 'Creative testing', 'Lead-generation campaigns', 'Campaign scaling'], platforms: ['Meta Ads Manager', 'LinkedIn Campaign Manager'] },
      { title: 'Lead Generation & CPL', img: CIMG.charts, value: 'Scale qualified lead volume while driving cost per lead down.', skills: ['Lead generation', 'CPL optimisation', 'Campaign restructuring', 'Audience optimisation', 'Creative testing', 'Lead-quality management'] },
      { title: 'SEO & CRO', img: CIMG.analytics, value: 'Grow organic visibility and convert more of the traffic you already have.', skills: ['SEO', 'On-page & technical SEO', 'Keyword research', 'Conversion rate optimisation', 'A/B testing', 'Landing-page optimisation'], platforms: ['Semrush', 'Ahrefs', 'Search Console'] },
      { title: 'Marketing Analytics', img: CIMG.dashboard, value: 'Measure what matters — attribution, funnels and campaign performance leadership can act on.', skills: ['GA4', 'Attribution', 'Funnel analysis', 'Campaign reporting', 'Marketing dashboards', 'Executive reporting'], platforms: ['GA4', 'Looker Studio', 'Google Tag Manager'] },
    ],
  },
  {
    label: 'CRM & Lifecycle',
    cards: [
      { title: 'CRM Strategy', img: CIMG.strategy, value: 'Design how leads are captured, qualified and worked — so no demand is wasted.', skills: ['CRM strategy', 'Database marketing', 'Customer segmentation', 'Lead qualification', 'Pipeline visibility'], platforms: ['HubSpot', 'Zoho CRM'] },
      { title: 'Email Marketing', img: CIMG.data, value: 'Turn the database into a revenue channel with structured email programmes.', skills: ['Email marketing', 'Campaign calendars', 'Segmented sends', 'Performance analysis', 'Repeat-business campaigns'], platforms: ['Mailchimp', 'HubSpot'] },
      { title: 'Lead Nurturing & Journeys', img: CIMG.meeting, value: 'Move prospects through designed journeys from first touch to booking.', skills: ['Lead nurturing', 'Customer journey design', 'Marketing automation', 'Follow-up workflows', 'WhatsApp communication'], platforms: ['HubSpot', 'WhatsApp Business'] },
      { title: 'Remarketing & Retention', img: CIMG.charts, value: 'Re-convert captured demand — remarketing and retention that lower acquisition dependence.', skills: ['Remarketing', 'Retention campaigns', 'Repeat-enquiry generation', 'Audience syncing', 'Lifecycle marketing'] },
    ],
  },
  {
    label: 'Hospitality & Distribution',
    cards: [
      { title: 'OTA Strategy', img: CIMG.hotel, value: 'Maximise visibility, conversion and margin across the OTA landscape.', skills: ['OTA strategy', 'Listing optimisation', 'Channel performance', 'Promotions', 'Review management'], platforms: ['Booking.com', 'Airbnb', 'Expedia', 'Agoda'] },
      { title: 'Direct Booking Growth', img: CIMG.revenue, value: 'Shift demand from commission-heavy channels into the direct channel.', skills: ['Direct booking strategy', 'Booking-journey optimisation', 'Acquisition-to-CRM funnels', 'Email & remarketing programmes'] },
      { title: 'B2B, GDS & Travel Trade', img: CIMG.meeting, value: 'Build the trade layer — wholesale, GDS and corporate-travel demand.', skills: ['B2B & wholesale distribution', 'GDS', 'Corporate travel', 'Travel-trade development', 'Partnership management'], platforms: ['Hotelbeds', 'WebBeds', 'Amadeus'] },
      { title: 'Revenue Economics', img: CIMG.charts, value: 'Read the portfolio through ADR, RevPAR and occupancy — and act on it.', skills: ['ADR / RevPAR / occupancy analysis', 'Pricing input', 'Demand analysis', 'Channel-mix decisions', 'Commercial reporting'], platforms: ['PriceLabs', 'SiteMinder', 'Guesty', 'Hostaway', 'Oracle OPERA'] },
    ],
  },
  {
    label: 'AI & Marketing Automation',
    cards: [
      { title: 'AI-Enabled Workflows', img: CIMG.ai, value: 'Replace repetitive marketing operations with practical AI-assisted workflows.', skills: ['AI workflow design', 'Marketing-automation workflows', 'AI agents', 'Prompt engineering', 'Human-in-the-loop review'], platforms: ['ChatGPT', 'Claude', 'Claude Code', 'Gemini'] },
      { title: 'Reporting Automation', img: CIMG.dashboard, value: 'Turn recurring manual reporting into an automated rhythm leadership can rely on.', skills: ['Reporting automation', 'KPI pipelines', 'Commercial reporting', 'Data consolidation', 'Executive summaries'], platforms: ['n8n', 'Looker Studio', 'GA4'] },
      { title: 'Integrations & Ops', img: CIMG.code, value: 'Connect the marketing stack so data moves between systems without copy-paste.', skills: ['API & webhook integrations', 'n8n', 'Zapier', 'Make', 'Data synchronisation', 'Workflow design'], platforms: ['n8n', 'Zapier', 'Make'] },
      { title: 'AI Content & Creative Ops', img: CIMG.ai2, value: 'Use AI tooling to speed up creative production without losing brand control.', skills: ['AI-assisted content workflows', 'Prompt engineering', 'Creative iteration', 'Brand consistency'], platforms: ['Midjourney', 'Runway', 'Adobe Firefly', 'Canva', 'Figma'] },
    ],
  },
]

/* -------- COMMERCIAL SYSTEM (Step 8 visual — how it all connects) -------- */
export const commercialSystem = {
  eyebrow: 'How it connects',
  title: 'One commercial system',
  lead: 'Not five separate specialisms — one connected system that turns demand into revenue, with distribution and analytics running alongside.',
  chain: [
    { step: 'Demand Generation', desc: 'Campaigns, content & partnerships create demand' },
    { step: 'Paid + Organic Acquisition', desc: 'Google Ads, Meta Ads & SEO capture it efficiently' },
    { step: 'Lead Capture', desc: 'Optimised journeys turn clicks into qualified leads' },
    { step: 'CRM / Lifecycle', desc: 'Nurturing, email & remarketing keep demand warm' },
    { step: 'Conversion', desc: 'Qualified demand becomes bookings and customers' },
    { step: 'Direct Booking / Revenue', desc: 'Revenue lands in the most profitable channel' },
    { step: 'Retention / Remarketing', desc: 'The database re-converts — and the loop compounds' },
  ],
  lanes: [
    { name: 'Distribution Growth', desc: 'OTA + B2B + GDS + travel trade feed demand in parallel — 50+ consumer channels, 70+ trade sources.' },
    { name: 'Measurement & Decisions', desc: 'Analytics + AI automation report every stage — steering investment, pricing and channel mix.' },
  ],
}

/* -------- TOOLS & PLATFORMS (from CV Technical Skills) -------- */
export const tools = [
  { group: 'Performance & Analytics', items: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'GA4', 'Google Tag Manager', 'Search Console', 'Looker Studio'] },
  { group: 'CRM & Automation', items: ['HubSpot', 'Zoho CRM', 'Mailchimp', 'WhatsApp Business', 'n8n', 'Zapier', 'Make'] },
  { group: 'SEO & Growth', items: ['Semrush', 'Ahrefs', 'CRO', 'A/B Testing', 'Keyword Research', 'On-Page & Technical SEO'] },
  { group: 'AI & Agentic Automation', items: ['ChatGPT', 'Claude', 'Gemini', 'Claude Code', 'AI Agents', 'API & Webhook Integrations', 'Prompt Engineering'] },
  { group: 'Creative', items: ['Adobe Creative Cloud', 'Canva', 'Figma', 'Midjourney', 'Runway', 'Adobe Firefly'] },
  { group: 'Hospitality & Distribution', items: ['Guesty', 'Hostaway', 'SiteMinder', 'PriceLabs', 'Oracle OPERA', 'Booking.com', 'Airbnb', 'Expedia', 'Agoda', 'Hotelbeds', 'WebBeds', 'Amadeus'] },
  { group: 'Web & Collaboration', items: ['WordPress', 'Webflow', 'Monday.com', 'ClickUp', 'Notion', 'Google Workspace', 'Microsoft 365'] },
]

/* -------- 7. SEASONS (career, chronological) -------- */
export const seasons = [
  {
    season: 1,
    title: 'Co-Founder',
    org: 'Marketing Monkey',
    place: 'India',
    period: 'Jun 2019 – Jun 2020',
    logline: 'Where it began — building a digital marketing consultancy from zero.',
    art: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    episodes: [
      { n: 1, title: 'Zero to One', desc: 'Co-founded a digital marketing consultancy serving 15+ SME clients — building market positioning, service packages, pricing, client acquisition, delivery and retention end to end.' },
      { n: 2, title: '40+ Projects', desc: 'Planned and delivered 40+ digital and branding projects across multiple sectors.' },
      { n: 3, title: 'End-to-End Ownership', desc: 'Managed client relationships from prospecting and pitching through campaign execution and reporting.' },
    ],
  },
  {
    season: 2,
    title: 'Business Development & Marketing Executive',
    org: 'Hystay Living',
    place: 'India',
    period: 'Jun 2020 – Jan 2021',
    logline: 'B2B hospitality pipeline — corporates, agencies, airlines and government.',
    art: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    episodes: [
      { n: 1, title: '150+ Opportunities', desc: 'Built a multi-segment B2B hospitality pipeline across corporate clients, travel agencies, airlines and government organisations — 150+ qualified opportunities and a travel-trade network of 30+ agency and corporate relationships.' },
      { n: 2, title: 'Occupancy Impact', desc: 'Contributed to an approximately 20% occupancy improvement during targeted periods through corporate sales, travel-trade relationships and digital demand generation.' },
      { n: 3, title: 'Market Intelligence', desc: 'Managed Google Ads, social media and digital campaigns alongside competitor, pricing and market-demand analysis supporting rate positioning and promotional strategy.' },
    ],
  },
  {
    season: 3,
    title: 'Performance Marketing Executive',
    org: 'VB Groups',
    place: 'United Arab Emirates',
    period: 'Mar 2021 – Feb 2022',
    logline: 'The performance-marketing foundation — AED 60K+ monthly spend, owned end to end.',
    art: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
    episodes: [
      { n: 1, title: 'AED 60K+ a Month', desc: 'Managed AED 60K+ in monthly digital advertising spend across Google and Meta for multiple business verticals — budget allocation, media planning and optimisation.' },
      { n: 2, title: '25+ Campaigns, 2,000+ Leads', desc: 'Planned and executed 25+ performance campaigns generating 2,000+ leads, reporting spend, CPL and conversion trends through executive dashboards.' },
      { n: 3, title: '−30% CPL', desc: 'Reduced average cost per lead ~30% through keyword restructuring, negative-keyword expansion, audience refinement and continuous creative testing.' },
      { n: 4, title: 'CRO & SEO', desc: 'Improved landing-page conversion ~25% and grew organic search traffic ~35% through CRO, technical/on-page SEO and content strategy.' },
    ],
  },
  {
    season: 4,
    title: 'Cluster Marketing Coordinator',
    org: 'Sharjah National Hotels',
    place: 'Sharjah, UAE',
    period: 'Mar 2022 – Nov 2025',
    logline: 'Four hotels, 50+ campaigns a year, 5,000–6,000 qualified enquiries annually.',
    art: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    episodes: [
      { n: 1, title: 'Four Properties, Always On', desc: 'Led integrated campaign planning across Oceanic Khorfakkan Resort & Spa, Marbella Resort, Hotel Holiday International and Nozol Al Rayaheen — 50+ campaigns annually across Google, Meta, CRM, social, influencer and partnership channels.' },
      { n: 2, title: '5,000–6,000 Enquiries a Year', desc: 'Generated approximately 5,000–6,000 qualified enquiries annually through multi-channel lead generation — up ~35% year-on-year through segmentation, creative testing and remarketing.' },
      { n: 3, title: 'The Ramadan Campaign', desc: 'Led the group’s Ramadan digital campaign — 2,200+ qualified enquiries across four properties through integrated paid media, CRM and organic content.' },
      { n: 4, title: 'The 35,000+ Database', desc: 'Built and executed CRM, email and remarketing programmes across a 35,000+ guest and prospect database, contributing to 700+ repeat and remarketing-driven enquiries annually.' },
      { n: 5, title: 'Influence & Partnerships', desc: 'Delivered 15+ influencer and UGC collaborations (~1.5M combined impressions) and secured co-marketing partnerships with Zomato, Sharaf DG, TravelPass and Travel Trends Magazine — an estimated 500K+ additional consumers reached.' },
    ],
  },
  {
    season: 5,
    title: 'Marketing & Business Development Manager',
    org: 'Durrani Group',
    place: 'Dubai, UAE',
    period: 'Nov 2025 – Present',
    logline: 'Marketing built from the ground up across four business lines — and commercial growth to match.',
    art: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    episodes: [
      { n: 1, title: 'The Function, From Zero', desc: 'Established the group’s marketing function from the ground up across four business lines — strategy, demand generation, digital acquisition, CRM, distribution and commercial reporting — leading cross-functional initiatives across reservations, revenue, operations, finance, agencies and vendors.' },
      { n: 2, title: 'The Revenue Story', desc: 'Contributed to scaling monthly portfolio revenue from AED 504K to AED 1.67M (AED 20M+ annualised) across a 60-property portfolio, and supported occupancy growth from ~45–52% to 89% at ~AED 1,047 ADR and AED 932 RevPAR.' },
      { n: 3, title: 'Direct Bookings, 3.25×', desc: 'Grew monthly direct-booking revenue 3.25× to AED 260K through acquisition, CRM, email marketing and remarketing — reducing dependence on commission-heavy channels.' },
      { n: 4, title: 'CPL −66%', desc: 'Cut average cost per lead from AED 65 to AED 22 while scaling paid search and paid social to 200–400 qualified leads per month.' },
      { n: 5, title: 'The Distribution Grid', desc: 'Expanded from ~5–6 channels to 50+ global OTA and demand channels plus 70+ B2B, wholesale, GDS and travel-trade sources — and scaled Nacravo to AED 80K–90K average monthly low-season revenue.' },
      { n: 6, title: 'AI-Enabled Ops', desc: 'Built AI-enabled marketing-automation and reporting workflows that replaced recurring manual commercial reporting — translating performance into senior-management recommendations on investment, pricing and channel mix.' },
    ],
  },
]

/* -------- 8. CERTIFICATIONS (grouped, per CV) -------- */
export const certifications = [
  { provider: 'Google & Analytics', items: ['Google Ads (Search, Display, Video, Measurement)', 'GA4', 'Google Tag Manager', 'Looker Studio', 'Meta Blueprint', 'SEMrush SEO'] },
  { provider: 'HubSpot / CRM', items: ['Inbound Marketing', 'Digital Marketing', 'Revenue Operations', 'AI for Marketing'] },
  { provider: 'Hospitality & Distribution', items: ['Booking.com Partner Academy', 'PriceLabs University', 'SiteMinder Learning Hub'] },
  { provider: 'AI & Automation', items: ['n8n Fundamentals', 'Microsoft AI Skills Challenge'] },
  { provider: 'In Progress', items: ['Diploma in Generative AI Prompt Engineering & Neuromarketing — The Knowledge Academy, Copenhagen (expected 2026)'] },
]

/* -------- 9. STATS (About counters) -------- */
export const stats = [
  { value: 1.67, prefix: 'AED ', suffix: 'M', label: 'Monthly portfolio revenue reached*', decimals: 2 },
  { value: 89, suffix: '%', label: 'Portfolio occupancy*' },
  { value: 3.25, suffix: '×', label: 'Direct-booking revenue growth', decimals: 2 },
  { value: 66, prefix: '−', suffix: '%', label: 'Cost per lead' },
]

/* -------- 10. EDUCATION & LANGUAGES -------- */
export const education = {
  diploma: {
    degree: 'Diploma in Generative AI Prompt Engineering & Neuromarketing',
    school: 'The Knowledge Academy, Copenhagen',
    period: 'Expected 2026',
  },
  degree: 'Bachelor’s Degree in Tourism Studies',
  school: 'Indira Gandhi National Open University (IGNOU), New Delhi, India',
  period: '2018 – 2022',
  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Punjabi', level: 'Conversational' },
    { name: 'Russian', level: 'Basic' },
  ],
  extra: 'Valid UAE driving licence',
}

/* -------- HIRE ME -------- */
export const hireMe = {
  valueProp:
    'A Marketing Manager who connects acquisition, CRM, hospitality revenue economics, distribution and AI-enabled automation to measurable business outcomes — with 6+ years of progressive UAE experience across hospitality, travel, real estate and service businesses.',
  targetRoles: [
    'Marketing Manager',
    'Growth Marketing Manager',
    'Marketing & Business Development Manager',
    'Performance Marketing Manager',
    'CRM & Lifecycle Marketing Manager',
  ],
  industries: ['Hospitality & Travel', 'Real Estate', 'Holiday Homes / Short-stay', 'Service Businesses'],
  location: 'Dubai, United Arab Emirates',
  arrangement: 'On-site · Hybrid · Open to relocation',
  strengths: [
    'Commercial growth — revenue, occupancy and direct-booking economics',
    'Performance acquisition — Google & Meta at falling CPL',
    'CRM & lifecycle — email, nurturing and remarketing programmes',
    'Distribution — OTA, GDS, B2B wholesale and travel trade',
    'AI-enabled marketing automation and reporting',
  ],
}

/* -------- ASK ANIKA — grounded knowledge base (no LLM, no invention) --------
   Deterministic Q&A. Each entry answers from real CV data and cites a section.
*/
export const askAnika = {
  intro: 'Ask about Anika’s experience, results, industries, tools or fit. Answers come only from her CV.',
  suggestions: [
    'What revenue impact has Anika contributed to?',
    'What industries has she worked in?',
    'How does she grow direct bookings?',
    'What marketing platforms does she use?',
    'What are her strongest achievements?',
    'Which roles is she suited for?',
    'Show projects related to automation.',
    'Summarise her hospitality experience.',
  ],
  // keyword-matched intents → grounded answer + citation (route)
  intents: [
    {
      match: ['revenue', 'impact', 'money', 'aed', 'sales', 'commercial'],
      answer:
        'Anika contributed to scaling a 60-property holiday-home portfolio from AED 504K to AED 1.67M monthly revenue (AED 20M+ annualised) and supported occupancy improving from ~45–52% to 89% at ~AED 1,047 ADR and AED 932 RevPAR. She grew direct-booking revenue 3.25× (AED 80K → 260K/month) and scaled Nacravo to AED 80K–90K average monthly low-season revenue.',
      cite: 'Achievements',
      route: '/achievements',
    },
    {
      match: ['industry', 'industries', 'sector', 'hospitality', 'travel', 'real estate', 'hotel'],
      answer:
        'Anika works across hospitality, travel, real estate and service businesses in the UAE — currently the Durrani Group (holiday homes, real estate, Nacravo and Fleetjet Transport), previously a four-property hotel portfolio at Sharjah National Hotels, performance marketing at VB Groups, and hospitality BD in India.',
      cite: 'Professional',
      route: '/professional',
    },
    {
      match: ['direct', 'booking', 'bookings', 'ota dependence', 'commission'],
      answer:
        'She grew monthly direct-booking revenue 3.25× — from AED 80K to AED 260K — through customer acquisition, CRM, email marketing and remarketing programmes, reducing dependence on commission-heavy channels. See "The Direct Booking Play".',
      cite: 'Projects',
      route: '/projects/direct-booking-growth',
    },
    {
      match: ['platform', 'tool', 'software', 'stack', 'google', 'meta', 'crm', 'ga4'],
      answer:
        'Platforms include Google Ads, Meta Ads Manager, LinkedIn Campaign Manager, GA4, Tag Manager, Looker Studio; CRM: HubSpot, Zoho, Mailchimp, WhatsApp Business; distribution: Booking.com, Airbnb, Expedia, Agoda, Hotelbeds, WebBeds, Amadeus, Guesty, Hostaway, SiteMinder, PriceLabs, Oracle OPERA; AI/automation: ChatGPT, Claude, Claude Code, Gemini, n8n, Zapier, Make.',
      cite: 'Skills',
      route: '/skills',
    },
    {
      match: ['achievement', 'best', 'strongest', 'top', 'win', 'result'],
      answer:
        'Top results: contributed to AED 504K → 1.67M monthly portfolio revenue and supported ~45–52% → 89% occupancy across 60 properties; grew direct bookings 3.25× to AED 260K/month; cut CPL 66% (AED 65 → 22) at 200–400 qualified leads/month; expanded distribution to 50+ OTA channels and 70+ B2B/GDS/trade sources; generated 5,000–6,000 enquiries a year across four hotels.',
      cite: 'Achievements',
      route: '/achievements',
    },
    {
      match: ['role', 'suited', 'fit', 'hire', 'position', 'job'],
      answer:
        'Anika suits Marketing Manager, Growth Marketing Manager, Marketing & Business Development Manager, Performance Marketing Manager and CRM & Lifecycle roles — especially in hospitality, travel, real estate and service businesses. Based in Dubai; on-site, hybrid or open to relocation.',
      cite: 'Hire Me',
      route: '/hire-me',
    },
    {
      match: ['automation', 'ai', 'n8n', 'workflow', 'report'],
      answer:
        'She built AI-enabled marketing-automation and reporting workflows that replaced recurring manual commercial reporting — using n8n, API and webhook integrations and AI assistants (ChatGPT, Claude, Claude Code, Gemini) — translating acquisition, occupancy and channel performance into senior-management recommendations.',
      cite: 'Projects',
      route: '/projects/marketing-automation',
    },
    {
      match: ['occupancy', 'distribution', 'channel', 'gds', 'wholesale', 'trade'],
      answer:
        'Anika expanded distribution from ~5–6 channels to 50+ global OTA and demand channels plus 70+ B2B, wholesale, GDS, corporate-travel and travel-trade sources, and supported occupancy improving from ~45–52% to 89% across a 60-property portfolio. See "The Distribution Grid".',
      cite: 'Projects',
      route: '/projects/distribution-expansion',
    },
    {
      match: ['education', 'degree', 'study', 'university', 'qualification'],
      answer:
        'Anika holds a Bachelor’s Degree in Tourism Studies from IGNOU, New Delhi (2018–2022), and is completing a Diploma in Generative AI Prompt Engineering & Neuromarketing (The Knowledge Academy, Copenhagen, expected 2026).',
      cite: 'Resume',
      route: '/resume',
    },
    {
      match: ['language', 'speak', 'languages'],
      answer:
        'Languages: English (Native), Hindi (Native), Punjabi (Conversational), Russian (Basic). She also holds a valid UAE driving licence.',
      cite: 'Resume',
      route: '/resume',
    },
    {
      match: ['acquisition', 'lead', 'cac', 'cpl', 'ads', 'paid', 'campaign', 'ppc'],
      answer:
        'On acquisition, Anika cut average cost per lead 66% (AED 65 → 22) while scaling paid search and paid social to 200–400 qualified leads per month through campaign restructuring, audience optimisation and creative testing. Earlier, at VB Groups, she managed AED 60K+ monthly spend and cut CPL ~30%. See "CPL, Cut by Two-Thirds".',
      cite: 'Projects',
      route: '/projects/acquisition-efficiency',
    },
  ],
  fallback:
    'I can only answer from Anika’s CV. Try asking about her revenue impact, industries, direct bookings, tools, achievements, automation work, or which roles she suits.',
}

/* -------- 11. CONTACT / CREDITS -------- */
export const contact = {
  headline: 'Let’s grow the next chapter.',
  sub: 'Open to Marketing Manager, growth and commercial-strategy roles.',
  cta: 'Start a conversation',
  credits: [
    ['Starring', `${profile.firstName} ${profile.lastName}`],
    ['As', 'Marketing Manager — Growth, Commercial Strategy & Business Development'],
    ['Filmed in', profile.location],
    ['Contact', profile.email],
    ['Direct line', profile.phone],
  ],
}
