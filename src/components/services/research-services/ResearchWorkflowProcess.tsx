import React from "react";

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconPath?: string;
  isDarkBg?: boolean;
}

export const ResearchWorkflowProcess: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "REQUIREMENT GATHERING",
      description:
        "We begin by understanding your specific research project help needs through consultation. This includes topic selection, research objectives, target audience, and expected deliverables.",
    },
    {
      stepNumber: 2,
      title: "PROPOSAL AND SCOPE FINALIZATION",
      description:
        "Based on your inputs, we will prepare a research proposal detailing the scope, methodology, compliance guidelines (e.g., PRISMA, Cochrane, ICMJE), timelines, and cost.",
    },
    {
      stepNumber: 3,
      title: "IN-DEPTH RESEARCH AND DATA COLLECTION",
      description:
        "Our subject-matter experts conduct comprehensive literature searches, data sourcing, and evidence-based research using trusted databases like PubMed, Scopus, and Web of Science.",
    },
    {
      stepNumber: 4,
      title: "ANALYSIS AND INTERPRETATION",
      description:
        "We perform qualitative and quantitative data analysis, applying statistical tools, AI/ML models (if required), and domain-specific validation to ensure accuracy and reproducibility.",
    },
    {
      stepNumber: 5,
      title: "CONTENT DEVELOPMENT AND REVIEW",
      description:
        "We draft structured manuscripts, reports, and white papers, supported by citations (APA, Oxford, MLA) and IMRAD structure. Our internal quality team performs peer review and compliance checks.",
      isDarkBg: true,
    },
    {
      stepNumber: 6,
      title: "FINAL DELIVERY AND REVISIONS",
      description:
        "The completed output is delivered in your preferred format. We incorporate reviewer comments, perform revisions, and ensure readiness for journal submission or regulatory approval.",
    },
  ];

  return (
    <section className="w-full bg-[#f4f9fc] py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-2">
          How Our Research Service works
        </h2>
        <h3 className="text-[#083c4c] text-lg font-semibold tracking-wide mb-4">
          Our Step-By-Step Process
        </h3>
        <p className="text-gray-600 text-[15px] max-w-4xl mx-auto leading-relaxed">
          At Pubrica, our academic research assistance and scientific
          publication support services follow a structured and collaborative
          approach to ensure precision, transparency, and high-quality outcomes.
        </p>
      </div>

      {/* Desktop Horizontal Connecting Axis timeline */}
      <div className="max-w-7xl mx-auto relative px-4 hidden lg:block">
        <div className="absolute top-1/2 left-0 right-0 h-3 bg-[#007ba4] transform -translate-y-1/2 z-0" />

        <div className="grid grid-cols-6 gap-4 relative z-10">
          {steps.map((step) => {
            const isEven = step.stepNumber % 2 === 0;
            return (
              <div key={step.stepNumber} className="flex flex-col items-center">
                {/* Top Row Rendering Case */}
                {!isEven ? (
                  <>
                    {/* Circle Indicator */}
                    <div className="w-10 h-10 rounded-full bg-[#007ba4] text-white flex items-center justify-center font-bold text-lg shadow mb-4 z-10">
                      {step.stepNumber}
                    </div>
                    {/* Spacer connecting down */}
                    <div className="w-0.5 h-8 bg-[#007ba4]/40 mb-2" />
                    {/* Card Element */}
                    <div
                      className={`w-full min-h-[290px] border border-gray-200 bg-white shadow-sm p-4 rounded-sm flex flex-col items-start text-left`}
                    >
                      <h4 className="text-[#083c4c] font-bold text-xs mb-3 tracking-wider">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-[12px] leading-relaxed text-justify">
                        {step.description}
                      </p>
                    </div>
                  </>
                ) : (
                  // Bottom Row Rendering Case
                  <div className="mt-[165px] flex flex-col items-center w-full">
                    {/* Card Element */}
                    <div
                      className={`w-full min-h-[290px] border border-gray-200 bg-white shadow-sm p-4 rounded-sm flex flex-col items-start text-left ${step.isDarkBg ? "bg-[#4a4a4a] text-white border-none" : ""}`}
                    >
                      <h4
                        className={`font-bold text-xs mb-3 tracking-wider ${step.isDarkBg ? "text-white" : "text-[#083c4c]"}`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-[12px] leading-relaxed text-justify ${step.isDarkBg ? "text-gray-200" : "text-gray-500"}`}
                      >
                        {step.description}
                      </p>
                    </div>
                    {/* Spacer connecting down */}
                    <div className="w-0.5 h-8 bg-[#007ba4]/40 mt-2" />
                    {/* Circle Indicator */}
                    <div className="w-10 h-10 rounded-full bg-[#007ba4] text-white flex items-center justify-center font-bold text-lg shadow mt-4 z-10">
                      {step.stepNumber}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Fallback Process Stack */}
      <div className="max-w-xl mx-auto space-y-8 lg:hidden">
        {steps.map((step) => (
          <div key={step.stepNumber} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#007ba4] text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
              {step.stepNumber}
            </div>
            <div
              className={`flex-1 border border-gray-200 bg-white p-5 shadow-sm rounded-md ${step.isDarkBg ? "bg-[#4a4a4a] text-white border-none" : ""}`}
            >
              <h4
                className={`font-bold text-sm mb-2 tracking-wide ${step.isDarkBg ? "text-white" : "text-[#083c4c]"}`}
              >
                {step.title}
              </h4>
              <p
                className={`text-[13px] leading-relaxed ${step.isDarkBg ? "text-gray-200" : "text-gray-600"}`}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
