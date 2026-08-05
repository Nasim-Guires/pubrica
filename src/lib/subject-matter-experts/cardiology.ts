import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const cardiologyTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "cardiology-testimonial-1",
      quote:
        "Working with Pubrica’s cardiology editing team transformed my manuscript. Their attention to detail and deep understanding of cardiovascular research ensured my work was publication-ready. I highly recommend their services to any medical professional aiming for top-tier journals.",
      authorName: "Dr. Emily Carter",
      authorRole: "Cardiologist",
      authorLocation: "USA",
      avatarLabel: "Portrait of Dr. Emily Carter",
      flagLabel: "USA flag",
    },
    {
      id: "cardiology-testimonial-2",
      quote:
        "The cardiology editors at Pubrica are exceptional. They have a keen eye for scientific precision and formatting, which made the submission process smooth and efficient. Their support significantly increased my confidence in my publication.",
      authorName: "Dr. Laura Mitchell",
      authorRole: "Interventional Cardiologist",
      authorLocation: "UK",
      avatarLabel: "Portrait of Dr. Laura Mitchell",
      flagLabel: "United Kingdom flag",
    },
    {
      id: "cardiology-testimonial-3",
      quote:
        "Pubrica’s expertise in cardiology editing is unparalleled. They not only polished my manuscript but also provided insightful suggestions that enhanced the clarity and impact of my research. Truly a professional and reliable service.",
      authorName: "Prof. Rajesh Kumar",
      authorRole: "Cardiology Researcher",
      authorLocation: "India",
      avatarLabel: "Portrait of Prof. Rajesh Kumar",
      flagLabel: "India flag",
    },
  ],
};