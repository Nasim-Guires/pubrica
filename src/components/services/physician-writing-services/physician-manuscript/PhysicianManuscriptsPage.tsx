import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';

const MS = "/images/physician-writing-services/physician-manuscript";

const manuscriptTypes = [
  {
    title: "Original Research Article",
    description: "Presents findings from prospective or retrospective clinical studies, including hypothesis, methodology, results, and discussion.",
    iconSrc: `${MS}/Original-Research-Article.png`,
    href: "/services/physician-writing-services/original-research-article/",
  },
  {
    title: "Case Report",
    description: "Describes rare or unusual clinical cases with diagnostic challenges, treatment outcomes, or novel management approaches.",
    iconSrc: `${MS}/Case-Report.png`,
    href: "/services/physician-writing-services/case-report/",
  },
  {
    title: "Case Series",
    description: "Summarizes multiple similar patient cases to highlight emerging patterns, treatment responses, or disease characteristics.",
    iconSrc: `${MS}/Case-Series.png`,
    href: "/services/physician-writing-services/physician-manuscripts/",
  },
  {
    title: "Systematic Review",
    description: "Follows a defined (PRISMA or Cochrane guidelines) protocol to critically appraise and compile all relevant studies addressing a specific clinical question.",
    iconSrc: `${MS}/Systematic-Review.png`,
    href: "/services/research-services/systematic-review/",
  },
  {
    title: "Meta-analysis",
    description: "Combines data from multiple studies statistically to derive pooled estimates and strengthen evidence for clinical practice.",
    iconSrc: `${MS}/Meta-analysis.png`,
    href: "/services/research-services/meta-analysis/",
  },
  {
    title: "Brief Communication / Short Report",
    description: "Concise presentation of preliminary results, small-scale studies, or novel clinical observations warranting rapid dissemination.",
    iconSrc: `${MS}/Brief-Communication-Short-Report.png`,
    href: "/services/research-services/meta-analysis/",
  },
  {
    title: "Clinical Audit Report",
    description: "Documents the comparison of clinical practices against established standards to identify gaps and propose quality improvements.",
    iconSrc: `${MS}/Clinical-Audit-Report.png`,
    href: "/services/physician-writing-services/physician-manuscripts/",
  },
  {
    title: "Commentary / Perspective",
    description: "Offers expert opinion or contextual analysis on recent research, policy updates, or evolving clinical practices.",
    iconSrc: `${MS}/Commentary-Perspective.png`,
    href: "/services/physician-writing-services/physician-manuscripts/",
  },
  {
    title: "Letter to the Editor",
    description: "Provides critique, clarification, or supplementary commentary on a recently published article in a peer-reviewed journal.",
    iconSrc: `${MS}/Letter-to-the-Editor.png`,
    href: "/services/physician-writing-services/physician-manuscripts/",
  },
  {
    title: "Drug Efficacy and Safety Studies",
    description: "Evidence-based analyses of therapeutic interventions, focusing on clinical outcomes, safety profiles, and regulatory standards.",
    iconSrc: `${MS}/Drug-Efficacy-and-Safety-Studies.png`,
    href: "/services/physician-writing-services/physician-manuscripts/",
  },
  {
    title: "Observational, Cohort & Retrospective Studies",
    description: "Real-world clinical research uses patient data to identify trends, associations, and outcomes in natural settings.",
    iconSrc: `${MS}/Observational-Cohort-Retrospective-Studies.png`,
    href: "/services/physician-writing-services/physician-manuscripts/",
  },
  {
    title: "Surgical Techniques & Innovation Articles",
    description: "Manuscripts detailing novel surgical methods, procedural advancements, and operative outcomes supported by images or intraoperative data.",
    iconSrc: `${MS}/Surgical-Techniques-Innovation-Articles.png`,
    href: "/services/physician-writing-services/physician-manuscripts/",
  },
  {
    title: "Health Outcomes & Real-World Evidence (RWE) Studies",
    description: "Post-marketing or registry-based studies evaluating treatment effectiveness, cost-efficiency, and patient-reported outcomes.",
    iconSrc: `${MS}/Health-Outcomes-Real-World-Evidence-RWE-Studies.png`,
    href: "/services/physician-writing-services/physician-manuscripts/",
  },
  {
    title: "Narrative Reviews, Expert Opinions & Perspectives",
    description: "Authoritative commentaries or thematic reviews by specialists contextualizing current practices, new therapies, or policy updates.",
    iconSrc: `${MS}/Narrative-Reviews-Expert-Opinions-Perspectives-Authoritative-commentaries-or-thematic-reviews.png`,
    href: "/services/physician-writing-services/physician-manuscripts/",
  },
];

