import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function PatientEducationContentOverviewSection() {
  return (
    <section
      aria-label="Patient Education Content Overview"
      className="w-full bg-white text-slate-800 font-sans"
    >
      {/* Top Banner Header */}
      <div className="w-full bg-gradient-to-r from-[#0d211d] via-[#12302a] to-[#0d211d] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto border border-white/40 p-6 sm:p-10 rounded-sm">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-snug">
            Patient Education Content Service: Bridging Clinical Knowledge and
            Patient Understanding
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-4xl mx-auto leading-relaxed">
            Simplify complex medical information into patient-centred content
            that boosts understanding, decision-making, and engagement across
            all platforms.
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Section 1: Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a] leading-tight">
              Professional Patient Education Content Development Service:
              Communicate Medical Information with Clarity, Compassion, and
              Compliance
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              At Pubrica, we specialize in transforming complex clinical
              information into accessible, engaging, and patient-friendly
              educational materials.
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              Our{" "}
              <Link
                href="/academy/patient-education/effective-patient-education-content-guide/"
                className="text-[#0a66bc] hover:underline font-medium"
              >
                patient education content
              </Link>{" "}
              development services are designed for healthcare professionals,
              hospitals, pharmaceutical companies, nutraceutical manufacturers,
              and medical device manufacturers seeking to improve patient
              understanding and engagement. Our content meets{" "}
              <Link
                href="/services/scientific-communication"
                className="text-[#0a66bc] hover:underline font-medium"
              >
                medical communication
              </Link>{" "}
              standards while simplifying complex clinical concepts for diverse
              patient populations.
            </p>

            <div className="pt-2">
              <h3 className="text-lg font-bold text-[#0c2e3a] mb-3">
                Key Features of Our Service:
              </h3>

              <ul className="space-y-3 pl-4 list-disc marker:text-red-600">
                <li className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">
                    Evidence-Based Information:
                  </strong>{" "}
                  Content based on trusted international and national clinical

                  guidelines such as   <Link href="https://www.who.int/" className="text-[#0a66bc] ">
                    WHO
                  </Link>
                  ,
                  <Link href="https://www.nice.org.uk/process/pmg6/resources/the-guidelines-manual-pdf-2007970804933" className="text-[#0a66bc] ">
                    NICE
                  </Link>
                  ,{" "}
                  <Link href="/https://www.cdc.gov/index.html" className="text-[#0a66bc] ">
                    CDC
                  </Link>
                  , and{" "}
                  <Link href="https://www.icmr.gov.in/" className="text-[#0a66bc]">
                    ICMR
                  </Link>
                  , ensuring
                  clinical accuracy and consistency.
                </li>
                <li className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">
                    Multilingual Content:
                  </strong>{" "}
                  Translation and cultural adaptation in more than 20 languages.
                </li>
                <li className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">
                    Multimedia Formats:
                  </strong>{" "}
                  Content created based on printing, digital, video, and audio
                  formats, enhancing accessibility and reach.
                </li>
                <li className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">
                    Regulatory Standards:
                  </strong>{" "}
                  Complies with HIPAA,{" "}
                  <Link href="https://www.fda.gov/" className="text-[#0a66bc] hover:underline">
                    FDA
                  </Link>, and EU MDR
                  standards for patient communications.
                </li>
                <li className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">
                    Patient-Centric Approach:
                  </strong>{" "}
                  Materials are readability tested and feedback-validated.
                </li>
                <li className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">
                    Customized Content Development:
                  </strong>{" "}
                  Whether it’s for chronic disease education, post-operative
                  care, or device usage instructions, we tailor content to your
                  patients’ needs and literacy levels.
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <GetFreeQuoteButton />
            </div>
          </div>

          {/* Right Image Container with Accent Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative p-3  rounded-2xl  max-w-md w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/physician-writing-services/patient-education-content/Patient-Education-Content-Service.webp"
                  alt="Doctor explaining medical treatment using visual aids to a patient"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-slate-100">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl font-bold text-[#0c2e3a]">What We do</h2>

            <p className="text-base text-slate-700 leading-relaxed">
              At Pubrica, we create{" "}
              <Link
                href="/services/patient-education-content/breast-cancer-treatment"
                className="text-[#0a66bc] hover:underline font-medium"
              >
                patient education content
              </Link>{" "}
              for the pharmaceutical, medical device, nutraceutical, and life
              science industries. Our professional content authors use their
              knowledge and experience to create accurate, informative, and
              engaging educational content that promotes patient understanding
              and engagement. Here’s how we support{" "}
              <Link
                href="/services/patient-education-content"
                className="text-[#0a66bc] hover:underline font-medium"
              >
                patient education
              </Link>
            </p>

            <ul className="space-y-4 pl-4 list-disc marker:text-red-600">
              <li className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">
                  Expert Content Development:
                </strong>{" "}
                At Pubrica, our content experts are skilled in producing
                patient-centred resources to inform and provide a clear
                understanding of complicated medical conditions, treatments, and
                health management plans. This process of careful preparation is
                essential for satisfying the educational needs of patients and
                improving health literacy.
              </li>
              <li className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">
                  Tailor-Made Educational Resources:
                </strong>{" "}
                We tailor our{" "}
                <Link
                  href="/services/patient-education-content"
                  className="text-[#0a66bc] hover:underline font-medium"
                >
                  patient education
                </Link>{" "}
                projects to fit distinct health conditions and patient
                demographics. Our customized approach ensures that all content
                will be relevant to the patient’s needs, which increases health
                communication and patient care outcomes. We also assist with
                journal selection and poster preparation services so that
                healthcare providers can take the educational messages to
                peer-reviewed outputs and conference-ready presentations that
                depict real-world patient engagement endeavours.
              </li>
              <li className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">
                  Comprehensive Content Formats:
                </strong>{" "}
                Benefit from our extensive experience in creating a wide range
                of patient education materials, including brochures, flyers,
                infographics, video scripts, and interactive web resources. This
                diverse content portfolio allows us to effectively address
                different learning styles and preferences, ensuring that all
                patients receive the information they need in the format they
                understand best.
              </li>
              <li className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">
                  Collaboration with Healthcare Professionals:
                </strong>{" "}
                We collaborate with physicians, nurses, pharmacists, and other
                healthcare providers to ensure that all patient education
                materials are accurate and timely. This collaboration
                facilitates that the content supports decision making, but is
                also consistent with the current clinical practice.
                Simultaneously, our team helps clinicians with journal selection
                and systematic review methodology, which connects insights from
                the bedside to scholarly communication and valuable articles.
              </li>
              <li className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">
                  Engagement and Accessibility:
                </strong>{" "}
                Our patient education materials are created to be engaging and
                easy to navigate, helping to ensure that patients of all ages
                and backgrounds can access and use the information to manage
                their health.
              </li>
            </ul>

            <p className="text-base text-slate-700 leading-relaxed pt-2">
              Pubrica is committed to improving patient education through
              high-quality, tailored content that empowers people to take
              ownership of their health care. We ensure that patient education
              materials are academic and useful for health outcomes and patient
              engagement.
            </p>
          </div>

          {/* Right Composite Image Collage Layout */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-6 lg:pt-0">
            <div className="relative w-full max-w-md h-[380px]">
              {/* Top Image */}
              <div className="absolute top-0 left-0 w-3/4 h-48 rounded-xl overflow-hidden shadow-lg border-2 border-white z-10">
                <Image
                  src="/images/physician-writing-services/patient-education-content/WHAT-WE-DO-.webp"
                  alt="Healthcare provider demonstrating information on a tablet"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>



              {/* Decorative Subtle Background Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-100 rounded-full -z-0 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
