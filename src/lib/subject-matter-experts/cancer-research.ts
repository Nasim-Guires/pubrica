import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const cancerResearchTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "cancer-research-testimonial-1",
      quote:
        "Working with Pubrica’s cancer research editors transformed my manuscript. Their insights not only refined my data presentation but also improved the clarity and overall impact of my work. The guidance I received was invaluable in getting my paper accepted in a high-impact journal.",
      authorName: "Dr. Meera Iyer",
      authorRole: "Molecular Biologist",
      authorLocation: "India",
      avatarLabel: "Portrait of Dr. Meera Iyer",
      flagLabel: "India flag",
    },
    {
      id: "cancer-research-testimonial-2",
      quote:
        "Collaborating with Pubrica was a seamless experience. Their expertise in cancer research and scientific writing helped us present complex findings clearly and concisely. Their support enhanced both the scientific quality and publication potential of our work.",
      authorName: "Dr. Vikram Singh",
      authorRole: "Molecular Oncologist",
      authorLocation: "USA",
      avatarLabel: "Portrait of Dr. Vikram Singh",
      flagLabel: "USA flag",
    },
    {
      id: "cancer-research-testimonial-3",
      quote:
        "Pubrica’s cancer research editors are exceptional. They not only polished our manuscripts but also provided critical insights into our study’s conceptual framework. Their guidance played a crucial role in getting our paper accepted in a high-impact oncology journal.",
      authorName: "Dr. Ananya Sharma",
      authorRole: "Cancer Biologist",
      authorLocation: "UK",
      avatarLabel: "Portrait of Dr. Ananya Sharma",
      flagLabel: "United Kingdom flag",
    },
  ],
};