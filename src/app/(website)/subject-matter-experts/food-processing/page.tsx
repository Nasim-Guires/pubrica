import WhatClientsSays from '@/components/common/WhatClientsSays'
import FoodProcessingPage from '@/components/subject-matter-experts/food-processing/FoodProcessingPage'
import FoodProcessingSection from '@/components/subject-matter-experts/food-processing/FoodProcessingSection'
import { FOOD_PROCESSING_TESTIMONIALS } from '@/lib/subject-matter-experts/food-processing'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Food Processing Editing & Publication Support Services| Pubrica",
  description: "Expert food processing editing, modelling, and publication support to improve research quality, clarity, and success.",
  keywords: ["food processing"],
  slug: "/subject-matter-experts/food-processing",
});

const page = () => {
    return (
        <>
            <FoodProcessingPage />
            <FoodProcessingSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={FOOD_PROCESSING_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page