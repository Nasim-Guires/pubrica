import WhatClientsSays from '@/components/common/WhatClientsSays'
import MaterialSciencePage from '@/components/subject-matter-experts/material-science/MaterialSciencePage'
import MaterialScienceSections from '@/components/subject-matter-experts/material-science/MaterialScienceSections'
import { clientTestimonialsData } from '@/lib/subject-matter-experts/material-science'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <MaterialSciencePage />
            <MaterialScienceSections />
            <WhatClientsSays {...clientTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page