import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const chemicalEngineeringTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "chemical-engineering-testimonial-1",
      quote:
        "Pubrica’s chemical engineering team provided exceptional support in refining our process modelling manuscript. Their expertise significantly improved the clarity and technical accuracy.",
      authorName: "Dr Ahmed Khan",
      authorRole: "Process Engineer",
      authorLocation: "UAE",
      avatarLabel: "Portrait of Dr Ahmed Khan",
      avatarSrc: "/images/subject-matter-experts/chemical-engineering/Dr-Ahmed-Khan.webp",
      flagLabel: "UAE flag icon",
      flagSrc: "/images/subject-matter-experts/biocomputing/uae.webp",
    },
    {
      id: "chemical-engineering-testimonial-2",
      quote:
        "Their editing and publication support helped us present complex reaction engineering concepts clearly. Our paper was accepted with minimal revisions.",
      authorName: "Dr Maria Lopez",
      authorRole: "Chemical Research Scientist",
      authorLocation: "Spain",
      avatarLabel: "Portrait of Dr Maria Lopez",
      avatarSrc: "/images/subject-matter-experts/algorithm/Dr.-Hiroshi-Tanaka-1.webp",
      flagLabel: "Spain flag icon",
      flagSrc: "/images/editing-and-translation/thesis-editing/spain-.png",
    },
    {
      id: "chemical-engineering-testimonial-3",
      quote:
        "Pubrica’s team enhanced the quality of our research in sustainable chemical processes. Their attention to detail and technical understanding were outstanding.",
      authorName: "Dr James Carter",
      authorRole: "Environmental Engineer",
      authorLocation: "USA",
      avatarLabel: "Portrait of Dr James Carter",
      avatarSrc: "/images/subject-matter-experts/chemical-engineering/Dr-James-Carter.webp",
      flagLabel: "USA flag icon",
      flagSrc: "/images/subject-matter-experts/algorithm/usa-.png",
    },
  ],
};