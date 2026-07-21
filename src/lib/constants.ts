export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  overviewHeading: string;
  category:
    | "medical-writing"
    | "editing"
    | "research-support"
    | "publication-support";
  heroDescription: string;
  overview: string;
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
}

export const SERVICES_DATA: Record<string, Service> = {
  systematicReview: {
    slug: "systematic-review",
    iconName: "FileSearch", // Adjust to a fitting Lucide icon name
    title: "Systematic Review",
    shortDescription:
      "From clearly defined questions, we get reliable and transparent results that are objective in nature. Our systematic review process eliminates all kinds of inaccuracies and aggregates solid evidence with recommendations.",
    features: [
      {
        title: "Reliable and transparent results",
        description: "",
      },
      {
        title: "Eliminates inaccuracies",
        description: "",
      },
    ],
    category: "medical-writing",
    heroDescription:
      "Pubrica provides complete publication support services from manuscript preparation to journal submission",
    overview:
      "Our publication support services guide researchers through every stage of the publishing process..",
    overviewHeading: "Publication Support Services",
    benefits: [],
    process: [],
    faqs: [],
  },
  metaAnalysis: {
    slug: "meta-analysis",
    iconName: "BarChart3",
    title: "Meta-Analysis",
    shortDescription:
      "Integrating the findings from multiple studies, we obtain highly accurate conclusions on specific problems by eliminating bias, inconsistencies and uncertainties. This gives you a more precise and accurate result for holistic understanding.",
    features: [
      {
        title: "Integrating multi-study findings",
        description: "",
      },
      {
        title: "Eliminating bias and inconsistencies",
        description: "",
      },
    ],
    category: "medical-writing",
    heroDescription: "",
    overview: "",
    benefits: [],
    process: [],
    faqs: [],
    overviewHeading: "Publication Support Services",
  },
  originalResearchArticle: {
    slug: "original-research-article",
    iconName: "BookOpen",
    title: "Original Research Article",
    shortDescription:
      "We completely ease the process of conducting original research through our empirical research methodologies. To provide a standardized thesis, we also include our writing and editing services to ensure comprehensive work.",
    features: [
      {
        title: "Empirical research methodologies",
        description: "",
      },
      {
        title: "Standardized thesis documentation",
        description: "",
      },
    ],
    category: "medical-writing",
    heroDescription: "",
    overview: "",
    benefits: [],
    process: [],
    faqs: [],
    overviewHeading: "Publication Support Services",
  },
  scientificWriting: {
    slug: "scientific-writing",
    iconName: "PenTool",
    title: "Scientific Writing",
    shortDescription:
      "We help authors complete their scientific papers or review articles with our specialized team of academic writers and editors. By clearly validating the sources, we produce a professional article that offers meaningful insights.",
    features: [
      {
        title: "Specialized academic writers",
        description: "",
      },
      {
        title: "Validated source matching",
        description: "",
      },
    ],
    category: "medical-writing",
    heroDescription: "",
    overview: "",
    benefits: [],
    process: [],
    faqs: [],
    overviewHeading: "Publication Support Services",
  },
  publicationSupport: {
    slug: "publication-support",
    iconName: "BookCheck",

    title: "Publication Support Services",

    shortDescription:
      "Complete end-to-end publication support from manuscript preparation to journal submission, peer review response, and post-publication assistance.",

    category: "publication-support",
    overviewHeading: "Publication Support Services",
    heroDescription:
      "Pubrica provides complete publication support services from manuscript preparation to journal submission, helping researchers publish successfully in high-impact journals.",

    overview:
      "Our publication support services guide researchers through every stage of the publishing process, including manuscript preparation, journal selection, formatting, submission, reviewer responses, editing, plagiarism checking, artwork preparation, and post-publication support.",

    features: [
      {
        title: "Journal Selection",
        description:
          "Identify the most suitable journal based on scope, indexing, impact factor, and acceptance probability.",
      },
      {
        title: "Manuscript Formatting",
        description:
          "Format manuscripts according to journal guidelines including references, tables, figures, and templates.",
      },
      {
        title: "Journal Submission",
        description:
          "Complete submission support through Editorial Manager, ScholarOne, and other submission portals.",
      },
      {
        title: "Reviewer Response",
        description:
          "Prepare professional point-by-point responses to reviewer comments.",
      },
      {
        title: "Language Editing",
        description:
          "Improve grammar, scientific language, clarity, and readability.",
      },
      {
        title: "Plagiarism Check",
        description:
          "Detect similarity and improve originality before journal submission.",
      },
    ],

    benefits: [
      "Higher acceptance rate",
      "Faster publication process",
      "Reduced manuscript rejection",
      "Compliance with journal guidelines",
      "Professional scientific editing",
      "End-to-end publication support",
    ],

    process: [
      {
        title: "Manuscript Review",
        description: "Experts review the manuscript for quality and readiness.",
        step: 1,
      },
      {
        title: "Journal Selection",
        description: "Recommend the most suitable journal.",
        step: 2,
      },
      {
        title: "Formatting",
        description: "Apply complete journal formatting.",
        step: 3,
      },
      {
        title: "Submission",
        description: "Submit manuscript through journal portals.",
        step: 4,
      },
      {
        title: "Peer Review",
        description: "Support reviewer comments and revisions.",
        step: 5,
      },
      {
        title: "Final Publication",
        description: "Monitor acceptance and publication.",
        step: 6,
      },
    ],

    faqs: [
      {
        question: "What are publication support services?",
        answer:
          "Publication support includes manuscript editing, formatting, journal selection, submission, peer review assistance, and post-publication support.",
      },
      {
        question: "Do you help with journal submission?",
        answer:
          "Yes. We provide complete journal submission assistance for leading international journals.",
      },
    ],
  },
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Sarah Jenkins",
    role: "Associate Professor, Department of Oncology",
    institution: "Johns Hopkins University",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    text: "Pubrica's systematic review and meta-analysis support was outstanding. Their biostatisticians extracted complex clinical trial outputs and produced publication-grade forest plots that helped our paper get accepted in a top-tier oncology journal.",
  },
  {
    id: "2",
    name: "Professor Kenji Takahashi",
    role: "Lead Researcher, Cardiorespiratory Therapeutics",
    institution: "Tokyo Medical University",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    text: "As a non-native English speaker, preparing our medical device protocols for FDA submission was challenging. The regulatory medical writing team at Pubrica organized our IND submission and delivered a flawless common technical document.",
  },
  {
    id: "3",
    name: "Dr. Elena Rostova",
    role: "Clinical Research Coordinator",
    institution: "Charité - Universitätsmedizin Berlin",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    text: "We saved months of literature screening by outsourcing our systematic review strategy to Pubrica. The dual-screening reports via Covidence were detailed and their PRISMA diagram was precisely formatted. I highly recommend them.",
  },
];

