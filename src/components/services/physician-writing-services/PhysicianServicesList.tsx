"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ServiceItem {
  label: string;
  description: string;
}

interface PhysicianServicesListProps {
  imageUrl?: string;
}

export const PhysicianServicesList: React.FC<PhysicianServicesListProps> = ({
  imageUrl,
}) => {
  // Managing visibility states for each accordion group block separately
  const [caseReportOpen, setCaseReportOpen] = useState<boolean>(true);
  const [litReviewOpen, setLitReviewOpen] = useState<boolean>(true);

  // Parsed dataset mapped explicitly from the screenshots provided
  const primaryServicesData: ServiceItem[] = [
    {
      label: "Customized Writing",
      description:
        "Tailored writing services to meet specific research or publication needs.",
    },
    {
      label: "Original Research Article Writing",
      description:
        "Development and writing of original research papers, including hypothesis formation, data analysis, and discussion.",
    },
    {
      label: "Research Proposal Writing",
      description:
        "Assistance in crafting detailed proposals for academic or clinical research projects.",
    },
    {
      label: "Literature Review",
      description:
        "Systematic reviews and meta-analyses to summarize existing research and identify research gaps.",
    },
    {
      label: "Data Collection and Management",
      description:
        "Systematic collection and organization of data, including patient data for research purposes.",
    },
    {
      label: "Statistical Analysis",
      description:
        "Comprehensive statistical services to analyze and interpret research data.",
    },
    {
      label: "Clinical Trial Support",
      description:
        "Writing and documentation support for all phases of clinical trials.",
    },
    {
      label: "Manuscript Preparation",
      description:
        "Assistance in drafting, revising, and finalizing manuscripts for submission to peer-reviewed journals.",
    },
    {
      label: "Citation Management",
      description:
        "Organizing and managing references and citations using various citation management tools.",
    },
    {
      label: "Poster and Presentation Design",
      description:
        "Creation of visually engaging posters and presentations for conferences and seminars.",
    },
    {
      label: "Grant and Proposal Writing",
      description:
        "Support in writing grant applications and research proposals to secure funding.",
    },
    {
      label: "Data Visualization",
      description:
        "Developing graphs, charts, and other visual aids to enhance the presentation of research findings.",
    },
    {
      label: "Literature Search and Database Access",
      description:
        "Conducting thorough literature searches and providing access to relevant academic databases.",
    },
    {
      label: "Ethics and Compliance Assistance",
      description:
        "Guidance on ethical considerations and compliance with regulatory requirements.",
    },
    {
      label: "Collaboration and Communication Facilitation",
      description:
        "Tools and strategies to enhance collaboration and communication among research teams.",
    },
    {
      label: "Qualitative Research Support",
      description:
        "Assistance with designing, conducting, and analyzing qualitative research.",
    },
    {
      label: "Literary Searches and Case Studies",
      description:
        "Detailed searches to support case study development and literature-based research.",
    },
    {
      label: "Translation Services",
      description:
        "Translation of medical documents and research materials, including terminology standardization.",
    },
    {
      label: "Project Management",
      description:
        "Comprehensive management of research projects from inception to completion.",
    },
    {
      label: "Virtual Research Assistance",
      description:
        "Online support for various research activities, facilitating remote collaboration and data handling.",
    },
    {
      label: "Patient Record Organization and Data Entry",
      description:
        "Organizing and entering patient data for research and analysis.",
    },
    {
      label: "Conference Abstract Submission and Presentation Preparation",
      description:
        "Preparing and submitting abstracts for conferences, along with developing presentation materials.",
    },
    {
      label: "Literature Synthesis for Case Reports",
      description:
        "Synthesizing relevant literature to support the development of detailed case reports.",
    },
    {
      label: "Patient Follow-Up Coordination",
      description:
        "Managing patient follow-up activities to gather longitudinal data for studies.",
    },
    {
      label: "Peer-Reviewed Journal Search and Submission",
      description:
        "Identifying suitable journals and managing the submission process for manuscripts.",
    },
    {
      label: "Research Article Formatting",
      description:
        "Ensuring that research articles meet the specific formatting guidelines of target journals.",
    },
    {
      label: "Manuscript Proofreading",
      description:
        "Detailed proofreading to ensure accuracy and clarity of manuscripts.",
    },
    {
      label: "Research Survey Creation and Administration",
      description:
        "Designing and administering surveys for research data collection.",
    },
    {
      label: "Research Progress Reporting",
      description: "Regular reporting on research progress to stakeholders.",
    },
    {
      label: "Data Backup and Security Management",
      description:
        "Ensuring the security and backup of research data to prevent loss and unauthorized access.",
    },
  ];

  return (
    <section className="w-full bg-white py-6 px-6 md:px-12 lg:px-24 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Title Header */}
        <h2 className="text-[#083c4c] text-xl md:text-2xl lg:text-[26px] font-extrabold leading-tight tracking-tight mb-6">
          Physician Writing Support Services Offered by Pubrica
        </h2>

        {/* Top Header & Image Split Block */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 mb-8">
          {/* Left Text Intro */}
          <div className="flex-1">
            <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed text-justify">
              Pubrica provides a comprehensive suite of physician writing
              support services designed to assist healthcare professionals
              throughout their research and publication journey. Our offerings
              are tailored to meet the specific needs of physicians and medical
              researchers, ensuring high-quality, efficient, and effective
              support. Here's an overview of the services we provide:
            </p>
          </div>

          {/* Right Image Feature Container */}
          {imageUrl && (
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="bg-[#113a35] rounded-xl p-1 relative shadow-md">
                <div className="relative w-full h-[200px] md:h-[220px] bg-white rounded-lg overflow-hidden border border-gray-100">
                  <Image
                    src={imageUrl}
                    alt="Physician writing and research support services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Accordions Stack Block wrapper */}
        <div className="space-y-4 mb-8">
          {/* 1. Case Report Preparation Accordion Container */}
          <div className="w-full border border-gray-200 overflow-hidden rounded shadow-sm">
            <button
              type="button"
              onClick={() => setCaseReportOpen(!caseReportOpen)}
              className="w-full bg-[#113a35] text-white flex items-center justify-between px-5 py-3.5 transition-colors duration-150 select-none text-left cursor-pointer"
            >
              <span className="text-sm md:text-[15px] font-bold tracking-wide flex items-center gap-3">
                <span className="font-mono text-base">
                  {caseReportOpen ? "−" : "+"}
                </span>
                Case Report Preparation
              </span>
            </button>

            {caseReportOpen && (
              <div className="bg-[#fcfcfc] px-6 py-4 border-t border-gray-100">
                <p className="text-gray-800 text-sm md:text-[15px] font-normal">
                  Detailed writing and documentation of clinical cases for
                  publication and educational purposes.
                </p>
              </div>
            )}
          </div>

          {/* 2. Clinical Literature Review Accordion Container */}
          <div className="w-full border border-gray-200 overflow-hidden rounded shadow-sm">
            <button
              type="button"
              onClick={() => setLitReviewOpen(!litReviewOpen)}
              className="w-full bg-[#113a35] text-white flex items-center justify-between px-5 py-3.5 transition-colors duration-150 select-none text-left cursor-pointer"
            >
              <span className="text-sm md:text-[15px] font-bold tracking-wide flex items-center gap-3">
                <span className="font-mono text-base">
                  {litReviewOpen ? "−" : "+"}
                </span>
                Clinical Literature Review for Evidence-Based Medicine
              </span>
            </button>

            {litReviewOpen && (
              <div className="bg-white px-6 py-5 border-t border-gray-100">
                <p className="text-gray-700 text-sm md:text-[15px] font-normal mb-5 italic">
                  Comprehensive reviews to support clinical decision-making and
                  research.
                </p>

                {/* Bullets Sub-Items Render Group */}
                <ul className="space-y-3.5 pl-1">
                  {primaryServicesData.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-800 text-sm md:text-[15px] leading-relaxed text-justify"
                    >
                      {/* Crimson Red Bullet Accent Marker */}
                      <span className="text-[#a80000] text-xl leading-none mt-0.5 select-none">
                        &bull;
                      </span>
                      <span className="flex-1">
                        <strong className="text-black font-bold">
                          {item.label}:
                        </strong>{" "}
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Segment Closing Summary Footnote Paragraph */}
        <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed text-justify max-w-6xl mt-6 border-t border-gray-100 pt-6">
          Pubrica's physician writing support services are designed to enhance
          the efficiency and impact of medical research and publication efforts,
          ensuring that healthcare professionals can focus on their primary
          responsibilities while we handle the complexities of research
          documentation and dissemination.
        </p>
      </div>
    </section>
  );
};