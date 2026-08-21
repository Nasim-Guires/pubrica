import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

export interface QaServiceItem {
  id: string;
  title: string;
  description?: string;
  points?: string[];
  iconSrc: string;
  iconLabel: string;
}

export interface DigitalProductionQaServicesProps {
  heroTitle?: string;
  heroDescription?: string;
  introHeading?: string;
  introParagraphs?: string[];
  heroImageLabel?: string;
  servicesHelpHeading?: string;
  servicesHelpList?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  offerHeading?: string;
  offerDescription?: string;
  offerItems?: QaServiceItem[];
}

const DEFAULT_INTRO_PARAGRAPHS: string[] = [
  "The publishing world is developing rapidly due to developments in technology, which has led to increased speed in publishing materials. Many factors contribute to the loss of accuracy, consistency, and technical integrity of digital outputs; however, even a small production defect can cause significant delays in getting published and on the impact of the publication. In addition, it can also result in poor indexing and lower credibility of the journal for the readers.",
  "Pubrica has designed Digital Production QA Services to ensure that your scholarly materials are produced with a high level of quality and the most appropriate digital format. A team of qualified and trained QA specialists will perform an exhaustive quality assurance check on all types of manuscripts, proofs, and final digital materials to identify and correct production problems occurring before and/or after publication. We enable publishers, authors and journals to deliver content that is fully compliant, free from errors, and ready for your readers to access on multiple platforms.",
];

const DEFAULT_SERVICES_HELP_LIST: string[] = [
  "Remove discrepancies in the formatting and production mistakes",
  "Keep consistency in all formats such as PDF, HTML, XML, and EPUB formats.",
  "Follow Publisher and Indexing Platform Standards.",
  "Enhance the reading experience and help make content easier to read than previous formats.",
  "Protects the integrity of the journal's reputation and overall quality of the material published.",
];

const DEFAULT_OFFER_ITEMS: QaServiceItem[] = [
  {
    id: "content-layout-qa",
    title: "Content & Layout QA",
    description:
      "All digital formats have been checked for accuracy of text, format, page numbers, headings, tables, figures, references, and captions.",
    iconSrc:
      "/images/education-editorial-service/digital-production-qa-services/Content-Layout-QA.webp",
    iconLabel: "Content and layout QA icon",
  },
  {
    id: "xml-metadata-qa",
    title: "XML & Metadata QA",
    description:
      "The XML structure, tags, and metadata of an article must be validated by our staff. They do this through various methods, which include checking that the XML is proper by the standards set out in the DTD, or JATS, so that it is easy to index and find.",
    iconSrc:
      "/images/education-editorial-service/digital-production-qa-services/XML-Metadata-QA.webp",
    iconLabel: "XML and metadata QA icon",
  },
  {
    id: "proofreading-typesetting-qa",
    title: "Proofreading & Typesetting QA",
    description:
      "An examination of typeset proofs to find typographical errors, improper formatting, incorrect fonts, improper spacing, and incorrect alignment.",
    iconSrc:
      "/images/education-editorial-service/digital-production-qa-services/Proofreading-Typesetting-QA.webp",
    iconLabel: "Proofreading and typesetting QA icon",
  },
  {
    id: "accessibility-compliance-qa",
    title: "Accessibility & Compliance QA",
    description:
      "We guarantee that we comply with Current Good Practices (CGP) for Accessibility according to both formal and personal Publisher Specific CGP guidelines.",
    iconSrc:
      "/images/education-editorial-service/digital-production-qa-services/Accessibility-Compliance-QA.webp",
    iconLabel: "Accessibility and compliance QA icon",
  },
  {
    id: "post-publication-qa",
    title: "Post-Publication QA",
    description:
      "Post-publication audits are conducted to identify any errors and make necessary corrections of errors on ALL live content in ALL journal and other repository platforms.",
    iconSrc:
      "/images/education-editorial-service/digital-production-qa-services/Post-Publication-QA.webp",
    iconLabel: "Post publication QA icon",
  },
  {
    id: "compliance-regulatory-audit",
    title: "Compliance and Regulatory Audit",
    points: [
      "COPE (Publication Ethics)",
      "ICMJE (Authorship & Manuscript Requirements)",
      "CONSORT (Clinical Trials Reporting)",
      "PRISMA (Systematic Reviews)",
      "ARRIVE (Animal Research)",
      "GCP, GLP, and IRB requirements",
    ],
    iconSrc:
      "/images/education-editorial-service/digital-production-qa-services/Compliance-and-Regulatory-Audit.webp",
    iconLabel: "Compliance and regulatory audit icon",
  },
];

