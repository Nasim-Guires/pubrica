import WhatClientsSays from '@/components/common/WhatClientsSays'
import NuclearEngineeringPage from '@/components/subject-matter-experts/nuclear-engineering/NuclearEngineeringPage'
import NuclearEngineeringSections from '@/components/subject-matter-experts/nuclear-engineering/NuclearEngineeringSections'
import { NUCLEAR_ENGINEERING_TESTIMONIALS } from '@/lib/subject-matter-experts/nuclear-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <NuclearEngineeringPage />
            <NuclearEngineeringSections />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NUCLEAR_ENGINEERING_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page