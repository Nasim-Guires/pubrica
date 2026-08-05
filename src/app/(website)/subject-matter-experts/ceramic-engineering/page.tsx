import WhatClientsSays from '@/components/common/WhatClientsSays'
import CeramicEngineeringExpertisePage from '@/components/subject-matter-experts/ceramic-engineering/CeramicEngineeringExpertisePage'
import CeramicEngineeringSection from '@/components/subject-matter-experts/ceramic-engineering/CeramicEngineeringSection'
import { ceramicEngineeringTestimonialsData } from '@/lib/subject-matter-experts/ceramic-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <CeramicEngineeringExpertisePage />
            <CeramicEngineeringSection />
            <WhatClientsSays {...ceramicEngineeringTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page