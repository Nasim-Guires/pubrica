import WhatClientsSays from '@/components/common/WhatClientsSays'
import BigDataHadoopComponent from '@/components/subject-matter-experts/big-data-hadoop/BigDataHadoopComponent'
import BigDataTrendsAndPublishingSection from '@/components/subject-matter-experts/big-data-hadoop/BigDataTrendsAndPublishingSection'
import { bigDataAnalyticsTestimonials } from '@/lib/subject-matter-experts/big-data-hadoop'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <BigDataHadoopComponent />
            <BigDataTrendsAndPublishingSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={bigDataAnalyticsTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page