import React from "react";

interface AudienceCard {
  title: string;
  imageSrc: string;
}

interface ServiceCard {
  title: string;
  description: React.ReactNode;
  iconBgColor?: string;
}

const audienceData: AudienceCard[] = [
  {
    title: "Healthcare Professionals",
    imageSrc: "/images/healthcare-professionals.jpg", // Replace with your image paths
  },
  {
    title: "Researchers and Academics",
    imageSrc: "/images/researchers-academics.jpg",
  },
  {
    title: "Pharmaceutical and Biotech Companies",
    imageSrc: "/images/pharma-biotech.jpg",
  },
  {
    title: "Patients and Caregivers",
    imageSrc: "/images/patients-caregivers.jpg",
  },
];

const serviceDataRow1: ServiceCard[] = [
  {
    title: "Scientific & Academic Medical Writing",
    description: (
      <>
        We provide{" "}
        <a href="#medical-writing" className="text-sky-600 hover:underline">
          medical writing
        </a>{" "}
        for researchers and institutions: manuscripts, reviews, thesis
        assistance, CME/CPD writing, and case reports.
      </>
    ),
  },
  {
    title: "Regulatory medical writing",
    description:
      "For pharma, biotech, and MedTech: CME/CPD content, case reports, PSURs, and MDR/IVDR-compliant CERs.",
  },
  {
    title: "Pharma & Biotech content Development",
    description:
      "White papers, monographs, MSL decks, pharmacovigilance, TPPs, and competitive analysis.",
  },
  {
    title: "Medical Device & Digital Health Writing",
    description:
      "We specialize in medical device and digital health writing services, covering SaMD files and IFUs, as well as AI validation reports, PMS reports, and HEOR support.",
  },
];

const serviceDataRow2: ServiceCard[] = [
  {
    title: "Marketing & Communication Content",
    description:
      "We create precise content for HCPs, patients, and commercial use—newsletters, leaflets, FAQs, social media, and website copy.",
  },
  {
    title: "Editorial & Quality Support Services",
    description:
      "We offer editing, medical editing, medical referencing, and reference management.",
  },
  {
    title: "Bonus: Optional Add-On Services",
    description:
      "We create visual abstracts, script scientific animations, develop AI validation content and write investor decks for biotech/MedTech startups.",
  },
];

export default function WhoWeServeAndServices(): React.ReactElement {
  return (
    <div className="w-full font-sans text-slate-800 bg-[#f8f9f9] py-12 px-4 sm:px-6 lg:px-12 space-y-16">
      {/* ---------------- WHO WE SERVE SECTION ---------------- */}
      <section className="max-w-6xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-3">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
            At Pubrica, we provide specialized{" "}
            <a
              href="#medical-writing-services"
              className="text-sky-600 hover:underline"
            >
              medical writing services
            </a>{" "}
            to a diverse range of audiences across all stages of the product and
            research lifecycle, ensuring that each group receives high-quality,
            accurate, and tailored content.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audienceData.map((card, idx) => (
            <div
              key={idx}
              className="relative h-56 rounded-sm overflow-hidden group shadow-sm bg-slate-200"
            >
              {/* Image */}
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Dark Gradient Overlay for Text Clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                <h3 className="text-white text-sm sm:text-base font-bold leading-tight">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- OUR SERVICES SECTION ---------------- */}
      <section className="max-w-6xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-3">
            Our Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-5xl">
            We recognize that scientific documents must be written with
            precision and clarity. Pubrica’s medical writers have been trained
            to recognize and appreciate the diversity inherent in each project,
            enabling us to write papers that are technically precise, while also
            being appropriate for the audience (healthcare provider, regulatory
            authority, or patient).
          </p>
        </div>

        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceDataRow1.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-md border border-slate-100 shadow-sm flex flex-col justify-start space-y-3"
            >
              {/* Round Light-Yellow Icon Wrapper */}
              <div className="w-12 h-12 rounded-full bg-[#fef5d9] flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-[#10302b]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>

              <h3 className="text-sm font-bold text-[#09322e] leading-snug">
                {service.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: 3 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {serviceDataRow2.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-md border border-slate-100 shadow-sm flex flex-col justify-start space-y-3"
            >
              {/* Round Light-Yellow Icon Wrapper */}
              <div className="w-12 h-12 rounded-full bg-[#fef5d9] flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-[#10302b]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>

              <h3 className="text-sm font-bold text-[#09322e] leading-snug">
                {service.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
