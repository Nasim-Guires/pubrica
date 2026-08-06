import WhatClientsSays from '@/components/common/WhatClientsSays'
import DataMiningPage from '@/components/subject-matter-experts/data-mining/DataMiningPage'
import DataMiningSection from '@/components/subject-matter-experts/data-mining/DataMiningSection'
import { DATA_MINING_TESTIMONIALS } from '@/lib/subject-matter-experts/data-mining'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <DataMiningPage />
            <DataMiningSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={DATA_MINING_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page