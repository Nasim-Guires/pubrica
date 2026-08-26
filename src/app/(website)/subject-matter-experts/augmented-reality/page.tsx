import WhatClientsSays from '@/components/common/WhatClientsSays'
import AugmentedRealitySMEPage from '@/components/subject-matter-experts/augmented-reality/AugmentedRealitySMEPage'
import AugmentedRealityTrendsAndApps from '@/components/subject-matter-experts/augmented-reality/AugmentedRealityTrendsAndApps'
import AuthorPublicationsAndEditors from '@/components/subject-matter-experts/augmented-reality/AuthorPublicationsAndEditors'
import { augmentedRealityTestimonials } from '@/lib/subject-matter-experts/augmented-reality'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Augmented Reality Research Services | Pubrica Experts",
  description: "Advanced AR research support, 3D modeling, app development, and publication services for immersive solutions.",
  keywords: ["augmented reality"],
  slug: "/subject-matter-experts/augmented-reality",
});

const page = () => {
    return (
        <>
            <AugmentedRealitySMEPage />
            <AugmentedRealityTrendsAndApps />
            <AuthorPublicationsAndEditors />
            <WhatClientsSays
                heading={augmentedRealityTestimonials.heading}
                testimonials={augmentedRealityTestimonials.testimonials}
                itemsPerPage={augmentedRealityTestimonials.itemsPerPage}
            />
            <InsightsSection />
        </>
    )
}

export default page