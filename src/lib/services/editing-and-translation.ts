interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
interface InsightCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const insightsData: InsightCard[] = [
  {
    id: 1,
    title: "How to Structure Case Reports and Review Articles for Medical Journals",
    description: "Medical journals expect a structure for case reports and review articles, with clear objectives...",
    imageUrl: "https://images.unsplash.com/photo-1584515933487-78021ea4a8d5?auto=format&fit=crop&q=80&w=500" // Doctor with clipboard
  },
  {
    id: 2,
    title: "How Should Physicians Choose the Right Journal for Submitting a Case...",
    description: "Publishing a case report involves more than clinical knowledge; it also demands strategic journal ...",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500" // Physician studying document
  },
  {
    id: 3,
    title: "How Physicians Can Write Clear and Impactful Patient Education Materials",
    description: "Effective patient education materials (PEMs) are crucial for promoting health literacy, enhancing...",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=500" // Healthcare consultation
  }
];

export const faqData: FAQItem[] = [
  {
    id: 1,
    question:
      "1. How to translate a research paper into English for journal submission?",
    answer:
      "Use professional translation with academic translation tools, maintain terminology, consider context, follow journal requirements, and post-edit the translation with utmost accuracy before submitting.",
  },
  {
    id: 2,
    question:
      "2. What is the difference between academic translation and language editing?",
    answer:
      "Academic translation focuses on converting text from one language to another while preserving scientific meaning. Language editing refines existing text in the target language to improve grammar, flow, phrasing, and style.",
  },
  {
    id: 3,
    question:
      "3. Can a translated research manuscript be edited for journal publication?",
    answer:
      "Yes. In fact, it is highly recommended. Post-translation editing ensures that the converted manuscript reads naturally to native speakers and meets the strict stylistic standards of international publishers.",
  },
  {
    id: 4,
    question:
      "4. Why is professional editing important after translating a research paper?",
    answer:
      "Literal translations often miss disciplinary nuances or construct awkward phrasing. Professional editing refines tone, repairs academic clarity, and aligns formatting directly with publisher specifications.",
  },
  {
    id: 5,
    question:
      "5. Where to find reliable academic translation and editing services?",
    answer:
      "Look for established networks like Pubrica that pair your manuscript with native-English subject-matter experts holding specialized postgraduate degrees in your precise scientific field.",
  },
  {
    id: 6,
    question:
      "6. How does translation and editing improve the quality of research manuscripts?",
    answer:
      "Translation and editing of an academic manuscript enhance it by ensuring linguistic accuracy, clarity, consistency, structure, and presentation, and conformity to academic and journal standards.",
  },
  {
    id: 7,
    question:
      "7. Do journals accept manuscripts translated from other languages?",
    answer:
      "Absolutely, provided the final translation is indistinguishable from articles natively written in English. Quality language tuning removes the barrier of background translation artifacts completely.",
  },
  {
    id: 8,
    question:
      "8. What are the common language issues in translated research papers?",
    answer:
      "Common pitfalls include direct literal phrasing errors, inconsistent use of technical terms, passive voice overuse, grammatical mismatching, and structurally misaligned reference citations.",
  },
  {
    id: 9,
    question:
      "9. How can non-native English researchers prepare manuscripts for international journals?",
    answer:
      "Focus deeply on data integrity during draft stages, read widely in your target journal category to absorb domain-specific prose rhythms, and leverage expert collaborative editing pairs prior to formal peer reviews.",
  },
];

export const heroBulletPoints = [
  {
    title: "Professional Writing Support",
    text: "Access to skilled English writers and editors with expertise in specialized niche areas.",
  },
  {
    title: "Advanced Editing Techniques",
    text: "Focus on concise content, reducing jargon, and enhancing readability through multiple revisions.",
  },
  {
    title: "Quality Assurance",
    text: "Rigorous proofreading to eliminate errors in grammar, spelling, and vocabulary, ensuring submission-ready manuscripts.",
  },
  {
    title: "High-Impact Journal Publishing",
    text: "Assistance in publishing with leading firms, enhancing visibility and impact.",
  },
];

export const mainServicesList = [
  "Scientific Editing",
  "Manuscript Editing",
  "Book Editing",
  "Post Editing",
  "Thesis Editing",
  "Translation with Editing",
  "Grant & Business Document Editing",
  "Resume/CV & Application Editing",
];

export const audienceList = [
  {
    title: "Researchers & Academics",
    bgImage:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Healthcare & Life Sciences Professionals",
    bgImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Businesses & Corporations",
    bgImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Publishers & Authors",
    bgImage:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Educational Institutions & Students",
    bgImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Government & Non-Profit Organizations",
    bgImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600",
  },
];

