import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React from 'react';

export const metadata = {
  title: 'Development Editing Services | Academic Editorial Services | Pubrica',
  description:
    'Designed for SCI journal publication, our Development Editing service offers extensive content enhancement and comprehensive journal revision support.',
};

export default function DevelopmentEditingServicePage() {
  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- HERO BANNER ------------------- */}
      <header className="bg-[#0b3b2c] text-white py-12 px-4 text-center">
        <div className="max-w-5xl mx-auto border border-gray-400/40 p-8 rounded-sm bg-[#0b3b2c]/80 backdrop-blur-sm">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide text-white">
            Development Editing Services
          </h1>
          <p className="text-xs md:text-sm max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Designed for SCI journal publication, our Development Editing service offers extensive content enhancement and comprehensive journal revision support.
          </p>
        </div>
      </header>

      {/* ------------------- MAIN CONTENT SECTION ------------------- */}
      <section className="py-14 px-4 max-w-6xl mx-auto" aria-labelledby="main-heading">
        <h2 id="main-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-6">
          Enhance Clarity & Improve Your Manuscript with Expert Development Editing Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Text Content */}
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Ensure your manuscript is well structured, coherent, and impactful with our expert development editing services. Our professional editors refine your research by enhancing clarity, improving logical flow, and ensuring academic rigor.
            </p>

            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Development editing, also known as substantive or structural editing, is a comprehensive approach that focuses on the overall content and organization of a manuscript. Unlike copy editing services, which address grammar, punctuation, and formatting, development editing delves deeper into the logic, structure, and presentation of ideas. It ensures that your manuscript tells a clear, coherent story, aligns with the target audience's expectations, and meets the rigorous standards of scholarly publication.
            </p>

            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              At Pubrica, we understand that publishing high quality research requires more than just groundbreaking findings; it demands clear, coherent, and compelling writing. Our development editing service is meticulously designed for researchers, academicians, and scholars who aim to transform their manuscripts into polished, publication-ready documents that resonate with reviewers, readers, and the global scientific community.
            </p>
          </div>

          {/* Right Image Section Placeholder */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="w-full h-72 md:h-80 bg-slate-200 rounded-2xl border-2 border-dashed border-slate-400 flex flex-col items-center justify-center p-6 text-center shadow-md">
                <span className="text-lg font-bold text-gray-700">Image Section</span>
                <span className="text-xs text-gray-500 mt-2">
                  [ Laptop with manuscript text and books visual ]
                </span>
              </div>
              {/* Dark teal accent box under image */}
              <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full bg-[#0b3b2c] rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Key Aspects List */}
        <div className="mt-10 space-y-4">
          <h3 className="text-base font-bold text-gray-900">
            Key aspects of development editing include:
          </h3>

          <ul className="space-y-3 text-xs md:text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold min-w-[6px]">•</span>
              <span>
                <strong className="text-gray-900">Structure and Organization:</strong> Ensuring that your manuscript flows logically, with clear sections, headings, and subheadings that guide the reader.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold min-w-[6px]">•</span>
              <span>
                <strong className="text-gray-900">Content Clarity:</strong> Refining complex ideas, hypotheses, and arguments to make them understandable without oversimplifying scientific rigor.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold min-w-[6px]">•</span>
              <span>
                <strong className="text-gray-900">Consistency:</strong> Maintaining consistent terminology, tone, and presentation of ideas throughout the manuscript.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold min-w-[6px]">•</span>
              <span>
                <strong className="text-gray-900">Cohesion and Coherence:</strong> Linking sections and paragraphs seamlessly, so that every part contributes to the overall narrative.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold min-w-[6px]">•</span>
              <span>
                <strong className="text-gray-900">Alignment with Publication Standards:</strong> Tailoring your manuscript to meet the expectations of specific journals, funding agencies, or academic institutions.
              </span>
            </li>
          </ul>

          <div className="pt-6">
           <GetFreeQuoteButton/>
          </div>
        </div>
      </section>
    </article>
  );
}