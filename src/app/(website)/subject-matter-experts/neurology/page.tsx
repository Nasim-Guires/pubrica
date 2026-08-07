import WhatClientsSays from '@/components/common/WhatClientsSays'
import NeurologyPage from '@/components/subject-matter-experts/neurology/NeurologyPage'
import NeurologySection from '@/components/subject-matter-experts/neurology/NeurologySection'
import { NUTRACEUTICALS_TESTIMONIALS } from '@/lib/subject-matter-experts/nutraceuticals'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <NeurologyPage />
            <NeurologySection />

            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NUTRACEUTICALS_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page