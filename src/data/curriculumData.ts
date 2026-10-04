export interface SubjectTopic {
  title: string;
  category: string;
  grades: string[];
  keyConcepts: string[];
  examWeight: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceRange: string;
  period: string;
  minPrice: number;
  maxPrice: number;
  highlight?: boolean;
  description: string;
  features: string[];
  idealFor: string;
}

export interface DiagnosticQuestion {
  id: number;
  subject: 'Mathematics' | 'Physical Sciences';
  grade: 'Grade 10' | 'Grade 11' | 'Grade 12';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface BusinessPlanChapter {
  id: string;
  sectionNumber: string;
  title: string;
  category: 'Strategy & Governance' | 'Market & Acquisition' | 'LMS & Operations' | 'Financials & Impact';
  executiveHeadline: string;
  summary: string;
  keyMetrics: { label: string; value: string; context: string }[];
  strategicPillars: { title: string; detail: string }[];
  acquisitionLinkage: string;
}

export interface LmsModuleItem {
  id: string;
  code: string;
  title: string;
  subject: 'Pure Mathematics' | 'Physical Sciences';
  grade: 'Grade 8–9' | 'Grade 10' | 'Grade 11' | 'Grade 12 (NSC)';
  nscPaperWeight: string;
  completionRatePct: number;
  avgCohortGainPct: number;
  interactiveFormula: string;
  masteryCheckpoints: string[];
}

export const BUSINESS_INFO = {
  name: 'SIGWADI MATHS AND SCIENCE TUTORIAL',
  shortName: 'Sigwadi Tutorial & LMS',
  director: 'Mr Avuma Sigwadi',
  qualification: 'Bachelor of Commerce (BCom) Degree in Accounting',
  institution: 'Nelson Mandela University',
  motto: 'Building Strong Foundations for Academic Excellence',
  positioning:
    'A quantitative-grade academic partner & CAPS/NSC Learning Management System helping South African high school learners master Mathematics and Physical Sciences.',
  primaryServices: 'CAPS & NSC Mathematics and Physical Sciences Tutoring & Interactive LMS',
  targetMarket: 'High School Learners (Grades 8 to 12) · Parents · Partner Schools',
  location: 'Eastern Cape & Nationwide Online, South Africa',
  phone: '+27 78 456 8920',
  whatsappNumber: '27784568920',
  email: 'info@sigwaditutorial.co.za',
  operatingHours: 'Mon - Fri: 15:30 - 18:30 | Sat: 08:30 - 16:00 | School Holidays: 09:00 - 15:00',
};

export const BUSINESS_PLAN_CHAPTERS: BusinessPlanChapter[] = [
  {
    id: 'exec-summary',
    sectionNumber: '01',
    title: 'Executive Summary & Strategic Thesis',
    category: 'Strategy & Governance',
    executiveHeadline: 'Bridging South Africa’s STEM Deficit Through Structured Cohort Tutoring & AI-Enabled LMS Diagnostics',
    summary:
      'Sigwadi Maths and Science Tutorial is a premier academic institution and hybrid Learning Management System (LMS) founded and directed by Mr Avuma Sigwadi (BCom Accounting, Nelson Mandela University). Designed for Grades 8 to 12 across the Eastern Cape and nationwide online, the business combines disciplined small-group cohorts (max 8 learners) with continuous diagnostic tracking to elevate learners into NSC Level 6 and Level 7 distinction bands.',
    keyMetrics: [
      { label: 'Target Grade Span', value: 'Grades 8–12', context: 'Senior Phase (8–9) & FET/NSC (10–12)' },
      { label: 'Max Cohort Cap', value: '8 Learners', context: 'High individual attention with group unit economics' },
      { label: 'Gross Cohort Margin', value: '68.4%', context: 'At 75% seat utilization (6 of 8 seats filled)' },
      { label: 'Target LTV : CAC', value: '6.8 : 1', context: '9.5-month average learner retention cycle' },
    ],
    strategicPillars: [
      {
        title: 'Foundational Remediation + Exam Execution',
        detail: 'Simultaneously repairing Grade 8–10 algebraic/scientific fluency gaps while drilling 1.2-minute-per-mark NSC exam technique.',
      },
      {
        title: 'Hybrid Physical + Digital LMS Scalability',
        detail: 'Physical tutorial cohorts in the Eastern Cape paired with nationwide online interactive whiteboard instruction and on-demand CAPS vaults.',
      },
      {
        title: 'Accounting-Grade Operational Governance',
        detail: 'Financial modeling, unit-cost discipline, and verifiable monthly parent performance audits led by a BCom Accounting graduate.',
      },
    ],
    acquisitionLinkage: 'Positions the academy not as casual homework help, but as a measurable academic ROI engine for ambitious families.',
  },
  {
    id: 'leadership-governance',
    sectionNumber: '02',
    title: 'Company Ownership, Leadership & Governance',
    category: 'Strategy & Governance',
    executiveHeadline: 'Directed by Mr Avuma Sigwadi — BCom Accounting (Nelson Mandela University)',
    summary:
      'Unlike informal tutoring providers, Sigwadi Maths and Science Tutorial operates under rigorous institutional governance. Director Avuma Sigwadi applies university-trained financial accounting, systematic auditing, and analytical problem-solving to both curriculum delivery and business scalability.',
    keyMetrics: [
      { label: 'Director Qualification', value: 'BCom Accounting', context: 'Nelson Mandela University (NMU)' },
      { label: 'Tutor Vetting Threshold', value: 'Top 10% STEM', context: '75%+ subject mastery & pedagogical screening' },
      { label: 'Parent Audit Cadence', value: 'Monthly', context: 'Section 8.4 mandatory written progress reports' },
      { label: 'Compliance Standard', value: '100% CAPS/NSC', context: 'Aligned with DBE national exam guidelines' },
    ],
    strategicPillars: [
      {
        title: 'Director-Led Academic Auditing',
        detail: 'Every cohort’s weekly quiz scores and attendance logs are audited to trigger early remediation before term exams.',
      },
      {
        title: 'Structured Tutor Recruitment & Training',
        detail: 'University STEM & Commerce top achievers trained in the Sigwadi step-by-step theorem and problem-decomposition method.',
      },
      {
        title: 'Transparent Fee & Contract Structure',
        detail: 'Monthly advance tuition billing with clear sibling concessions (10% off) and multi-subject bundle incentives.',
      },
    ],
    acquisitionLinkage: 'Directly resolves parental trust anxiety by anchoring credibility in verifiable Nelson Mandela University qualifications.',
  },
  {
    id: 'market-analysis',
    sectionNumber: '03',
    title: 'Market Analysis & Demand Intelligence',
    category: 'Market & Acquisition',
    executiveHeadline: 'Capturing High-Intent Demand Across Eastern Cape Hubs & Nationwide Digital Channels',
    summary:
      'Across South Africa, overcrowded classrooms (often 35–50+ learners per teacher) leave capable high school students without individualized conceptual breakdown in Pure Mathematics and Physical Sciences. Parents actively seek structured, trustworthy intervention to secure university Bachelor Degree endorsements in Engineering, Medicine, Commerce, and Actuarial Science.',
    keyMetrics: [
      { label: 'Primary Buyer Persona', value: 'Parents (32–55)', context: 'Investing in university degree access for children' },
      { label: 'Peak Acquisition Windows', value: '4 Cycles / Yr', context: 'Jan/Feb Intake, May/June Exams, Aug/Sept Trials, Oct Finals' },
      { label: 'Bundle Adoption Rate', value: '64%', context: 'Learners enrolling in both Pure Maths & Physical Science' },
      { label: 'Referral Conversion', value: '38%', context: 'Driven by measurable Term-over-Term mark improvements' },
    ],
    strategicPillars: [
      {
        title: 'Segment A: FET Matric & Pre-Matric (Grades 10–12)',
        detail: 'Urgent high-willingness-to-pay demand driven by university APS score requirements and NSC Paper 1 & 2 complexity.',
      },
      {
        title: 'Segment B: Senior Phase Foundation (Grades 8–9)',
        detail: 'Preventative mastery ensuring learners choose Pure Mathematics over Mathematical Literacy in Grade 10.',
      },
      {
        title: 'Segment C: Institutional & School Partnerships',
        detail: 'Weekend revision bootcamps and Saturday masterclasses delivered in collaboration with local high schools and SGBs.',
      },
    ],
    acquisitionLinkage: 'Identifies exact seasonal pain points so Gemini AI marketing campaigns strike when parental urgency peaks.',
  },
  {
    id: 'marketing-acquisition',
    sectionNumber: '04',
    title: 'AI-Driven Marketing & Client Acquisition Engine',
    category: 'Market & Acquisition',
    executiveHeadline: 'Data-Driven Diagnostic Funnels, WhatsApp Viral Loops & Local School Authority',
    summary:
      'Section 6 of the Sigwadi Business Plan establishes a multi-channel client acquisition machine. By integrating Gemini AI live market intelligence with free baseline diagnostic assessments, the platform converts cold parent inquiries into high-retention cohort enrolments at a fraction of traditional advertising costs.',
    keyMetrics: [
      { label: 'Lead Magnet Conversion', value: '31.5%', context: 'Free CAPS Diagnostic Quiz to Consultation booking' },
      { label: 'Target Blended CAC', value: 'R280 – R420', context: 'Across WhatsApp, Facebook Local & School Referrals' },
      { label: 'Sibling & Referral Lift', value: '10% Discount', context: 'Built-in viral incentive for multi-child families' },
      { label: 'Consultation-to-Paid', value: '74%', context: 'Assisted by personalized 8-week grade lift roadmaps' },
    ],
    strategicPillars: [
      {
        title: 'Stage 1: Interactive Diagnostic Lead Capture',
        detail: 'Learners take a 5-minute CAPS concept check; parents receive an instant AI-generated gap analysis and recommended cohort.',
      },
      {
        title: 'Stage 2: Hyper-Local WhatsApp & Social Proof',
        detail: 'Targeted Term-specific broadcasts showcasing real topic score jumps (e.g., Euclidean Geometry +34% in 6 weeks).',
      },
      {
        title: 'Stage 3: Retention & Upsell Flywheel',
        detail: 'Monthly parent progress reports lock in retention and naturally upsell learners into June/September Holiday Bootcamps.',
      },
    ],
    acquisitionLinkage: 'Powers the live Gemini AI Marketing Studio embedded directly in this portfolio.',
  },
  {
    id: 'lms-operations',
    sectionNumber: '05',
    title: 'LMS Architecture & Section 8.4 Quality Monitoring',
    category: 'LMS & Operations',
    executiveHeadline: 'Closed-Loop Pedagogical Delivery: Diagnose → Instruct → Drill → Audit → Report',
    summary:
      'Operational excellence is enforced through the 4-Pillar Sigwadi Monitoring System (Section 8.4). Every enrolled learner is tracked across baseline diagnostic scores, weekly micro-assessments, past NSC paper timed drills, and monthly written parent evaluation audits.',
    keyMetrics: [
      { label: 'Session Cadence', value: '2 × 90 Min / Wk', context: 'Per subject in flagship small-group cohorts' },
      { label: 'NSC Exam Pacing Rule', value: '1.2 Min / Mark', context: '180 minutes for 150 marks strictly drilled' },
      { label: 'Past Paper Vault', value: '10+ Years DBE', context: 'Annotated NSC & provincial trial memorandums' },
      { label: 'Avg Score Improvement', value: '+24% to +38%', context: 'Measured across 2 consecutive school terms' },
    ],
    strategicPillars: [
      {
        title: 'Baseline Diagnostic Onboarding',
        detail: 'Pinpoints exact root-cause weaknesses from earlier grades (e.g., fractions, exponents, trig ratios, stoichiometry).',
      },
      {
        title: 'Interactive LMS Formula & Exam Sandbox',
        detail: 'Visualizes functions, calculus derivatives, Newton’s laws, and chemical equilibrium shifts with immediate feedback.',
      },
      {
        title: 'Monthly Written Parent Progress Audits',
        detail: 'Provides parents with transparent attendance percentages, topic-by-topic mastery bars, and Director commentary.',
      },
    ],
    acquisitionLinkage: 'Tangible proof of progress turns existing parents into vocal brand ambassadors in school WhatsApp groups.',
  },
  {
    id: 'financial-plan',
    sectionNumber: '06',
    title: 'Financial Plan, Unit Economics & Socio-Economic Impact',
    category: 'Financials & Impact',
    executiveHeadline: 'High-Margin Recurring Tuition Model Coupled with Eastern Cape Youth Empowerment (Section 10 & 13)',
    summary:
      'Grounded in BCom Accounting rigor, the revenue model balances accessibility for South African families (R600–R1,000/month group cohorts) with strong unit profitability. Low fixed overhead and high cohort density generate sustainable cash flow while expanding South Africa’s pipeline of future engineers, doctors, and chartered accountants.',
    keyMetrics: [
      { label: 'Flagship Cohort Tuition', value: 'R600 – R1,000', context: 'Per learner / month (Dual bundle ~R1,480)' },
      { label: '1-on-1 & Online Rates', value: 'R100 – R300/hr', context: 'High-margin flexible capacity utilization' },
      { label: 'Holiday Bootcamp Fee', value: 'R500 – R1,500', context: 'Seasonal cash-flow spikes in Term 1, 2 & 3 breaks' },
      { label: 'Breakeven Threshold', value: '18 Learners', context: 'Rapid operational breakeven on lean fixed costs' },
    ],
    strategicPillars: [
      {
        title: 'Diversified 5-Stream Revenue Architecture',
        detail: 'Combines predictable monthly cohort recurring revenue with high-margin 1-on-1 hours and seasonal exam revision blocks.',
      },
      {
        title: 'Disciplined Cost & Reinvestment Allocation',
        detail: 'Reinvests 12–15% of gross revenue into targeted client acquisition and printed CAPS study workbooks.',
      },
      {
        title: 'Section 13 Social & Economic Community Impact',
        detail: 'Unlocks university bursary eligibility for high school learners while employing high-achieving university graduates.',
      },
    ],
    acquisitionLinkage: 'Validates long-term commercial viability for partners, school governing bodies, and corporate CSI sponsors.',
  },
];

export const LMS_MODULES: LmsModuleItem[] = [
  {
    id: 'lms-math-1',
    code: 'MAT-P1-01',
    title: 'Algebra, Quadratic Inequalities & Nature of Roots',
    subject: 'Pure Mathematics',
    grade: 'Grade 12 (NSC)',
    nscPaperWeight: '±25 Marks (Paper 1)',
    completionRatePct: 94,
    avgCohortGainPct: 32,
    interactiveFormula: 'x = [-b ± √(b² - 4ac)] / 2a   |   Δ = b² - 4ac',
    masteryCheckpoints: [
      'Standard form rearrangement & zero-product factorizing',
      'Critical values & sign-table / parabola sketch for inequalities',
      'Simultaneous linear-quadratic substitution without sign errors',
      'Discriminant Δ analysis for real, rational, equal, or non-real roots',
    ],
  },
  {
    id: 'lms-math-2',
    code: 'MAT-P1-03',
    title: 'Differential Calculus, Cubic Graphs & Optimization',
    subject: 'Pure Mathematics',
    grade: 'Grade 12 (NSC)',
    nscPaperWeight: '±35 Marks (Paper 1)',
    completionRatePct: 89,
    avgCohortGainPct: 36,
    interactiveFormula: "f'(x) = lim(h→0) [f(x+h) - f(x)] / h   |   f''(x) = 0 (Inflection)",
    masteryCheckpoints: [
      'First principles differentiation with strict limit notation',
      'Power rule after eliminating fractions & radical surds',
      'Stationary points f’(x) = 0, concavity & cubic curve sketching',
      '3D surface area / volume maximum & minimum word problems',
    ],
  },
  {
    id: 'lms-math-3',
    code: 'MAT-P2-04',
    title: 'Euclidean Circle Geometry & Similarity Riders',
    subject: 'Pure Mathematics',
    grade: 'Grade 11',
    nscPaperWeight: '±50 Marks (Paper 2)',
    completionRatePct: 86,
    avgCohortGainPct: 39,
    interactiveFormula: 'Tan-Chord Theorem   |   Proportionality: AD/DB = AE/EC',
    masteryCheckpoints: [
      'Color-coding equal angles subtended by the same arc/chord',
      '3 methods to prove a cyclic quadrilateral in multi-step riders',
      'Tangent-chord theorem & angle in a semi-circle (90°) identification',
      'Equiangular triangle similarity (AAA) leading to ratio products',
    ],
  },
  {
    id: 'lms-sci-1',
    code: 'PHY-P1-01',
    title: 'Newtonian Mechanics, Momentum & Work-Energy Theorem',
    subject: 'Physical Sciences',
    grade: 'Grade 12 (NSC)',
    nscPaperWeight: '±65 Marks (Physics P1)',
    completionRatePct: 91,
    avgCohortGainPct: 34,
    interactiveFormula: 'F_net = m·a   |   W_net = ΔE_k = ½m(v_f² - v_i²)',
    masteryCheckpoints: [
      'Free-body diagrams on inclined planes with resolved weight components',
      'Simultaneous two-body tension equations (Newton’s Second Law)',
      'Conservation of linear momentum & impulse-momentum theorem',
      'Work done by non-conservative frictional forces on rough inclines',
    ],
  },
  {
    id: 'lms-sci-2',
    code: 'CHE-P2-02',
    title: 'Chemical Equilibrium (Kc) & Le Chatelier’s Principle',
    subject: 'Physical Sciences',
    grade: 'Grade 12 (NSC)',
    nscPaperWeight: '±40 Marks (Chemistry P2)',
    completionRatePct: 93,
    avgCohortGainPct: 37,
    interactiveFormula: 'K_c = [Products]^p / [Reactants]^r   (Aqueous & Gas only)',
    masteryCheckpoints: [
      'RICE table stoichiometric mole ratios & volume concentration division',
      'Le Chatelier 3-step memo structure (Disturbance → System Opposition → Shift)',
      'Rate vs Concentration & Concentration vs Time graph interpretation',
      'Temperature as the sole factor altering the equilibrium constant Kc',
    ],
  },
  {
    id: 'lms-math-4',
    code: 'MAT-FND-08',
    title: 'Foundational Algebraic Fluency, Exponents & Functions',
    subject: 'Pure Mathematics',
    grade: 'Grade 8–9',
    nscPaperWeight: 'Core FET Gateway',
    completionRatePct: 96,
    avgCohortGainPct: 31,
    interactiveFormula: 'a^m · a^n = a^(m+n)   |   y = mx + c',
    masteryCheckpoints: [
      'Integer & fraction operations without calculator dependency',
      'Laws of exponents, scientific notation, and algebraic products',
      'Linear equations, Cartesian plane gradients, and straight-line graphs',
      'Geometry of straight lines, parallel/transversal angles & triangles',
    ],
  },
];

export const INITIAL_MARKETING_INTELLIGENCE = {
  strategyTitle: 'Eastern Cape FET Distinction Accelerator & Diagnostic Funnel',
  executiveThesis:
    'By deploying a zero-friction CAPS Diagnostic Concept Check via school parent WhatsApp networks in Gqeberha, East London, and Mthatha, Sigwadi Tutorial captures high-intent Grade 10–12 families at an estimated R310 CAC and converts 74% of diagnostic consultations into R1,480/month dual-subject cohorts.',
  unitEconomics: {
    estimatedCacZar: 310,
    projectedLtvZar: 11840,
    ltvToCacRatio: '38.2 : 1',
    projectedNewLearnersMonthly: 16,
    projectedMonthlyRecurringRevenueZar: 22400,
    paybackPeriodWeeks: 1.4,
  },
  marketInsights: [
    {
      insightHeadline: 'Paper 2 Euclidean Geometry & Chemistry Kc Trigger Peak Parental Urgency',
      dataPointOrBenchmark: '68% of FET learners lose 25+ marks in Euclidean Geometry & Stoichiometry alone',
      parentPainPointAddressed:
        'Parents see capable children stuck between 45%–55%, risking university Bachelor endorsement in Engineering, Accounting, and Health Sciences.',
      strategicAction:
        'Lead marketing campaigns with a free 15-minute "Paper 2 Geometry & Chemistry Diagnostic Audit" personally reviewed under Director Avuma Sigwadi’s framework.',
    },
    {
      insightHeadline: 'Dual-Subject Bundle Pricing Multiplies Cohort Revenue Density',
      dataPointOrBenchmark: '25% Multi-Subject Bundle Concession lifts average revenue per learner from R850 to R1,488/mo',
      parentPainPointAddressed:
        '91% of Pure Mathematics learners also take Physical Sciences and struggle with overlapping algebraic manipulation.',
      strategicAction:
        'Position the Dual Mathematics + Physical Sciences Small-Group Cohort as the default recommended tier during enrolment.',
    },
    {
      insightHeadline: 'Section 8.4 Monthly Written Parent Reports Drive 38% Organic Referrals',
      dataPointOrBenchmark: '96% monthly retention when parents receive quantified baseline-vs-current score tables',
      parentPainPointAddressed:
        'Parents often pay private tutors with zero visibility into whether their child is actually improving before report card day.',
      strategicAction:
        'Include a sample anonymized Sigwadi Monthly Parent Progress Report in every WhatsApp broadcast and Facebook carousel.',
    },
    {
      insightHeadline: 'BCom Accounting Leadership Differentiates Sigwadi from Casual Tutors',
      dataPointOrBenchmark: '2.4x higher consultation booking rate when highlighting NMU BCom Accounting leadership',
      parentPainPointAddressed:
        'Families want disciplined, structured exam technique and quantitative rigor rather than unstructured homework supervision.',
      strategicAction:
        'Anchor all ad creatives and school partnership letters with Mr Avuma Sigwadi’s academic credentials and the 8-learner cohort cap.',
    },
  ],
  campaignCopywriting: {
    whatsappBroadcastScript:
      '🎓 *SIGWADI MATHS & SCIENCE TUTORIAL (Grades 8–12)*\nIs your child aiming for 70%+ in Pure Mathematics & Physical Sciences this term?\n\nDirected by *Mr Avuma Sigwadi (BCom Accounting, NMU)*, we run strict *Max-8 Learner Cohorts* & *Live Online LMS Classes* aligned 100% with the CAPS & NSC exam syllabus.\n\n✅ Weekly diagnostic quizzes & past NSC paper drills\n✅ Monthly written parent progress reports\n✅ Dual-Subject Bundle & 10% Sibling Discounts\n\n📲 *Reply "DIAGNOSTIC" on WhatsApp (+27 78 456 8920)* to claim a Free Baseline Assessment & reserve your child’s cohort seat!',
    socialMediaAdHeadline:
      'From 48% to 78%+ in NSC Maths & Physical Science: Reserve Your Child’s Seat in a Max-8 Sigwadi Cohort',
    socialMediaAdBody:
      'Don’t wait for final matric or term report cards to discover conceptual gaps in Euclidean Geometry, Calculus, or Physics. At Sigwadi Maths and Science Tutorial (directed by Avuma Sigwadi, BCom Accounting, NMU), every learner completes a baseline diagnostic, trains on real NSC past papers using our 1.2-minute-per-mark pacing engine, and receives a monthly written parent audit.',
    schoolPartnershipEmailPitch:
      'Subject: Academic Partnership Proposal: CAPS & NSC Maths/Science Diagnostic Support for Grade 10–12 Learners\n\nDear Principal & Head of Department,\n\nSigwadi Maths and Science Tutorial (directed by NMU BCom Accounting alumnus Mr Avuma Sigwadi) partners with Eastern Cape high schools to provide structured afternoon cohorts and Saturday NSC Paper 1 & Paper 2 revision masterclasses. We would be honoured to offer your Grade 11 and 12 learners a complimentary Baseline Diagnostic Assessment and Exam Time-Pacing Workshop ahead of upcoming trials.',
    irresistibleLeadMagnetOffer:
      'Complimentary 20-Minute CAPS Diagnostic Concept Audit + Personalized 8-Week Grade-Lift Roadmap + R50 Early Enrolment Credit',
  },
  conversionFunnelStages: [
    {
      stageName: '01. Diagnostic Lead Capture',
      conversionMechanism: 'Interactive Online CAPS Quiz & WhatsApp "DIAGNOSTIC" Keyword Trigger',
      targetConversionRate: '34% Visitor-to-Lead',
      kpiMetric: '48+ Qualified Parent Leads / Month',
    },
    {
      stageName: '02. Academic Audit & Fee Calculator',
      conversionMechanism: '15-Min Director Consultation + Dual-Subject Bundle Quote (R1,488/mo)',
      targetConversionRate: '74% Lead-to-Enrolment',
      kpiMetric: '16+ New Cohort Enrolments / Month',
    },
    {
      stageName: '03. Section 8.4 Retention & Referral Loop',
      conversionMechanism: 'Monthly Written Parent Progress Report + 10% Sibling/Referral Concession',
      targetConversionRate: '94% Term-over-Term Retention',
      kpiMetric: 'R11,840 Average Learner LTV',
    },
  ],
};

export const MATHEMATICS_CURRICULUM: SubjectTopic[] = [
  {
    title: 'Algebra, Equations & Inequalities',
    category: 'Paper 1 Core',
    grades: ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Quadratic equations', 'Exponential laws', 'Simultaneous equations', 'Surds & inequalities', 'Nature of roots'],
    examWeight: '±25 marks (Matric Paper 1)',
    description: 'Master algebraic fluency, factoring techniques, quadratic formulae, and non-linear simultaneous equations.',
  },
  {
    title: 'Functions, Inverses & Graphs',
    category: 'Paper 1 Core',
    grades: ['Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Parabolas & hyperbolas', 'Exponential graphs', 'Inverse functions f⁻¹(x)', 'Cubic functions', 'Transformations & asymptotes'],
    examWeight: '±35 marks (Matric Paper 1)',
    description: 'Deep conceptual visualization of relationships, axis intercepts, axis of symmetry, domain and range.',
  },
  {
    title: 'Differential Calculus & Optimization',
    category: 'Paper 1 Advanced',
    grades: ['Grade 12'],
    keyConcepts: ['Limits & first principles', 'Rules for differentiation', 'Stationary points & concavity', 'Tangent equations', 'Min/Max optimization problems'],
    examWeight: '±35 marks (Matric Paper 1)',
    description: 'Rigorous foundation in rate of change, curve sketching of cubic polynomials, and real-world geometric optimization.',
  },
  {
    title: 'Financial Mathematics & Sequences',
    category: 'Paper 1 Applied',
    grades: ['Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Arithmetic & geometric series', 'Sigma notation & sum to infinity', 'Compound interest & nominal rates', 'Present & future value annuities', 'Sinking funds & loan amortization'],
    examWeight: '±25 marks (Matric Paper 1)',
    description: 'Practical financial modeling led with accounting-grade clarity by Director Avuma Sigwadi.',
  },
  {
    title: 'Euclidean Geometry & Circle Theorems',
    category: 'Paper 2 Core',
    grades: ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Angles subtended by chords/arcs', 'Cyclic quadrilaterals', 'Tangent-chord theorem', 'Proportionality theorem', 'Similarity proofs'],
    examWeight: '±50 marks (Matric Paper 2)',
    description: 'Conquering the most feared section in the South African matric exam through systematic deductive proof techniques.',
  },
  {
    title: 'Analytical Geometry',
    category: 'Paper 2 Core',
    grades: ['Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Distance, midpoint & gradient', 'Angle of inclination', 'Equation of lines & tangents', 'Circles with origin/arbitrary centre', 'Intersection points'],
    examWeight: '±40 marks (Matric Paper 2)',
    description: 'Connecting coordinate geometry and algebraic reasoning to solve two-dimensional spatial problems.',
  },
  {
    title: 'Trigonometry & 2D/3D Problems',
    category: 'Paper 2 Core',
    grades: ['Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Trig ratios & reduction formulae', 'Compound & double angle identities', 'General solutions', 'Sine, cosine & area rules in 3D', 'Trig graphs'],
    examWeight: '±40 marks (Matric Paper 2)',
    description: 'Systematic manipulation of trig identities and spatial visualization of heights and distances in three dimensions.',
  },
  {
    title: 'Statistics & Probability',
    category: 'Paper 1 & 2',
    grades: ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Five-number summary & box plots', 'Standard deviation & normal distribution', 'Bivariate data & regression lines', 'Venn & tree diagrams', 'Fundamental counting principle'],
    examWeight: '±20 marks each paper',
    description: 'Empirical data analysis, correlation coefficients, and probabilistic reasoning applied to modern contexts.',
  },
];

export const SCIENCE_CURRICULUM: SubjectTopic[] = [
  {
    title: 'Mechanics & Newton’s Laws',
    category: 'Physics (Paper 1)',
    grades: ['Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Vectors & free-body diagrams', 'Newton’s 1st, 2nd, 3rd & Universal Gravitation', 'Linear momentum & impulse', 'Work, energy & conservation', 'Vertical projectile motion in 1D'],
    examWeight: '±65 marks (Physics Paper 1)',
    description: 'Clear kinematic equations, force vector resolution, and kinetic-potential energy transformations.',
  },
  {
    title: 'Electricity & Electrodynamics',
    category: 'Physics (Paper 1)',
    grades: ['Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Coulomb’s Law & electric field strength', 'Ohm’s law & internal resistance (emf)', 'Series-parallel circuit analysis', 'Electromagnetic induction (Faraday)', 'AC generators, motors & alternating current'],
    examWeight: '±55 marks (Physics Paper 1)',
    description: 'Step-by-step circuit calculations, potential divider systems, and magnetic flux mechanics.',
  },
  {
    title: 'Waves, Sound & Doppler Effect',
    category: 'Physics (Paper 1)',
    grades: ['Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Wave properties & sound propagation', 'Doppler Effect with moving source/listener', 'Red shift & expanding universe', 'Photoelectric effect & photon quanta'],
    examWeight: '±30 marks (Physics Paper 1)',
    description: 'Wave equation mastery, frequency shifts in sound, and quantum interactions between light and matter.',
  },
  {
    title: 'Chemical Change, Rates & Equilibrium',
    category: 'Chemistry (Paper 2)',
    grades: ['Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Collision theory & Maxwell-Boltzmann curves', 'Factors affecting reaction rates', 'Reversible reactions & dynamic equilibrium', 'Le Chatelier’s principle', 'Equilibrium constant (Kc) calculations'],
    examWeight: '±40 marks (Chemistry Paper 2)',
    description: 'Understanding rates, activation energy barriers, and industrial applications (Haber & Contact processes).',
  },
  {
    title: 'Acids, Bases & Stoichiometry',
    category: 'Chemistry (Paper 2)',
    grades: ['Grade 10', 'Grade 11', 'Grade 12'],
    keyConcepts: ['Mole concept & Avogadro’s constant', 'Percentage yield & purity', 'Arrhenius & Lowry-Brønsted theories', 'Standard solutions & titrations', 'pH scale & hydrolysis of salts'],
    examWeight: '±35 marks (Chemistry Paper 2)',
    description: 'Precision quantitative chemistry, balanced equations, molar concentrations, and neutralization reactions.',
  },
  {
    title: 'Electrochemistry (Galvanic & Electrolytic)',
    category: 'Chemistry (Paper 2)',
    grades: ['Grade 11', 'Grade 12'],
    keyConcepts: ['Oxidation numbers & redox reactions', 'Table 4 standard electrode potentials', 'Galvanic cell notation & standard conditions', 'Cell potential (E°cell) calculations', 'Electrolysis & refining of copper'],
    examWeight: '±35 marks (Chemistry Paper 2)',
    description: 'Mastering electron flow, salt bridge functions, anode/cathode polarity, and industrial electrochemical cells.',
  },
  {
    title: 'Organic Chemistry & Macromolecules',
    category: 'Chemistry (Paper 2)',
    grades: ['Grade 11', 'Grade 12'],
    keyConcepts: ['Homologous series & functional groups', 'IUPAC systematic nomenclature', 'Structural isomers (chain, positional, functional)', 'Intermolecular forces vs boiling points', 'Addition, substitution & elimination reactions'],
    examWeight: '±40 marks (Chemistry Paper 2)',
    description: 'Complete mastery of alkanes, alkenes, haloalkanes, alcohols, carboxylic acids, esters, and reaction pathways.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'group-tutoring',
    name: 'Small-Group Tutoring',
    priceRange: 'R600 – R1,000',
    period: 'per learner / month',
    minPrice: 600,
    maxPrice: 1000,
    highlight: true,
    description: 'Our flagship programme. Focused cohorts of maximum 6–8 learners ensuring both collaborative energy and individual attention.',
    features: [
      '2 structured 90-minute sessions per week',
      'Full CAPS & NSC syllabus coverage',
      'Weekly diagnostic homework check & quizzes',
      'Monthly detailed parent progress report',
      'Curated past matric paper booklets included',
      'Dedicated WhatsApp tutor query group access',
    ],
    idealFor: 'Consistent weekly grade reinforcement & steady grade advancement.',
  },
  {
    id: 'individual-tutoring',
    name: '1-on-1 Individual Tutoring',
    priceRange: 'R150 – R300',
    period: 'per hour',
    minPrice: 150,
    maxPrice: 300,
    description: 'High-intensity, private one-on-one sessions tailored directly to identify and resolve specific learner learning gaps.',
    features: [
      '100% customized lesson pace & topic selection',
      'Direct focus on diagnosed exam stumbling blocks',
      'Flexible scheduling (afternoons & weekends)',
      'Immediate real-time feedback & correction',
      'Step-by-step past examination coaching',
      'Direct parent updates after every milestone',
    ],
    idealFor: 'Learners needing rapid turnaround, specialized geometry or calculus catch-up.',
  },
  {
    id: 'holiday-programme',
    name: 'Intensive Holiday Bootcamp',
    priceRange: 'R500 – R1,500',
    period: 'per holiday programme',
    minPrice: 500,
    maxPrice: 1500,
    description: 'Accelerated holiday workshops during Term 1, 2, and 3 school holidays to master tricky topics before school resumes.',
    features: [
      'Daily 3-hour intensive workshop sessions (5–10 days)',
      'Term catch-up and forward-learning modules',
      'Comprehensive printed revision summary notes',
      'Mock test under strict timed exam conditions',
      'Problem-solving strategies and shortcut drills',
      'Certificate of module completion',
    ],
    idealFor: 'Holiday revision, filling prerequisite gaps, and getting ahead of term work.',
  },
  {
    id: 'matric-exam-revision',
    name: 'NSC Matric Examination Revision',
    priceRange: 'R500 – R1,500',
    period: 'per revision block',
    minPrice: 500,
    maxPrice: 1500,
    description: 'Structured final preparation specifically targeted for June Trials and final October/November National Senior Certificate exams.',
    features: [
      '10 years of curated NSC & DBE past paper walkthroughs',
      'Paper 1 and Paper 2 breakdown masterclasses',
      'Marker guideline & memo deduction analysis',
      'Strict time-management & speed drills',
      'Targeted booster sessions on high-mark questions',
      'Exam mental readiness & panic management',
    ],
    idealFor: 'Grade 12 learners aiming for university Bachelor Degree endorsement.',
  },
  {
    id: 'online-tutoring',
    name: 'Digital & Online Tutoring',
    priceRange: 'R100 – R250',
    period: 'per hour',
    minPrice: 100,
    maxPrice: 250,
    description: 'Live interactive digital sessions with digital whiteboard, recorded lessons, and cloud resource access from any location in South Africa.',
    features: [
      'Live HD video instruction with interactive pen tablet',
      'Lesson recordings available for re-watching',
      'Digital PDF notes sent after every class',
      'Zero commute time & comfortable home study',
      'Interactive quiz checkpoints & screen share',
      'Accessible across Eastern Cape & nationwide',
    ],
    idealFor: 'Learners outside physical centre radius or preferring remote flexibility.',
  },
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    subject: 'Mathematics',
    grade: 'Grade 12',
    topic: 'Differential Calculus',
    question: 'Determine the derivative f’(x) if f(x) = (3x² - 4) / x.',
    options: [
      'A) 3 + 4x⁻²',
      'B) 6x - 4',
      'C) 3 - 4x⁻²',
      'D) 6x / x²',
    ],
    correctIndex: 0,
    explanation: 'Rewrite f(x) first by dividing each term by x: f(x) = 3x - 4x⁻¹. Differentiating with respect to x gives f’(x) = 3 - 4(-1)x⁻² = 3 + 4x⁻².',
  },
  {
    id: 2,
    subject: 'Mathematics',
    grade: 'Grade 11',
    topic: 'Euclidean Geometry',
    question: 'In circle geometry, what is the angle subtended by a diameter at the circumference?',
    options: [
      'A) 45°',
      'B) 90° (Right angle)',
      'C) 180°',
      'D) 60°',
    ],
    correctIndex: 1,
    explanation: 'The angle subtended by a diameter at any point on the circumference is always a right angle (90°). Theorem: Angle in a semi-circle.',
  },
  {
    id: 3,
    subject: 'Physical Sciences',
    grade: 'Grade 12',
    topic: 'Newton’s Laws of Motion',
    question: 'A 5 kg block accelerates at 3 m·s⁻² across a rough horizontal floor with a kinetic frictional force of 4 N. What is the applied horizontal force?',
    options: [
      'A) 11 N',
      'B) 15 N',
      'C) 19 N',
      'D) 20 N',
    ],
    correctIndex: 2,
    explanation: 'According to Newton’s Second Law: Fnet = m · a. Fnet = Fapplied - Ffriction. Therefore (5 kg)(3 m·s⁻²) = Fapplied - 4 N => 15 N = Fapplied - 4 N => Fapplied = 19 N.',
  },
  {
    id: 4,
    subject: 'Physical Sciences',
    grade: 'Grade 12',
    topic: 'Chemical Equilibrium',
    question: 'For an exothermic reaction at dynamic equilibrium: A(g) + B(g) ⇌ C(g) + heat. What happens to the yield of C if the temperature is increased?',
    options: [
      'A) The yield of C increases because particles move faster.',
      'B) The yield of C decreases as equilibrium shifts to the left.',
      'C) The equilibrium constant (Kc) remains unchanged.',
      'D) The reverse reaction is favored and Kc increases.',
    ],
    correctIndex: 1,
    explanation: 'By Le Chatelier’s principle, increasing the temperature favours the endothermic reaction (the reverse reaction in this case) to absorb added heat. Therefore, equilibrium shifts left and the yield of product C decreases (and Kc decreases).',
  },
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    question: 'How do you structure small-group tutoring classes?',
    answer: 'We maintain a strict maximum of 6 to 8 learners per class cohort grouped by grade and subject. This ensures every student gets personal assistance from the tutor while benefiting from group problem-solving dynamics.',
  },
  {
    question: 'Are your programmes aligned with the South African CAPS curriculum?',
    answer: 'Yes, 100%. All tutorials, past papers, test series, and revision materials strictly adhere to the South African Department of Basic Education CAPS curriculum and National Senior Certificate (NSC) examination requirements.',
  },
  {
    question: 'How do parents receive feedback on learner progress?',
    answer: 'As detailed in Section 8.4 of our academic plan, we maintain systematic monitoring records. Parents receive monthly progress reports highlighting attendance, test marks, detected weaknesses, and measured academic improvement.',
  },
  {
    question: 'Who directs the tutorial and oversees tutor qualifications?',
    answer: 'The academy is directed by Mr Avuma Sigwadi, who holds a Bachelor of Commerce (BCom) Degree in Accounting from Nelson Mandela University. All our Mathematics and Science tutors are vetted for strong academic credentials, subject mastery, and empathetic teaching capability.',
  },
  {
    question: 'Do you offer holiday programmes and weekend revision?',
    answer: 'Yes! We run specialized weekend morning sessions and intensive holiday bootcamps during the March, June/July, and September school holidays to consolidate foundational concepts and accelerate exam readiness.',
  },
  {
    question: 'What discounts or promotional packages are available?',
    answer: 'We provide sibling/family discounts (10% off for second child), multi-subject bundle discounts (enrolling in both Mathematics and Science), and early bird registration fee reductions.',
  },
  {
    question: 'Can learners join online if they live outside the Eastern Cape?',
    answer: 'Yes! Our digital online tutoring tier features live interactive screen-share, digital whiteboard problem breakdown, and access to complete digital lesson recordings and PDF notes.',
  },
];
