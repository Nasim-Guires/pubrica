import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiocomputingPage from '@/components/subject-matter-experts/biocomputing/BiocomputingPage'
import BiocomputingSection from '@/components/subject-matter-experts/biocomputing/BiocomputingSection'
import { biocomputingTestimonialsData } from '@/lib/subject-matter-experts/biocomputing '
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <BiocomputingPage />
            <BiocomputingSection />
            <WhatClientsSays {...biocomputingTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page