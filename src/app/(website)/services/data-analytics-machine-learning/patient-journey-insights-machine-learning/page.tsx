import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import PatientJourneyInsightsMl from '@/components/services/data-analytics-machine-learning/patient-journey-insights-machine-learning/PatientJourneyInsightsMl'
import PatientJourneyPackagesSection from '@/components/services/data-analytics-machine-learning/patient-journey-insights-machine-learning/PatientJourneyPackagesSection'
import PatientJourneySteps from '@/components/services/data-analytics-machine-learning/patient-journey-insights-machine-learning/PatientJourneySteps'
import { patientJourneyInsightsFaqs, patientJourneyInsightsTestimonials, patientJourneyInsightsWhoWeServe } from '@/lib/services/data/data-analytics-machine-learning/patientJourneyTestimonials'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <PatientJourneyInsightsMl />

            <CommonWhoWeServe
                title="Who We Serve"
                description="At Pubrica, our Patient Journey & Insights – Machine Learning solutions are designed to support a broad spectrum of healthcare stakeholders. By translating complex healthcare data into actionable intelligence, we empower evidence-based decision-making across the healthcare ecosystem."
                data={patientJourneyInsightsWhoWeServe}
            />
            <PatientJourneySteps />
            <PatientJourneyPackagesSection />
            <CommonTestimonial
                title="Testimonials"
                description="Our Patient Journey & Insights – Machine Learning services empower healthcare providers, payers, and life sciences organizations with AI-driven analytics and real-world evidence, delivering actionable insights to enhance patient outcomes and optimize care strategies. Here's what some of our clients say:"
                testimonials={patientJourneyInsightsTestimonials}
            />
            <CommonFAQ
                title="Frequently Asked Questions – Patient Journey & Insights – Machine Learning"
                faqs={patientJourneyInsightsFaqs}
            />
            <InsightsSection />
        </>
    )
}

export default page