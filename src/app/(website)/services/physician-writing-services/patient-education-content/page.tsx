import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import PatientEducationApplicationsAndSources from "@/components/services/physician-writing-services/patient-education-content/PatientEducationApplicationsAndSources";
import PatientEducationContentFormatsAccordionSection from "@/components/services/physician-writing-services/patient-education-content/PatientEducationContentFormatsAccordionSection";
import PatientEducationContentOverviewSection from "@/components/services/physician-writing-services/patient-education-content/PatientEducationContentOverviewSection";
import PatientEducationPackagesAndPricing from "@/components/services/physician-writing-services/patient-education-content/PatientEducationPackagesAndPricing";
import PatientEducationProcessAndWhoWeServe from "@/components/services/physician-writing-services/patient-education-content/PatientEducationProcessAndWhoWeServe";
import {
  patientEducationFaqs,
  patientEducationTestimonials,
} from "@/lib/services/data/research-services/patientEducationTestimonials";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";

const page = () => {
  return (
    <>
      <PatientEducationContentOverviewSection />
      <PatientEducationContentFormatsAccordionSection />
      <PatientEducationApplicationsAndSources />
      <PatientEducationProcessAndWhoWeServe />
      <PatientEducationPackagesAndPricing />
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica’s patient education content service has helped healthcare providers communicate complex medical information clearly and effectively to diverse patient groups. Here is what our clients say:"
        testimonials={patientEducationTestimonials}
      />
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={patientEducationFaqs}
      />
      <InsightsSection />
    </>
  );
};

export default page;
