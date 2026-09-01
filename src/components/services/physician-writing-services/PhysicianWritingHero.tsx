"use client";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import Link from "next/link";
import CommonUploadButton from "@/components/common/CommonUploadButton";
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
  title = "Scientific Research, Analyses, Publication and Communication Services for Practicing Physicians: Professionally Developed, Clinically Accurate Medical Content",
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
      <HeroBanner
        title={bannerTitle}
        description={bannerDescription}
        headingAs="h1"
      />

      {/* Main Content Section */}
      <section className="w-full bg-white py-6 px-6 md:px-12 lg:px-24 text-left">
        <div className="max-w-7xl mx-auto">
          {/* Section Sub-heading Title */}
          <h2 className="text-[#083c4c] text-2xl md:text-3xl lg:text-[32px] font-semi-bold leading-tight tracking-tight mb-6 max-w-6xl">
            {title}
          </h2>

          {/* Lead Summary Paragraphs */}
          <div className="space-y-4 mb-8 max-w-6xl">
            <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed text-justify">
              We offer specialized physician writing services
             
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
                <Link href="/" className="text-blue-600 no-underline hover:no-underline">
                  Physician Writing Services
                </Link>{" "}
                {
                  bodyText1
                    .split("Physician Writing Services")[1]
                    .split("medical writing")[0]
                }
                <Link href="/services/research-services/medical-writing/" className="text-blue-600 no-underline hover:no-underline">
                  medical writing
                </Link>
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
              <div className=" rounded-2xl p-0.5 pt-6 pl-6 relative">
                {/* Actual Foreground Image Box */}
                <div className="relative w-full h-[240px] md:h-[260px] rounded-xl  overflow-hidden">
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
                      <Link
                        href="https://www.icmje.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        ICMJE
                      </Link>, GPP3,{" "}
                      <Link
                        href="https://legacyfileshare.elsevier.com/promis_misc/CONSORT-2010-Checklist.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        CONSORT
                      </Link>)
                    </span>
                  );
                } else if (bullet.includes("Plagiarism and AI-generated")) {
                  renderedText = (
                    <span>
                      <Link href="/services/publication-support/plagiarism-services" className="text-blue-600 no-underline hover:no-underline">
                        Plagiarism
                      </Link>{" "}
                      and AI-generated article screening with a comprehensive
                      report
                    </span>
                  );
                } else if (bullet.includes("Literature review")) {
                  renderedText = (
                    <span>
                      <Link href="/services/research-services/literature-review-and-gap" className="text-blue-600 no-underline hover:no-underline">
                        Literature review
                      </Link>{" "}
                      from PubMed, Embase,{" "}
                      <Link
                        href="/services/physician-writing-services/scopus-indexed-journals-submission-guide/"
                        className="text-blue-600 no-underline hover:no-underline"
                      >
                        Scopus
                      </Link>, and Cochrane
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
          <div className="flex flex-wrap items-center gap-8">
            <CommonUploadButton href="/order-now/">
              Upload Your Manuscript
            </CommonUploadButton>
            <CommonUploadButton href="/uploads/physician-writing-services/Physician-Writing-services_compressed.pdf">
              View brochure
            </CommonUploadButton>
          </div>
        </div>
      </section>
    </div>
  );
};