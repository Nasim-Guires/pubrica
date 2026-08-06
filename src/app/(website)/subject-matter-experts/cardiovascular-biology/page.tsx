import WhatClientsSays from '@/components/common/WhatClientsSays'
import CardiovascularBiologyPage from '@/components/subject-matter-experts/cardiovascular-biology/CardiovascularBiologyPage'
import CardiovascularBiologySection from '@/components/subject-matter-experts/cardiovascular-biology/CardiovascularBiologySection'
import { CARDIOVASCULAR_BIOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/cardiovascular-biology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <CardiovascularBiologyPage />
            <CardiovascularBiologySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={CARDIOVASCULAR_BIOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page