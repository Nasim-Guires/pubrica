import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiophysicsSciencePage from '@/components/subject-matter-experts/biophysics/BiophysicsSciencePage'
import BioPhysicsScienceSections from '@/components/subject-matter-experts/biophysics/BioPhysicsScienceSections'
import { biophysicsTestimonialsData } from '@/lib/subject-matter-experts/biophysics'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <BiophysicsSciencePage />
            <BioPhysicsScienceSections />
            <WhatClientsSays {...biophysicsTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page