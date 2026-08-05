import WhatClientsSays from '@/components/common/WhatClientsSays'
import CancerResearchPage from '@/components/subject-matter-experts/cancer-research/CancerResearchPage'
import CancerResearchSection from '@/components/subject-matter-experts/cancer-research/CancerResearchSection'
import { cancerResearchTestimonialsData } from '@/lib/subject-matter-experts/cancer-research'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <CancerResearchPage />
            <CancerResearchSection />
            <WhatClientsSays {...cancerResearchTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page