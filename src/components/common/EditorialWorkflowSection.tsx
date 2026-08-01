import React from "react";
import Image from "next/image";

export interface WorkflowStep {
  stepNumber: string | number;
  title: string;
  description: string;
  iconSrc: string;
  position: string; // <-- Changed from "top" | "bottom" to string
}

interface EditorialWorkflowSectionProps {
  heading: string;
  subheading: string;
  description: string;
  steps: WorkflowStep[];
}

export const EditorialWorkflowSection: React.FC<
  EditorialWorkflowSectionProps
> = ({ heading, subheading, description, steps }) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 w-full text-center font-sans overflow-hidden">
      {/* Header */}
      <h2 className="text-3xl font-bold text-slate-900 mb-2">{heading}</h2>

      <h3 className="text-xl font-semibold text-teal-700 mb-4">
        {subheading}
      </h3>

      <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base mb-16">
        {description}
      </p>

      {/* Workflow Steps Container: Full width, single row flex layout */}
      <div className="w-full flex flex-row gap-3 lg:gap-4 items-stretch">
        {steps.map((step, index) => {
          const isTop = step.position === "top";

          return (
            <div
              key={index}
              className="flex flex-col items-center relative group flex-1 min-w-0"
            >
              {/* TOP */}
              {isTop ? (
                <div className="flex flex-col items-center mb-4 w-full">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-teal-800 text-white font-bold flex items-center justify-center text-sm lg:text-lg shadow-md z-10 transition-colors duration-300 group-hover:bg-black">
                    {step.stepNumber}
                  </div>

                  <div className="w-full h-1 bg-teal-700 -mt-4 lg:-mt-5 transition-colors duration-300 group-hover:bg-black"></div>
                </div>
              ) : (
                <div className="h-10 lg:h-14"></div>
              )}

              {/* Card */}
              <div className="bg-white border border-gray-200 shadow-sm p-4 lg:p-6 flex flex-col items-center text-center w-full flex-grow transition-all duration-300 group-hover:bg-black group-hover:border-black">
                <div className="w-10 h-10 lg:w-12 lg:h-12 relative mb-3 lg:mb-4 flex items-center justify-center">
                  <Image
                    src={step.iconSrc}
                    alt={step.title}
                    width={36}
                    height={36}
                    className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <h4 className="font-bold text-slate-900 text-xs md:text-sm lg:text-base mb-2 lg:mb-3 leading-snug transition-colors duration-300 group-hover:text-white">
                  {step.title}
                </h4>

                <p className="text-gray-600 text-[11px] md:text-xs lg:text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                  {step.description}
                </p>
              </div>

              {/* BOTTOM */}
              {!isTop ? (
                <div className="flex flex-col items-center mt-4 w-full">
                  <div className="w-full h-1 bg-teal-700 -mb-4 lg:-mb-5 transition-colors duration-300 group-hover:bg-black"></div>

                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-teal-800 text-white font-bold flex items-center justify-center text-sm lg:text-lg shadow-md z-10 transition-colors duration-300 group-hover:bg-black">
                    {step.stepNumber}
                  </div>
                </div>
              ) : (
                <div className="h-10 lg:h-14"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};