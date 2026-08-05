import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const bioinformaticsTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "bioinformatics-testimonial-1",
      quote:
        "Pubrica’s bioinformatics editors refined my manuscript with exceptional clarity. Their deep understanding of computational biology helped me present my results more effectively. My paper was accepted without major revisions.",
      authorName: "Dr. Nikhil Sharma",
      authorRole: "Assistant Professor",
      authorLocation: "India",
      avatarLabel: "Photo of Dr. Nikhil Sharma",
      flagLabel: "India flag",
    },
    {
      id: "bioinformatics-testimonial-2",
      quote:
        "My proteomics study was edited thoroughly and professionally. The team understood complex bioinformatics concepts and improved both language and presentation without altering the science.",
      authorName: "Dr. Maria Santos",
      authorRole: "Senior Researcher",
      authorLocation: "Portugal",
      avatarLabel: "Photo of Dr. Maria Santos",
      flagLabel: "Portugal flag",
    },
    {
      id: "bioinformatics-testimonial-3",
      quote:
        "The editor improved the readability and scientific accuracy of my genomics research paper. Their suggestions strengthened the results section and made the review process smooth.",
      authorName: "Dr. Laura Kim",
      authorRole: "Research Scientist",
      authorLocation: "South Korea",
      avatarLabel: "Photo of Dr. Laura Kim",
      flagLabel: "South Korea flag",
    },
  ],
};