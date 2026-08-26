import WhatClientsSays from '@/components/common/WhatClientsSays'
import CeramicEngineeringExpertisePage from '@/components/subject-matter-experts/ceramic-engineering/CeramicEngineeringExpertisePage'
import CeramicEngineeringSection from '@/components/subject-matter-experts/ceramic-engineering/CeramicEngineeringSection'
import { ceramicEngineeringTestimonialsData } from '@/lib/subject-matter-experts/ceramic-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Ceramic Engineering Solutions for Modern Industries",
  description: "Discover advanced material research, innovative processing methods, and expert engineering support for aerospace, healthcare, energy, and manufacturing.",
  keywords: ["Ceramic Engineering Research"],
  slug: "/subject-matter-experts/ceramic-engineering",
});

const page = () => {
    return (
        <>
            <CeramicEngineeringExpertisePage />
            <CeramicEngineeringSection />
            <WhatClientsSays {...ceramicEngineeringTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page