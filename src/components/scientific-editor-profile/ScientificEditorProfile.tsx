"use client";

import Image from "next/image";
import { useState } from "react";
import HeroBanner from "../common/HeroBanner";
import { NavLinkItem } from "../about/our-editors/OurEditorsPage";
import Link from "next/link";
import { Star } from "lucide-react";

export interface DetailedContent {
  intro?: string;
  bullets?: string[];
  outro?: string;
}

export interface EditorProfile {
  id: string;
  name: string;
  title?: string;
  qualifications: string | DetailedContent;
  experience: string | DetailedContent;
  yearsOfExperience: string;
  location: string;
  imageSrc: string;
  category: "medical" | "non-medical";
}

const sidebarLinks: NavLinkItem[] = [
  {
    id: "experts",
    label: "MEET THE EXPERTS",
    subItems: [
      { id: "our-editors", label: "OUR EDITORS", href: "/about-us/our-editors" },
      { id: "editor-profile", label: "EDITOR PROFILE", href: "/scientific-editor-profile" },
      { id: "editor-speak", label: "EDITOR SPEAK", href: "/editor-speak" },
    ],
  },
  {
    id: "subject",
    label: "SUBJECT AREA",
    subItems: [
      { id: "medicine", label: "MEDICINE", href: "/about-us/medicine" },
      { id: "life-science", label: "LIFE SCIENCE", href: "/about-us/life-sciences" },
      { id: "physical-sciences", label: "PHYSICAL SCIENCES AND ENGINEERING", href: "/about-us/physical-sciences-engineering" },
    ],
  },
  {
    id: "therapeutic",
    label: "THERAPEUTIC EXPERTISE",
    href: "/therapeutic-expertise",
  },
  {
    id: "membership",
    label: "GLOBAL PARTNERS AND MEMBERSHIP",
    href: "/strategic-partnerships-memberships",
  },
  {
    id: "contact",
    label: "CONTACT US",
    href: "/contact",
  },
  {
    id: "careers",
    label: "CAREERS",
    href: "/careers",
  },
];

