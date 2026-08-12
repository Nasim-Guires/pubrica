import WhatClientsSays from '@/components/common/WhatClientsSays'
import PsychiatryPage from '@/components/subject-matter-experts/psychiatry/PsychiatryPage'
import PsychiatrySection from '@/components/subject-matter-experts/psychiatry/PsychiatrySection'
import { psychiatryTestimonials } from '@/lib/subject-matter-experts/psychiatry'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <PsychiatryPage />
            <PsychiatrySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={psychiatryTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page