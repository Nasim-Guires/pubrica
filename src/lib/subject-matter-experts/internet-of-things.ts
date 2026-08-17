import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const internetOfThingsTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "internet-of-things-testimonial-1",
      quote:
        "The editing support was exceptional. My manuscript on nanocomposite coatings was thoroughly reviewed, with insightful comments that strengthened the methodology and enhanced the clarity of the results. Thanks to the team, the paper was accepted in a high-impact journal on the first submission.",
      authorName: "Dr. Praveen R",
      authorRole: "Assistant Professor",
      authorLocation: "India",
      avatarLabel: "Portrait of Dr. Praveen R",
      avatarSrc: "/images/subject-matter-experts/material-science/Dr.-Praveen-R-1.webp",
      flagLabel: "India flag",
      flagSrc: "/images/editing-and-translation/translation-with-editing/india.png",
    },
    {
      id: "internet-of-things-testimonial-2",
      quote:
        "The service provided excellent improvements in language, structure, and referencing. The editor’s suggestions were precise and significantly strengthened the technical presentation of my experimental analysis. I will use their services again for future publications.",
      authorName: "Dr. Hiroko S",
      authorRole: "Materials Scientist",
      authorLocation: "Japan",
      avatarLabel: "Portrait of Dr. Hiroko S",
      avatarSrc: "/images/subject-matter-experts/material-science/Dr.-Hiroko-S-1.webp",
      flagLabel: "Japan flag",
      flagSrc: "/images/editing-and-translation/japan.png",
    },
    {
      id: "internet-of-things-testimonial-3",
      quote:
        "I truly appreciate the editor’s subject expertise. They clearly understood the technical depth of my work on polymer degradation and helped refine the discussion while maintaining scientific accuracy. The editing greatly improved the overall readability and flow of the paper.",
      authorName: "Maria L",
      authorRole: "Research Scholar",
      authorLocation: "United Kingdom",
      avatarLabel: "Portrait of Maria L",
      avatarSrc: "/images/subject-matter-experts/internet-of-things/Maria-L.webp",
      flagLabel: "United Kingdom flag",
      flagSrc: "/images/research-services/systematic-review/united-kingdom-.png",
    },
  ],
};