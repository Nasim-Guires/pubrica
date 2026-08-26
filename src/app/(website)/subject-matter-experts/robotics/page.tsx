import WhatClientsSays from '@/components/common/WhatClientsSays'
import RoboticsPage from '@/components/subject-matter-experts/robotics/RoboticsPage'
import RoboticsSubjectMatterExperts from '@/components/subject-matter-experts/robotics/RoboticsSubjectMatterExperts'
import { roboticsTestimonials } from '@/lib/subject-matter-experts/robotics'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Robotics Research & Publication Services | Pubrica',
  description: 'Expert robotics research, editing, and publication support for high-impact scientific and engineering journals worldwide.',
  keywords: ['Robotics'],
  slug: '/subject-matter-experts/robotics',
})

const page = () => {
    return (
        <>
            <RoboticsPage />
            <RoboticsSubjectMatterExperts />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={roboticsTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page