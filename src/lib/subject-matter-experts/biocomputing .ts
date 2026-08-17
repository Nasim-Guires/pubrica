import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const biocomputingTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "biocomputing-testimonial-1",
      quote:
        "Pubrica’s biocomputing editors delivered exceptional clarity and refinement. Their scientific insight helped strengthen the manuscript and improve its suitability for a high-impact journal. Truly professional and reliable support.",
      authorName: "Dr. Sofia Mendes",
      authorRole: "Computational Biologist",
      authorLocation: "Portugal",
      avatarLabel: "Photo of Dr. Sofia Mendes",
      avatarSrc: "/images/subject-matter-experts/biocomputing/Dr.-Sofia-Mendes.webp",
      flagLabel: "Portugal Flag",
      flagSrc: "/images/academic-editorial-services/Portugal-.png",
    },
    {
      id: "biocomputing-testimonial-2",
      quote:
        "The editing team demonstrated exceptional expertise in biocomputing and genomic data analysis. Their revisions improved technical readability, consistency, and academic tone. Thanks to Pubrica, my manuscript was accepted with minimal revisions.",
      authorName: "Dr. Kenji Yamamoto",
      authorRole: "Bioinformatics Research Scientist",
      authorLocation: "Japan",
      avatarLabel: "Photo of Dr. Kenji Yamamoto",
      avatarSrc: "/images/subject-matter-experts/algorithm/Dr.-Hiroshi-Tanaka-1.webp",
      flagLabel: "Japan Flag",
      flagSrc: "/images/editing-and-translation/japan.png",
    },
    {
      id: "biocomputing-testimonial-3",
      quote:
        "Pubrica’s biocomputing editors exceeded expectations. Their editing was precise, technical, and thoughtful, ensuring that the content remained scientifically accurate while becoming clear and publication-ready. I will definitely return for future submissions.",
      authorName: "Dr. Ahmed Al-Faris",
      authorRole: "Systems Biology Researcher",
      authorLocation: "UAE",
      avatarLabel: "Photo of Dr. Ahmed Al-Faris",
      avatarSrc: "/images/subject-matter-experts/big-data-hadoop/Prof.-A.-Williams.webp",
      flagLabel: "UAE Flag",
      flagSrc: "/images/subject-matter-experts/biocomputing/uae.webp",
    },
  ],
};