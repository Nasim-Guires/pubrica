import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const clientTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "The editing support was exceptional. My manuscript on nanocomposite coatings was thoroughly reviewed, yielding insightful comments that strengthened the methodology and enhanced the clarity of the results. Thanks to the team, the paper was accepted in a high-impact journal on the first submission.",
      authorName: "Dr. Praveen R",
      authorRole: "Assistant Professor",
      authorLocation: "India",
      avatarLabel: "Dr. Praveen R profile image",
      avatarSrc: "/images/subject-matter-experts/material-science/Dr.-Praveen-R-1.webp",
      flagLabel: "India flag",
      flagSrc: "/images/editing-and-translation/translation-with-editing/india.png",
    },
    {
      id: "testimonial-2",
      quote:
        "The service provided excellent improvements in language, structure, and referencing. The editor's suggestions were precise and strengthened the technical presentation of my experimental analysis. I will definitely use their services again for future publications.",
      authorName: "Dr. Hiroko S",
      authorRole: "Materials Scientist",
      authorLocation: "Japan",
      avatarLabel: "Dr. Hiroko S profile image",
      avatarSrc: "/images/subject-matter-experts/material-science/Dr.-Hiroko-S-1.webp",
      flagLabel: "Japan flag",
      flagSrc: "/images/editing-and-translation/manuscript-editing/uk-flag-.png",
    },
    {
      id: "testimonial-3",
      quote:
        "I truly appreciate the editor's subject expertise. They understood the technical depth of my work on polymer degradation and helped refine the discussion while maintaining scientific accuracy. The editing significantly enhanced the readability and flow of the paper.",
      authorName: "Maria L",
      authorRole: "PhD Research Scholar",
      authorLocation: "United Kingdom",
      avatarLabel: "Maria L profile image",
      avatarSrc: "/images/subject-matter-experts/material-science/Maria-L-1.webp",
      flagLabel: "United Kingdom flag",
      flagSrc: "/images/editing-and-translation/japan.png",
    },
  ],
};