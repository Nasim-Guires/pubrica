import WhatClientsSays from '@/components/common/WhatClientsSays'
import NuclearEngineeringPage from '@/components/subject-matter-experts/nuclear-engineering/NuclearEngineeringPage'
import NuclearEngineeringSections from '@/components/subject-matter-experts/nuclear-engineering/NuclearEngineeringSections'
import { NUCLEAR_ENGINEERING_TESTIMONIALS } from '@/lib/subject-matter-experts/nuclear-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Nuclear Engineering Consulting for Reactor Design & Safety',
  description: 'Advanced nuclear engineering services for reactor design, safety, modelling, and sustainable energy solutions.',
  keywords: ['nuclear engineering'],
  slug: '/subject-matter-experts/nuclear-engineering',
})

const page = () => {
    return (
        <>
            <NuclearEngineeringPage />
            <NuclearEngineeringSections />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NUCLEAR_ENGINEERING_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page