"use client";
import Image from "next/image";
import React from "react";

interface PhysicianHeroProps {
  bannerTitle?: string;
  bannerDescription?: string;
  title?: string;
  leadParagraph?: string;
  secondaryLead?: string;
  sectionHeading?: string;
  bodyText1?: string;
  bodyText2?: string;
  bulletTitle?: string;
  bullets?: string[];
  imageUrl?: string;
}

export const PhysicianWritingHero: React.FC<PhysicianHeroProps> = ({
  bannerTitle = "Scientific Research, Analyses, Publication and Communication Services for Practicing Physicians",
  bannerDescription = "Transform your clinical insights into professionally written, publication-ready medical content. Our physician writing services support manuscript writing, editing, case reports, and regulatory submissions, ensuring impactful research outcomes.",
  title = "Professionally Developed, Clinically Accurate Medical Content",
  leadParagraph = "We offer specialized physician writing services tailored to support your clinical research, case reports, and regulatory documentation needs. With over 4000+ global expert medical writers, peer reviewers, and editors—many with MD/PhD qualifications—ensure that your content is scientifically sound, publication-ready in prestigious peer-reviewed international, and compliant with international guidelines.",
  secondaryLead = "Whether it's a case report, clinical study, or regulatory document, we help you publish with confidence.",
  sectionHeading = "Expert in Medical Content and Publishing",
  bodyText1 = "Pubrica's Physician Writing Services offer continued support for researchers, clinicians, pharmaceutical companies, and academic institutions in the development of clinically accurate, ethically sound content for peer-reviewed publication or regulatory submission. The content is written by qualified physicians and subject matter experts to ensure scientific integrity, therapeutic relevance, and adherence to medical writing standards.",
  bodyText2 = "Our dedicated team of experienced medical writers collaborates with physicians to craft impactful research papers, clinical reports, publications, and more. We bridge the gap between medical expertise and effective written communication, ensuring that your insights and findings reach a wider audience with the professionalism they deserve. Trust Pubrica to enhance your medical publications and make your research shine",
  bulletTitle = "All of our physician consultants are:",
  bullets = [
    "Subspecialists in their fields",
    "Authored by healthcare professionals with clinical and research experience at prestigious medical institutions",
    "Editors who have each made decisions on up to 3,000 papers and published up to 500 papers each.",
    "Ensure smooth end-to-end submission process",
    "Journal or regulatory body compliant formats (ICMJE, GPP3, CONSORT)",
    "Plagiarism and AI-generated article screening with a comprehensive report",
    "Literature review from PubMed, Embase, Scopus, and Cochrane",
    "Reference formatting by journal. (AMA, Vancouver, APA)",
  ],
  imageUrl = "/images/physician-writing-services/physician-writing-services.webp",
}) => {
  return (
    <div className="w-full font-sans">
      {/* Top Gradient Hero Banner Section */}
      <section className="w-full bg-gradient-to-r from-[#192b2d] via-[#213a3e] to-[#122325] py-14 px-6 md:px-12 lg:px-24 text-center text-white">
        <div className="max-w-5xl mx-auto border border-white/80 p-8 md:p-10 rounded-sm bg-black/10 backdrop-blur-xs">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-bold tracking-wide leading-snug mb-4">
            {bannerTitle}
          </h1>
          <p className="text-gray-200 text-sm md:text-[15px] leading-relaxed max-w-4xl mx-auto font-normal">
            {bannerDescription}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-24 text-left">
        <div className="max-w-7xl mx-auto">
          {/* Section Sub-heading Title */}
          <h2 className="text-[#083c4c] text-2xl md:text-3xl lg:text-[32px] font-extrabold leading-tight tracking-tight mb-6 max-w-6xl">
            {title}
          </h2>

          {/* Lead Summary Paragraphs */}
          <div className="space-y-4 mb-8 max-w-6xl">
            <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed text-justify">
              We offer specialized{" "}
              <a href="/services/physician-writing-services" className="text-[#3b82f6] hover:underline">
                physician writing services
              </a>{" "}
              {leadParagraph.split("physician writing services")[1]}
            </p>
            <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
              {secondaryLead}
            </p>
          </div>

          {/* Two-Column Middle Layout Block */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-6">
            {/* Left Text Column */}
            <div className="flex-1 space-y-5">
              <h3 className="text-[#083c4c] text-lg md:text-xl font-bold tracking-tight">
                {sectionHeading}
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed text-justify">
                Pubrica's{" "}
                <a href="/services/physician-writing-services" className="text-[#3b82f6] hover:underline">
                  Physician Writing Services
                </a>{" "}
                {
                  bodyText1
                    .split("Physician Writing Services")[1]
                    .split("medical writing")[0]
                }
                <a href="/services/medical-writing" className="text-[#3b82f6] hover:underline">
                  medical writing
                </a>
                {
                  bodyText1
                    .split("Physician Writing Services")[1]
                    .split("medical writing")[1]
                }
              </p>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed text-justify">
                {bodyText2}
              </p>
            </div>

            {/* Right Image Frame Column */}
            <div className="w-full lg:w-[420px] pt-4 flex-shrink-0">
              {/* Dark green background shadow container */}
              <div className="bg-[#0b332d] rounded-2xl p-0.5 pt-6 pl-6 relative">
                {/* Actual Foreground Image Box */}
                <div className="relative w-full h-[240px] md:h-[260px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <Image
                    src={imageUrl}
                    alt="Physician writing services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bullet Inclusions List Section */}
          <div className="w-full space-y-4 mb-10">
            <h3 className="text-black font-extrabold text-base md:text-[17px] tracking-tight">
              {bulletTitle}
            </h3>

            <ul className="space-y-3.5 pl-1 max-w-5xl">
              {bullets.map((bullet, index) => {
                let renderedText: React.ReactNode = bullet;
                if (bullet.includes("compliant formats")) {
                  renderedText = (
                    <span>
                      Journal or regulatory body compliant formats (
                      <span className="text-[#3b82f6]">ICMJE</span>, GPP3,{" "}
                      <span className="text-[#3b82f6]">CONSORT</span>)
                    </span>
                  );
                } else if (bullet.includes("Plagiarism and AI-generated")) {
                  renderedText = (
                    <span>
                      <a href="/services/publication-support/plagiarism-services" className="text-[#3b82f6] hover:underline">
                        Plagiarism
                      </a>{" "}
                      and AI-generated article screening with a comprehensive
                      report
                    </span>
                  );
                } else if (bullet.includes("Literature review")) {
                  renderedText = (
                    <span>
                      <a href="/services/research-services/literature-review-and-gap" className="text-[#3b82f6] hover:underline">
                        Literature review
                      </a>{" "}
                      from PubMed, Embase,{" "}
                      <span className="text-[#3b82f6]">Scopus</span>, and Cochrane
                    </span>
                  );
                }

                return (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-800 text-sm md:text-[15px] leading-relaxed text-justify font-normal"
                  >
                    <span className="text-[#a80000] text-xl leading-none mt-0.5 select-none">
                      &bull;
                    </span>
                    <span className="flex-1">{renderedText}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bottom CTA Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#a80000] text-white text-xs md:text-sm font-bold tracking-wide px-6 py-3 rounded-full hover:bg-[#880000] transition-colors shadow-sm cursor-pointer">
              Upload Your Manuscript
            </button>
            <button className="bg-[#a80000] text-white text-xs md:text-sm font-bold tracking-wide px-8 py-3 rounded-full hover:bg-[#880000] transition-colors shadow-sm cursor-pointer">
              View brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};