import WhatClientsSays from '@/components/common/WhatClientsSays'
import EnzymesPage from '@/components/subject-matter-experts/enzymes/EnzymesPage'
import EnzymesSection from '@/components/subject-matter-experts/enzymes/EnzymesSection'
import { ENZYMES_TESTIMONIALS } from '@/lib/subject-matter-experts/enzymes'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>

            <EnzymesPage />
            <EnzymesSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={ENZYMES_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page