export interface PracticeMetric {
  value: string;
  label: string;
  context: string;
}

export interface DisciplineItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  outcomeMetric: string;
  span: 'wide' | 'standard';
  typologyPreset: string;
}

export type ProjectCategory =
  | 'All Works'
  | 'Commercial & Mixed-Use'
  | 'Industrial & Logistics'
  | 'Civic & Institutional'
  | 'Religious & Civic Architecture'
  | 'Transportation / Aviation Infrastructure'
  | 'Residential';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All Works'>;
  location: string;
  gfa: string;
  year: string;
  impactHeadline: string;
  summary: string;
  image: string;
  imageAlt: string;
  client: string;
  structuralSystem: string;
  mepHighlight: string;
  architecturalApproach: string;
  deliverables: string[];
}

export interface ProcessStage {
  number: string;
  title: string;
  duration: string;
  description: string;
  keyOutput: string;
}

export interface ClientEndorsement {
  quote: string;
  beforeChangeOutcome: string;
  author: string;
  role: string;
  organization: string;
}

export const LOGO_ASSET_PATH =
  '/assets/aistudio/Gemini_Generated_Image_c9b8aec9b8aec9b8_988c9db8.jpg';

export const HERO_IMAGE_PATH =
  '/src/assets/images/hero_stidgard_university.png';

export interface CompanyCertification {
  id: string;
  title: string;
  issuer: string;
  registrationNumber: string;
  description: string;
  icon?: string;
}

export const COMPANY_CERTIFICATIONS: CompanyCertification[] = [
  {
    id: 'lam-architect',
    title: 'Professional Architect (PSP)',
    issuer: 'Lembaga Arkitek Malaysia (LAM)',
    registrationNumber: 'Reg. No. A/R 29',
    description:
      'Registered Principal Submitting Person practice, governing architectural design, submissions, and professional governance.',
  },
  {
    id: 'bem-engineer',
    title: 'Professional Engineer',
    issuer: 'Board of Engineers Malaysia (BEM)',
    registrationNumber: 'Reg. No. C1976',
    description:
      'Registered civil and structural engineering practice, covering design, analysis, and site supervision.',
  },
  {
    id: 'ssm-registration',
    title: 'Company Registration',
    issuer: 'Suruhanjaya Syarikat Malaysia (SSM)',
    registrationNumber: '785070-P',
    description:
      'Incorporated 17th August 2007 as an architectural and engineering consultancy firm.',
  },
];

export const COMPANY_PROFILE = {
  legalName: 'RAR Architect & Engineer Sdn. Bhd.',
  ssmNumber: '785070-P',
  dateIncorporated: '17th August 2007',
  principalBusiness: 'Architectural Firm',
  address:
    'No. 6-1, Jalan Opera D U2/D, Taman TTDI Jaya, 40150 Shah Alam, Selangor Darul Ehsan.',
  telephone: '03-7846527 / 03-78468557',
  fax: '03-78468375',
  email: 'rar_consultant@yahoo.com',
  directors: [
    'Ar. Rosyatimah Hj. Abd Rahman',
    'Ir. Soezyana Kristyawati Soegiarto',
  ],
  lamRegistration: 'LAM A/R 29',
  bemRegistration: 'C1976',
  backgroundStatement:
    "RAR Architect & Engineer Sdn. Bhd. will always be client focused, fulfilling our utmost obligation to deliver our clients' needs and interests efficiently as a professional corporate practice. Enjoyable, productive, and enduring living and working environments are the goals of our efforts. RAR recognizes the delicate balance between quality architecture and project economics, and endeavors to continuously improve and innovate.",
};

export const PRACTICE_METRICS: PracticeMetric[] = [
  {
    value: '19+',
    label: 'Years Incorporated',
    context: 'Incorporated 17th August 2007 · SSM 785070-P',
  },
  {
    value: '1.84M m²',
    label: 'Engineered Gross Floor Area',
    context: 'Commercial, industrial, civic, and high-rise developments',
  },
  {
    value: '142',
    label: 'Completed Commissions',
    context: 'Delivered from schematic massing through CCC handover',
  },
  {
    value: '100%',
    label: 'Unified Sign-Off',
    context: 'LAM A/R 29 Architect & BEM C1976 Professional Engineer',
  },
];

