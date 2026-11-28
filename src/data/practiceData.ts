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
  | 'Industrial & Infrastructure'
  | 'Institutional Building Project'
  | 'Religious & Civic Architecture'
  | 'Transportation / Aviation Infrastructure'
  | 'Luxury Residential';

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
  gallery?: string[];
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
    typologyPreset: 'Industrial & Infrastructure',
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
    typologyPreset: 'Institutional Building Project',
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
  'Industrial & Infrastructure',
  'Institutional Building Project',
  'Religious & Civic Architecture',
  'Transportation / Aviation Infrastructure',
  'Luxury Residential',
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'stidgard-university',
    title: 'STIDGARD UNIVERSITY',
    category: 'Commercial & Mixed-Use',
    location: 'Kuala Lumpur',
    gfa: '48,500 m²',
    year: '2025',
    impactHeadline: 'High-Rise Academic Campus Proposal',
    summary:
      'The Stidgard University High-Rise Campus is envisioned as a next-generation educational landmark that redefines the future of higher learning within an urban environment. Designed to maximize land efficiency while creating a dynamic academic ecosystem, the development integrates teaching, research, innovation, and student life within a vertical campus setting.',
    image: '/src/assets/images/project_stidgard_university.png',
    imageAlt:
      'STIDGARD UNIVERSITY High-Rise Academic Campus Proposal',
    client: 'Klang Valley Urban Holdings Bhd.',
    structuralSystem:
      'Core-wall lateral stability system with 11.4m column-free post-tensioned floor plates and overhead matte-black Warren steel skylight trusses.',
    mepHighlight:
      'Heat-recovery variable-flow chilled-water plant achieving BEI 118 kWh/m²/yr and GreenRE Gold rating.',
    architecturalApproach:
      'The Stidgard University High-Rise Campus is envisioned as a next-generation educational landmark that redefines the future of higher learning within an urban environment. Designed to maximize land efficiency while creating a dynamic academic ecosystem, the development integrates teaching, research, innovation, and student life within a vertical campus setting. The proposal features state-of-the-art lecture halls, research laboratories, collaborative learning spaces, academic offices, student amenities, and communal facilities seamlessly connected through a modern architectural framework. Sustainable design principles, smart building technologies, and flexible learning environments form the foundation of the project, supporting the evolving needs of future generations. As a prominent educational destination, the tower serves as a symbol of knowledge, innovation, and excellence. The design aims to foster creativity, interdisciplinary collaboration, and academic achievement while establishing a distinctive presence within the city\'s skyline. Status: Proposal Project.',
    deliverables: [
      'Full Architectural & PSP Services',
      'Civil & Structural Engineering',
      'MEP & GreenRE Certification Modeling',
    ],
  },
  {
    id: 'purposed-mosque-teluk-gadong',
    title: 'Mosque at Teluk Gadong, Klang',
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
      'Mosque at Teluk Gadong, Klang',
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
    id: 'kompleks-sekolah-tahfiz-anak-yatim-alkitab',
    title: 'KOMPLEKS SEKOLAH TAHFIZ ANAK YATIM ALKITAB',
    category: 'Religious & Civic Architecture',
    location: '—',
    gfa: '—',
    year: '2019',
    impactHeadline: 'Religious Education & Orphan Care Complex',
    summary:
      'A religious education complex dedicated to tahfiz learning and the care of orphaned children, delivered in 2019. The project provides a purpose-built environment for worship, religious instruction, and communal living within a single integrated campus.',
    image: '/src/assets/images/TRZ1-_100_TK_3D_01.png',
    imageAlt:
      'KOMPLEKS SEKOLAH TAHFIZ ANAK YATIM ALKITAB 3D architectural render',
    gallery: [
      '/src/assets/images/TRZ1-_100_TK_3D_02.png',
      '/src/assets/images/TRZ1-_100_TK_3D_03.png',
      '/src/assets/images/TRZ1-_100_TK_3D_04.png',
      '/src/assets/images/TRZ1-_100_TK_3D_05.png',
      '/src/assets/images/TRZ1-_100_TK_3D_06.png',
    ],
    client: '—',
    structuralSystem:
      'Purpose-built religious education campus with learning, residential, and community facilities planned as an integrated whole.',
    mepHighlight:
      'Practical building services supporting classroom, residential, and communal use within a tropical Malaysian setting.',
    architecturalApproach:
      'Kompleks Sekolah Tahfiz Anak Yatim Alkitab is a religious education complex delivered in 2019 to support tahfiz schooling and care for orphaned children. The architecture organizes learning spaces, student accommodation, and communal facilities around a calm and disciplined campus setting, balancing daily worship and religious instruction with the practical needs of a residential school. Flexible classrooms and shared gathering areas encourage both focused study and a strong sense of community, while simple, durable materials and passive comfort strategies keep the complex practical to operate over the long term. The result is a purpose-built environment that serves education, care, and faith under one roof.',
    deliverables: [
      'Religious Education Campus Architecture',
      'Tahfiz School & Student Accommodation Planning',
      'Communal & Worship Facilities',
      'Authority Submission & Completion Coordination',
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
    image: '/src/assets/images/project_mumbai_international_airport.png',
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
    id: 'jimah-power-plant',
    title: 'Jimah Power Plant',
    category: 'Industrial & Infrastructure',
    location: 'Port Dickson, Negeri Sembilan, Malaysia',
    gfa: '—',
    year: 'Design Proposal',
    impactHeadline: 'Design Proposal',
    summary:
      'The Jimah Power Plant project forms part of a critical energy infrastructure network that supports reliable power generation and distribution within Peninsular Malaysia. Designed to accommodate complex operational requirements, the development integrates industrial functionality, engineering efficiency, and long-term sustainability to meet the demands of a modern power generation facility.',
    image: '/src/assets/images/project_jimah_power_plant.png',
    imageAlt:
      'Jimah Power Plant industrial infrastructure project in Port Dickson, Negeri Sembilan, Malaysia',
    client: 'Jimah Power Plant',
    structuralSystem:
      'Industrial power generation infrastructure with operational support facilities and durable structural systems designed for continuous energy production.',
    mepHighlight:
      'Efficient building systems, operational control areas, and industrial services supporting reliable power generation and maintenance access.',
    gallery: [
      '/src/assets/images/project_jimah_power_plant_02.png',
      '/src/assets/images/project_jimah_power_plant_03.png',
    ],
    architecturalApproach:
      'The Jimah Power Plant project forms part of a critical energy infrastructure network that supports reliable power generation and distribution within Peninsular Malaysia. Designed to accommodate complex operational requirements, the development integrates industrial functionality, engineering efficiency, and long-term sustainability to meet the demands of a modern power generation facility. The project encompasses a range of operational components including administrative facilities, technical support spaces, operational control areas, and essential infrastructure designed to support continuous energy production. Particular emphasis was placed on creating a functional built environment that ensures operational reliability, workforce safety, and efficient maintenance access while complying with stringent industrial standards and regulatory requirements. Architecturally, the development balances industrial performance with a contemporary design approach, incorporating durable materials, efficient building systems, and practical spatial planning. The facility\'s layout is carefully organized to optimize workflow, logistical movement, and interaction between operational zones, ensuring seamless coordination across different functions within the power generation complex. Beyond its operational role, the project contributes to Malaysia\'s national energy resilience by supporting stable electricity supply for residential, commercial, and industrial sectors. Through the integration of engineering excellence, infrastructure planning, and sustainable design considerations, the Jimah Power Plant stands as a significant industrial development that reinforces the country\'s commitment to economic growth and long-term energy security. Status: Design Proposal.',
    deliverables: [
      'Industrial Architecture & Masterplan',
      'Operational & Technical Support Facilities',
      'Industrial Engineering Coordination',
      'Authority Submission & CCC Supervision',
    ],
  },
  {
    id: 'murni-nursing-college',
    title: 'MURNI NURSING COLLEGE',
    category: 'Institutional Building Project',
    location: 'Cyberjaya, Selangor, Malaysia',
    gfa: '—',
    year: 'Design Proposal',
    impactHeadline: 'Design Proposal',
    summary:
      'The Murni Nursing College is envisioned as a modern educational institution dedicated to cultivating the next generation of healthcare professionals. The design proposal aims to create a holistic learning environment that supports academic excellence, practical training, and personal development within a contemporary campus setting.',
    image: '/src/assets/images/project_murni_nursing_college.png',
    imageAlt:
      'MURNI NURSING COLLEGE institutional building project in Cyberjaya, Selangor, Malaysia',
    client: 'Murni Nursing College',
    structuralSystem:
      'Institutional campus structure designed for lecture, training, and administrative facilities within a contemporary educational framework.',
    mepHighlight:
      'Efficient building systems, natural daylighting, and sustainable campus services supporting healthcare education and training.',
    architecturalApproach:
      'The Murni Nursing College is envisioned as a modern educational institution dedicated to cultivating the next generation of healthcare professionals. The design proposal aims to create a holistic learning environment that supports academic excellence, practical training, and personal development within a contemporary campus setting. The development integrates lecture halls, simulation laboratories, clinical skills training facilities, administrative offices, student collaboration spaces, and communal amenities into a cohesive architectural framework. The design prioritizes functionality, flexibility, and accessibility, providing students with an environment that mirrors the professional healthcare settings they will encounter throughout their careers. Inspired by the values of care, knowledge, and human connection, the architectural approach emphasizes natural daylight, comfortable learning spaces, and welcoming social environments that enhance both educational outcomes and student well-being. Sustainable design principles and efficient campus planning are incorporated to create a future-ready institution capable of adapting to evolving educational needs. As a center for nursing education and healthcare training, the proposal reflects a commitment to producing competent, compassionate, and highly skilled healthcare professionals who will contribute positively to society and the nation\'s healthcare system. Project: Murni Nursing College. Location: Cyberjaya, Selangor. Category: Institutional Building Project. Typology: Higher Education & Healthcare Training Facility. Status: Design Proposal. Tagline: "Nurturing Future Healthcare Professionals Through Innovative Learning Environments."',
    deliverables: [
      'Institutional Architecture & Campus Masterplan',
      'Lecture Halls & Simulation Laboratories',
      'Clinical Skills Training Facilities',
      'Authority Submission & Design Review',
    ],
  },
  {
    id: 'hillside-residence',
    title: 'Hillside Residence',
    category: 'Luxury Residential',
    location: '—',
    gfa: '—',
    year: 'Completed',
    impactHeadline: 'Completed Project',
    summary:
      "The Hillside Residence is a contemporary luxury bungalow thoughtfully designed to respond to its natural topography while providing a seamless connection between architecture and landscape. Positioned within a lush green setting, the residence embraces the site's elevated terrain through a series of terraced living spaces that maximize views, natural light, and ventilation.",
    image: '/src/assets/images/project_hillside_residence.png',
    imageAlt: 'Hillside Residence luxury bungalow project',
    gallery: [
      '/src/assets/images/project_hillside_residence_02.png',
      '/src/assets/images/project_hillside_residence_03.png',
    ],
    client: 'Private Client',
    structuralSystem:
      'Contemporary bungalow structure organized across terraced living platforms to respond to the hillside topography.',
    mepHighlight:
      'Efficient building systems supporting natural ventilation, daylight, and comfortable modern family living.',
    architecturalApproach:
      "The Hillside Residence is a contemporary luxury bungalow thoughtfully designed to respond to its natural topography while providing a seamless connection between architecture and landscape. Positioned within a lush green setting, the residence embraces the site's elevated terrain through a series of terraced living spaces that maximize views, natural light, and ventilation. Characterized by clean architectural lines, expansive glass façades, and carefully selected material finishes, the design creates a sophisticated balance between transparency, privacy, and comfort. The open-plan arrangement encourages fluid movement throughout the home, while generous outdoor terraces and landscaped gardens extend the living experience beyond the built form. The architectural composition emphasizes harmony with nature, integrating contemporary design principles with the surrounding environment to create a tranquil retreat for modern family living. Through its careful attention to proportion, materiality, and spatial experience, the residence reflects a refined approach to luxury residential architecture. Project: Hillside Residence. Category: Luxury Residential. Typology: Private Bungalow Residence. Status: Completed Project. Tagline: \"Modern Living Elevated by Nature.\"",
    deliverables: [
      'Luxury Residential Architecture',
      'Terraced Living & Landscape Integration',
      'Interior Design Coordination',
      'Authority Submission & Completion',
    ],
  },
  {
    id: 'tropical-villa',
    title: 'Tropical Villa',
    category: 'Luxury Residential',
    location: '—',
    gfa: '—',
    year: 'Design Proposal',
    impactHeadline: 'Design Proposal',
    summary:
      'Tropical Villa is a luxury residential design proposal shaped around contemporary tropical living, shaded outdoor spaces, and a close connection between the home and its landscape.',
    image: '/src/assets/images/project_tropical_villa.png',
    imageAlt: 'Tropical Villa luxury residential design proposal',
    gallery: ['/src/assets/images/project_tropical_villa_01.png'],
    client: 'Private Client',
    structuralSystem:
      'Contemporary villa structure planned around open living spaces and sheltered outdoor terraces.',
    mepHighlight:
      'Passive-first environmental strategy emphasizing natural ventilation, daylight, and shaded tropical comfort.',
    architecturalApproach:
      'The proposed villa explores a refined tropical residential language, combining clean contemporary forms with deep overhangs, cross ventilation, and sheltered terraces. The design prioritizes privacy, comfort, and a seamless relationship between interior spaces and the surrounding landscape, offering a calm and contemporary retreat for modern living. Project: Tropical Villa. Category: Luxury Residential. Status: Design Proposal.',
    deliverables: [
      'Luxury Residential Architecture',
      'Tropical Design Strategy',
      'Concept Design Proposal',
      'Authority Submission Coordination',
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
  portrait?: string;
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
    portrait: '/src/assets/images/director_rosyatimah_portrait_new.png',
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
    division: 'Administration',
    portrait: '/src/assets/images/team_hidayat_portrait.png',
    credentials:
      'BSc. (Hons) Construction Management (UiTM); Dip. in Architecture (UTM); Cert. of Architectural Draughtsman (City Uni. Collage & Technology Malaysia)',
    experience: '—',
    specialization: 'Project coordination, construction management, and architectural documentation.',
  },
];

