import React from "react";

interface PackageColumn {
  title: string;
  subtitle: string;
  idealFor: string;
  inclusions: string[];
  styles: {
    bgContainer: string; // Background color for the column container
    textColor: string; // Accent color for headings
    iconBg?: string; // Color treatment for icons if needed
  };
  icon?: React.ReactNode;
}

interface ResearchPackagesProps {
  title?: string;
  description?: string;
  packages?: PackageColumn[];
}

export const ResearchPackagesSection: React.FC<ResearchPackagesProps> = ({
  title = "Research Service – Our Packages",
  description = "At Pubrica, we offer flexible and comprehensive research service packages tailored to meet the unique needs of researchers at every stage of their academic or clinical journey. Whether you're developing a concept or preparing for publication, our packages are designed for precision, quality, and impact.",
  packages = [
    {
      title: "Starter",
      subtitle: "Foundational Research Support",
      idealFor: "Early-stage researchers & students",
      inclusions: [
        "Topic selection guidance",
        "Problem statement & objective framing",
        "Basic literature survey",
        "Proposal structuring",
        "Methodology outline",
      ],
      styles: {
        bgContainer: "bg-[#cad7d8]",
        textColor: "text-[#0c4a60]",
      },
    },
    {
      title: "Standard",
      subtitle: "Complete Research Assistance",
      idealFor: "Researchers needing full manuscript support",
      inclusions: [
        "Comprehensive literature review",
        "Research design & methodology",
        "Questionnaire/tool design (if needed)",
        "Data collection strategy",
        "Manuscript drafting (IMRAD format)",
      ],
      styles: {
        bgContainer: "bg-[#d9cce3]",
        textColor: "text-[#6b21a8]",
      },
    },
    {
      title: "Advanced",
      subtitle: "Publication-Ready Research",
      idealFor: "Those preparing for journal submission",
      inclusions: [
        "All Standard Package features",
        "Statistical analysis & results interpretation",
        "Complete manuscript writing with references",
        "Journal selection & formatting",
        "Reviewer revision support",
      ],
      styles: {
        bgContainer: "bg-[#cfb997]",
        textColor: "text-[#78350f]",
      },
    },
    {
      title: "Custom",
      subtitle: "Tailored Research Solutions",
      idealFor: "Specialized or domain-specific projects",
      inclusions: [
        "Customized service combinations",
        "Subject-specific experts (e.g., Medical, Engineering)",
        "Dedicated project manager",
        "Flexible deliverables and timelines",
      ],
      styles: {
        bgContainer: "bg-[#dca482]",
        textColor: "text-[#c2410c]",
      },
    },
  ],
}) => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl mx-auto">
            {description.split("research service")[0]}
            <a href="#" className="text-[#3b82f6] hover:underline">
              research service
            </a>
            {description.split("research service")[1]}
          </p>
        </div>

        {/* Four Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`${pkg.styles.bgContainer} p-4 flex flex-col gap-6 min-h-[500px] shadow-sm`}
            >
              {/* White Top Card Badge */}
              <div className="bg-white p-4 shadow-sm flex items-center gap-3 w-full min-h-[76px]">
                {/* Package Specific Icon Circle Graphic */}
                <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-[#083c4c]">
                  {pkg.title.charAt(0)}
                </div>
                <div>
                  <h3
                    className={`${pkg.styles.textColor} text-xl font-extrabold leading-none mb-1`}
                  >
                    {pkg.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 font-bold leading-tight uppercase tracking-wider">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Ideal For and Inclusions content area */}
              <div className="flex-1 flex flex-col gap-6 px-1">
                {/* Ideal For section */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-black font-extrabold text-sm">
                    <span className="text-base leading-none">➔</span>
                    <span>
                      Ideal For:{" "}
                      <span className="font-medium text-gray-800">
                        {pkg.idealFor}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Key Inclusions section */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 text-black font-extrabold text-sm">
                    <span className="text-base leading-none">➔</span>
                    <span>Key Inclusions:</span>
                  </div>

                  <ul className="space-y-2 pl-6 list-disc text-gray-800 text-sm leading-relaxed text-left">
                    {pkg.inclusions.map((inclusion, bulletIdx) => (
                      <li key={bulletIdx} className="font-medium">
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
