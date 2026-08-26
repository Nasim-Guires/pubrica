import WhatClientsSays from '@/components/common/WhatClientsSays'
import SensorTechnologyPage from '@/components/subject-matter-experts/sensor-technology/SensorTechnologyPage'
import SensorTechnologySubjectMatterExpertsSection from '@/components/subject-matter-experts/sensor-technology/SensorTechnologySubjectMatterExpertsSection'
import { sensorsTestimonials } from '@/lib/subject-matter-experts/sensor-technology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Sensor Technology Research & Healthcare Applications | Pubrica',
  description: 'Advanced sensor technology research for healthcare, IoT, and smart systems with expert publication and editing support.',
  keywords: ['Sensor Technology'],
  slug: '/subject-matter-experts/sensor-technology',
})

const page = () => {
    return (
        <>
            <SensorTechnologyPage />
            <SensorTechnologySubjectMatterExpertsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={sensorsTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page