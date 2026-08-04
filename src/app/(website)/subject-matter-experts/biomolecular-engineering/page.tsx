import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiomolecularCoreAreasComponent from '@/components/subject-matter-experts/biomolecular-engineering/BiomolecularCoreAreasComponent'
import BiomolecularEngineeringPage from '@/components/subject-matter-experts/biomolecular-engineering/BiomolecularEngineeringPage'
import BiomolecularExpertiseServicesComponent from '@/components/subject-matter-experts/biomolecular-engineering/BiomolecularExpertiseServicesComponent'
import EmergingTrendsBiomolecularComponent from '@/components/subject-matter-experts/biomolecular-engineering/EmergingTrendsBiomolecularComponent'
import { biomolecularEngineeringTestimonials } from '@/lib/subject-matter-experts/biomolecular-engineering'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <BiomolecularEngineeringPage />
            <BiomolecularCoreAreasComponent />
            <BiomolecularExpertiseServicesComponent />
            <EmergingTrendsBiomolecularComponent />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={biomolecularEngineeringTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page