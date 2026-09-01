import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: React.ReactNode;
  iconPath: string;
  isDarkBg?: boolean;
}

const RS_IMG = "/images/research-services";

export const ResearchWorkflowProcess: React.FC = () => {
  // const steps: ProcessStep[] = [
  //   {
  //     stepNumber: 1,
  //     title: "REQUIREMENT GATHERING",
  //     description:
  //       "We begin by understanding your specific research project help needs through consultation. This includes topic selection, research objectives, target audience, and expected deliverables.",
  //     iconPath: `${RS_IMG}/Requirement-Gathering.png`,
  //   },
  //   {
  //     stepNumber: 2,
  //     title: "PROPOSAL AND SCOPE FINALIZATION",
  //     description: (
  //       <>
  //         Based on your inputs, we will prepare a{" "}
  //         <Link
  //           href="/services/physician-writing-services/research-proposal/"
  //           className="text-blue-600 font-medium transition-colors no-underline hover:no-underline"
  //         >
  //           research proposal
  //         </Link>{" "}
  //         detailing the scope, methodology, compliance guidelines (e.g.,
  //         PRISMA, Cochrane, ICMJE), timelines, and cost.
  //       </>
  //     ),
  //     iconPath: `${RS_IMG}/Proposal-and-Scope-Finalization.png`,
  //   },
  //   {
  //     stepNumber: 3,
  //     title: "IN-DEPTH RESEARCH AND DATA COLLECTION",
  //     description:
  //       "Our subject-matter experts conduct comprehensive literature searches, data sourcing, and evidence-based research using trusted databases like PubMed, Scopus, and Web of Science.",
  //     iconPath: `${RS_IMG}/In-Depth-Research-and-Data-Collection.png`,
  //   },
  //   {
  //     stepNumber: 4,
  //     title: "ANALYSIS AND INTERPRETATION",
  //     description:
  //       "We perform qualitative and quantitative data analysis, applying statistical tools, AI/ML models (if required), and domain-specific validation to ensure accuracy and reproducibility.",
  //     iconPath: `${RS_IMG}/Analysis-and-Interpretation.png`,
  //   },
  //   {
  //     stepNumber: 5,
  //     title: "CONTENT DEVELOPMENT AND REVIEW",
  //     description:
  //       "We draft structured manuscripts, reports, and white papers, supported by citations (APA, Oxford, MLA) and IMRAD structure. Our internal quality team performs peer review and compliance checks.",
  //     iconPath: `${RS_IMG}/Content-Development-and-Review.png`,
  //     isDarkBg: true,
  //   },
  //   {
  //     stepNumber: 6,
  //     title: "FINAL DELIVERY AND REVISIONS",
  //     description:
  //       "The completed output is delivered in your preferred format. We incorporate reviewer comments, perform revisions, and ensure readiness for journal submission or regulatory approval.",
  //     iconPath: `${RS_IMG}/Final-Delivery-and-Revisions.png`,
  //   },
  // ];

  return (
  
      <EditorialWorkflowSection
        heading="How Our Research Service works"
        subheading="Our Step-By-Step Process"
        description={
          <>
            At Pubrica, our academic research assistance and scientific publication support services follow a structured and collaborative approach to ensure precision, transparency, and high-quality outcomes.
          </>
        }
        steps={[
          {
            stepNumber: 1,
            title: "REQUIREMENT GATHERING",
            description:
              "We begin by understanding your specific research project help needs through consultation. This includes topic selection, research objectives, target audience, and expected deliverables.",
            iconSrc: `${RS_IMG}/Requirement-Gathering.png`,
            position: "top",
          },
          {
            stepNumber: 2,
            title: "PROPOSAL AND SCOPE FINALIZATION",
            description: (
              <>
                Based on your inputs, we will prepare a{" "}
                <Link
                  href="/services/physician-writing-services/research-proposal/"
                  className="text-blue-600 no-underline hover:no-underline"
                >
                  research proposal
                </Link>{" "}
                detailing the scope, methodology, compliance guidelines (e.g., PRISMA, Cochrane, ICMJE), timelines, and cost.
              </>
            ),
            iconSrc: `${RS_IMG}/Proposal-and-Scope-Finalization.png`,
            position: "bottom",
          },
          {
            stepNumber: 3,
            title: "IN-DEPTH RESEARCH AND DATA COLLECTION",
            description:
              "Our subject-matter experts conduct comprehensive literature searches, data sourcing, and evidence-based research using trusted databases like PubMed, Scopus, and Web of Science.",
            iconSrc: `${RS_IMG}/In-Depth-Research-and-Data-Collection.png`,
            position: "top",
          },
          {
            stepNumber: 4,
            title: "ANALYSIS AND INTERPRETATION",
            description:
              "We perform qualitative and quantitative data analysis, applying statistical tools, AI/ML models (if required), and domain-specific validation to ensure accuracy and reproducibility.",
            iconSrc: `${RS_IMG}/Analysis-and-Interpretation.png`,
            position: "bottom",
          },
          {
            stepNumber: 5,
            title: "CONTENT DEVELOPMENT AND REVIEW",
            description:
              "We draft structured manuscripts, reports, and white papers, supported by citations (APA, Oxford, MLA) and IMRAD structure. Our internal quality team performs peer review and compliance checks.",
            iconSrc: `${RS_IMG}/Content-Development-and-Review.png`,
            position: "top",
          },
          {
            stepNumber: 6,
            title: "FINAL DELIVERY AND REVISIONS",
            description:
              "The completed output is delivered in your preferred format. We incorporate reviewer comments, perform revisions, and ensure readiness for journal submission or regulatory approval.",
            iconSrc: `${RS_IMG}/Final-Delivery-and-Revisions.png`,
            position: "bottom",
          },
        ]}
      />
  );
};