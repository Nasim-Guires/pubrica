import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiotechAdditionalSections from '@/components/industries/biotechnology/BiotechAdditionalSections'
import BiotechnologyIndustryPage from '@/components/industries/biotechnology/BiotechnologyIndustryPage'
import { biotechnologyTestimonialsData } from '@/lib/industries/biotechnology'
import React from 'react'
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