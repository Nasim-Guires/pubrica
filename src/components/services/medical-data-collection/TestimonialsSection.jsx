'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CommonTestimonial from '@/components/common/CommonTestimonials';

const testimonials = [
  {
    image: "/images/medical-writing/the-lancet.png",
    quote:
      "We relied on Pubrica for retrospective data abstraction, and their ability to handle sensitive patient information with accuracy and confidentiality exceeded our expectations.",
    name: "DR. P. NAIR",
    designation: "Hospital Research Coordinator",
    organization: "UAE",
    flag: "/images/medical-writing/UAE.png",
  },
  {
    image:
      "/images/medical-writing/international-journal-of-cardialogy-1-1.png",
    quote:
      "Our pharmacovigilance study needed accurate real-world data, and Pubrica delivered exactly that. Their professionalism and understanding of regulatory guidelines made them an ideal partner.",
    name: "MR. V. IYER",
    designation: "Pharmacovigilance Manager",
    organization: "India",
    flag: "/images/medical-writing/in.png",
  },
  {
    image: "/images/medical-writing/RSNA-1-1.png",
    quote:
      "The medical data collection support from Pubrica was critical for our multi-centre clinical trial. Their attention to detail and compliance with GCP ensured clean, reliable datasets that met both regulatory and sponsor requirements.",
    name: "Dr. S. Mehta",
    designation: "Clinical Research Director",
    organization: "India",
    flag: "/images/medical-writing/in.png",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <CommonTestimonial
        title="Testimonials"
        description="Hear from researchers and healthcare professionals who have benefited from Pubrica's reliable, accurate, and confidential medical data collection services."
        testimonials={testimonials}
      />
    </>
  );
}