export const BLOGS_DATA: Blog[] = [
  {
    slug: "understanding-prisma-2020-guidelines",
    title: "Understanding PRISMA 2020 Guidelines for Systematic Reviews",
    excerpt:
      "An in-depth breakdown of the updated PRISMA guidelines and how they affect your systematic review reporting.",
    content:
      "The PRISMA 2020 statement replaces the 2009 statement and includes new reporting guidance that reflects advances in methods to identify, select, appraise, and synthesize studies. In this article, we walk you through the structural changes, including the updated 27-item checklist, flow diagram, and reporting requirements for study registrations.",
    date: "July 10, 2026",
    readTime: "6 min read",
    category: "Research Methodology",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. Anita Roy",
      role: "Head of Literature Synthesis",
    },
  },
  {
    slug: "avoiding-common-reasons-for-journal-rejection",
    title: "Avoiding Common Reasons for Journal Rejection: A Review",
    excerpt:
      "Learn the primary reasons peer-reviewed journals reject manuscripts and how to pre-emptively fix them.",
    content:
      "More than 50% of scientific articles are rejected before peer review. The most frequent causes include out-of-scope submissions, lack of novelty, poor data visualization, and syntax/grammar issues. By applying standard plagiarism audits, targeting the right journal tier, and ensuring statistical accuracy, authors can bypass initial editorial screening.",
    date: "June 28, 2026",
    readTime: "8 min read",
    category: "Academic Publishing",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Robert Vance",
      role: "Senior Publishing Consultant",
    },
  },
  {
    slug: "network-meta-analysis-vs-traditional-meta-analysis",
    title: "Network Meta-Analysis vs. Traditional Meta-Analysis",
    excerpt:
      "What is a Network Meta-Analysis and when should you choose it over direct pairwise pooling?",
    content:
      "Traditional meta-analysis compares two interventions directly. However, in modern clinical medicine, multiple options exist. Network Meta-Analysis (NMA) allows for the comparison of treatments that have never been compared head-to-head in a clinical trial. We explore the assumptions of transitivity, consistency, and network structures.",
    date: "June 15, 2026",
    readTime: "10 min read",
    category: "Biostatistics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. James Lin",
      role: "Principal Biostatistician",
    },
  },
];

