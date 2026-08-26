import WhatClientsSays from '@/components/common/WhatClientsSays'
import MedicalImagingTechniquesPage from '@/components/subject-matter-experts/medical-imaging-techniques/MedicalImagingTechniquesPage'
import MedicalImagingTechniquesSection from '@/components/subject-matter-experts/medical-imaging-techniques/MedicalImagingTechniquesSection'
import { MEDICAL_IMAGING_TESTIMONIALS } from '@/lib/subject-matter-experts/medical-imaging-techniques'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Advanced Medical Imaging Techniques & Research Support',
  description: 'Expert support in medical imaging research, publishing, and clinical applications for accurate, high-impact results.',
  keywords: ['Medical Imaging Techniques'],
  slug: '/subject-matter-experts/medical-imaging-techniques',
})

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