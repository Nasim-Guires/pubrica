import WhatClientsSays from '@/components/common/WhatClientsSays'
import LifeSciencesPage from '@/components/subject-matter-experts/life-sciences/LifeSciencesPage'
import LifeSciencesSection from '@/components/subject-matter-experts/life-sciences/LifeSciencesSection'
import { GENETICS_TESTIMONIALS } from '@/lib/subject-matter-experts/life-sciences'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Life Sciences Research Services | Pubrica Experts',
  description: 'Expert life sciences research support, data analysis, writing, and publication services for impactful scientific outcomes.',
  keywords: ['life science'],
  slug: '/subject-matter-experts/life-sciences',
})

const page = () => {
    return (
        <>
            <LifeSciencesPage />
            <LifeSciencesSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={GENETICS_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page