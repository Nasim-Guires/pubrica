import Link from "next/link";
import {
  UserGroupIcon,
  AcademicCapIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  DocumentTextIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

interface AudienceCard {
  id: string;
  title: string;
  description: React.ReactNode;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const audiences: AudienceCard[] = [
  {
    id: "physicians",
    title: "Physicians & Clinicians",
    icon: UserGroupIcon,
    description: (
      <>
        Busy medical practitioners conducting clinical audits, case series, or
        trials who need expert support in writing and publishing research
        articles.
      </>
    ),
  },
  {
    id: "surgeons",
    title: "Surgeons & Surgical Researchers",
    icon: AcademicCapIcon,
    description: (
      <>
        Specialists working on procedural innovations, surgical outcomes, and
        interventional studies require structured manuscript development and
        compliance documentation.
      </>
    ),
  },
  {
    id: "medical-researchers",
    title: "Medical Researchers & Academicians",
    icon: AcademicCapIcon,
    description: (
      <>
        Researchers in academic institutions, teaching hospitals, or independent
        labs seeking publication in Scopus, PubMed, and high-impact journals.
      </>
    ),
  },
  {
    id: "pharma-scientists",
    title: "Pharmaceutical & Biotech Scientists",
    icon: BeakerIcon,
    description: (
      <>
        Industry professionals developing drug efficacy primary research
        articles, bioequivalence study research papers, or pharma regulatory
        study manuscripts require accurate reporting and compliance
        documentation.
      </>
    ),
  },
  {
    id: "postgrad-candidates",
    title: "Postgraduate and doctoral candidates",
    icon: UserGroupIcon,
    description: (
      <>
        We assist doctoral candidates in drafting original research manuscripts
        that adhere to university guidelines. Our service ensures the integrity
        of data, scholarly tone, and journal readiness.
      </>
    ),
  },
  {
    id: "public-health",
    title: "Public Health & Epidemiology Experts",
    icon: GlobeAltIcon,
    description: (
      <>
        Researchers engaged in community health survey-based research or
        patient-centred outcome research manuscripts.
      </>
    ),
  },
  {
    id: "med-comm",
    title: "Medical Communication & Regulatory Teams",
    icon: DocumentTextIcon,
    description: (
      <>
        Organizations or teams needing writing support for medical device study
        manuscripts, clinical study reports, or scientific publications.
      </>
    ),
  },
  {
    id: "academic-researchers",
    title: "Academic Researchers",
    icon: MagnifyingGlassIcon,
    description: (
      <>
        Pubrica helps academic researchers with the entire article development
        process, from hypothesis framing to peer-reviewed{" "}
        <Link
          href="/services/journal-submission"
          className="text-sky-600 hover:underline"
        >
          journal submission
        </Link>
        . We improve a researcher&apos;s visibility and impact through quality
        scientific writing.
      </>
    ),
  },
  {
    id: "med-clinical-researchers",
    title: "Medical and Clinical Researchers",
    icon: BeakerIcon,
    description: (
      <>
        We provide manuscript writing support for clinicians and healthcare
        researchers publishing hospital-based or clinical trial findings. Focus
        is on scientific validity, patient data confidentiality, and journal
        compliance.
      </>
    ),
  },
  {
    id: "professors",
    title: "Academic Faculty and Professors",
    icon: BuildingLibraryIcon,
    description: (
      <>
        We help academicians document funded or departmental research into
        publishable articles. Each manuscript is crafted to meet the target
        journal&apos;s standards and citation norms.
      </>
    ),
  },
  {
    id: "industry-scientists",
    title: "Industry Scientists and R&D Professionals",
    icon: LightBulbIcon,
    description: (
      <>
        We collaborate with corporate researchers in life sciences, pharma, and
        biotech to publish original discoveries. Technical accuracy and
        patent-sensitive content handling are ensured.
      </>
    ),
  },
  {
    id: "independent-researchers",
    title: "Independent Researchers",
    icon: MagnifyingGlassIcon,
    description: (
      <>
        We enable individual researchers to translate raw data into structured
        original manuscripts. Our end-to-end service includes editing,
        formatting, and submission support.
      </>
    ),
  },
];

export default function PhysicianWhoWeServeSection() {
  return (
    <section
      aria-labelledby="who-we-serve-heading"
      className="w-full bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 text-slate-800"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* --- Header Section --- */}
        <header className="max-w-4xl space-y-3">
          <h2
            id="who-we-serve-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
            Who We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Pubrica&apos;s{" "}
            <Link
              href="/services/physician-writing-services/original-research-article"
              className="text-sky-600 hover:underline font-medium"
            >
              original research article writing service
            </Link>{" "}
            is specifically designed for a variety of academic and clinical
            stakeholders involved in evidence-based investigations. Our services
            consider the subtle needs of:
          </p>
        </header>

        {/* --- Cards Grid Layout with Hover Effect --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {audiences.map((card) => {
            const IconComponent = card.icon;
            return (
              <article
                key={card.id}
                tabIndex={0}
                className="group relative bg-white p-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-sky-50/80 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 border border-slate-200/50 hover:border-sky-200 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  {/* Yellow Background Circle with Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 group-hover:bg-amber-200 transition-colors duration-300 flex items-center justify-center text-slate-700">
                    <IconComponent
                      className="w-6 h-6 stroke-[1.5]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Card Title and Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-sky-950 transition-colors duration-200">
                      {card.title}
                    </h3>
                    <div className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-200">
                      {card.description}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
