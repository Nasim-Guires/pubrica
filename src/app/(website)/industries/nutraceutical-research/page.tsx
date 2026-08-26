import WhatClientsSays from '@/components/common/WhatClientsSays'
import NutraceuticalResearch from '@/components/industries/nutraceutical-research/NutraceuticalResearch'
import NutraceuticalResearchPartTwo from '@/components/industries/nutraceutical-research/NutraceuticalResearchPartTwo'
import { nutritionTestimonialsData } from '@/lib/industries/nutraceutical-research'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Transforming Health with Advanced Nutraceutical Solutions',
  description:
    'Pubrica empowers wellness with science-backed nutraceutical innovations for safe, effective, and market-ready products.',
  keywords: ['Nutraceutical Solutions'],
  slug: '/industries/nutraceutical-research',
})
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <NutraceuticalResearch />
            <NutraceuticalResearchPartTwo />
            <WhatClientsSays {...nutritionTestimonialsData} />;
            <InsightsSection />
        </>
    )
}

export default page