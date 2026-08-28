import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PAGE_IMAGES = "/images/publication-support/responding-to-reviewers";

// ================= TYPES OF RESPONSES DATA =================
interface SupportType {
  title: string;
  icon: string;
  items: string[];
}

const SUPPORT_TYPES: SupportType[] = [
  {
    title: "Manuscript & Journal Submissions",
    icon: `${PAGE_IMAGES}/Manuscript-Journal-Submissions.png`,
    items: [
      "Response to journal reviewer comments",
      "Rebuttal letter for peer-reviewed manuscript",
      "Point-by-point response to reviewers",
      "Revised manuscript preparation for SCI/Scopus journals",
      "Journal resubmission formatting and editing",
    ],
  },
  {
    title: "Academic & Thesis Work",
    icon: `${PAGE_IMAGES}/Academic-Thesis-Work.png`,
    items: [
      "Response letter for PhD thesis examiner comments",
      "Postgraduate dissertation review response",
      "Viva voice response preparation (written summary)",
      "University submission revisions (Master's/PhD)",
    ],
  },
  {
    title: "Grant & Funding Applications",
    icon: `${PAGE_IMAGES}/Grant-Funding-Applications.png`,
    items: [
      "Response to grant reviewer feedback (NIH, ERC, Horizon, etc.)",
      "Research funding revision support",
      "Justification letters for funding agencies",
      "Resubmission of rejected grant proposals",
    ],
  },
  {
    title: "Scientific & Regulatory Submissions",
    icon: `${PAGE_IMAGES}/Scientific-Regulatory-Submissions.png`,
    items: [
      "Clinical trial manuscript peer review response",
      "Regulatory submission revisions (medical/pharma)",
      "Device validation report peer review comments",
    ],
  },
  {
    title: "White Papers & Conference Papers",
    icon: `${PAGE_IMAGES}/White-Papers-Conference-Papers.png`,
    items: [
      "Reviewer response for conference paper resubmission",
      "Abstract and poster revision support",
      "White paper peer review editing and feedback response",
    ],
  },
  {
    title: "Special Services",
    icon: `${PAGE_IMAGES}/Special-Services.png`,
    items: [
      "Multilingual response writing (English + native language support)",
      "Non-native English speaker response editing",
      "Domain-specific rebuttal drafting (e.g., oncology, AI, pharmacology)",
    ],
  },
];

// ================= SUBJECTS DATA =================
interface SubjectCategory {
  title: string;
  topics: string[];
}

const SUBJECT_CATEGORIES: SubjectCategory[] = [
  {
    title: "Life Sciences & Biomedical Sciences",
    topics: [
      "Molecular Biology",
      "Cell Biology",
      "Biochemistry",
      "Neuroscience",
      "Biotechnology",
      "Genetics and Genomics",
    ],
  },
  {
    title: "Medical & Clinical Sciences",
    topics: [
      "General Medicine",
      "Surgery",
      "Psychiatry",
      "Oncology",
      "Cardiology",
      "Paediatrics",
    ],
  },
  {
    title: "Pharmaceutical & Health Sciences",
    topics: [
      "Pharmaceutics",
      "Pharmaceutical Chemistry",
      "Pharmacognosy",
      "Clinical Pharmacy",
      "Hospital & Community Pharmacy",
      "Pharmacovigilance",
    ],
  },
  {
    title: "Allied Health Sciences",
    topics: [
      "Physiotherapy",
      "Occupational Therapy",
      "Medical Laboratory Technology",
      "Nutrition and Dietetics",
      "Speech and Hearing Sciences",
      "Radiologic Technology",
    ],
  },
  {
    title: "Psychology & Cognitive Sciences",
    topics: [
      "Clinical Psychology",
      "Educational Psychology",
      "Neuropsychology",
      "Behavioural Sciences",
      "Cognitive Neuroscience",
    ],
  },
  {
    title: "Agricultural & Veterinary Sciences",
    topics: [
      "Agricultural Science",
      "Horticulture",
      "Veterinary Science",
      "Food Science & Technology",
      "Agribusiness",
    ],
  },
  {
    title: "Multidisciplinary & Interdisciplinary Research",
    topics: [
      "Translational Medicine",
      "One Health",
      "Health Informatics",
      "Biomedical Data Science",
      "AI/ML in Healthcare",
      "Sustainable Development",
      "Nanotechnology",
    ],
  },
  {
    title: "Social Sciences & Humanities",
    topics: [
      "Sociology",
      "Anthropology",
      "Political Science",
      "Education",
      "Economics",
      "Linguistics",
    ],
  },
];