export const editingTypesList = [
  {
    id: "proofreading",
    title: "Proofreading",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "The final review stage focuses on catching surface errors such as misspellings, typographical mistakes, and basic grammar issues. Proofreading is the last step before submission or publication.",
  },
  {
    id: "substantive",
    title: "Substantive Editing",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Evaluates the overall structure, logical flow, and content organization, improving how your core arguments and findings are presented clearly to your target audience.",
  },
  {
    id: "line",
    title: "Line Editing",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Focuses line-by-line on creative use of language, phrasing, tone consistency, and smooth transitions to maximize readability and overall text rhythm.",
  },
  {
    id: "copyediting",
    title: "Copyediting",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Ensures rule-based consistency in mechanics, including accurate grammar, technical spelling, style manual rules, syntax clarity, and punctuation standards.",
  },
  {
    id: "content",
    title: "Content Editing",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Deep dive analysis of complete factual precision, source consistency, depth of topic development, and alignment with academic writing standards.",
  },
  {
    id: "technical",
    title: "Technical Editing",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Refines specific field jargon, mathematical equations, domain nomenclature, data presentation layouts, and highly specialized technical methodologies.",
  },
  {
    id: "manuscript",
    title: "Manuscript Editing",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Tailored for academic authors submitting to journals or book publishers, focusing on both language use and publisher guidelines. Helps improve acceptance chances in high-impact journals.",
  },
  {
    id: "structural",
    title: "Structural Editing",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Reorganizes full manuscript chapter modules, paragraphs, and sections to create a strong, logically sound structural narrative architecture.",
  },
  {
    id: "formatting",
    title: "Formatting & Style Editing",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Conforms citation styles, reference matching matrices, margin definitions, blockquotes, and layouts exactly to APA, Harvard, Chicago, or target journal rules.",
  },
  {
    id: "reviewer",
    title: "Reviewer Response Editing",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Polishes formal response letters and revised sections following peer review comments, preserving an objective, scholarly, and persuasive tone.",
  },
  {
    id: "plagiarism",
    title: "Plagiarism Check & Ethical Editing",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Reviews similarity metrics, rephrases flags to maintain original contextual intent, and checks formatting compliance with standard academic ethics.",
  },
  {
    id: "developmental",
    title: "Developmental Editing",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Partners from the early drafting phase to build the manuscript concept, refining themes, outlines, and structural planning before writing finalize.",
  },
  {
    id: "language",
    title: "Language Polishing (ESL Support)",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
    description:
      "Elevates international researcher manuscripts by converting non-native phrasing styles into natural, publishable English with zero loss of technical context.",
  },
];

export const translationServicesList = [
  {
    title: "Document & Website Translation",
    description:
      "Accurate translation of academic papers, business reports, policy documents, and websites, ensuring the message is preserved and resonates with the target audience.",
    icon: "📄",
  },
  {
    title: "Translation with Editing (Bilingual Editing)",
    description:
      "A premium service where native translators and subject-matter editors collaborate to refine translated texts for linguistic accuracy, readability, and journal compliance. Ideal for researchers and academics preparing manuscripts for publication.",
    icon: "🌐",
  },
  {
    title: "Technical & Scientific Translation",
    description:
      "Specialized translation of scientific, medical, and technical documents such as clinical reports, product manuals, patents, and regulatory submissions, with strict adherence to field-specific terminology and standards.",
    icon: "🔬",
  },
  {
    title: "Software Localization",
    description:
      "Adaptation of software, mobile applications, and digital platforms to ensure seamless functionality, cultural relevance, and user accessibility across global markets.",
    icon: "💻",
  },
];

export const workflowSteps = [
  {
    step: "1",
    title: "Project Consultation & Requirement Analysis",
    description:
      "We begin by understanding your project goals, target audience, document type, language preferences, and formatting needs.",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40", // Replace with local step icons
  },
  {
    step: "2",
    title: "Content Assessment",
    description:
      "Our team reviews your materials to define the scope of work, evaluating language quality, structure, clarity, and technical terminology.",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
  },
  {
    step: "3",
    title: "Expert Editing & Translation",
    description:
      "Your document is refined by subject-matter experts:\n• Editing → grammar, punctuation, style, readability, and journal compliance.\n• Translation → linguistic accuracy, cultural adaptation, and technical precision.",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
  },
  {
    step: "4",
    title: "Quality Assurance Review",
    description:
      "Every document undergoes multi-level checks by senior editors to ensure consistency, accuracy, and adherence to international standards.",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
  },
  {
    step: "5",
    title: "Client Feedback & Revisions",
    description:
      "You review the refined document. We incorporate your feedback and provide unlimited revisions until you are fully satisfied.",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
  },
  {
    step: "6",
    title: "Final Delivery",
    description:
      "Your polished, publication-ready document is delivered in the preferred format, ready for submission, publication, or professional use.",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=40",
  },
];