const EDITORS_DATA: EditorProfile[] = [
  {
    id: "1",
    name: "Dr. Helen Morrison, PhD. Research Methodology & Editorial Consultant | Pubrica",
    title: "",
    qualifications:
      "Dr. Helen Morrison holds a PhD in social sciences with specialization in research design and academic publishing standards.",
    experience:
      "She has reviewed manuscripts for leading international journals and supports researchers in improving methodological rigor, argument clarity, and compliance with global publication guidelines.",
    yearsOfExperience: "20+ Years of Experience",
    location: "United Kingdom",
    imageSrc:
      "/images/about/Dr.-Helen-Morrison-1.webp",
    category: "medical",
  },
  {
    id: "2",
    name: "Dr. Ravi Kumar PHD, FIAMS, DMRD, DMRE, DNB",
    title: "",
    qualifications:
      "Masters In pharma chemistry Over 20+ Industry Experience in Pharma/ Biotech/Clinical Research (Medical Device)",
    experience:
      "Dr. Ravi Kumar is the chief medical & scientific advisor at pubrica. He has more than 20 years of experience as a medical practitioner. He is a diplomat in cardiac CT and certified by the Cardiovascular Board of Computed Tomography. Dr. Ravi is qualified in advanced cardiovascular imaging from the University of Toronto, Canada; moreover, he is an intervention radiologist consultant. In addition to his responsibilities at Pubrica Scientific Writing & Publishing he manages the state-of-the-art CRO facilities in Chennai, India.",
    yearsOfExperience: "20 Years of Experience",
    location: "India",
    imageSrc:
      "/images/academy/ravikumar.webp",
    category: "medical",
  },
  {
    id: "3",
    name: "Dr. Arvind Rao, PhD. Academic & Research Publishing Advisor | Pubrica",
    title: "",
    qualifications:
      "Dr. Arvind Rao holds a PhD in interdisciplinary sciences with strong expertise in academic writing, research methodology, and scholarly communication.",
    experience:
      "He has worked extensively as a journal editor and peer reviewer across engineering, applied sciences, and interdisciplinary research, helping authors strengthen structure, clarity, and research impact.",
    yearsOfExperience: "22+ Years of Experience",
    location: "India",
    imageSrc:
      "/images/about/Dr.-Arvind-Rao-1.webp",
    category: "medical",
  },
  {
    id: "4",
    name: "Dr. Isaac Newton Rajkumar MD",
    title: "",
    qualifications:
      "Masters In pharma chemistry Over 20+ Industry Experience in Pharma/ Biotech/Clinical Research (Medical Device)",
    experience:
      "Dr. Isaac Newton is a widely respected orthopedic specialist in India. He is also a stem cell transplant surgeon. He received his training from elite national and international medical institutions. He has bagged many laurels for his contribution in the field of orthopedics right from the early ‘70s. He organized the first international conference on Computer Aided Surgery (CAS) in year 1998. He treats problems pertaining to musculoskeletal disorders; corrects spinal and bone deformities",
    yearsOfExperience: "25 Years of Experience",
    location: "India",
    imageSrc:
      "/images/academy/isac.webp",
    category: "medical",
  },
  {
    id: "5",
    name: "Dr. Meera Iyer, MD, PhD. Senior Medical & Scientific Editor | Pubrica",
    title: "",
    qualifications:
      "Dr. Meera Iyer holds an MD and PhD with advanced training in clinical research and medical writing. She has extensive experience across medical journals, life sciences, and regulatory documentation.",
    experience:
      "Dr. Meera Iyer has over 18 years of experience in medical research editing and scientific publishing. She has worked closely with clinicians, researchers, and pharmaceutical organizations to ensure accuracy, clarity, and compliance with international medical publishing standards.",
    yearsOfExperience: "18+ Years of Experience",
    location: "India",
    imageSrc:
      "/images/about/Dr.-Meera-Iyer-1-1.webp",
    category: "non-medical",
  },
  {
    id: "6",
    name: "Dr. David Wilson, MD. Clinical Research & Medical Publishing Consultant ",
    title: "",
    qualifications:
      "Dr. David Wilson is a medical doctor with advanced training in clinical research methodology and medical publishing.",
    experience:
      "With over two decades of experience, Dr. Wilson has supported clinical research publications, regulatory submissions, and high-impact medical journals, ensuring methodological accuracy and ethical compliance.",
    yearsOfExperience: "21+ Years of Experience",
    location: "Canada",
    imageSrc:
      "/images/about/Dr.-David-Wilson-1.webp",
    category: "non-medical",
  },
  // {
  //   id: "7",
  //   name: "Dr. Sophia Martinez, PhD. Medical & Life Sciences Editorial Advisor | Pubrica",
  //   title: "",
  //   qualifications:
  //     "Dr. Sophia Martinez holds a PhD in Biomedical Sciences with specialization in medical research communication and life sciences editing.",
  //   experience:
  //     "She has served as a medical editor and peer reviewer for several international journals. Her expertise includes clinical manuscripts, translational research, and systematic reviews, ensuring publication-ready medical content.",
  //   yearsOfExperience: "17+ Years of Experience",
  //   location: "Spain",
  //   imageSrc:
  //     "/images/about/Maria-1.webp",
  //   category: "non-medical",
  // },
  {
    id: "8",
    name: "Dr. Maria PHD",
    title: "",
    qualifications:
      "Masters In pharma chemistry Over 20+ Industry Experience in Pharma/ Biotech/Clinical Research (Medical Device)",
    experience: {
      intro:
        "Dr. Maria has more than 10 years of writing and editing experience; she has PHD in cellular biology and immunology. Her expertise spans across the following subjects:",
      bullets: [
        "Biochemistry",
        "Structural biology",
        "Molecular biology"
      ],
      outro:
        "In addition, Dr. Maria focuses on microbiology, immunology, biomaterials, nano biotechnology, system biology, and biostatistics."
    },
    yearsOfExperience: "10 years of experience",
    location: "USA",
    imageSrc: "/images/academy/Maria-1.webp",
    category: "non-medical",
  },
  {
    id: "9",
    name: "Dr. Julie PHD",
    title: "",
    qualifications:
      "Masters In pharma chemistry Over 20+ Industry Experience in Pharma/ Biotech/Clinical Research (Medical Device)",
    experience: {
      intro:
        "Dr. Julie has over 30 years of experience in medical and scientific writing; she is a subject-matter expert in the field of life sciences and her expertise spans across",
      bullets: [
        "Cell and molecular developmental biology",
        "Structural & functional genomics/proteomics",
        "Microbial technology & metabolic engineering"
      ],
      outro:
        "In addition, Dr. Julie focuses on animal cytogenetics and immunogenetics, and bio-informatics and computational biology."
    },
    yearsOfExperience: "30+ years of experience",
    location: "USA",
    imageSrc: "/images/academy/Julie.webp",
    category: "non-medical",
  },
  {
    id: "10",
    name: "Dr. Giles MPharm",
    title: "",
    qualifications:
      "Masters In pharma chemistry Over 20+ Industry Experience in Pharma/ Biotech/Clinical Research (Medical Device)",
    experience: {
      intro:
        "Dr. Giles has over 20 years of experience in medical research; he is a subject-matter expert in pharma, biotech, clinical research (medical device), and his expertise spans across the following areas:",
      bullets: [
        "Gastroenterology",
        "Respiratory",
        "Immunology",
        "Neurology",
        "Audiology",
        "Oncology"
      ],
      outro:
        "In addition, Dr. Giles focuses on endocrinology, cardiology, implants, infectious disses, diabetes, and dermatology."
    },
    yearsOfExperience: "20+ years of experience",
    location: "USA",
    imageSrc: "/images/academy/Giles.webp",
    category: "non-medical"
  },
  {
    id: "11",
    name: "Dr. Michelle PHD",
    title: "",
    qualifications:
      "Masters in pharma chemistry Over 20+ Industry Experience in Pharma/ Biotech/ Clinical Research (Medical Device)",
    experience: {
      intro:
        "Dr. Michelle has over 16 years of experience in clinical and regulatory writing; he is a subject-matter expert in therapeutics and his expertise spans across:",
      bullets: [
        "Microbiology and Immunology",
        "Complementary and Alternative Medicine",
        "Biochemistry and Structural Biology"
      ],
      outro:
        "In addition, Dr. Michelle focuses on Cardiology and Vascular medicine, infectious diseases, and ophthalmology."
    },
    yearsOfExperience: "16+ years of experience",
    location: "USA",
    imageSrc: "/images/academy/Michelle.webp",
    category: "non-medical"
  },
  {
    id: "12",
    name: "Dr. Laurence PHD",
    title: "",
    qualifications:
      "Masters In pharma chemistry Over 20+ Industry Experience in Pharma/ Biotech/Clinical Research (Medical Device)",
    experience:
      "Dr. Laurence has over 7 years of experience in regulatory affairs; he is an subject-matter expert in pharma and medical device industry. Knowledge of regulatory requirements for medical devices in US, EU, Asia Pacific, ISO 13485, and ISO 14971—these are his capabilities.",
    yearsOfExperience: "7 years of experience",
    location: "USA",
    imageSrc: "/images/about/Laurence.jpg",
    category: "non-medical"
  },
  {
    id: "13",
    name: "Dr. AJ PHD",
    title: "",
    qualifications:
      "Masters In pharma chemistry Over 20+ Industry Experience in Pharma/ Biotech/Clinical Research (Medical Device)",
    experience: {
      intro:
        "Dr. AJ has over 5 years of experience in medical writing; he is a subject-matter expert in neuroscience and his expertise spans across the following areas:",
      bullets: [
        "Neurology",
        "Computational Neuroscience",
        "Developmental Neuroscience",
        "Neuropathology",
        "Oncology"
      ],
      outro:
        "In addition, Dr. AJ focuses on nutrition and dietetics, life science psychology, and clinical psychiatry."
    },
    yearsOfExperience: "5 years of experience",
    location: "USA",
    imageSrc: "/images/academy/AJ.webp",
    category: "non-medical"
  },
  {
    id: "14",
    name: "Dr. Jay PHD",
    title: "",
    qualifications:
      "Masters in pharma chemistry Over 20+ Industry Experience in Pharma/ Biotech/ Clinical Research (Medical Device)",
    experience: {
      intro:
        "Dr. Jay has over 12 years of experience as a scientific editor; he is a subject-matter expert in medicinal chemistry. Covers:",
      bullets: [
        "Botany and ecology",
        "Plant genetics and taxonomy",
        "Zoology and epidemiology",
        "Infectious diseases",
        "Molecular biology and agricultural science",
        "Animal genetics and clinical psychiatry"
      ],
      outro:
        "In addition, Dr. Jay focuses on public health, disaster medicine, and forensic medicine."
    },
    yearsOfExperience: "12+ years of experience",
    location: "USA",
    imageSrc: "/images/academy/Jay.webp",
    category: "non-medical"
  },
  {
    id: "15",
    name: "Dr. R. J MPharm",
    title: "",
    qualifications:
      "Masters In pharma chemistry Over 20+ Industry Experience in Pharma/ Biotech/Clinical Research (Medical Device)",
    experience: {
      intro:
        "Dr. R.J has over 18 years of experience in the medical publishing industry; he is a publication support specialist. Here are some of his strengths:",
      bullets: [
        "Meets publication deadlines",
        "Knowledge across multifarious subjects",
        "Hands-on when it comes to journal specifications"
      ],
      outro:
        "In addition, Dr. R.J is a pharmacist and has thorough understanding of all phases of the publication process—concept to publication."
    },
    yearsOfExperience: "18+ years of experience",
    location: "USA",
    imageSrc: "/images/academy/rah.webp",
    category: "non-medical"
  }
];

