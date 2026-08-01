import Link from "next/link";
import type { FC } from "react";

/**
 * Path: /education-editorial-service/digital-production-qa-services
 * Component: DigitalProductionQaServices
 *
 * Fully reusable, typed, SEO-friendly section for the
 * "Digital Production QA Services" page.
 *
 * NOTE: Per project convention, every image slot below is rendered as a
 * labelled placeholder <div> (NOT an <img> / next/image tag). Swap the
 * placeholder div for a Next.js <Image /> component once real assets
 * are available — the alt text / labels are already written for you.
 */

export interface QaServiceItem {
  id: string;
  title: string;
  description: string;
  /** Label used for the icon image-section placeholder + alt text */
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
      "All digital formats have been checked for accuracy of text, format, page numbers, headings, tables, figures, and overall layout consistency across every output format.",
    iconLabel: "Content and layout QA icon",
  },
  {
    id: "xml-metadata-qa",
    title: "XML & Metadata QA",
    description:
      "The XML structure, tags, and metadata of an article must be validated by our staff. They do this through various automated and manual checks to ensure indexing accuracy.",
    iconLabel: "XML and metadata QA icon",
  },
  {
    id: "proofreading-typesetting-qa",
    title: "Proofreading & Typesetting QA",
    description:
      "An examination of typeset proofs to find typographical errors, improper formatting, incorrect fonts, improper spacing, and other presentation issues before final release.",
    iconLabel: "Proofreading and typesetting QA icon",
  },
  {
    id: "accessibility-compliance-qa",
    title: "Accessibility & Compliance QA",
    description:
      "We guarantee that we comply with Current Good Practices (CGP) for Accessibility according to global accessibility standards and publisher-specific requirements.",
    iconLabel: "Accessibility and compliance QA icon",
  },
  {
    id: "post-publication-qa",
    title: "Post-Publication QA",
    description:
      "Post-publication audits are conducted to identify any errors and make necessary corrections of errors on all published platforms and distribution channels.",
    iconLabel: "Post publication QA icon",
  },
  {
    id: "compliance-regulatory-audit",
    title: "Compliance and Regulatory Audit",
    description:
      "We audit your research content for adherence to global scientific and ethical guidelines, ensuring every publication meets regulatory and journal-specific standards.",
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
      className="w-full bg-white"
    >
      {/* Hero */}
      <div className="w-full bg-gradient-to-b from-[#0b3b3c] to-[#123a3a] py-14 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-md border border-white/20 px-6 py-10 text-center sm:px-12">
          <h1
            id="digital-production-qa-heading"
            className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"
          >
            {heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
            {heroDescription}
          </p>
        </div>
      </div>

      {/* Intro + services help */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
        <h2 className="text-2xl font-bold text-[#0b3b3c] sm:text-3xl">
          {introHeading}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            {introParagraphs.map((paragraph, index) => (
              <p
                key={`intro-paragraph-${index}`}
                className="mt-4 text-sm leading-relaxed text-gray-700 first:mt-0 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image section placeholder (swap for next/image <Image /> later) */}
          <div
            role="img"
            aria-label={heroImageLabel}
            className="relative flex h-72 w-full items-center justify-center rounded-md bg-[#0b3b3c] p-3 sm:h-80 lg:h-full lg:min-h-[320px]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-sm border border-dashed border-white/40 bg-gray-100 text-center">
              <span className="px-4 text-xs font-medium uppercase tracking-wide text-gray-500 sm:text-sm">
                Image Section: {heroImageLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Our services help you */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {servicesHelpHeading}
          </h3>
          <ul className="mt-4 space-y-3">
            {servicesHelpList.map((item, index) => (
              <li
                key={`services-help-${index}`}
                className="flex items-start gap-3 text-sm leading-relaxed text-gray-700 sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href={ctaHref}
            className="mt-8 inline-block rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:text-base"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* Types of services we offer */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
        <h2 className="text-2xl font-bold text-[#0b3b3c] sm:text-3xl">
          {offerHeading}
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-gray-700 sm:text-base">
          {offerDescription}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerItems.map((service) => (
            <article
              key={service.id}
              className="relative flex gap-4 rounded-md border border-gray-200 bg-white p-5 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="absolute right-0 top-5 h-10 w-1 rounded-l bg-red-600"
              />
              {/* Icon image section placeholder */}
              <div
                role="img"
                aria-label={service.iconLabel}
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm border border-dashed border-gray-300 bg-gray-100"
              >
                <span className="px-1 text-center text-[8px] font-medium uppercase leading-tight tracking-wide text-gray-500">
                  Image Section
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProductionQaServices;