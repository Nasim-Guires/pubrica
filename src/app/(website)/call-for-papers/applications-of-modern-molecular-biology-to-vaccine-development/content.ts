// Content of https://pubrica.com/call-for-papers/applications-of-modern-molecular-biology-to-vaccine-development/
// mirrored from the live page. Used only by the page in this folder.

export const TITLE = "Applications of Modern Molecular Biology to Vaccine Development";

export const META_DESCRIPTION =
  "Authors Guide:The Mayo Clinic's Richard Kennedy, Manish Sadarangani (BC Children's Hospital Research Institute), Tobias Kollmann (Telethon Kids Institute),";

export const SECTIONS: { label: string; text: string }[] = [
  {
    label: "Authors Guide:",
    text: "The Mayo Clinic’s Richard Kennedy, Manish Sadarangani (BC Children’s Hospital Research Institute), Tobias Kollmann (Telethon Kids Institute), and the Journal of Molecular Biology are organizing a special issue on “Applications of Modern Molecular Biology to Vaccine Development.”",
  },
  {
    label: "Submission:",
    text: "The journal publishes original scientific research papers that describe significant advancements in the field and provide mechanistic and functional insights.",
  },
  {
    label: "Therapeutic disease:",
    text: "This special issue will cover all phases of molecular biology, including how modern tools, methodologies, and model systems are being used to understand host-pathogen interactions better, characterize the host response to infection and vaccination more comprehensively, and develop safe and effective vaccines more quickly. The history of various vaccine types, unique techniques for developing new vaccines and improving current ones, and major emergent concepts altering how we produce, test, and deploy vaccines will be covered in reviews and research papers.",
  },
  {
    label: "Pubrica Offers:",
    text: "We provide comprehensive treatment knowledge in a wide range of indications. Pubrica Scientific Writing & Publication customize clinical trial services to meet your individual needs; we offer full program creation and delivery services for any trial phase you wish to outsource or salvage a failing study. Allow our specialists to express themselves through new ideas and unique techniques. Our staff includes clinical research associates, project managers, medical supervisors, data management experts, biostatisticians, and medical writers who are available at all stages of the trial, including trial planning, design, protocol development, safety narratives, in-house data summaries, safety surveillance plan, Case Report Form (CRF), site selection, data analysis, and regulatory submissions. As a result, create cost-effective clinical research studies that provide the data you need to support your innovative therapeutics.",
  },
];

export const CTA = {
  heading: "Need manuscript writing support? Let’s talk!",
  text: "At Pubrica, we have created an exclusive group of our high-rated experts, who are sought after by our clients for their expertise, publishing knowledge, and high quality of work. Our objective is to edit your manuscript and assist you to get published quickly and in a good journal.",
  buttonText: "Contact Us",
  href: "/contact-us/",
};

const SERVICE_ICON = "https://pubrica.com/wp-content/uploads/2024/04/Medical-Device-min.png";

/** Service cards: first row of three, second row of two (centered), as on the live page. */
export const SERVICE_ROWS: { title: string; text: string; href: string; icon: string }[][] = [
  [
    {
      title: "Publication support",
      text: "At Pubrica, we translate your research writing into a publishable manuscript. We guide you through the entire life cycle of your publication,",
      href: "/services/publication-support/",
      icon: SERVICE_ICON,
    },
    {
      title: "Systematic review",
      text: "Our systematic review at Pubrica is more structured as at every stage of writing, and we ensure to critically check the rigour using ..",
      href: "/services/research-services/systematic-review/",
      icon: SERVICE_ICON,
    },
    {
      title: "Meta-analysis",
      text: "Pubrica has extensive experience in conducting meta-analysis a quantitative, formal, epidemiological study design used to systematically..",
      href: "/services/research-services/meta-analysis/",
      icon: SERVICE_ICON,
    },
  ],
  [
    {
      title: "Case report writing",
      text: "Pubrica has an extensive experience in developing a detailed clinical case report that highlights the symptoms, signs, diagnosis..",
      href: "/services/physician-writing-services/case-report/",
      icon: SERVICE_ICON,
    },
    {
      title: "Original Research Article",
      text: "Our experienced medical writers help to write scientific papers /articles that are publishable in peer-reviewed journals.",
      href: "/services/physician-writing-services/original-research-article/",
      icon: SERVICE_ICON,
    },
  ],
];
