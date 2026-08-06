import WhatClientsSays from '@/components/common/WhatClientsSays'
import EnvironmentalSciencePage from '@/components/subject-matter-experts/environmental-science/environmental-science'
import EnvironmentalScienceSection from '@/components/subject-matter-experts/environmental-science/EnvironmentalScienceSection'
import { ENVIRONMENTAL_SCIENCE_TESTIMONIALS } from '@/lib/subject-matter-experts/environmental-science'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <EnvironmentalSciencePage />
            <EnvironmentalScienceSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={ENVIRONMENTAL_SCIENCE_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page