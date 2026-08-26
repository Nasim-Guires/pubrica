import WhatClientsSays from '@/components/common/WhatClientsSays'
import NanotechnologyPage from '@/components/subject-matter-experts/nanotechnology/NanotechnologyPage'
import NanotechnologySections from '@/components/subject-matter-experts/nanotechnology/NanotechnologySections'
import { NANOTECHNOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/nanotechnology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Nanotechnology Research & Publishing Services | Pubrica',
  description: 'Expert nanotechnology research, editing, and publishing support for advanced scientific innovation and global impact.',
  keywords: ['nanotechnology research'],
  slug: '/subject-matter-experts/nanotechnology',
})

const page = () => {
    return (
        <>
            <NanotechnologyPage />
            <NanotechnologySections />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NANOTECHNOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page