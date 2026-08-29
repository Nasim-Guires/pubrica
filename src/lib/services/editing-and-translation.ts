import { PackageItem } from "@/components/common/CommonPackages";

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
    title:
      "How to Structure Case Reports and Review Articles for Medical Journals",
    description:
      "Medical journals expect a structure for case reports and review articles, with clear objectives...",
    imageUrl:
      "/images/editing-and-translation/How-to-Structure-Case-Reports-and-Review-Articles-for-Medical-Journals.jpg",
  },
  {
    id: 2,
    title:
      "How Should Physicians Choose the Right Journal for Submitting a Case...",
    description:
      "Publishing a case report involves more than clinical knowledge; it also demands strategic journal ...",
    imageUrl:
      "/images/editing-and-translation/How-Should-Physicians-Choose-the-Right-Journal-for-Submitting-a-Case-Report.jpg",
  },
  {
    id: 3,
    title:
      "How Physicians Can Write Clear and Impactful Patient Education Materials",
    description:
      "Effective patient education materials (PEMs) are crucial for promoting health literacy, enhancing...",
    imageUrl:
      "/images/editing-and-translation/How-Physicians-Can-Write-Clear-and-Impactful-Patient-Education-Materials.jpg",
  },
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
      "Academic translation is the translation of content from one language to another with utmost accuracy, whereas language editing is the improvement of grammar, content, writing style, and readability of already written content.",
  },
  {
    id: 3,
    question:
      "3. Can a translated research manuscript be edited for journal publication?",
    answer:
      "Yes, translated manuscripts may be edited professionally with regard to language accuracy, clarity, terminology, formatting, etc., for the purpose of publication in a journal.",
  },
  {
    id: 4,
    question:
      "4. Why is professional editing important after translating a research paper?",
    answer:
      "Professional editing ensures that translated papers are not only accurate, contextually appropriate, grammatically polished, and terminologically precise but also perfectly aligned with journal requirements before they are submitted for publication.",
  },
  {
    id: 5,
    question:
      "5. Where to find reliable academic translation and editing services?",
    answer:
      "Trustworthy academic translation and editing services can be accessed through university writing centers, professional language service firms, research support firms, and individual freelance academic editors.",
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
      "Yes, they accept translated manuscripts as long as they are original, ethical, well-translated, well-edited, and completely compliant with the submission guidelines of the journal.",
  },
  {
    id: 8,
    question:
      "8. What are the common language issues in translated research papers?",
    answer:
      "Grammatical errors, unnatural wording, terminology, literal translation, unclear sentence structure, poor readability, and contextual errors are some of the common problems that may occur.",
  },
  {
    id: 9,
    question:
      "9. How can non-native English researchers prepare manuscripts for international journals?",
    answer:
      "Non-native authors may improve their manuscripts by engaging professional language services, proofreading, following the submission guidelines, using clear language, avoiding ambiguity, and ensuring the manuscript is of good quality before submission.",
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
    description:
      "Ensure your manuscripts, journal articles, dissertations, and research papers meet international publication standards with flawless language, formatting, and journal compliance.",
    bgImage:
      "/images/editing-and-translation/Researchers-Academics-2.png",
  },
  {
    title: "Healthcare & Life Sciences Professionals",
    description:
      "Precision medical and scientific editing to ensure clear communication, compliance, and accuracy across healthcare documents.",
    bgImage:
      "/images/editing-and-translation/Healthcare-Life-Sciences-Professionals.png",
  },
  {
    title: "Businesses & Corporations",
    description:
      "Polished corporate communications, reports, and marketing materials tailored for global audiences and brand integrity.",
    bgImage:
      "/images/editing-and-translation/Businesses-Corporations.png",
  },
  {
    title: "Publishers & Authors",
    description:
      "Comprehensive editorial support for book manuscripts, journals, and digital content from concept to publication.",
    bgImage:
      "/images/editing-and-translation/Publishers-Authors.png",
  },
  {
    title: "Educational Institutions & Students",
    description:
      "Enhance theses, dissertations, assignments, and learning resources for clarity, coherence, and professional presentation that meet academic standards.",
    bgImage:
      "/images/editing-and-translation/Educational-Institutions-Students.png",
  },
  {
    title: "Government & Non-Profit Organizations",
    description:
      "Refined policy documents, reports, and grant proposals designed to effectively communicate mission-critical messaging.",
    bgImage:
      "/images/editing-and-translation/Government-Non-Profit-Organizations.png",
  },
];



