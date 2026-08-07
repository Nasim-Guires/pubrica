import WhatClientsSays from '@/components/common/WhatClientsSays'
import MedicalImagingTechniquesPage from '@/components/subject-matter-experts/medical-imaging-techniques/MedicalImagingTechniquesPage'
import MedicalImagingTechniquesSection from '@/components/subject-matter-experts/medical-imaging-techniques/MedicalImagingTechniquesSection'
import { MEDICAL_IMAGING_TESTIMONIALS } from '@/lib/subject-matter-experts/medical-imaging-techniques'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <MedicalImagingTechniquesPage />
            <MedicalImagingTechniquesSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={MEDICAL_IMAGING_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page