"use client";
import React, { useState } from "react";

// --- Testimonials Data Structure ---
const testimonialsData = [
  {
    journalLogo: "PLOS | ONE",
    journalLogoBg: "bg-neutral-800 text-white",
    quote:
      "From data preparation to model interpretation, Pubrica's AI/ML team guided every step with professionalism. Their advanced analytics directly contributed to my publication in PLOS ONE.",
    name: "DR. MICHAEL TURNER",
    title: "Clinical Investigator, USA",
    flagEmoji: "🇺🇸",
  },
  {
    journalLogo: "JOURNAL OF APPLIED STATISTICS",
    journalLogoBg: "bg-sky-700 text-white",
    quote:
      "The Pubrica team applied state-of-the-art machine learning techniques with precision, delivering publication-ready visualizations and reports. Their support was instrumental in my article's acceptance by the Journal of Applied Statistics.",
    name: "PROF. LAURA CHEN",
    title: "Data Scientist, Singapore",
    flagEmoji: "🇸🇬",
  },
];

// --- FAQ Accordion Data Structure ---
const faqData = [
  {
    id: 1,
    question: "1. What types of machine learning services do you offer?",
    answer: (
      <div className="space-y-2">
        <p className="font-extrabold text-gray-900">
          We provide a wide range of AI/ML solutions, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 font-normal">
          <li>
            <strong>Predictive modeling</strong> (forecasting, risk analysis,
            outcome prediction)
          </li>
          <li>
            <strong>Classification and clustering</strong> (SVM, decision trees,
            random forests, k-means)
          </li>
          <li>
            <strong>Deep learning</strong> (CNNs, RNNs, transformers)
          </li>
          <li>
            <strong>Natural Language Processing</strong> (text mining, sentiment
            analysis, entity recognition)
          </li>
          <li>
            <strong>Recommendation systems</strong>
          </li>
          <li>
            <strong>Time-series forecasting</strong>
          </li>
          <li>
            <strong>Data visualization and publication-ready reporting</strong>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    question: "2. Who will work on my ML/AI project?",
    answer:
      "Our team consists of post-doctoral data scientists, ML engineers, and senior biostatisticians with deep experience across healthcare, technical research, and corporate analytics.",
  },
  {
    id: 3,
    question: "3. Which tools and platforms do you use?",
    answer:
      "We primarily utilize Python, R, TensorFlow, PyTorch, Scikit-learn, SPSS, and cloud architectures like AWS and Azure ML depending on project goals.",
  },
  {
    id: 4,
    question: "4. Can you handle large and unstructured datasets?",
    answer:
      "Yes, we handle large structured and unstructured clinical, textual, or behavioral datasets using advanced pre-processing and secure storage infrastructure.",
  },
  {
    id: 5,
    question:
      "5. Do you customize ML models for specific research or business needs?",
    answer:
      "Absolutely. Every project receives a tailored architecture built entirely around your specific objectives, reference variables, and hypotheses.",
  },
  {
    id: 6,
    question: "6. Can I collaborate with your ML experts during the project?",
    answer:
      "Yes, we encourage iterative review milestones through communication pipelines to ensure alignment on insights and methodology.",
  },
];

// --- Insights / Articles Data Structure ---
const insightsData = [
  {
    title:
      "How to Structure Case Reports and Review Articles for Medical Journals",
    excerpt:
      "Medical journals expect a structure for case reports and review articles, with clear objectives....",
    placeholderText: "[ Medical Journal Layout Visual ]",
  },
  {
    title:
      "How Should Physicians Choose the Right Journal for Submitting a Case...",
    excerpt:
      "Publishing a case report involves more than clinical knowledge; it also demands strategic journal...",
    placeholderText: "[ Journal Selection Strategy Visual ]",
  },
  {
    title:
      "How Physicians Can Write Clear and Impactful Patient Education Materials",
    excerpt:
      "Effective patient education materials (PEMs) are crucial for promoting health literacy, enhancing....",
    placeholderText: "[ Patient Communication Asset ]",
  },
];

export const AnalyticsFooterSections: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <div className="w-full bg-[#fcfdfd] font-sans antialiased text-left selection:bg-emerald-100">
      {/* ==========================================================
          SECTION 1: TESTIMONIALS
          ========================================================== */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-[#082a32] text-2xl font-extrabold tracking-tight mb-4">
          Testimonials
        </h2>
        <p className="text-gray-700 text-sm max-w-6xl leading-relaxed mb-8 font-normal">
          Learn how Pubrica's machine learning and AI-driven analytics have
          helped researchers and businesses generate accurate, publication-ready
          insights that enhance credibility, support evidence-based decisions,
          and boost visibility. Here's what our clients say:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Inner Gray Banner Block */}
              <div className="bg-[#f3f4f5] rounded-md p-5 flex gap-4 items-start items-stretch min-h-[140px]">
                <div
                  className={`w-1/3 min-w-[90px] p-3 text-[10px] font-black uppercase flex items-center justify-center text-center tracking-tighter select-none border border-gray-300/40 rounded shadow-inner ${t.journalLogoBg}`}
                >
                  {t.journalLogo}
                </div>
                <p className="w-2/3 text-xs md:text-[13px] text-gray-700 italic font-medium leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Identity Footer */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-black font-black text-xs sm:text-sm tracking-wide">
                    — {t.name}
                  </h4>
                  <p className="text-gray-500 text-[11px] sm:text-xs font-normal italic mt-0.5">
                    {t.title}
                  </p>
                </div>
                <span className="text-3xl filter saturate-[0.85] select-none">
                  {t.flagEmoji}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Micro Indicator Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-8">
          <span className="w-2.5 h-2.5 border border-gray-600 bg-white cursor-pointer" />
          <span className="w-2.5 h-2.5 bg-gray-800 cursor-pointer" />
        </div>
      </section>

      {/* ==========================================================
          SECTION 2: FREQUENTLY ASKED QUESTIONS
          ========================================================== */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-100">
        <h2 className="text-[#082a32] text-2xl font-extrabold tracking-tight mb-8">
          Frequently Asked Questions
        </h2>

        <div className="border border-gray-200 rounded-md divide-y divide-gray-200 bg-white overflow-hidden shadow-sm">
          {faqData.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div key={faq.id} className="w-full">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full py-4 px-5 flex items-center justify-between text-left font-extrabold text-xs sm:text-sm text-gray-900 bg-white hover:bg-gray-50/70 transition-colors duration-150"
                >
                  <span className="tracking-tight">{faq.question}</span>
                  <span className="text-lg font-mono text-gray-500 font-bold ml-4">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-50 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================================
          SECTION 3: INSIGHTS
          ========================================================== */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-100">
        <h2 className="text-[#082a32] text-2xl font-extrabold tracking-tight mb-8">
          Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insightsData.map((article, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90 rounded flex flex-col overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Cover Mock Asset Container */}
              <div className="w-full aspect-[16/10] bg-neutral-100 border-b border-gray-200 flex items-center justify-center text-[11px] font-mono text-zinc-400 font-bold tracking-wider relative group">
                {article.placeholderText}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title and Summary Text Blocks */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <h3 className="text-[#054354] font-black text-sm sm:text-[14px] leading-snug hover:text-emerald-800 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
