export interface RejectionReasonRow {
  reason: string;
  reasonBoldPrefix?: string;
  solution: string;
  pubricaSolution: string;
}

export interface Service {
  rejectionTable?: RejectionReasonRow[];
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  category:
    | "medical-writing"
    | "editing"
    | "research-support"
    | "publication-support";
  heroDescription: string;
  overview: string[];
  overviewHeading: string;
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
  authoringHeading?: string;
  authoringBullets?: string[];
  valueAddedIntro?: string;
  valueAddedBullets?: string[];
}

export const PUBLICATION_SUPPORT_SERVICE: Service = {
  slug: "publication-support",
  iconName: "BookCheck",
  title: "Publication Support Services",
  shortDescription:
    "Complete end-to-end publication support from manuscript preparation to journal submission, peer review response, and post-publication assistance.",

  category: "publication-support",

  heroDescription:
    "Pubrica provides complete, end-to-end publication support services from manuscript preparation to journal submission and provides expert guidance for every stage of the research publication journey.",

  overviewHeading:
    "Publication Support Services for Life Sciences, Pharma, and Research: Streamlining Your Path to Publication",

  overview: [
    "Transforming high-quality research into publication-ready manuscripts that are compliant with researchers' fields of science and have an impact on science, without compromising scientific integrity and ethical standards.",
    "In today's competitive, compliance-focused publishing environment, published research outputs must be technically sound, but also ethically compliant, publication-ready, and targeted for visibility.",
    "Researchers, pharma teams, and medical device companies increasingly need assistance with:",
    "• Manuscript structure and reporting guidelines (CONSORT, PRISMA, STROBE)",
    "• Ethical standards, transparency, and compliance (COPE, ICMJE, GPP)",
    "• Accuracy in formatting, references, and language",
    "• Responding to peer-review comments",
    "• Journal submission and pre-submission checks",
    "Our publication support services help researchers publish successfully in international peer-reviewed journals.",
  ],

  features: [
    {
      title: "Journal Selection",
      description:
        "Identify the most suitable journal based on scope, indexing, impact factor, and acceptance probability.",
    },
    {
      title: "Manuscript Formatting",
      description: "Format manuscripts according to journal guidelines.",
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
      description: "Improve grammar, clarity, and scientific writing.",
    },
    {
      title: "Plagiarism Check",
      description:
        "Detect similarity and improve originality before submission.",
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
      step: 1,
      title: "Manuscript Review",
      description: "Experts review the manuscript for quality and readiness.",
    },
    {
      step: 2,
      title: "Journal Selection",
      description: "Recommend the most suitable journal.",
    },
    {
      step: 3,
      title: "Formatting",
      description: "Apply journal formatting.",
    },
    {
      step: 4,
      title: "Submission",
      description: "Submit the manuscript.",
    },
    {
      step: 5,
      title: "Peer Review Support",
      description: "Assist with reviewer comments.",
    },
    {
      step: 6,
      title: "Final Publication",
      description: "Monitor acceptance until publication.",
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
        "Yes. We provide complete journal submission assistance for international journals.",
    },
  ],

  authoringHeading:
    "Authoring your research paper into a publishable manuscript",

  authoringBullets: [
    "Our experts convert your research into a publication-ready manuscript.",
    "We support journal selection, editing, peer review, and post-submission assistance.",
  ],

  valueAddedIntro: "We provide comprehensive value-added publication services.",

  valueAddedBullets: [
    "End-to-end submission support",
    "Journal guideline compliance",
    "Unlimited revision assistance",
    "Professional publication support",
  ],

  rejectionTable: [
    {
      reason: "Lack of originality can delay manuscript acceptance.",
      solution:
        "Expert editing, plagiarism checking, and scientific improvements.",
      pubricaSolution: "Journal Submission",
    },
    {
      reasonBoldPrefix: "Formatting:",
      reason: "Tables and figures presentation issues",
      solution: "Redraw tables and figures according to journal standards.",
      pubricaSolution: "Artwork Formatting",
    },
    {
      reasonBoldPrefix: "Editing:",
      reason: "Grammar, spelling, punctuation, and clarity issues",
      solution: "Improve language quality for publication.",
      pubricaSolution: "Editing",
    },
  ],
};
