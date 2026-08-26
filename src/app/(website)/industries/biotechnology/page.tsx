import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiotechAdditionalSections from '@/components/industries/biotechnology/BiotechAdditionalSections'
import BiotechnologyIndustryPage from '@/components/industries/biotechnology/BiotechnologyIndustryPage'
import { biotechnologyTestimonialsData } from '@/lib/industries/biotechnology'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Biotechnology Innovation & Regulatory Support | Pubrica',
  description:
    'Pubrica empowers biotech with expert research, regulatory, clinical, and commercialization support worldwide.',
  keywords: ['Biotechnology Innovation'],
  slug: '/industries/biotechnology',
})
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";



const page = () => {
    return (
        <>
            <BiotechnologyIndustryPage />
            <BiotechAdditionalSections />
            <WhatClientsSays {...biotechnologyTestimonialsData} />;
            <InsightsSection />
        </>
    )
}

export default page