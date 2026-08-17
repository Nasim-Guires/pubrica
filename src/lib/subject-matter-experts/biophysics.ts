import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const biophysicsTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "Pubrica’s editors demonstrated a deep understanding of interdisciplinary biophysics research. Their insights strengthened the logical flow, scientific interpretation, and presentation of experimental results. The final manuscript was publication-ready and received highly positive reviewer comments. I would strongly recommend Pubrica to fellow researchers.",
      authorName: "Dr. A. Kumar",
      authorRole: "University Lecturer",
      authorLocation: "United Kingdom",
      avatarLabel: "Photo of Dr. A. Kumar",
      avatarSrc: "/images/subject-matter-experts/biophysics/Dr.-A.-Kumar.webp",
      flagLabel: "United Kingdom flag",
      flagSrc: "/images/research-services/systematic-review/united-kingdom-.png",
    },
    {
      id: "testimonial-2",
      quote:
        "My computational biophysics manuscript involved extensive simulations and algorithmic modelling, and Pubrica’s editor handled the technical content with remarkable precision. Their revisions strengthened the narrative, improved data presentation, and aligned the paper with journal expectations. The review response process became much smoother as a result.",
      authorName: "Dr. H. Nakamura",
      authorRole: "Assistant Professor",
      authorLocation: "Japan",
      avatarLabel: "Photo of Dr. H. Nakamura",
      avatarSrc: "/images/subject-matter-experts/biomedical-engineering/Dr.-Aidan-Matthews-1.webp",
      flagLabel: "Japan flag",
      flagSrc: "/images/editing-and-translation/japan.png",
    },
    {
      id: "testimonial-3",
      quote:
        "Pubrica’s expertise in biophysics editing significantly improved the clarity and scientific quality of my manuscript. The editor refined complex molecular models into a concise and well-structured discussion, which played a major role in the manuscript being accepted in a high-impact journal. I truly appreciate their professionalism and technical understanding.",
      authorName: "Dr. S. Patel",
      authorRole: "Research Scientist",
      authorLocation: "India",
      avatarLabel: "Photo of Dr. S. Patel",
      avatarSrc: "/images/subject-matter-experts/biomedical-engineering/Dr.-Neeraj-S.webp",
      flagLabel: "India flag",
      flagSrc: "/images/subject-matter-experts/biomonitoring/india.webp",
    },
  ],
};