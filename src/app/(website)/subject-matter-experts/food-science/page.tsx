import WhatClientsSays from '@/components/common/WhatClientsSays'
import FoodSciencePage from '@/components/subject-matter-experts/food-science/FoodSciencePage'
import FoodScienceSection from '@/components/subject-matter-experts/food-science/FoodScienceSection'
import { FOOD_TECHNOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/food-science'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Food Science Research Editing & Publication Support | Pubrica',
  description: 'Expert editing, writing, and publication support for food science research, ensuring accuracy, clarity, and journal success.',
  keywords: ['Food Science Research'],
  slug: '/subject-matter-experts/food-science',
})

const page = () => {
    return (
        <>
            <FoodSciencePage />
            <FoodScienceSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={FOOD_TECHNOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page