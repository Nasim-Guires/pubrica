"use client";

import React from "react";
import {
  FiSend,
  FiCode,
  FiMessageSquare,
  FiVideo,
  FiMessageSquare as FiSubtitles,
  FiCheckCircle,
} from "react-icons/fi";

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: "top" | "bottom";
}

const stepsData: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "SEND MATERIALS",
    description:
      "You place the order for your video and send your final manuscript and materials, such as graphs, charts, tables, and figures.",
    icon: <FiSend className="w-8 h-8" />,
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "SCRIPT & CONTENT DEVELOPMENT",
    description:
      "The Pubrica team of knowledgeable subject matter experts reviews the submitted manuscript and prepares the video script for every section of the manuscript.",
    icon: <FiCode className="w-8 h-8" />,
    position: "top",
  },
  {
    stepNumber: 3,
    title: "AUTHOR FEEDBACK",
    description:
      "You review the initial script and provide suggestions or ideas, if any.",
    icon: <FiMessageSquare className="w-8 h-8" />,
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "VIDEO DEVELOPMENT",
    description:
      "We add suitable background music and a voiceover that contains a brief explanation of the video content.",
    icon: <FiVideo className="w-8 h-8" />,
    position: "top",
  },
  {
    stepNumber: 5,
    title: "ADD CAPTIONS AND SUBTITLES",
    description:
      "Our experienced transcribers add English subtitles for wider viewership.",
    icon: <FiSubtitles className="w-8 h-8" />,
    position: "bottom",
  },
  {
    stepNumber: 6,
    title: "AUTHOR ACCEPTS THE VIDEO AND ABSTRACT",
    description: "You get all the deliverables in your inbox!",
    icon: <FiCheckCircle className="w-8 h-8" />,
    position: "top",
  },
];

export default function VideoAbstractProcess() {
  return (
    <section className="w-full bg-[#f2f4f4] py-12 md:py-16 px-4 md:px-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-2">
            How the Video Abstract and Research Explainer Service Works
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-4">
            Our step-by-Step Process
          </h3>
          <p className="text-xs md:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
            With Pubrica&apos;s academic video abstract service, our scientific
            editors and creative media team work together to create a short,
            powerful video summary of your published research that is visually
            engaging, adheres to journal guidelines, and improves visibility on
            institutional repositories or public websites.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative pt-6 pb-6">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-[#008099] -translate-y-1/2 z-0" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {stepsData.map((step) => (
              <div
                key={step.stepNumber}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step Circle - Top Positioned */}
                {step.position === "top" && (
                  <div className="mb-4 flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-[#008099] text-white font-bold text-sm flex items-center justify-center shadow-md">
                      {step.stepNumber}
                    </div>
                    <div className="w-0.5 h-6 bg-[#008099] hidden lg:block" />
                  </div>
                )}

                {/* Card Container with Interactive Black Hover Effect */}
                <div className="w-full p-4 rounded-sm border border-slate-200 bg-white text-slate-800 shadow-sm flex flex-col min-h-[260px] text-left transition-all duration-300 hover:bg-[#4a4a4a] hover:text-white hover:border-transparent hover:-translate-y-1 group cursor-pointer">
                  <div className="mb-3 text-slate-600 font-bold group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wide mb-2 text-slate-800 group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600 group-hover:text-slate-200 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Step Circle - Bottom Positioned */}
                {step.position === "bottom" && (
                  <div className="mt-4 flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-[#008099] hidden lg:block" />
                    <div className="w-9 h-9 rounded-full bg-[#008099] text-white font-bold text-sm flex items-center justify-center shadow-md">
                      {step.stepNumber}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
