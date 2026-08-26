import WhatClientsSays from '@/components/common/WhatClientsSays'
import AgricultureContinuedSections from '@/components/subject-matter-experts/agriculture/AgricultureContinuedSections'
import AgricultureSMEPage from '@/components/subject-matter-experts/agriculture/AgricultureSMEPage'
import { agricultureTestimonials } from '@/lib/subject-matter-experts/agriculture'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Empowering Agriculture Research & Sustainable Innovation",
  description: "Expert support for research, publishing, and innovative solutions advancing sustainable agriculture worldwide.",
  keywords: ["agriculture"],
  slug: "/subject-matter-experts/agriculture",
});

const page = () => {
    return (
        <>
            <AgricultureSMEPage />
            <AgricultureContinuedSections />
            <WhatClientsSays
                heading={agricultureTestimonials.heading}
                testimonials={agricultureTestimonials.testimonials}
                itemsPerPage={agricultureTestimonials.itemsPerPage}
            />
            <InsightsSection/>
        </>
    )
}

export default page