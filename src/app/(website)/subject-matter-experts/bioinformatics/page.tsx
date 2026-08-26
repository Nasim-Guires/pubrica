import WhatClientsSays from '@/components/common/WhatClientsSays'
import BioinformaticsPage from '@/components/subject-matter-experts/bioinformatics/BioinformaticsPage'
import BioinformaticsSection from '@/components/subject-matter-experts/bioinformatics/BioinformaticsSection'
import { bioinformaticsTestimonialsData } from '@/lib/subject-matter-experts/bioinformatics'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Biological Data Research and Analysis Insight Support",
  description: "Expert bioinformatics analysis, research support, and publication services for genomics, proteomics, and clinical studies.",
  keywords: ["transforming biological data into scientific discovery"],
  slug: "/subject-matter-experts/bioinformatics",
});


const page = () => {
    return (
        <>
            <BioinformaticsPage />
            <BioinformaticsSection />
            <WhatClientsSays {...bioinformaticsTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page