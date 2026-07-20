"use client";

import React from "react";

const techStackData = [
  {
    id: 1,
    title: "Programming Languages",
    description:
      "Python, R, Julia, Scala, Java – for machine learning, statistical modeling, and scalable applications.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    active: false,
  },
  {
    id: 2,
    title: "Machine Learning & Deep Learning Frameworks",
    description:
      "TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost, LightGBM – for supervised, unsupervised, and deep learning tasks.",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    active: true, // Dark border outline as seen in screenshot
  },
  {
    id: 3,
    title: "Natural Language Processing (NLP)",
    description:
      "Optimize your document through our comprehensive Systematic Review Services.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    active: false,
  },
  {
    id: 4,
    title: "Data Management & Databases",
    description:
      "SQL, MongoDB, Neo4j, PostgreSQL – for structured, unstructured, and graph-based biomedical datasets. Apache Hadoop, Spark – for big data processing.",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    active: false,
  },
  {
    id: 5,
    title: "Cloud & Deployment",
    description:
      "AWS, Google Cloud, Microsoft Azure – for scalable model training, deployment, and integration with enterprise workflows. Docker, Kubernetes – for containerization and model orchestration.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 15a4 4 0 004 4h9a5 5 0 00-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    active: false,
  },
  {
    id: 6,
    title: "Visualization & BI Tools",
    description:
      "Tableau, Power BI, Matplotlib, Seaborn, Plotly – for interactive dashboards and insights visualization.",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    active: false,
  },
  {
    id: 7,
    title: "MLOps & Automation",
    description:
      "MLflow, Kubeflow, Airflow – for experiment tracking, model lifecycle management, and automation pipelines.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      </svg>
    ),
    active: false,
  },
];

export default function AiMlTechStackSection() {
  return (
    <section className="w-full bg-[#f8f9f9] py-16 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-4">
            Our AI & ML Tech Stack
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            At Pubrica, we leverage a cutting-edge AI and Machine Learning
            technology stack to deliver scalable, reliable, and high-performance
            solutions for research, healthcare, and life sciences. Our stack
            integrates state-of-the-art tools, frameworks, and cloud platforms
            that accelerate data-driven insights and ensure reproducibility.
          </p>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackData.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-lg p-6 shadow-sm flex flex-col justify-between transition-all duration-200 ${
                item.active
                  ? "border-2 border-slate-900 shadow-md"
                  : "border border-slate-200 hover:shadow-md"
              }`}
            >
              <div>
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-full ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-4`}
                >
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
