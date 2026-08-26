import WhatClientsSays from '@/components/common/WhatClientsSays'
import ForensicPage from '@/components/subject-matter-experts/forensics/ForensicPage'
import ForensicsSection from '@/components/subject-matter-experts/forensics/ForensicsSection'
import { FORENSIC_SCIENCE_TESTIMONIALS } from '@/lib/subject-matter-experts/forensics'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Forensic Science Research & Publication Services | Pubrica',
  description: 'Expert forensic research, analysis, and publication services covering pathology, toxicology, DNA, and digital forensics.',
  keywords: ['Forensic Science Research'],
  slug: '/subject-matter-experts/forensics',
})

const page = () => {
    return (
        <>
            <ForensicPage />
            <ForensicsSection />

            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={FORENSIC_SCIENCE_TESTIMONIALS}
                itemsPerPage={2}
            />;
            <InsightsSection />
        </>
    )
}

export default page