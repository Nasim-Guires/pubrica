import DisciplinesSection from '@/components/common/DisciplineCard'
import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiomedicalEngineeringCompleteComponent from '@/components/subject-matter-experts/biomedical-engineering/BiomedicalEngineeringCompleteComponent'
import BiomedicalEngineeringHeroComponent from '@/components/subject-matter-experts/biomedical-engineering/BiomedicalEngineeringHeroComponent'
import { BIOMEDICAL_ENGINEERING_TESTIMONIALS, biomedicalDisciplines } from '@/lib/subject-matter-experts/biomedical-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Biomedical Engineering Research & Publication Support | Pubrica",
  description: "Expert biomedical engineering research, writing, editing, and publication support to advance innovation in healthcare.",
  keywords: ["Biomedical Engineering"],
  slug: "/subject-matter-experts/biomedical-engineering",
});

const page = () => {
    return (
        <>
            <BiomedicalEngineeringHeroComponent />
            <BiomedicalEngineeringCompleteComponent />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={BIOMEDICAL_ENGINEERING_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page