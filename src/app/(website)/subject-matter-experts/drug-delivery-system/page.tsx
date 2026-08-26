import WhatClientsSays from '@/components/common/WhatClientsSays'
import DrugDeliverySystemPage from '@/components/subject-matter-experts/drug-delivery-system/DrugDeliverySystemPage'
import DrugDeliverySystemSection from '@/components/subject-matter-experts/drug-delivery-system/DrugDeliverySystemSection'
import { DRUG_DELIVERY_SYSTEMS_TESTIMONIALS } from '@/lib/subject-matter-experts/drug-delivery-system'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Expert Drug Delivery System Research & Publishing Services",
  description: "Pubrica provides expert support in drug delivery system research, from manuscript writing to regulatory compliance for journals.",
  keywords: ["Drug Delivery System"],
  slug: "/subject-matter-experts/drug-delivery-system",
});

const page = () => {
    return (
        <>
            <DrugDeliverySystemPage />
            <DrugDeliverySystemSection />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={DRUG_DELIVERY_SYSTEMS_TESTIMONIALS}
                itemsPerPage={2}
            />
            <InsightsSection />
        </>
    )
}

export default page