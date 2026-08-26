import CommonFAQ from "@/components/common/FAQ";

export default function PeerReviewFAQPage() {
  const faqs = [
    {
      question: "What is pre-submission peer review for research manuscripts?",
      answer:
        "The pre-submission peer review is a process whereby experts review your work before submitting it to a journal in order to clarify your work, methodology, structure, and overall quality.",
    },
    {
      question:
        "How long does the journal submission and peer-review process take?",
      answer:
        "The journal submission and peer review process may take a few weeks to a few months depending on various factors such as journal policies and timelines.",
    },
    {
      question:
        "How can researchers ensure compliance with journal ethical guidelines during submission?",
      answer:
        "A researcher can comply with ethical standards by respecting a journal’s ethical policies, declaring conflicts of interest, seeking approvals such as ethics committee clearance, obtaining informed consent, avoiding plagiarism, and reporting results accurately",
    },
    {
      question: "How to prepare a cover letter for journal submission?",
      answer:
        "Prepare a cover letter that entails a brief description of your study, its importance, and whether it is original, your conflicts of interest, and why it is a good fit for the journal.",
    },
    {
      question:
        "What are the benefits of expert review before submitting a research paper?",
      answer:
        "Expert review will help in clarity, methodology, gaps in information, structure and language quality, and preparation for journal evaluation and peer review.",
    },
    {
      question:
        "How does pre-submission peer review differ from journal peer review?",
      answer:
        "Pre-submission peer review is an optional process, where experts review your manuscript to improve it, while journal peer review is a formal process conducted by experts to determine whether your manuscript is worthy of publication.",
    },
    {
      question:
        "What mistakes can be avoided through pre-submission peer review?",
      answer:
        " Pre-submission peer review enables the avoidance of unclear writing, poor methodology, inadequate reporting, formatting issues, non-compliance with the guidelines, logical gaps, and potential issues that may result in the rejection of the manuscript from the journal.",
    },
    {
      question:
        "What feedback should authors expect from a pre-submission peer review?",
      answer:
        "The authors can expect feedback on the clarity of the writing, structure, methodology, data presentation, logical gaps, compliance with the guidelines, language quality, and suggestions on how to improve the quality of the manuscript.",
    },
    {
      question:
        "How do research teams ensure their manuscript is ready for journal submission?",
      answer:
        "Research groups prepare for submission by refining their study, reviewing journal guidelines, refining the manuscript for clarity and structure, reviewing references, ensuring compliance with guidelines, and possibly conducting internal or expert reviews.  ",
    },
    {
      question:
        "How can researchers strengthen their manuscript before journal submission?",
      answer:
        "Researchers can improve their manuscript by refining the research question, improving structure and clarity, ensuring data accuracy, aligning it with journal guidelines, and seeking feedback from experts.",
    },
    {
      question:
        "Can pre-submission peer review increase journal acceptance chances?",
      answer:
        "Yes, pre-submission peer review may help in increasing the probability of acceptance by helping identify potential flaws in the study, improving clarity and methodology, ensuring that it aligns with journal guidelines, and improving overall quality.",
    },
    {
      question:
        "What should I check before submitting my research paper to a journal?",
      answer:
        "Before submission, it is important to assess whether it aligns with journal scope, formatting requirements, word count, reference style, ethical approvals, conflict of interest statements, data accuracy, and overall quality.",
    },
    {
      question:
        "What do journal reviewers typically look for in a research manuscript?",
      answer:
        "Journal reviewers usually consider originality, methodological quality, clarity of the manuscript, validity of the data, ethical standards, relevance, and contribution of the research to the discipline.",
    },
  ];

  return (
    <CommonFAQ
      title="Frequently Asked Questions – Peer Review Pre-submission Services"
      faqs={faqs}
    />
  );
}