export const GENERAL_FAQS = [
  {
    question: "How does the collaboration process work at Pubrica?",
    answer:
      "Once you submit an inquiry, our customer success team contacts you to understand the details of your request. We match your project with a dedicated subject-matter expert and a project manager. We provide drafts iteratively, incorporating your feedback until the final document is approved.",
  },
  {
    question: "Are your writers native English speakers?",
    answer:
      "Yes, our scientific editing and medical writing teams are composed of native English-speaking editors or highly experienced medical communicators who hold PhDs/MDs from major universities in the UK, USA, Canada, and Australia.",
  },
  {
    question: "What subjects and therapeutic fields do you cover?",
    answer:
      "We cover clinical medicine, pharmaceuticals, biotechnology, life sciences, physical sciences, engineering, social sciences, and humanities. Our writers have specialized research experience across hundreds of academic sub-disciplines.",
  },
  {
    question: "How do you calculate pricing and timelines?",
    answer:
      "Pricing depends on the service level, word count, complexity of the data, and urgency. We offer customized quotes within 24 hours of project detail submissions. Timelines can range from 3 business days for rapid editing to several weeks for systematic reviews.",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services/publication-support", label: "Publication Support" },
      {
        href: "/services/editing-and-translation",
        label: "Editing & Translation",
      },
      { href: "/services/research-services", label: "Research & Services" },
      {
        href: "/services/physician-writing-services",
        label: "Physician Writing & Services",
      },
      {
        href: "/services/data-analytics-machine-learning",
        label: "Statistical Analyses",
      },
      { href: "/services/medical-data-collection", label: "Data Collection" },
      { href: "/services/ai-ml-support", label: "AI and ML Services" },
      { href: "/services/medical-writing", label: "Medical Writing" },
      { href: "/services/research-impact", label: "Research Impact" },
      {
        href: "/services/scientific-communication",
        label: "Medical & Scientific Communication",
      },
      {
        href: "/services/educational-content-development",
        label: "Educational Content",
      },
    ],
  },
  { href: "/Industries", label: "industries" },
  { href: "/subjects", label: "Subjects" },
  { href: "/about", label: "About Us" },
  { href: "/academy", label: "Academy" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS = {
  services: [
    { href: "/services/medical-writing", label: "Medical Writing" },
    { href: "/services/systematic-review", label: "Systematic Review" },
    { href: "/services/meta-analysis", label: "Meta-Analysis" },
    { href: "/services/publication-support", label: "Publication Support" },
    { href: "/services/book-editing", label: "Book Editing" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/blogs", label: "Latest Blogs" },
    { href: "/subjects", label: "Free Resources" },
    { href: "/industries", label: "Featured Journals" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/sitemap.xml", label: "Sitemap" },
  ],
};

export const CONTACT_INFO = {
  phone: "+1 (773) 302-8629",
  email: "support@pubrica.com",
  address:
    "Pubrica Inc., 100 Church Street, 8th Floor, New York, NY 10007, USA",
  hours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
};

export const CLIENT_LOGOS = [
  { name: "Harvard Medical School", logo: "HMS" },
  { name: "Stanford Medicine", logo: "Stanford" },
  { name: "Mayo Clinic", logo: "Mayo" },
  { name: "Pfizer", logo: "Pfizer" },
  { name: "Novartis", logo: "Novartis" },
  { name: "Oxford University Press", logo: "Oxford" },
];

export const RESEARCH_AREAS = [
  {
    title: "Oncology",
    description:
      "Clinical protocols, CSRs, and reviews mapping cancer immunotherapies and biomarkers.",
  },
  {
    title: "Cardiology",
    description:
      "Efficacy pooling and systematic reviews evaluating cardiovascular devices and drugs.",
  },
  {
    title: "Neurology",
    description:
      "Manuscript preparation and meta-analyses investigating neurodegenerative disorders.",
  },
  {
    title: "Endocrinology",
    description:
      "Regulatory documents and reviews detailing diabetes management and metabolic pathways.",
  },
  {
    title: "Infectious Diseases",
    description:
      "Clinical study reports, epidemiology models, and publication support for vaccines.",
  },
  {
    title: "Public Health",
    description:
      "Policy white papers, global health analyses, and systematic health assessments.",
  },
];

export const STATS = [
  { value: "15,000+", label: "Papers Edited & Formatted" },
  { value: "3,200+", label: "Systematic Reviews Completed" },
  { value: "98.4%", label: "Journal Acceptance Success Rate" },
  { value: "120+", label: "Therapeutic Specialty Areas" },
  { value: "450+", label: "PhD Writers & Biostatisticians" },
];
