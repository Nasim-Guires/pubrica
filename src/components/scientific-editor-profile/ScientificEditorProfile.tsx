"use client";

import Image from "next/image";
import { useState } from "react";

interface EditorProfile {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  experience: string;
  yearsOfExperience: string;
  location: string;
  imageSrc: string;
  category: "medical" | "non-medical";
}

const SIDEBAR_NAV = [
  "MEET THE EXPERTS",
  "SUBJECT AREA",
  "THERAPEUTIC EXPERTISE",
  "GLOBAL PARTNERS AND MEMBERSHIP",
  "CONTACT US",
  "CAREERS",
];

const EDITORS_DATA: EditorProfile[] = [
  {
    id: "1",
    name: "Dr. Helen Morrison, PhD",
    title: "Research Methodology & Editorial Consultant | Pubrica",
    qualifications:
      "Holds a PhD in social sciences with specialization in research design and academic publishing standards.",
    experience:
      "Has reviewed manuscripts for leading international journals and supports researchers in improving methodological rigor, argument clarity, and compliance with global publication guidelines.",
    yearsOfExperience: "20+ Years of Experience",
    location: "United Kingdom",
    imageSrc:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop",
    category: "medical",
  },
  {
    id: "2",
    name: "Dr. Ravi Kumar PHD, FIAMS, DMRD, DMRE, DNB",
    title: "Chief Medical & Scientific Advisor",
    qualifications:
      "Masters in pharma chemistry with over 20+ years of industry experience in Pharma, Biotech, and Clinical Research.",
    experience:
      "Diplomate in cardiac CT and certified by the Cardiovascular Board of Computed Tomography. Qualified in advanced cardiovascular imaging from the University of Toronto, Canada.",
    yearsOfExperience: "20 Years of Experience",
    location: "India",
    imageSrc:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop",
    category: "medical",
  },
  {
    id: "3",
    name: "Dr. Arvind Rao, PhD",
    title: "Academic & Research Publishing Advisor | Pubrica",
    qualifications:
      "Holds a PhD in interdisciplinary sciences with strong expertise in academic writing, research methodology, and scholarly communication.",
    experience:
      "Has worked extensively as a journal editor and peer reviewer across engineering, applied sciences, and interdisciplinary research.",
    yearsOfExperience: "22+ Years of Experience",
    location: "India",
    imageSrc:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop",
    category: "medical",
  },
  {
    id: "4",
    name: "Dr. Isaac Newton Rajkumar MD",
    title: "Senior Orthopedic Specialist & Advisor",
    qualifications:
      "Masters in pharma chemistry with 20+ years industry experience in Pharma, Biotech, and Clinical Research.",
    experience:
      "Widely respected orthopedic specialist and stem cell transplant surgeon. Organized international conferences on Computer Aided Surgery (CAS) and treats complex musculoskeletal disorders.",
    yearsOfExperience: "25 Years of Experience",
    location: "India",
    imageSrc:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop",
    category: "medical",
  },
  {
    id: "5",
    name: "Dr. Meera Iyer, MD, PhD",
    title: "Senior Medical & Scientific Editor | Pubrica",
    qualifications:
      "Holds an MD and PhD with advanced training in clinical research and medical writing across medical journals, life sciences, and regulatory documentation.",
    experience:
      "Over 18 years of experience in medical research editing and scientific publishing. Works closely with clinicians, researchers, and pharmaceutical organizations.",
    yearsOfExperience: "18+ Years of Experience",
    location: "India",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop",
    category: "non-medical",
  },
  {
    id: "6",
    name: "Dr. David Wilson, MD",
    title: "Clinical Research & Medical Publishing Consultant | Pubrica",
    qualifications:
      "Medical doctor with advanced training in clinical research methodology and medical publishing.",
    experience:
      "Over two decades of experience supporting clinical research publications, regulatory submissions, and high-impact medical journals.",
    yearsOfExperience: "21+ Years of Experience",
    location: "Canada",
    imageSrc:
      "https://images.unsplash.com/photo-1580281657557-2b02b53589b2?w=500&auto=format&fit=crop",
    category: "non-medical",
  },
];

export default function ScientificEditorProfile() {
  const [activeTab, setActiveTab] = useState<"medical" | "non-medical">(
    "medical"
  );
  const [activeNav, setActiveNav] = useState("MEET THE EXPERTS");

  const filteredEditors = EDITORS_DATA.filter(
    (editor) => editor.category === activeTab
  );

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Banner Header */}
      <header className="bg-[#0f3434] py-12 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto border border-white/30 p-8 rounded-sm">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            Editors' Profile
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-200">
            Portfolio of various Pubrica experts
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-2">
          <div className="flex items-center gap-2 mb-6 text-[#0f3434] font-bold text-lg">
            <span>★</span>
            <h2>About Us</h2>
          </div>
          <nav className="flex flex-col gap-1">
            {SIDEBAR_NAV.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`flex items-center gap-3 w-full text-left p-3 text-xs font-semibold uppercase transition-colors rounded ${
                  activeNav === item
                    ? "bg-[#0f3434] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-base leading-none">+</span>
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Details */}
        <article className="md:col-span-3 space-y-6">
          <h2 className="text-2xl font-bold text-[#0f3434]">Meet the experts</h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
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
        </article>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-4 my-8">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setActiveTab("medical")}
            className={`py-3 text-sm font-semibold rounded transition-colors ${
              activeTab === "medical"
                ? "bg-[#0f3434] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Medical Editors
          </button>
          <button
            onClick={() => setActiveTab("non-medical")}
            className={`py-3 text-sm font-semibold rounded transition-colors ${
              activeTab === "non-medical"
                ? "bg-[#0f3434] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Non Medical Editors
          </button>
        </div>
      </section>

      {/* Editors List */}
      <section className="max-w-4xl mx-auto px-4 pb-16 space-y-12">
        {filteredEditors.map((editor) => (
          <div
            key={editor.id}
            className="flex flex-col sm:flex-row gap-6 p-6 border-b border-gray-200 items-start"
          >
            {/* Image Placeholder Div Section */}
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
              <div className="mt-2 text-center text-xs text-gray-600 font-medium border-t pt-2 w-full">
                <p>{editor.yearsOfExperience}</p>
                <p className="text-gray-500">| {editor.location}</p>
              </div>
            </div>

            {/* Editor Info Details */}
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-bold text-[#0f3434]">
                {editor.name} |{" "}
                <span className="font-normal text-sm">{editor.title}</span>
              </h3>

              <div>
                <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                  Qualifications & Background:
                </h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {editor.qualifications}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                  Experience:
                </h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {editor.experience}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}