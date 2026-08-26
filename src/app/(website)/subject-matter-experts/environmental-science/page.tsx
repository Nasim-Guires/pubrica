import WhatClientsSays from '@/components/common/WhatClientsSays'
import EnvironmentalSciencePage from '@/components/subject-matter-experts/environmental-science/environmental-science'
import EnvironmentalScienceSection from '@/components/subject-matter-experts/environmental-science/EnvironmentalScienceSection'
import { ENVIRONMENTAL_SCIENCE_TESTIMONIALS } from '@/lib/subject-matter-experts/environmental-science'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Environmental Science Research & Sustainable Solutions | Pubrica",
  description: "Explore the latest in environmental science with Pubrica’s expertise in sustainable agriculture, climate change, pollution control, and more.",
  keywords: ["Environmental Science Research"],
  slug: "/subject-matter-experts/environmental-science",
});


const page = () => {
    return (
        <>
            <EnvironmentalSciencePage />
            <EnvironmentalScienceSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={ENVIRONMENTAL_SCIENCE_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page