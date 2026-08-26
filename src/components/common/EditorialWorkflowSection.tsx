


  import React from "react";
  import Image from "next/image";

  export interface WorkflowStep {
    stepNumber: string | number;
    title: string;
    description: string;
    iconSrc?: string;
    position?: "top" | "bottom";
  }

  /**
   * Accepts both strictly typed workflow steps and existing page data
   * where `position` may have been inferred as a generic string.
   *
   * This keeps the shared component backward-compatible with existing pages.
   */
  interface WorkflowStepInput {
    stepNumber: string | number;
    title: string;
    description: string;
    iconSrc?: string;
    position?: string;
  }

  interface EditorialWorkflowSectionProps {
    heading: string;
    subheading: string;
    description?: string;
    steps: WorkflowStepInput[];
  }

  export const EditorialWorkflowSection: React.FC<
    EditorialWorkflowSectionProps
  > = ({ heading, subheading, description, steps }) => {
    return (
      <section className="py-12 md:py-16 px-4 md:px-8 bg-[#EAEAEA] w-full text-center font-sans overflow-hidden">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B353D] mb-2">
          {heading}
        </h2>

        <h3 className="text-lg md:text-xl font-medium text-[#2C4951] mb-4">
          {subheading}
        </h3>

        {description && (
          <p className="max-w-4xl mx-auto text-[#4B5563] text-xs md:text-sm leading-relaxed mb-12 md:mb-16">
            {description}
          </p>
        )}

        {/* ============================================================ */}
        {/* MOBILE LAYOUT (< md screens): Vertical Alternating Timeline  */}
        {/* ============================================================ */}
        <div className="flex md:hidden flex-col items-center w-full max-w-sm mx-auto space-y-6">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex items-center w-full min-h-[160px]"
              >
                {/* Connecting Vertical Line */}
                {index !== steps.length - 1 && (
                  <div
                    className={`absolute top-8 bottom-0 w-[2px] bg-[#0081A7] z-0 ${
                      isEven ? "left-4" : "right-4"
                    }`}
                  />
                )}

                {/* Step Number Badge */}
                <div
                  className={`absolute z-10 w-9 h-9 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm shadow-sm ${
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
                  <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex flex-col items-center text-center w-full z-10">
                    {step.iconSrc && (
                      <div className="w-10 h-10 relative mb-2 flex items-center justify-center">
                        <Image
                          src={step.iconSrc}
                          alt={step.title}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    )}

                    <h4 className="font-bold text-[#0F172A] text-xs mb-2 leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-[#64748B] text-[11px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* DESKTOP LAYOUT (>= md screens): Dynamic Flow Layout          */}
        {/* ============================================================ */}
        <div
          className="hidden md:grid gap-2 lg:gap-4 items-stretch justify-center w-full max-w-7xl mx-auto relative my-8"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((step, index) => {
            const isTop = step.position === "top";

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-between group w-full relative min-h-[500px]"
              >
                {/* UPPER SECTION */}
                <div className="w-full flex flex-col items-center justify-end flex-1 pb-2">
                  {isTop ? (
                    <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-sm">
                      {step.iconSrc && (
                        <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                          <Image
                            src={step.iconSrc}
                            alt={step.title}
                            width={38}
                            height={38}
                            className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                          />
                        </div>
                      )}

                      <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                        {step.title}
                      </h4>

                      <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-end w-full">
                      <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mb-3">
                        {step.stepNumber}
                      </div>

                      <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                    </div>
                  )}
                </div>

                {/* CENTER HORIZONTAL LINE SEGMENT */}
                <div className="w-full h-[8px] relative my-0 shrink-0">
                  <div
                    className={`h-full bg-[#0081A7] w-full transition-colors duration-300 group-hover:bg-black ${
                      index === 0
                        ? "rounded-l-sm"
                        : index === steps.length - 1
                        ? "rounded-r-sm"
                        : ""
                    }`}
                  />
                </div>

                {/* LOWER SECTION */}
                <div className="w-full flex flex-col items-center justify-start flex-1 pt-2">
                  {!isTop ? (
                    <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-sm">
                      {step.iconSrc && (
                        <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                          <Image
                            src={step.iconSrc}
                            alt={step.title}
                            width={38}
                            height={38}
                            className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                          />
                        </div>
                      )}

                      <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                        {step.title}
                      </h4>

                      <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />

                      <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mt-3">
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