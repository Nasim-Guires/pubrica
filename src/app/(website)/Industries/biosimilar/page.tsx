import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiosimilarAdditionalComponents from '@/components/industries/biosimilar/BiosimilarAdditionalComponents'
import BiosimilarIndustryPage from '@/components/industries/biosimilar/BiosimilarIndustryPage'
import { biosimilarsTestimonialsData } from '@/lib/industries/biosimilar'
import React from 'react'
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