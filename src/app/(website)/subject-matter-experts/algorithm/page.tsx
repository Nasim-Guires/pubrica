import CommonTestimonial from '@/components/common/CommonTestimonials'
import AlgorithmSMEPage from '@/components/subject-matter-experts/algorithm/AlgorithmSMEPage'
import EmergingTrendsAndApplications from '@/components/subject-matter-experts/algorithm/EmergingTrendsAndApplications'
import { aiMlSupportTestimonials } from '@/lib/subject-matter-experts/algorithm'
import React from 'react'

const page = () => {
    return (
        <>
            <AlgorithmSMEPage />
            <EmergingTrendsAndApplications />
            <CommonTestimonial
                title={aiMlSupportTestimonials.title}
                description={aiMlSupportTestimonials.description}
                testimonials={aiMlSupportTestimonials.testimonials}
            />
        </>
    )
}

export default page