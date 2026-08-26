import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiomonitoringPage from '@/components/subject-matter-experts/biomonitoring/BiomonitoringPage'
import BiomonitoringTrendsAndPublishingSection from '@/components/subject-matter-experts/biomonitoring/BiomonitoringTrendsAndPublishingSection'
import { biomonitoringTestimonials } from '@/lib/subject-matter-experts/biomonitoring'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Biomonitoring Research & Publication Support | Pubrica",
  description: "Comprehensive biomonitoring research, analysis, and publication support for environmental and public health studies.",
  keywords: ["biomonitoring research"],
  slug: "/subject-matter-experts/biomonitoring",
});

const page = () => {
    return (
        <>
            <BiomonitoringPage />
            <BiomonitoringTrendsAndPublishingSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={biomonitoringTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page