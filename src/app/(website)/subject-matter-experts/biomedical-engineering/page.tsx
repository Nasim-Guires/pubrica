import DisciplinesSection from '@/components/common/DisciplineCard'
import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiomedicalEngineeringCompleteComponent from '@/components/subject-matter-experts/biomedical-engineering/BiomedicalEngineeringCompleteComponent'
import BiomedicalEngineeringHeroComponent from '@/components/subject-matter-experts/biomedical-engineering/BiomedicalEngineeringHeroComponent'
import { BIOMEDICAL_ENGINEERING_TESTIMONIALS, biomedicalDisciplines } from '@/lib/subject-matter-experts/biomedical-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

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