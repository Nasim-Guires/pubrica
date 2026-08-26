import WhatClientsSays from '@/components/common/WhatClientsSays'
import DermatologyPage from '@/components/subject-matter-experts/dermatology/DermatologyPage'
import DermatologySection from '@/components/subject-matter-experts/dermatology/DermatologySection'
import { DERMATOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/dermatology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Expert Dermatology Research & Publication Support | Pubrica",
  description: "Pubrica empowers dermatology research with expert guidance, end-to-end manuscript support, and journal publication success.",
  keywords: ["Expert Dermatology"],
  slug: "/subject-matter-experts/dermatology",
});


const page = () => {
    return (
        <>
            <DermatologyPage />

            <DermatologySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={DERMATOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page