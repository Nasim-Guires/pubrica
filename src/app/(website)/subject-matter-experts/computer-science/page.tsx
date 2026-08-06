import WhatClientsSays from '@/components/common/WhatClientsSays'
import ComputerSciencePage from '@/components/subject-matter-experts/computer-science/ComputerSciencePage'
import ComputerScienceSection from '@/components/subject-matter-experts/computer-science/ComputerScienceSection'
import { COMPUTER_SCIENCE_TESTIMONIALS } from '@/lib/subject-matter-experts/computer-science'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <ComputerSciencePage />
            <ComputerScienceSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={COMPUTER_SCIENCE_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page