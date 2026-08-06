import WhatClientsSays from '@/components/common/WhatClientsSays'
import ELearningPage from '@/components/subject-matter-experts/e-learning/ELearningPage'
import ELearningSection from '@/components/subject-matter-experts/e-learning/ELearningSection'
import { EMBRYOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/e-learning'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>

            <ELearningPage />
            <ELearningSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={EMBRYOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page