'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Types for Accordion and Tab data
interface AccordionSection {
  id: string;
  title: string;
  items: { label: string; href: string }[];
}

const accordionData: AccordionSection[] = [
  {
    id: 'meet-the-experts',
    title: 'MEET THE EXPERTS',
    items: [
      { label: 'OUR EDITORS', href: '/about-us/our-editors' },
      { label: 'EDITOR PROFILE', href: '/scientific-editor-profile' },
      { label: 'EDITOR SPEAK', href: '/editor-speak' },
    ],
  },
  {
    id: 'subject-area',
    title: 'SUBJECT AREA',
    items: [
      { label: 'MEDICINE', href: '/about-us/medicine' },
      { label: 'LIFE SCIENCE', href: '/about-us/life-science' },
      { label: 'PHYSICAL SCIENCES AND ENGINEERING', href: '/about-us/physical-sciences-engineering' },
    ],
  },
  {
    id: 'therapeutic-expertise',
    title: 'THERAPEUTIC EXPERTISE',
    items: [{ label: 'OVERVIEW', href: '/therapeutic-expertise' }],
  },
  {
    id: 'global-partners',
    title: 'GLOBAL PARTNERS AND MEMBERSHIP',
    items: [{ label: 'PARTNERS', href: '/strategic-partnerships-memberships' }],
  },
  {
    id: 'contact-us',
    title: 'CONTACT US',
    items: [{ label: 'REACH US', href: '/contact-us' }],
  },
  {
    id: 'careers',
    title: 'CAREERS',
    items: [{ label: 'JOIN OUR TEAM', href: '/careers' }],
  },
];

const clienteleList = [
  'Yale University',
  'Lund University',
  'Rice University',
  'Northwestern University',
  'John Hopkins University',
  'Harvard University',
  'Sanford University',
  'Sheffield Hallam University',
  'Sacramento State University',
  'Vienna University',
  'Wharton School',
  'Princeton University',
];

const qualificationsList = [
  'In Nuclear Physics',
  'Ph.D. in Petroleum Engineering',
  'M.Sc. in Geochemistry',
  'BS (Hons) Geology',
  'MS in Physical Chemistry',
  'B.Tech in Mechanical Engineering',
  'MS in Materials Science',
  'Ph.D. in Electrical Engineering',
  'Ph.D. in Bioinorganic Chemistry',
];

