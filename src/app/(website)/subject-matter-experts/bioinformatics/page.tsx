import WhatClientsSays from '@/components/common/WhatClientsSays'
import BioinformaticsPage from '@/components/subject-matter-experts/bioinformatics/BioinformaticsPage'
import BioinformaticsSection from '@/components/subject-matter-experts/bioinformatics/BioinformaticsSection'
import { bioinformaticsTestimonialsData } from '@/lib/subject-matter-experts/bioinformatics'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <BioinformaticsPage />
            <BioinformaticsSection />
            <WhatClientsSays {...bioinformaticsTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page