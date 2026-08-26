import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

const MS = "/images/physician-writing-services/physician-manuscript";

const manuscriptTypes = [
  {
    title: "Original Research Article",
    description: "Presents findings from prospective or retrospective clinical studies, including hypothesis, methodology, results, and discussion.",
    iconSrc: `${MS}/Original-Research-Article.png`,
  },
  {
    title: "Case Report",
    description: "Describes rare or unusual clinical cases with diagnostic challenges, treatment outcomes, or novel management approaches.",
    iconSrc: `${MS}/Case-Report.png`,
  },
  {
    title: "Case Series",
    description: "Summarizes multiple similar patient cases to highlight emerging patterns, treatment responses, or disease characteristics.",
    iconSrc: `${MS}/Case-Series.png`,
  },
  {
    title: "Systematic Review",
    description: "Follows a defined (PRISMA or Cochrane guidelines) protocol to critically appraise and compile all relevant studies addressing a specific clinical question.",
    iconSrc: `${MS}/Systematic-Review.png`,
  },
  {
    title: "Meta-analysis",
    description: "Combines data from multiple studies statistically to derive pooled estimates and strengthen evidence for clinical practice.",
    iconSrc: `${MS}/Meta-analysis.png`,
  },
  {
    title: "Brief Communication / Short Report",
    description: "Concise presentation of preliminary results, small-scale studies, or novel clinical observations warranting rapid dissemination.",
    iconSrc: `${MS}/Brief-Communication-Short-Report.png`,
  },
  {
    title: "Clinical Audit Report",
    description: "Documents the comparison of clinical practices against established standards to identify gaps and propose quality improvements.",
    iconSrc: `${MS}/Clinical-Audit-Report.png`,
  },
  {
    title: "Commentary / Perspective",
    description: "Offers expert opinion or contextual analysis on recent research, policy updates, or evolving clinical practices.",
    iconSrc: `${MS}/Commentary-Perspective.png`,
  },
  {
    title: "Letter to the Editor",
    description: "Provides critique, clarification, or supplementary commentary on a recently published article in a peer-reviewed journal.",
    iconSrc: `${MS}/Letter-to-the-Editor.png`,
  },
  {
    title: "Drug Efficacy and Safety Studies",
    description: "Evidence-based analyses of therapeutic interventions, focusing on clinical outcomes, safety profiles, and regulatory standards.",
    iconSrc: `${MS}/Drug-Efficacy-and-Safety-Studies.png`,
  },
  {
    title: "Observational, Cohort & Retrospective Studies",
    description: "Real-world clinical research uses patient data to identify trends, associations, and outcomes in natural settings.",
    iconSrc: `${MS}/Observational-Cohort-Retrospective-Studies.png`,
  },
  {
    title: "Surgical Techniques & Innovation Articles",
    description: "Manuscripts detailing novel surgical methods, procedural advancements, and operative outcomes supported by images or intraoperative data.",
    iconSrc: `${MS}/Surgical-Techniques-Innovation-Articles.png`,
  },
  {
    title: "Health Outcomes & Real-World Evidence (RWE) Studies",
    description: "Post-marketing or registry-based studies evaluating treatment effectiveness, cost-efficiency, and patient-reported outcomes.",
    iconSrc: `${MS}/Health-Outcomes-Real-World-Evidence-RWE-Studies.png`,
  },
  {
    title: "Narrative Reviews, Expert Opinions & Perspectives",
    description: "Authoritative commentaries or thematic reviews by specialists contextualizing current practices, new therapies, or policy updates.",
    iconSrc: `${MS}/Narrative-Reviews-Expert-Opinions-Perspectives-Authoritative-commentaries-or-thematic-reviews.png`,
  },
];

