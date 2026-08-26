import WhatClientsSays from '@/components/common/WhatClientsSays'
import ChemicalEngineeringPage from '@/components/subject-matter-experts/chemical-engineering/ChemicalEngineeringPage'
import ChemicalEngineeringSection from '@/components/subject-matter-experts/chemical-engineering/ChemicalEngineeringSection'
import { chemicalEngineeringTestimonialsData } from '@/lib/subject-matter-experts/chemical-engineeri'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Chemical Engineering Consulting for Process Optimization",
  description: "Expert chemical engineering services for process design, optimization, sustainability, and publication support.",
  keywords: ["chemical engineering"],
  slug: "/subject-matter-experts/chemical-engineering",
});

const page = () => {
    return (
        <>
            <ChemicalEngineeringPage />
            <ChemicalEngineeringSection />
            <WhatClientsSays {...chemicalEngineeringTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page