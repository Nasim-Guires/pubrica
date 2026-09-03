import AcademicEditorialServicesSection from '@/components/services/academic-editorial-services/AcademicEditorialServicesSection'
import AcademicProcessAndSampleWork from '@/components/services/academic-editorial-services/AcademicProcessAndSampleWork'
import EditorialPackagesSection from '@/components/services/academic-editorial-services/EditorialPackagesSection'
import ServicesAndAudienceSection from '@/components/services/academic-editorial-services/ServicesAndAudienceSection'
import { TestimonialsSection } from '@/components/services/academic-editorial-services/TestimonialsSection'
import InsightsSection from '@/components/services/medical-data-collection/InsightsSection'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'
import { FAQSection } from '@/components/services/academic-editorial-services/FAQSection'

export const metadata = constructMetadata({
    title: 'Expert Academic Editorial Services | Pubrica',
    description: "Pubrica’s Academic Editorial Services provide precise editing, language enhancement, and structural improvement to boost impact.",
    slug: '/services/academic-editorial-services',
})

const page = () => {
  return (
    <>
    <AcademicEditorialServicesSection/>
    <ServicesAndAudienceSection/>
    <AcademicProcessAndSampleWork/>
    <EditorialPackagesSection/>
    <TestimonialsSection/>
    <FAQSection/>
    <InsightsSection/>
    </>
  )
}

export default page