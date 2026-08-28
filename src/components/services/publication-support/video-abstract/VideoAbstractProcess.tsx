"use client";

import React from "react";
import Image from "next/image";
import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconSrc: string;
  position: "top" | "bottom";
}

const stepsData: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "SEND MATERIALS",
    description:
      "You place the order for your video and send your final manuscript and materials, such as graphs, charts, tables, and figures.",
    iconSrc: "/images/publication-support/video-abstract/Send-Materials.png",
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "SCRIPT & CONTENT DEVELOPMENT",
    description:
      "The Pubrica team of knowledgeable subject matter experts reviews the submitted manuscript and prepares the video script for every section of the manuscript.",
    iconSrc:
      "/images/publication-support/video-abstract/Script-Content-Development.png",
    position: "top",
  },
  {
    stepNumber: 3,
    title: "AUTHOR FEEDBACK",
    description:
      "You review the initial script and provide suggestions or ideas, if any.",
    iconSrc: "/images/publication-support/video-abstract/Author-Feedback.png",
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "VIDEO DEVELOPMENT",
    description:
      "We add suitable background music and a voiceover that contains a brief explanation of the video content.",
    iconSrc: "/images/publication-support/video-abstract/Video-Development.png",
    position: "top",
  },
  {
    stepNumber: 5,
    title: "ADD CAPTIONS AND SUBTITLES",
    description:
      "Our experienced transcribers add English subtitles for wider viewership.",
    iconSrc:
      "/images/publication-support/video-abstract/Add-Captions-and-Subtitles.png",
    position: "bottom",
  },
  {
    stepNumber: 6,
    title: "AUTHOR ACCEPTS THE VIDEO AND ABSTRACT",
    description: "You get all the deliverables in your inbox!",
    iconSrc:
      "/images/publication-support/video-abstract/Author-Accepts-the-Video-and-Abstract.png",
    position: "top",
  },
];

export default function VideoAbstractProcess() {
  return (
    <>


      <EditorialWorkflowSection
        heading="How the Video Abstract and Research Explainer Service Works"
        subheading="Our step-by-Step Process"
        description={
          <>
            With Pubrica&apos;s academic video abstract service, our scientific
            editors and creative media team work together to create a short,
            powerful video summary of your published research that is visually
            engaging, adheres to journal guidelines, and improves visibility on
            institutional repositories or public websites.
          </>
        }
        steps={[
          {
            stepNumber: 1,
            title: "SEND MATERIALS",
            description:
              "You place the order for your video and send your final manuscript and materials, such as graphs, charts, tables, and figures.",
            iconSrc:
              "/images/publication-support/video-abstract/Send-Materials.png",
            position: "bottom",
          },
          {
            stepNumber: 2,
            title: "SCRIPT & CONTENT DEVELOPMENT",
            description:
              "The Pubrica team of knowledgeable subject matter experts reviews the submitted manuscript and prepares the video script for every section of the manuscript.",
            iconSrc:
              "/images/publication-support/video-abstract/Script-Content-Development.png",
            position: "top",
          },
          {
            stepNumber: 3,
            title: "AUTHOR FEEDBACK",
            description:
              "You review the initial script and provide suggestions or ideas, if any.",
            iconSrc:
              "/images/publication-support/video-abstract/Author-Feedback.png",
            position: "bottom",
          },
          {
            stepNumber: 4,
            title: "VIDEO DEVELOPMENT",
            description:
              "We add suitable background music and a voiceover that contains a brief explanation of the video content.",
            iconSrc:
              "/images/publication-support/video-abstract/Video-Development.png",
            position: "top",
          },
          {
            stepNumber: 5,
            title: "ADD CAPTIONS AND SUBTITLES",
            description:
              "Our experienced transcribers add English subtitles for wider viewership.",
            iconSrc:
              "/images/publication-support/video-abstract/Add-Captions-and-Subtitles.png",
            position: "bottom",
          },
          {
            stepNumber: 6,
            title: "AUTHOR ACCEPTS THE VIDEO AND ABSTRACT",
            description: "You get all the deliverables in your inbox!",
            iconSrc:
              "/images/publication-support/video-abstract/Author-Accepts-the-Video-and-Abstract.png",
            position: "top",
          },
        ]}
      />
    </>
  );
}
