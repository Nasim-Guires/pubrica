import WhatClientsSays from '@/components/common/WhatClientsSays'
import CosmeceuticalsPage from '@/components/subject-matter-experts/cosmeceuticals/CosmeceuticalsPage'
import CosmeceuticalsSection from '@/components/subject-matter-experts/cosmeceuticals/CosmeceuticalsSection'
import { cosmeceuticalsTestimonialsData } from '@/lib/subject-matter-experts/cosmeceuticals'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Cosmeceutical Research & Publishing Support | Pubrica",
  description: "Expert cosmeceutical research, editing, regulatory, and publishing support for skincare innovation and clinical success.",
  keywords: ["Cosmeceutical Research"],
  slug: "/subject-matter-experts/cosmeceuticals",
});

const page = () => {
    return (
        <>
            <CosmeceuticalsPage />
            <CosmeceuticalsSection />
            <WhatClientsSays {...cosmeceuticalsTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page