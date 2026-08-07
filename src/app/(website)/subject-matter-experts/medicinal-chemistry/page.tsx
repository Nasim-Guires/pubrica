import WhatClientsSays from '@/components/common/WhatClientsSays'
import MedicinalAndPharmaceuticalChemistryPage from '@/components/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/MedicinalAndPharmaceuticalChemistryPage'
import MedicinalChemistryPage from '@/components/subject-matter-experts/medicinal-chemistry/MedicinalChemistryPage'
import MedicinalChemistrySections from '@/components/subject-matter-experts/medicinal-chemistry/MedicinalChemistrySections'
import { MEDICINAL_CHEMISTRY_TESTIMONIALS } from '@/lib/subject-matter-experts/medicinal-chemistry'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <MedicinalChemistryPage />
            <MedicinalChemistrySections />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={MEDICINAL_CHEMISTRY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page