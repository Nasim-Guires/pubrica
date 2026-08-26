import WhatClientsSays from '@/components/common/WhatClientsSays'
import CloudComputingPage from '@/components/subject-matter-experts/cloud-computing/CloudComputingPage'
import CloudComputingSection from '@/components/subject-matter-experts/cloud-computing/CloudComputingSection'
import { cloudComputingTestimonialsData } from '@/lib/subject-matter-experts/cloud-computing'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Cloud Computing Research & Publication Services | Pubrica",
  description: "Expert cloud computing research, editing, and publication support for scalable, secure, and innovative technologies.",
  keywords: ["Cloud computing"],
  slug: "/subject-matter-experts/cloud-computing",
});

const page = () => {
    return (
        <>

            <CloudComputingPage />
            <CloudComputingSection />
            <WhatClientsSays {...cloudComputingTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page