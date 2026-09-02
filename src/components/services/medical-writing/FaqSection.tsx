"use client";

import CommonFAQ from "@/components/common/FAQ";


const faqs = [
  {
    question: "1. What services do you offer under Medical Writing Services?",
    answer:
      "We offer medical writing services from beginning to end in six primary areas:",
    points: [
      "Scientific & Academic Writing: Writing manuscripts, literature reviews, systematic reviews (PRISMA), meta-analyses, case reports, grant writing, and experimental designs.",
      "Regulatory Medical Writing: Writing protocols, CSRs, CTDs, CERs, IFUs, risk-benefit analyses, and post-market surveillance documents.",
      "Pharma & Biotech Content: Writing product dossiers, white papers, MSL slide decks, briefs for document updates, and investor documents.",
      "Medical Device & Digital Health Writing: Writing clinical evaluation reports (MDR/IVDR), SaMD documentation, validation summary documents, and software IFUs.",
      "Commercial & Patient Communication: Writing patient education documents, HCP brochures, medical marketing content, and digital content.",
      "Editorial & Quality Support: Medical editing, formatting, referencing, plagiarism checks, and journal submissions.",
      "Bonus Services: Writing visual abstracts, scripting scientific animations, and preparing data for AI validation documents and pitch decks.",
    ],
  },
  {
    question:
      "2. What will I receive when I order a medical writing service?",
    answer: "Deliverables will vary based on the service type, but may include:",
    points: [
      "Well-supported, scientifically sound documents that are plagiarism-free with sources correctly cited.",
      "Clear identification of gaps in research, controversies in the literature, and clearly defined problem statements.",
      "Formatted documents that meet journal, regulatory, or company specifications, along with aligned research objectives and frameworks. Premium plans may also include custom formatting for expedited acceptance or approval.",
    ],
  },
  {
    question: "3. Do you offer different plans or service levels?",
    answer:
      "Yes! You can choose from Standard, Advanced, and Elite tiers, offering different levels of depth, support, and complexity. The plans include:",
    points: [
      "Citation styles such as AMA, APA, and Vancouver.",
      "Full scientific research articles with statistical support.",
      "Strategic regulatory writing following compliance review.",
      "Scientific storytelling and commercialization-ready content.",
    ],
  },
  {
    question:
      "4. What information do I need to provide when placing an order?",
    answer: "To preserve precision and uniqueness, please provide:",
    points: [
      "Field/domain (e.g., clinical research, digital health, or biotech).",
      "Country/region focus (e.g., UK, US, EU, or GCC).",
      "Target audience (e.g., journal, regulatory body, HCPs, or patients).",
      "Research purpose or study proposal.",
      "Example sources or preferred references.",
      "Institutional or publication guidelines.",
      "Academic background, specialization, and supervisor's area for author support.",
    ],
  },
  {
    question: "5. What qualifications do your medical writers have?",
    answer:
      "All writers hold a master's degree or PhD in life sciences, medicine, or pharmacy and have 5+ years of experience in the field. Writers are assigned based on their therapeutic area of specialization to ensure maximum depth of knowledge, regulatory accuracy, clarity, and consistency. We recruit internationally across the UK, EU, and APAC and ensure alignment with subject-matter experts for each project.",
  },
  {
    question: "6. What happens after I place an order?",
    answer:
      "Once your order is confirmed, it is assigned to a Project Associate (PA), who reviews your brief and clarifies the instructions if necessary. A subject-matter expert is then assigned after signing an NDA. The project process includes:",
    points: [
      "Technical writing and review.",
      "Internal Quality Assurance (QA) checks.",
      "Plagiarism checks.",
      "Final delivery along with QA and plagiarism reports.",
    ],
  },
  {
    question:
      "7. What if I am not satisfied with the work? Do you offer revisions or refunds?",
    answer: "We provide a satisfaction guarantee based on:",
    points: [
      "On-time delivery.",
      "Plagiarism-free and original work, typically below 5–10%.",
      "Content that is consistent with the agreed scope and brief.",
      "Assignment of a domain expert.",
    ],
  },
  {
    question: "8. What guarantees do you provide?",
    answer: "We guarantee:",
    points: [
      "Plagiarism-checked work, typically below 5%.",
      "Qualified, domain-specific writers.",
      "Timely delivery.",
      "Scientifically and structurally accurate writing.",
      "Confidentiality and intellectual property protection.",
      "Compliance with applicable journal or governmental regulations.",
    ],
  },
  {
    question: "9. Do you outsource writing or handle it in-house?",
    answer:
      "We work with qualified medical and scientific writers who are selected based on their subject-matter expertise, therapeutic area, and professional experience. Each project is assigned to an appropriate domain expert to ensure scientific accuracy, consistency, and quality throughout the writing process.",
  },
  {
    question: "10. How do you ensure the quality of medical writing?",
    answer:
      "Our quality assurance process includes expert review, scientific and technical editing, reference verification, formatting checks, plagiarism screening, and final quality assurance before delivery. This multi-step process helps ensure that the final document meets the agreed requirements and applicable publication, regulatory, or industry standards.",
  },
  {
    question: "11. Can you work with confidential or sensitive information?",
    answer:
      "Yes. We take confidentiality and data protection seriously. Projects can be handled under appropriate confidentiality agreements and NDAs. Access to project information is limited to the professionals involved in completing the work, and client information and intellectual property are treated as confidential.",
  },
  {
    question: "12. How long does a medical writing project take?",
    answer:
      "The turnaround time depends on the type, length, complexity, and scope of the project. After reviewing your requirements, we provide an estimated delivery timeline. Complex regulatory documents, systematic reviews, manuscripts, and large-scale projects may require additional time for research, writing, expert review, and quality assurance.",
  },
];
export default function MedicalWritingFAQ() {
  return <CommonFAQ title="Frequently Asked Questions"
    faqs={faqs} />;
}