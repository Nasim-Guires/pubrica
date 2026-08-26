import WhatClientsSays from '@/components/common/WhatClientsSays'
import ELearningPage from '@/components/subject-matter-experts/e-learning/ELearningPage'
import ELearningSection from '@/components/subject-matter-experts/e-learning/ELearningSection'
import { EMBRYOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/e-learning'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "E-Learning Research & Publishing Services | Pubrica",
  description: "Expert e-learning research, instructional design, and publishing support for digital education and innovation.",
  keywords: ["E Learning"],
  slug: "/subject-matter-experts/e-learning",
});

const page = () => {
    return (
        <>

            <ELearningPage />
            <ELearningSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={EMBRYOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page