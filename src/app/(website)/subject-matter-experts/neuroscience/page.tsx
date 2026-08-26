import WhatClientsSays from '@/components/common/WhatClientsSays'
import NeurosciencePage from '@/components/subject-matter-experts/neuroscience/NeurosciencePage'
import NeuroscienceTechniquesSection from '@/components/subject-matter-experts/neuroscience/NeuroscienceTechniquesSection'
import { NEUROSCIENCE_TESTIMONIALS } from '@/lib/subject-matter-experts/neuroscience'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Comprehensive Neuroscience Research Support | Pubrica',
  description: 'Pubrica offers expert neuroscience research, writing, and publication support by PhD-level specialists worldwide.',
  keywords: ['Neuroscience'],
  slug: '/subject-matter-experts/neuroscience',
})

const page = () => {
    return (
        <>
            <NeurosciencePage />
            <NeuroscienceTechniquesSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NEUROSCIENCE_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page