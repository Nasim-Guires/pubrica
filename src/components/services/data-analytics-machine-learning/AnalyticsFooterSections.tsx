"use client";

import Image from "next/image";
import React, { useState } from "react";
import CommonFAQ from "@/components/common/FAQ";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

// --- Testimonials Data Structure ---
interface Testimonial {
  journalLogo: string;
  quote: string;
  name: string;
  title: string;
  flagImage: string;
}

const testimonialsData: Testimonial[] = [
  {
    journalLogo: "/images/data-analytics-machine-learning/plos-one-.png",
    quote:
      "From data preparation to model interpretation, Pubrica's AI/ML team guided every step with professionalism. Their advanced analytics directly contributed to my publication in PLOS ONE.",
    name: "DR. MICHAEL TURNER",
    title: "Clinical Investigator, USA",
    flagImage: "/images/data-analytics-machine-learning/usa-1-1.png",
  },
  {
    journalLogo:
      "/images/data-analytics-machine-learning/journal-of-applied-statistics.png",
    quote:
      "The Pubrica team applied state-of-the-art machine learning techniques with precision, delivering publication-ready visualizations and reports. Their support was instrumental in my article's acceptance by the Journal of Applied Statistics.",
    name: "PROF. LAURA CHEN",
    title: "Data Scientist, Singapore",
    flagImage: "/images/data-analytics-machine-learning/singapore-1.png",
  },
  {
    journalLogo:
      "/images/data-analytics-machine-learning/nature-scientific-reports-journal.png",
    quote:
      "Pubrica’s ML experts built predictive models that translated complex data into clear insights. Their transparent methods and detailed reporting helped my manuscript get accepted in Nature Scientific Reports.",
    name: "PROF. LI WEI",
    title: "Biostatistician, China",
    flagImage: "/images/data-analytics-machine-learning/china.png",
  },
];

// --- FAQ Data Structure mapped to CommonFAQ Props ---
const predictiveAnalyticsFAQ = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "1. What types of machine learning services do you offer?",
      answer:
        "We provide a wide range of AI/ML solutions, including: Predictive modeling (forecasting, risk analysis, outcome prediction), Classification and clustering (SVM, decision trees, random forests, k-means), Deep learning (CNNs, RNNs, transformers), Natural Language Processing (text mining, sentiment analysis, entity recognition), Recommendation systems, Time-series forecasting, and Data visualization and publication-ready reporting.",
    },
    {
      question: "2. Who will work on my ML/AI project?",
      answer:
        "Our team consists of post-doctoral data scientists, ML engineers, and senior biostatisticians with deep experience across healthcare, technical research, and corporate analytics.",
    },
    {
      question: "3. Which tools and platforms do you use?",
      answer:
        "We primarily utilize Python, R, TensorFlow, PyTorch, Scikit-learn, SPSS, and cloud architectures like AWS and Azure ML depending on project goals.",
    },
    {
      question: "4. Can you handle large and unstructured datasets?",
      answer:
        "Yes, we handle large structured and unstructured clinical, textual, or behavioral datasets using advanced pre-processing and secure storage infrastructure.",
    },
    {
      question:
        "5. Do you customize ML models for specific research or business needs?",
      answer:
        "Absolutely. Every project receives a tailored architecture built entirely around your specific objectives, reference variables, and hypotheses.",
    },
    {
      question: "6. Can I collaborate with your ML experts during the project?",
      answer:
        "Yes, we encourage iterative review milestones through communication pipelines to ensure alignment on insights and methodology.",
    },
  ],
};

export const AnalyticsFooterSections: React.FC = () => {
  const [activePage, setActivePage] = useState(0);

  // Group items into pairs of 2 per slide/page
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  const visibleTestimonials = testimonialsData.slice(
    activePage * itemsPerPage,
    activePage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="w-full bg-[#fcfdfd] font-sans antialiased text-left selection:bg-emerald-100">
      {/* ==========================================================
          SECTION 1: TESTIMONIALS
          ========================================================== */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-[#082a32] text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
          Testimonials
        </h2>
        <p className="text-gray-700 text-xs sm:text-sm max-w-6xl leading-relaxed mb-8 font-normal">
          Learn how Pubrica's machine learning and AI-driven analytics have helped
          researchers and businesses generate accurate, publication-ready
          insights that enhance credibility, support evidence-based decisions, and
          boost visibility. Here's what our clients say:
        </p>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[240px]">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Gray Inner Box */}
              <div className="bg-[#cdcdcd] rounded-lg p-4 flex gap-4 items-center min-h-[150px]">
                <div className="w-[120px] h-[100px] relative flex-shrink-0 bg-white rounded overflow-hidden shadow-sm">
                  <Image
                    src={t.journalLogo}
                    alt="Journal Cover"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] sm:text-xs text-black font-semibold leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-5 flex items-end justify-between px-1">
                <div>
                  <h4 className="text-black font-extrabold text-xs sm:text-sm tracking-wide">
                    — {t.name}
                  </h4>
                  <p className="text-gray-600 text-[11px] sm:text-xs italic mt-1 font-medium">
                    {t.title}
                  </p>
                </div>

                {/* Circular Country Flag Container */}
                <div className="w-7 h-7 relative select-none rounded-full overflow-hidden shadow-sm flex-shrink-0">
                  <Image
                    src={t.flagImage}
                    alt={t.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Square Carousel Indicators */}
        <div className="flex justify-center items-center gap-1.5 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePage(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 border border-[#082a32] transition-colors ${
                activePage === index ? "bg-[#082a32]" : "bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ==========================================================
          SECTION 2: FREQUENTLY ASKED QUESTIONS
          ========================================================== */}
      <CommonFAQ
        title={predictiveAnalyticsFAQ.title}
        faqs={predictiveAnalyticsFAQ.faqs}
      />

      <InsightsSection />
    </div>
  );
};