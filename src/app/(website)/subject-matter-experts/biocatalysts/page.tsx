import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiocatalystsPage from '@/components/subject-matter-experts/biocatalysts/BiocatalystsPage'
import BiocatalystsSection from '@/components/subject-matter-experts/biocatalysts/BiocatalystsSection'
import { biocatalystsTestimonialsData } from '@/lib/subject-matter-experts/biocatalysts'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Expert Biocatalyst Research & Publication Support | Pubrica",
  description: "Comprehensive biocatalyst research, enzyme optimization, and publication services for scholars and industry experts.",
  keywords: ["biocatalyst research"],
  slug: "/subject-matter-experts/biocatalysts",
});

const page = () => {
    return (
        <>
            <BiocatalystsPage />
            <BiocatalystsSection />
            <WhatClientsSays {...biocatalystsTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page