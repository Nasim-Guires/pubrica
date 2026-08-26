import WhatClientsSays from '@/components/common/WhatClientsSays'
import CardiovascularBiologyPage from '@/components/subject-matter-experts/cardiovascular-biology/CardiovascularBiologyPage'
import CardiovascularBiologySection from '@/components/subject-matter-experts/cardiovascular-biology/CardiovascularBiologySection'
import { CARDIOVASCULAR_BIOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/cardiovascular-biology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Comprehensive Cardiovascular Biology Research Support",
  description: "Expert research, writing, and publication support in cardiovascular biology to advance heart and vascular science.",
  keywords: ["Cardiovascular Biology"],
  slug: "/subject-matter-experts/cardiovascular-biology",
});


const page = () => {
    return (
        <>
            <CardiovascularBiologyPage />
            <CardiovascularBiologySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={CARDIOVASCULAR_BIOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page