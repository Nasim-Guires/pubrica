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
      flagLabel: "UAE flag icon",
    },
    {
      id: "chemical-engineering-testimonial-2",
      quote:
        "Their editing and publication support helped us present complex reaction engineering concepts clearly. Our paper was accepted with minimal revisions.",
      authorName: "Dr Maria Lopez",
      authorRole: "Chemical Research Scientist",
      authorLocation: "Spain",
      avatarLabel: "Portrait of Dr Maria Lopez",
      flagLabel: "Spain flag icon",
    },
    {
      id: "chemical-engineering-testimonial-3",
      quote:
        "Pubrica’s team enhanced the quality of our research in sustainable chemical processes. Their attention to detail and technical understanding were outstanding.",
      authorName: "Dr James Carter",
      authorRole: "Environmental Engineer",
      authorLocation: "USA",
      avatarLabel: "Portrait of Dr James Carter",
      flagLabel: "USA flag icon",
    },
  ],
};