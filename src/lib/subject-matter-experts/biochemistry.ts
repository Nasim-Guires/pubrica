import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const biochemistryTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "biochemistry-testimonial-1",
      quote:
        "Pubrica’s biochemistry editing support brought clarity and precision to my manuscript. The editor provided valuable suggestions on data interpretation and helped refine the structure for better readability. Thanks to their expertise, my paper was accepted in a high-impact journal without major revisions.",
      authorName: "Dr. Elena Moretti",
      authorRole: "Research Scientist",
      authorLocation: "Italy",
      avatarLabel: "Photo of Dr. Elena Moretti",
      flagLabel: "Italy Flag",
    },
    {
      id: "biochemistry-testimonial-2",
      quote:
        "The biochemistry editorial team at Pubrica is highly professional and knowledgeable. Their suggestions enhanced both the readability and scientific rigor of my manuscript on cellular signaling pathways.",
      authorName: "Prof. James Thompson",
      authorRole: "Professor of Biochemistry",
      authorLocation: "USA",
      avatarLabel: "Photo of Prof. James Thompson",
      flagLabel: "USA Flag",
    },
    {
      id: "biochemistry-testimonial-3",
      quote:
        "Working with Pubrica has been a game-changer for my publications. Their deep understanding of biochemistry concepts, from structural biology to enzymology, made the editing process seamless and insightful.",
      authorName: "Dr. Ananya Patel",
      authorRole: "Senior Scientist",
      authorLocation: "India",
      avatarLabel: "Photo of Dr. Ananya Patel",
      flagLabel: "India Flag",
    },
  ],
};