import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Key phrases dynamically styled in the text (sorted long-to-short for regex priority)
const BLUE_LINKS = [
  "pre-submission peer review",
  "research paper publication services",
  "scientific journal publication services",
  "journal publication services",
  "CONSORT, PRISMA, STROBE",
  "COPE, ICMJE, GPP",
  "medical device",
  "journal submission",
  "journal selection",
  "peer-review",
  "Peer Review",
  "peer review",
];

// Mapping specific phrases to actual URL routes
const ROUTE_MAP: Record<string, string> = {
  "medical device":
    "/services/publication-support/poster-preparation/european-society-for-medical-oncology/",
  "pre-submission peer review":
    "/academy/peer-review/how-publishers-balance-authors-and-reviewers/",
  "peer-review": "/services/publication-support/peer-review-pre-submission/",
  "Peer Review": "/academy/peer-review/peer-review-week-2025-ai-era/",
  "peer review": "/academy/peer-review/peer-review-week-2025-ai-era/",
};

const COMPLIANCE_ITEMS = [
  {
    logo: "/images/publication-support/COPE_thumb.png",
    alt: "COPE Logo",
    title: "Committee on Publication Ethics",
  },
  {
    logo: "/images/publication-support/WAME.webp",
    alt: "WAME Logo",
    title: "World Association of Medical Editors",
  },
  {
    logo: "/images/publication-support/ICMJE.webp",
    alt: "ICMJE Logo",
    title: "International Committee of Medical Journal Editors",
  },
  {
    logo: "/images/publication-support/Consort-Logo.webp",
    alt: "SPIRIT CONSORT Logo",
    title: "Consolidated Standards of Reporting Trials",
  },
];

const overviewHeading =
  "Publication Support Services for Life Sciences, Pharma, and Research: Streamlining Your Path to Publication";

// Content matching the screenshot layout
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
    const regex = new RegExp(`(${escapedLinks.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      // Find matching key case-insensitively
      const matchedKey = BLUE_LINKS.find(
        (link) => link.toLowerCase() === part.toLowerCase()
      );

      if (matchedKey) {
        const href = ROUTE_MAP[matchedKey];

        // Next.js Link without underlines
        if (href) {
          return (
            <Link
              key={index}
              href={href}
              className="text-[#3b82f6] hover:no-underline cursor-pointer font-medium transition-all no-underline inline"
            >
              {part}
            </Link>
          );
        }

        // Plain blue text span without underlines
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
    <div className="w-full font-sans bg-white text-slate-800 antialiased">
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6">
        {/* Main Section Heading */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0c3830] leading-tight mb-6">
          {overviewHeading}
        </h2>

        {/* Top Overview Paragraphs */}
        <div className="space-y-4">
          {overview.map((paragraph, index) => {
            const isBullet = paragraph.startsWith("•");
            const cleanText = paragraph.replace(/^•\s*/, "");

            if (isBullet) {
              return (
                <div key={index} className="flex items-start gap-2.5 pl-2">
                  <span className="text-[#c00000] text-lg mt-0.5">•</span>
                  <p className="text-[15px] text-slate-700 leading-relaxed">
                    {renderTextWithLinks(cleanText)}
                  </p>
                </div>
              );
            }

            return (
              <p
                key={index}
                className="text-[15px] text-slate-700 leading-relaxed"
              >
                {renderTextWithLinks(paragraph)}
              </p>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 mt-8 mb-16">
          <GetFreeQuoteButton />
          <button className="bg-[#b30000] hover:bg-[#900000] !text-white px-5 py-2.5 rounded-md font-semibold transition-colors cursor-pointer inline-flex items-center justify-center select-none shadow-sm">
            View Brochure
          </button>
        </div>

        {/* Compliance and Guidelines Section */}
        <div className="pt-6 pb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c3830] mb-8 text-center sm:text-left">
            Our Compliance and guideline Standards
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPLIANCE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-md flex flex-col items-center justify-between min-h-[220px]"
              >
                <div className="h-24 flex items-center justify-center w-full">
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-bold text-[#0c3830] leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Value-added Services & Lab Image Section */}
        <div className="pt-4 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Bullet List */}
            <div className="lg:col-span-7 space-y-3">
              {featureBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#dc2626] font-bold text-base leading-none mt-1">
                    •
                  </span>
                  <p className="text-[15px] text-slate-700 leading-relaxed">
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
        <div className="py-6 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c3830]">
            Authoring your research paper into a publishable manuscript
          </h3>

          {authoringParagraphs.map((paragraph, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span className="text-[#dc2626] font-bold text-base leading-none mt-1.5">
                •
              </span>
              <p className="text-[15px] text-slate-700 leading-relaxed">
                {renderTextWithLinks(paragraph)}
              </p>
            </div>
          ))}

          {/* Single Upload CTA */}
          <div className="pt-4">
            <button className="bg-[#b30000] hover:bg-[#900000] !text-white px-5 py-2.5 rounded-md font-semibold transition-colors cursor-pointer inline-flex items-center justify-center select-none shadow-sm">
              Upload Your Manuscript
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}