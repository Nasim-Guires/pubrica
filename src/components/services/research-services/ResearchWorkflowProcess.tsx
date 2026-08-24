import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: React.ReactNode;
  iconPath: string;
  isDarkBg?: boolean;
}

const RS_IMG = "/images/research-services";

export const ResearchWorkflowProcess: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "REQUIREMENT GATHERING",
      description:
        "We begin by understanding your specific research project help needs through consultation. This includes topic selection, research objectives, target audience, and expected deliverables.",
      iconPath: `${RS_IMG}/Requirement-Gathering.png`,
    },
    {
      stepNumber: 2,
      title: "PROPOSAL AND SCOPE FINALIZATION",
      description: (
        <>
          Based on your inputs, we will prepare a{" "}
          <Link
            href="/services/physician-writing-services/research-proposal/"
            className="text-[#007ba4] underline hover:text-[#083c4c] font-medium transition-colors"
          >
            research proposal
          </Link>{" "}
          detailing the scope, methodology, compliance guidelines (e.g.,
          PRISMA, Cochrane, ICMJE), timelines, and cost.
        </>
      ),
      iconPath: `${RS_IMG}/Proposal-and-Scope-Finalization.png`,
    },
    {
      stepNumber: 3,
      title: "IN-DEPTH RESEARCH AND DATA COLLECTION",
      description:
        "Our subject-matter experts conduct comprehensive literature searches, data sourcing, and evidence-based research using trusted databases like PubMed, Scopus, and Web of Science.",
      iconPath: `${RS_IMG}/In-Depth-Research-and-Data-Collection.png`,
    },
    {
      stepNumber: 4,
      title: "ANALYSIS AND INTERPRETATION",
      description:
        "We perform qualitative and quantitative data analysis, applying statistical tools, AI/ML models (if required), and domain-specific validation to ensure accuracy and reproducibility.",
      iconPath: `${RS_IMG}/Analysis-and-Interpretation.png`,
    },
    {
      stepNumber: 5,
      title: "CONTENT DEVELOPMENT AND REVIEW",
      description:
        "We draft structured manuscripts, reports, and white papers, supported by citations (APA, Oxford, MLA) and IMRAD structure. Our internal quality team performs peer review and compliance checks.",
      iconPath: `${RS_IMG}/Content-Development-and-Review.png`,
      isDarkBg: true,
    },
    {
      stepNumber: 6,
      title: "FINAL DELIVERY AND REVISIONS",
      description:
        "The completed output is delivered in your preferred format. We incorporate reviewer comments, perform revisions, and ensure readiness for journal submission or regulatory approval.",
      iconPath: `${RS_IMG}/Final-Delivery-and-Revisions.png`,
    },
  ];

  return (
    <section className="w-full bg-[#f4f9fc] py-12 md:py-16 px-4 md:px-8 font-sans overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-2">
          How Our Research Service works
        </h2>
        <h3 className="text-[#083c4c] text-lg md:text-xl font-semibold tracking-wide mb-4">
          Our Step-By-Step Process
        </h3>
        <p className="text-gray-600 text-xs md:text-sm max-w-4xl mx-auto leading-relaxed">
          At Pubrica, our academic research assistance and scientific
          publication support services follow a structured and collaborative
          approach to ensure precision, transparency, and high-quality outcomes.
        </p>
      </div>

      {/* MOBILE LAYOUT (< md screens): Vertical Alternating Timeline */}
      <div className="flex md:hidden flex-col items-center w-full max-w-sm mx-auto space-y-6">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.stepNumber}
              className="relative flex items-center w-full min-h-[160px]"
            >
              {/* Connecting Vertical Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute top-8 bottom-0 w-[2px] bg-[#007ba4] z-0 ${
                    isEven ? "left-4" : "right-4"
                  }`}
                />
              )}

              {/* Step Number Badge */}
              <div
                className={`absolute z-10 w-9 h-9 rounded-full bg-[#007ba4] text-white font-bold flex items-center justify-center text-sm shadow-sm ${
                  isEven ? "left-0" : "right-0"
                }`}
              >
                {step.stepNumber}
              </div>

              {/* Step Card Container */}
              <div
                className={`w-full flex ${
                  isEven ? "pl-10 pr-2" : "pr-10 pl-2"
                }`}
              >
                <div
                  className={`border rounded-sm shadow-xs p-4 flex flex-col items-center text-center w-full z-10 ${
                    step.isDarkBg
                      ? "bg-[#4a4a4a] text-white border-[#4a4a4a]"
                      : "bg-[#F8F9FA] border-[#E2E8F0] text-[#0F172A]"
                  }`}
                >
                  <div className="w-10 h-10 relative mb-3 flex items-center justify-center">
                    <Image
                      src={step.iconPath}
                      alt={step.title}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>

                  <h4
                    className={`font-bold text-xs mb-2 leading-snug ${
                      step.isDarkBg ? "text-white" : "text-[#083c4c]"
                    }`}
                  >
                    {step.title}
                  </h4>

                  <div
                    className={`text-[11px] leading-relaxed text-left ${
                      step.isDarkBg ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DESKTOP LAYOUT (>= md screens): Dynamic Flow Layout */}
      <div
        className="hidden md:grid gap-2 lg:gap-4 items-stretch justify-center w-full max-w-7xl mx-auto relative my-8"
        style={{
          gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
        }}
      >
        {steps.map((step, index) => {
          const isTop = index % 2 === 0;

          return (
            <div
              key={step.stepNumber}
              className="flex flex-col items-center justify-between group w-full relative min-h-[500px]"
            >
              {/* UPPER SECTION */}
              <div className="w-full flex flex-col items-center justify-end flex-1 pb-0">
                {!isTop ? (
                  /* Card placed at Top */
                  <div
                    className={`border shadow-xs p-3 lg:p-4 flex flex-col items-start text-left w-full h-full justify-start z-20 transition-all duration-300 rounded-xs ${
                      step.isDarkBg
                        ? "bg-[#4a4a4a] text-white border-[#4a4a4a]"
                        : "bg-white border-gray-200 group-hover:bg-black group-hover:border-black"
                    }`}
                  >
                    <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                      <Image
                        src={step.iconPath}
                        alt={step.title}
                        width={38}
                        height={38}
                        className={`object-contain transition-all duration-300 ${
                          !step.isDarkBg
                            ? "group-hover:brightness-0 group-hover:invert"
                            : ""
                        }`}
                      />
                    </div>

                    <h4
                      className={`font-bold text-xs lg:text-sm mb-2 leading-snug tracking-wider transition-colors duration-300 ${
                        step.isDarkBg
                          ? "text-white"
                          : "text-[#083c4c] group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </h4>

                    <div
                      className={`text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 ${
                        step.isDarkBg
                          ? "text-gray-200"
                          : "text-gray-500 group-hover:text-gray-300"
                      }`}
                    >
                      {step.description}
                    </div>
                  </div>
                ) : (
                  /* Badge + Vertical Connector Line */
                  <div className="flex flex-col items-center justify-end w-full">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#007ba4] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mb-3">
                      {step.stepNumber}
                    </div>
                    <div className="w-[2px] h-10 bg-[#007ba4] transition-colors duration-300 group-hover:bg-black" />
                  </div>
                )}
              </div>

              {/* CENTER HORIZONTAL LINE SEGMENT */}
              <div className="w-full h-[8px] relative my-0 shrink-0">
                <div
                  className={`h-full bg-[#007ba4] w-full transition-colors duration-300 group-hover:bg-black ${
                    index === 0
                      ? "rounded-l-sm"
                      : index === steps.length - 1
                      ? "rounded-r-sm"
                      : ""
                  }`}
                />
              </div>

              {/* LOWER SECTION */}
              <div className="w-full flex flex-col items-center justify-start flex-1 pt-0">
                {isTop ? (
                  /* Card placed at Bottom */
                  <div
                    className={`border shadow-xs p-3 lg:p-4 flex flex-col items-start text-left w-full h-full justify-start z-20 transition-all duration-300 rounded-xs ${
                      step.isDarkBg
                        ? "bg-[#4a4a4a] text-white border-[#4a4a4a]"
                        : "bg-white border-gray-200 group-hover:bg-black group-hover:border-black"
                    }`}
                  >
                    <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                      <Image
                        src={step.iconPath}
                        alt={step.title}
                        width={38}
                        height={38}
                        className={`object-contain transition-all duration-300 ${
                          !step.isDarkBg
                            ? "group-hover:brightness-0 group-hover:invert"
                            : ""
                        }`}
                      />
                    </div>

                    <h4
                      className={`font-bold text-xs lg:text-sm mb-2 leading-snug tracking-wider transition-colors duration-300 ${
                        step.isDarkBg
                          ? "text-white"
                          : "text-[#083c4c] group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </h4>

                    <div
                      className={`text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 ${
                        step.isDarkBg
                          ? "text-gray-200"
                          : "text-gray-500 group-hover:text-gray-300"
                      }`}
                    >
                      {step.description}
                    </div>
                  </div>
                ) : (
                  /* Vertical Connector Line + Badge */
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="w-[2px] h-10 bg-[#007ba4] transition-colors duration-300 group-hover:bg-black" />
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#007ba4] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mt-3">
                      {step.stepNumber}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};