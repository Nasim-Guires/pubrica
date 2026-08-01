'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

type Expert = {
  name: string;
  title: string;
  experience: string;
  papersEdited: string;
};

type PublishedPaper = {
  journal: string;
  title: string;
  author: string;
  publisher: string;
  impactFactor: string;
};

const expertsData: Expert[] = [
  {
    name: 'Dr. Aditi Mehta',
    title: 'PhD in Bioinformatics Indian Institute of Technology, India',
    experience: '8+ Years of Experience',
    papersEdited: '700+ Papers Edited',
  },
  {
    name: 'Dr. Vikram Joshi',
    title: 'PhD in Environmental Science University of Delhi, India',
    experience: '7+ Years of Experience',
    papersEdited: '750+ Papers Edited',
  },
  {
    name: 'Dr. Priya Kumar',
    title: 'PhD in Artificial Intelligence Indian Institute of Technology, India',
    experience: '6+ Years of Experience',
    papersEdited: '600+ Papers Edited',
  },
];

const publishedPapersData: PublishedPaper[] = [
  {
    journal: 'Environmental Science & Technology',
    title: 'Geochemical and Isotopic Fingerprint-Based Identification of Sulfate Source Regional Characteristics and Evolution of Groundwater Impacted by Acid Mine Drainage (AMD) from a Nonferrous Metal Mining Area',
    author: 'Bing Wang, Lei Ma*, Jiazhong Qian*, Yunhai Fang, Wei Xie, Dan Ding, Yang Long, Huan Zhou',
    publisher: 'American Chemical Society',
    impactFactor: '11.7',
  },
  {
    journal: 'AI & Society',
    title: 'Title: Leveraging LLMs for interpreting historical sources: a case study of the Apple Lisa through critical code studies',
    author: 'Author: Kauffmann, T. Leveraging',
    publisher: 'Publisher: springer nature',
    impactFactor: '4.7',
  },
  {
    journal: 'Nature Biotechnology',
    title: 'Title: A DNA language model for genome-wide variant alignment predicts functional effects',
    author: 'Author: Benegas, G.',
    publisher: 'Publisher: Nature Publishing Group',
    impactFactor: '41.7',
  },
];

