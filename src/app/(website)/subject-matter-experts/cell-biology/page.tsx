import WhatClientsSays from '@/components/common/WhatClientsSays'
import CellBiologyPage from '@/components/subject-matter-experts/cell-biology/CellBiologyPage'
import { CELL_BIOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/cell-biology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import CardiologySection from '@/components/subject-matter-experts/cell-biology/CardiologySection';

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Comprehensive Cell Biology Research & Publication Support",
  description: "Advanced Cell Biology research, writing, and publication support delivered by Pubrica’s expert PhD editors worldwide.",
  keywords: ["Cell Biology"],
  slug: "/subject-matter-experts/cell-biology",
});

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