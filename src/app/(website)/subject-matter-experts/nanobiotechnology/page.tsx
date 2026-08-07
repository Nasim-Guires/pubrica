import WhatClientsSays from '@/components/common/WhatClientsSays'
import NanobiotechnologyPage from '@/components/subject-matter-experts/nanobiotechnology/NanobiotechnologyPage'
import NanobiotechnologyTechniquesSection from '@/components/subject-matter-experts/nanobiotechnology/NanobiotechnologyTechniquesSection'
import { NANOBIOTECHNOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/nanobiotechnology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <NanobiotechnologyPage />
            <NanobiotechnologyTechniquesSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NANOBIOTECHNOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page