"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Key phrases dynamically styled in the text (sorted long-to-short for regex priority)
const BLUE_LINKS = [
  "scientific journal publication services",
  "research paper publication services",
  "journal publication services",
  "pre-submission peer review",
  "managing peer review",
  "journal submission",
  "journal selection",
  "medical device",
  "peer review",
  "CONSORT",
  "PRISMA",
  "STROBE",
  "ICMJE",
  "GPP",
];

// Mapping specific phrases to actual URL routes
const ROUTE_MAP: Record<string, string> = {
  "medical device":
    "/services/publication-support/poster-preparation/european-society-for-medical-oncology/",
  "pre-submission peer review":
    "/academy/peer-review/how-publishers-balance-authors-and-reviewers/",
  "managing peer review":
    "/services/publication-support/double-blind-peer-review-definition-process/",
  "peer review":
    "/services/publication-support/double-blind-peer-review-definition-process/",
  "journal submission": "/services/publication-support/journal-submission/",
  "journal selection": "/services/publication-support/journal-selection/",
  "scientific journal publication services":
    "/services/publication-support",
  CONSORT: "/services/publication-support/consort-guidelines-reporting-trials/",
  PRISMA:
    "https://static1.squarespace.com/static/65b880e13b6ca75573dfe217/t/67ad313f1c80aa5235fce0d0/1739403584136/PRISMA_2020_checklist.pdf",
  STROBE:
    "https://www.equator-network.org/wp-content/uploads/2015/10/STROBE_checklist_v4_combined.pdf",
  ICMJE:
    "/services/publication-support/icmje-guidelines-medical-research-compliance",
  GPP: "/services/publication-support/how-to-implement-gpp-medical-research/",
  "research paper publication services":
    "/academy/publication-support/challenges-in-research-paper-writing-and-strategies-to-overcome-them",
  "journal publication services":
    "/services/publication-support/peer-review-pre-submission/",
};

const COMPLIANCE_ITEMS = [
  {
    logo: "/images/publication-support/COPE_thumb.png",
    alt: "COPE Logo",
    title: "Committee on Publication Ethics",
    url: "https://publicationethics.org/",
  },
  {
    logo: "/images/publication-support/WAME.webp",
    alt: "WAME Logo",
    title: "World Association of Medical Editors",
    url: "https://www.wame.org/",
  },
  {
    logo: "/images/publication-support/ICMJE.webp",
    alt: "ICMJE Logo",
    title: "International Committee of Medical Journal Editors",
    url: "https://www.icmje.org/",
  },
  {
    logo: "/images/publication-support/Consort-Logo.webp",
    alt: "SPIRIT CONSORT Logo",
    title: "Consolidated Standards of Reporting Trials",
    url: "https://www.consort-spirit.org/",
  },
];

const overviewHeading =
  "Publication Support Services for Life Sciences, Pharma, and Research: Streamlining Your Path to Publication";

// Main introductory paragraphs
const overview = [
  "Transforming high-quality research into publication-ready manuscripts that are compliant with researchers' fields of science and have an impact on science, without compromising scientific integrity and ethical standards.",
  "In today's competitive, compliance-focused publishing environment, published research outputs must be technically sound, but also ethically / compliant, publication-ready, and targeted for visibility.",
  "Researchers, pharma teams, and medical device companies increasingly need assistance with:",
  "• Manuscript structure and reporting guidelines (e.g., CONSORT, PRISMA, STROBE)",
  "• Ethical standards, transparency, and complaint (COPE, ICMJE, GPP)",
  "• Accuracy in formats, references, language, and more technical aspects",
  "• Responding scientifically to peer-review comments and questions",
  "• Submitting and navigating submission portals and pre-submission checks efficiently",
  "However, researchers and pharma teams are hindered by complex formatting rules, ethical requirements, and polished, publication-ready manuscripts. Our research paper publication services and journal publication services have been designed to move you smoothly through the publication process to ensure it is compliant and impactful.",
  "We provide a comprehensive range of value-added research paper publication services to assist researchers in publishing their manuscripts in international, peer-reviewed English journals.",
];

// Intro paragraph right before feature bullets
const sectionIntroText =
  "We provide a comprehensive range of value-added journal publication services to assist researchers in publishing their manuscripts in international, peer-reviewed English journals.";

const featureBullets = [
  "Ensure smooth end-to-end submission process",
  "Expert guidance to maximize manuscript acceptance",
  "Ensure adherence to matching journal submission guidelines",
  "Assistance through unlimited rounds of revisions during the peer review process",
  "Provide professional and reliable medical publication support services",
  "Selection option for packages and services",
];

