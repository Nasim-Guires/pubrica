import WhatClientsSays from '@/components/common/WhatClientsSays'
import AgrotechnologySMEPage from '@/components/subject-matter-experts/agrotechnology/AgrotechnologySMEPage'
import AgrotechnologyTrendsAndApplicationsSection from '@/components/subject-matter-experts/agrotechnology/AgrotechnologyTrendsAndApplicationsSection'
import { agrotechnologyTestimonials } from '@/lib/subject-matter-experts/agrotechnology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <AgrotechnologySMEPage />
            <AgrotechnologyTrendsAndApplicationsSection />
            <WhatClientsSays
                heading={agrotechnologyTestimonials.heading}
                testimonials={agrotechnologyTestimonials.testimonials}
                itemsPerPage={agrotechnologyTestimonials.itemsPerPage}
            />
            <InsightsSection />
        </>
    )
}

export default page