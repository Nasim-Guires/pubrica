import WhatClientsSays from '@/components/common/WhatClientsSays'
import EnzymesPage from '@/components/subject-matter-experts/enzymes/EnzymesPage'
import EnzymesSection from '@/components/subject-matter-experts/enzymes/EnzymesSection'
import { ENZYMES_TESTIMONIALS } from '@/lib/subject-matter-experts/enzymes'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Enzyme Research Writing, Editing and Publication Support",
  description: "Expert support in writing, editing, and publishing enzyme research. We help improve clarity, structure, and journal acceptance of your manuscript.",
  keywords: ["Enzyme Research Writing"],
  slug: "/subject-matter-experts/enzymes",
});


const page = () => {
    return (
        <>

            <EnzymesPage />
            <EnzymesSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={ENZYMES_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page