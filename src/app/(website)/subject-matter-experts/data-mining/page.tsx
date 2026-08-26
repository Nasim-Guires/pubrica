import WhatClientsSays from '@/components/common/WhatClientsSays'
import DataMiningPage from '@/components/subject-matter-experts/data-mining/DataMiningPage'
import DataMiningSection from '@/components/subject-matter-experts/data-mining/DataMiningSection'
import { DATA_MINING_TESTIMONIALS } from '@/lib/subject-matter-experts/data-mining'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Data Mining Research & Publication Support | Pubrica",
  description: "End-to-end Data Mining support for research, data analysis, & manuscript publication in top journals. Unlock insights & drive innovation.",
  keywords: ["Data Mining Research"],
  slug: "/subject-matter-experts/data-mining",
});


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