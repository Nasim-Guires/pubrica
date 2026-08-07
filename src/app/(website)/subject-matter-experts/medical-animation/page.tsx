import WhatClientsSays from '@/components/common/WhatClientsSays'
import MedicalAnimationPage from '@/components/subject-matter-experts/medical-animation/MedicalAnimationPage'
import MedicalAnimationSections from '@/components/subject-matter-experts/medical-animation/MedicalAnimationSections'
import { MEDICAL_ANIMATIONS_TESTIMONIALS } from '@/lib/subject-matter-experts/medical-animation'
import React from 'react'

import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <MedicalAnimationPage />
            <MedicalAnimationSections />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={MEDICAL_ANIMATIONS_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page