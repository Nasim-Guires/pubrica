"use client";

import CommonFAQ from "@/components/common/FAQ";


const faqData = [
  {
    question: "1. What services do you offer under Medical Writing Services?",
    answer:
      "We offer medical writing services from beginning to end in six primary areas: Scientific & Academic Writing (manuscripts, literature reviews, systematic reviews (PRISMA), meta-analyses, case reports, grant writing, and experimental designs); Regulatory Medical Writing (protocols, CSRs, CTDs, CERs, IFUs, risk-benefit analyses, and post-market surveillance documents); Pharma & Biotech Content (product dossiers, white papers, MSL slide decks, briefs for document updates, and investor documents); Medical Device & Digital Health Writing (clinical evaluation reports (MDR/IVDR), SaMD documentation, validation summary documents, and software IFUs); Commercial & Patient Communication (patient education documents, HCP brochures, medical marketing content, and digital content); and Editorial & Quality Support (medical editing, formatting, referencing, plagiarism checks, and journal submissions). Bonus services include visual abstracts, scientific animation scripts, AI validation data documents, and pitch decks.",
  },
  {
    question:
      "2. What will I receive when I order a medical writing service?",
    answer:
      "Deliverables will vary based on the service type, but may include: 1. Well-supported, scientifically sound documents that are plagiarism-free with sources correctly cited. 2. Clear identification of gaps in research, controversies in the literature, and clearly defined problem statements. 3. Formatted documents that meet journal, regulatory, or company specifications, along with aligned research objectives and frameworks. Premium plans may also include custom formatting for expedited acceptance or approval.",
  },
  {
    question: "3. Do you offer different plans or service levels?",
    answer:
      "Yes! You can choose from Standard, Advanced, and Elite tiers, offering different levels of depth, support, and complexity. The plans include: 1. Citation styles such as AMA, APA, and Vancouver. 2. Full scientific research articles with statistical support. 3. Strategic regulatory writing following compliance review. 4. Scientific storytelling and commercialization-ready content.",
  },
  {
    question:
      "4. What information do I need to provide when placing an order?",
    answer:
      "To preserve precision and uniqueness, please provide: 1. Field/domain (e.g., clinical research, digital health, or biotech). 2. Country/region focus (e.g., UK, US, EU, or GCC). 3. Target audience (e.g., journal, regulatory body, HCPs, or patients). 4. Research purpose or study proposal. 5. Example sources or preferred references. 6. Institutional or publication guidelines. 7. Academic background, specialization, and supervisor's area for author support.",
  },
  {
    question: "5. What qualifications do your medical writers have?",
    answer:
      "All writers hold a master's degree or PhD in life sciences, medicine, or pharmacy and have 5+ years of experience in the field. Writers are assigned based on their therapeutic area of specialization to ensure maximum depth of knowledge, regulatory accuracy, clarity, and consistency. We recruit internationally across the UK, EU, and APAC and ensure alignment with subject-matter experts for each project.",
  },
  {
    question: "6. What happens after I place an order?",
    answer:
      "Once your order is confirmed, it is assigned to a Project Associate (PA), who reviews your brief and clarifies the instructions if necessary. A subject-matter expert is then assigned after signing an NDA. The process includes: 1. Technical writing and review. 2. Internal Quality Assurance (QA) checks. 3. Plagiarism checks. 4. Final delivery along with QA and plagiarism reports.",
  },
  {
    question:
      "7. What if I am not satisfied with the work? Do you offer revisions or refunds?",
    answer:
      "We provide a satisfaction guarantee based on: 1. On-time delivery. 2. Plagiarism-free and original work, typically below 5–10%. 3. Content that is consistent with the agreed scope and brief. 4. Assignment of a domain expert. If any of these requirements are not fulfilled, we revise or rework the content according to our revision policy. Refunds are considered only when critical, agreed-upon service guarantees are unfulfilled, subject to our terms and conditions.",
  },
  {
    question: "8. What guarantees do you provide?",
    answer:
      "We guarantee: 1. Plagiarism-checked work, typically below 5%. 2. Qualified, domain-specific writers. 3. Timely delivery. 4. Scientifically and structurally accurate writing. 5. Confidentiality and intellectual property protection. 6. Compliance with applicable journal or governmental regulations.",
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
    faqs={faqData} />;
}