// ================= WORKFLOW TIMELINE STEPS =================
const WORKFLOW_STEPS = [
  {
    stepNumber: 1,
    title: "COMPREHENSIVE REVIEWER COMMENT ANALYSIS",
    iconSrc: "/images/publication-support/scopeofthejournal.webp",
    description:
      "Our subject matter expert team systematically reviews all feedback and suggestions also provided by the journal reviewers or editors. We evaluate critical points, reviewer clarifications, and determine the most appropriate way to respond to reviewer comments.",
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "STRATEGIC POINT-BY-POINT RESPONSE DRAFTING",
    iconSrc: `${PAGE_IMAGES}/Strategic-Point-by-Point-Response-Drafting.png`,
    description:
      "We write focused, concise, and respectful responses to each reviewer's comment. Our responses may include scientific reasoning, data justification, or references to clarify that your position is communicated clearly and appropriately.",
    position: "top",
  },
  {
    stepNumber: 3,
    title: "MANUSCRIPT REVISION AND EDITING",
    iconSrc: `${PAGE_IMAGES}/Manuscript-Revision-and-Editing.png`,
    description:
      "On the basis of reviewer feedback, our editors have edited the manuscript to add the required changes. We indicate each change using Track Changes or whatever method is necessary for your target journal to present our transparency.",
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "CONSISTENCY AND COMPLIANCE CHECK",
    iconSrc: `${PAGE_IMAGES}/Consistency-and-Compliance-Check.png`,
    description:
      "We assure you that the responses and manuscript revisions are consistent with the journal's formatting guidelines and editorial policies, upholding an exceptionally high standard of academic professionalism.",
    position: "top",
  },
  {
    stepNumber: 5,
    title: "FINAL REVIEW AND QUALITY ASSURANCE",
    iconSrc: `${PAGE_IMAGES}/Final-Review-and-Quality-Assurance.png`,
    description:
      "Before delivery, the team in charge of quality control checks the response document and revised manuscript for clarity, tone, grammar, and accuracy.",
    position: "bottom",
  },
  {
    stepNumber: 6,
    title: "SUPPORT FOR RESUBMISSION",
    iconSrc: `${PAGE_IMAGES}/Support-for-Resubmission.png`,
    description:
      "We help you with resubmission documentation, including cover letters and any additional materials the medical and life science journal may require. For subsequent revisions, we will continue to support you with addressing any new reviewer comments.",
    position: "top",
  },
];

export default function PublicationSupportSections() {
  return (
    <div className="w-full">
      {/* CONTAINED SECTIONS (Section 1 & 2) */}
      <div className="max-w-6xl mx-auto px-4 py-6 text-slate-800 font-sans space-y-16">
        {/* ================= SECTION 1: TYPES OF RESPONSES ================= */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#083b3a] mb-8 text-center md:text-left">
            Types of Responses and Documents We Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUPPORT_TYPES.map((card, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200 rounded-sm p-6 shadow-sm border-t-4 border-t-[#083b3a] transition-all duration-300 hover:bg-[#555555] hover:text-white cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full bg-[#fcf4d9] group-hover:bg-[#666666] flex-shrink-0 overflow-hidden">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#083b3a] group-hover:text-white transition-colors leading-snug">
                    {card.title}
                  </h3>
                </div>

                <ul className="space-y-2 text-xs md:text-sm text-slate-700 group-hover:text-slate-100 transition-colors">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-[#083b3a] group-hover:text-amber-400 font-bold">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 2: SUBJECTS ================= */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#083b3a] mb-3">
            Subjects
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8">
            Pubrica&apos;s Response to Reviewer Comments service helps researchers
            in all disciplines to produce accurate, point-by-point responses to
            peer review feedback. The service ensures accuracy scientifically,
            clarity, and alignment with journal requirements for a successful
            manuscript.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SUBJECT_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="group bg-[#f0faf7] border border-emerald-100 rounded-sm p-4 border-t-4 border-t-[#083b3a] shadow-sm transition-all duration-300 hover:bg-[#555555] hover:text-white cursor-pointer"
              >
                <h3 className="text-sm font-bold text-[#083b3a] group-hover:text-white mb-4 pb-2 border-b border-emerald-200/50 group-hover:border-slate-600 transition-colors leading-snug">
                  {cat.title}
                </h3>

                <ul className="space-y-2 text-xs text-slate-700 group-hover:text-slate-100 transition-colors">
                  {cat.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full border border-red-600 bg-red-500 group-hover:border-amber-400 group-hover:bg-amber-400 flex-shrink-0 transition-colors" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Centered Button Wrapper */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/subject-matter-experts"
              className="inline-flex items-center justify-center bg-[#0d3b38] hover:bg-[#082a28] text-white font-bold px-8 py-3 rounded-full shadow-sm transition-colors duration-200"
            >
              View More
            </Link>
          </div>
        </section>
      </div>

      {/* ================= SECTION 3: FULL WIDTH WORKFLOW ================= */}
      <div className="w-full">
        <EditorialWorkflowSection
          heading="EDITORIAL WORKFLOW"
          subheading="Our Step-by-Step Manuscript Revision Process"
          description="We guide your manuscript through a rigorous, multi-stage review and revision process to maximize your acceptance chances."
          steps={WORKFLOW_STEPS}
        />
      </div>
    </div>
  );
}