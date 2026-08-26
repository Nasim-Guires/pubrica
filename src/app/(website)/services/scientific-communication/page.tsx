import InsightsSection from '@/components/services/medical-data-collection/InsightsSection'
import SampleWorkAndPackagesSection from '@/components/services/scientific-communication/SampleWorkAndPackagesSection'
import ScientificCommunicationWorkflow from '@/components/services/scientific-communication/ScientificCommunicationWorkflow'
import ScientificMedicalCommunication from '@/components/services/scientific-communication/ScientificMedicalCommunication'
import ServicesAndAudienceSection from '@/components/services/scientific-communication/ServicesAndAudienceSection'
import TestimonialsAndFAQSection from '@/components/services/scientific-communication/TestimonialsAndFAQSection'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Best Scientific Medical Communication Services - Pubrica Experts',
  description: 'Pubrica provides scientific medical communication services for medical device manufacturers, and medico-marketing materials across the globe.',
  keywords: ['Scientific medical communication', 'Scientific Communication Services', 'healthcare communication service', 'medico marketing solution service', 'clinical research communication service'],
  slug: '/services/scientific-communication',
})

const page = () => {
  return (
    <>
    <ScientificMedicalCommunication/>
    <ServicesAndAudienceSection/>
    <ScientificCommunicationWorkflow/>
    <SampleWorkAndPackagesSection/>
    <TestimonialsAndFAQSection/>
    <InsightsSection/>
    </>
  )
}

export default page