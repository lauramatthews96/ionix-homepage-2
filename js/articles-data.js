/**
 * Static technical insights content.
 * PLACEHOLDER — confirm with Ionix before launch: real titles, dates, and bodies may not exist yet.
 * Swap this file (or a future CMS feed) without changing listing/article templates.
 */
window.IONIX_ARTICLES = [
  {
    slug: 'why-cable-harness-design-matters',
    title: 'Why Cable Harness Design Matters Before Production Begins',
    category: 'Aerospace',
    date: '2026-01-21',
    dateLabel: 'Jan 21, 2026',
    readTime: '6 min read',
    image: '/images/service-harness.png',
    imageAlt: 'Cable harness assembly with multi-pin connectors',
    excerpt: 'Early harness decisions lock in routing, connectors and test strategy long before a first article hits the bench.',
    body: [
      '<p>In aerospace programmes, the interconnect is rarely the headline system — until a late design change forces a harness rewrite, a connector re-qualification or a schedule slip. The difference between a clean first article and a costly rework loop is usually decided months earlier, when routing, shielding and build strategy are still on paper.</p>',
      '<h2>Design for manufacture, not just for the drawing</h2>',
      '<p>A harness that meets the schematic can still be impractical to build, inspect or repair. Branching geometry, breakout lengths and connector orientation need to be agreed with manufacturing before tooling and work instructions are frozen. Prototype builds are the cheapest place to surface those constraints.</p>',
      '<blockquote class="article-pullquote">Share a drawing early. A short engineering review often saves a full redesign later.</blockquote>',
      '<p>Ionix engineering teams routinely review customer drawings and BOMs under NDA, calling out cost, lead-time and test implications before series pricing is locked. That conversation is most valuable before the first production lot is scheduled.</p>',
      '<h2>What to bring to the first conversation</h2>',
      '<p>Drawings, environmental requirements, preferred connector families and any sample assemblies already in use give the clearest path to a quotation and a realistic prototype plan. Where interfaces are still fluid, a controlled prototype stage is often the right next step.</p>'
    ].join('\n')
  },
  {
    slug: 'material-selection-rf-assembly-performance',
    title: 'How Material Selection Impacts RF Assembly Performance',
    category: 'Quality',
    date: '2026-01-21',
    dateLabel: 'Jan 21, 2026',
    readTime: '5 min read',
    image: '/images/service-rf.png',
    imageAlt: 'RF coaxial cable assembly',
    excerpt: 'Cable dielectric, connector plating and bend control all show up in insertion loss and VSWR long before final test.',
    body: [
      '<p>RF performance is not only a function of connector choice. Dielectric materials, jacket systems, plating and the mechanical path the cable takes through the platform all influence insertion loss, phase stability and return loss over temperature and vibration.</p>',
      '<h2>Match the cable to the environment</h2>',
      '<p>Low-loss dielectrics and carefully controlled impedance help on paper; they only hold in service if the assembly can tolerate the bend radii, clamp points and thermal cycle the platform demands. Over-specifying a cable that cannot be formed or routed cleanly creates scrap and unstable measurements.</p>',
      '<figure class="article-figure"><img src="/images/rf/rf-test-bench.jpg" alt="RF test bench"><figcaption>Electrical verification confirms that material and process choices survive the build, not only the datasheet.</figcaption></figure>',
      '<p>A disciplined RF build process pairs material selection with forming, termination and 100% electrical test against the agreed specification — so quality evidence travels with the assembly.</p>'
    ].join('\n')
  },
  {
    slug: 'as9100-explained-for-customers',
    title: 'AS9100 Explained — What It Means for Our Customers',
    category: 'Defence',
    date: '2026-01-21',
    dateLabel: 'Jan 21, 2026',
    readTime: '7 min read',
    image: '/images/sector-defense.jpg',
    imageAlt: 'Defence tactical vehicle in rugged terrain',
    excerpt: 'AS9100 is more than a wall certificate — it shapes how configuration, traceability and non-conformance are handled on every build.',
    body: [
      '<p>AS9100 / EN9100 sets the quality-management baseline many aerospace and defence primes expect from interconnect suppliers. For customers, the practical question is not whether a certificate exists, but how that system shows up in change control, traceability and release documentation.</p>',
      '<h2>Configuration and traceability</h2>',
      '<p>Part numbers, revision status, materials and process records need to stay aligned from quotation through first article and series delivery. When a connector or wire lot changes, the quality system should make the impact visible before product ships.</p>',
      '<blockquote class="article-pullquote">Certification matters most when something changes — and the record can prove what shipped.</blockquote>',
      '<p>Ionix maintains accredited quality systems across its manufacturing footprint and supports programmes with the test evidence and documentation packs primes expect at FAI and beyond.</p>'
    ].join('\n')
  },
  {
    slug: 'routing-constraints-in-airframe-harnesses',
    title: 'Routing Constraints That Shape Airframe Harness Builds',
    category: 'Aerospace',
    date: '2026-01-14',
    dateLabel: 'Jan 14, 2026',
    readTime: '5 min read',
    image: '/images/markets/aerospace.jpg',
    imageAlt: 'Aerospace platform context for interconnect programmes',
    excerpt: 'Clamp points, segregation rules and service loops determine whether a harness design survives installation.',
    body: [
      '<p>Airframe harnesses live in a crowded envelope. Segregation between power and sensitive signals, clamp spacing, chafe protection and service loops all constrain how a drawing translates into a buildable loom.</p>',
      '<h2>Installation is part of the design</h2>',
      '<p>A harness that cannot be dressed without stressing terminations will not stay reliable in service. Early collaboration between design authority and manufacturing helps lock routing assumptions before production tooling is committed.</p>',
      '<p>Where platforms reuse legacy interfaces, sample assemblies and surveyed routes are often as valuable as the CAD model.</p>'
    ].join('\n')
  },
  {
    slug: 'rugged-interconnect-for-defence-platforms',
    title: 'Building Rugged Interconnect for Defence Platforms',
    category: 'Defence',
    date: '2026-01-08',
    dateLabel: 'Jan 8, 2026',
    readTime: '6 min read',
    image: '/images/rf/app-defence.jpg',
    imageAlt: 'Defence interconnect application',
    excerpt: 'Shock, vibration and field maintenance drive connector choice, strain relief and test depth on defence harnesses.',
    body: [
      '<p>Defence platforms punish interconnects: vibration, thermal shock, moisture and the need for field-maintainable interfaces. Connector series, backshells and strain-relief methods have to be chosen for the environment, not only for pin count.</p>',
      '<h2>Prove it before series</h2>',
      '<p>Prototype and first-article stages are where environmental and electrical requirements are validated together. Clear acceptance criteria — continuity, insulation resistance, VSWR where relevant — keep qualification honest.</p>',
      '<p>Documented processes and full test certification then support scheduled series delivery without reinventing the evidence pack on every lot.</p>'
    ].join('\n')
  },
  {
    slug: 'interconnect-reliability-at-sea',
    title: 'Interconnect Reliability for Naval & Marine Programmes',
    category: 'Naval & Marine',
    date: '2025-12-12',
    dateLabel: 'Dec 12, 2025',
    readTime: '5 min read',
    image: '/images/sector-naval.jpg',
    imageAlt: 'Naval and marine platform context',
    excerpt: 'Salt, moisture and long maintenance intervals raise the bar for sealing, materials and inspection at sea.',
    body: [
      '<p>Marine and naval environments combine moisture, salt and long intervals between deep maintenance. Jacket materials, connector sealing and corrosion-resistant finishes are not optional extras — they are part of the reliability case.</p>',
      '<h2>Design for inspection and life</h2>',
      '<p>Assemblies that can be inspected, tested and replaced without dismantling half the platform reduce through-life cost. That starts with connector access, labelling and documentation that matches how the vessel is actually maintained.</p>'
    ].join('\n')
  },
  {
    slug: 'medical-cable-assembly-considerations',
    title: 'Cable Assembly Considerations for Medical Equipment',
    category: 'Medical',
    date: '2025-11-28',
    dateLabel: 'Nov 28, 2025',
    readTime: '4 min read',
    image: '/images/sector-medical.jpg',
    imageAlt: 'Medical equipment interconnect context',
    excerpt: 'Cleanliness, flex life and documentation expectations sit alongside electrical performance in medical builds.',
    body: [
      '<p>Medical equipment interconnects often combine fine-pitch signals, repeated flex and heightened expectations for cleanliness and traceability. Material choices and process controls need to reflect that mix from the first prototype.</p>',
      '<h2>Process discipline travels with the product</h2>',
      '<p>Clear work instructions, lot traceability and defined inspection points help OEMs demonstrate control to their own regulators and customers. Early alignment on those expectations shortens the path from sample to production release.</p>'
    ].join('\n')
  },
  {
    slug: 'ionix-at-paris-air-show',
    title: 'Meeting Programme Teams at the Paris Air Show',
    category: 'Industry News',
    date: '2025-06-20',
    dateLabel: 'Jun 20, 2025',
    readTime: '3 min read',
    image: '/images/partners/paris-air-show.jpg',
    imageAlt: 'Paris Air Show exhibition context',
    excerpt: 'A short note on engaging with Ionix engineering and commercial teams around live aerospace and defence programmes.',
    body: [
      '<p>Industry events remain one of the fastest ways to walk drawings, samples and schedule constraints with the people who will quote and build the work. Face-to-face reviews often surface interface details that never make the first email.</p>',
      '<p>Whether at a major show or a dedicated programme workshop, bring the latest revision, preferred connector families and any known environmental or test requirements — that is enough to start a useful engineering conversation.</p>'
    ].join('\n')
  }
];

window.IONIX_ARTICLE_CATEGORIES = [
  'Aerospace',
  'Defence',
  'Naval & Marine',
  'Medical',
  'Quality',
  'Industry News'
];
