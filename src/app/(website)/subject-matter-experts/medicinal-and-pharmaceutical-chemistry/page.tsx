import WhatClientsSays from '@/components/common/WhatClientsSays'
import MedicinalAndPharmaceuticalChemistryPage from '@/components/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/MedicinalAndPharmaceuticalChemistryPage'
import MedicinalAndPharmaceuticalChemistrySections from '@/components/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/MedicinalAndPharmaceuticalChemistrySections'
import { PHARMACEUTICAL_TESTIMONIALS } from '@/lib/subject-matter-experts/medicinal-and-pharmaceutical-chemistry'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <MedicinalAndPharmaceuticalChemistryPage />
            <MedicinalAndPharmaceuticalChemistrySections />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={PHARMACEUTICAL_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page