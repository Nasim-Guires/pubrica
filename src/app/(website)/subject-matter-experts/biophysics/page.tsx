import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiophysicsSciencePage from '@/components/subject-matter-experts/biophysics/BiophysicsSciencePage'
import BioPhysicsScienceSections from '@/components/subject-matter-experts/biophysics/BioPhysicsScienceSections'
import { biophysicsTestimonialsData } from '@/lib/subject-matter-experts/biophysics'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Biophysics Research & Publication Support | Pubrica",
  description: "Expert biophysics editing, research guidance, and journal support for high-impact publications at Pubrica.",
  keywords: ["Biophysics Research"],
  slug: "/subject-matter-experts/biophysics",
});

const page = () => {
    return (
        <>
            <BiophysicsSciencePage />
            <BioPhysicsScienceSections />
            <WhatClientsSays {...biophysicsTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page