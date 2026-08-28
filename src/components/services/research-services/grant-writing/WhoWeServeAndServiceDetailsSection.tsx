"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  linkText?: string;
  linkUrl?: string;
}

interface StepItem {
  step: number;
  text: string;
}

interface FeatureCard {
  id: string;
  title: string;
  iconSrc: string;
  description: string;
  highlightText?: string;
  needFromYou: string[];
  youllGet: string[];
  howItWorksSteps: StepItem[];
}

const GW_IMG = "/images/research-services/grant-writing";

const audienceCards: AudienceCard[] = [
  {
    id: "academic",
    title: "Academic Researchers and Institutions",
    description:
      "Faculty, postdoctoral researchers, and universities seeking national or international funding benefit from our ",
    linkText: "research proposal writing service.",
    linkUrl: "/academy/grant-writing/confidentiality-in-grant-writing-proposals",
    imageSrc: `${GW_IMG}/Academic-Researchers-and-Institutions.png`,
    altText: "Researcher working on computer in university office",
  },
  {
    id: "healthcare",
    title: "Healthcare Professionals and Clinical Researchers",
    description:
      "Hospitals and clinicians rely on our clinical research grant writing expertise for grants supporting trials and public health initiatives.",
    imageSrc: `${GW_IMG}/Healthcare-Professionals-and-Clinical-Researchers.png`,
    altText: "Healthcare professional reviewing medical data on laptop",
  },
  {
    id: "nonprofit",
    title: "Nonprofit Organizations and NGOs",
    description:
      "Charitable, advocacy, and development-focused organizations are applying for government or private foundation grants to fund projects and community initiatives.",
    imageSrc: `${GW_IMG}/Nonprofit-Organizations-and-NGOs.png`,
    altText: "Non-profit notepad with financial documents and calculator",
  },
  {
    id: "biotech",
    title: "Biotech, Pharma, and Industry Partners",
    description:
      "Startups and established companies are applying for R&D grants, SBIR/STTR programs, or public-private partnerships to advance innovation and product development.",
    imageSrc: `${GW_IMG}/Biotech-Pharma-and-Industry-Partners.png`,
    altText: "Lab scientists working in modern research laboratory",
  },
  {
    id: "independent",
    title: "Independent Consultants & Grant Seekers",
    description:
      "Freelancers and individuals receive personalised support from experienced ",
    linkText: "grant writing consultants.",
    linkUrl: "/academy/grant-writing/communicating-research-impact-grant-applications/",
    imageSrc: `${GW_IMG}/Independent-Consultants-Grant-Seekers.png`,
    altText: "Independent consultant with headset working at desk",
  },
  {
    id: "government",
    title: "Government & Public Sector Bodies",
    description:
      "We collaborate with local, regional, and national government bodies to craft impactful proposals that align with funding agency priorities and public policy goals.",
    imageSrc: `${GW_IMG}/Government-Public-Sector-Bodies.png`,
    altText: "Public sector team presenting data on large monitor screen",
  },
];

const serviceDetails: FeatureCard[] = [
  {
    id: "writing-dev",
    title: "Grant Proposal Writing and Development",
    iconSrc: `${GW_IMG}/Grant-Proposal-Writing-and-Development.png`,
    description:
      "Our grant proposal writing services are tailored to meet the specific needs of your research project. We craft compelling proposals that clearly articulate novelty, significance, and impact while aligning with funder priorities.",
    highlightText: "grant writing",
    needFromYou: [
      "A grant proposal outline",
      "Any reference materials (e.g., related research or past research manuscripts)",
      "Target funding body details and guidelines",
    ],
    youllGet: [
      "A professionally written, persuasive grant proposal",
      "A grant writing summary and expert feedback from your writer",
      "Detailed annotations and commentary on your submitted materials for transparency and learning",
    ],
    howItWorksSteps: [
      {
        step: 1,
        text: "You send us the proposal outline and related documents; complete our detailed questionnaire.",
      },
      {
        step: 2,
        text: "Meet with our grant writing expert and project manager to decide the outline and direction of your proposal.",
      },
      {
        step: 3,
        text: "Our grant writing expert drafts a proposal tailored to your target funding body.",
      },
      {
        step: 4,
        text: "Review and refine the draft with our grant writing expert to finalize your proposal.",
      },
    ],
  },
  {
    id: "review",
    title: "Grant Proposal Review",
    iconSrc: `${GW_IMG}/Grant-Proposal-Review.png`,
    description:
      "Our professional grant review service evaluates your draft proposal to identify key problem areas such as feasibility, clarity, and methodology alignment. We also ensure your proposal meets expectations for research grant writing services and funding success.",
    needFromYou: [
      "Your drafted grant proposal",
      "Any reference materials (e.g., related research or past research manuscripts)",
      "Target funding body details and guidelines",
      "Funding body comments on the grant review report (preliminary, detailed, or final review) if your proposal has already been reviewed",
    ],
    youllGet: [
      "A detailed grant proposal review report & reviewer's message",
      "Detailed feedback on the relevance of the documents you’ve sent us, if any",
    ],
    howItWorksSteps: [
      {
        step: 1,
        text: "Send us your materials and complete our detailed questionnaire.",
      },
      {
        step: 2,
        text: "Our grant expert reviews your proposal and supplies detailed comments.",
      },
      {
        step: 3,
        text: "Receive a report with analysis of strengths and weaknesses and actionable suggestions.",
      },
      {
        step: 4,
        text: "After-sales support: We will help you address the feedback from the grant review board.",
      },
    ],
  },
  {
    id: "editing",
    title: "Grant Proposal Editing",
    iconSrc: `${GW_IMG}/Grant-Proposal-Editing.png`,
    description:
      "Our grant proposal editing experts improve clarity, coherence, and persuasiveness while ensuring alignment with funder priorities. This service is ideal for researchers seeking research grant proposal writing and editing support before submission.",
    needFromYou: [
      "Your draft grant proposal",
      "Any reference materials (e.g., research papers or manuscripts)",
      "Target funding body details and guidelines",
      "Funding body comments on the grant review report (preliminary review, detailed review, or final review), if you have submitted your proposal",
    ],
    youllGet: [
      "A well-edited grant proposal",
      "Grant editing summary & editor's report",
      "Detailed feedback on the relevance of the documents you’ve sent us, if any",
    ],
    howItWorksSteps: [
      {
        step: 1,
        text: "Send us your draft grant proposal and complete our detailed questionnaire.",
      },
      {
        step: 2,
        text: "Our grant editing expert revises your proposal for clarity and impact.",
      },
      {
        step: 3,
        text: "Revision rounds: The editor incorporates your feedback after review.",
      },
      {
        step: 4,
        text: "Receive the final grant proposal with comments and suggestions for improvement.",
      },
    ],
  },
];

