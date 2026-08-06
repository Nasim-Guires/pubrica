import WhatClientsSays from '@/components/common/WhatClientsSays'
import ForensicPage from '@/components/subject-matter-experts/forensics/ForensicPage'
import ForensicsSection from '@/components/subject-matter-experts/forensics/ForensicsSection'
import { FORENSIC_SCIENCE_TESTIMONIALS } from '@/lib/subject-matter-experts/forensics'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <ForensicPage />
            <ForensicsSection />

            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={FORENSIC_SCIENCE_TESTIMONIALS}
                itemsPerPage={2}
            />;
            <InsightsSection />
        </>
    )
}

export default page