export const translationServicesList = [
  {
    title: "Document & Website Translation",
    description:
      "Accurate translation of academic papers, business reports, policy documents, and websites, ensuring the message is preserved and resonates with the target audience.",
    icon: "/images/editing-and-translation/Document-Website-Translation.png",
  },
  {
    title: "Translation with Editing (Bilingual Editing)",
    description:
      "A premium service where native translators and subject-matter editors collaborate to refine translated texts for linguistic accuracy, readability, and journal compliance. Ideal for researchers and academics preparing manuscripts for publication.",
    icon: "/images/editing-and-translation/Translation-with-Editing-Bilingual-Editing.png",
  },
  {
    title: "Technical & Scientific Translation",
    description:
      "Specialized translation of scientific, medical, and technical documents such as clinical reports, product manuals, patents, and regulatory submissions, with strict adherence to field-specific terminology and standards.",
    icon: "/images/editing-and-translation/Technical-Scientific-Translation.png",
  },
  {
    title: "Software Localization",
    description:
      "Adaptation of software, mobile applications, and digital platforms to ensure seamless functionality, cultural relevance, and user accessibility across global markets.",
    icon: "/images/editing-and-translation/Software-Localization.png",
  },
];

export const workflowSteps = [
  {
    step: "1",
    title: "Project Consultation & Requirement Analysis",
    description:
      "We begin by understanding your project goals, target audience, document type, language preferences, and formatting needs.",
    icon: "/images/publication-support/video-abstract/Send-Materials.png", // Replace with local step icons
  },
  {
    step: "2",
    title: "Content Assessment",
    description:
      "Our team reviews your materials to define the scope of work, evaluating language quality, structure, clarity, and technical terminology.",
    icon: "/images/publication-support/video-abstract/Script-Content-Development.png",
  },
  {
    step: "3",
    title: "Expert Editing & Translation",
    description:
      "Your document is refined by subject-matter experts:\n• Editing → grammar, punctuation, style, readability, and journal compliance.\n• Translation → linguistic accuracy, cultural adaptation, and technical precision.",
    icon: "/images/publication-support/video-abstract/Video-Development.png",
  },
  {
    step: "4",
    title: "Quality Assurance Review",
    description:
      "Every document undergoes multi-level checks by senior editors to ensure consistency, accuracy, and adherence to international standards.",
    icon: "/images/publication-support/video-abstract/Author-Feedback.png",
  },
  {
    step: "5",
    title: "Client Feedback & Revisions",
    description:
      "You review the refined document. We incorporate your feedback and provide unlimited revisions until you are fully satisfied.",
    icon: "/images/publication-support/video-abstract/Add-Captions-and-Subtitles.png",
  },
  {
    step: "6",
    title: "Final Delivery",
    description:
      "Your polished, publication-ready document is delivered in the preferred format, ready for submission, publication, or professional use.",
    icon: "/images/publication-support/video-abstract/Author-Accepts-the-Video-and-Abstract.png",
  },
];

