import React from "react";

// Key phrases dynamically styled as light blue links in the text
const BLUE_LINKS = [
  "medical device",
  "CONSORT, PRISMA, STROBE",
  "COPE, ICMJE, GPP",
  "peer-review",
  "research paper publication services",
  "journal publication services",
];

const COMPLIANCE_ITEMS = [
  {
    logo: "/images/compliance/cope.png",
    alt: "COPE Logo",
    title: "Committee on Publication Ethics",
  },
  {
    logo: "/images/compliance/wame.png",
    alt: "WAME Logo",
    title: "World Association of Medical Editors",
  },
  {
    logo: "/images/compliance/icmje.png",
    alt: "ICMJE Logo",
    title: "International Committee of Medical Journal Editors",
  },
  {
    logo: "/images/compliance/spirit-consort.png",
    alt: "SPIRIT CONSORT Logo",
    title: "Consolidated Standards of Reporting Trials",
  },
];

const overviewHeading =
  "Publication Support Services for Life Sciences, Pharma, and Research: Streamlining Your Path to Publication";

const overview = [
  "Transforming high-quality research into publication-ready manuscripts that are compliant with researchers' fields of science and have an impact on science, without compromising scientific integrity and ethical standards.",
  "In today's competitive, compliance-focused publishing environment, published research outputs must be technically sound, but also ethically/compliant, publication-ready, and targeted for visibility.",
  "Researchers, pharma teams, and medical device companies increasingly need assistance with:",
  "• Manuscript structure and reporting guidelines (e.g., CONSORT, PRISMA, STROBE)",
  "• Ethical standards, transparency, and compliance (COPE, ICMJE, GPP)",
  "• Accuracy in formats, references, language, and more technical aspects",
  "• Responding scientifically to peer-review comments and questions",
  "• Submitting and navigating submission portals and pre-submission checks efficiently",
  "However, researchers and pharma teams are hindered by complex formatting rules, ethical requirements, and polished, publication-ready manuscripts. Our research paper publication services and journal publication services have been designed to move you smoothly through the publication process to ensure it is compliant and impactful.",
  "We provide a comprehensive range of value-added research paper publication services to assist researchers in publishing their manuscripts in international, peer-reviewed English journals.",
];

export default function ServiceOverview() {
  const renderTextWithLinks = (text: string) => {
    const regex = new RegExp(`(${BLUE_LINKS.join("|")})`, "g");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (BLUE_LINKS.includes(part)) {
        return (
          <span
            key={index}
            className="text-[#3b82f6] hover:underline cursor-pointer font-medium transition-all"
          >
            {part}
          </span>
        );
      }

      return part;
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#083a50] leading-tight mb-6">
        {overviewHeading}
      </h2>

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

      <div className="flex flex-wrap gap-3 mt-8 mb-16">
        <button className="bg-[#b30000] hover:bg-[#900000] text-white px-6 py-2.5 rounded-full font-semibold">
          Get a Free Quote
        </button>

        <button className="bg-[#b30000] hover:bg-[#900000] text-white px-6 py-2.5 rounded-full font-semibold">
          View Brochure
        </button>
      </div>

      <div className="border-t pt-10">
        <h3 className="text-2xl font-bold text-[#083a50] mb-8">
          Our Compliance and Guideline Standards
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPLIANCE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-white border rounded-xl p-6 text-center shadow-sm"
            >
              <div className="h-24 flex items-center justify-center mb-4">
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="max-h-16 object-contain"
                />
              </div>

              <p className="text-sm font-bold text-[#083a50]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
