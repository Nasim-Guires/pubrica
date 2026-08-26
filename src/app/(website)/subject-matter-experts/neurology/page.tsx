import WhatClientsSays from '@/components/common/WhatClientsSays'
import NeurologyPage from '@/components/subject-matter-experts/neurology/NeurologyPage'
import NeurologySection from '@/components/subject-matter-experts/neurology/NeurologySection'
import { NUTRACEUTICALS_TESTIMONIALS } from '@/lib/subject-matter-experts/nutraceuticals'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Empowering Neurology Research & Publication | Pubrica',
  description: 'Expert neurology writing, editing, and publication support for clinicians and researchers at Pubrica.',
  keywords: ['empowering neurology'],
  slug: '/subject-matter-experts/neurology',
})

const page = () => {
    return (
        <>
            <NeurologyPage />
            <NeurologySection />

            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NUTRACEUTICALS_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page