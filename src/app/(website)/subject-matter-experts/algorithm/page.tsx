import CommonTestimonial from '@/components/common/CommonTestimonials'
import AlgorithmSMEPage from '@/components/subject-matter-experts/algorithm/AlgorithmSMEPage'
import EmergingTrendsAndApplications from '@/components/subject-matter-experts/algorithm/EmergingTrendsAndApplications'
import { aiMlSupportTestimonials } from '@/lib/subject-matter-experts/algorithm'
import React from 'react'

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Algorithm Research for Design, Analysis & System Performance",
  description: "Explore algorithm research focused on design, analysis, and optimization to solve complex problems with efficient, scalable and high-performance solutions.",
  keywords: ["algorithm"],
  slug: "/subject-matter-experts/algorithm",
});

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