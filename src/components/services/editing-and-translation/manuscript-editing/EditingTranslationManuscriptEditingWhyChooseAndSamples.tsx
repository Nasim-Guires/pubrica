"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface WhyChooseItem {
  id: string;
  title: string;
  description: React.ReactNode;
  iconSrc: string;
  iconAlt: string;
}

interface Expert {
  id: string;
  name: string;
  degree: string;
  institution: string;
  experience: string;
  papersEdited: string;
  avatarSrc: string;
  flagSrc: string;
  flagAlt: string;
}

export const EditingTranslationManuscriptEditingWhyChooseAndSamples: React.FC =
  () => {
    // State to track which "Why Choose" accordion card is open (null = all closed by default)
    const [openId, setOpenId] = useState<string | null>(null);

    const [activeTab, setActiveTab] = useState<
      "manuscript" | "table" | "figure"
    >("manuscript");

    const sampleWorkImages: Record<
      "manuscript" | "table" | "figure",
      { src: string; alt: string }
    > = {
      manuscript: {
        src: "/images/editing-and-translation/manuscript-editing/Manuscript-editing-sample-work-.png",
        alt: "Manuscript format sample work",
      },
      table: {
        src: "/images/editing-and-translation/manuscript-editing/Manuscript-editing-sample-work-3.png",
        alt: "Table format sample work",
      },
      figure: {
        src: "/images/editing-and-translation/manuscript-editing/Manuscript-editing-sample-work-2.png",
        alt: "Figure format sample work",
      },
    };

    // Data for "Why Choose" section
    const whyChooseData: WhyChooseItem[] = [
      {
        id: "expert-editing",
        title: "Expert Editing and Proofreading",
        description: (
          <>
            Highly trained and native English-speaking editors can offer
            extensive{" "}
            <Link
              href="/subject-matter-experts"
              className="text-sky-600 font-medium hover:underline"
            >
              subject-matter expertise
            </Link>{" "}
            to ensure your final product meets the highest academic standards.
          </>
        ),
        iconSrc:
          "/images/editing-and-translation/manuscript-editing/Expert-Editing-and-Proofreading.png",
        iconAlt: "Expert Editing and Proofreading",
      },
      {
        id: "quality-assurance",
        title: "Thorough Quality Assurance",
        description:
          "Two editors review each manuscript under our journal manuscript editing services framework.",
        iconSrc:
          "/images/editing-and-translation/manuscript-editing/Thorough-Quality-Assurance.png",
        iconAlt: "Thorough Quality Assurance",
      },
      {
        id: "confidentiality",
        title: "Commitment to Confidentiality",
        description:
          "We ensure strict confidentiality in editing, with ISO/IEC 27001:2013 certification guaranteeing complete security for all submitted manuscripts.",
        iconSrc:
          "/images/editing-and-translation/manuscript-editing/Commitment-to-Confidentiality.png",
        iconAlt: "Commitment to Confidentiality",
      },
      {
        id: "exclusive-benefits",
        title: "Exclusive Pubrica Benefits",
        description:
          "Multiple editing rounds, unlimited Q&A, and certification are included in our professional editing for journals.",
        iconSrc:
          "/images/editing-and-translation/manuscript-editing/Exclusive-Pubrica-Benefits.png",
        iconAlt: "Exclusive Pubrica Benefits",
      },
    ];

    // Data for Experts section
    const experts: Expert[] = [
      {
        id: "dr-arjun-mehta",
        name: "Dr. Arjun Mehta",
        degree: "PhD in Clinical Research",
        institution: "All India Institute of Medical Sciences, India",
        experience: "5+ Years of Experience",
        papersEdited: "600+ Papers Edited",
        avatarSrc:
          "/images/editing-and-translation/manuscript-editing/Dr-arjun-mehta.png",
        flagSrc: "/images/editing-and-translation/manuscript-editing/india.png",
        flagAlt: "India Flag",
      },
      {
        id: "dr-kavita-reddy",
        name: "Dr. Kavita Reddy",
        degree: "PhD in Biomedical Sciences",
        institution: "University of Cambridge, UK",
        experience: "6+ Years of Experience",
        papersEdited: "750+ Papers Edited",
        avatarSrc:
          "/images/editing-and-translation/manuscript-editing/kavita-reddy-.png",
        flagSrc:
          "/images/editing-and-translation/manuscript-editing/uk-flag-.png",
        flagAlt: "UK Flag",
      },
      {
        id: "dr-sarah-thompson",
        name: "Dr. Sarah Thompson",
        degree: "Master's in Molecular Biology",
        institution: "Harvard University, USA",
        experience: "4+ Years of Experience",
        papersEdited: "550+ Papers Edited",
        avatarSrc:
          "/images/editing-and-translation/manuscript-editing/Dr.-Sarah-Thompson.png",
        flagSrc: "/images/editing-and-translation/scientific-editing/usa-.png",
        flagAlt: "USA Flag",
      },
    ];

    const toggleAccordion = (id: string) => {
      setOpenId((prev) => (prev === id ? null : id));
    };

    return (
      <div className="w-full bg-slate-50 py-12 sm:py-16 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* SECTION 1: Why Choose Pubrica's Manuscript Editing Services */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Why choose Pubrica’s Manuscript Editing Services?
            </h2>
            <p className="text-base text-slate-700 mb-8 max-w-4xl">
              At Pubrica, we provide best{" "}
              <Link
                href="/services/editing-and-translation/manuscript-editing/top-benefits-of-manuscript-editing-services"
                className="text-sky-600 font-medium"
              >
                manuscript editing services
              </Link>{" "}
              for researchers with precision and reliability, ensuring
              successful publication outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="rounded-lg overflow-hidden border border-emerald-100 bg-[#f1fcf6] transition-all duration-300"
                  >
                    {/* Compact Header Pill */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#e4f7ed] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.iconSrc}
                          alt={item.iconAlt}
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain flex-shrink-0"
                        />
                        <h3 className="font-semibold text-emerald-950 text-sm sm:text-base leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-emerald-900 font-bold text-lg leading-none ml-2">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Expandable Body */}
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-emerald-200/50">
                        {item.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 2: Interactive Sample Work Showcase */}
          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Check Out The Sample Work Of Our Manuscript Editing Service
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-8">
              Refine your language, restructure your arguments, or address any
              inconsistencies over multiple rounds
            </p>

            {/* Card Container */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 sm:p-8 max-w-5xl mx-auto">
              {/* Tabs Header */}
              <div className="flex justify-center border-b border-slate-200 mb-6 gap-2 sm:gap-4">
                <button
                  onClick={() => setActiveTab("manuscript")}
                  className={`py-2 px-4 font-semibold text-sm sm:text-base transition-colors rounded-t-md ${activeTab === "manuscript"
                      ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  Manuscript Format
                </button>
                <button
                  onClick={() => setActiveTab("table")}
                  className={`py-2 px-4 font-semibold text-sm sm:text-base transition-colors rounded-t-md ${activeTab === "table"
                      ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  Table Format
                </button>
                <button
                  onClick={() => setActiveTab("figure")}
                  className={`py-2 px-4 font-semibold text-sm sm:text-base transition-colors rounded-t-md ${activeTab === "figure"
                      ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  Figure Format
                </button>
              </div>

              {/* Tab Preview Area with Dotted Border */}
              <div className="border border-dashed border-blue-200 rounded-lg p-4 sm:p-6 bg-slate-50 min-h-[400px] flex items-center justify-center relative">
                <div className="relative w-full min-h-[360px] sm:min-h-[480px]">
                  <Image
                    src={sampleWorkImages[activeTab].src}
                    alt={sampleWorkImages[activeTab].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Meet Our Manuscript Editing Experts */}
          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">
              Meet Our Manuscript Editing Experts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experts.map((expert) => (
                <div
                  key={expert.id}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                >
                  {/* Avatar with Country Flag Badge */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-200 relative">
                      <Image
                        src={expert.avatarSrc}
                        alt={expert.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full overflow-hidden border border-white shadow-sm">
                      <Image
                        src={expert.flagSrc}
                        alt={expert.flagAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {expert.degree}
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    {expert.institution}
                  </p>

                  <div className="w-full border-t border-slate-100 my-3" />

                  {/* Stats */}
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-4">
                    <span>{expert.experience}</span> •{" "}
                    <span>{expert.papersEdited}</span>
                  </p>

                  {/* Read More Link */}
                  <Link href="/about-us/our-editors" className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors mt-auto">
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };