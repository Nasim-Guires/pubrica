import WhatClientsSays from '@/components/common/WhatClientsSays'
import PsychiatryPage from '@/components/subject-matter-experts/psychiatry/PsychiatryPage'
import PsychiatrySection from '@/components/subject-matter-experts/psychiatry/PsychiatrySection'
import { psychiatryTestimonials } from '@/lib/subject-matter-experts/psychiatry'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Psychiatry Research Services | Pubrica Experts',
  description: 'Expert psychiatry research, clinical analysis, writing, and publication support for advanced mental health solutions.',
  keywords: ['psychiatry'],
  slug: '/subject-matter-experts/psychiatry',
})

const page = () => {
    return (
        <>
            <PsychiatryPage />
            <PsychiatrySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={psychiatryTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page