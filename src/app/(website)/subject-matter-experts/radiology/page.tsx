import WhatClientsSays from '@/components/common/WhatClientsSays'
import RadiologyExpertsSection from '@/components/subject-matter-experts/radiology/RadiologyExpertsSection'
import RadiologyPage from '@/components/subject-matter-experts/radiology/RadiologyPage'
import { radiologyTestimonials } from '@/lib/subject-matter-experts/radiology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <RadiologyPage />
            <RadiologyExpertsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={radiologyTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page