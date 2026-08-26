import WhatClientsSays from '@/components/common/WhatClientsSays'
import CosmeticComplianceSection from '@/components/industries/cosmetics/CosmeticComplianceSection'
import CosmeticsIndustryPage from '@/components/industries/cosmetics/CosmeticsIndustryPage'
import { cosmeticsTestimonialsData } from '@/lib/industries/cosmetics'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Transform Cosmetic Ideas into Market-Ready Innovations',
  description:
    'Expert cosmetic R&D, compliance, and marketing services for innovative, safe, and sustainable beauty products.',
  keywords: ['Transform Cosmetic Ideas'],
  slug: '/industries/cosmetics',
})
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <CosmeticsIndustryPage />
            <CosmeticComplianceSection />
            <WhatClientsSays {...cosmeticsTestimonialsData} />;
            <InsightsSection />
        </>
    )
}

export default page