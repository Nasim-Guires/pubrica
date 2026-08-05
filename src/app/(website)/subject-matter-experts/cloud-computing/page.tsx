import WhatClientsSays from '@/components/common/WhatClientsSays'
import CloudComputingPage from '@/components/subject-matter-experts/cloud-computing/CloudComputingPage'
import CloudComputingSection from '@/components/subject-matter-experts/cloud-computing/CloudComputingSection'
import { cloudComputingTestimonialsData } from '@/lib/subject-matter-experts/cloud-computing'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>

            <CloudComputingPage />
            <CloudComputingSection />
            <WhatClientsSays {...cloudComputingTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page