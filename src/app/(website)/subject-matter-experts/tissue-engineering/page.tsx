import WhatClientsSays from '@/components/common/WhatClientsSays'
import TissueEngineeringPage from '@/components/subject-matter-experts/tissue-engineering/TissueEngineeringPage'
import TissueEngineeringSubjectMatterExperts from '@/components/subject-matter-experts/tissue-engineering/TissueEngineeringSubjectMatterExperts'
import { tissueEngineeringTestimonials } from '@/lib/subject-matter-experts/tissue-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Expert Editing & Publication Support for Tissue Engineering',
  description: 'Maximize impact with expert editing and publication support in tissue engineering research for groundbreaking discoveries.',
  keywords: ['Tissue Engineering'],
  slug: '/subject-matter-experts/tissue-engineering',
})

const page = () => {
    return (
        <>
            <TissueEngineeringPage />
            <TissueEngineeringSubjectMatterExperts />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={tissueEngineeringTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page