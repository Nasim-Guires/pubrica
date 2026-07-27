import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import CaseReportDetails from "@/components/services/physician-writing-services/case-report-writing/CaseReportDetails";
import CaseReportPackagesAndSamples from "@/components/services/physician-writing-services/case-report-writing/CaseReportPackagesAndSamples";
import CaseReportServicesAndCompliance from "@/components/services/physician-writing-services/case-report-writing/CaseReportServicesAndCompliance";
import CaseReportWorkflowAndDisciplines from "@/components/services/physician-writing-services/case-report-writing/CaseReportWorkflowAndDisciplines";
import CaseReportWritingService from "@/components/services/physician-writing-services/case-report-writing/CaseReportWritingService";
import {
  caseReportFaqs,
  caseReportWritingTestimonials,
} from "@/lib/services/data/research-services/caseReportWritingTestimonials";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";

const page = () => {
  return (
    <>
      <CaseReportWritingService />
      <CaseReportDetails />
      <CaseReportWorkflowAndDisciplines />
      <CaseReportServicesAndCompliance />
      <CaseReportPackagesAndSamples />
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica's case report writing service has enabled clinicians to publish rare and novel clinical observations in leading journals with structured, CARE-compliant manuscripts. Here is what our clients say:"
        testimonials={caseReportWritingTestimonials}
      />
      <CommonFAQ title="Frequently Asked Questions" faqs={caseReportFaqs} />
      <InsightsSection/>
    </>
  );
};

export default page;
