import WhatClientsSays from '@/components/common/WhatClientsSays'
import PharmaceuticalDiscoveryAndPublishingPage from '@/components/industries/pharmaceutical/PharmaceuticalDiscoveryAndPublishingPage'
import PharmaceuticalIndustryPage from '@/components/industries/pharmaceutical/PharmaceuticalIndustryPage'
import { pharmaTestimonials } from '@/lib/industries/pharmaceutical'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <PharmaceuticalIndustryPage />
            <PharmaceuticalDiscoveryAndPublishingPage />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={pharmaTestimonials}   // ✅ pass the whole array here
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page