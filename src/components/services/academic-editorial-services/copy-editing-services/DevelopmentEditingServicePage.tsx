"use client";

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Image from 'next/image';
import React, { useState } from 'react';

export const metadata = {
  title: 'Development Editing Services | Academic Editorial Services | Pubrica',
  description:
    'Designed for SCI journal publication, our Development Editing service offers extensive content enhancement and comprehensive journal revision support.',
};

export default function DevelopmentEditingServicePage() {
  // State for the interactive accordion/tabs section
  const [activeTab, setActiveTab] = useState<number>(4); // Default to Proofreading open as shown in your image

  const servicesList = [
    {
      title: "Basic Copy Editing",
      content:
        "It focuses on improving grammar, spelling, punctuation, and sentence structure. It ensures that your manuscript is free of mechanical errors while maintaining your original voice and style. This service is ideal for authors seeking a polished manuscript without altering the core content.",
    },
    {
      title: "Substantive Copy Editing",
      content:
        "Substantive or developmental copy editing goes beyond surface-level corrections to improve the clarity, logic, and overall structure of the manuscript. This type of editing is suited for complex academic, scientific, or technical documents where ideas need to be communicated effectively and precisely.",
    },
    {
      title: "Line Editing",
      content:
        "Line editing is a detailed, sentence-level editing service focused on improving style, readability, and precision. Our editors ensure that each line is clear, concise, and impactful, making your manuscript more engaging and easier to understand.",
    },
    {
      title: "Technical and Scientific Copy Editing",
      content:
        "This specialized service is designed for research papers, manuscripts, and technical documents in scientific, medical, and technical fields. Our editors ensure accuracy, adherence to discipline-specific terminology, and compliance with journal or publisher guidelines.",
    },
    {
      title: "Proofreading",
      content:
        "Proofreading is the final stage of the copy editing process, focusing on catching minor errors that may have been missed earlier. It is essential to ensure that your manuscript is completely error-free before submission or publication.",
    },
  ];

  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- HERO BANNER ------------------- */}
      <header className="bg-[#0b3b2c] text-white py-6 px-4 text-center">
        <div className="max-w-5xl mx-auto border border-gray-400/40 p-8 rounded-sm bg-[#0b3b2c]/80 backdrop-blur-sm">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide text-white">
            Copy Editing Services
          </h1>
          <p className="text-xs md:text-sm max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Meticulous editing to ensure zero errors, delivering a manuscript ready for peer-reviewed international journals.            </p>
        </div>
      </header>

      {/* ------------------- FIRST CONTENT SECTION (Matching Reference 2) ------------------- */}
      <section className="py-6 px-4 max-w-6xl mx-auto" aria-labelledby="main-heading">
        <h2 id="main-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-8">
          Refine Your Manuscripts with Professional Copy Editing Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Text Content & Bullet Points */}
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              At Pubrica, our professional copy editing services are designed to elevate the quality of your academic, scientific, and educational manuscripts. Whether you are preparing a research paper, thesis, dissertation, textbook, or curriculum document, our professional copy editors refine your content for language precision, logical flow, and formatting consistency. Our goal is to make your work publication-ready, comprehensible, and impactful, while preserving your unique voice and scientific integrity.
            </p>

            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Copy editing is the last step in preparing a document&apos;s content. Getting help from a copy editor service will enhance your document by:
            </p>

            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Eliminating grammatical, typographical, and consistency errors</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Improving clarity, readability, and overall language quality</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Using terminology appropriate for the document&apos;s subject matter</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Ensuring that the tone and style used are appropriate for the document&apos;s purpose</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Using suitable writing conventions</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Following the formatting & stylistic requirements of the journal/publisher or the style manual commonly referred to in the field</strong></span>
              </li>
            </ul>

            <p className="text-xs md:text-sm text-gray-600 leading-relaxed pt-2">
              With Pubrica, your work not only reads well but also meets the rigorous expectations of peer reviewers and publishers through our specialized academic copy editing services and copy editing and proofreading services.
            </p>

            <div className="pt-4">
              <GetFreeQuoteButton />
            </div>
          </div>

          {/* Right Image Section with Dark Teal Accent Box */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                <Image
                  src="/images/academic-editorial-services/copy-editing-services/Refine-Your-Manuscripts-with-Professional-Copy-Editing-Services.webp"
                  alt="Professional copy editing services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
              {/* Dark teal accent box under image */}
              <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full bg-[#0b3b2c] rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- TYPES OF COPY EDITING SERVICES (Matching Reference 1) ------------------- */}
      <section className="py-6 px-4 max-w-6xl mx-auto border-t border-gray-100">
        <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c] text-center mb-10">
          Types of Copy Editing Services We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Side: Actual Image Container */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm h-80 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/academic-editorial-services/copy-editing-services/Types-of-Copy-Editing-Services-We-Offer-11.webp"
                alt="Types of Copy Editing Services We Offer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Side: Accordion / List Content */}
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              At Pubrica, our copy editor services are designed to elevate the clarity, coherence, and quality of your manuscript while ensuring it meets publication standards. Our expert editors provide multiple levels of copy editing tailored to the specific needs of your research, academic, or professional work. Here are the main types of professional copy editing services we provide:
            </p>

            <div className="divide-y divide-gray-300 border-t border-b border-gray-300 mt-4">
              {servicesList.map((service, index) => {
                const isOpen = activeTab === index;
                return (
                  <div key={index} className="py-3">
                    <button
                      onClick={() => setActiveTab(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between text-left font-semibold text-sm md:text-base text-gray-900 hover:text-[#0b3b2c] transition-colors py-1 focus:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-gray-500 font-mono text-lg">{isOpen ? "−" : "+"}</span>
                        {service.title}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pt-3 pb-2 pl-7 text-xs md:text-sm text-gray-600 leading-relaxed animate-fadeIn">
                        {service.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}