import React from "react";

export const ToolsUsed: React.FC = () => {
  const toolsList = [
    {
      category: "Programming & ML Frameworks",
      items: "Python, R, TensorFlow, PyTorch, Scikit-learn, Keras.",
    },
    {
      category: "Data Management & Processing",
      items: "SQL, Pandas, NumPy, Hadoop, Spark.",
    },
    {
      category: "Visualization & Reporting",
      items: "Tableau, Power BI, Matplotlib, Seaborn, Plotly.",
    },
    {
      category: "Statistical & Research Tools",
      items:
        "SAS, SPSS, STATA for advanced healthcare and life science analytics.",
    },
    {
      category: "Cloud & Deployment",
      items: "AWS, Azure ML, Google Cloud AI for scalable ML solutions.",
    },
    {
      category: "NLP & Text Analytics",
      items: "NLTK, SpaCy, Transformers for research and business text mining.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-100">
      <h2 className="text-[#0c313a] text-xl md:text-2xl font-black mb-6 tracking-tight text-left">
        Tools We Use
      </h2>
      <ul className="space-y-4 max-w-6xl text-left">
        {toolsList.map((tool, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-xs sm:text-sm md:text-[14px]"
          >
            <span className="text-[#c00] font-serif text-lg leading-none mt-0.5 select-none">
              •
            </span>
            <p className="text-gray-700 font-normal leading-relaxed">
              <strong className="text-black font-black">{tool.category}</strong>{" "}
              – {tool.items}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