export const packagesList = [
  {
    name: "Basic",
    tagline: "Language Clarity",
    badge: "B",
    // Match the exact muted greenish-gray tone
    cardBg: "bg-[#CAD6D5]",
    badgeTextColor: "text-[#B9A682]",
    idealFor:
      "Early drafts, academic assignments, internal reports, general business content",
    includes: [
      "Grammar, spelling, and punctuation corrections",
      "Sentence-level restructuring for clarity",
      "Consistency in basic terminology and style",
    ],
    addons: ["Plagiarism check", "Certificate of editing"],
    turnaround: "3–5 business days",
  },
  {
    name: "Standard",
    tagline: "Enhanced Quality",
    badge: "S",
    // Match the exact soft lavender-purple shade
    cardBg: "bg-[#D5BEDC]",
    badgeTextColor: "text-[#B9A682]",
    idealFor:
      "Journal manuscripts, technical reports, dissertations, business proposals",
    includes: [
      "All Basic Package features",
      "Style and tone refinement for the target audience",
      "Improved logical flow and coherence",
      "Alignment with domain-specific terminology",
    ],
    addons: [
      "Reference and citation formatting",
      "Word count reduction (without altering meaning)",
      "Cover letter drafting (for journal submissions)",
    ],
    turnaround: "4–7 business days",
  },
  {
    name: "Premium",
    tagline: "Publication Ready",
    badge: "P",
    // Match the exact golden ochre/tan background shade
    cardBg: "bg-[#CCA673]",
    badgeTextColor: "text-[#5597AC]",
    idealFor:
      "High-impact journals, regulatory submissions, clinical/medical content, funding proposals",
    includes: [
      "All Standard Package features",
      "Subject-matter expert review for technical accuracy",
      "Formatting per journal/publisher guidelines",
      "Advanced editing/translation with cultural and linguistic sensitivity",
    ],
    addons: [
      "Multiple-round editing & revision support",
      "Journal selection and submission assistance",
      "Reviewer response editing support",
    ],
    turnaround: "7–10 business days (priority delivery available)",
  },
];
export const mainServicesData = [
  {
    title: "Scientific Editing",
    description:
      "Optimize your research manuscript with Pubrica's expert Scientific Editing Service, ensuring technical accuracy and journal compliance.",
    subtext:
      "Trusted by researchers worldwide to meet the standards of high-impact journals.",
  },
  {
    title: "Manuscript Editing",
    description:
      "Comprehensive editing to enhance the layout, clarity, flow, and structural integrity of your research work.",
    subtext: "Ready for tier-one international journal submissions.",
  },
  {
    title: "Book Editing",
    description:
      "Professional structural and line editing tailored explicitly for academic volumes and text books.",
    subtext: "Polished from cover to cover by specialized native publishers.",
  },
  {
    title: "Post Editing",
    description:
      "Refining machine-translated drafts to eliminate unnatural phrasing and formatting issues.",
    subtext: "Ensuring perfect flow while retaining absolute context.",
  },
  {
    title: "Thesis Editing",
    description:
      "Detailed dissertation correction aligning layout with strict academic university guidelines.",
    subtext:
      "Helping postgraduate scholars pass defense requirements with flying colors.",
  },
  {
    title: "Translation with Editing",
    description:
      "Flawless semantic conversions paired with subject matter linguistic review.",
    subtext:
      "Bridging communication divides effortlessly across multiple global research fields.",
  },
  {
    title: "Grant & Business Document Editing",
    description:
      "Polishing funding proposals to elevate message persuasion, formatting, and structural delivery.",
    subtext:
      "Maximizing evaluation success rates with targeted phrasing treatments.",
  },
  {
    title: "Resume/CV & Application Editing",
    description:
      "Optimizing profile submissions to spotlight clear academic milestones and functional skillsets.",
    subtext:
      "Tailored to cross-border institutional review committee frameworks.",
  },
];

export const trustPartners = [
  {
    name: "American Heart Association",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120",
  },
  {
    name: "ASCO",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120",
  },
  {
    name: "Rockefeller University Press",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120",
  },
  {
    name: "Yonsei University",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120",
  },
  {
    name: "Wolters Kluwer",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120",
  },
  {
    name: "Obstetrics & Gynecology",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120",
  },
  {
    name: "American Academy of Neurology",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120",
  },
];

// Testimonials
export const testimonialsData = [
  {
    quote:
      "Pubrica's editing and translation support helped me publish my manuscript in a high-impact journal. Their attention to language, grammar, and formatting ensured my research was communicated clearly and professionally.",
    name: "DR. MARIA SCHNEIDER",
    role: "Academic Researcher, Germany",
    flag: "🇩🇪", // Or use an SVG/image if preferred
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200", // Replace with Asian Journal of Psychiatry thumb
  },
  {
    quote:
      "I had my clinical study translated from Japanese to English, and the team maintained both accuracy and medical terminology integrity. The reviewers appreciated the clarity, and my paper was accepted without major revisions.",
    name: "DR. HIROSHI TANAKA",
    role: "Clinical Practitioner, Japan",
    flag: "🇯🇵",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200", // Replace with JAMA Oncology thumb
  },
  {
    quote:
      "The editorial team not only refined my writing but also ensured consistency in style and tone across my thesis. Their guidance improved readability and strengthened my arguments significantly.",
    name: "ANANYA RAO",
    role: "PhD Scholar, India",
    flag: "🇮🇳",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200", // Replace with BJCP thumb
  },
];
