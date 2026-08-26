import WhatClientsSays from '@/components/common/WhatClientsSays'
import BiopolymersPage from '@/components/subject-matter-experts/biopolymers/BiopolymersPage'
import BiopolymersSection from '@/components/subject-matter-experts/biopolymers/BiopolymersSection'
import { polymerScienceTestimonialsData } from '@/lib/subject-matter-experts/biopolymers'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Sustainable Biopolymer Research & Publication Support | Pubrica",
  description: "Expert biopolymer research, editing, publishing & trends for biomedical, industrial & sustainable applications.",
  keywords: ["sustainable biopolymer research"],
  slug: "/subject-matter-experts/biopolymers",
});


const page = () => {
    return (
        <>
            <BiopolymersPage />
            <BiopolymersSection />
            <WhatClientsSays {...polymerScienceTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page