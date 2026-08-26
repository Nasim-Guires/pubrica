import WhatClientsSays from '@/components/common/WhatClientsSays'
import BioChemistryPage from '@/components/subject-matter-experts/biochemistry/BioChemistryPage'
import BioChemistrySection from '@/components/subject-matter-experts/biochemistry/BioChemistrySection'
import { biochemistryTestimonialsData } from '@/lib/subject-matter-experts/biochemistry'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Advanced Biochemistry Research & Publication Support | Pubrica",
  description: "Expert biochemistry editing, research guidance, and publication support for high-impact scientific journals.",
  keywords: ["Advanced Biochemistry Research"],
  slug: "/subject-matter-experts/biochemistry",
});

const page = () => {
    return (
        <>
            <BioChemistryPage />
            <BioChemistrySection />
            <WhatClientsSays {...biochemistryTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page