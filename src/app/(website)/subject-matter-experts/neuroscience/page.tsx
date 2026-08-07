import WhatClientsSays from '@/components/common/WhatClientsSays'
import NeurosciencePage from '@/components/subject-matter-experts/neuroscience/NeurosciencePage'
import NeuroscienceTechniquesSection from '@/components/subject-matter-experts/neuroscience/NeuroscienceTechniquesSection'
import { NEUROSCIENCE_TESTIMONIALS } from '@/lib/subject-matter-experts/neuroscience'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <NeurosciencePage />
            <NeuroscienceTechniquesSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NEUROSCIENCE_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page