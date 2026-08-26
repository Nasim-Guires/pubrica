import WhatClientsSays from '@/components/common/WhatClientsSays'
import CosmeceuticalAuthorsAndEditors from '@/components/industries/cosmeceutical-research/CosmeceuticalAuthorsAndEditors'
import CosmeceuticalResearch from '@/components/industries/cosmeceutical-research/CosmeceuticalResearch'
import { cosmeceuticalsTestimonialsData } from '@/lib/industries/cosmeceutical-research'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Cosmetic Industry Research & Publishing Services | Pubrica',
  description:
    'Pubrica offers 10+ years of expertise in cosmetic research, covering new product development, regulatory support, and scientific writing.',
  keywords: ['Innovative Cosmeceuticals'],
  slug: '/industries/cosmeceutical-research',
})
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <CosmeceuticalResearch />
            <CosmeceuticalAuthorsAndEditors />
            <WhatClientsSays {...cosmeceuticalsTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page