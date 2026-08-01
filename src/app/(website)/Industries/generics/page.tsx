import WhatClientsSays from '@/components/common/WhatClientsSays'
import GenericPharmaceuticalsPage from '@/components/industries/generics/GenericPharmaceuticalsPage'
import PharmaceuticalDiscoveryAndPublishingPage from '@/components/industries/generics/PharmaceuticalDiscoveryAndPublishingPage'
import { genericsTestimonialsData } from '@/lib/industries/generic'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <GenericPharmaceuticalsPage />
            <PharmaceuticalDiscoveryAndPublishingPage />
            <WhatClientsSays {...genericsTestimonialsData} />
            <InsightsSection/>
        </>
    )
}

export default page