const authoringParagraphs = [
  "Publishing can be a nerve-wracking task. At Pubrica, our expert writers translate your research into a publishable manuscript through precise manuscript preparation service and scientific editing. We take complete responsibility for guiding you through the entire publication life cycle—from identifying the most suitable journal to managing peer review, manuscript editing, statistical review, and offering post-submission support.",
  "We have over 400 specialists and editors in STEM, giving you comprehensive support. Our experts will provide focused and personalized service to tweak your paper at every stage, from personalized journal selection, citing enhancements, to full publication assistance through scientific journal publication services.",
];

export default function ServiceOverview() {
  const renderTextWithLinks = (text: string) => {
    // Sort keys by length (descending) so multi-word matches take priority
    const sortedLinks = [...BLUE_LINKS].sort((a, b) => b.length - a.length);

    // Escape special regex characters
    const escapedLinks = sortedLinks.map((link) =>
      link.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    // Added word boundary anchors \b to avoid accidental partial matches
    const regex = new RegExp(`\\b(${escapedLinks.join("|")})\\b`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const matchedKey = BLUE_LINKS.find(
        (link) => link.toLowerCase() === part.toLowerCase()
      );

      if (matchedKey) {
        const href = ROUTE_MAP[matchedKey];
        const isExternal =
          href?.startsWith("http://") ||
          href?.startsWith("https://") ||
          href?.endsWith(".pdf");

        if (href) {
          return (
            <Link
              key={index}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-[#3b82f6] hover:no-underline cursor-pointer font-medium transition-all no-underline inline"
            >
              {part}
            </Link>
          );
        }

        return (
          <span
            key={index}
            className="text-[#3b82f6] hover:no-underline cursor-pointer font-medium transition-all no-underline inline"
          >
            {part}
          </span>
        );
      }

      return part;
    });
  };

  return (
    <div className="w-full font-poppins font-[family-name:var(--font-poppins)] bg-white text-slate-800 antialiased pt-0 mt-0">
      <div className="max-w-6xl mx-auto pt-0 pb-10 px-4 sm:px-6">
        {/* Main Section Heading */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0c3830] leading-tight mb-4 mt-0 pt-0">
          {overviewHeading}
        </h2>

        {/* Top Overview Paragraphs */}
        <div className="space-y-3">
          {overview.map((paragraph, index) => {
            const isBullet = paragraph.startsWith("•");
            const cleanText = paragraph.replace(/^•\s*/, "");

            if (isBullet) {
              return (
                <div key={index} className="flex items-start gap-2.5 pl-2">
                  <span className="text-[#c00000] text-lg mt-0.5">•</span>
                  <p className="text-[16px] text-slate-700 leading-relaxed">
                    {renderTextWithLinks(cleanText)}
                  </p>
                </div>
              );
            }

            return (
              <p
                key={index}
                className="text-[16px] text-slate-700 leading-relaxed"
              >
                {renderTextWithLinks(paragraph)}
              </p>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-8 mt-6 mb-10">
          <GetFreeQuoteButton />
          <Link
            href="/uploads/publication-support-services_compressed.pdf"
            className="bg-red-600 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-md font-semibold text-[16px] transition-colors cursor-pointer inline-flex items-center justify-center select-none"
          >
            View Brochure
          </Link>
        </div>

        {/* Compliance and Guidelines Section */}
        <div className="pt-2 pb-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c3830] mb-6 text-center sm:text-left">
            Our Compliance and guideline Standards
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPLIANCE_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-md flex flex-col items-center justify-between min-h-[220px] hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="h-24 flex items-center justify-center w-full">
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <p className="text-[16px] font-bold text-[#0c3830] leading-snug">
                  {item.title}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Value-added Services & Lab Image Section */}
        <div className="pt-2 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Bullet List */}
            <div className="lg:col-span-7 space-y-3">
              <p className="text-[16px] text-slate-700 leading-relaxed mb-3">
                {renderTextWithLinks(sectionIntroText)}
              </p>

              {featureBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#dc2626] font-bold text-base leading-none mt-1">
                    •
                  </span>
                  <p className="text-[16px] text-slate-700 leading-relaxed">
                    {renderTextWithLinks(bullet)}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Overlapping Lab Images Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-72 sm:h-80">
                {/* Background Image */}
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/publication-support/image-2.webp"
                    alt="Scientists with microscope"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Foreground Overlapping Image */}
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-lg border-4 border-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Authoring your research paper Section */}
        <div className="py-4 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c3830]">
            Authoring your research paper into a publishable manuscript
          </h3>

          {authoringParagraphs.map((paragraph, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span className="text-[#dc2626] font-bold text-base leading-none mt-1.5">
                •
              </span>
              <p className="text-[16px] text-slate-700 leading-relaxed">
                {renderTextWithLinks(paragraph)}
              </p>
            </div>
          ))}

          {/* Single Upload CTA */}
          <div className="pt-2">
            <Link
              href="/order-now/"
              className="bg-red-600 text-white px-5 py-2.5 rounded-md font-semibold text-[16px] cursor-pointer inline-flex items-center justify-center select-none hover:bg-white hover:text-black"
            >
              Upload Your Manuscript
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}