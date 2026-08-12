import WhatClientsSays from '@/components/common/WhatClientsSays'
import TissueEngineeringPage from '@/components/subject-matter-experts/tissue-engineering/TissueEngineeringPage'
import TissueEngineeringSubjectMatterExperts from '@/components/subject-matter-experts/tissue-engineering/TissueEngineeringSubjectMatterExperts'
import { tissueEngineeringTestimonials } from '@/lib/subject-matter-experts/tissue-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

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