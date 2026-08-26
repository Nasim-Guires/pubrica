import WhatClientsSays from '@/components/common/WhatClientsSays'
import CardiologyPage from '@/components/subject-matter-experts/cardiology/CardiologyPage'
import CardiologySection from '@/components/subject-matter-experts/cardiology/CardiologySection'
import { cardiologyTestimonialsData } from '@/lib/subject-matter-experts/cardiology'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Empowering Cardiology Research & Clinical Excellence",
  description: "Expert guidance in cardiology research, diagnostics, and publication for clinicians, researchers, and academics.",
  keywords: ["Cardiology"],
  slug: "/subject-matter-experts/cardiology",
});


const page = () => {
    return (
        <>
            <CardiologyPage />
            <CardiologySection />
            <WhatClientsSays {...cardiologyTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page