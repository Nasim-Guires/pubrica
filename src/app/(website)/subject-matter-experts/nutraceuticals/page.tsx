import WhatClientsSays from '@/components/common/WhatClientsSays'
import NutraceuticalsPage from '@/components/subject-matter-experts/nutraceuticals/NutraceuticalsPage'
import NutraceuticalsSection from '@/components/subject-matter-experts/nutraceuticals/NutraceuticalsSection'
import { NUTRACEUTICALS_TESTIMONIALS } from '@/lib/subject-matter-experts/nutraceuticals'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <NutraceuticalsPage />
            <NutraceuticalsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NUTRACEUTICALS_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page