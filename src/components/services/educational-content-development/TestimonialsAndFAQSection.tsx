'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import CommonTestimonial from '@/components/common/CommonTestimonials';
import CommonFAQ from '@/components/common/FAQ';

// ==========================================
// TYPES & DATA
// ==========================================

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  country: string;
  coverSrc: string;
  flagSrc: string;
  imageAlt: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const testimonials = [
  {
    image:
      "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/journal-of-cancer-reserach-clinical-oncology-.webp",
    quote:
      "Pubrica’s educational content development team transformed our curriculum materials with clarity and precision. The engaging modules they created have significantly improved learner interaction and comprehension.",
    name: "DR. EMILY ROBERTS",
    designation: "Program Director",
    organization: "Leading Medical University, USA",
    flag: "/images/editing-and-translation/scientific-editing/usa-.png",
  },
  {
    image:
      "/images/marketing-communication-content-development-service/jama-oncology-journal-1-1.webp",
    quote:
      "Working with Pubrica has been a seamless experience. Their ability to deliver evidence-based and compliant educational content has strengthened our training programs and elevated the learning outcomes for our students.",
    name: "PROF. JAMES THORNTON",
    designation: "Head of Academics",
    organization: "Global Healthcare Training Institute, UK",
    flag: "/images/editing-and-translation/manuscript-editing/uk-flag-.png",
  },
  {
    image:
      "/images/marketing-communication-content-development-service/british-journal-of-clinical-pharmacology.webp",
    quote:
      "Pubrica’s team exceeded our expectations in developing interactive and impactful educational materials. Their attention to detail and commitment to excellence have made a real difference in our learners’ success.",
    name: "PROF. LIAM O'CONNOR",
    designation: "Dean",
    organization: "School of Health Sciences, Australia",
    flag:
      "/images/marketing-communication-content-development-service/Australia.webp",
  },
];

const faqData: FAQItem[] = [
  {
    id: 1,
    question:
      "1. How do I get started with your educational content development service?",
    answer:
      "You can start by reaching out to us with your project details, target audience, and objectives. Our team will schedule an initial discussion to understand your requirements and suggest the most suitable package.",
  },
  {
    id: 2,
    question:
      "2. What information do you need from me to develop the content?",
    answer:
      "We typically require details about your target audience, learning objectives, preferred formats (e-learning, printed materials, videos), content scope, and any specific guidelines or standards to follow.",
  },
  {
    id: 3,
    question: "3. Can you handle large-scale or ongoing projects?",
    answer:
      "Yes, we have experience managing large-scale programs, multi-module courses, and ongoing educational content needs. We can scale our services to match your requirements.",
  },
  {
    id: 4,
    question: "4. What types of educational content do you develop?",
    answer:
      "We create a wide range of content, including e-learning modules, course materials, instructor-led training guides, assessment tools, infographics, case studies, and multimedia resources tailored to your target audience.",
  },
  {
    id: 5,
    question: "5. Who is your content suitable for?",
    answer:
      "Our content is ideal for schools, universities, professional training programs, healthcare institutions, corporate learning initiatives, and any organization seeking high-quality, engaging educational materials.",
  },
  {
    id: 6,
    question: "6. How do you ensure content quality and accuracy?",
    answer:
      "All content is developed by subject-matter experts and instructional designers. We follow a rigorous review and revision process to ensure accuracy, clarity, compliance, and alignment with your learning objectives.",
  },
  {
    id: 7,
    question: "7. Can the content be customized for specific audiences?",
    answer:
      "Yes! We tailor content to the learning level, industry requirements, language preferences, and specific educational goals of your audience.",
  },
  {
    id: 8,
    question: "8. Do you provide revisions if needed?",
    answer:
      "Absolutely. Each package includes feedback loops and revisions to ensure the content meets your expectations and educational goals.",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function TestimonialsAndFAQSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1); // 1 and 5 open initially as shown in image
  const cardsPerPage = 2;

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-7 px-4 sm:px-6 lg:px-8 space-y-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ==========================================
            SECTION 1: TESTIMONIALS
        ========================================== */}
        <CommonTestimonial
          title="Testimonials"
          description="Learn how Pubrica’s Educational Content Development services have empowered academic institutions, educators, and professionals to create evidence-based, engaging learning materials that enhance knowledge, improve learner outcomes, and support academic and career growth. Here is what our clients say:"
          testimonials={testimonials}
        />

        {/* ==========================================
            SECTION 2: FREQUENTLY ASKED QUESTIONS
        ========================================== */}
        <CommonFAQ
          title="Frequently Asked Questions – Educational Content Development"
          faqs={faqData}
        />
      </div>
    </div>
  );
}