import WhatClientsSays from '@/components/common/WhatClientsSays'
import FunctionalFoodsComplianceSection from '@/components/industries/foods-nutraceuticals/FunctionalFoodsComplianceSection'
import FunctionalFoodsPage from '@/components/industries/foods-nutraceuticals/FunctionalFoodsPage'
import { nutraceuticalsTestimonialsData } from '@/lib/industries/foods-nutraceuticals'
import React from 'react'
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