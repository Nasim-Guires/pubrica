import Link from "next/link";

interface ServiceOffering {
  title: string;
  description: React.ReactNode;
}

const offerings: ServiceOffering[] = [
  {
    title: "Clinical Research Design & Protocol Development",
    description: (
      <>
        We design robust clinical studies with expert support in hypothesis
        formulation, variable selection, endpoint definition, and protocol
        writing compliant with GCP and ICH guidelines. Our clinical research
        paper writing service ensures that designed protocols are seamlessly
        integrated into publishable formats.
      </>
    ),
  },
  {
    title: "Advanced Biostatistics & Data Interpretation",
    description: (
      <>
        Robust analysis using SPSS, R, STATA, or NVivo tailored for medical
        datasets including clinical endpoints, patient-reported outcomes, and
        qualitative observations.
      </>
    ),
  },
  {
    title: "Full Manuscript Writing & Structuring",
    description: (
      <>
        Development of complete original research articles in IMRAD format
        (Introduction, Methods, Results, and Discussion), tailored to your
        target journal&apos;s style and scientific focus.{" "}
        <a
          href="https://www.nejm.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:underline font-medium"
        >
          NEJM
        </a>
        ,{" "}
        <a
          href="https://jamanetwork.com/journals/jama"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:underline font-medium"
        >
          JAMA
        </a>
        ,{" "}
        <a
          href="https://www.thelancet.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:underline font-medium"
        >
          The Lancet
        </a>
        ,{" "}
        <a
          href="https://www.bmj.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:underline font-medium"
        >
          BMJ
        </a>
        , Elsevier, Springer, and others.
      </>
    ),
  },
  {
    title: "Regulatory Compliance & Ethics Documentation",
    description: (
      <>
        Strictly adhere to{" "}
        <a
          href="https://www.icmje.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:underline font-medium"
        >
          ICMJE
        </a>
        ,{" "}
        <a
          href="https://www.consort-statement.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:underline font-medium"
        >
          CONSORT
        </a>
        ,{" "}
        <a
          href="https://www.strobe-statement.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:underline font-medium"
        >
          STROBE
        </a>
        ,{" "}
        <a
          href="https://www.prisma-statement.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:underline font-medium"
        >
          PRISMA
        </a>
        , and EQUATOR guidelines. We support IRB approvals and clinical trial
        registration (CTRI/ClinicalTrials.gov), and ethical disclosures for
        human and animal research.
      </>
    ),
  },
  {
    title: "Plagiarism & Language Checking",
    description: (
      <>
        All documents are{" "}
        <Link
          href="/services/publication-support/plagiarism-services"
          className="text-sky-600 hover:underline font-medium"
        >
          plagiarism
        </Link>
        -checked, ethically written, and aligned with global publication
        standards ideal for regulatory submission and academic indexing (PubMed,
        Scopus).
      </>
    ),
  },
  {
    title: "Target Journal Formatting & Submission Support",
    description: (
      <>
        Formatting based on submission requirements of leading medical journals
        (e.g., NEJM, JAMA, The Lancet, Elsevier, Springer). Includes cover
        letter writing and reference styling.
      </>
    ),
  },
  {
    title: "Post-Submission Support",
    description: (
      <>
        Assistance with reviewer comments, manuscript revision, and resubmission
        to alternative journals if needed.
      </>
    ),
  },
];

export default function PhysicianResearchOfferingsSection() {
  return (
    <section
      aria-labelledby="what-we-offer-heading"
      className="w-full bg-gradient-to-b from-[#d5e7d4] via-[#c3dcc2] to-[#a8c9a7] py-7 px-4 sm:px-6 lg:px-8 text-slate-800"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* --- Header Section --- */}
        <header className="max-w-4xl space-y-4">
          <h2
            id="what-we-offer-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
            What We Offer
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Our team of experienced writers and editors at Pubrica delivers
            scientific manuscript writing service and comprehensive empirical
            research article writing. We specialize in intensive literature
            review and gap analysis, which define the core of a high-impact
            publication. Our experts identify deficiencies in data type, sample
            size, geographic representation, and other factors to ensure your
            research addresses the most critical gaps.
          </p>
        </header>

        {/* --- Offerings Grid Layout --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {offerings.map((offering, idx) => (
            <article
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {offering.title}
                </h3>
                <div className="text-sm text-slate-600 leading-relaxed">
                  {offering.description}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
