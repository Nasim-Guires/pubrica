"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ManuscriptType {
  id: string;
  title: string;
}

interface StyleGuide {
  id: string;
  title: string;
}

interface Publication {
  id: string;
  journalTitle: string;
  paperTitle: string;
  author: string;
  publisher: string;
  impactFactor: string;
  coverImage: string;
  linkUrl: string;
}

interface PackageFeature {
  featureName: string;
  elite: React.ReactNode;
  advanced: React.ReactNode;
  premium: React.ReactNode;
}

export const EditingTranslationManuscriptEditingTypesAndPackages: React.FC =
  () => {
    // Accordion open/close state for green top banner
    const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(true);

    // Data for Manuscript Types
    const manuscriptTypes: ManuscriptType[] = [
      { id: "abstract", title: "Abstract" },
      { id: "case-report", title: "Case Report/Case series" },
      { id: "protocol-papers", title: "Protocol Papers" },
      { id: "systematic-review", title: "Systematic Review" },
      { id: "narrative-review", title: "Narrative Review" },
      { id: "observational-study", title: "Observational Study" },
      { id: "opinion-article", title: "Opinion Article" },
      { id: "perspective", title: "Perspective" },
      { id: "commentary", title: "Commentary" },
      { id: "conference-proceedings", title: "Conference Proceedings" },
      { id: "letter-to-editor", title: "Letter to the Editor" },
      { id: "meta-analysis", title: "Meta-analysis" },
      { id: "brief-report", title: "Brief Report/Brief Communication" },
      {
        id: "multimedia-articles",
        title: "Multimedia articles (Clinical Images/Videos)",
      },
      { id: "clinical-trial", title: "Clinical Trial/Experimental Study" },
      { id: "original-research", title: "Original Research Article" },
    ];

    // Data for Style Guides
    const styleGuides: StyleGuide[] = [
      { id: "acs", title: "ACS Style Guide" },
      { id: "apa", title: "APA Style" },
      { id: "ieee", title: "IEEE style" },
      { id: "mla", title: "MLA Handbook" },
      { id: "cambridge", title: "The Cambridge Guide to English Usage" },
      { id: "chicago", title: "The Chicago Manual of Style" },
      { id: "asa", title: "The ASA Style Guide" },
      { id: "ama", title: "AMA Manual of Style" },
    ];

    // Data for Recent Publications Carousel
    const recentPublications: Publication[] = [
      {
        id: "pub-1",
        journalTitle: "Journal of Applied Biology & Biotechnology",
        paperTitle:
          "Astaxanthin: An alga-based natural compound with a potential role in human health-promoting effects: An Comprehensive Review",
        author: "Jinu Medhi and Mohan Chandra Kalita",
        publisher: "Open Science Publishers LLP",
        impactFactor: "NA",
        coverImage: "/images/publications/journal-applied-biology.webp",
        linkUrl: "#",
      },
      {
        id: "pub-2",
        journalTitle:
          "International Journal of Pharmacy and Pharmaceutical Sciences",
        paperTitle:
          "An Emerging Aquatic Green Gold for Food and Medicine: A Review of Algae from North East India",
        author: "Jinu Medhi and Mohan Chandra Kalita",
        publisher: "Innovare Academic Sciences Pvt. Ltd.",
        impactFactor: "NA",
        coverImage: "/images/publications/ijpps-cover.webp",
        linkUrl: "#",
      },
      {
        id: "pub-3",
        journalTitle: "Journal of Clinical Dermatology & Therapy",
        paperTitle:
          "A Systemic Review on Psoriasis Management by Phenotypic Variations and Targeted Therapies",
        author: "Piyu Parth Naik",
        publisher: "Herald Scholarly Open Access",
        impactFactor: "0.68",
        coverImage: "/images/publications/clinical-dermatology.webp",
        linkUrl: "#",
      },
    ];

    // Data Matrix for Support Packages
    const checkIcon = (
      <span className="text-emerald-600 font-bold text-lg">✓</span>
    );
    const crossIcon = <span className="text-red-500 font-bold text-lg">✕</span>;

    const packageFeatures: PackageFeature[] = [
      {
        featureName: "Spelling, punctuation, and grammar",
        elite: checkIcon,
        advanced: checkIcon,
        premium: checkIcon,
      },
      {
        featureName: "Sentence construction and jargon check",
        elite: checkIcon,
        advanced: checkIcon,
        premium: checkIcon,
      },
      {
        featureName: "Pubrica Letter and certificate of editing",
        elite: checkIcon,
        advanced: checkIcon,
        premium: checkIcon,
      },
      {
        featureName: "Formatting for specific journals",
        elite: checkIcon,
        advanced: checkIcon,
        premium: checkIcon,
      },
      {
        featureName: "1 year re-editing assistance",
        elite: (
          <span className="text-slate-800 text-xs sm:text-sm font-medium">
            Free
          </span>
        ),
        advanced: (
          <span className="text-slate-800 text-xs sm:text-sm font-medium">
            Free
          </span>
        ),
        premium: (
          <span className="text-slate-800 text-xs sm:text-sm font-medium">
            50% discount
          </span>
        ),
      },
      {
        featureName: "Target journal guidelines and formatting",
        elite: (
          <span className="text-slate-800 text-xs sm:text-sm">
            Free for many journals*
          </span>
        ),
        advanced: (
          <span className="text-slate-800 text-xs sm:text-sm">
            Free for many journals*
          </span>
        ),
        premium: (
          <span className="text-slate-800 text-xs sm:text-sm">
            Free for many journals*
          </span>
        ),
      },
      {
        featureName: "Wordage reduction",
        elite: (
          <span className="text-slate-800 text-xs sm:text-sm font-medium">
            Till 20% **
          </span>
        ),
        advanced: (
          <span className="text-slate-800 text-xs sm:text-sm font-medium">
            Till 20% **
          </span>
        ),
        premium: (
          <span className="text-slate-800 text-xs sm:text-sm font-medium">
            Till 10% **
          </span>
        ),
      },
      {
        featureName: "Referencing style check",
        elite: (
          <span className="text-slate-800 text-xs sm:text-sm">
            Accuracy and consistent usage
          </span>
        ),
        advanced: (
          <span className="text-slate-800 text-xs sm:text-sm">
            Accuracy and consistent usage
          </span>
        ),
        premium: (
          <span className="text-slate-800 text-xs sm:text-sm">
            Consistent usage
          </span>
        ),
      },
      {
        featureName: "Coherence, clarity, and consistency",
        elite: checkIcon,
        advanced: crossIcon,
        premium: crossIcon,
      },
      {
        featureName: "Journal cover letter and manuscript assessment report",
        elite: checkIcon,
        advanced: crossIcon,
        premium: crossIcon,
      },
      {
        featureName: "Incorporating reviewers' responses",
        elite: checkIcon,
        advanced: crossIcon,
        premium: crossIcon,
      },
      {
        featureName: "Check the manuscript with responses",
        elite: checkIcon,
        advanced: crossIcon,
        premium: crossIcon,
      },
    ];

    return (
      <div className="w-full bg-slate-50 py-8 sm:py-12 text-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {/* SECTION 1: Collapsible Green Expectation Accordion */}
          <section className="w-full">
            <div className="rounded-md overflow-hidden border border-emerald-900 shadow-sm">
              {/* Clickable Header Banner */}
              <button
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                className="w-full bg-[#0d3b36] hover:bg-[#092b27] transition-colors py-3 px-4 sm:px-6 flex items-center justify-between text-white text-left font-semibold text-sm sm:text-base focus:outline-none"
                aria-expanded={isAccordionOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-mono font-bold leading-none">
                    {isAccordionOpen ? "−" : "+"}
                  </span>
                  <span>
                    What Authors Can Expect From Our Manuscript Editors?
                  </span>
                </div>
              </button>

              {/* Collapsible Content Area */}
              {isAccordionOpen && (
                <div className="bg-white p-5 sm:p-8 text-slate-700 border-t border-slate-200">
                  <p className="text-sm sm:text-base font-normal mb-4">
                    All Pubrica authors will experience the full gamut of
                    manuscript editing services, including:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm list-disc pl-5 text-slate-700 leading-relaxed">
                    <li>
                      Our editors ensure clear and fluid flow with extensive
                      checks made in your manuscript.
                    </li>
                    <li>
                      We ensure terminology and professional standards are right
                      throughout your document.
                    </li>
                    <li>
                      We format manuscripts precisely to meet your journal or
                      university requirements.
                    </li>
                    <li>
                      You’ll receive a fully edited document with tracked
                      changes for easy review.
                    </li>
                    <li>
                      Unlimited editing and support for response letters to
                      perfect your manuscript.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* SECTION 2: Major Types Of Manuscripts Covered */}
          <section className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0d3b36] mb-3">
              Major Types Of Manuscripts Covered
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Each subject area and associated journals have varying
              requirements for manuscript format. Pubrica supports every type of
              manuscript. Here are the most popular manuscript types Pubrica
              covers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6 text-left">
              {manuscriptTypes.map((type) => (
                <div key={type.id} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0d3b36] text-white flex items-center justify-center flex-shrink-0 text-xs">
                    ➔
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {type.title}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: Manuscript Editing According To Style Guides */}
          <section className="text-center pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0d3b36] mb-3">
              Manuscript Editing According To Style Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Every subject area has its own rules and regulations for
              manuscript format and conventions associated with terminology and
              notations. Our manuscript editors are formatting specialists to
              ensure the precision of terminology and conventions related to
              your discipline. They have broad and deep experience in editing
              services for research papers and manuscript formatting according
              to key style guides.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6 text-left">
              {styleGuides.map((guide) => (
                <div key={guide.id} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0d3b36] text-white flex items-center justify-center flex-shrink-0 text-xs">
                    ➔
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {guide.title}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: Recent Publications */}
          <section className="text-center pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0d3b36] mb-8">
              Recent Publications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPublications.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm flex flex-col justify-between text-left hover:shadow-md transition-shadow"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-3 leading-snug">
                      {pub.journalTitle}
                    </h3>

                    <div className="flex gap-4 mb-4 items-start">
                      {/* Publication Journal Cover */}
                      <div className="w-20 h-28 relative flex-shrink-0 border border-slate-200 bg-slate-100 rounded overflow-hidden">
                        <Image
                          src={pub.coverImage}
                          alt={pub.journalTitle}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Metadata details */}
                      <div className="text-xs space-y-1.5 text-slate-600">
                        <p>
                          <strong className="text-slate-800">Title:</strong>{" "}
                          {pub.paperTitle}
                        </p>
                        <p>
                          <strong className="text-slate-800">Author:</strong>{" "}
                          {pub.author}
                        </p>
                        <p>
                          <strong className="text-slate-800">Publisher:</strong>{" "}
                          {pub.publisher}
                        </p>
                        <p>
                          <strong className="text-slate-800">
                            Impact Factor:
                          </strong>{" "}
                          {pub.impactFactor}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Visit Link Button */}
                  <Link
                    href={pub.linkUrl}
                    className="mt-2 inline-block w-fit px-6 py-1.5 bg-[#121c4e] text-white font-medium text-xs rounded hover:bg-[#0a1236] transition-colors text-center"
                  >
                    Visit
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: Manuscript Editing Support Packages */}
          <section className="text-center pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0d3b36] mb-8">
              Manuscript Editing Support Packages
            </h2>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    <th className="p-4 text-xs sm:text-sm font-bold text-slate-800 w-2/5 leading-snug">
                      Top-grade manuscript editing by SMEs to ensure acceptance
                      by the publisher. In the event of any lapses, we will
                      recast your work free of charge.
                    </th>
                    <th className="p-4 text-center border-l border-slate-200 w-1/5">
                      <span className="font-extrabold text-slate-900 block text-sm sm:text-base">
                        ELITE
                      </span>
                      <span className="text-[11px] font-normal text-slate-500 leading-tight block">
                        Top-level manuscript support.
                      </span>
                    </th>
                    <th className="p-4 text-center border-l border-slate-200 w-1/5">
                      <span className="font-extrabold text-slate-900 block text-sm sm:text-base">
                        ADVANCED
                      </span>
                      <span className="text-[11px] font-normal text-slate-500 leading-tight block">
                        High-level manuscript support.
                      </span>
                    </th>
                    <th className="p-4 text-center border-l border-slate-200 w-1/5">
                      <span className="font-extrabold text-slate-900 block text-sm sm:text-base">
                        PREMIUM
                      </span>
                      <span className="text-[11px] font-normal text-slate-500 leading-tight block">
                        Mid-level manuscript support
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packageFeatures.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-slate-200 ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <td className="p-3.5 text-xs sm:text-sm font-medium text-slate-700">
                        {row.featureName}
                      </td>
                      <td className="p-3.5 text-center border-l border-slate-200">
                        {row.elite}
                      </td>
                      <td className="p-3.5 text-center border-l border-slate-200">
                        {row.advanced}
                      </td>
                      <td className="p-3.5 text-center border-l border-slate-200">
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Call-to-Action Action Button */}
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-block w-full max-w-xl py-3.5 px-8 bg-[#b80000] hover:bg-[#940000] text-white font-bold text-base rounded transition-colors shadow-md text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  };
