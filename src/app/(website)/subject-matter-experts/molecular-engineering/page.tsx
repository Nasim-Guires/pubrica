import WhatClientsSays from '@/components/common/WhatClientsSays'
import MolecularEngineeringPage from '@/components/subject-matter-experts/molecular-engineering/MolecularEngineeringPage'
import MolecularEngineeringSection from '@/components/subject-matter-experts/molecular-engineering/MolecularEngineeringSection'
import { BIOMOLECULAR_ENGINEERING_TESTIMONIALS } from '@/lib/subject-matter-experts/molecular-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Precision Molecular Engineering Solutions for Innovation | Pubrica',
  description: 'Explore cutting-edge solutions in biomolecular engineering, including synthetic biology, nanotech, and advanced bioprocessing.',
  keywords: ['molecular engineering'],
  slug: '/subject-matter-experts/molecular-engineering',
})

const page = () => {
    return (
        <>
            <MolecularEngineeringPage />
            <MolecularEngineeringSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={BIOMOLECULAR_ENGINEERING_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page