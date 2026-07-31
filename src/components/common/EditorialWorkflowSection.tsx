import React from "react";
import Image from "next/image";

export interface WorkflowStep {
    stepNumber: string | number;
    title: string;
    description: string;
    iconSrc: string;
    position: "top" | "bottom"; // Determines if the numbered circle and blue bar go on top or bottom
}

interface EditorialWorkflowSectionProps {
    heading: string;
    subheading: string;
    description: string;
    steps: WorkflowStep[];
}

export const EditorialWorkflowSection: React.FC<EditorialWorkflowSectionProps> = ({
    heading,
    subheading,
    description,
    steps,
}) => {
    return (
        <section className="py-16 px-4 bg-gray-50 max-w-7xl mx-auto text-center font-sans">
            {/* Header Section */}
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{heading}</h2>
            <h3 className="text-xl font-semibold text-teal-700 mb-4">{subheading}</h3>
            <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base mb-16">
                {description}
            </p>

            {/* Workflow Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                {steps.map((step, index) => {
                    const isTop = step.position === "top";

                    return (
                        <div key={index} className="flex flex-col items-center relative h-full group">
                            {/* TOP element (if position is top) */}
                            {isTop ? (
                                <div className="flex flex-col items-center mb-4 w-full">
                                    <div className="w-10 h-10 rounded-full bg-teal-800 text-white font-bold flex items-center justify-center text-lg shadow-md z-10 transition-colors duration-300 group-hover:bg-black">
                                        {step.stepNumber}
                                    </div>
                                    <div className="w-full h-1 bg-teal-700 -mt-5 transition-colors duration-300 group-hover:bg-black"></div>
                                </div>
                            ) : (
                                <div className="h-14"></div> // Spacer to keep card alignment balanced
                            )}

                            {/* Card Container */}
                            <div className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center w-full flex-grow transition-all duration-300 group-hover:bg-black group-hover:border-black group-hover:text-white">
                                <div className="w-12 h-12 relative mb-4 flex items-center justify-center">
                                    <Image
                                        src={step.iconSrc}
                                        alt={step.title}
                                        width={40}
                                        height={40}
                                        className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                    />
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm md:text-base mb-3 leading-snug transition-colors duration-300 group-hover:text-white">
                                    {step.title}
                                </h4>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                                    {step.description}
                                </p>
                            </div>

                            {/* BOTTOM element (if position is bottom) */}
                            {!isTop ? (
                                <div className="flex flex-col items-center mt-4 w-full">
                                    <div className="w-full h-1 bg-teal-700 -mb-5 transition-colors duration-300 group-hover:bg-black"></div>
                                    <div className="w-10 h-10 rounded-full bg-teal-800 text-white font-bold flex items-center justify-center text-lg shadow-md z-10 transition-colors duration-300 group-hover:bg-black">
                                        {step.stepNumber}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-14"></div> // Spacer to keep card alignment balanced
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};