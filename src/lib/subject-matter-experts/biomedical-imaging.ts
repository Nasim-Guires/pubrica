import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const biomedicalImagingTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "biomedical-imaging-testimonial-1",
      quote:
        "The editorial support we received was exceptional. The team improved the clarity of our MRI-based diagnostic study without changing the scientific meaning. Their expertise in image reconstruction and data interpretation greatly strengthened our manuscript, and it was accepted in a high-impact journal on the first submission.",
      authorName: "Dr. Anitha R",
      authorRole: "Radiology Researcher",
      authorLocation: "India",
      avatarLabel: "Photo of Dr. Anitha R",
      flagLabel: "India flag",
    },
    {
      id: "biomedical-imaging-testimonial-2",
      quote:
        "The editors demonstrated excellent knowledge of radiomics and machine learning in medical imaging. Their precise edits improved the flow, scientific tone, and alignment with journal guidelines. Thanks to their guidance, our manuscript was published within two review cycles.",
      authorName: "Prof. Chen Li",
      authorRole: "Biomedical Imaging & AI Research",
      authorLocation: "China",
      avatarLabel: "Photo of Prof. Chen Li",
      flagLabel: "China flag",
    },
    {
      id: "biomedical-imaging-testimonial-3",
      quote:
        "I was impressed with their deep understanding of PET-CT analysis and quantitative imaging. They not only enhanced the language but also identified missing methodological details that helped us significantly improve our paper before peer review. Highly recommended for biomedical imaging publications.",
      authorName: "Dr. Miguel Torres",
      authorRole: "Nuclear Medicine Scientist",
      authorLocation: "Spain",
      avatarLabel: "Photo of Dr. Miguel Torres",
      flagLabel: "Spain flag",
    },
  ],
};