export default function ScientificEditorProfile() {
  const [activeTab, setActiveTab] = useState<"medical" | "non-medical">(
    "medical"
  );
  const [openAccordions, setOpenAccordions] = useState<string[]>(["experts"]);
  const [activeSidebar, setActiveSidebar] = useState("editor-profile");

  const filteredEditors = EDITORS_DATA.filter(
    (editor) => editor.category === activeTab
  );

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderContent = (content: string | DetailedContent) => {
    if (typeof content === "string") {
      return <p className="text-sm text-gray-600 mt-1 leading-relaxed">{content}</p>;
    }

    return (
      <div className="text-sm text-gray-600 mt-1 space-y-2 leading-relaxed">
        {content.intro && <p>{content.intro}</p>}
        {content.bullets && content.bullets.length > 0 && (
          <ul className="list-disc list-inside pl-2 space-y-1 my-2">
            {content.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}
        {content.outro && <p>{content.outro}</p>}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      {/* Banner Header */}
      <HeroBanner
        title="Editors' Profile"
        description="Portfolio of various Pubrica experts"
        headingAs="h1"
      />

      {/* Main Grid Layout */}
      <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Sidebar Navigation (col-span-3) */}
          <aside className="lg:col-span-3 w-full">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 fill-[#1b2b28] text-[#1b2b28]" />
              <h2 className="text-xl font-bold text-[#1b2b28]">
                About Us
              </h2>
            </div>

            <nav className="border-t border-gray-200 pt-6 space-y-4">
              {sidebarLinks.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isOpen = openAccordions.includes(item.id);

                if (hasSubItems) {
                  return (
                    <div key={item.id} className="space-y-2">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full flex items-center gap-3 text-xs font-bold text-[#1b2b28] text-left hover:opacity-80 transition-opacity"
                      >
                        <span
                          className={`w-6 h-6 flex items-center justify-center text-sm font-bold text-white shrink-0 ${isOpen ? "bg-[#e2a800]" : "bg-[#80878a]"
                            }`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                        <span className="tracking-wider uppercase">{item.label}</span>
                      </button>

                      {isOpen && (
                        <div className="pl-9 space-y-2 pt-1">
                          {item.subItems?.map((sub) => {
                            const isSubActive = activeSidebar === sub.id;
                            return (
                              <Link
                                key={sub.id}
                                href={sub.href}
                                onClick={() => setActiveSidebar(sub.id)}
                                className={`flex items-center gap-2 text-xs font-bold transition-colors ${isSubActive
                                  ? "text-[#0088cc] font-extrabold"
                                  : "text-[#0088cc] hover:underline"
                                  }`}
                              >
                                <span className="text-[#0088cc]">•</span>
                                <span className="uppercase">{sub.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href || "#"}
                    onClick={() => setActiveSidebar(item.id)}
                    className="flex items-center gap-3 text-xs font-bold text-[#1b2b28] hover:opacity-80 transition-opacity"
                  >
                    <span className="w-6 h-6 bg-[#80878a] text-white flex items-center justify-center text-sm font-bold shrink-0">
                      +
                    </span>
                    <span className="tracking-wider uppercase">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Right Main Content Area (col-span-9) */}
          <div className="lg:col-span-9 w-full space-y-8">
            <header className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28]">
                Meet the experts
              </h2>
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  Pubrica Scientific Writing & Publishing works has pundits in more
                  than 1402 subjects; furthermore, our editors are native English
                  speakers and working professionals with an average English
                  editing experience of 21 years.
                </p>
                <p>
                  Pubrica's Scientific Writing & Publishing service prides itself
                  on offering expertise across a vast array of subjects, with
                  pundits specialized in over 1402 disciplines. This extensive
                  coverage ensures that authors working with Pubrica have access
                  to editors who possess in-depth knowledge and understanding of
                  their specific fields, guaranteeing accurate and insightful
                  feedback throughout the publication process.
                </p>
                <p>
                  Moreover, Pubrica's editors are not only highly knowledgeable in
                  their respective fields but are also native English speakers.
                  This ensures that manuscripts undergo thorough language editing
                  by professionals who have a deep understanding of the nuances of
                  the English language, enhancing the clarity and readability of
                  the final publication.
                </p>
              </div>
            </header>

            {/* Category Tabs */}
            <div className="grid grid-cols-2 gap-4 max-w-xl">
              <button
                type="button"
                onClick={() => setActiveTab("medical")}
                className={`py-3 text-sm font-semibold rounded transition-colors ${activeTab === "medical"
                  ? "bg-[#1b2b28] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                Medical Editors
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("non-medical")}
                className={`py-3 text-sm font-semibold rounded transition-colors ${activeTab === "non-medical"
                  ? "bg-[#1b2b28] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                Non Medical Editors
              </button>
            </div>

            {/* Editors List */}
            <div className="space-y-8 pt-4">
              {filteredEditors.map((editor) => (
                <div
                  key={editor.id}
                  className="flex flex-col sm:flex-row gap-6 p-6 border border-slate-200 rounded-xl bg-white shadow-sm items-start"
                >
                  <div className="w-full sm:w-48 flex-shrink-0 flex flex-col items-center">
                    <div className="relative w-48 h-56 bg-gray-100 overflow-hidden rounded shadow-sm">
                      <Image
                        src={editor.imageSrc}
                        alt={`Profile photo of ${editor.name}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 192px"
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-2 text-center text-xs text-slate-600 font-medium border-t pt-2 w-full">
                      <p>{editor.yearsOfExperience}</p>
                      <p className="text-slate-500">| {editor.location}</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold text-[#1b2b28]">
                      {editor.name}{" "}
                      {editor.title && (
                        <>
                          | <span className="font-normal text-sm">{editor.title}</span>
                        </>
                      )}
                    </h3>

                    <div>
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                        Qualifications & Background:
                      </h4>
                      {renderContent(editor.qualifications)}
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                        Experience:
                      </h4>
                      {renderContent(editor.experience)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}