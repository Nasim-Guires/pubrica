import InsightsSection from '@/components/services/medical-data-collection/InsightsSection'
import SampleWorkAndPackagesSection from '@/components/services/scientific-communication/SampleWorkAndPackagesSection'
import ScientificCommunicationWorkflow from '@/components/services/scientific-communication/ScientificCommunicationWorkflow'
import ScientificMedicalCommunication from '@/components/services/scientific-communication/ScientificMedicalCommunication'
import ServicesAndAudienceSection from '@/components/services/scientific-communication/ServicesAndAudienceSection'
import TestimonialsAndFAQSection from '@/components/services/scientific-communication/TestimonialsAndFAQSection'
import React from 'react'

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