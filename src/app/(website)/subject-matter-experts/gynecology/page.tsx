import WhatClientsSays from '@/components/common/WhatClientsSays'
import GynaecologyPage from '@/components/subject-matter-experts/gynecology/GynaecologyPage'
import GynecologySection from '@/components/subject-matter-experts/gynecology/GynaecologySection'
import { GYNAECOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/gynecology'
// import GynaecologySection from '@/components/subject-matter-experts/gynecology/GynaecologySection'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <GynaecologyPage />
            <GynecologySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={GYNAECOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page