import WhatClientsSays from '@/components/common/WhatClientsSays'
import SurgeryPage from '@/components/subject-matter-experts/surgery/SurgeryPage'
import SurgerySubjectMatterExpertsSection from '@/components/subject-matter-experts/surgery/SurgerySubjectMatterExpertsSection'
import { surgeryTestimonials } from '@/lib/subject-matter-experts/surgery'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <SurgeryPage />
            <SurgerySubjectMatterExpertsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={surgeryTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page