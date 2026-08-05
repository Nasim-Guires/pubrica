import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const cloudComputingTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "cloud-computing-testimonial-1",
      quote:
        "Pubrica’s expertise in cloud computing helped refine our research and present it with clarity and technical precision. Their support made publication seamless.",
      authorName: "Dr. Rahul Mehta",
      authorRole: "Cloud Systems Researcher",
      authorLocation: "Australia",
      avatarLabel: "Portrait of Dr. Rahul Mehta",
      flagLabel: "Australia flag",
    },
    {
      id: "cloud-computing-testimonial-2",
      quote:
        "The editorial team demonstrated deep technical understanding of cloud architecture and distributed systems. Their guidance significantly strengthened our manuscript.",
      authorName: "Dr. Neha Verma",
      authorRole: "Cloud Computing Specialist",
      authorLocation: "India",
      avatarLabel: "Portrait of Dr. Neha Verma",
      flagLabel: "India flag",
    },
    {
      id: "cloud-computing-testimonial-3",
      quote:
        "From manuscript review to journal submission, Pubrica provided exceptional support. Their knowledge of cloud technologies and publishing standards is outstanding.",
      authorName: "Dr. Ankit Rao",
      authorRole: "Data & Cloud Infrastructure Researcher",
      authorLocation: "United States",
      avatarLabel: "Portrait of Dr. Ankit Rao",
      flagLabel: "United States flag",
    },
  ],
};