export default function PhysicianManuscriptsPage() {
  return (
    <div className="w-full text-slate-800 bg-white">
      {/* 1. Hero Banner */}
      <section className="bg-[#0b1f28] text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto border border-gray-600/50 p-8 sm:p-12 rounded-sm bg-[#0e2530]">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
            Physician Manuscript Service: Transform Clinical Expertise into Published Research
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Get expert support in writing, editing, and submitting high-impact, peer-reviewed manuscripts. Tailored for physicians and specialists across all medical fields.
          </p>
        </div>
      </section>

      {/* 2. Professional Physician Manuscript Service */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-6">
          Professional Physician Manuscript Service: Your Partner in Seamless Publishing, Credibility, and Compliance
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              At Pubrica, we assist physicians, surgeons, and healthcare professionals in turning clinical research, case reports, and novel surgical discoveries into a well-structured, publication-ready medical manuscript that adheres to the criteria of an appropriate peer-reviewed medical journal.
            </p>
            <p>
              Publishing in peer-reviewed, indexed medical journals helps clinicians gain recognition, enhance clinical credibility, contribute to evidence-based practice, and support academic and institutional career advancement. But with demanding schedules, lack of time, and limited knowledge of evolving journal submission guidelines making it difficult for practicing doctors to manage the entire publication process effectively. Especially for specialists like surgeons, finding the time and expertise to write and edit a scientific manuscript can be a major challenge.
            </p>
            <p className="font-semibold text-gray-900 pt-2">
              That's where Pubrica steps in as your external research assistant. Our expert-led publication support is specifically designed for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-rose-700 font-medium">
              <li>
                <span className="text-gray-700">Physicians with limited time for <Link href="/services/research-services/scientific-writing" className="text-sky-600 underline hover:text-sky-800">scientific writing</Link></span>
              </li>
              <li>
                <span className="text-gray-700">Surgeons seeking to publish case studies or surgical innovations</span>
              </li>
              <li>
                <span className="text-gray-700">Clinicians preparing clinical trial results or retrospective analyses</span>
              </li>
            </ul>
            <p className="pt-2">
              We help you avoid predatory journals, limit desk rejections, and publish your research in high-impact medical journals that target a global audience of healthcare professionals. Whether you are submitting a clinical case report, <Link href="/services/physician-writing-services/original-research-article" className="text-sky-600 underline hover:text-sky-800">original research article</Link>, or review manuscript, Pubrica's team will ensure scientific accuracy, ethics compliance, and journal-ready formatting.
            </p>
            
            <div className="pt-4">
             <GetFreeQuoteButton/>
            </div>
          </div>

          {/* Image Placeholder Div */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#1c3f39] max-w-md w-full h-[320px]">
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
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-4">What We Do</h2>
          <p className="text-gray-700 max-w-5xl leading-relaxed text-sm sm:text-base mb-3">
            Pubrica provides specialized manuscript writing and <Link href="/services/publication-support" className="text-sky-600 underline hover:text-sky-800">publication support</Link> services for physicians looking to publish in indexed medical journals. Our clients include healthcare professionals from the <Link href="/industries/pharmaceutical" className="text-sky-600 underline hover:text-sky-800">pharmaceutical</Link>, <Link href="/industries/medical-device" className="text-sky-600 underline hover:text-sky-800">medical device</Link>, <Link href="/industries/nutraceutical-research" className="text-sky-600 underline hover:text-sky-800">nutraceutical</Link>, or life sciences sector.
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
                {/* <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-xl shadow-lg border-2 border-white overflow-hidden">
                  <Image
                    src="/images/physician-writing-services/physician-manuscript/video-what-we-do.jpg"
                    alt="Medical presentation and consultation"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div> */}
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
                      At Pubrica, our <Link href="/subject-matter-experts" className="text-sky-600 underline hover:text-sky-800">subject matter experts</Link> focus on writing clinical content that presents complicated medical conditions, treatment protocols, and surgical procedures in a professional and clear format. We all follow standardized journal manuscript types from <Link href="/services/physician-writing-services/original-research-article" className="text-sky-600 underline hover:text-sky-800">original research articles</Link> to surgical technique articles.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-700">
                      Each manuscript is created to meet journal requirements such as ICMJE, <span className="font-semibold text-rose-800">CONSORT</span> for clinical trials, <span className="font-semibold text-rose-800">CARE</span> for case reports, and <span className="font-semibold text-rose-800">STROBE</span> for observational studies. By assuring scientific accuracy, journal compliance, and readability, we assist physicians in creating content that will support their academic objectives and encourage an evidence-based practice in the medical profession.
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

      {/* 4. Types of Physician Manuscripts We Offer (UNIFIED BLUE HOVER) */}
      <section className="py-16 bg-slate-100">
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
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-transparent hover:border-sky-300 hover:bg-[#ebf4fa] transition-all duration-300 flex flex-col items-start group cursor-pointer"
                >
                  <div className="relative w-12 h-12 mb-4">
                    <Image
                      src={item.iconSrc}
                      alt=""
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}