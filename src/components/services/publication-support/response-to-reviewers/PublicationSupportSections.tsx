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
  position: "bottom" | "top"; // Alternates layout position
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

export default function PublicationSupportSections() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-slate-800 font-sans space-y-16">
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
                <div className="w-10 h-10 rounded-full bg-[#fcf4d9] group-hover:bg-[#666666] flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg
                    className="w-5 h-5 text-[#083b3a] group-hover:text-amber-300 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
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
      </section>

      {/* ================= SECTION 3: STAGGERED TIMELINE WORKFLOW ================= */}
      <section className="overflow-x-auto py-6">
        <div className="min-w-[850px]">
          {/* Horizontal Teal Connecting Bar Across Timeline */}
          <div className="relative w-full">
            <div className="grid grid-cols-6 gap-3 items-stretch">
              {WORKFLOW_STEPS.map((step) => {
                const isBottom = step.position === "bottom";

                return (
                  <div
                    key={step.stepNumber}
                    className="flex flex-col items-center justify-between h-[480px]"
                  >
                    {/* TOP HALF: Circle (if bottom card) OR Card (if top card) */}
                    <div className="w-full flex-1 flex flex-col justify-end items-center pb-2">
                      {!isBottom ? (
                        /* Top Card Block */
                        <div className="group w-full bg-white border border-slate-200 rounded-sm p-4 shadow-sm transition-colors duration-300 hover:bg-[#555555] hover:text-white cursor-pointer">
                          <div className="w-8 h-8 mb-2 flex items-center justify-center">
                            <svg
                              className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </div>
                          <h3 className="text-xs font-bold text-slate-800 group-hover:text-white mb-2 leading-tight uppercase transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 group-hover:text-slate-200 leading-snug transition-colors">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        /* Numbered Circle for Bottom Card */
                        <div className="flex flex-col items-center">
                          <div className="w-9 h-9 rounded-full bg-[#008ba3] text-white font-bold text-sm flex items-center justify-center shadow-sm">
                            {step.stepNumber}
                          </div>
                          <div className="w-0.5 h-6 bg-red-400" />
                        </div>
                      )}
                    </div>

                    {/* CENTER HORIZONTAL CONNECTING LINE */}
                    <div className="w-full h-2.5 bg-[#008ba3] my-1" />

                    {/* BOTTOM HALF: Card (if bottom card) OR Circle (if top card) */}
                    <div className="w-full flex-1 flex flex-col justify-start items-center pt-2">
                      {isBottom ? (
                        /* Bottom Card Block */
                        <div className="group w-full bg-white border border-slate-200 rounded-sm p-4 shadow-sm transition-colors duration-300 hover:bg-[#555555] hover:text-white cursor-pointer">
                          <div className="w-8 h-8 mb-2 flex items-center justify-center">
                            <svg
                              className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                          </div>
                          <h3 className="text-xs font-bold text-slate-800 group-hover:text-white mb-2 leading-tight uppercase transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 group-hover:text-slate-200 leading-snug transition-colors">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        /* Numbered Circle for Top Card */
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-6 bg-red-400" />
                          <div className="w-9 h-9 rounded-full bg-[#008ba3] text-white font-bold text-sm flex items-center justify-center shadow-sm">
                            {step.stepNumber}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
