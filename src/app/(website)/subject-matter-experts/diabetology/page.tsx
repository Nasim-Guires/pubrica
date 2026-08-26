import WhatClientsSays from '@/components/common/WhatClientsSays'
import DiabetologyPage from '@/components/subject-matter-experts/diabetology/DiabetologyPage'
import DiabetologySection from '@/components/subject-matter-experts/diabetology/DiabetologySection'
import { DIABETOLOGY_TESTIMONIALS } from '@/lib/subject-matter-experts/diabetology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Comprehensive Diabetology Research & Publication Support",
  description: "Pubrica offers expert research, writing, and publishing support in diabetology to advance global diabetes care.",
  keywords: ["Comprehensive Diabetology"],
  slug: "/subject-matter-experts/diabetology",
});

const page = () => {
    return (
        <>
            <DiabetologyPage />
            <DiabetologySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={DIABETOLOGY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page