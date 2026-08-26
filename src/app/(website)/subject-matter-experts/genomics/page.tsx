import WhatClientsSays from '@/components/common/WhatClientsSays'
import GenomicsPage from '@/components/subject-matter-experts/genomics/GenomicsPage'
import GenomicsSection from '@/components/subject-matter-experts/genomics/GenomicsSection'
import { GENOMICS_TESTIMONIALS } from '@/lib/subject-matter-experts/genomics'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Genomics Publication & Editing Services | Pubrica',
  description: 'Pubrica empowers genomic research with expert editing, publication support, and high-impact journal guidance',
  keywords: ['Genomics Publication'],
  slug: '/subject-matter-experts/genomics',
})

const page = () => {
    return (
        <>
            <GenomicsPage />
            <GenomicsSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={GENOMICS_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page