export default function MedicinePage() {
  // All accordion items closed by default
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('clientele');

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <main className="w-full bg-white min-h-screen text-slate-800 font-sans">
      {/* Top Banner Section */}
      <section className="w-full bg-[#182d30] py-6 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto border border-slate-400 py-8 px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Medical field</h1>
          <p className="text-sm md:text-base text-slate-300">All branches</p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar */}
        <aside className="w-full md:w-1/4 shrink-0" aria-label="Sidebar Navigation">
          <div className="flex items-center gap-2 mb-6 text-xl font-bold text-slate-800">
            <span className="text-yellow-500">★</span>
            <h2>About Us</h2>
          </div>

          <div className="space-y-2">
            {accordionData.map((section) => {
              const isOpen = openAccordion === section.id;
              return (
                <div key={section.id} className="border-b border-slate-200 pb-1">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex items-center gap-3 py-2 text-left font-bold text-xs text-slate-700 hover:text-teal-700 transition-colors"
                  >
                    <span className="bg-yellow-500 text-white w-5 h-5 flex items-center justify-center text-sm font-bold shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                    <span>{section.title}</span>
                  </button>

                  {isOpen && (
                    <ul className="ml-8 my-2 space-y-2 text-xs font-semibold text-teal-600">
                      {section.items.map((item, idx) => (
                        <li key={idx}>
                          <Link href={item.href} className="text-blue-600 no-underline hover:no-underline">
                            • {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* Right Main Content */}
        <article className="w-full md:w-3/4 space-y-8">
          
          {/* Header & Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800">Medicine</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              With over 32% of manuscripts that we edit—an mammoth of 139, 000+ papers—come from the field of medicine and related scientific subjects; therefore, pubrica&apos;s repertoire in these subjects is unparalleled. Due to our consistent high quality we are mentioned by more than 500 journals, including leading publications such as The Lancet, BMJ, and American Psychological Association, Wolters Kluwer, Taylor &amp; Francis, and SAGE—these are some of the academic publishers. Our experience translates to clients being able to publish in journals with high impact factor.
            </p>
          </section>

          {/* Stats Grid */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold text-teal-800">Know why we are unique</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900">35</span>
                <p className="text-xs text-slate-600 leading-normal">
                  Our experience in editing over 35 different types of manuscripts pertaining to physics, computer sciences, robotics, biostatistics and more.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900">185</span>
                <p className="text-xs text-slate-600 leading-normal">
                  Possess know-how across 190 specialized subject areas including nuclear physics, physical chemistry, mechanical engineering, material sciences, and atomic physics. See the list of topics below
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900">35</span>
                <p className="text-xs text-slate-600 leading-normal">
                  PhDs MD, and PHD candidates from ivy league institutions—MIT, Lund University, Cornell, Cambridge, and Stanford.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900">1400</span>
                <p className="text-xs text-slate-600 leading-normal">
                  Our know-how in editing papers for over 1400 medicine related journals like BMJ, The Lancet, Nature Medicine, New England Journal of medicine and more.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900">53%</span>
                <p className="text-xs text-slate-600 leading-normal">
                  Our editors are also published authors and peer-reviewers in their own right, while over 53% of them have worked as editorial staff for various publishers like Wiley, Pearsons, McGraw Hills, etc.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900">28%</span>
                <p className="text-xs text-slate-600 leading-normal">
                  The average editor&apos;s experience in medical topics of research is 28% years.
                </p>
              </div>

            </div>
          </section>

          {/* Interactive Tabs Section */}
          <section className="space-y-0">
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('clientele')}
                className={`px-4 py-2 text-xs font-semibold rounded-t transition-colors ${
                  activeTab === 'clientele'
                    ? 'bg-teal-700 text-white'
                    : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                }`}
              >
                Our clientele
              </button>
              <button
                onClick={() => setActiveTab('recommendations')}
                className={`px-4 py-2 text-xs font-semibold rounded-t transition-colors ${
                  activeTab === 'recommendations'
                    ? 'bg-teal-700 text-white'
                    : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                }`}
              >
                Our Journal Recommendations
              </button>
              <button
                onClick={() => setActiveTab('published')}
                className={`px-4 py-2 text-xs font-semibold rounded-t transition-colors ${
                  activeTab === 'published'
                    ? 'bg-teal-700 text-white'
                    : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                }`}
              >
                Papers we published
              </button>
              <button
                onClick={() => setActiveTab('sample')}
                className={`px-4 py-2 text-xs font-semibold rounded-t transition-colors ${
                  activeTab === 'sample'
                    ? 'bg-teal-700 text-white'
                    : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                }`}
              >
                Sample of Editing
              </button>
            </div>

            {/* Tab Content Box */}
            <div className="bg-slate-50 border-t-2 border-teal-700 p-6 min-h-[220px]">
              {activeTab === 'clientele' && (
                <ul className="space-y-2">
                  {clienteleList.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="text-teal-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === 'recommendations' && (
                <p className="text-xs text-slate-600">Journal Recommendations Content...</p>
              )}
              {activeTab === 'published' && (
                <p className="text-xs text-slate-600">Published Papers Content...</p>
              )}
              {activeTab === 'sample' && (
                <p className="text-xs text-slate-600">Editing Samples Content...</p>
              )}
            </div>
          </section>

          {/* Academic Qualification & Distribution Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Left Column: Academic Qualification */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-800">Editors&apos; Academic Qualification</h4>
              <ul className="space-y-2">
                {qualificationsList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <span className="text-teal-700 text-sm">➔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Distribution Boxes / Graphic Placeholders */}
            <div className="space-y-4">
              
              {/* Image / Graphic Section 1 Placeholder */}
              <div 
                aria-label="Editor Distribution Graphic Placeholder" 
                className="w-full bg-[#114b5f] text-white rounded overflow-hidden shadow"
              >
                <div className="bg-amber-600 px-4 py-2 text-center text-xs font-bold uppercase tracking-wider">
                  Editor Distribution 95%
                </div>
                <div className="p-4 text-center">
                  <p className="text-xs text-slate-100 leading-relaxed">
                    95% of all Pubrica&apos;s editors hail from scientific research backgrounds. Medicine (surgery, therapeutics, etc.), Pharmacy, Computer Science, Engineering, and Life Sciences.
                  </p>
                </div>
              </div>

              {/* Image / Graphic Section 2 Placeholder */}
              <div 
                aria-label="Journal Distribution Graphic Placeholder" 
                className="w-full bg-[#114b5f] text-white rounded overflow-hidden shadow"
              >
                <div className="bg-amber-600 px-4 py-2 text-center text-xs font-bold uppercase tracking-wider">
                  Journal Distribution 98%
                </div>
                <div className="p-4 text-center">
                  <p className="text-xs text-slate-100 leading-relaxed">
                    98% of Pubrica&apos;s research support work is published in top journals. The Lancet, BMJ, The New England Journal of Medicine, JAMA, Chemical Reviews, and Nature—these are some of journals we work with.
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* Get a Quote Callout */}
          <section className="bg-slate-100 rounded p-8 text-center space-y-4 my-8">
            <h3 className="text-lg font-bold text-slate-800">With Pubrica, your paper is in safe hands</h3>
            <p className="text-xs text-slate-600 max-w-xl mx-auto">
              Simply fill out the quotation form and we will get back to you within 1 hour with an accurate price and delivery time.
            </p>
            <div>
              <Link 
                href="/contact-us"
                className="inline-block bg-[#1a383d] hover:bg-[#112629] text-white text-xs font-bold py-2.5 px-6 rounded transition-colors"
              >
                Get a Quote ➔
              </Link>
            </div>
          </section>

        </article>

      </div>
    </main>
  );
}