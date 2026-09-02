"use client";

import React from "react";
import Image from "next/image";

const techStackData = [
  {
    id: 1,
    title: "Programming Languages",
    description:
      "Python, R, Julia, Scala, Java – for machine learning, statistical modeling, and scalable applications.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    iconSrc: "/images/ai-ml-support/Programming-Languages.png",
  },
  {
    id: 2,
    title: "Machine Learning & Deep Learning Frameworks",
    description:
      "TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost, LightGBM – for supervised, unsupervised, and deep learning tasks.",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
    iconSrc: "/images/ai-ml-support/Machine-Learning-Deep-Learning-Frameworks.png",
  },
  {
    id: 3,
    title: "Natural Language Processing (NLP)",
    description:
      "Optimize your document through our comprehensive Systematic Review Services.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    iconSrc: "/images/ai-ml-support/Natural-Language-Processing-NLPLanguages.png",
  },
  {
    id: 4,
    title: "Data Management & Databases",
    description:
      "SQL, MongoDB, Neo4j, PostgreSQL – for structured, unstructured, and graph-based biomedical datasets. Apache Hadoop, Spark – for big data processing.",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
    iconSrc: "/images/ai-ml-support/Data-Management-Databases.png",
  },
  {
    id: 5,
    title: "Cloud & Deployment",
    description:
      "AWS, Google Cloud, Microsoft Azure – for scalable model training, deployment, and integration with enterprise workflows. Docker, Kubernetes – for containerization and model orchestration.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    iconSrc: "/images/ai-ml-support/Cloud-Deployment.png",
  },
  {
    id: 6,
    title: "Visualization & BI Tools",
    description:
      "Tableau, Power BI, Matplotlib, Seaborn, Plotly – for interactive dashboards and insights visualization.",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
    iconSrc: "/images/ai-ml-support/Visualization-BI-Tools.png",
  },
  {
    id: 7,
    title: "MLOps & Automation",
    description:
      "MLflow, Kubeflow, Airflow – for experiment tracking, model lifecycle management, and automation pipelines.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    iconSrc: "/images/ai-ml-support/MLOps-Automation.png",
  },
];

export default function AiMlTechStackSection() {
  return (
    <section className="w-full bg-[#f8f9f9] py-7 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
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
              className="bg-white rounded-lg p-6 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md border border-transparent hover:border-slate-200 cursor-pointer"
            >
              <div>
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-full ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-4`}
                >
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
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