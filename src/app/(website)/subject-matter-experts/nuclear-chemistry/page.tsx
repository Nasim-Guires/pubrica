import WhatClientsSays from '@/components/common/WhatClientsSays'
import NuclearChemistryPage from '@/components/subject-matter-experts/nuclear-chemistry/NuclearChemistryPage'
import NuclearChemistrySection from '@/components/subject-matter-experts/nuclear-chemistry/NuclearChemistrySection'
import { NUCLEAR_CHEMISTRY_TESTIMONIALS } from '@/lib/subject-matter-experts/nuclear-chemistry'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <NuclearChemistryPage />
            <NuclearChemistrySection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={NUCLEAR_CHEMISTRY_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page