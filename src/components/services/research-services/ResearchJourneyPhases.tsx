import React from "react";

interface JourneyPhase {
  title: string;
  description: string;
}

export const ResearchJourneyPhases: React.FC = () => {
  const phases: JourneyPhase[] = [
    {
      title: "Define the problem",
      description: "Select the topic for your research.",
    },
    {
      title: "Review literature",
      description: "Acquaint yourself with existing literature.",
    },
    {
      title: "Research design",
      description: "Select one or more research methods.",
    },
    {
      title: "Hypothesis",
      description: "State what you intend to test and the variables.",
    },
    {
      title: "Interpret results",
      description: "Implications of the data analysis.",
    },
    {
      title: "Report findings",
      description: "State the significance of your findings.",
    },
    {
      title: "Further research",
      description: "Follow up with more research after review.",
    },
  ];

  return (
    <section className="w-full bg-[#f4f9fc] py-16 px-6 md:px-12 lg:px-24 font-sans">
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
              className="bg-white border border-gray-200/80 rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[200px] shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <div className="w-16 h-16 text-[#083c4c] flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 stroke-current fill-none stroke-[1.5]"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
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
      <div className="max-w-7xl mx-auto bg-[#f0fbf4] p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 md:gap-16 border border-green-100">
        {/* Placeholder for Sample Work Image */}
        <div className="w-full md:w-1/3 h-48 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-inner text-gray-400 text-sm italic">
          [Image Placeholder]
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full">
          <h3 className="text-[#083c4c] text-xl font-bold mb-4">
            Research Service Sample Work
          </h3>
          <button className="bg-black text-white px-6 py-2.5 rounded font-semibold text-sm hover:bg-gray-800 transition-colors mb-8">
            Discover More
          </button>

          <h3 className="text-[#083c4c] text-xl font-bold mb-2">
            Download the full Report Now
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-lg">
            Discover our research service sample work, expertly developed to
            support robust methodologies, institutional compliance, and
            impactful scientific outcomes.
          </p>
          <button className="bg-black text-white px-6 py-2.5 rounded font-semibold text-sm hover:bg-gray-800 transition-colors">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};
