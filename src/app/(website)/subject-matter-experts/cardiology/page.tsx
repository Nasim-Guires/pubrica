import WhatClientsSays from '@/components/common/WhatClientsSays'
import CardiologyPage from '@/components/subject-matter-experts/cardiology/CardiologyPage'
import CardiologySection from '@/components/subject-matter-experts/cardiology/CardiologySection'
import { cardiologyTestimonialsData } from '@/lib/subject-matter-experts/cardiology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <CardiologyPage />
            <CardiologySection />
            <WhatClientsSays {...cardiologyTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page