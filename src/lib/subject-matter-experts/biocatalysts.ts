import type { ClientTestimonialsProps } from "@/components/common/WhatClientsSays";

export const biocatalystsTestimonialsData: ClientTestimonialsProps = {
  heading: "What Our Client Says About Us",
  itemsPerPage: 2,
  testimonials: [
    {
      id: "biocatalysts-testimonial-1",
      quote:
        "Working with this biocatalyst team has been transformative for our lab projects. Their deep expertise and meticulous approach to enzyme optimization accelerated our research timelines significantly. The guidance provided was clear, precise, and highly actionable.",
      authorName: "Dr. Amanda Lee",
      authorRole: "PhD in Biochemistry",
      authorLocation: "USA",
      avatarLabel: "Portrait of Dr. Amanda Lee",
      flagLabel: "USA flag",
    },
    {
      id: "biocatalysts-testimonial-2",
      quote:
        "I was impressed by the depth of knowledge and responsiveness of the biocatalyst experts. They helped refine our enzyme processes, improving yield and efficiency. Their support has been invaluable for our publication and patent preparation.",
      authorName: "Dr. Elena Rodriguez",
      authorRole: "Pharmaceutical Scientist",
      authorLocation: "Spain",
      avatarLabel: "Portrait of Dr. Elena Rodriguez",
      flagLabel: "Spain flag",
    },
    {
      id: "biocatalysts-testimonial-3",
      quote:
        "From project consultation to experimental design, the biocatalyst team exceeded expectations. Their insights were critical in overcoming technical challenges, and their dedication to quality ensured our research results were robust and reproducible.",
      authorName: "Dr. Michael Chen",
      authorRole: "Molecular Biologist",
      authorLocation: "China",
      avatarLabel: "Portrait of Dr. Michael Chen",
      flagLabel: "China flag",
    },
  ],
};