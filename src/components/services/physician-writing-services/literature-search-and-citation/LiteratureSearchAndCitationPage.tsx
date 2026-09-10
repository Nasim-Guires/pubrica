import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';

export const metadata = {
  title: 'Literature Search and Citation Service | Build Evidence with Precision',
  description: 'Access highly relevant, peer-reviewed references tailored to your research objectives. Ensure accurate citation alignment with your target journal\'s formatting standards.',
};

export default function LiteratureSearchAndCitationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Hero Banner Section */}
      <HeroBanner
        title="Literature Search and Citation Service"
        description="Access highly relevant, peer-reviewed references tailored to your research objectives. Ensure accurate citation alignment with your target journal's formatting standards."
        headingAs="h1"
      />

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Section 1: Expert Literature Search and Citation Service */}
        <div className="space-y-6 mb-16">
          {/* Heading Placed Above the Image and Content */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] leading-snug">
            Expert Literature Search and Citation Service: Build Evidence with Precision and Relevance
          </h2>

          {/* Flow Root Container for Floated Image Layout */}
          <div className="flow-root">
            {/* Right Floated Image Container */}
            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[450px] pt-2 lg:pt-0">
              <div className="relative w-full max-w-md aspect-[4/3] p-4 flex items-center justify-center">
                <div className="relative w-full h-full bg-white overflow-hidden">
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

            {/* Text Content Passing Around the Floated Image */}
            <div className="space-y-5">
              <p className="text-lg font-semibold text-[#1c4d50]">
                Find the Most Relevant, Recent, and Reliable Research to Power Your Study
              </p>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                For PhD scholars, researchers, authors, or product developers, industry-affiliated scientists preparing a manuscript, thesis, or systematic review, a comprehensive scientific literature search is essential. Our expert{' '}
                <Link href="/academy/literature-search-citation/literature-search-research-planning/" className="text-blue-600 no-underline hover:no-underline">
                  literature search and citation
                </Link>{' '}
                service is designed to locate relevant, credible, and recent peer-reviewed, high-impact studies for a variety of needs, from academic publishing to product formulation and ingredient validation that directly support your research or product objectives. We offer:
              </p>

              <ul className="space-y-3 pt-2 text-sm sm:text-base text-gray-700 list-disc pl-4 marker:text-red-600">
                <li>
                  Expert-led literature review service for thesis, dissertation, journal manuscripts, and grant proposals
                </li>
                <li>
                  Ingredient-specific literature searches for nutraceutical, food, ayurvedic, and pharmaceutical products
                </li>
                <li>
                  Regulatory-backed evidence gathering for product claims (e.g.,{' '}
                  <a href="https://www.fda.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600">FDA</a>,{' '}
                  <a href="https://www.efsa.europa.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-600">EFSA</a>,{' '}
                  <a href="https://www.ayush.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600">AYUSH</a>)
                </li>
                <li>
                  Preclinical and clinical evidence mapping for new product development
                </li>
                <li>
                  Targeted evidence mapping based on your research scope, keywords, and study design
                </li>
                <li>
                  Curated citation lists and summaries tailored to your research questions
                </li>
                <li>
                  Up-to-date and relevant scholarly sources, including grey literature if needed
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base pt-2">
                Our team of domain-specific experts dives deep into PubMed, Scopus, Web of Science, Google Scholar, and regulatory databases to find high-quality studies. We provide well-organized evidence libraries, annotated bibliographies, and summary notes to support your research, innovation, or publication. With our literature search and citation service,{' '}
                <Link href="/subject-matter-experts" className="text-blue-600 no-underline hover:no-underline">
                  subject matter experts
                </Link>{' '}
                search, filter, and cite credible scientific papers to enhance your manuscript or project.
              </p>

              <div className="pt-4">
                <GetFreeQuoteButton />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: What We Do */}
        <div className="space-y-6 pt-8">
          {/* Heading Placed Above the Image and Content */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] leading-tight">
            What We do
          </h2>

          {/* Flow Root Container for Floated Image Layout */}
          <div className="flow-root">
            {/* Right Floated Image Container */}
            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[450px] pt-2 lg:pt-0">
              <div className="relative w-full max-w-md aspect-[4/3] p-4 flex items-center justify-center">
                <div className="relative w-full h-full bg-white overflow-hidden">
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

            {/* Text Content Passing Around the Floated Image */}
            <div className="space-y-5">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We provide evidence-driven literature search, scientific citation, and research intelligence services to accelerate product development, regulatory alignment, and scientific credibility across the pharma, medical device, and nutraceutical sectors.
              </p>

              <ul className="space-y-3 pt-2 text-sm sm:text-base text-gray-700 list-disc pl-4 marker:text-red-600">
                <li>
                  <strong>Comprehensive Literature Review:</strong> We carefully conduct a literature review to identify and summarise the most common and relevant papers to support your manuscript and align with your research topic. This offers you one more element of Pubrica&apos;s{' '}
                  <Link href="/services/research-services/scientific-writing" className="text-blue-600 no-underline hover:no-underline">
                    scientific writing
                  </Link>{' '}
                  and{' '}
                  <Link href="/services/research-services/medical-writing" className="text-blue-600 no-underline hover:no-underline">
                    medical writing
                  </Link>{' '}
                  services to support evidence-based production of content.
                </li>

                <li>
                  <strong>Accurate Citation Management:</strong> We make sure all references are accurately cited in your manuscript within the formatting requirements of your intended journal. This is complemented by our{' '}
                  <Link href="/services/publication-support/journal-selection" className="text-blue-600 no-underline hover:no-underline">
                    journal selection
                  </Link>{' '}
                  service, which tailors your manuscript citations to be consistent with the scope and formatting requirements of a selected group of high-impact journals.
                </li>

                <li>
                  <strong>Reviewer Management:</strong> We offer accurate contact details to help recommend or exclude reviewers to improve the peer review process. Our{' '}
                  <Link href="/services/publication-support/plagiarism-services" className="text-blue-600 no-underline hover:no-underline">
                    plagiarism
                  </Link>{' '}
                  check service also helps ensure the integrity of each manuscript during the reviewer evaluation process.
                </li>

                <li>
                  <strong>Efficient Document Handling:</strong> We ensure the entire documentation process is managed, ensuring that all your references are correctly referenced and documented in your manuscript.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}