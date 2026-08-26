import WhatClientsSays from '@/components/common/WhatClientsSays'
import OpticsAndElectronicsPage from '@/components/subject-matter-experts/optics-and-electronics/OpticsAndElectronicsPage'
import OpticsAndElectronicsSection from '@/components/subject-matter-experts/optics-and-electronics/OpticsAndElectronicsSection'
import { OPTICS_ELECTRONICS_TESTIMONIALS } from '@/lib/subject-matter-experts/optics-and-electronics'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Optics & Electronics Research and Innovation | Pubrica',
  description: 'Advanced optics and electronics research services supporting healthcare, imaging, and next-generation technologies.',
  keywords: ['Optics and Electronics'],
  slug: '/subject-matter-experts/optics-and-electronics',
})

const page = () => {
    return (
        <>
            <OpticsAndElectronicsPage />
            <OpticsAndElectronicsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={OPTICS_ELECTRONICS_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page