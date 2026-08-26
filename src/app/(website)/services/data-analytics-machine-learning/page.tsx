import { AnalyticsFooterSections } from '@/components/services/data-analytics-machine-learning/AnalyticsFooterSections'
import { DataAnalyticsAndMachineLearning } from '@/components/services/data-analytics-machine-learning/DataAnalyticsAndMachineLearning'
import { DataAnalyticsFinalExtensions } from '@/components/services/data-analytics-machine-learning/DataAnalyticsFinalExtensions'
import { DataAnalyticsServicesExtension } from '@/components/services/data-analytics-machine-learning/DataAnalyticsServicesExtension'
import { SampleWorkShowcase } from '@/components/services/data-analytics-machine-learning/SampleWorkShowcase'
import { ServiceMatrix } from '@/components/services/data-analytics-machine-learning/ServiceMatrix'
import { ToolsUsed } from '@/components/services/data-analytics-machine-learning/ToolsUsed'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Data Analytics & Machine Learning Services | Pubrica',
    description: 'Advanced data analytics and machine learning services for research and business to drive insights, efficiency, and smarter decisions.',
    slug: '/services/data-analytics-machine-learning',
})

const page = () => {
  return (
   <>
   <DataAnalyticsAndMachineLearning/>
   <DataAnalyticsServicesExtension/>
   <DataAnalyticsFinalExtensions/>
   <ToolsUsed/>
   <SampleWorkShowcase/>
   <ServiceMatrix/>
   <AnalyticsFooterSections/>
   </>
  )
}

export default page