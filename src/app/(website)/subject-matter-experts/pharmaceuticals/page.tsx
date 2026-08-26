import WhatClientsSays from '@/components/common/WhatClientsSays'
import PharmaceuticalsPage from '@/components/subject-matter-experts/pharmaceuticals/PharmaceuticalsPage'
import PharmaceuticalsSection from '@/components/subject-matter-experts/pharmaceuticals/PharmaceuticalsSection'
import { pharmaceuticalTestimonials } from '@/lib/subject-matter-experts/pharmaceutical'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Empowering Pharmaceutical Research & Publication | Pubrica',
  description: 'Expert editing, writing, and publication support for pharmaceutical research to ensure accuracy and journal success.',
  keywords: ['pharmaceutical research'],
  slug: '/subject-matter-experts/pharmaceuticals',
})

const page = () => {
    return (
        <>
            <PharmaceuticalsPage />
            <PharmaceuticalsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={pharmaceuticalTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page