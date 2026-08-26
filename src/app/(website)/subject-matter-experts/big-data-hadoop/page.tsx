import WhatClientsSays from '@/components/common/WhatClientsSays'
import BigDataHadoopComponent from '@/components/subject-matter-experts/big-data-hadoop/BigDataHadoopComponent'
import BigDataTrendsAndPublishingSection from '@/components/subject-matter-experts/big-data-hadoop/BigDataTrendsAndPublishingSection'
import { bigDataAnalyticsTestimonials } from '@/lib/subject-matter-experts/big-data-hadoop'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Big Data & Hadoop Research and Analytics Solutions | Pubrica",
  description: "Expert Big Data and Hadoop research support for analytics, data processing, and publication success worldwide.",
  keywords: ["Big Data & Hadoop"],
  slug: "/subject-matter-experts/big-data-hadoop",
});

const page = () => {
    return (
        <>
            <BigDataHadoopComponent />
            <BigDataTrendsAndPublishingSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={bigDataAnalyticsTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page