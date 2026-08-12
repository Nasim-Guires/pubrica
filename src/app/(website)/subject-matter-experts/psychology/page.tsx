import WhatClientsSays from '@/components/common/WhatClientsSays'
import PsychologyPage from '@/components/subject-matter-experts/psychology/PsychologyPage'
import PsychologySection from '@/components/subject-matter-experts/psychology/PsychologySection'
import { psychologyTestimonials } from '@/lib/subject-matter-experts/psychology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <PsychologyPage />
            <PsychologySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={psychologyTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page