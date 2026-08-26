import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiocomputingPage from '@/components/subject-matter-experts/biocomputing/BiocomputingPage'
import BiocomputingSection from '@/components/subject-matter-experts/biocomputing/BiocomputingSection'
import { biocomputingTestimonialsData } from '@/lib/subject-matter-experts/biocomputing '
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Biocomputing Research & Publication Support | Pubrica",
  description: "Advanced biocomputing research, writing, editing, AI analytics, and publication support for global life science researchers.",
  keywords: ["Biocomputing Research"],
  slug: "/subject-matter-experts/biocomputing",
});


const page = () => {
    return (
        <>
            <BiocomputingPage />
            <BiocomputingSection />
            <WhatClientsSays {...biocomputingTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page