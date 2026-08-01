import WhatClientsSays from '@/components/common/WhatClientsSays'
import CosmeceuticalAuthorsAndEditors from '@/components/industries/cosmeceutical-research/CosmeceuticalAuthorsAndEditors'
import CosmeceuticalResearch from '@/components/industries/cosmeceutical-research/CosmeceuticalResearch'
import { cosmeceuticalsTestimonialsData } from '@/lib/industries/cosmeceutical-research'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <CosmeceuticalResearch />
            <CosmeceuticalAuthorsAndEditors />
            <WhatClientsSays {...cosmeceuticalsTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page