export const packages: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "Basic",
    subtitle: "Language Clarity",
    idealFor:
      "Early drafts, academic assignments, internal reports, general business content",
    includes: [
      "Grammar, spelling, and punctuation corrections",
      "Sentence-level restructuring for clarity",
      "Consistency in basic terminology and style",
    ],
    addOns: ["Plagiarism check", "Certificate of editing"],
    turnaround: "3–5 business days",
    cardBgColor: "#CAD6D5",
    titleColor: "#B9A682",
  },
  {
    icon: "/images/publication-support/poster-preparation/S.png",
    title: "Standard",
    subtitle: "Enhanced Quality",
    idealFor:
      "Journal manuscripts, technical reports, dissertations, business proposals",
    includes: [
      "All Basic Package features",
      "Style and tone refinement for the target audience",
      "Improved logical flow and coherence",
      "Alignment with domain-specific terminology",
    ],
    addOns: [
      "Reference and citation formatting",
      "Word count reduction (without altering meaning)",
      "Cover letter drafting (for journal submissions)",
    ],
    turnaround: "4–7 business days",
    cardBgColor: "#D5BEDC",
    titleColor: "#B9A682",
  },
  {
    icon: "/images/editing-and-translation/pro.webp",
    title: "Premium",
    subtitle: "Publication Ready",
    idealFor:
      "High-impact journals, regulatory submissions, clinical/medical content, funding proposals",
    includes: [
      "All Standard Package features",
      "Subject-matter expert review for technical accuracy",
      "Formatting per journal/publisher guidelines",
      "Advanced editing/translation with cultural and linguistic sensitivity",
    ],
    addOns: [
      "Multiple-round editing & revision support",
      "Journal selection and submission assistance",
      "Reviewer response editing support",
    ],
    turnaround: "7–10 business days (priority delivery available)",
    cardBgColor: "#CCA673",
    titleColor: "#5597AC",
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
      "Enhance your academic and scientific manuscripts with Pubrica’s professional Editing Service, clear, concise, and submission-ready.Ideal for ESL authors aiming for clarity, precision, and global recognition.",
    subtext: "",
  },
  {
    title: "Book Editing",
    description:
      "Perfect your academic or professional book manuscript with Pubrica’s Book Editing Service, tailored to achieve excellence and readability.Designed for authors who want engaging, error-free, and publisher-ready books.",
    subtext: "",
  },
  {
    title: "Post Editing",
    description:
      "Refine and polish machine-translated documents with Pubrica’s Post-Editing Service, ensuring fluency, accuracy, and natural readability.Preferred by institutions and corporates for flawless, human-quality translations.",
    subtext: "",
  },
  {
    title: "Thesis Editing",
    description:
      "Optimize your thesis or dissertation with Pubrica’s Thesis Editing Service, tailored for academic excellence and global recognition.Perfect for graduate and doctoral students aiming for top academic standards.",
    subtext: "",
  },
  {
    title: "Translation with Editing",
    description:
      "Achieve accurate, culturally adapted translations with Pubrica’s Translation + Editing Services, where precision meets publication quality.Ensuring your research is understood, accepted, and impactful across languages.",
    subtext: "",
  },
  {
    title: "Grant & Business Document Editing",
    description:
      "Specialized services for grant proposals, business reports, and corporate communications, ensuring clarity and persuasiveness.",
    subtext: "",
  },
  {
    title: "Resume/CV & Application Editing",
    description:
      "Tailoring and polishing CVs, resumes, and application letters to make a strong professional impression.",
    subtext: "",
  },
];

export const trustPartners = [
  {
    name: "American Heart Association",
    logo: "/images/editing-and-translation/logo12.png",
  },
  {
    name: "ASCO",
    logo: "/images/editing-and-translation/logo11.png",
  },
  {
    name: "Rockefeller University Press",
    logo: "/images/editing-and-translation/logo10.png",
  },
  {
    name: "Yonsei University",
    logo: "/images/editing-and-translation/logo9.png",
  },
  {
    name: "Wolters Kluwer",
    logo: "/images/editing-and-translation/logo8.png",
  },
  {
    name: "Obstetrics & Gynecology",
    logo: "/images/editing-and-translation/logo7.png",
  },
  {
    name: "American Academy of Neurology",
    logo: "/images/editing-and-translation/logo6.png",
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
    flagSrc: "/images/editing-and-translation/germany-1-1.png",
    image: "/images/editing-and-translation/asian-journal-of-psychiatry-1.png",
    bgAccent: "bg-[#0b1f3a]",
    journalTitle: "Asian Journal of Psychiatry",
  },
  {
    quote:
      "I had my clinical study translated from Japanese to English, and the team maintained both accuracy and medical terminology integrity. The reviewers appreciated the clarity, and my paper was accepted without major revisions.",
    name: "DR. HIROSHI TANAKA",
    role: "Clinical Practitioner, Japan",
    flag: "🇯🇵",
    flagSrc: "/images/editing-and-translation/japan.png",
    image: "/images/editing-and-translation/jama-oncology-journal-5.png",
    bgAccent: "bg-[#1d4ed8]",
    journalTitle: "JAMA Oncology",
  },
  {
    quote:
      "The editorial team not only refined my writing but also ensured consistency in style and tone across my thesis. Their guidance improved readability and strengthened my arguments significantly.",
    name: "ANANYA RAO",
    role: "PhD Scholar, India",
    flag: "🇮🇳",
    flagSrc: "/images/editing-and-translation/flag.png",
    image: "/images/editing-and-translation/british-journal-of-clinical-pharmacology.png",
    bgAccent: "bg-[#047857]",
    journalTitle: "British Journal of Clinical Pharmacology",
  },
];
