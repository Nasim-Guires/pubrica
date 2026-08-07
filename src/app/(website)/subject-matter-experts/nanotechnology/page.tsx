import WhatClientsSays from '@/components/common/WhatClientsSays'
import NanotechnologyPage from '@/components/subject-matter-experts/nanotechnology/NanotechnologyPage'
import NanotechnologySections from '@/components/subject-matter-experts/nanotechnology/NanotechnologySections'
import { NANOTECHNOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/nanotechnology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <NanotechnologyPage />
            <NanotechnologySections />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NANOTECHNOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page