import WhatClientsSays from '@/components/common/WhatClientsSays'
import InternetOfThingsSection from '@/components/subject-matter-experts/internet-of-things/InternetOfThingSection'
import InternetOfThingspage from '@/components/subject-matter-experts/internet-of-things/InternetOfThingspage'
import { internetOfThingsTestimonialsData } from '@/lib/subject-matter-experts/internet-of-things'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'IoT Subject Matter Experts - Pubrica',
  description: 'Subject matter Support for internet of things scientific research - Pubrica',
  slug: '/subject-matter-experts/internet-of-things',
})

const page = () => {
    return (
        <>
            <InternetOfThingspage />
            <InternetOfThingsSection />
            <WhatClientsSays {...internetOfThingsTestimonialsData} />
            <InsightsSection />
        </>
    )
}

export default page