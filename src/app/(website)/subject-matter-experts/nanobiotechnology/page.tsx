import WhatClientsSays from '@/components/common/WhatClientsSays'
import NanobiotechnologyPage from '@/components/subject-matter-experts/nanobiotechnology/NanobiotechnologyPage'
import NanobiotechnologyTechniquesSection from '@/components/subject-matter-experts/nanobiotechnology/NanobiotechnologyTechniquesSection'
import { NANOBIOTECHNOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/nanobiotechnology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Advanced Nanobiotechnology Solutions for Healthcare & Industry',
  description: 'Transforming Healthcare, Sustainability & Industry with Precision Nanobiotechnology Research, Drug Delivery, and Innovations.',
  keywords: ['Nano Biotechnology'],
  slug: '/subject-matter-experts/nanobiotechnology',
})

const page = () => {
    return (
        <>
            <NanobiotechnologyPage />
            <NanobiotechnologyTechniquesSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NANOBIOTECHNOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page