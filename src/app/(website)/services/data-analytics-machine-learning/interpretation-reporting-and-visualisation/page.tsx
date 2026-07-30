import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import InterpretationReportingVisualisation from '@/components/services/data-analytics-machine-learning/interpretation-reporting-and-visualisation/InterpretationReportingVisualisation'
import ProcessAndComplianceSection from '@/components/services/data-analytics-machine-learning/interpretation-reporting-and-visualisation/ProcessAndComplianceSection'
import ReportingPackagesSection from '@/components/services/data-analytics-machine-learning/interpretation-reporting-and-visualisation/ReportingPackagesSection'
import { dataVisualizationReportingFAQ, dataVisualizationReportingTestimonials, dataVisualizationReportingWhoWeServe } from '@/lib/services/data/interpretation-reporting-and-visualisation/dataVisualizationReportingTestimonials'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <InterpretationReportingVisualisation />
            <CommonWhoWeServe
                title={dataVisualizationReportingWhoWeServe.title}
                description={dataVisualizationReportingWhoWeServe.description}
                data={dataVisualizationReportingWhoWeServe.data}
            />
            <ProcessAndComplianceSection />
            <ReportingPackagesSection />
            <CommonTestimonial
                title={dataVisualizationReportingTestimonials.title}
                description={dataVisualizationReportingTestimonials.description}
                testimonials={dataVisualizationReportingTestimonials.testimonials}
            />;
            <CommonFAQ
                title={dataVisualizationReportingFAQ.title}
                faqs={dataVisualizationReportingFAQ.faqs}
            />;
            <InsightsSection />
        </>
    )
}

export default page