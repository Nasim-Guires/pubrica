import DisciplineCard from '@/components/common/DisciplineCard'
import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiotechnologyPage from '@/components/subject-matter-experts/biotechnology/BiotechnologyPage'
import WhereAuthorsPublishAndEditorsSection from '@/components/subject-matter-experts/biotechnology/WhereAuthorsPublishAndEditorsSection'
import { biotechnologyDisciplines } from '@/lib/subject-matter-experts/biotechnology'
import { biotechnologyTestimonials } from '@/lib/subject-matter-experts/biotechnologyTestimonials '
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Empowering Biotechnology Research & Innovation | Pubrica",
  description: "Biotechnology experts focus on using biological systems and organisms to develop products and technologies for medical, and agricultural.",
  keywords: ["Empowering Biotechnology"],
  slug: "/subject-matter-experts/biotechnology",
});

const page = () => {
    return (
        <>
            <BiotechnologyPage />
            <WhereAuthorsPublishAndEditorsSection />
            <WhatClientsSays
                heading={biotechnologyTestimonials.heading}
                testimonials={biotechnologyTestimonials.testimonials}
                itemsPerPage={biotechnologyTestimonials.itemsPerPage}
            />
            <InsightsSection />
        </>
    )
}

export default page