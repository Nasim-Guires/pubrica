import WhatClientsSays from '@/components/common/WhatClientsSays'
import FunctionalFoodsComplianceSection from '@/components/industries/functional-foods-and-nutraceuticals/FunctionalFoodsComplianceSection'
import FunctionalFoodsPage from '@/components/industries/functional-foods-and-nutraceuticals/FunctionalFoodsPage'
import { nutraceuticalsTestimonialsData } from '@/lib/industries/functional-foods-and-nutraceuticals'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Functional Foods and Nutraceutical Research | Pubrica',
  description:
    'Functional Foods and Nutraceuticals offer expert guidance for writing, editing, and publishing research on health foods and supplements.',
  keywords: ['Foods and Nutraceuticals'],
  slug: '/industries/functional-foods-and-nutraceuticals',
})
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <FunctionalFoodsPage />
            <FunctionalFoodsComplianceSection />
            <WhatClientsSays {...nutraceuticalsTestimonialsData} />;
            <InsightsSection />
        </>
    )
}

export default page