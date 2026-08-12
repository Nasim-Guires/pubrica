import WhatClientsSays from '@/components/common/WhatClientsSays'
import PharmaceuticalsPage from '@/components/subject-matter-experts/pharmaceuticals/PharmaceuticalsPage'
import PharmaceuticalsSection from '@/components/subject-matter-experts/pharmaceuticals/PharmaceuticalsSection'
import { pharmaceuticalTestimonials } from '@/lib/subject-matter-experts/pharmaceutical'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <PharmaceuticalsPage />
            <PharmaceuticalsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={pharmaceuticalTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page