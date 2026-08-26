import WhatClientsSays from '@/components/common/WhatClientsSays'
import CancerResearchPage from '@/components/subject-matter-experts/cancer-research/CancerResearchPage'
import CancerResearchSection from '@/components/subject-matter-experts/cancer-research/CancerResearchSection'
import { cancerResearchTestimonialsData } from '@/lib/subject-matter-experts/cancer-research'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Cancer Research Services and Publication Support",
  description: "Expert cancer research support from proposal to publication. We help researchers develop, analyze, and publish high-quality oncology studies globally.",
  keywords: ["Expert Cancer Research"],
  slug: "/subject-matter-experts/cancer-research",
});

const page = () => {
    return (
        <>
            <CancerResearchPage />
            <CancerResearchSection />
            <WhatClientsSays {...cancerResearchTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page