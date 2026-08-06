import WhatClientsSays from '@/components/common/WhatClientsSays'
import FoodSciencePage from '@/components/subject-matter-experts/food-science/FoodSciencePage'
import FoodScienceSection from '@/components/subject-matter-experts/food-science/FoodScienceSection'
import { FOOD_TECHNOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/food-science'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


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