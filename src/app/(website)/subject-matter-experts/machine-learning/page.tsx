import WhatClientsSays from '@/components/common/WhatClientsSays'
import MachineLearningPage from '@/components/subject-matter-experts/machine-learning/MachineLearningPage'
import MachineLearningSection from '@/components/subject-matter-experts/machine-learning/MachineLearningSection'
import { MACHINE_LEARNING_TESTIMONIALS } from '@/lib/subject-matter-experts/machine-learning'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Machine Learning Research, Development & Publication Support',
  description: 'Pubrica offers complete support for machine learning research, from algorithm development to manuscript writing and publication.',
  keywords: ['Machine Learning'],
  slug: '/subject-matter-experts/machine-learning',
})

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