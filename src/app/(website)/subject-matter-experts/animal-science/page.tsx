import WhatClientsSays from '@/components/common/WhatClientsSays'
import AnimalScienceContinuedSections from '@/components/subject-matter-experts/animal-science/AnimalScienceContinuedSections'
import AnimalScienceSMEPage from '@/components/subject-matter-experts/animal-science/AnimalScienceSMEPage'
import { animalScienceTestimonials } from '@/lib/subject-matter-experts/animal-science'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <AnimalScienceSMEPage />
            <AnimalScienceContinuedSections />
            <WhatClientsSays
                heading={animalScienceTestimonials.heading}
                testimonials={animalScienceTestimonials.testimonials}
                itemsPerPage={animalScienceTestimonials.itemsPerPage}
            />
            <InsightsSection />
        </>
    )
}

export default page