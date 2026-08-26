import WhatClientsSays from '@/components/common/WhatClientsSays'
import NuclearChemistryPage from '@/components/subject-matter-experts/nuclear-chemistry/NuclearChemistryPage'
import NuclearChemistrySection from '@/components/subject-matter-experts/nuclear-chemistry/NuclearChemistrySection'
import { NUCLEAR_CHEMISTRY_TESTIMONIALS } from '@/lib/subject-matter-experts/nuclear-chemistry'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Expert Nuclear Chemistry Editing & Research Publication Support',
  description: 'Get expert research, editing, and publication support in nuclear chemistry, including radiopharmaceuticals and waste management.',
  keywords: ['Expert Nuclear Chemistry'],
  slug: '/subject-matter-experts/nuclear-chemistry',
})

const page = () => {
    return (
        <>
            <NuclearChemistryPage />
            <NuclearChemistrySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NUCLEAR_CHEMISTRY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page