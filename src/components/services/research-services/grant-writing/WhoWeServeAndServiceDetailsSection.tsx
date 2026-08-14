"use client";

import React from "react";
import Image from "next/image";
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

interface FeatureCard {
  id: string;
  title: string;
  iconSrc: string;
  description: string;
  highlightText?: string;
  needFromYou: string[];
  youllGet: string[];
}

const GW_IMG = "/images/research-services/grant-writing";

const audienceCards: AudienceCard[] = [
  {
    id: "academic",
    title: "Academic Researchers and Institutions",
    description:
      "Faculty, postdoctoral researchers, and universities seeking national or international funding benefit from our ",
    linkText: "research proposal writing service.",
    linkUrl: "#research-proposal-writing",
    imageSrc: `${GW_IMG}/Academic-Researchers-and-Institutions.png`,
    altText: "Researcher working on computer in university office",
  },
  {
    id: "healthcare",
    title: "Healthcare Professionals and Clinical Researchers",
    description:
      "Hospitals and clinicians rely on our clinical research grant writing expertise for grants supporting ",
    linkText: "trials and public health initiatives.",
    linkUrl: "#clinical-trials",
    imageSrc: `${GW_IMG}/Healthcare-Professionals-and-Clinical-Researchers.png`,
    altText: "Healthcare professional reviewing medical data on laptop",
  },
  {
    id: "nonprofit",
    title: "Nonprofit Organizations and NGOs",
    description:
      "Charitable, advocacy, and development-focused organizations are applying for government or private foundation grants to fund projects and community initiatives.",
    linkText: "community programs.",
    linkUrl: "#nonprofit-grants",
    imageSrc: `${GW_IMG}/Nonprofit-Organizations-and-NGOs.png`,
    altText: "Non-profit notepad with financial documents and calculator",
  },
  {
    id: "biotech",
    title: "Biotech, Pharma, and Industry Partners",
    description:
      "Startups and established companies are applying for R&D grants, SBIR/STTR programs, or public-private partnerships to advance innovation and product development.",
    linkText: "SBIR/STTR funding requests.",
    linkUrl: "#industry-grants",
    imageSrc: `${GW_IMG}/Biotech-Pharma-and-Industry-Partners.png`,
    altText: "Lab scientists working in modern research laboratory",
  },
  {
    id: "independent",
    title: "Independent Consultants & Grant Seekers",
    description:
      "Freelancers and individuals receive personalised support from experienced grant writing consultants.",
    linkText: "grant writing consultants.",
    linkUrl: "#consultant-support",
    imageSrc: `${GW_IMG}/Independent-Consultants-Grant-Seekers.png`,
    altText: "Independent consultant with headset working at desk",
  },
  {
    id: "government",
    title: "Government & Public Sector Bodies",
    description:
      "We collaborate with local, regional, and national government bodies to craft impactful proposals that align with funding agency priorities and public policy goals.",
    linkText: "grant documentation.",
    linkUrl: "#public-sector-grants",
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
  },
];

export default function WhoWeServeAndServiceDetailsSection() {
  return (
    <div className="w-full text-slate-800">
      {/* ========================================================= */}
      {/* 1. WHO WE SERVE SECTION                                   */}
      {/* ========================================================= */}
      <section
        aria-labelledby="who-we-serve-heading"
        className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
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
              <a
                href="#grant-writing"
                className="text-sky-600 hover:underline font-medium"
              >
                grant writing services
              </a>{" "}
              to a diverse range of clients across academic, clinical,
              nonprofit, and industry sectors.
            </p>
          </header>

          {/* 6-Card Grid with Full-Black Hover Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceCards.map((card) => (
              <div
                key={card.id}
                className="group relative h-64 sm:h-72 rounded-sm overflow-hidden shadow-md cursor-pointer bg-black"
              >
                {/* 1. Base Image (Visible Default State) */}
                <Image
                  src={card.imageSrc}
                  alt={card.altText}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* 2. Default Bottom Gradient Bar (Shows Title Only) */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* 3. Full Black Hover Overlay (Shows Title + Text on Hover) */}
                <div className="absolute inset-0 bg-black p-6 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-white space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {card.description}
                    {card.linkText && (
                      <a
                        href={card.linkUrl || "#"}
                        className="text-sky-400 hover:underline font-normal inline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {card.linkText}
                      </a>
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
      <section className="w-full bg-[#03281e] py-12 px-4 sm:px-6 lg:px-8 text-center text-white">
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
          <GetFreeQuoteButton/>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. DETAILED SERVICE BREAKDOWN CARDS                       */}
      {/* ========================================================= */}
      <section className="w-full bg-slate-50 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          {serviceDetails.map((service) => (
            <div
              key={service.id}
              className="bg-[#e6f7ff]/70 border border-sky-100 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative group"
            >
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

                {/* Interactive Action Link */}
                <div className="pt-4 flex justify-end">
                  <a
                    href={`#how-it-works-${service.id}`}
                    className="inline-flex items-center text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors duration-200 hover:underline gap-1 group/link"
                  >
                    <span>See How It Works</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
