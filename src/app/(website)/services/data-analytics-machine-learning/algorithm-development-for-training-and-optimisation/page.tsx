import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import AlgorithmDevelopmentService from '@/components/services/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/AlgorithmDevelopmentPage'
import AlgorithmWorkflowAndPackages from '@/components/services/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/AlgorithmWorkflowAndPackages'
import { algorithmDevelopmentFAQ, algorithmDevelopmentTestimonials, algorithmDevelopmentWhoWeServe } from '@/lib/services/data/algorithm-development-for-training-and-optimisation/AlgorithmDevelopmenTestimonials'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Healthcare & Life Science Algorithm Development | Pubrica',
    description: 'Pubrica delivers custom AI, ML, deep learning & optimisation algorithms for healthcare, life sciences, pharma, food & nutraceuticals.',
    slug: '/services/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation',
})

const page = () => {
    return (
        <>
            <AlgorithmDevelopmentService />
            <CommonWhoWeServe
                title={algorithmDevelopmentWhoWeServe.title}
                description={algorithmDevelopmentWhoWeServe.description}
                data={algorithmDevelopmentWhoWeServe.data}
            />
            <AlgorithmWorkflowAndPackages />
            <CommonTestimonial
                title={algorithmDevelopmentTestimonials.title}
                description={algorithmDevelopmentTestimonials.description}
                testimonials={algorithmDevelopmentTestimonials.testimonials}
            />
            <CommonFAQ
                title={algorithmDevelopmentFAQ.title}
                faqs={algorithmDevelopmentFAQ.faqs}
            />
            <InsightsSection />
        </>
    )
}

export default page