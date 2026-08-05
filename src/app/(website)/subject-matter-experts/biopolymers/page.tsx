import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiopolymersPage from '@/components/subject-matter-experts/biopolymers/BiopolymersPage'
import BiopolymersSection from '@/components/subject-matter-experts/biopolymers/BiopolymersSection'
import { polymerScienceTestimonialsData } from '@/lib/subject-matter-experts/biopolymers'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <BiopolymersPage />
            <BiopolymersSection />
            <WhatClientsSays {...polymerScienceTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page