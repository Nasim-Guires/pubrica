import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import PredictiveAnalyticProcessSteps from '@/components/services/data-analytics-machine-learning/predictive-analytics/PredictiveAnalyticProcessSteps'
import PredictiveAnalyticsPackages from '@/components/services/data-analytics-machine-learning/predictive-analytics/PredictiveAnalyticsPackages'
import PredictiveAnalyticsSection from '@/components/services/data-analytics-machine-learning/predictive-analytics/PredictiveAnalyticsSection'
import { predictiveAnalyticsFAQ, predictiveAnalyticsTestimonials, predictiveAnalyticsWhoWeServe } from '@/lib/services/data/predictive-analytics/predictiveAnalyticsTestimonials'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <PredictiveAnalyticsSection />
            <CommonWhoWeServe
                title={predictiveAnalyticsWhoWeServe.title}
                description={predictiveAnalyticsWhoWeServe.description}
                data={predictiveAnalyticsWhoWeServe.data}
            />
            <PredictiveAnalyticProcessSteps />
            <PredictiveAnalyticsPackages />
            <CommonTestimonial
                title={predictiveAnalyticsTestimonials.title}
                description={predictiveAnalyticsTestimonials.description}
                testimonials={predictiveAnalyticsTestimonials.testimonials}
            />
            <CommonFAQ
                title={predictiveAnalyticsFAQ.title}
                faqs={predictiveAnalyticsFAQ.faqs}
            />
            <InsightsSection />
        </>
    )
}

export default page