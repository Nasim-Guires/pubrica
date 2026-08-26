import WhatClientsSays from '@/components/common/WhatClientsSays'
import PublicHealthExpertsSection from '@/components/subject-matter-experts/public-health/PublicHealthExpertsSection'
import PublicHealthPage from '@/components/subject-matter-experts/public-health/PublicHealthPage'
import { publicHealthTestimonials } from '@/lib/subject-matter-experts/public-health'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Public Health Research & Publication Support | Pubrica',
  description: 'Expert public health research, editing, and publication support for global health, policy, and population studies.',
  keywords: ['Public Health'],
  slug: '/subject-matter-experts/public-health',
})

const page = () => {
    return (
        <>
            <PublicHealthPage />
            <PublicHealthExpertsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={publicHealthTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page