const AccessibilityComplianceComprehensiveSection: NextPage = () => {
  const [isProcessOpen, setIsProcessOpen] = useState<boolean>(false);
  
  // Independent card state: grid items are independent, but we also ensure no spillover/shared indexing bugs
  const [openWhyIndices, setOpenWhyIndices] = useState<{ [key: number]: boolean }>({});

  const toggleWhyAccordion = (index: number) => {
    setOpenWhyIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Head>
        <title>Comprehensive Accessibility Compliance Services | Pubrica</title>
        <meta 
          name="description" 
          content="Explore Pubrica's comprehensive accessibility compliance services for research articles, theses, textbooks, and academic manuscripts featuring expert verification and sample work." 
        />
        <link 
          rel="canonical" 
          href="https://pubrica.com/services/education-editorial-service/accessibility-compliance/" 
        />
      </Head>

      <div className="w-full bg-white text-gray-800 py-12 px-4 md:px-8 space-y-20">
        
        {/* SECTION 1: Accessibility Compliance Can Benefit A Range Of Documents & Experts */}
        <section className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b2c] mb-8">
              Accessibility Compliance Can Benefit A Range Of Documents
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm md:text-base text-gray-700 font-medium">
              <div className="flex items-center space-x-2">
                <span className="text-[#0b3b2c] font-bold">➔</span>
                <span>Research articles</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#0b3b2c] font-bold">➔</span>
                <span>Thesis</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#0b3b2c] font-bold">➔</span>
                <span>Textbooks</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#0b3b2c] font-bold">➔</span>
                <span>Technical manuals</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#0b3b2c] font-bold">➔</span>
                <span>Academic</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#0b3b2c] font-bold">➔</span>
                <span>Scientific</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2">
                <span className="text-[#0b3b2c] font-bold">➔</span>
                <span>Educational content across format</span>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0b3b2c] mb-10">
              Meet Our Accessibility Compliance Experts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {expertsData.map((expert, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between text-left relative">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 relative overflow-hidden flex-shrink-0 border border-gray-300">
                        {/* Image Section Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500 font-semibold bg-gray-100">
                          Expert
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base">{expert.name}</h4>
                        <p className="text-xs text-gray-500 leading-tight mt-0.5">{expert.title}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 font-medium space-y-1 mb-6">
                      <p>{expert.experience}</p>
                      <p>{expert.papersEdited}</p>
                    </div>
                  </div>
                  <Link href="#" className="text-sm font-bold text-gray-900 hover:text-[#0b3b2c] transition-colors inline-block text-center w-full py-2 border-t border-gray-100">
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Fundamentals of the Accessibility Compliance Process (Accordion) */}
        <section className="max-w-5xl mx-auto">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button 
              onClick={() => setIsProcessOpen(!isProcessOpen)}
              className="w-full bg-[#0b3b2c] text-white p-4 text-left font-semibold flex justify-between items-center transition-colors"
            >
              <span className="flex items-center space-x-3 text-lg">
                <span>{isProcessOpen ? '−' : '+'}</span>
                <span>Fundamentals of the Accessibility Compliance Process</span>
              </span>
            </button>
            
            {isProcessOpen && (
              <div className="bg-white p-6 md:p-8 space-y-4 text-gray-700 text-sm md:text-base border-t border-gray-200">
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong>1st Assessment:</strong> Assess Access to Content Based on Structural, Formatting, and Content Accessibility Gaps.
                  </li>
                  <li>
                    <strong>Semantic Errors in the Structure of a Document:</strong> Use Appropriate Headings, Lists, and Accessibility Structure for Use by Screen Readers.
                  </li>
                  <li>
                    <strong>Global Compliance:</strong> Ensure Documentation is Compliant with WCAG, Section 508 Guidelines and Includes Alternative Text for Visuals.
                  </li>
                  <li>
                    <strong>Readability Improvements:</strong> Improve Clarity, Flow and Readability through Thoroughly Editing Document on a Line-by-Line Basis.
                  </li>
                  <li>
                    <strong>Final Validation and Review:</strong> Ensure Full Compliance with Required Guidelines/Standards, Prepare Documentation for Publication or Submission.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 3: Why Should You Use Pubrica’s Professional Accessibility Compliance Services? */}
        <section className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0b3b2c]">
            Why Should You Use Pubrica’s Professional Accessibility Compliance Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Expertise in Global Standards',
                description: 'All manuscripts produced by Pubrica’s team of specialists meet International Accessibility Standards such as WCAG and Section 508 and are guaranteed to comply with both Digital and Print format requirements.'
              },
              {
                title: 'Quality Assurance & Validation',
                description: 'We offer rigorous quality assurance and accessibility validation to ensure your document is fully compliant, improving its chances of acceptance and reaching a wider, more inclusive audience.'
              },
              {
                title: 'Improved Accessibility and Readability',
                description: 'We optimize your documents for assistive technologies, enhancing readability and navigation for people with disabilities, including those who rely on screen readers.'
              },
              {
                title: 'Enhanced Readability & Usability',
                description: 'We improve the readability and usability of your content, making it more accessible to individuals using assistive technologies such as screen readers and magnifiers.'
              }
            ].map((item, idx) => {
              const isOpen = !!openWhyIndices[idx];
              return (
                <div key={idx} className="bg-[#f0f7f4] border border-[#d2e8de] rounded-lg overflow-hidden transition-all h-fit">
                  <button 
                    onClick={() => toggleWhyAccordion(idx)}
                    className="w-full p-4 text-left font-bold text-[#0b3b2c] flex justify-between items-center text-base"
                  >
                    <span className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded bg-[#0b3b2c]/10 flex items-center justify-center text-xs text-[#0b3b2c]">✓</div>
                      <span>{item.title}</span>
                    </span>
                    <span className="text-xl font-mono">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed border-t border-[#d2e8de]/50 pt-3">
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: Our Successfully Published Papers & Sample Work */}
        <section className="max-w-6xl mx-auto space-y-12 pt-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b2c] mb-2">
              Our Successfully Published Papers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publishedPapersData.map((paper, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-36 bg-gray-100 rounded mb-4 relative overflow-hidden flex items-center justify-center border border-gray-200">
                    {/* Image Section Placeholder */}
                    <span className="text-xs text-gray-400 font-medium">Paper Thumbnail / Mockup</span>
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{paper.journal}</span>
                  <h3 className="font-bold text-gray-900 text-sm mt-1 mb-2 line-clamp-3">{paper.title}</h3>
                  <p className="text-xs text-gray-600 mb-1">{paper.author}</p>
                  <p className="text-xs text-gray-500">Publisher: {paper.publisher}</p>
                  <p className="text-xs font-semibold text-gray-700 mt-1">Impact Factor: {paper.impactFactor}</p>
                </div>
                <div className="mt-6">
                  <Link href="#" className="inline-block bg-[#0b3b2c] text-white text-xs font-bold py-2 px-6 rounded hover:bg-[#07281d] transition-colors">
                    Visit
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sample Work Viewer Section */}
          <div className="text-center pt-10 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#0b3b2c] mb-2">
                Explore Sample Work From Our Professional Accessibility Compliance
              </h3>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Professional Accessibility Compliance Services, showcasing how we ensure academic and research manuscripts meet global accessibility standards. Our expert team enhances readability and usability for diverse audiences, ensuring your work is fully accessible across all digital platforms.
              </p>
            </div>

            <div className="bg-[#1e1e1e] rounded-xl p-4 md:p-6 max-w-4xl mx-auto shadow-2xl border border-gray-700 text-left">
              {/* PDF Viewer Mockup Toolbar */}
              <div className="bg-[#2d2d2d] text-gray-300 p-2 rounded-lg flex flex-wrap items-center justify-between gap-2 mb-4 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#0b3b2c] text-white px-2 py-1 rounded font-medium">Academic Manuscript</span>
                </div>
                <div className="flex items-center space-x-4 bg-[#3d3d3d] px-3 py-1 rounded">
                  <span>Graphic</span>
                  <span>1 / 1</span>
                  <span>- 28% +</span>
                </div>
              </div>

              {/* PDF Document Viewer Container */}
              <div className="bg-[#252525] rounded p-4 flex flex-col md:flex-row gap-4 items-center justify-center min-h-[350px]">
                {/* Thumbnail pane */}
                <div className="w-full md:w-1/3 bg-white rounded p-2 shadow border border-gray-600">
                  <div className="h-32 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-xs text-gray-400">
                    Page 1 Thumbnail
                  </div>
                  <div className="text-center text-xs mt-1 font-semibold text-gray-700">1</div>
                </div>

                {/* Main page preview pane */}
                <div className="w-full md:w-2/3 bg-white rounded p-4 shadow border border-gray-600 min-h-[300px] flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-20 bg-red-50 border border-red-100 rounded p-2 text-[10px] text-gray-600 mt-2">
                      Sample text layout showing highlighted compliance review notes and comments sections.
                    </div>
                  </div>
                  <div className="text-right text-[10px] text-gray-400 font-mono mt-4">
                    SAMPLE WORK PREVIEW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AccessibilityComplianceComprehensiveSection;