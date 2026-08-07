import WhatClientsSays from '@/components/common/WhatClientsSays'
import GlycobiologyPage from '@/components/subject-matter-experts/glycobiology/GlycobiologyPage'
import GlycobiologySection from '@/components/subject-matter-experts/glycobiology/GlycobiologySection'
import { GLYCOBIOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/glycobiology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>

            <GlycobiologyPage />
            <GlycobiologySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={GLYCOBIOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page