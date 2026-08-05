import WhatClientsSays from '@/components/common/WhatClientsSays'
import BioChemistryPage from '@/components/subject-matter-experts/biochemistry/BioChemistryPage'
import BioChemistrySection from '@/components/subject-matter-experts/biochemistry/BioChemistrySection'
import { biochemistryTestimonialsData } from '@/lib/subject-matter-experts/biochemistry'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <BioChemistryPage />
            <BioChemistrySection />
            <WhatClientsSays {...biochemistryTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page