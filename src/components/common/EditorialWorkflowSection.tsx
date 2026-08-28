import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface WorkflowStep {
  stepNumber: string | number;
  title: string;
  description: React.ReactNode;
  iconSrc?: string;
  position?: "top" | "bottom";
}

interface WorkflowStepInput {
  stepNumber: string | number;
  title: string;
  description: React.ReactNode;
  iconSrc?: string;
  position?: string;
}

interface EditorialWorkflowSectionProps {
  heading: string;
  subheading: string;
  description?: React.ReactNode;
  steps: WorkflowStepInput[];
}

export const EditorialWorkflowSection: React.FC<
  EditorialWorkflowSectionProps
> = ({ heading, subheading, description, steps }) => {
  return (
    <section className="py-6 md:py-7 px-4 md:px-8 bg-gray-50 w-full text-center font-sans overflow-hidden">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B353D] mb-2 leading-tight">
        {heading}
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold text-[#2C4951] mb-3">
        {subheading}
      </h3>

      {description && (
        <div className="max-w-4xl mx-auto text-[#4B5563] text-base leading-relaxed mb-6 md:mb-8">
          {description}
        </div>
      )}

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden flex-col items-center w-full max-w-sm mx-auto space-y-4">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex items-center w-full min-h-[140px]"
            >
              {index !== steps.length - 1 && (
                <div
                  className={`absolute top-6 bottom-0 w-[2px] bg-[#0081A7] z-0 ${
                    isEven ? "left-4" : "right-4"
                  }`}
                />
              )}

              <div
                className={`absolute z-10 w-8 h-8 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm shadow-sm ${
                  isEven ? "left-0" : "right-0"
                }`}
              >
                {step.stepNumber}
              </div>

              <div
                className={`w-full flex ${
                  isEven ? "pl-9 pr-2" : "pr-9 pl-2"
                }`}
              >
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex flex-col items-center text-center w-full z-10">
                  {step.iconSrc && (
                    <div className="w-9 h-9 relative mb-1 flex items-center justify-center">
                      <Image
                        src={step.iconSrc}
                        alt={typeof step.title === "string" ? step.title : ""}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  )}

                  <h4 className="font-bold text-[#0F172A] text-lg mb-1 leading-snug">
                    {step.title}
                  </h4>

                  <div className="text-[#64748B] text-base leading-relaxed [&_a]:text-blue-600 [&_a]:no-underline group-hover:[&_a]:text-blue-400">
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DESKTOP LAYOUT */}
      <div
        className="hidden md:grid gap-2 lg:gap-3 items-stretch justify-center w-full max-w-7xl mx-auto relative my-4"
        style={{
          gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
        }}
      >
        {steps.map((step, index) => {
          const isTop = step.position === "top";

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between group w-full relative min-h-[440px]"
            >
              {/* UPPER SECTION */}
              <div className="w-full flex flex-col items-center justify-end flex-1 pb-1">
                {isTop ? (
                  <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-sm">
                    {step.iconSrc && (
                      <div className="w-9 h-9 lg:w-10 lg:h-10 relative mb-2 flex items-center justify-center shrink-0">
                        <Image
                          src={step.iconSrc}
                          alt={typeof step.title === "string" ? step.title : ""}
                          width={36}
                          height={36}
                          className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>
                    )}

                    <h4 className="font-bold text-[#0F172A] text-lg lg:text-xl mb-1.5 leading-snug transition-colors duration-300 group-hover:text-white">
                      {step.title}
                    </h4>

                    <div className="text-[#64748B] text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-300 [&_a]:text-blue-600 [&_a]:no-underline group-hover:[&_a]:text-blue-400">
                      {step.description}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-end w-full">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mb-2">
                      {step.stepNumber}
                    </div>

                    <div className="w-[2px] h-6 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                  </div>
                )}
              </div>

              {/* CENTER HORIZONTAL LINE SEGMENT */}
              <div className="w-full h-[6px] relative my-0 shrink-0">
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
              <div className="w-full flex flex-col items-center justify-start flex-1 pt-1">
                {!isTop ? (
                  <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-sm p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-sm">
                    {step.iconSrc && (
                      <div className="w-9 h-9 lg:w-10 lg:h-10 relative mb-2 flex items-center justify-center shrink-0">
                        <Image
                          src={step.iconSrc}
                          alt={typeof step.title === "string" ? step.title : ""}
                          width={36}
                          height={36}
                          className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>
                    )}

                    <h4 className="font-bold text-[#0F172A] text-lg lg:text-xl mb-1.5 leading-snug transition-colors duration-300 group-hover:text-white">
                      {step.title}
                    </h4>

                    <div className="text-[#64748B] text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-300 [&_a]:text-blue-600 [&_a]:no-underline group-hover:[&_a]:text-blue-400">
                      {step.description}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="w-[2px] h-6 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />

                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mt-2">
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