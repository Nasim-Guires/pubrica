import { AnalyticsFooterSections } from '@/components/services/data-analytics-machine-learning/AnalyticsFooterSections'
import { DataAnalyticsAndMachineLearning } from '@/components/services/data-analytics-machine-learning/DataAnalyticsAndMachineLearning'
import { DataAnalyticsFinalExtensions } from '@/components/services/data-analytics-machine-learning/DataAnalyticsFinalExtensions'
import { DataAnalyticsServicesExtension } from '@/components/services/data-analytics-machine-learning/DataAnalyticsServicesExtension'
import { SampleWorkShowcase } from '@/components/services/data-analytics-machine-learning/SampleWorkShowcase'
import { ServiceMatrix } from '@/components/services/data-analytics-machine-learning/ServiceMatrix'
import { ToolsUsed } from '@/components/services/data-analytics-machine-learning/ToolsUsed'
import React from 'react'

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