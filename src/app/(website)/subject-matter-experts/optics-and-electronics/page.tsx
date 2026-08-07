import WhatClientsSays from '@/components/common/WhatClientsSays'
import OpticsAndElectronicsPage from '@/components/subject-matter-experts/optics-and-electronics/OpticsAndElectronicsPage'
import OpticsAndElectronicsSection from '@/components/subject-matter-experts/optics-and-electronics/OpticsAndElectronicsSection'
import { OPTICS_ELECTRONICS_TESTIMONIALS } from '@/lib/subject-matter-experts/optics-and-electronics'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <OpticsAndElectronicsPage />
            <OpticsAndElectronicsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={OPTICS_ELECTRONICS_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page