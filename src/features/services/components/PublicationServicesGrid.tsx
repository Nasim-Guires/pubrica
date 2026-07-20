import React from "react";

interface ServiceCard {
  title: string;
  description: string;
  linkText?: string;
  // Dynamic inline SVG path or rendering logic
  iconType: string;
}

const SERVICES_GRID_DATA: ServiceCard[] = [
  {
    title: "Journal Selection",
    description:
      "Enhance your manuscript's publication prospects with Pubrica's",
    linkText: "Journal Selection.",
    iconType: "selection",
  },
  {
    title: "Pre-Submission Peer Review",
    description:
      "Optimize your manuscript's quality with Pubrica's Pre-Submission.",
    iconType: "review",
  },
  {
    title: "Journal Submission",
    description:
      "Maximize your manuscript's potential with Pubrica's Journal Submission.",
    iconType: "submission",
  },
  {
    title: "Response To Reviewers",
    description:
      "Refine your manuscript with Pubrica's Response to Reviewers Service.",
    iconType: "response",
  },
  {
    title: "Poster Presentation",
    description:
      "Enhance your presentation with Pubrica's Poster Creation & Design Service.",
    iconType: "poster",
  },
  {
    title: "Formatting Service",
    description:
      "Ensure your manuscript meets standards with Pubrica's precise Formatting Service.",
    iconType: "formatting",
  },
  {
    title: "Artwork Editing Service",
    description:
      "Improve your artwork with Pubrica's expert Artwork Editing Service.",
    iconType: "artwork",
  },
  {
    title: "Plagiarism service",
    description:
      "Improve your chances of publication with Pubrica's Plagiarism Service.",
    iconType: "plagiarism",
  },
  {
    title: "Video Abstract",
    description:
      "Transform your draft into a compelling Video Abstract with Pubrica's expert Service.",
    iconType: "video",
  },
  {
    title: "Manuscript Writing",
    description:
      "Enhance your publication with Pubrica's Manuscript Writing Service.",
    iconType: "writing",
  },
  {
    title: "Audio Abstract",
    description:
      "Transform your draft into a compelling Audio Abstract with Pubrica's expert Service.",
    iconType: "audio",
  },
  {
    title: "Infographic Abstract",
    description:
      "Make complex data easy to understand through Pubrica's Infographic Abstract Service.",
    iconType: "infographic",
  },
  {
    title: "Slide Abstract / Slide Deck",
    description:
      "Effectively showcase key findings with Pubrica's Slide Abstract and Slide Deck Service.",
    iconType: "slides",
  },
  {
    title: "Interactive Abstract",
    description:
      "Create dynamic content with Pubrica's Interactive Abstract Service.",
    iconType: "interactive",
  },
  {
    title: "Data Service",
    description: "Increase Impact with Pubrica's Data Service.",
    iconType: "data",
  },
  {
    title: "Post-Acceptance Service",
    description:
      "Avoid publication delays with Pubrica's Post-Acceptance Service.",
    iconType: "post-acceptance",
  },
  {
    title: "Systematic review",
    description:
      "Improve evidence synthesis through Pubrica's Systematic Review.",
    iconType: "systematic",
  },
  {
    title: "Manuscript Editing",
    description:
      "Enhance your publication with Pubrica's Manuscript Editing Service.",
    iconType: "editing",
  },
  {
    title: "Graphical abstract",
    description:
      "Summarize your findings visually using Pubrica's Graphical Abstract service.",
    iconType: "graphical",
  },
];

// Helper to render customized modern clean icons mirroring the UI design guidelines
function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case "selection":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "review":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "submission":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "response":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10h47m-7 6h7M7 10.156l1.341-1.242A1 1 0 019.7 9.88l3.6 3.3a1 1 0 010 1.48l-3.6 3.3a1 1 0 01-1.359-.034L7 16.685M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "poster":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "formatting":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      );
    case "artwork":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      );
    case "plagiarism":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      );
    case "video":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      );
    case "writing":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      );
    case "audio":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      );
    case "infographic":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      );
    case "slides":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 12l3-3 3 3 4-4M8 21h8M12 17v4M3 4h18M4 4h16v12H4V4z"
          />
        </svg>
      );
    case "interactive":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
      );
    case "data":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      );
    case "post-acceptance":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "systematic":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
          />
        </svg>
      );
    case "editing":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      );
    case "graphical":
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
  }
}

export default function PublicationServicesGrid() {
  return (
    <section className="w-full bg-[#f1f5f7] py-16 px-4 sm:px-6 lg:px-8 font-sans">
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
            // "Post-Acceptance Service" has a distinct light blue accent background highlight in design mockups
            const isHighlighted = service.title === "Post-Acceptance Service";

            return (
              <div
                key={index}
                className={`flex gap-4 p-5 rounded-lg border border-slate-100 shadow-sm transition-all duration-350 hover:shadow-md hover:translate-y-[-2px] ${
                  isHighlighted ? "bg-[#e3eff4]" : "bg-white"
                }`}
              >
                {/* Visual Icon Container with soft circular shadow base */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#fef5d9] shadow-sm">
                    <ServiceIcon type={service.iconType} />
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex flex-col justify-start">
                  <h3 className="text-[15px] font-bold text-[#083a50] leading-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[12.5px] text-slate-600 leading-relaxed">
                    {service.description}{" "}
                    {service.linkText && (
                      <span className="text-[#3b82f6] hover:underline cursor-pointer font-medium">
                        {service.linkText}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
