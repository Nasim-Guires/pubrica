import React from 'react';
import {
  ClipboardDocumentCheckIcon,
  UserIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

// --- Types ---
interface StepData {
  stepNumber: number;
  title: string;
  description: string;
  items?: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// --- Process Steps Data ---
const PROCESS_STEPS: StepData[] = [
  {
    stepNumber: 1,
    title: "REQUIREMENT COLLECTION",
    description: "We begin by gathering comprehensive project details, including:",
    items: [
      "Document type (e.g., research article, case report, thesis, grant)",
      "Target journal or institution guidance",
      "Formatting style (e.g., Vancouver, APA, Harvard)",
      "Word count, deadline, and any special instructions"
    ],
    icon: ClipboardDocumentCheckIcon,
  },
  {
    stepNumber: 2,
    title: "EXPERT ASSIGNMENT",
    description: "A domain-specific medical writer or researcher with relevant clinical or academic expertise is matched to your project. We ensure alignment with your specialty (e.g., cardiology, surgery, oncology) and the intended purpose (publication, CME, regulatory use).",
    icon: UserIcon,
  },
  {
    stepNumber: 3,
    title: "INITIAL DRAFTING",
    description: "Our expert drafts the document based on:",
    items: [
      "Verified and peer-reviewed literature",
      "Your data or research protocols",
      "Compliance with global publication and ethical standards (ICMJE, GPP3, etc.)"
    ],
    icon: DocumentTextIcon,
  },
  {
    stepNumber: 4,
    title: "INTERNAL REVIEW & QUALITY CHECK",
    description: "Every draft goes through a multi-level internal review that includes:",
    items: [
      "Technical review by a senior editor",
      "Language and grammar revision",
      "Formatting review for journal/institutional compliance",
      "Plagiarism review with Turnitin/iThenticate"
    ],
    icon: CheckBadgeIcon,
  },
  {
    stepNumber: 5,
    title: "CLIENT REVIEW & REVISIONS",
    description: "We share the draft with you for feedback. Revisions are handled promptly while ensuring:",
    items: [
      "Scientific integrity is preserved",
      "Requested changes are fully addressed",
      "Content remains consistent with the target audience and publication goals"
    ],
    icon: UserGroupIcon,
  },
  {
    stepNumber: 6,
    title: "FINAL DELIVERY",
    description: "The final version is delivered along with:",
    items: [
      "Reference list (formatted)",
      "Plagiarism/similarity report",
      "Formatting checklist or journal compliance sheet",
      "Ready for journal submission, university defense, regulatory filing, or CME use"
    ],
    icon: PaperAirplaneIcon,
  },
];

export default function CustomizedWritingServiceWork() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2e2b] tracking-tight">
            How Our Customized Medical Writing Services Work
          </h2>
          <p className="mt-2 text-base font-semibold text-[#1a4a45]">
            Step-by-Step Process Designed for Physicians
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our structured and collaborative workflow ensures that every document, be it a medical manuscript, thesis, clinical report, or grant proposal, is scientifically accurate, customized to your aims, and submission-ready.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative items-stretch">
          {PROCESS_STEPS.map((step) => {
            const IconComponent = step.icon;
            const isEven = step.stepNumber % 2 === 0;

            return (
              <div key={step.stepNumber} className="flex flex-col items-center group relative">
                
                {/* Step Number Circle Header (Top for Odds) */}
                {!isEven && (
                  <div className="w-10 h-10 rounded-full bg-[#0088b2] text-white font-bold flex items-center justify-center text-sm mb-3 z-10 shadow-md">
                    {step.stepNumber}
                  </div>
                )}

                {/* Connecting Line Accent */}
                <div className={`w-full h-1 bg-[#0088b2] mb-3 ${isEven ? 'order-2 mt-3 mb-0' : ''}`} />

                {/* Main Card */}
                <div
                  className={`
                    w-full bg-slate-50 border border-gray-200 rounded-sm p-4 text-left flex-1
                    transition-all duration-300 ease-in-out cursor-pointer shadow-sm
                    hover:bg-[#333333] hover:text-white hover:shadow-xl hover:border-[#333333]
                    flex flex-col justify-start
                    ${isEven ? 'order-1' : 'order-3'}
                  `}
                >
                  {/* Card Icon */}
                  <div className="mb-3 text-gray-700 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-7 h-7 stroke-[1.5]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xs font-bold tracking-wider text-gray-900 group-hover:text-white transition-colors duration-300 uppercase mb-3 border-b border-gray-200 group-hover:border-gray-700 pb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] leading-relaxed text-gray-600 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                    {step.description}
                  </p>

                  {/* Bullet Points (if available) */}
                  {step.items && step.items.length > 0 && (
                    <ul className="space-y-1.5 text-[10px] text-gray-600 group-hover:text-gray-300 transition-colors duration-300 mt-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-tight">
                          <span className="inline-block w-1 h-1 rounded-full bg-gray-500 group-hover:bg-white mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Step Number Circle Footer (Bottom for Evens) */}
                {isEven && (
                  <div className="w-10 h-10 rounded-full bg-[#0088b2] text-white font-bold flex items-center justify-center text-sm mt-3 z-10 shadow-md order-3">
                    {step.stepNumber}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}