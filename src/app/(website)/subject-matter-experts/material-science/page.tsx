import WhatClientsSays from '@/components/common/WhatClientsSays'
import MaterialSciencePage from '@/components/subject-matter-experts/material-science/MaterialSciencePage'
import MaterialScienceSections from '@/components/subject-matter-experts/material-science/MaterialScienceSections'
import { clientTestimonialsData } from '@/lib/subject-matter-experts/material-science'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Material Science Research & Publication Support | Pubrica',
  description: 'Pubrica offers expert material science editing, research support, journal submission, and publication services for global researchers',
  keywords: ['Material Science'],
  slug: '/subject-matter-experts/material-science',
})

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