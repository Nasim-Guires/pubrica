import React from "react";
import Link from "next/link";

interface ServiceCard {
  title: string;
  description: string;
  linkText?: string;
  iconUrl: string;
  url: string;
}

const SERVICES_GRID_DATA: ServiceCard[] = [
  {
    title: "Journal Selection",
    description:
      "Enhance your manuscript's publication prospects with Pubrica's",
    linkText: "Journal Selection.",
    iconUrl: "/images/publication-support/journal-selection.png",
    url: "/services/publication-support/journal-selection",
  },
  {
    title: "Pre-Submission Peer Review",
    description:
      "Optimize your manuscript's quality with Pubrica's Pre-Submission.",
    iconUrl: "/images/publication-support/Pre-Submission.png",
    url: "/services/publication-support/peer-review-pre-submission",
  },
  {
    title: "Journal Submission",
    description:
      "Maximize your manuscript's potential with Pubrica's Journal Submission.",
    iconUrl: "/images/publication-support/Journal-Submission-480x480.png",
    url: "/services/publication-support/journal-submission",
  },
  {
    title: "Response To Reviewers",
    description:
      "Refine your manuscript with Pubrica's Response to Reviewers Service.",
    iconUrl:
      "/images/publication-support/Response-To-Reviewers-480x480.png",
    url: "/services/publication-support/responding-to-reviewers",
  },
  {
    title: "Poster Presentation",
    description:
      "Enhance your presentation with Pubrica's Poster Creation & Design Service.",
    iconUrl:
      "/images/publication-support/Poster-Creation-480x480.png",
    url: "/services/publication-support/poster-preparation",
  },
  {
    title: "Formatting Service",
    description:
      "Ensure your manuscript meets standards with Pubrica's precise Formatting Service.",
    iconUrl:
      "/images/publication-support/Formatting-Service-480x480.png",
    url: "/services/publication-support/journal-manuscript-formatting-services",
  },
  {
    title: "Artwork Editing Service",
    description:
      "Improve your artwork with Pubrica's expert Artwork Editing Service.",
    iconUrl:
      "/images/publication-support/Artwork-Editing-Service-480x480.png",
    url: "/services/publication-support/art-work-preparation",
  },
  {
    title: "Plagiarism service",
    description:
      "Improve your chances of publication with Pubrica's Plagiarism Service.",
    iconUrl:
      "/images/publication-support/Plagiarism-service-480x480.png",
    url: "/services/publication-support/plagiarism-services",
  },
  {
    title: "Video Abstract",
    description:
      "Transform your draft into a compelling Video Abstract with Pubrica's expert Service.",
    iconUrl:
      "/images/publication-support/Video-Abstract--480x480.png",
    url: "/services/publication-support/video-abstract",
  },
  {
    title: "Manuscript Writing",
    description:
      "Enhance your publication with Pubrica's Manuscript Writing Service.",
    iconUrl:
      "/images/publication-support/Manuscript-Writing--480x480.png",
    url: "/services",
  },
  {
    title: "Audio Abstract",
    description:
      "Transform your draft into a compelling Audio Abstract with Pubrica's expert Service.",
    iconUrl:
      "/images/publication-support/audio-Abstract--480x480.png",
    url: "/services",
  },
  {
    title: "Infographic Abstract",
    description:
      "Make complex data easy to understand through Pubrica's Infographic Abstract Service.",
    iconUrl:
      "/images/publication-support/Infographic-Abstract-480x480.png",
    url: "/services",
  },
  {
    title: "Slide Abstract / Slide Deck",
    description:
      "Effectively showcase key findings with Pubrica's Slide Abstract and Slide Deck Service.",
    iconUrl:
      "/images/publication-support/Slide-Abstract-Slide-Deck-480x480.png",
    url: "/services",
  },
  {
    title: "Interactive Abstract",
    description:
      "Create dynamic content with Pubrica's Interactive Abstract Service.",
    iconUrl:
      "/images/publication-support/Interactive-Abstract-480x480.png",
    url: "/services",
  },
  {
    title: "Data Service",
    description: "Increase Impact with Pubrica's Data Service.",
    iconUrl:
      "/images/publication-support/data-service--480x480.png",
    url: "/services",
  },
  {
    title: "Post-Acceptance Service",
    description:
      "Avoid publication delays with Pubrica's Post-Acceptance Service.",
    iconUrl:
      "/images/publication-support/Post-Acceptance-Service-480x480.png",
    url: "/services",
  },
  {
    title: "Systematic review",
    description:
      "Improve evidence synthesis through Pubrica's Systematic Review.",
    iconUrl:
      "/images/publication-support/Systematic-review-480x480.png",
    url: "/services/research-services/systematic-review",
  },
  {
    title: "Manuscript Editing",
    description:
      "Enhance your publication with Pubrica's Manuscript Editing Service.",
    iconUrl:
      "/images/publication-support/Manuscript-Editing-480x480.png",
    url: "/services/editing-and-translation/manuscript-editing",
  },
  {
    title: "Graphical abstract",
    description:
      "Summarize your findings visually using Pubrica's Graphical Abstract service.",
    iconUrl:
      "/images/publication-support/Graphical-abstract--480x480.png",
    url: "/services/research-impact/graphical-abstract",
  },
];

export default function PublicationServicesGrid() {
  return (
    <section className="w-full bg-[#f1f5f7] py-7 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Title and Intro */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#083a50] mb-4">
            Our Services
          </h2>
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed max-w-4xl">
            We understand that successful publication requires attention to
            detail and the journal's standards. At Pubrica, our publication
            professionals take care of the entire publication process, from
            manuscript formatting to submission, providing you with an accurate,
            polished, and tailored publication that meets the standards of
            editors, reviewers, and target audiences.
          </p>
        </div>

        {/* Dynamic Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES_GRID_DATA.map((service, index) => {
            const isHighlighted = service.title === "Post-Acceptance Service";

            return (
              <Link
                key={index}
                href={service.url}
                className={`flex gap-3.5 p-4 rounded-lg border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] group block ${
                  isHighlighted ? "bg-[#e3eff4]" : "bg-white"
                }`}
              >
                {/* Visual Icon Container matched to reference layout */}
                <div className="flex-shrink-0 pt-0.5">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#fef5d9] shadow-sm overflow-hidden">
                    <img
                      src={service.iconUrl}
                      alt={service.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex flex-col justify-start">
                  <h3 className="text-[14px] font-bold text-[#083a50] group-hover:text-[#3b82f6] transition-colors leading-snug mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[12px] text-slate-600 leading-relaxed">
                    {service.description}{" "}
                    {service.linkText && (
                      <span className="text-[#3b82f6] group-hover:underline font-medium">
                        {service.linkText}
                      </span>
                    )}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}