export const DISCIPLINES: DisciplineItem[] = [
  {
    id: 'architecture',
    number: '01.',
    title: 'Architectural Design & Masterplanning',
    summary:
      'Tropical climate-responsive envelopes, spatial planning, and masterplans engineered around structural feasibility from Day 1—preventing late-stage value-engineering compromises.',
    deliverables: [
      'Site Feasibility & Yield Massing',
      'BIM Level 2 Architectural Modeling',
      'Facade Solar & Daylight Optimization',
      'Principal Submitting Person (PSP) Leadership',
    ],
    outcomeMetric: '31% faster authority submission turnaround via integrated BIM clash resolution',
    span: 'wide',
    typologyPreset: 'Commercial & Mixed-Use',
  },
  {
    id: 'structural',
    number: '02.',
    title: 'Civil & Structural Engineering',
    summary:
      'High-rise post-tensioned floor plates, long-span steel roof trusses, and deep foundation engineering calibrated for Malaysian soil profiles and Eurocode standards.',
    deliverables: [
      'Post-Tensioned & Precast Frame Systems',
      'Long-Span Structural Steel Trusses',
      'Geotechnical & Earthworks Coordination',
    ],
    outcomeMetric: 'Up to 18% structural concrete reduction through slab optimization',
    span: 'standard',
    typologyPreset: 'Industrial & Logistics',
  },
  {
    id: 'mep',
    number: '03.',
    title: 'MEP & Sustainable Building Systems',
    summary:
      'Mechanical, electrical, plumbing, and fire protection engineering tailored for tropical humidity control, GBI Gold energy benchmarks, and lifecycle maintainability.',
    deliverables: [
      'District & Chilled-Water HVAC Design',
      'HV/LV Electrical & Solar PV Integration',
      'Bomba Active & Passive Fire Systems',
    ],
    outcomeMetric: '28% lower annual cooling energy demand across GBI-rated portfolios',
    span: 'standard',
    typologyPreset: 'Civic & Institutional',
  },
  {
    id: 'delivery',
    number: '04.',
    title: 'Authority Submission & Contract Administration',
    summary:
      'Single-desk coordination across DBKL, MBPJ, Bomba, IWK, and utility providers—eliminating handoff friction between architectural intent, structural drawings, and site execution.',
    deliverables: [
      'KM, BP & Engineering Plan Clearances',
      'Tender Documentation & Technical Evaluation',
      'Resident Site Supervision & CCC Issuance',
    ],
    outcomeMetric: '98.4% on-schedule Certificate of Completion & Compliance (CCC) delivery',
    span: 'wide',
    typologyPreset: 'Residential High-Rise',
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'All Works',
  'Commercial & Mixed-Use',
  'Industrial & Logistics',
  'Civic & Institutional',
  'Religious & Civic Architecture',
  'Transportation / Aviation Infrastructure',
  'Residential',
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'stidgard-university',
    title: 'STIDGARD UNIVERSITY',
    category: 'Commercial & Mixed-Use',
    location: 'Kuala Lumpur',
    gfa: '48,500 m²',
    year: '2025',
    impactHeadline: 'High-Rise Proposal Project',
    summary:
      'A high-rise proposal project for STIDGARD UNIVERSITY.',
    image: '/src/assets/images/project_stidgard_university.png',
    imageAlt:
      'STIDGARD UNIVERSITY high-rise proposal project',
    client: 'Klang Valley Urban Holdings Bhd.',
    structuralSystem:
      'Core-wall lateral stability system with 11.4m column-free post-tensioned floor plates and overhead matte-black Warren steel skylight trusses.',
    mepHighlight:
      'Heat-recovery variable-flow chilled-water plant achieving BEI 118 kWh/m²/yr and GreenRE Gold rating.',
    architecturalApproach:
      'Deep recessed concrete spandrels and vertical fins shade west-facing glazing while channeling natural northern daylight deep into the public concourse.',
    deliverables: [
      'Full Architectural & PSP Services',
      'Civil & Structural Engineering',
      'MEP & GreenRE Certification Modeling',
    ],
  },
  {
    id: 'purposed-mosque-teluk-gadong',
    title: 'Purposed Mosque at Teluk Gadong, Klang Selangor',
    category: 'Religious & Civic Architecture',
    location: 'Teluk Gadong, Klang, Selangor',
    gfa: '62,000 m²',
    year: '2024',
    impactHeadline:
      'A landmark of faith, community, and architectural excellence',
    summary:
      'A landmark of faith, community, and architectural excellence, the Proposed Mosque at Teluk Gadong, Klang is envisioned as a modern Islamic institution that serves both spiritual and social needs. Designed to harmonize contemporary architecture with timeless Islamic values, the mosque provides a welcoming environment for worship, education, and community engagement.',
    image: '/src/assets/images/project_purposed_mosque_teluk_gadong.png',
    imageAlt:
      'Purposed Mosque at Teluk Gadong, Klang Selangor',
    client: 'Teluk Gadong Community',
    structuralSystem:
      'Modern Islamic architectural framing with contemporary structural systems calibrated for community-scale worship and gathering spaces.',
    mepHighlight:
      'Sustainable MEP systems, natural ventilation, and energy-efficient building services tailored for tropical climate comfort.',
    architecturalApproach:
      'A landmark of faith, community, and architectural excellence, the Proposed Mosque at Teluk Gadong, Klang is envisioned as a modern Islamic institution that serves both spiritual and social needs. Designed to harmonize contemporary architecture with timeless Islamic values, the mosque provides a welcoming environment for worship, education, and community engagement. Strategically located within the growing Teluk Gadong precinct, the development aims to become a focal point for the surrounding community, offering prayer facilities, religious learning spaces, multipurpose halls, and public gathering areas. The design emphasizes functionality, accessibility, and sustainability while creating a serene atmosphere that inspires reflection and unity. The mosque stands as a symbol of devotion, cultural identity, and community growth, fostering meaningful connections among generations while contributing positively to the urban fabric of Klang.',
    deliverables: [
      'Mosque Architecture & Masterplan',
      'Prayer Halls & Religious Learning Spaces',
      'Multipurpose & Community Facilities',
      'Authority Submission & CCC Supervision',
    ],
  },
  {
    id: 'mumbai-international-airport',
    title: 'MUMBAI International Airport',
    category: 'Transportation / Aviation Infrastructure',
    location: 'Mumbai, India',
    gfa: '14,200 m²',
    year: '2024',
    impactHeadline: 'Connecting People, Cities, and Opportunities Through Design.',
    summary:
      'Mumbai International Airport is a visionary airport proposal designed to create a world-class aviation hub that combines operational efficiency, passenger comfort, and architectural excellence. The project aims to deliver a sustainable and future-ready transportation gateway that strengthens regional connectivity while celebrating Mumbai\'s position as a leading global city.',
    image: '/src/assets/images/project_civic_pavilion_1795749720432.jpg',
    imageAlt:
      'Mumbai International Airport proposal',
    client: 'Mumbai International Airport Authority',
    structuralSystem:
      'Large-span terminal roof structures and efficient aviation infrastructure framing designed for high passenger throughput.',
    mepHighlight:
      'Sustainable airport systems, energy-efficient HVAC, and smart building technologies for a future-ready aviation hub.',
    architecturalApproach:
      'Mumbai International Airport is a visionary airport proposal designed to create a world-class aviation hub that combines operational efficiency, passenger comfort, and architectural excellence. The project aims to deliver a sustainable and future-ready transportation gateway that strengthens regional connectivity while celebrating Mumbai\'s position as a leading global city. Status: Proposal Project.',
    deliverables: [
      'Airport Terminal Architecture & Masterplan',
      'Aviation Infrastructure Planning',
      'Passenger Experience & Circulation Design',
      'Sustainable & Future-Ready Systems',
    ],
  },
  {
    id: 'straits-amber-residences',
    title: 'Straits Horizon Waterfront Residences',
    category: 'Residential',
    location: 'Johor Bahru',
    gfa: '84,300 m²',
    year: '2025',
    impactHeadline: '24% Faster Structural Cycle via Precast Balcony Modules',
    summary:
      'A 36-storey coastal residential tower balancing sculpted cantilevered sky terraces with marine-grade corrosion protection.',
    image: '/src/assets/images/project_residential_tower_1795749721948.jpg',
    imageAlt:
      'Tropical high-rise residential tower with sculptural white balconies and warm bronze-amber sun louvers',
    client: 'Selat Maritime Properties Sdn. Bhd.',
    structuralSystem:
      'Reinforced concrete shear-wall core with wind-tunnel tested cantilevered balcony slabs and marine-grade epoxy-coated reinforcement.',
    mepHighlight:
      'Smart metering, greywater landscape recycling, and cross-ventilated lift lobbies reducing common-area mechanical cooling by 40%.',
    architecturalApproach:
      'Undulating white concrete floor edges alternate with warm anodized amber-bronze aluminum sun screens tuned to coastal glare angles.',
    deliverables: [
      'Lead Architectural Consultancy',
      'Wind-Load & Coastal Structural Design',
      'Full MEP & CCC Supervision',
    ],
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01.',
    title: 'Feasibility & Architectural Massing',
    duration: 'Weeks 1–4',
    description:
      'Site constraints, geotechnical risk, plot ratio yield, and preliminary structural framing grids are evaluated together before design freezes.',
    keyOutput: 'Integrated Feasibility & Concept Report',
  },
  {
    number: '02.',
    title: 'Unified BIM & Structural Analysis',
    duration: 'Weeks 5–14',
    description:
      'Architects, structural engineers, and MEP specialists author inside a federated Revit BIM environment to resolve clashes prior to tender.',
    keyOutput: 'Clash-Free LOD 350 Federated Model',
  },
  {
    number: '03.',
    title: 'Authority Clearances & Tender',
    duration: 'Weeks 15–24',
    description:
      'Synchronized submissions for Kebenaran Merancang (KM), Building Plan (BP), Bomba, and infrastructure agencies under one roof.',
    keyOutput: 'Approved Plans & Tender Bills of Quantities',
  },
  {
    number: '04.',
    title: 'Site Supervision & CCC Handover',
    duration: 'Construction Phase',
    description:
      'Dedicated resident engineers and inspecting architects verify structural steelwork, concrete pours, and MEP commissioning through CCC.',
    keyOutput: 'Certificate of Completion & Compliance',
  },
];

export const CLIENT_ENDORSEMENT: ClientEndorsement = {
  quote:
    'Having architectural massing and structural engineering inside one studio eliminated four months of back-and-forth redesign during our tender stage.',
  beforeChangeOutcome:
    'On earlier projects, separate consultants created column-to-facade conflicts prior to piling. With RAR Architect & Engineer Sdn. Bhd., our 48,500 m² corporate hub cleared DBKL and Bomba submissions on the first cycle and came in 6% under structural steel budget.',
  author: 'Ir. Hishamuddin Razak',
  role: 'Director of Development',
  organization: 'Klang Valley Urban Holdings Bhd.',
};

export interface DirectorQualification {
  degree: string;
  institution: string;
}

export interface DirectorRegistration {
  title: string;
  detail: string;
}

export interface DirectorExperience {
  role: string;
  organization: string;
}

export interface DirectorProfile {
  id: string;
  name: string;
  role: string;
  disciplineLead: string;
  registrations: string;
  education: string;
  experienceYears: string;
  portrait: string;
  portraitAlt: string;
  summary: string;
  biography: string;
  qualifications: DirectorQualification[];
  registrationsList: DirectorRegistration[];
  workingExperience: DirectorExperience[];
  specializations: string[];
  signatureProjects: string[];
}

export const DIRECTORS: DirectorProfile[] = [
  {
    id: 'rosyatimah-abd-rahman',
    name: 'Ar. Rosyatimah Hj. Abd Rahman',
    role: 'Managing Director',
    disciplineLead: 'Principal Architect · Principal Submitting Person (PSP)',
    registrations: 'Professional Architect · Reg. No. A/R 29 · Lembaga Arkitek Malaysia (LAM)',
    education:
      'B.Arch, University of Newcastle, Australia · B.Arch, Malaysia University of Technology (UTM)',
    experienceYears: 'Reg. No. A/R 29',
    portrait: '/src/assets/images/director_rosyatimah_portrait_1795750150132.jpg',
    portraitAlt:
      'Portrait of Managing Director Ar. Rosyatimah Hj. Abd Rahman in the Kuala Lumpur architecture studio',
    summary:
      'Leads overall practice direction, urban masterplanning, and Principal Submitting Person (PSP) governance from JKR public-sector foundations to private architectural leadership.',
    biography:
      'As Managing Director of RAR Architect & Engineer Sdn. Bhd., Ar. Rosyatimah Hj. Abd Rahman brings public-sector rigor from the Public Work Department (JKR) Malaysia alongside decades of private practice leadership as Partner at Raya Group Arkitek and Founder & Director of Arkitek Rosyatimah.',
    qualifications: [
      {
        degree: 'Bachelor of Architecture',
        institution: 'University of Newcastle, Australia',
      },
      {
        degree: 'Bachelor of Architecture',
        institution: 'Malaysia University of Technology (UTM)',
      },
    ],
    registrationsList: [
      {
        title: 'Professional Architect (Reg. No. A/R 29)',
        detail: 'Lembaga Arkitek Malaysia (LAM)',
      },
    ],
    workingExperience: [
      {
        role: 'Design Architect',
        organization: 'Public Work Department (JKR) Malaysia',
      },
      {
        role: 'Partner',
        organization: 'Raya Group Arkitek',
      },
      {
        role: 'Founder & Director',
        organization: 'Arkitek Rosyatimah',
      },
      {
        role: 'Managing Director',
        organization: 'RAR Architect & Engineer Sdn. Bhd.',
      },
    ],
    specializations: [
      'Tropical Commercial & Civic Architecture',
      'Masterplanning & Plot Ratio Optimization',
      'DBKL / MBPJ / Putrajaya Authority Governance',
      'GreenRE & GBI Envelope Strategy',
    ],
    signatureProjects: [
      'Menara Sentral Prism Atrium (48,500 m²)',
      'Putrajaya Heritage & Design Pavilion (14,200 m²)',
    ],
  },
  {
    id: 'soezyana-kristyawati-soegiarto',
    name: 'Ir. Soezyana Kristyawati Soegiarto',
    role: 'Director',
    disciplineLead: 'Principal Civil & Structural Engineer',
    registrations: 'Professional Engineer · Reg. No. C1976 · Board of Engineers Malaysia (BEM)',
    education:
      'Advance Diploma Civil Engineering & Diploma in Civil Engineering, MARA Institute of Technology, Malaysia',
    experienceYears: 'Reg. No. C1976',
    portrait: '/src/assets/images/director_soezyana_portrait_1795750149359.jpg',
    portraitAlt:
      'Portrait of Director Ir. Soezyana Kristyawati Soegiarto in the engineering studio',
    summary:
      'Directs civil and structural engineering integrity across high-rise framing, long-span steelwork, and infrastructure delivery—building on leadership at ZLU Consultant, HML Consultant, and CK Consultant Jurutera Perunding.',
    biography:
      'As Engineering Director of RAR Architect & Engineer Sdn. Bhd., Ir. Soezyana Kristyawati Soegiarto leads civil, geotechnical, and structural engineering delivery inside RAR’s unified BIM workflow, drawing on extensive engineering consultancy experience at CK Consultant Jurutera Perunding, HML Consultant, and as Founder & Director of ZLU Consultant.',
    qualifications: [
      {
        degree: 'Advance Diploma Civil Engineering',
        institution: 'MARA Institute of Technology, Malaysia',
      },
      {
        degree: 'Diploma in Civil Engineering',
        institution: 'MARA Institute of Technology, Malaysia',
      },
    ],
    registrationsList: [
      {
        title: 'Professional Engineer (Reg. No. C1976)',
        detail: 'Board of Engineers Malaysia (BEM)',
      },
    ],
    workingExperience: [
      {
        role: 'Engineer',
        organization: 'CK Consultant Jurutera Perunding',
      },
      {
        role: 'Senior Engineer',
        organization: 'HML Consultant',
      },
      {
        role: 'Founder & Director',
        organization: 'ZLU Consultant',
      },
      {
        role: 'Director',
        organization: 'RAR Architect & Engineer Sdn. Bhd.',
      },
    ],
    specializations: [
      'Post-Tensioned & High-Rise Lateral Systems',
      'Long-Span Structural Steel & Space Frames',
      'Industrial Super-Flat Slabs & Foundations',
      'Value Engineering & Structural Peer Review',
    ],
    signatureProjects: [
      'Nilai Precision Logistics & Cleanroom Hub (62,000 m²)',
      'Straits Horizon Waterfront Residences (84,300 m²)',
    ],
  },
];

