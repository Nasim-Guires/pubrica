import WhatClientsSays from '@/components/common/WhatClientsSays'
import ProteinEngineeringPage from '@/components/subject-matter-experts/protein-engineering/ProteinEngineeringPage'
import ProteinEngineeringSection from '@/components/subject-matter-experts/protein-engineering/ProteinEngineeringSection'
import { proteinEngineeringTestimonials } from '@/lib/subject-matter-experts/protein-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

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