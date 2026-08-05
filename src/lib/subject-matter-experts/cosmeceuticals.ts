import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const cosmeceuticalsTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "cosmeceuticals-testimonial-1",
      quote:
        "Pubrica’s cosmeceutical editorial team demonstrated exceptional expertise in skin biology and formulation science. Their guidance significantly improved the scientific strength and clarity of our manuscript.",
      authorName: "Dr. Neha Rao",
      authorRole: "Cosmeceutical Research Scientist",
      authorLocation: "India",
      avatarLabel: "Portrait of Dr. Neha Rao",
      flagLabel: "India flag",
    },
    {
      id: "cosmeceuticals-testimonial-2",
      quote:
        "From journal selection to final submission, Pubrica provided end-to-end support. Their deep understanding of cosmeceutical regulations and claims substantiation was invaluable to our publication success.",
      authorName: "Dr. Arjun Mehta",
      authorRole: "Head of Skincare R&D",
      authorLocation: "Spain",
      avatarLabel: "Portrait of Dr. Arjun Mehta",
      flagLabel: "Spain flag",
    },
    {
      id: "cosmeceuticals-testimonial-3",
      quote:
        "Pubrica’s editors helped refine our clinical data and ensured our study met international journal standards. Their professionalism and subject-matter expertise truly stand out.",
      authorName: "Dr. Laura Kim",
      authorRole: "Dermatology Researcher",
      authorLocation: "USA",
      avatarLabel: "Portrait of Dr. Laura Kim",
      flagLabel: "USA flag",
    },
  ],
};