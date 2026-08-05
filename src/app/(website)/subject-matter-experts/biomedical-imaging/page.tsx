import WhatClientsSays from '@/components/common/WhatClientsSays'
import BioMedicalImaginePage from '@/components/subject-matter-experts/biomedical-imaging/BioMedicalImaginePage'
import BioMedicalImagineSection from '@/components/subject-matter-experts/biomedical-imaging/BioMedicalImagineSection'
import { biomedicalImagingTestimonialsData } from '@/lib/subject-matter-experts/biomedical-imaging'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <BioMedicalImaginePage />
            <BioMedicalImagineSection />
            <WhatClientsSays {...biomedicalImagingTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page