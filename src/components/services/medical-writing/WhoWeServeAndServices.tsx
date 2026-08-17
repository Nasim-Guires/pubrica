import Image from "next/image";
import React from "react";

const IMG = "/images/medical-writing";

interface AudienceCard {
  title: string;
  imageSrc: string;
}

interface ServiceCard {
  title: string;
  description: React.ReactNode;
  iconSrc: string;
}

const audienceData: AudienceCard[] = [
  {
    title: "Healthcare Professionals",
    imageSrc: `${IMG}/Healthcare-Professionals.png`,
  },
  {
    title: "Researchers and Academics",
    imageSrc: `${IMG}/Researchers-and-Academics.png`,
  },
  {
    title: "Pharmaceutical and Biotech Companies",
    imageSrc: `${IMG}/Pharmaceutical-and-Biotech-Companies.png`,
  },
  {
    title: "Patients and Caregivers",
    imageSrc: `${IMG}/Patients-and-Caregivers.png`,
  },
];

const serviceDataRow1: ServiceCard[] = [
  {
    title: "Scientific & Academic Medical Writing",
    iconSrc: `${IMG}/journal-selection-.png`,
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
    iconSrc: `${IMG}/Pre-Submission.png`,
    description:
      "For pharma, biotech, and MedTech: CME/CPD content, case reports, PSURs, and MDR/IVDR-compliant CERs.",
  },
  {
    title: "Pharma & Biotech content Development",
    iconSrc: `${IMG}/Journal-Submission.png`,
    description:
      "White papers, monographs, MSL decks, pharmacovigilance, TPPs, and competitive analysis.",
  },
  {
    title: "Medical Device & Digital Health Writing",
    iconSrc: `${IMG}/Response-To-Reviewers.png`,
    description:
      "We specialize in medical device and digital health writing services, covering SaMD files and IFUs, as well as AI validation reports, PMS reports, and HEOR support.",
  },
];

const serviceDataRow2: ServiceCard[] = [
  {
    title: "Marketing & Communication Content",
    iconSrc: `${IMG}/Poster-Creation.png`,
    description:
      "We create precise content for HCPs, patients, and commercial use—newsletters, leaflets, FAQs, social media, and website copy.",
  },
  {
    title: "Editorial & Quality Support Services",
    iconSrc: `${IMG}/Formatting-Service.png`,
    description:
      "We offer editing, medical editing, medical referencing, and reference management.",
  },
  {
    title: "Bonus: Optional Add-On Services",
    iconSrc:
      "/images/physician-writing-services/customized-writing/Artwork-Editing-Service.png",
    description:
      "We create visual abstracts, script scientific animations, develop AI validation content and write investor decks for biotech/MedTech startups.",
  },
];

function ServiceCardView({ service }: { service: ServiceCard }) {
  return (
    <div className="bg-white p-5 rounded-md border border-slate-100 shadow-sm flex flex-col justify-start space-y-3">
      <div className="w-12 h-12 rounded-full bg-[#fef5d9] flex items-center justify-center shrink-0 relative overflow-hidden">
        <Image
          src={service.iconSrc}
          alt=""
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <h3 className="text-sm font-bold text-[#09322e] leading-snug">
        {service.title}
      </h3>
      <p className="text-xs text-slate-600 leading-relaxed font-normal">
        {service.description}
      </p>
    </div>
  );
}

export default function WhoWeServeAndServices(): React.ReactElement {
  return (
    <div className="w-full font-sans text-slate-800 bg-[#f8f9f9] py-12 px-4 sm:px-6 lg:px-12 space-y-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audienceData.map((card, idx) => (
            <div
              key={idx}
              className="relative h-56 rounded-sm overflow-hidden group shadow-sm bg-slate-200"
            >
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                <h3 className="text-white text-sm sm:text-base font-bold leading-tight">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceDataRow1.map((service) => (
            <ServiceCardView key={service.title} service={service} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {serviceDataRow2.map((service) => (
            <ServiceCardView key={service.title} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
