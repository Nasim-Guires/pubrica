import WhatClientsSays from '@/components/common/WhatClientsSays'
import AgrotechnologySMEPage from '@/components/subject-matter-experts/agrotechnology/AgrotechnologySMEPage'
import AgrotechnologyTrendsAndApplicationsSection from '@/components/subject-matter-experts/agrotechnology/AgrotechnologyTrendsAndApplicationsSection'
import { agrotechnologyTestimonials } from '@/lib/subject-matter-experts/agrotechnology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Agrotechnology: Modern Farming & Sustainable Innovation",
  description: "Advance agriculture with agrotechnology: smarter farming, higher yields, and sustainable practices in Pubrica.",
  keywords: ["Agrotechnology"],
  slug: "/subject-matter-experts/agrotechnology",
});

const page = () => {
    return (
        <>
            <AgrotechnologySMEPage />
            <AgrotechnologyTrendsAndApplicationsSection />
            <WhatClientsSays
                heading={agrotechnologyTestimonials.heading}
                testimonials={agrotechnologyTestimonials.testimonials}
                itemsPerPage={agrotechnologyTestimonials.itemsPerPage}
            />
            <InsightsSection />
        </>
    )
}

export default page