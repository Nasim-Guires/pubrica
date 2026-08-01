import WhatClientsSays from '@/components/common/WhatClientsSays'
import NutraceuticalResearch from '@/components/industries/nutraceutical-research/NutraceuticalResearch'
import NutraceuticalResearchPartTwo from '@/components/industries/nutraceutical-research/NutraceuticalResearchPartTwo'
import { nutritionTestimonialsData } from '@/lib/industries/nutraceutical-research'
import React from 'react'
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