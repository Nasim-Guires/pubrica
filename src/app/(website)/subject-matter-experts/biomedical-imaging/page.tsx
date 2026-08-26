import WhatClientsSays from '@/components/common/WhatClientsSays'
import BioMedicalImaginePage from '@/components/subject-matter-experts/biomedical-imaging/BioMedicalImaginePage'
import BioMedicalImagineSection from '@/components/subject-matter-experts/biomedical-imaging/BioMedicalImagineSection'
import { biomedicalImagingTestimonialsData } from '@/lib/subject-matter-experts/biomedical-imaging'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Biomedical Imaging Solutions for Advanced Research support",
  description: "Advanced biomedical imaging support for research and clinical innovation. We help improve data quality, analysis, clarity, and publication success.",
  keywords: ["biomedical imaging"],
  slug: "/subject-matter-experts/biomedical-imaging",
});


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