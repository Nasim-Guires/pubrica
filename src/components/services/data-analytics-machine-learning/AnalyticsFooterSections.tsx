"use client";

import Image from "next/image";
import React, { useState } from "react";
import CommonFAQ from "@/components/common/FAQ";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import CommonTestimonial from "@/components/common/CommonTestimonials";

// --- Testimonials Data Structure ---
interface Testimonial {
  journalLogo: string;
  quote: string;
  name: string;
  title: string;
  flagImage: string;
}

const testimonials = [
  {
    image:
      "/images/data-analytics-machine-learning/plos-one-.png",
    quote:
      "From data preparation to model interpretation, Pubrica's AI/ML team guided every step with professionalism. Their advanced analytics directly contributed to my publication in PLOS ONE.",
    name: "DR. MICHAEL TURNER",
    designation: "Clinical Investigator",
    organization: "USA",
    flag:
      "/images/data-analytics-machine-learning/usa-1-1.png",
  },
  {
    image:
      "/images/data-analytics-machine-learning/journal-of-applied-statistics.png",
    quote:
      "The Pubrica team applied state-of-the-art machine learning techniques with precision, delivering publication-ready visualizations and reports. Their support was instrumental in my article's acceptance by the Journal of Applied Statistics.",
    name: "PROF. LAURA CHEN",
    designation: "Data Scientist",
    organization: "Singapore",
    flag:
      "/images/data-analytics-machine-learning/singapore-1.png",
  },
  {
    image:
      "/images/data-analytics-machine-learning/nature-scientific-reports-journal.png",
    quote:
      "Pubrica’s ML experts built predictive models that translated complex data into clear insights. Their transparent methods and detailed reporting helped my manuscript get accepted in Nature Scientific Reports.",
    name: "PROF. LI WEI",
    designation: "Biostatistician",
    organization: "China",
    flag:
      "/images/data-analytics-machine-learning/china.png",
  },
];
// --- FAQ Data Structure mapped to CommonFAQ Props ---
const faqs = [
  {
    question: "1. What types of machine learning services do you offer?",
    answer: "We provide a wide range of AI/ML solutions, including:",
    points: [
      "Predictive modeling (forecasting, risk analysis, outcome prediction)",
      "Classification and clustering (SVM, decision trees, random forests, k-means)",
      "Deep learning (CNNs, RNNs, transformers)",
      "Natural Language Processing (text mining, sentiment analysis, entity recognition)",
      "Recommendation systems",
      "Time-series forecasting",
      "Data visualization and publication-ready reporting",
    ],
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
];

export const AnalyticsFooterSections: React.FC = () => {
  const [activePage, setActivePage] = useState(0);

  // Group items into pairs of 2 per slide/page
  // const itemsPerPage = 2;
  // const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  // const visibleTestimonials = testimonialsData.slice(
  //   activePage * itemsPerPage,
  //   activePage * itemsPerPage + itemsPerPage
  // );

  return (
    <div className="w-full bg-[#fcfdfd] font-sans antialiased text-left selection:bg-emerald-100">
      {/* ==========================================================
          SECTION 1: TESTIMONIALS
          ========================================================== */}
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica's machine learning and AI-driven analytics have helped researchers and businesses generate accurate, publication-ready insights that enhance credibility, support evidence-based decisions, and boost visibility. Here's what our clients say:"
        testimonials={testimonials}
      />

      {/* ==========================================================
          SECTION 2: FREQUENTLY ASKED QUESTIONS
          ========================================================== */}
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      <InsightsSection />
    </div>
  );
};