import WhatClientsSays from '@/components/common/WhatClientsSays'
import RadiologyExpertsSection from '@/components/subject-matter-experts/radiology/RadiologyExpertsSection'
import RadiologyPage from '@/components/subject-matter-experts/radiology/RadiologyPage'
import { radiologyTestimonials } from '@/lib/subject-matter-experts/radiology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Expert Radiology Research & Publication Support | Pubrica',
  description: 'Expert radiology research, editing, and publication support for medical imaging and diagnostic excellence.',
  keywords: ['expert radiology'],
  slug: '/subject-matter-experts/radiology',
})

const page = () => {
    return (
        <>
            <RadiologyPage />
            <RadiologyExpertsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={radiologyTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page