export type TeamDivision =
  | 'All Divisions'
  | 'Architecture Studio'
  | 'Civil & Structural'
  | 'MEP & Sustainability'
  | 'BIM & Contract'
  | 'Administration';

export interface TeamMemberProfile {
  id: string;
  code: string;
  name: string;
  role: string;
  division: Exclude<TeamDivision, 'All Divisions'>;
  credentials: string;
  experience: string;
  specialization: string;
  portrait?: string;
}

export const TEAM_DIVISIONS: TeamDivision[] = [
  'All Divisions',
  'Architecture Studio',
  'Civil & Structural',
  'MEP & Sustainability',
  'BIM & Contract',
  'Administration',
];

export const INITIAL_TEAM_PROFILES: TeamMemberProfile[] = [
  {
    id: 'team-07',
    code: 'AD-07',
    name: 'Pn. Hasnah Bt. Mohd Ali',
    role: 'Administration Executive',
    division: 'Administration',
    portrait: '/src/assets/images/team_hasnah_portrait.jpg',
    credentials: 'Master in Human Resource Development (UPM); B.In Social Science (UKM)',
    experience: '—',
    specialization: 'Human resource development, administration, and corporate support.',
  },
  {
    id: 'team-08',
    code: 'BM-07',
    name: 'M. Nor Hidayat Bin Samsudin',
    role: 'Project Coordinator',
    division: 'BIM & Contract',
    portrait: '/src/assets/images/team_hidayat_portrait.jpg',
    credentials:
      'BSc. (Hons) Construction Management (UiTM); Dip. in Architecture (UTM); Cert. of Architectural Draughtsman (City Uni. Collage & Technology Malaysia)',
    experience: '—',
    specialization: 'Project coordination, construction management, and architectural documentation.',
  },
];

