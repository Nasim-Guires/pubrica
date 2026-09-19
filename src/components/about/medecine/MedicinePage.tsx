'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroBanner from '@/components/common/HeroBanner';

export interface NavSubItem {
  id: string;
  label: string;
  href: string;
}

export interface NavLinkItem {
  id: string;
  label: string;
  href?: string;
  subItems?: NavSubItem[];
}

const sidebarLinks: NavLinkItem[] = [
  {
    id: "experts",
    label: "MEET THE EXPERTS",
    subItems: [
      { id: "our-editors", label: "OUR EDITORS", href: "/about-us/our-editors" },
      { id: "editor-profile", label: "EDITOR PROFILE", href: "/scientific-editor-profile" },
      { id: "editor-speak", label: "EDITOR SPEAK", href: "/editor-speak" },
    ],
  },
  {
    id: "subject",
    label: "SUBJECT AREA",
    subItems: [
      { id: "medicine", label: "MEDICINE", href: "/about-us/medicine" },
      { id: "life-science", label: "LIFE SCIENCE", href: "/about-us/life-science" },
      { id: "physical-sciences", label: "PHYSICAL SCIENCES AND ENGINEERING", href: "/about-us/physical-sciences-engineering" },
    ],
  },
  {
    id: "therapeutic",
    label: "THERAPEUTIC EXPERTISE",
    href: "/therapeutic-expertise",
  },
  {
    id: "membership",
    label: "GLOBAL PARTNERS AND MEMBERSHIP",
    href: "/strategic-partnerships-memberships",
  },
  {
    id: "contact",
    label: "CONTACT US",
    href: "/contact-us",
  },
  {
    id: "careers",
    label: "CAREERS",
    href: "/careers",
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

const journalRecommendationsList = [
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

const publishedPapersList = [
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
    paperTitle: 'Sodium or Lithium Ion-Binding-Induced Structural Changes in the K-Ring of V-ATPase from Enterococcus hirae Revealed by ATR–FTIR Spectroscopy',
    author: 'Furutani Yuji',
  },
  {
    publisher: 'Royal Society of Chemistry',
    journalDetails: 'Chemical Communications; 2012,48, 5022–5024',
    impactFactor: '5.787',
    paperTitle: 'Adsorption and separation of poly-aromatic hydrocarbons by a hydrogen-bonded coordination polymer',
    author: 'Client name has been kept confidential',
  },
];

const sampleEditingLinks = [
  { label: 'Manuscript', href: '/samples/manuscript' },
  { label: 'Peer review', href: '/samples/peer-review' },
  { label: 'Research proposal', href: '/samples/research-proposal' },
  { label: 'Technical editing', href: '/samples/technical-editing' },
  { label: 'Meta-analysis', href: '/samples/meta-analysis' },
  { label: 'Experimental design', href: '/samples/experimental-design' },
  { label: 'Stats dissertation', href: '/samples/stats-dissertation' },
  { label: 'Substantial editing', href: '/samples/substantial-editing' },
  { label: 'Systematic review', href: '/samples/systematic-review' },
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
  const [activeTab, setActiveTab] = useState<string>('clientele');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero */}
      <HeroBanner
        title="Medical field"
        description="All branches"
        headingAs="h1"
      />

      {/* Content Layout */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 w-full">
            <div className="flex items-center gap-2 mb-6">
              <span aria-hidden className="text-amber-500 text-xl">★</span>
              <h2 className="text-2xl font-bold text-[#1b2b28]">
                About Us
              </h2>
            </div>

            <nav className="border-t border-gray-200 pt-6 space-y-4">
              {sidebarLinks.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;

                if (hasSubItems) {
                  return (
                    <details key={item.id} className="group space-y-2" open={item.id === "subject"}>
                      <summary className="w-full flex items-center gap-3 text-sm font-bold text-[#1b2b28] cursor-pointer list-none hover:opacity-80 transition-opacity">
                        <span className="w-6 h-6 bg-[#80878a] group-open:bg-[#e2a800] text-white flex items-center justify-center text-sm font-bold shrink-0">
                          <span className="group-open:hidden">+</span>
                          <span className="hidden group-open:inline">−</span>
                        </span>
                        <span className="tracking-wider uppercase">{item.label}</span>
                      </summary>

                      <div className="pl-9 space-y-2 pt-1">
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.href}
                            className="flex items-center gap-2 text-sm font-bold text-[#0088cc] hover:underline"
                          >
                            <span>•</span>
                            <span className="uppercase">{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    </details>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href || "#"}
                    className="flex items-center gap-3 text-sm font-bold text-[#1b2b28] hover:opacity-80 transition-opacity"
                  >
                    <span className="w-6 h-6 bg-[#80878a] text-white flex items-center justify-center text-sm font-bold shrink-0">
                      +
                    </span>
                    <span className="tracking-wider uppercase">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 w-full space-y-8">

            {/* Header & Overview */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-teal-800">Medicine</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                With over 32% of manuscripts that we edit—an mammoth of 139, 000+ papers—come from the field of medicine and related scientific subjects; therefore, pubrica&apos;s repertoire in these subjects is unparalleled. Due to our consistent high quality we are mentioned by more than 500 journals, including leading publications such as The Lancet, BMJ, and American Psychological Association, Wolters Kluwer, Taylor &amp; Francis, and SAGE—these are some of the academic publishers. Our experience translates to clients being able to publish in journals with high impact factor.
              </p>
            </section>

            {/* Stats Grid */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-teal-800">Know why we are unique</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                <div className="flex items-start gap-3">
                  <span className="text-3xl font-black text-teal-900">35</span>
                  <p className="text-sm text-slate-600 leading-normal">
                    Our experience in editing over 35 different types of manuscripts pertaining to physics, computer sciences, robotics, biostatistics and more.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-3xl font-black text-teal-900">185</span>
                  <p className="text-sm text-slate-600 leading-normal">
                    Possess know-how across 190 specialized subject areas including nuclear physics, physical chemistry, mechanical engineering, material sciences, and atomic physics. See the list of topics below
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-3xl font-black text-teal-900">35</span>
                  <p className="text-sm text-slate-600 leading-normal">
                    PhDs MD, and PHD candidates from ivy league institutions—MIT, Lund University, Cornell, Cambridge, and Stanford.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-3xl font-black text-teal-900">1400</span>
                  <p className="text-sm text-slate-600 leading-normal">
                    Our know-how in editing papers for over 1400 medicine related journals like BMJ, The Lancet, Nature Medicine, New England Journal of medicine and more.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-3xl font-black text-teal-900">53%</span>
                  <p className="text-sm text-slate-600 leading-normal">
                    Our editors are also published authors and peer-reviewers in their own right, while over 53% of them have worked as editorial staff for various publishers like Wiley, Pearsons, McGraw Hills, etc.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-3xl font-black text-teal-900">28%</span>
                  <p className="text-sm text-slate-600 leading-normal">
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
                  className={`px-5 py-2.5 text-sm font-semibold rounded-t transition-colors ${activeTab === 'clientele'
                      ? 'bg-teal-700 text-white'
                      : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                    }`}
                >
                  Our clientele
                </button>
                <button
                  onClick={() => setActiveTab('recommendations')}
                  className={`px-5 py-2.5 text-sm font-semibold rounded-t transition-colors ${activeTab === 'recommendations'
                      ? 'bg-teal-700 text-white'
                      : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                    }`}
                >
                  Our Journal Recommendations
                </button>
                <button
                  onClick={() => setActiveTab('published')}
                  className={`px-5 py-2.5 text-sm font-semibold rounded-t transition-colors ${activeTab === 'published'
                      ? 'bg-teal-700 text-white'
                      : 'bg-[#1e2d35] text-white hover:bg-teal-800'
                    }`}
                >
                  Papers we published
                </button>
                <button
                  onClick={() => setActiveTab('sample')}
                  className={`px-5 py-2.5 text-sm font-semibold rounded-t transition-colors ${activeTab === 'sample'
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
                  <ul className="space-y-2.5">
                    {clienteleList.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <span className="text-teal-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'recommendations' && (
                  <ul className="space-y-2.5">
                    {journalRecommendationsList.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <span className="text-teal-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'published' && (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Pepgra editors have published their papers in top scientific journals (physics, mathematics, computer science, and chemistry) with a high impact factor; here are the list of journals. For info on the journals not listed here, do contact us and we will give you more information.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm border-collapse bg-white">
                        <thead>
                          <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                            <th className="p-3 border border-slate-200">Publisher</th>
                            <th className="p-3 border border-slate-200">Journal Details</th>
                            <th className="p-3 border border-slate-200">I.F.</th>
                            <th className="p-3 border border-slate-200">Paper Title</th>
                            <th className="p-3 border border-slate-200">Author</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700">
                          {publishedPapersList.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="p-3 border border-slate-200 font-medium">{row.publisher}</td>
                              <td className="p-3 border border-slate-200">{row.journalDetails}</td>
                              <td className="p-3 border border-slate-200 font-medium">{row.impactFactor}</td>
                              <td className="p-3 border border-slate-200 leading-normal">{row.paperTitle}</td>
                              <td className="p-3 border border-slate-200">{row.author}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'sample' && (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      If you would like to find out what to expect and how our editing can transform your manuscript, take a look at some sample edited manuscripts from specialized subject areas such as physical chemistry, plasma physics, and others.
                    </p>
                    <h4 className="text-base font-bold text-slate-800 pt-1">Scientific and Engineering samples</h4>
                    <ul className="space-y-2.5">
                      {sampleEditingLinks.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className="text-sm font-semibold text-[#0088cc] hover:underline inline-block"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* Academic Qualification & Distribution Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">

              {/* Left Column: Academic Qualification */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-800">Editors&apos; Academic Qualification</h4>
                <ul className="space-y-2.5">
                  {qualificationsList.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <span className="text-teal-700 text-base">➔</span>
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
                  <div className="bg-amber-600 px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wider">
                    Editor Distribution 95%
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-slate-100 leading-relaxed">
                      95% of all Pubrica&apos;s editors hail from scientific research backgrounds. Medicine (surgery, therapeutics, etc.), Pharmacy, Computer Science, Engineering, and Life Sciences.
                    </p>
                  </div>
                </div>

                {/* Image / Graphic Section 2 Placeholder */}
                <div
                  aria-label="Journal Distribution Graphic Placeholder"
                  className="w-full bg-[#114b5f] text-white rounded overflow-hidden shadow"
                >
                  <div className="bg-amber-600 px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wider">
                    Journal Distribution 98%
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-slate-100 leading-relaxed">
                      98% of Pubrica&apos;s research support work is published in top journals. The Lancet, BMJ, The New England Journal of Medicine, JAMA, Chemical Reviews, and Nature—these are some of journals we work with.
                    </p>
                  </div>
                </div>

              </div>

            </section>

            {/* Get a Quote Callout */}
            <section className="bg-slate-100 rounded p-8 text-center space-y-4 my-8">
              <h3 className="text-xl font-bold text-slate-800">With Pubrica, your paper is in safe hands</h3>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                Simply fill out the quotation form and we will get back to you within 1 hour with an accurate price and delivery time.
              </p>
              <div>
                <Link
                  href="/contact-us"
                  className="inline-block bg-[#1a383d] hover:bg-[#112629] text-white text-sm font-bold py-2.5 px-6 rounded transition-colors"
                >
                  Get a Quote ➔
                </Link>
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
}