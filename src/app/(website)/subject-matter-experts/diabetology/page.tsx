import WhatClientsSays from '@/components/common/WhatClientsSays'
import DiabetologyPage from '@/components/subject-matter-experts/diabetology/DiabetologyPage'
import DiabetologySection from '@/components/subject-matter-experts/diabetology/DiabetologySection'
import { DIABETOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/diabetology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <DiabetologyPage />
            <DiabetologySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={DIABETOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page