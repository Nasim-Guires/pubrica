import WhatClientsSays from '@/components/common/WhatClientsSays'
import ProteinEngineeringPage from '@/components/subject-matter-experts/protein-engineering/ProteinEngineeringPage'
import ProteinEngineeringSection from '@/components/subject-matter-experts/protein-engineering/ProteinEngineeringSection'
import { proteinEngineeringTestimonials } from '@/lib/subject-matter-experts/protein-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Protein Engineering Solutions for Research & Healthcare | Pubrica',
  description: 'Advanced protein engineering services for drug development, diagnostics, and industrial applications at Pubrica.',
  keywords: ['Protein Engineering Solutions'],
  slug: '/subject-matter-experts/protein-engineering',
})

const page = () => {
    return (
        <>
            <ProteinEngineeringPage />
            <ProteinEngineeringSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={proteinEngineeringTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page