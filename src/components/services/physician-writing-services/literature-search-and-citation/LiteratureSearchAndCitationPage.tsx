import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

export const metadata = {
  title: 'Literature Search and Citation Service | Build Evidence with Precision',
  description: 'Access highly relevant, peer-reviewed references tailored to your research objectives. Ensure accurate citation alignment with your target journal\'s formatting standards.',
};

export default function LiteratureSearchAndCitationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-[#111e1f] via-[#1a2d2e] to-[#111e1f] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto border border-gray-600/40 rounded-lg p-6 sm:p-10 text-center bg-black/20 backdrop-blur-sm">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Literature Search and Citation Service
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Access highly relevant, peer-reviewed references tailored to your research objectives. Ensure accurate citation alignment with your target journal&apos;s formatting standards.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Section 1: Expert Literature Search and Citation Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] leading-snug">
              Expert Literature Search and Citation Service: Build Evidence with Precision and Relevance
            </h2>
            
            <p className="text-lg font-semibold text-[#1c4d50]">
              Find the Most Relevant, Recent, and Reliable Research to Power Your Study
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              For PhD scholars, researchers, authors, or product developers, industry-affiliated scientists preparing a manuscript, thesis, or systematic review, a comprehensive scientific literature search is essential. Our expert{' '}
              <Link href="/services/physician-writing-services/literature-search-and-citation" className="text-sky-600 hover:underline">
                literature search and citation
              </Link>{' '}
              service is designed to locate relevant, credible, and recent peer-reviewed, high-impact studies for a variety of needs, from academic publishing to product formulation and ingredient validation that directly support your research or product objectives. We offer:
            </p>

            <ul className="space-y-3 pt-2 text-sm sm:text-base text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>Expert-led literature review service for thesis, dissertation, journal manuscripts, and grant proposals</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>Ingredient-specific literature searches for nutraceutical, food, ayurvedic, and pharmaceutical products</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>
                  Regulatory-backed evidence gathering for product claims (e.g.,{' '}
                  <a href="https://www.fda.gov/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">FDA</a>,{' '}
                  <a href="https://www.efsa.europa.eu/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">EFSA</a>,{' '}
                  <a href="https://www.ayush.gov.in/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">AYUSH</a>)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>Preclinical and clinical evidence mapping for new product development</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>Targeted evidence mapping based on your research scope, keywords, and study design</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>Curated citation lists and summaries tailored to your research questions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>Up-to-date and relevant scholarly sources, including grey literature if needed</span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base pt-2">
              Our team of domain-specific experts dives deep into PubMed, Scopus, Web of Science, Google Scholar, and regulatory databases to find high-quality studies. We provide well-organized evidence libraries, annotated bibliographies, and summary notes to support your research, innovation, or publication. With our literature search and citation service,{' '}
              <Link href="/subject-matter-experts" className="text-sky-600 hover:underline">
                subject matter experts
              </Link>{' '}
              search, filter, and cite credible scientific papers to enhance your manuscript or project.
            </p>

            <div className="pt-4">
              <GetFreeQuoteButton/>
            </div>
          </div>

          {/* Image Section 1 */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl p-4 flex items-center justify-center">
              <div className="relative w-full h-full bg-white rounded-xl overflow-hidden">
                <Image
                  src="/images/physician-writing-services/literature-search-and-citation/Expert-Literature-Search-and-Citation-Service.webp"
                  alt="Expert literature search and citation service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143234]">
              What We do
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We provide evidence-driven literature search, scientific citation, and research intelligence services to accelerate product development, regulatory alignment, and scientific credibility across the pharma, medical device, and nutraceutical sectors.
            </p>

            <ul className="space-y-4 pt-2 text-sm sm:text-base text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <div>
                  <strong>Comprehensive Literature Review:</strong> We carefully conduct a literature review to identify and summarise the most common and relevant papers to support your manuscript and align with your research topic. This offers you one more element of Pubrica&apos;s{' '}
                  <Link href="/services/research-services/scientific-writing" className="text-sky-600 hover:underline">
                    scientific writing
                  </Link>{' '}
                  and{' '}
                  <Link href="/services/medical-writing" className="text-sky-600 hover:underline">
                    medical writing
                  </Link>{' '}
                  services to support evidence-based production of content.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <div>
                  <strong>Accurate Citation Management:</strong> We make sure all references are accurately cited in your manuscript within the formatting requirements of your intended journal. This is complemented by our{' '}
                  <Link href="/services/publication-support/journal-selection" className="text-sky-600 hover:underline">
                    journal selection
                  </Link>{' '}
                  service, which tailors your manuscript citations to be consistent with the scope and formatting requirements of a selected group of high-impact journals.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <div>
                  <strong>Reviewer Management:</strong> We offer accurate contact details to help recommend or exclude reviewers to improve the peer review process. Our{' '}
                  <Link href="/services/publication-support/plagiarism-services" className="text-sky-600 hover:underline">
                    plagiarism
                  </Link>{' '}
                  check service also helps ensure the integrity of each manuscript during the reviewer evaluation process.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <div>
                  <strong>Efficient Document Handling:</strong> We ensure the entire documentation process is managed, ensuring that all your references are correctly referenced and documented in your manuscript.
                </div>
              </li>
            </ul>
          </div>

          {/* Image Section 2 */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-md aspect-square bg-slate-100 rounded-full flex items-center justify-center p-6">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/physician-writing-services/literature-search-and-citation/What-We-do.webp"
                  alt="Literature search document review"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}