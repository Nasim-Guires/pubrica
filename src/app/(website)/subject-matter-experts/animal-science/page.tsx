import WhatClientsSays from '@/components/common/WhatClientsSays'
import AnimalScienceContinuedSections from '@/components/subject-matter-experts/animal-science/AnimalScienceContinuedSections'
import AnimalScienceSMEPage from '@/components/subject-matter-experts/animal-science/AnimalScienceSMEPage'
import { animalScienceTestimonials } from '@/lib/subject-matter-experts/animal-science'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Animal Science Research, Data Science & Publishing Support | Pubrica",
  description: "Pubrica's Animal Science experts provide guidance on studies on animal care, production, advanced research, and its applications in research",
  keywords: ["Animal Science Research"],
  slug: "/subject-matter-experts/animal-science",
});

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