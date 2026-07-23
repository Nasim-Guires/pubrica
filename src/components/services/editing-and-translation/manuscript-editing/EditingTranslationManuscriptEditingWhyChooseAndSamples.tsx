"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface WhyChooseItem {
  id: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
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
    const [activeTab, setActiveTab] = useState<
      "manuscript" | "table" | "figure"
    >("manuscript");

    // Data for "Why Choose" section with hover cards
    const whyChooseData: WhyChooseItem[] = [
      {
        id: "expert-editing",
        title: "Expert Editing and Proofreading",
        description: (
          <>
            Highly trained and native English-speaking editors can offer
            extensive{" "}
            <Link
              href="/services/editing-and-translation/manuscript-editing"
              className="text-sky-600 hover:underline group-hover:text-sky-300"
            >
              subject-matter expertise
            </Link>{" "}
            to ensure your final product meets the highest academic standards.
          </>
        ),
        icon: (
          <svg
            className="w-6 h-6 text-emerald-700 group-hover:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
      },
      {
        id: "quality-assurance",
        title: "Thorough Quality Assurance",
        description:
          "Two editors review each manuscript under our journal manuscript editing services framework.",
        icon: (
          <svg
            className="w-6 h-6 text-emerald-700 group-hover:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
      },
      {
        id: "confidentiality",
        title: "Commitment to Confidentiality",
        description:
          "We ensure strict confidentiality in editing, with ISO/IEC 27001:2013 certification guaranteeing complete security for all submitted manuscripts.",
        icon: (
          <svg
            className="w-6 h-6 text-emerald-700 group-hover:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
      },
      {
        id: "exclusive-benefits",
        title: "Exclusive Pubrica Benefits",
        description:
          "Multiple editing rounds, unlimited Q&A, and certification are included in our professional editing for journals.",
        icon: (
          <svg
            className="w-6 h-6 text-emerald-700 group-hover:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        ),
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
        avatarSrc: "/images/experts/dr-arjun-mehta.webp",
        flagSrc: "/images/flags/in.svg",
        flagAlt: "India Flag",
      },
      {
        id: "dr-kavita-reddy",
        name: "Dr. Kavita Reddy",
        degree: "PhD in Biomedical Sciences",
        institution: "University of Cambridge, UK",
        experience: "6+ Years of Experience",
        papersEdited: "750+ Papers Edited",
        avatarSrc: "/images/experts/dr-kavita-reddy.webp",
        flagSrc: "/images/flags/gb.svg",
        flagAlt: "UK Flag",
      },
      {
        id: "dr-sarah-thompson",
        name: "Dr. Sarah Thompson",
        degree: "Master's in Molecular Biology",
        institution: "Harvard University, USA",
        experience: "4+ Years of Experience",
        papersEdited: "550+ Papers Edited",
        avatarSrc: "/images/experts/dr-sarah-thompson.webp",
        flagSrc: "/images/flags/us.svg",
        flagAlt: "USA Flag",
      },
    ];

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
                href="/services/editing-and-translation/manuscript-editing"
                className="text-sky-600 hover:underline font-medium"
              >
                manuscript editing services
              </Link>{" "}
              for researchers with precision and reliability, ensuring
              successful publication outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseData.map((item) => (
                <div
                  key={item.id}
                  className="group border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300 hover:bg-black hover:border-black cursor-pointer"
                >
                  {/* Card Header Top Box */}
                  <div className="bg-emerald-50/70 p-4 border-b border-slate-100 flex items-center justify-between transition-colors duration-300 group-hover:bg-slate-900 group-hover:border-slate-800">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg transition-colors duration-300 group-hover:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-slate-400 group-hover:text-slate-200 font-medium text-lg">
                      —
                    </span>
                  </div>

                  {/* Card Text Content */}
                  <div className="p-5 text-sm sm:text-base text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-200">
                    {item.description}
                  </div>
                </div>
              ))}
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
                  className={`py-2 px-4 font-semibold text-sm sm:text-base transition-colors rounded-t-md ${
                    activeTab === "manuscript"
                      ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Manuscript Format
                </button>
                <button
                  onClick={() => setActiveTab("table")}
                  className={`py-2 px-4 font-semibold text-sm sm:text-base transition-colors rounded-t-md ${
                    activeTab === "table"
                      ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Table Format
                </button>
                <button
                  onClick={() => setActiveTab("figure")}
                  className={`py-2 px-4 font-semibold text-sm sm:text-base transition-colors rounded-t-md ${
                    activeTab === "figure"
                      ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Figure Format
                </button>
              </div>

              {/* Tab Preview Area with Dotted Border */}
              <div className="border border-dashed border-blue-200 rounded-lg p-4 sm:p-6 bg-slate-50 min-h-[400px] flex items-center justify-center relative">
                {activeTab === "manuscript" && (
                  <div className="w-full max-w-3xl bg-white p-6 rounded shadow-sm text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-emerald-950 text-white font-bold text-xs px-2 py-1 rounded">
                      PUBRICA Knowledge Works
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 pt-6">
                      After general anesthesia, the patient was positioned in
                      lithotomy, and 4 ml of 1% methylene blue dye was injected
                      around the perimeter of the uterine cervical tumor (1 ml
                      each at the 12, 3, 6, and 9 o'clock position) using a
                      25-gauge spinal needle. Following injection, the abdominal
                      area was{" "}
                      <span className="line-through text-amber-600">
                        sterilized
                      </span>{" "}
                      <span className="text-orange-600 font-semibold">
                        sterie
                      </span>{" "}
                      and draped, and either a laparotomy or laparoscopy was
                      performed. A Sentinel Lymph Node (SLN) was identified as
                      any blue-colored node or lymphatic vessel leading to a
                      node within 20 minutes of dye injection. All dye
                      injections in the study participants were consistently
                      performed by the same surgeon.
                    </p>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-2">
                      2.3.2 SLN mapping:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      During surgery (laparotomy or laparoscopy), a{" "}
                      <span className="line-through text-amber-600">
                        detailed search for sins
                      </span>{" "}
                      2,{" "}
                      <span className="text-orange-600 font-semibold">
                        detailed search for SINS
                      </span>{" "}
                      in the bilateral pelvic area was carried out within{" "}
                      <span className="text-amber-600">20</span>{" "}
                      <span className="text-orange-600 font-semibold">
                        twenty
                      </span>{" "}
                      minutes of the dye injection. Identified SLNs were
                      documented with their number and position. Unsuccessful
                      SLN mapping, where no blue stained{" "}
                      <span className="text-orange-600 font-semibold">
                        lymph-node
                      </span>{" "}
                      was found, was also recorded. All identified SLNs were
                      carefully removed for frozen section analysis.
                      Additionally, all patients underwent a complete bilateral
                      pelvic lymphadenectomy - and radical{" "}
                      <span className="text-orange-600 font-semibold">
                        hystectomy
                      </span>{" "}
                      <span className="text-blue-600 font-semibold">
                        hysterectomy
                      </span>
                      , regardless of the initial pathology report. The{" "}
                      <span className="text-amber-600">sins</span>{" "}
                      <span className="text-orange-600 font-semibold">
                        Si.N's
                      </span>
                      , the dissected pelvic lymph nodes, and the radical{" "}
                      <span className="text-orange-600 font-semibold">
                        hystectomy
                      </span>{" "}
                      <span className="text-blue-600 font-semibold">
                        hysterectomy
                      </span>{" "}
                      specimen were all analyzed using final part in sections.
                    </p>
                  </div>
                )}

                {activeTab === "table" && (
                  <div className="w-full bg-white p-4 rounded shadow-sm overflow-x-auto relative">
                    <div className="absolute top-2 right-2 bg-emerald-950 text-white font-bold text-xs px-2 py-1 rounded">
                      PUBRICA Knowledge Works
                    </div>
                    <table className="w-full text-xs text-left border-collapse border border-slate-300 mt-8">
                      <thead>
                        <tr className="bg-slate-100">
                          <th
                            className="border border-slate-300 p-2 font-bold"
                            rowSpan={2}
                          >
                            Parameter
                          </th>
                          <th
                            className="border border-slate-300 p-2 font-bold text-center"
                            colSpan={3}
                          >
                            Part 1
                          </th>
                          <th className="border border-slate-300 p-2 font-bold text-center">
                            Part 2
                          </th>
                          <th
                            className="border border-slate-300 p-2 font-bold text-center"
                            rowSpan={2}
                          >
                            Total (N = 54)
                          </th>
                        </tr>
                        <tr className="bg-slate-100">
                          <th className="border border-slate-300 p-2">
                            Placebo (n = 12)
                          </th>
                          <th className="border border-slate-300 p-2">
                            Felzartamab 2-dose (n = 12)
                          </th>
                          <th className="border border-slate-300 p-2">
                            Felzartamab 5-dose (n = 11)
                          </th>
                          <th className="border border-slate-300 p-2">
                            Felzartamab 9-dose (n = 13)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-300 p-2">
                            Number of infusions per patient, mean (SD)
                          </td>
                          <td className="border border-slate-300 p-2">
                            8.7 (0.7)
                          </td>
                          <td className="border border-slate-300 p-2">
                            8.4 (1.7)
                          </td>
                          <td className="border border-slate-300 p-2">
                            6.5 (3.6)
                          </td>
                          <td className="border border-slate-300 p-2">
                            6.9 (3.2)
                          </td>
                          <td className="border border-slate-300 p-2">
                            7.8 (2.5)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-2">
                            Duration of study drug exposure, d, mean (SD)
                          </td>
                          <td className="border border-slate-300 p-2">
                            140.8 (20.4)
                          </td>
                          <td className="border border-slate-300 p-2">
                            135.4 (37.4)
                          </td>
                          <td className="border border-slate-300 p-2">
                            106.4 (67.7)
                          </td>
                          <td className="border border-slate-300 p-2">
                            110.8 (61.4)
                          </td>
                          <td className="border border-slate-300 p-2">
                            125.2 (48.2)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-[10px] text-slate-400 mt-2 text-center">
                      Copyright © 2025 pubrica. No part of this document may be
                      published without permission of the author
                    </p>
                  </div>
                )}

                {activeTab === "figure" && (
                  <div className="w-full flex flex-col items-center justify-center p-4 bg-white rounded shadow-sm relative">
                    <div className="absolute top-2 right-2 bg-emerald-950 text-white font-bold text-xs px-2 py-1 rounded">
                      PUBRICA Knowledge Works
                    </div>
                    <div className="relative w-full max-w-md h-64 mt-6">
                      <Image
                        src="/images/services/sample-figure-graph.webp"
                        alt="Probability of retention survival analysis graph sample"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 text-center">
                      Copyright © 2025 pubrica. No part of this document may be
                      published without permission of the author
                    </p>
                  </div>
                )}
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
                  <button className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors mt-auto">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };
