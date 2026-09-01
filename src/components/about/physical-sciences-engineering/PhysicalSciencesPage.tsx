'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Types
interface AccordionSection {
  id: string;
  title: string;
  items: { label: string; href: string }[];
}

interface PaperPublished {
  publisher: string;
  journalDetails: string;
  impactFactor: string;
  paperTitle: string;
  author: string;
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
      { label: 'LIFE SCIENCE', href: '/about-us/life-sciences' },
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

const journalRecommendations = [
  'European Journal of Physics',
  'British Journal of Science',
  'American Society of Mechanical Engineers',
  'Australian Computer Society',
  'Electronic Journal of Mathematics and Technology',
  'IEEE',
  'Academic Credentials of Editors',
  'PHD in Physics',
  'PHD in Computer Science',
  'MS in Analytics',
  'MS in Electrical Engineering',
  'MS Nuclear Physics',
  'MS in Material Science',
  'PHD in Mathematics',
  'MS in Robotics',
  'PHD in Statistics',
];

const publishedPapers: PaperPublished[] = [
  {
    publisher: 'John Wiley & Sons',
    journalDetails: 'Angewandte Chemie; 3 May 2012',
    impactFactor: '12.73',
    paperTitle: 'Cyclometalated Ruthenium(II) Complexes as Near-IR Sensitizers for High Efficiency Dye-Sensitized Solar Cells',
    author: 'Client name has been kept confidential',
  },
  {
    publisher: 'American Chemical Society',
    journalDetails: 'Journal of American Chemical Society; 2011, 133 (9), pp 2860–2863',
    impactFactor: '9.00',
    paperTitle: 'Sodium or Lithium Ion-Binding-Induced Structural Changes in the K-Ring of V-ATPase from Enterococcus hirae Revealed by ATR-FTIR Spectroscopy',
    author: 'Furutani Yuji',
  },
  {
    publisher: 'Royal Society of Chemistry',
    journalDetails: 'Chemical Communications; 2012,48, 5022-5024',
    impactFactor: '5.787',
    paperTitle: 'Adsorption and separation of poly-aromatic hydrocarbons by a hydrogen-bonded coordination polymer',
    author: 'Client name has been kept confidential',
  },
];

const sampleLinks = [
  'Manuscript',
  'Peer review',
  'Research proposal',
  'Technical editing',
  'Meta-analysis',
  'Experimental design',
  'Stats dissertation',
  'Substantial editing',
  'Systematic review',
];

const sampleLinkHrefs: Record<string, string> = {
  'Manuscript': '/services/editing-and-translation/manuscript-editing',
  'Peer review': '/services/publication-support/peer-review-pre-submission',
  'Research proposal': '/services/physician-writing-services/research-proposal',
  'Technical editing': '/services/editing-and-translation',
  'Meta-analysis': '/services/research-services/meta-analysis',
  'Experimental design': '/services/research-services/experimental-design',
  'Stats dissertation': '/services/research-services/biostatistics-and-statistical-programming-services',
  'Substantial editing': '/services/academic-editorial-services/development-editing-service',
  'Systematic review': '/services/research-services/systematic-review',
};

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

export default function PhysicalSciencesPage() {
  // Accordion state - all closed by default
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('clientele');

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <main className="w-full bg-white min-h-screen text-slate-800 font-sans">
      {/* Hero Header Banner */}
      <section className="w-full bg-[#182d30] py-6 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto border border-slate-400 py-8 px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Physical Science</h1>
          <p className="text-sm md:text-base text-slate-300">All domains</p>
        </div>
      </section>

      {/* Main Grid Content */}
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

        {/* Main Article Content */}
        <article className="w-full md:w-3/4 space-y-8">
          
          {/* Header & Main Text */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800">Physical Sciences &amp; Engineering</h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              With over 32% of manuscripts that we edit—an mammoth of 139, 000+ papers—come from the field of medicine and related scientific subjects; therefore, Pubrica&apos;s repertoire in these subjects is unparalleled. Due to our consistent high quality we are mentioned by more than 500 journals, including leading publications such as The Lancet, BMJ, and American Psychological Association, Wolters Kluwer, Taylor &amp; Francis, and SAGE—these are some of the academic publishers. Our experience translates to clients being able to publish in journals with high impact factor.
            </p>
          </section>

          {/* Key Differentiators / Stats */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold text-teal-800">Know why we are unique</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900 shrink-0">35</span>
                <p className="text-xs text-slate-600 leading-normal">
                  Our experience in editing over 35 different types of manuscripts pertaining to physics, computer sciences, robotics, biostatistics and more.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900 shrink-0">185</span>
                <p className="text-xs text-slate-600 leading-normal">
                  Possess know-how across 190 specialized subject areas including nuclear physics, physical chemistry, mechanical engineering, material sciences, and atomic physics. See the list of topics below
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900 shrink-0">35</span>
                <p className="text-xs text-slate-600 leading-normal">
                  PhDs MD, and PHD candidates from ivy league institutions—MIT, Lund University, Cornell, Cambridge, and Stanford.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900 shrink-0">1400</span>
                <p className="text-xs text-slate-600 leading-normal">
                  Our know-how in editing papers for over 1400 medicine related journals like BMJ, The Lancet, Nature Medicine, New England Journal of medicine and more.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900 shrink-0">53%</span>
                <p className="text-xs text-slate-600 leading-normal">
                  Our editors are also published authors and peer-reviewers in their own right, while over 53% of them have worked as editorial staff for various publishers like Wiley, Pearsons, McGraw Hills, etc.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-black text-teal-900 shrink-0">28%</span>
                <p className="text-xs text-slate-600 leading-normal">
                  The average editor&apos;s experience in medical topics of research is 28% years.
                </p>
              </div>

            </div>
          </section>

          {/* Interactive Dynamic Tabs */}
          <section className="space-y-0">
            {/* Header Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('clientele')}
                className={`px-4 py-2 text-xs font-semibold rounded-t transition-colors ${
                  activeTab === 'clientele'
                    ? 'bg-[#114b5f] text-white'
                    : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                }`}
              >
                Our clientele
              </button>
              <button
                onClick={() => setActiveTab('recommendations')}
                className={`px-4 py-2 text-xs font-semibold rounded-t transition-colors ${
                  activeTab === 'recommendations'
                    ? 'bg-[#114b5f] text-white'
                    : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                }`}
              >
                Our Journal Recommendations
              </button>
              <button
                onClick={() => setActiveTab('published')}
                className={`px-4 py-2 text-xs font-semibold rounded-t transition-colors ${
                  activeTab === 'published'
                    ? 'bg-[#114b5f] text-white'
                    : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                }`}
              >
                Papers we published
              </button>
              <button
                onClick={() => setActiveTab('sample')}
                className={`px-4 py-2 text-xs font-semibold rounded-t transition-colors ${
                  activeTab === 'sample'
                    ? 'bg-[#114b5f] text-white'
                    : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                }`}
              >
                Sample of Editing
              </button>
            </div>

            {/* Display Body */}
            <div className="bg-slate-50 border-t-2 border-[#114b5f] p-6 min-h-[240px]">
              {/* Tab 1: Clientele */}
              {activeTab === 'clientele' && (
                <ul className="space-y-2">
                  {clienteleList.map((item, index) => (
                    <li key={index} className="text-xs text-slate-700 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tab 2: Recommendations */}
              {activeTab === 'recommendations' && (
                <ul className="space-y-2">
                  {journalRecommendations.map((item, index) => (
                    <li key={index} className="text-xs text-slate-700 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tab 3: Papers Published Table */}
              {activeTab === 'published' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600 italic">
                    Pepgra editors have published their papers in top scientific journals (physics, mathematics, computer science, and chemistry) with a high impact factor; here are the list of journals. For info on the journals not listed here, do contact us and we will give you more information.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse border border-slate-200">
                      <thead>
                        <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                          <th className="p-2 border-r border-slate-200">Publisher</th>
                          <th className="p-2 border-r border-slate-200">Journal Details</th>
                          <th className="p-2 border-r border-slate-200">I.F.</th>
                          <th className="p-2 border-r border-slate-200">Paper Title</th>
                          <th className="p-2 border-slate-200">Author</th>
                        </tr>
                      </thead>
                      <tbody>
                        {publishedPapers.map((paper, idx) => (
                          <tr key={idx} className="border-b border-slate-200 hover:bg-white">
                            <td className="p-2 border-r border-slate-200 font-medium">{paper.publisher}</td>
                            <td className="p-2 border-r border-slate-200">{paper.journalDetails}</td>
                            <td className="p-2 border-r border-slate-200 font-semibold">{paper.impactFactor}</td>
                            <td className="p-2 border-r border-slate-200">{paper.paperTitle}</td>
                            <td className="p-2 italic text-slate-500">{paper.author}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 4: Samples List */}
              {activeTab === 'sample' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600">
                    If you would like to find out what to expect and how our editing can transform your manuscript, take a look at some sample edited manuscripts from specialized subject areas such as physical chemistry, plasma physics, and others.
                  </p>
                  <h4 className="text-sm font-bold text-slate-800">Scientific and Engineering samples</h4>
                  <ul className="space-y-2">
                    {sampleLinks.map((sample, idx) => (
                      <li key={idx}>
                        <Link href={sampleLinkHrefs[sample] || '/services'} className="text-xs text-blue-600 no-underline hover:no-underline font-medium">
                          {sample}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Academic Qualification & Graphics Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Left: Academic Qualification List */}
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

            {/* Right: Graphic Sections Placeholder Divs */}
            <div className="space-y-6">
              
              {/* Image Section 1 */}
              <div 
                aria-label="Editor Distribution Graphic Placeholder" 
                className="w-full space-y-1"
              >
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Editor Distribution 95%
                </h5>
                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    95% of all Pubrica&apos;s editors hail from scientific research backgrounds. Medicine (surgery, therapeutics, etc.), Pharmacy, Computer Science, Engineering, and Life Sciences.
                  </p>
                </div>
              </div>

              {/* Image Section 2 */}
              <div 
                aria-label="Journal Distribution Graphic Placeholder" 
                className="w-full space-y-1"
              >
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Journal Distribution 98%
                </h5>
                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    98% of Pubrica&apos;s research support work is published in top journals. The Lancet, BMJ, The New England Journal of Medicine, JAMA, Chemical Reviews, and Nature—these are some of journals we work with.
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* Get a Quote Banner */}
          <section className="bg-slate-100 rounded p-8 text-center space-y-4 my-8">
            <h3 className="text-lg font-bold text-slate-800">With Pubrica, your paper is in safe hands</h3>
            <p className="text-xs text-slate-600 max-w-xl mx-auto">
              Simply fill out the quotation form and we will get back to you within 1 hour with an accurate price and delivery time.
            </p>
            <div>
              <Link 
                href="/order-now"
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