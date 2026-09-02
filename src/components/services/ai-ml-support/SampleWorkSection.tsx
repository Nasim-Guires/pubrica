"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";

export default function SampleWorkSection() {
  return (
    <>
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/ai-ml-support/Artificial-Intelligence-and-Machine-Learning-Services-Sample-Work.webp",
          alt: "AI and Machine Learning Services Sample Work",
          width: 600,
          height: 450,
        }}
        sections={[
          {
            heading:
              "Artificial Intelligence and Machine Learning Services Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              {
                text: "Explore our AI & ML modeling samples, created to demonstrate domain-focused algorithms, precise data handling, and adherence to scientific and regulatory standards, yielding impactful, publication-ready outcomes.",
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
    </>
  );
}
