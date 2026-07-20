import React from "react";

interface MatrixCardProps {
  letter: string;
  title: string;
  bgColor: string;
  borderColor: string;
  badgeBg: string;
  textColor: string;
  deliverables: string[];
  requirements: string[];
  delivery: string;
  fees: string;
}

const MatrixCard: React.FC<MatrixCardProps> = ({
  letter,
  title,
  bgColor,
  borderColor,
  badgeBg,
  textColor,
  deliverables,
  requirements,
  delivery,
  fees,
}) => (
  <div
    className={`rounded flex flex-col justify-between overflow-hidden shadow-sm ${bgColor} ${borderColor} border pb-4`}
  >
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <span
          className={`w-8 h-8 rounded-full text-sm font-black flex items-center justify-center border ${badgeBg} ${textColor}`}
        >
          {letter}
        </span>
        <h3
          className={`font-extrabold text-sm tracking-tight uppercase leading-tight ${textColor}`}
        >
          {title}
        </h3>
      </div>

      <div className="space-y-4">
        <div className="space-y-2.5">
          <span className="text-[11px] font-black tracking-wider text-black flex items-center gap-1.5 uppercase">
            ➜ What do you get?
          </span>
          <ul className="space-y-1.5 text-[11px] text-gray-700 pl-4 list-disc marker:text-gray-500">
            {deliverables.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2.5">
          <span className="text-[11px] font-black tracking-wider text-black flex items-center gap-1.5 uppercase">
            ➜ What do we need from you?
          </span>
          <ul className="space-y-1.5 text-[11px] text-gray-700 pl-4 list-disc marker:text-gray-500">
            {requirements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className={`p-4 space-y-1 mt-auto border-t ${borderColor}`}>
      <div className="text-[11px] text-gray-800 font-bold flex items-center gap-1.5">
        ➜ Delivery: <span className="font-normal">{delivery}</span>
      </div>
      <div className="text-[11px] text-gray-800 font-bold flex items-center gap-1.5">
        ➜ Fees: <span className="font-normal">{fees}</span>
      </div>
    </div>
  </div>
);

export const ServiceMatrix: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Intro Heading Section */}
      <section className="pt-16 pb-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-left space-y-3">
        <h2 className="text-[#0c313a] text-xl md:text-2xl font-black tracking-tight max-w-5xl leading-tight">
          Struggling with Data Analytics and Machine Learning for Your Research
          or Business? Let Us Help You
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-[14px] leading-relaxed max-w-6xl text-justify font-normal">
          Overcome data challenges with our expert Data Analytics and Machine
          Learning services, tailored to transform raw datasets into clear,
          actionable, and publication-ready insights.
        </p>
      </section>

      {/* Grid Configuration Layout */}
      <section className="pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch text-left">
          <MatrixCard
            letter="M"
            title="Machine Learning Model Development"
            bgColor="bg-[#e0eceb]"
            borderColor="border-[#cbdcdb]"
            badgeBg="bg-white/80"
            textColor="text-[#0c313a]"
            delivery="15 – 30 days"
            fees="Custom Quote"
            deliverables={[
              "Cleaned and structured datasets ready for modeling.",
              "Custom-built ML models (classification, prediction, clustering).",
              "A Machine Learning Analysis Report with results and insights.",
              "Publication-ready graphs, charts, and figures.",
              "Methods/results sections written based on observations.",
            ]}
            requirements={[
              "Objective of the research/business study.",
              "Short description of the dataset and data collection method.",
              "Raw data.",
              "Specific requirements, references, or use cases (if any).",
            ]}
          />

          <MatrixCard
            letter="M"
            title="Machine Learning Insights & Recommendations"
            bgColor="bg-[#efe5f4]"
            borderColor="border-[#e2d2eb]"
            badgeBg="bg-white/80"
            textColor="text-purple-950"
            delivery="8 – 15 days"
            fees="Starts from $890"
            deliverables={[
              "Key findings and actionable insights from AI/ML analysis.",
              "Predictive reports with charts, graphs, and tables.",
              "Summary of ML model performance and recommendations.",
            ]}
            requirements={[
              "Research/business objective and hypothesis.",
              "Clean and labelled data.",
              "Sample distribution or metadata (if available).",
            ]}
          />

          <MatrixCard
            letter="A"
            title="Advanced ML Methods & Techniques"
            bgColor="bg-[#e9dcc0]"
            borderColor="border-[#dbcaaa]"
            badgeBg="bg-white/80"
            textColor="text-amber-950"
            delivery="7–14 days"
            fees="Starts from $720"
            deliverables={[
              "In-depth ML findings & results.",
              "Modified/custom visualizations and dashboards.",
              "Detailed ML output files (Python/R/TensorFlow logs).",
              "Methods/results sections tailored for research or publication.",
            ]}
            requirements={[
              "Research/business objectives.",
              "The dataset or pre-processed data files.",
              "Preferred ML technique/tool (e.g., regression, NLP, deep learning).",
              "Any references or benchmarks.",
            ]}
          />
        </div>

        {/* --- Added The Full Width Long Red Button --- */}
        <div className="w-full pt-2">
          <button className="w-full bg-[#c00] hover:bg-red-800 text-white font-bold text-xs sm:text-sm tracking-wide py-3 px-6 rounded-md shadow-md transition-colors uppercase duration-200">
            Get a free quote
          </button>
        </div>
      </section>
    </div>
  );
};
