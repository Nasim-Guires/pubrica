import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SampleWorkShowcase: React.FC = () => {
  return (
    <PubricaSampleWorkCard
      bookCoverImage={{
        src: "/images/data-analytics-machine-learning/Data-Analytics-and-Machine-Learning-Services-Sample-Work-1.webp",
        alt: "Data Analytics and Machine Learning Services Sample Work 1",
        width: 600,
        height: 750,
      }}
      sections={[
        {
          heading: "Data Analytics and Machine Learning Services Sample Work",
          button: {
            label: "Discover More",
            url: "/insights/sample-work",
          },
        },
        {
          heading: "Download the full Report Now",
          descriptionSegments: [
            {
              text: "Explore our machine learning and data analytics sample work, designed to meet rigorous methodological standards, journal-specific formatting requirements, and project deadlines. We deliver precise, valid, and publication-ready results that strengthen academic, clinical, and business research outcomes.",
            },
          ],
          button: {
            label: "Discover More",
            url: "/insights/sample-work",
          },
        },
      ]}
      footerDisclaimerSegments={[]}
    />
  );
};
