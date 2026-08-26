import WhatClientsSays from '@/components/common/WhatClientsSays'
import PeptidesPage from '@/components/subject-matter-experts/peptides/PeptidesPage'
import PeptidesSection from '@/components/subject-matter-experts/peptides/PeptidesSection'
import { peptideTestimonials } from '@/lib/subject-matter-experts/peptide'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Peptide Research & Therapeutics - Innovation in Medicine | Pubrica',
  description: 'Explore peptide-based innovations in therapeutics, vaccines, diagnostics, and drug delivery to advance modern healthcare.',
  keywords: ['Peptide Research'],
  slug: '/subject-matter-experts/peptides',
})

const page = () => {
    return (
        <>
            <PeptidesPage />
            <PeptidesSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={peptideTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page