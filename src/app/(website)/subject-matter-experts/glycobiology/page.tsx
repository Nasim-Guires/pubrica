import WhatClientsSays from '@/components/common/WhatClientsSays'
import GlycobiologyPage from '@/components/subject-matter-experts/glycobiology/GlycobiologyPage'
import GlycobiologySection from '@/components/subject-matter-experts/glycobiology/GlycobiologySection'
import { GLYCOBIOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/glycobiology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Comprehensive Glycobiology Research & Publication Support',
  description: 'Pubrica offers expert glycobiology research, writing, and publication support to advance glycan-based scientific discoveries.',
  keywords: ['Glycobiology Research'],
  slug: '/subject-matter-experts/glycobiology',
})

const page = () => {
    return (
        <>

            <GlycobiologyPage />
            <GlycobiologySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={GLYCOBIOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page