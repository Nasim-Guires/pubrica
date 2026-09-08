import Breadcrumb from "@/components/seo/Breadcrumb";
import PublicationServicesGrid from "@/features/services/components/PublicationServicesGrid";
import ServiceHero from "@/features/services/components/ServiceHero";
import ServiceOverview from "@/features/services/components/ServiceOverview";
import ServiceRejectionTable from "@/features/services/components/ServiceRejectionTable";
import { PUBLICATION_SUPPORT_SERVICE } from "@/lib/data-service";
import TherapeuticAreasGrid from "@/features/services/components/TherapeuticAreasGrid";
import PublicationServices from "@/features/services/components/PublicationServices";
import PubricaResourceHub from "@/features/services/components/PubricaResourceHub";
import CommonFAQ from "@/components/common/FAQ";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const service = PUBLICATION_SUPPORT_SERVICE;
const faqs = [
  {
    question:
      "How can I increase the chances of getting my research paper published in a high-impact journal?",
    answer:
      "Improve your chances of getting published by selecting an appropriate journal, complying with authors’ requirements, having robust methodologies, offering clear results, and revising your paper through thorough editing.",
  },
  {
    question: "Why do research papers get rejected by journals?",
    answer:
      "Research papers face high chances of rejection if there is poor study design, a lack of originality, poor methodology, ambiguity, mismatch with journal scope, or failure to comply with author guidelines.",
  },
  {
    question:
      "How can I avoid submitting my manuscript to predatory journals?",
    answer:
      "To avoid predatory journals, researchers can use tools such as indexing databases (Scopus, Web of Science, etc.), evaluating the publisher’s legitimacy, reviewing editorial boards, peer review processes, and consulting reputable sources or experts.",
  },
  {
    question: "How long does the academic journal publication process take?",
    answer:
      "The process of publishing a research paper in academic journals takes approximately 3 to 12 months, depending upon various factors such as peer review, revisions, etc.",
  },
  {
    question:
      "How can research teams improve publication success across multiple projects?",
    answer:
      "Researchers can increase their publication success rate by standardizing the publication process, conducting robust research design, fostering effective collaboration, delivering quality writing, and planning for journal targeting early in the research process.",
  },
  {
    question:
      "What are the benefits of using professional publication support services?",
    answer:
      "Professional publication support services help improve the quality, clarity, and structure of manuscripts. It also helps with journal guideline adherence and submission readiness.",
  },
  {
    question:
      "What are the key factors journals consider before accepting a manuscript?",
    answer:
      "The journal checks the originality of the research, its relevance to the journal’s scope, methodology, clarity of the writing, significance of the research findings, ethical issues, and adherence to journal submission guidelines.",
  },
  {
    question:
      "What are the best strategies to publish research in indexed journals?",
    answer:
      "Publish in indexed journals by selecting the right journal for your work, following author guidelines, using robust methodology, providing clear results, writing well, and revising your work based on feedback from peers.",
  },
];
export const metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function Page() {
  return (
    <>
      <ServiceHero service={service} />

      <ServiceOverview />
      <ServiceRejectionTable service={service} />
      <PublicationServicesGrid />
      <TherapeuticAreasGrid />
      <PublicationServices />
      <PubricaResourceHub />
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />
      <InsightsSection/>
    </>
  );
}