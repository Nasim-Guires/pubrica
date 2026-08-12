import WhatClientsSays from '@/components/common/WhatClientsSays'
import PublicHealthExpertsSection from '@/components/subject-matter-experts/public-health/PublicHealthExpertsSection'
import PublicHealthPage from '@/components/subject-matter-experts/public-health/PublicHealthPage'
import { publicHealthTestimonials } from '@/lib/subject-matter-experts/public-health'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <PublicHealthPage />
            <PublicHealthExpertsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={publicHealthTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page