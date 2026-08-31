import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import React from "react";

const MetaAnalysisPackagesSection = () => {
  const packages: PackageItem[] = [
    {
      icon: "/images/editing-and-translation/basic-pacakge.png",
      title: "Basic",
      subtitle: "Starter Support",
      idealFor:
        "Pilot studies, thesis work, academic assignments",
      includes: [
        "Comprehensive literature search (2–3 databases)",
        "Data extraction & tabulation",
        "Fixed/random effects model analysis",
        "Basic forest plot generation",
        "Summary statistics and interpretation",
      ],
      turnaround: "2–3 weeks",
      cardBgColor: "#D7E1E4",
      titleColor: "#1F4B60",
    },
    {
      icon: "/images/publication-support/art-work-preparation/S.png",
      title: "Standard",
      subtitle: "Complete Meta-Analysis",
      idealFor:
        "Journal submission, postgraduate research, grant-funded studies",
      includes: [
        "Comprehensive database search (5+ sources)",
        "Risk of bias assessment",
        "Meta-analysis using RevMan/STATA",
        "Forest & funnel plots",
        "Drafting of manuscript",
        "Formatting as per journal guidelines",
      ],
      turnaround: "3–4 weeks",
      cardBgColor: "#DAB9E0",
      titleColor: "#7A44A8",
    },
    {
      icon: "/images/editing-and-translation/pro.webp",
      title: "Premium",
      subtitle: "Publication-Ready Support",
      idealFor:
        "Faculty, clinicians and funded projects aiming for top-tier journals.",
      includes: [
        "End-to-end protocol & manuscript writing",
        "Advanced statistical modelling",
        "Journal formatting & referencing",
        "GRADE evidence profiles",
        "Journal submission support",
      ],
      turnaround: "4–6 weeks",
      cardBgColor: "#D8BC83",
      titleColor: "#7A4D0B",
    },
  ];
  return (
    <>
      <section>
        <CommonPackages
          title="Meta Analysis Service – Our Packages"
          subtitle="Tailored Solutions to Fit Your Research Needs and Budget"
          description="At Pubrica, we offer flexible and customizable meta-analysis service packages to support researchers at various stages of their academic or clinical projects. Whether you're looking for end-to-end meta-analysis support or targeted assistance with specific tasks, we have a package for you."
          packages={packages}
        />
        <GetFreeQuoteButton />

      </section>
    </>
  );
};

export default MetaAnalysisPackagesSection;
