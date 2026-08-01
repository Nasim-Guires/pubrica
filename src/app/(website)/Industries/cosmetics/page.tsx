import WhatClientsSays from '@/components/common/WhatClientsSays'
import CosmeticComplianceSection from '@/components/industries/cosmetics/CosmeticComplianceSection'
import CosmeticsIndustryPage from '@/components/industries/cosmetics/CosmeticsIndustryPage'
import { cosmeticsTestimonialsData } from '@/lib/industries/cosmetics'
import React from 'react'
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