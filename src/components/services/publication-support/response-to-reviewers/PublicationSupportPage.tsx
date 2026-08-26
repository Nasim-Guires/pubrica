import CommonPackages from "@/components/common/CommonPackages";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// ================= TYPES OF RESPONSES DATA =================
interface SupportType {
  title: string;
  items: string[];
}

const SUPPORT_TYPES: SupportType[] = [
  {
    title: "Manuscript & Journal Submissions",
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
    items: [
      "Response letter for PhD thesis examiner comments",
      "Postgraduate dissertation review response",
      "Viva voice response preparation (written summary)",
      "University submission revisions (Master's/PhD)",
    ],
  },
  {
    title: "Grant & Funding Applications",
    items: [
      "Response to grant reviewer feedback (NIH, ERC, Horizon, etc.)",
      "Research funding revision support",
      "Justification letters for funding agencies",
      "Resubmission of rejected grant proposals",
    ],
  },
  {
    title: "Scientific & Regulatory Submissions",
    items: [
      "Clinical trial manuscript peer review response",
      "Regulatory submission revisions (medical/pharma)",
      "Device validation report peer review comments",
    ],
  },
  {
    title: "White Papers & Conference Papers",
    items: [
      "Reviewer response for conference paper resubmission",
      "Abstract and poster revision support",
      "White paper peer review editing and feedback response",
    ],
  },
  {
    title: "Special Services",
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
interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  position: "bottom" | "top";
}

const WORKFLOW_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "COMPREHENSIVE REVIEWER COMMENT ANALYSIS",
    description:
      "Our subject matter expert team systematically reviews all feedback and suggestions also provided by the journal reviewers or editors. We evaluate critical points, reviewer clarifications, and determine the most appropriate way to respond to reviewer comments.",
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "STRATEGIC POINT-BY-POINT RESPONSE DRAFTING",
    description:
      "We write focused, concise, and respectful responses to each reviewer's comment. Our responses may include scientific reasoning, data justification, or references to clarify that your position is communicated clearly and appropriately.",
    position: "top",
  },
  {
    stepNumber: 3,
    title: "MANUSCRIPT REVISION AND EDITING",
    description:
      "On the basis of reviewer feedback, our editors have edited the manuscript to add the required changes. We indicate each change using Track Changes or whatever method is necessary for your target journal to present our transparency.",
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "CONSISTENCY AND COMPLIANCE CHECK",
    description:
      "We assure you that the responses and manuscript revisions are consistent with the journal's formatting guidelines and editorial policies, upholding an exceptionally high standard of academic professionalism.",
    position: "top",
  },
  {
    stepNumber: 5,
    title: "FINAL REVIEW AND QUALITY ASSURANCE",
    description:
      "Before delivery, the team in charge of quality control checks the response document and revised manuscript for clarity, tone, grammar, and accuracy.",
    position: "bottom",
  },
  {
    stepNumber: 6,
    title: "SUPPORT FOR RESUBMISSION",
    description:
      "We help you with resubmission documentation, including cover letters and any additional materials the medical and life science journal may require. For subsequent revisions, we will continue to support you with addressing any new reviewer comments.",
    position: "top",
  },
];

// ================= PACKAGES DATA =================
interface PackageInfo {
  icon: string;
  name: string;
  subtitle: string;
  bgColor: string;
  borderColor: string;
  idealFor: string;
  includes: string[];
  optionalAddons: string[];
  turnaround: string;
}

const PACKAGES = [
  {
    icon: "/images/publication-support/responding-to-reviewers/standard-logo.png",
    title: "Standard",
    subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
    cardBgColor: "#d6e3e2",
    titleColor: "#083b3a",
    idealFor:
      "Authors with minor reviewer comments requiring straightforward responses and light manuscript edits.",
    includes: [
      "Detailed response letter addressing each reviewer's comment",
      "Minor manuscript revisions (language polishing, formatting corrections)",
      "Highlighted changes using Track Changes",
    ],
    addOns: [
      "Impact Factor & Indexing.",
      "Additional rounds of minor revisions",
      "Language editing and proofreading",
    ],
    turnaround: "4–5 business days",
  },
  {
    icon: "/images/publication-support/journal-selection/advanced.webp",
    title: "ADVANCED",
    subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
    cardBgColor: "#d6c1db",
    titleColor: "#703081",
    idealFor:
      "Manuscripts requiring substantial content changes, data clarifications, or methodology updates, along with a formal cover letter.",
    includes: [
      "Comprehensive response letter addressing all reviewer comments",
      "Major manuscript revisions (content rewriting, data reanalysis)",
      "Preparation of a cover letter for resubmission",
      "Highlighted revisions in the manuscript",
    ],
    addOns: [
      "Statistical data review",
      "Plagiarism check",
      "Formatting as per journal guidelines",
    ],
    turnaround: "6–7 business days",
  },
  {
    icon: "/images/publication-support/responding-to-reviewers/pa-icons-.png",
    title: "Premium",
    subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
    cardBgColor: "#d8c39d",
    titleColor: "#69421c",
    idealFor:
      "Researchers needing end-to-end support for resubmission, including strategic rebuttal and manuscript reformatting to meet strict journal requirements.",
    includes: [
      "Full resubmission kit (response letter, revised manuscript, cover letter)",
      "Reviewer rebuttal strategy and consultation",
      "Manuscript formatting and journal compliance check",
      "Unlimited revisions within the scope of the initial reviewer comments",
    ],
    addOns: [
      "Extended consultation for subsequent revision rounds",
      "English language enhancement for non-native speakers",
      "Submission support and follow-up communication with journal editors",
    ],
    turnaround: "8–10 business days",
  },
];

export default function PublicationSupportPage() {
  return (
    <div className="w-full font-sans bg-white text-slate-800">
      <div className="">
        {/* ================= SECTION 1: TYPES OF RESPONSES ================= */}

        {/* ================= SECTION 2: SUBJECTS ================= */}


        {/* ================= SECTION 3: STAGGERED TIMELINE WORKFLOW ================= */}

      </div>

      {/* ================= SECTION 4: GUARANTEE BANNER ================= */}
      <section className="bg-[#032d1f] text-white py-8 px-6 w-full">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40">
              <Image
                src="/images/publication-support/Satisfaction_Guarantee.webp"
                alt="Satisfaction Guarantee"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Speed up your Response to Reviewer Comments with Pubrica.
            </h2>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed max-w-3xl">
              Speed up life science and medical manuscript review with
              Pubrica&apos;s domain expert manuscript and PhD thesis review and
              response to reviewer comments help service, and ensure timely,
              efficient, and effective responses to your submissions. Our expert
              team provides timely responses and full feedback to speed up the
              publication process.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: SAMPLE WORK & REPORT DOWNLOAD ================= */}
      <section className="max-w-5xl mx-auto px-4 my-12">
        <div className="bg-[#f2faf5] p-8 rounded-sm shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <Image
              src="/images/publication-support/responding-to-reviewers/response-reviewer-Sample-Work-min.webp"
              alt="Response to Reviewer Sample Work"
              width={723}
              height={1024}
              className="w-full h-64 object-cover rounded-sm shadow-md"
            />
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Response to Reviewer Sample Work
              </h3>
              <Link href="/insights/sample-work/sample-response-to-reviewers-comments/" className="bg-black hover:bg-slate-800 text-white font-medium text-xs px-6 py-2.5 rounded-full transition-colors">
                Discover More
              </Link>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                Download the full Report Now
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mb-3 leading-relaxed">
                Access a full sample report to see how Pubrica professionally
                addresses reviewer feedback and enhances manuscript quality for
                successful publication.
              </p>
              <Link href="/insights/sample-work/response-to-review-comments/" className="bg-black hover:bg-slate-800 text-white font-medium text-xs px-6 py-2.5 rounded-full transition-colors">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: PACKAGES ================= */}
      <section className="max-w-6xl mx-auto px-4 my-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#083b3a] mb-2 text-center md:text-left">
          Response to Reviewer Comments Packages
        </h2>
        <p className="text-xs md:text-sm text-slate-600 mb-10 text-center md:text-left max-w-4xl">
          Selecting the proper package allows you to streamline the revision of
          your manuscript. Whether you are looking for quick edits or
          comprehensive resubmission support, Pubrica offers tailored packages
          intended to suit most levels of reviewer feedback complexity.
        </p>

        {/* 3 Package Columns */}
        <CommonPackages packages={PACKAGES} />

        {/* Global CTA Button */}
        <div className="mt-12 text-center">
          <GetFreeQuoteButton />
        </div>
      </section>
    </div>
  );
}
