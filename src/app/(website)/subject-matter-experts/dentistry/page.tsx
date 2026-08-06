import WhatClientsSays from '@/components/common/WhatClientsSays'
import DentistryPage from '@/components/subject-matter-experts/dentistry/DentistryPage'
import DentistrySection from '@/components/subject-matter-experts/dentistry/DentistrySection'
import { DENTISTRY_TESTIMONIALS } from '@/lib/subject-matter-experts/dentistry'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <DentistryPage />
            <DentistrySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={DENTISTRY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page