const whoWeServe = [
  {
    title: "Practicing Physicians",
    imageSrc: `${MS}/Practicing-Physicians.jpg`,
  },
  {
    title: "Hospital-based Clinicians",
    imageSrc: `${MS}/Hospital-based-Clinicians.jpg`,
  },
  {
    title: "Academic Physicians and Faculty",
    imageSrc: `${MS}/Academic-Physicians-and-Faculty.jpg`,
  },
  {
    title: "Medical Residents and Fellows",
    imageSrc: `${MS}/Medical-Residents-and-Fellows.jpg`,
  },
  {
    title: "Private Practitioners",
    imageSrc: `${MS}/Private-Practitioners.jpg`,
  },
  {
    title: "Surgeons & Procedural Specialists",
    imageSrc: `${MS}/Surgeons-Procedural-Specialists.jpg`,
  },
  {
    title: "Industry-affiliated Physicians",
    imageSrc: `${MS}/Industry-affiliated-Physicians.jpg`,
  },
  {
    title: "Healthcare Researchers & Clinician-Scientists",
    imageSrc: `${MS}/Healthcare-Researchers-Physician-Researchers-Clinician-Scientists.jpg`,
  },
];

export default function PhysicianManuscriptsPage() {
  return (
    <div className="w-full text-slate-800 bg-white">
      {/* 1. Hero Banner */}
      <HeroBanner
        title="Physician Manuscript Service: Transform Clinical Expertise into Published Research"
        description="Get expert support in writing, editing, and submitting high-impact, peer-reviewed manuscripts. Tailored for physicians and specialists across all medical fields."
        headingAs="h1"
      />

      {/* 2. Professional Physician Manuscript Service */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-6">
          Professional Physician Manuscript Service: Your Partner in Seamless Publishing, Credibility, and Compliance
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              At Pubrica, we assist physicians, surgeons, and healthcare professionals in turning clinical research, case reports, and novel surgical discoveries into a well-structured, publication-ready medical manuscript that adheres to the criteria of an appropriate peer-reviewed medical journal.
            </p>
            <p>
              Publishing in peer-reviewed, indexed medical journals helps clinicians gain recognition, enhance clinical credibility, contribute to evidence-based practice, and support academic and institutional career advancement. But with demanding schedules, lack of time, and limited knowledge of evolving <Link href="/services/publication-support/journal-submission/" className="text-blue-600 no-underline hover:no-underline">journal submission</Link> guidelines making it difficult for practicing doctors to manage the entire publication process effectively. Especially for specialists like surgeons, finding the time and expertise to write and edit a scientific manuscript can be a major challenge.
            </p>
            <p className="font-semibold text-gray-900 pt-2">
              That's where Pubrica steps in as your external research assistant. Our expert-led <Link href="/services/publication-support/" className="text-blue-600 no-underline hover:no-underline">publication support</Link> is specifically designed for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-rose-700 font-medium">
              <li>
                <span className="text-gray-700">Physicians with limited time for <Link href="/services/research-services/scientific-writing" className="text-blue-600 no-underline hover:no-underline">scientific writing</Link></span>
              </li>
              <li>
                <span className="text-gray-700">Surgeons seeking to publish case studies or surgical innovations</span>
              </li>
              <li>
                <span className="text-gray-700">Clinicians preparing clinical trial results or retrospective analyses</span>
              </li>
            </ul>
            <p className="pt-2">
              We help you avoid predatory journals, limit desk rejections, and publish your research in high-impact medical journals that target a global audience of healthcare professionals. Whether you are submitting a clinical case report, <Link href="/services/physician-writing-services/original-research-article" className="text-blue-600 no-underline hover:no-underline">original research article</Link>, or review manuscript, Pubrica's team will ensure scientific accuracy, ethics compliance, and journal-ready formatting.
            </p>

            <div className="pt-4">
              <GetFreeQuoteButton />
            </div>
          </div>

          {/* Image Placeholder Div */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden max-w-md w-full h-[320px]">
              <Image
                src="/images/physician-writing-services/physician-manuscript/Physician-Manuscript-Service.webp"
                alt="Physician manuscript writing service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="bg-gray-50 py-7 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-4">What We Do</h2>
          <p className="text-gray-700 max-w-5xl leading-relaxed text-sm sm:text-base mb-3">
            Pubrica provides specialized manuscript writing and <Link href="/services/publication-support" className="text-blue-600 no-underline hover:no-underline">publication support</Link> services for physicians looking to publish in indexed medical journals. Our clients include healthcare professionals from the <Link href="/industries/pharmaceutical" className="text-blue-600 no-underline hover:no-underline">pharmaceutical</Link>, <Link href="/industries/medical-device" className="text-blue-600 no-underline hover:no-underline">medical device</Link>, <Link href="/industries/nutraceutical-research" className="text-blue-600 no-underline hover:no-underline">nutraceutical</Link>, or life sciences sector.
          </p>
          <p className="text-gray-700 max-w-5xl leading-relaxed text-sm sm:text-base mb-10">
            With a team of expert medical writers and scientific editors, we ensure that every physician manuscript is accurate, engaging, and compliant with journal-specific submission standards. Our goal is to help clinicians present their research in a way that is both scientifically rigorous and clinically relevant.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Collage Placeholder Divs */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md h-[300px]">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-xl shadow-md border-2 border-white overflow-hidden">
                  <Image
                    src="/images/physician-writing-services/physician-manuscript/Physician-Manuscript-Service-What-We-do.webp"
                    alt="Physician manuscript writing desk"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base">
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                  Scientific Medical Manuscript Content Development:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-rose-700">
                  <li>
                    <span className="text-gray-700">
                      At Pubrica, our <Link href="/subject-matter-experts" className="text-blue-600 no-underline hover:no-underline">subject matter experts</Link> focus on writing clinical content that presents complicated medical conditions, treatment protocols, and surgical procedures in a professional and clear format. We all follow standardized journal manuscript types from <Link href="/services/physician-writing-services/original-research-article" className="text-blue-600 no-underline hover:no-underline">original research articles</Link> to surgical technique articles.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-700">
                      Each manuscript is created to meet journal requirements such as ICMJE,{" "}
                      <Link
                        href="https://legacyfileshare.elsevier.com/promis_misc/CONSORT-2010-Checklist.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-sky-600 no-underline"
                      >
                        CONSORT
                      </Link>{" "}
                      for clinical trials,{" "}
                      <Link
                        href="https://www.care-statement.org/checklist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-sky-600 no-underline"
                      >
                        CARE
                      </Link>{" "}
                      for case reports, and{" "}
                      <Link
                        href="https://www.strobe-statement.org/checklists/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-sky-600 no-underline"
                      >
                        STROBE
                      </Link>{" "}
                      for observational studies. By assuring scientific accuracy, journal compliance, and readability, we assist physicians in creating content that will support their academic objectives and encourage an evidence-based practice in the medical profession.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                  Customized Clinical and Educational Medical Content
                </h3>
                <p className="text-gray-700 mb-2">
                  We tailor each manuscript to reflect the physician's specialty, patient demographic, and research objective. This personalized approach improves the relevance of your publication and enhances patient-centered communication in the journal's readership. Ultimately, this contributes to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-rose-700">
                  <li><span className="text-gray-700">Better health literacy among peers</span></li>
                  <li><span className="text-gray-700">Higher citation impact</span></li>
                  <li><span className="text-gray-700">Improved clinical decision-making</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Types of Physician Manuscripts We Offer */}
      <section className="py-7 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-4">
              Types of Physician Manuscripts We Offer
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2">
              At Pubrica, we offer dedicated medical manuscript writing services for numerous clinical study types, publication aims, and journal types. Each type of manuscript has a purpose, whether it is to demonstrate new evidence, to showcase a rare practice, or to provide expert commentary.
            </p>
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Our support spans a wide range of journal publication types for physicians and clinicians:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {manuscriptTypes.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="bg-white rounded-xl p-6 shadow-sm border border-transparent hover:border-sky-300 hover:bg-[#ebf4fa] transition-all duration-300 flex flex-col items-start group cursor-pointer no-underline"
                >
                  <div className="relative w-12 h-12 mb-4">
                    <Image
                      src={item.iconSrc}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>

                  <h3 className="font-bold text-gray-900 group-hover:text-sky-900 text-base mb-2 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Who We Serve Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-4">
            Who We Serve
          </h2>
          <p className="text-gray-700 max-w-5xl leading-relaxed text-sm sm:text-base mb-10">
            At Pubrica, we provide end-to-end medical manuscript drafting and{" "}
            <Link href="/services/publication-support/" className="text-blue-600 no-underline hover:no-underline">
              publication support
            </Link>{" "}
            services designed to support a wide range of healthcare professionals and clinical researchers. Our goal is to help physicians publish with scientific accuracy, journal compliance, and international reach.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative group rounded-md overflow-hidden shadow-sm h-64 border border-gray-200"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Bottom Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4">
                    <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}