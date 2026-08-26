import WhatClientsSays from '@/components/common/WhatClientsSays'
import ProductionEngineeringPage from '@/components/subject-matter-experts/production-engineering/ProductionEngineeringPage'
import ProductionEngineeringSection from '@/components/subject-matter-experts/production-engineering/ProductionEngineeringSection'
import { productionEngineeringTestimonials } from '@/lib/subject-matter-experts/production-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Production Engineering Research & Publication Services | Pubrica',
  description: 'Expert production engineering research, publication support, automation, quality, and Industry 4.0 solutions.',
  keywords: ['Production Engineering'],
  slug: '/subject-matter-experts/production-engineering',
})

const page = () => {
    return (
        <>
            <ProductionEngineeringPage />
            <ProductionEngineeringSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={productionEngineeringTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page