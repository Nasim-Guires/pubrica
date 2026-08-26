import WhatClientsSays from '@/components/common/WhatClientsSays'
import GynaecologyPage from '@/components/subject-matter-experts/gynecology/GynaecologyPage'
import GynecologySection from '@/components/subject-matter-experts/gynecology/GynaecologySection'
import { GYNAECOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/gynecology'
// import GynaecologySection from '@/components/subject-matter-experts/gynecology/GynaecologySection'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Comprehensive Gynaecology Research & Publication Support',
  description: 'Pubrica offers expert research, writing, and publication support in gynaecology, empowering global women’s health research.',
  keywords: ['Gynaecology Research'],
  slug: '/subject-matter-experts/gynecology',
})

const page = () => {
    return (
        <>
            <GynaecologyPage />
            <GynecologySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={GYNAECOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page