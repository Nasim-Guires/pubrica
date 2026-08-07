import WhatClientsSays from '@/components/common/WhatClientsSays'
import LifeSciencesPage from '@/components/subject-matter-experts/life-sciences/LifeSciencesPage'
import LifeSciencesSection from '@/components/subject-matter-experts/life-sciences/LifeSciencesSection'
import { GENETICS_TESTIMONIALS } from '@/lib/subject-matter-experts/life-sciences'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <LifeSciencesPage />
            <LifeSciencesSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={GENETICS_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page