export default function WhoWeServeAndServiceDetailsSection() {
  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>(null);

  const toggleHowItWorks = (id: string) => {
    setActiveHowItWorksId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full text-slate-800">
      {/* ========================================================= */}
      {/* 1. WHO WE SERVE SECTION                                   */}
      {/* ========================================================= */}
      <section
        aria-labelledby="who-we-serve-heading"
        className="w-full bg-white py-6 sm:py-7 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <header className="space-y-3">
            <h2
              id="who-we-serve-heading"
              className="text-2xl sm:text-3xl font-bold text-[#0e3b38] tracking-tight"
            >
              Who We Serve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
              At Pubrica, we offer tailored research{" "}
              <Link
                href="services/research-services/grant-writing/research-grant-proposal-writing-guide"
                className="text-sky-600 font-medium"
              >
                grant writing services
              </Link>{" "}
              to a diverse range of clients across academic, clinical,
              nonprofit, and industry sectors.
            </p>
          </header>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceCards.map((card) => (
              <div
                key={card.id}
                className="group relative h-64 sm:h-72 rounded-sm overflow-hidden shadow-md cursor-pointer bg-black"
              >
                {/* 1. Base Image */}
                <Image
                  src={card.imageSrc}
                  alt={card.altText}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* 2. Default Bottom Gradient Bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* 3. Full Black Hover Overlay */}
                <div className="absolute inset-0 bg-black p-6 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-white space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {card.description}
                    {card.linkText && (
                      <Link
                        href={card.linkUrl || "#"}
                        className="text-sky-400 font-normal inline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {card.linkText}
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ACCELERATE GRANT WRITING CTA BANNER                    */}
      {/* ========================================================= */}
      <section className="w-full bg-[#03281e] py-6 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Accelerate your Grant Writing Service with Pubrica
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl mx-auto font-light">
            We work closely with clients to develop compelling grant proposals
            that clearly articulate the significance and potential impact of
            their research while aligning with the priorities and requirements
            of the funding bodies.
          </p>
          <div>
            <GetFreeQuoteButton />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. DETAILED SERVICE BREAKDOWN CARDS                       */}
      {/* ========================================================= */}
      <section className="w-full bg-slate-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          {serviceDetails.map((service) => {
            const isOpen = activeHowItWorksId === service.id;

            return (
              <div
                key={service.id}
                className="bg-[#e6f7ff]/70 border border-sky-100 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col space-y-6"
              >
                {/* Main Card Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left Side: Icon and Service Title */}
                  <div className="md:col-span-4 flex flex-col items-center justify-center text-center space-y-4 md:border-r md:border-sky-200/80 md:pr-6 h-full">
                    <div className="p-3 bg-white/80 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={service.iconSrc}
                        alt=""
                        width={80}
                        height={80}
                        className="object-contain w-20 h-20"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0e3b38] leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right Side: Description and Need/Get Grids */}
                  <div className="md:col-span-8 space-y-6">
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Two Column Grid: What We Need & What You'll Get */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {/* Column 1: What we need from you */}
                      <div className="space-y-3">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          What we need from you
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                          {service.needFromYou.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-red-600 font-bold text-base leading-none mt-0.5">
                                •
                              </span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: What you'll get */}
                      <div className="space-y-3">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          What you'll get
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                          {service.youllGet.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-red-600 font-bold text-base leading-none mt-0.5">
                                •
                              </span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Interactive Action Links */}
                    <div className="pt-4 flex flex-col items-end gap-1">
                      <button
                        type="button"
                        onClick={() => toggleHowItWorks(service.id)}
                        className="inline-flex items-center text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors duration-200 hover:underline gap-1 group/link cursor-pointer"
                      >
                        <span>See How It Works</span>
                        <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                          →
                        </span>
                      </button>

                      {isOpen && (
                        <button
                          type="button"
                          onClick={() => setActiveHowItWorksId(null)}
                          className="text-xs font-medium text-sky-600 hover:text-sky-800 transition-colors cursor-pointer"
                        >
                          Close X
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded "How It Works!" Section */}
                {isOpen && (
                  <div className="pt-6 border-t border-sky-200/60 transition-all duration-300 space-y-6">
                    <h3 className="text-center text-xl sm:text-2xl font-bold text-slate-800">
                      How It Works!
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.howItWorksSteps.map((stepObj) => (
                        <div
                          key={stepObj.step}
                          className="bg-white rounded-xl p-5 shadow-sm text-center flex flex-col items-center justify-start space-y-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-red-500 text-white font-bold flex items-center justify-center text-sm shadow">
                            {stepObj.step}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {stepObj.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}