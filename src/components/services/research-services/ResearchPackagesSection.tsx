import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

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
  iconSrc?: string;
}

interface ResearchPackagesProps {
  title?: string;
  description?: string;
  packages?: PackageColumn[];
}

export const ResearchPackagesSection: React.FC<ResearchPackagesProps> = ({

}) => {
  const packages: PackageItem[] = [
    {
      icon: "/images/publication-support/poster-preparation/S.png",
      title: "Starter",
      subtitle: "Foundational Research Support",
      idealFor: "Early-stage researchers & students",
      includes: [
        "Topic selection guidance",
        "Problem statement & objective framing",
        "Basic literature survey",
        "Proposal structuring",
        "Methodology outline",
      ],
      cardBgColor: "#cad7d8",
      titleColor: "#0c4a60",
    },
    {
      icon: "/images/publication-support/poster-preparation/S.png",
      title: "Standard",
      subtitle: "Complete Research Assistance",
      idealFor: "Researchers needing full manuscript support",
      includes: [
        "Comprehensive literature review",
        "Research design & methodology",
        "Questionnaire/tool design (if needed)",
        "Data collection strategy",
        "Manuscript drafting (IMRAD format)",
      ],
      cardBgColor: "#d9cce3",
      titleColor: "#6b21a8",
    },
    {
      icon: "/images/product-development/advanced.webp",
      title: "Advanced",
      subtitle: "Publication-Ready Research",
      idealFor: "Those preparing for journal submission",
      includes: [
        "All Standard Package features",
        "Statistical analysis & results interpretation",
        "Complete manuscript writing with references",
        "Journal selection & formatting",
        "Reviewer revision support",
      ],
      cardBgColor: "#cfb997",
      titleColor: "#78350f",
    },
    {
      icon: "/images/research-services/c-box-icons.png",
      title: "Custom",
      subtitle: "Tailored Research Solutions",
      idealFor: "Specialized or domain-specific projects",
      includes: [
        "Customized service combinations",
        "Subject-specific experts (e.g., Medical, Engineering)",
        "Dedicated project manager",
        "Flexible deliverables and timelines",
      ],
      cardBgColor: "#dca482",
      titleColor: "#c2410c",
    },
  ];
  return (
    <div className="bg-slate-50 py-12">
      <CommonPackages
        title="Research Service – Our Packages"
        description="At Pubrica, we offer flexible and comprehensive research service packages tailored to meet the unique needs of researchers at every stage of their academic or clinical journey. Whether you're developing a concept or preparing for publication, our packages are designed for precision, quality, and impact."
        packages={packages}
      />

      {/* Button wrapper with negative top margin to pull it flush against the table */}
      <div className="flex justify-center -mt-6 pb-4">
        <GetFreeQuoteButton />
      </div>
    </div>
  );
};
