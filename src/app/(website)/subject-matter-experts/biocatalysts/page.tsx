import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiocatalystsPage from '@/components/subject-matter-experts/biocatalysts/BiocatalystsPage'
import BiocatalystsSection from '@/components/subject-matter-experts/biocatalysts/BiocatalystsSection'
import { biocatalystsTestimonialsData } from '@/lib/subject-matter-experts/biocatalysts'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <BiocatalystsPage />
            <BiocatalystsSection />
            <WhatClientsSays {...biocatalystsTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page