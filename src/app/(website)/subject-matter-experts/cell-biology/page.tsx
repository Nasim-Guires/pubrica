import WhatClientsSays from '@/components/common/WhatClientsSays'
import CellBiologyPage from '@/components/subject-matter-experts/cell-biology/CellBiologyPage'
import { CELL_BIOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/cell-biology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import CardiologySection from '@/components/subject-matter-experts/cell-biology/CardiologySection';

const page = () => {
    return (
        <>
            <CellBiologyPage />
            <CardiologySection />
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