import WhatClientsSays from '@/components/common/WhatClientsSays'
import MachineLearningPage from '@/components/subject-matter-experts/machine-learning/MachineLearningPage'
import MachineLearningSection from '@/components/subject-matter-experts/machine-learning/MachineLearningSection'
import { MACHINE_LEARNING_TESTIMONIALS } from '@/lib/subject-matter-experts/machine-learning'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <MachineLearningPage />
            <MachineLearningSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={MACHINE_LEARNING_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page