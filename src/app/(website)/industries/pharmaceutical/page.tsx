import WhatClientsSays from '@/components/common/WhatClientsSays'
import PharmaceuticalDiscoveryAndPublishingPage from '@/components/industries/pharmaceutical/PharmaceuticalDiscoveryAndPublishingPage'
import PharmaceuticalIndustryPage from '@/components/industries/pharmaceutical/PharmaceuticalIndustryPage'
import { pharmaTestimonials } from '@/lib/industries/pharmaceutical'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Pharmaceutical Regulatory & Drug Development Services',
  description:
    'Expert support in pharma R&D, dossier preparation, pharmacovigilance, compliance, and market readiness solutions.',
  keywords: ['Pharmaceutical Regulatory'],
  slug: '/industries/pharmaceutical',
})
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <PharmaceuticalIndustryPage />
            <PharmaceuticalDiscoveryAndPublishingPage />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={pharmaTestimonials}   // ✅ pass the whole array here
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page