import React from "react";

// Key phrases dynamically styled as light blue links in the text
const BLUE_LINKS = [
  "medical device",
  "CONSORT, PRISMA, STROBE",
  "COPE, ICMJE, GPP",
  "peer-review",
  "research paper publication services",
  "journal publication services",
  "journal submission",
  "peer review",
  "journal selection",
  "scientific journal publication services",
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
    // Escape special regex characters like parentheses
    const escapedLinks = BLUE_LINKS.map((link) =>
      link.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    );
    const regex = new RegExp(`(${escapedLinks.join("|")})`, "g");
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
        <div className="flex flex-wrap gap-3 mt-8 mb-16">
          <button className="bg-[#b30000] hover:bg-[#900000] text-white px-6 py-2.5 rounded-full font-semibold transition-colors cursor-pointer">
            Get a Free Quote
          </button>
          <button className="bg-[#b30000] hover:bg-[#900000] text-white px-6 py-2.5 rounded-full font-semibold transition-colors cursor-pointer">
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
          <p className="text-[15px] text-slate-700 leading-relaxed mb-6">
            We provide a comprehensive range of value-added{" "}
            {renderTextWithLinks("journal publication services")} to assist
            researchers in publishing their manuscripts in international,
            peer-reviewed English journals.
          </p>

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
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop"
                    alt="Scientists with microscope"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Foreground Overlapping Image */}
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop"
                    alt="Researcher in lab"
                    className="w-full h-full object-cover"
                  />
                </div>
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
            <button className="bg-[#b30000] hover:bg-[#900000] text-white px-7 py-2.5 rounded-full font-semibold transition-colors cursor-pointer shadow-sm">
              Upload Your Manuscript
            </button>
          </div>
        </div>

        {/* Next Section Title */}
        
      </div>
    </div>
  );
}
