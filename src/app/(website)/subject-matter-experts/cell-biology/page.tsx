import WhatClientsSays from '@/components/common/WhatClientsSays'
import SubjectMatterExpertsCellBiology from '@/components/subject-matter-experts/cardiology/CardiologySection'
import CellBiologyPage from '@/components/subject-matter-experts/cell-biology/CellBiologyPage'
import { CELL_BIOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/cell-biology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <CellBiologyPage />
            <SubjectMatterExpertsCellBiology />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={CELL_BIOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page