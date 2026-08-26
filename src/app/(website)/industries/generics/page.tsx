import WhatClientsSays from '@/components/common/WhatClientsSays'
import GenericPharmaceuticalsPage from '@/components/industries/generics/GenericPharmaceuticalsPage'
import PharmaceuticalDiscoveryAndPublishingPage from '@/components/industries/generics/PharmaceuticalDiscoveryAndPublishingPage'
import { genericsTestimonialsData } from '@/lib/industries/generic'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'High-Quality Generic Drugs | Pubrica Expertise',
  description:
    'Pubrica supports generics with regulatory, clinical, and market expertise for safe, effective, and compliant medicines.',
  keywords: ['High-Quality Generic Drugs'],
  slug: '/industries/generics',
})
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <GenericPharmaceuticalsPage />
            <PharmaceuticalDiscoveryAndPublishingPage />
            <WhatClientsSays {...genericsTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page