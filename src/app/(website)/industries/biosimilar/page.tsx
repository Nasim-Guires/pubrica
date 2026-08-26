import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiosimilarAdditionalComponents from '@/components/industries/biosimilar/BiosimilarAdditionalComponents'
import BiosimilarIndustryPage from '@/components/industries/biosimilar/BiosimilarIndustryPage'
import { biosimilarsTestimonialsData } from '@/lib/industries/biosimilar'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Biosimilars Regulatory & Market Access Services',
  description:
    'Expert regulatory, clinical, and scientific support for safe, cost-effective biosimilars worldwide, driving access and quality care.',
  keywords: ['Biosimilars'],
  slug: '/industries/biosimilar',
})
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <BiosimilarIndustryPage />
            <BiosimilarAdditionalComponents />
            <WhatClientsSays {...biosimilarsTestimonialsData} />;
            <InsightsSection />
        </>
    )
}

export default page