const DigitalProductionQaServices: FC<DigitalProductionQaServicesProps> = ({
  heroTitle = "Digital Production QA Services",
  heroDescription = "At Pubrica, our Digital Production QA Services will help you find and fix production, metadata and compliance errors in your digital content. Our goal is to ensure that your digital documents are ready for publication, free of errors, and consistently formatted.",
  introHeading = "Ensure Flawless Digital Publishing with Expert Digital Production QA Services.",
  introParagraphs = DEFAULT_INTRO_PARAGRAPHS,
  heroImageLabel = "QA specialist reviewing digital manuscript proofs on a laptop and monitor",
  servicesHelpHeading = "Our services help you",
  servicesHelpList = DEFAULT_SERVICES_HELP_LIST,
  ctaLabel = "Get a Free Quote",
  ctaHref = "/get-a-free-quote",
  offerHeading = "Types of Digital Production QA Services We Offer",
  offerDescription = "Quality assurance is an essential aspect of the digital publishing process. At Pubrica, we provide our customers with a comprehensive suite of digital production quality assurance services to support all aspects of content development and production to ensure compliance, accuracy and technical quality in the content we deliver.",
  offerItems = DEFAULT_OFFER_ITEMS,
}) => {
  return (
    <section
      aria-labelledby="digital-production-qa-heading"
      className="w-full bg-white text-gray-800"
    >
      {/* HERO BANNER SECTION */}
      <div className="w-full bg-[#1b3b32] py-12 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-lg border border-[#2b5447] bg-[#1b3b32] px-6 py-10 text-center text-white sm:px-12">
          <h1
            id="digital-production-qa-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
          >
            {heroTitle}
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-gray-200 sm:text-sm">
            {heroDescription}
          </p>
        </div>
      </div>

      {/* INTRO & OFFSET FLOATING IMAGE SECTION */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:px-8">
        <h2 className="text-xl font-bold text-[#0b3b2c] sm:text-2xl md:text-3xl">
          {introHeading}
        </h2>

        <div className="mt-6 grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="space-y-4 md:col-span-7">
            {introParagraphs.map((paragraph, index) => (
              <p
                key={`intro-paragraph-${index}`}
                className="text-xs leading-relaxed text-gray-700 sm:text-sm md:text-base"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                {servicesHelpHeading}
              </h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-gray-700">
                {servicesHelpList.map((item, index) => (
                  <li
                    key={`services-help-${index}`}
                    className="flex items-start space-x-2"
                  >
                    <span className="mt-0.5 text-xs text-[#c5221f]">▪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5">
                <Link
                  href={ctaHref}
                  className="inline-block rounded-full bg-[#c5221f] px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#a31a18] sm:text-sm"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mt-2 flex justify-center md:col-span-5 md:mt-0 md:justify-end">
            <div className="relative h-[210px] w-full max-w-[360px] sm:h-[230px]">
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-[#1b3b32]" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                <Image
                  src="/images/education-editorial-service/digital-production-qa-services/Digital-Production-QA-Services.webp"
                  alt={heroImageLabel}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TYPES OF QA SERVICES WE OFFER SECTION */}
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 md:px-8">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-[#0b3b2c] sm:text-2xl md:text-3xl">
            {offerHeading}
          </h2>
          <p className="max-w-4xl text-xs leading-relaxed text-gray-700 sm:text-sm">
            {offerDescription}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offerItems.map((service) => (
            <div
              key={service.id}
              className="relative flex items-start space-x-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md min-h-[160px]"
            >
              {/* Left Side Icon */}
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src={service.iconSrc}
                  alt={service.iconLabel}
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>

              {/* Right Side Content */}
              <div className="relative flex-1 space-y-1 pr-3">
                <div className="absolute right-0 top-1 bottom-1 w-[2px] rounded-full bg-gray-800" />

                <h3 className="text-xs font-bold leading-snug text-gray-900 md:text-sm">
                  {service.title}
                </h3>

                {/* Paragraph Description */}
                {service.description && (
                  <p className="line-clamp-4 text-[11px] leading-relaxed text-gray-600 md:text-xs">
                    {service.description}
                  </p>
                )}

                {/* Bulleted Points List matching screenshot */}
                {service.points && service.points.length > 0 && (
                  <ul className="mt-1 space-y-0.5 list-disc list-inside text-[11px] text-gray-600 md:text-xs">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-snug">
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProductionQaServices;