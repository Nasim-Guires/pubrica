"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";

interface AccordionItem {
  title: string;
  description: string;
  link?: string;
  separator?: string;
}

interface AccordionSection {
  title: string;
  type: "cards" | "list";
  items: AccordionItem[];
}

const accordionData: AccordionSection[] = [
  {
    title: "Ethical Guidelines",
    type: "cards",
    items: [
      {
        title: "PRISMA",
        description:
          "(Preferred Reporting Items for Systematic Reviews and Meta-Analyses)",
      },
      {
        title: "MARS",
        description: "(Meta-Analysis Reporting Standards)",
        link: "/services/research-services/meta-analysis/meta-analysis-reporting-standards/",
      },
      {
        title: "MOOSE",
        description:
          "(Meta-analysis of Observational Studies in Epidemiology)",
      },
    ],
  },
  {
    title: "Professional Standards We Uphold",
    type: "list",
    items: [
      {
        title: "Conflict of Interest (COI) Declarations",
        description:
          "Transparent disclosure of financial or professional interests.",
      },
      {
        title: "Data Transparency & Traceability",
        description:
          "All data sources, statistical methods, and analysis tools are cited and reproducible.",
      },
      {
        title: "Journal-Specific Compliance",
        description:
          "Manuscripts are tailored to meet the formatting and ethical standards of your targeted journal (e.g., ICMJE, Elsevier, Springer).",
      },
    ],
  },
  {
    title: "Software & Tools Aligned with Best Practices",
    type: "list",
    items: [
      {
        title: "RevMan, STATA, R (meta, metafor packages)",
        description: "for statistical accuracy",
        separator: " – ",
      },
      {
        title: "Covidence, Rayyan",
        description: "for systematic screening",
        separator: " – ",
      },
      {
        title: "GRADEpro GDT",
        description: "for evaluating the strength of evidence",
        separator: " – ",
      },
    ],
  },
];

export default function MetaAnalysisComplianceSection() {
  // Set initial state to -1 so all cards/accordions are closed by default
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="max-w-[1100px] my-4 mx-auto px-5 font-sans">
      <h2 className="text-3xl font-bold text-[#163D44] mb-1">
        Our Compliance and Guideline Standards
      </h2>

      <h3 className="text-xl text-[#163D44] mb-2">
        Ensuring Scientific Integrity and Global Publication Readiness
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        At Pubrica, we strictly adhere to internationally recognized
        meta-analysis guidelines and ethical standards to ensure your research
        meets the highest levels of scientific accuracy, transparency, and
        credibility. Our compliance framework guarantees that your meta-analysis
        is aligned with the expectations of top-tier peer-reviewed journals.
      </p>

      {accordionData.map((section, index) => (
        <div key={section.title} className="mb-2.5">
          {/* Accordion Header Bar */}
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full bg-[#0d3133] text-white border-none py-3 px-5 text-lg font-semibold cursor-pointer flex items-center text-left"
          >
            <span className="mr-4 text-xl font-bold">
              {openIndex === index ? "−" : "+"}
            </span>
            {section.title}
          </button>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="py-4 bg-white">
              {/* Card View Layout for Ethical Guidelines */}
              {section.type === "cards" ? (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                  {section.items.map((item) => {
                    const isMars = item.title === "MARS" && item.link;

                    const CardContent = (
                      <>
                        <strong className="text-lg mb-2 block text-black">
                          {item.title}
                        </strong>
                        <span
                          className={`text-sm leading-snug ${isMars
                              ? "text-blue-600"
                              : "text-gray-600"
                            }`}
                        >
                          {item.description}
                        </span>
                      </>
                    );

                    return isMars ? (
                      <Link
                        key={item.title}
                        href={item.link!}
                        className="group border border-black rounded-lg p-4 text-center no-underline text-inherit flex flex-col justify-center items-center hover:border-blue-600 hover:shadow-md transition-all duration-200"
                      >
                        {CardContent}
                      </Link>
                    ) : (
                      <div
                        key={item.title}
                        className="border border-black rounded-lg p-4 text-center flex flex-col justify-center items-center"
                      >
                        {CardContent}
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Bulleted List Layout for other sections */
                <ul className="m-0 pl-5 leading-normal list-disc">
                  {section.items.map((item) => (
                    <li key={item.title} className="mb-2 text-red-600">
                      <div className="text-gray-800 inline">
                        <strong className="text-black">{item.title}</strong>
                        {item.separator || ": "}
                        <span>{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Sample Work Section */}
      <div className="mt-4">
        <PubricaSampleWorkCard
          bookCoverImage={{
            src: "/images/research-services/meta-analysis/Meta-Analysis-Service-Sample-Work.png",
            alt: "Meta-analysis sample work",
            width: 320,
            height: 320,
          }}
          sections={[
            {
              heading: "Meta-Analysis Service Sample Work",
              button: {
                label: "Discover More",
                url: "/insights/individual-patient-data-from-randomized-trials/",
              },
            },
            {
              heading: "Download the full Report Now",
              descriptionSegments: [
                {
                  text: "Explore our meta-analysis sample work, meticulously crafted to align with journal-specific formatting, methodological rigor (e.g. ",
                },
                {
                  text: "PRISMA",
                  url: "https://www.prisma-statement.org/prisma-2020-checklist",
                },
                {
                  text: ", MARS), and submission deadlines, ensuring successful academic or clinical publication.",
                },
              ],
              button: {
                label: "Discover More",
                url: "/insights/sample-work",
              },
            },
          ]}
          footerDisclaimerSegments={[]}
        />
      </div>
    </section>
  );
}