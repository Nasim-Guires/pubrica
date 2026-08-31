import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";

interface JourneyPhase {
  title: string;
  description: string;
  iconSrc: string;
}

export const ResearchJourneyPhases: React.FC = () => {
  const phases: JourneyPhase[] = [
    {
      title: "Define the problem",
      description: "Select the topic for your research.",
      iconSrc: "/images/research-services/Define-the-problem.png",
    },
    {
      title: "Review literature",
      description: "Acquaint yourself with existing literature.",
      iconSrc: "/images/research-services/Review-literature.png",
    },
    {
      title: "Research design",
      description: "Select one or more research methods.",
      iconSrc: "/images/research-services/Research-design.png",
    },
    {
      title: "Hypothesis",
      description: "State what you intend to test and the variables.",
      iconSrc: "/images/research-services/Hypothesis.png",
    },
    {
      title: "Interpret results",
      description: "Implications of the data analysis.",
      iconSrc: "/images/research-services/Interpret-results.png",
    },
    {
      title: "Report findings",
      description: "State the significance of your findings.",
      iconSrc: "/images/research-services/Report-findings.png",
    },
    {
      title: "Further research",
      description: "Follow up with more research after review.",
      iconSrc: "/images/research-services/Further-research.png",
    },
  ];

  return (
    <section className="w-full bg-[#f4f9fc] py-7 px-6 md:px-12 lg:px-24 font-sans">
      {/* 1. Existing Grid Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-3">
          Phases of Research Journey
        </h2>
        <p className="text-gray-600 text-[15px] max-w-5xl leading-relaxed mb-10">
          At Pubrica, we support researchers through every critical phase of the
          research lifecycle, ensuring scientific rigor, compliance, and
          impactful outcomes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/80 rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[200px] shadow-sm hover:shadow-md transition-shadow duration-200 "
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={phase.iconSrc}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <h4 className="text-[#083c4c] font-bold text-base mb-2">
                {phase.title}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[200px]">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. New Integrated CTA Section */}



      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/research-services/image-3.webp",
          alt: "Research service sample work",
          width: 600,
          height: 400,
        }}
        sections={[
          {
            heading: "Research Service Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              {
                text: "Discover our research service sample work, expertly developed to support robust methodologies, institutional compliance, and impactful scientific outcomes.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/uploads/research-services/03-03-2026-RESEARCH-SERVICES-1.pdf",
            },
          },
        ]}
        footerDisclaimerSegments={[]}
      />
    </section>
  );
};
