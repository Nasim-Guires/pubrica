import WhatClientsSays from '@/components/common/WhatClientsSays'
import CosmeceuticalsPage from '@/components/subject-matter-experts/cosmeceuticals/CosmeceuticalsPage'
import CosmeceuticalsSection from '@/components/subject-matter-experts/cosmeceuticals/CosmeceuticalsSection'
import { cosmeceuticalsTestimonialsData } from '@/lib/subject-matter-experts/cosmeceuticals'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <CosmeceuticalsPage />
            <CosmeceuticalsSection />
            <WhatClientsSays {...cosmeceuticalsTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page