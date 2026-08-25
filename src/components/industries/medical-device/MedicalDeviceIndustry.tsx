"use client"
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MedicalDeviceIndustry: NextPage = () => {
  const [showAllPMS, setShowAllPMS] = useState(false);
  const [showAllGuidelines, setShowAllGuidelines] = useState(false);

  const pmsCards = [
    {
      title: 'Ensure Safety and Performance',
      description: 'Identifies unforeseen risks and device failures that enable fast mitigation of life-threatening or long-term injuries with the aid of a PMS strategy.'
    },
    {
      title: 'Monitor Real-World Use',
      description: 'Collects real-world performance data to uncover risks and limitations not evident in clinical trials.'
    },
    {
      title: 'Align with Regulatory Requirements',
      description: 'Aligns with EU MDR and US FDA requirements to ensure device safety, quality, and performance across its lifecycle.'
    },
    {
      title: 'Improve Device Design and Innovation',
      description: 'Integrates user feedback and performance data to drive continuous improvement and next-generation device development.'
    },
    {
      title: 'Enhance Risk Management',
      description: 'Facilitates benefit-risk evaluations and trend analysis to drive corrective actions like recalls or design updates.'
    },
    {
      title: 'Promote Patient and User Confidence',
      description: 'Reassures stakeholders of active device safety monitoring, fostering trust in manufacturers and regulators.'
    },
    {
      title: 'Support Regulatory Decision-Making',
      description: 'Supports decisions on labelling updates, usage restrictions, or recalls, ensuring devices remain market-appropriate.'
    },
    {
      title: 'Advance Medical Knowledge',
      description: 'Supports evidence-based decision-making for researchers, clinicians, and policymakers by generating insights into device performance, disease management, and patient outcomes.'
    }
  ];

  const guidelineCards = [
    { title: 'MEDDEV Guidelines', iconSrc: '/images/industries/medical-device/MEDDEV-GUIDELINES.png' },
    { title: 'MDCG Guidelines', iconSrc: '/images/industries/medical-device/MDGC-GUIDELINES.png' },
    { title: 'Health Canada', iconSrc: '/images/industries/medical-device/HEALTH-CANADA.png' },
    { title: 'NMPA (National Medical Products Administration)', iconSrc: '/images/industries/medical-device/NMPA.png' },
    { title: 'DSMB (Data Safety Monitoring Boards) Guidelines', iconSrc: '/images/industries/medical-device/DSMB.png' },
    { title: 'IMDRF (International Medical Device Regulators Forum)', iconSrc: '/images/industries/medical-device/IMDRF.png' },
    { title: 'MHRA (Medicines and Healthcare Products Regulatory Agency)', iconSrc: '/images/industries/medical-device/MHRA.png' },
    { title: 'COFEPRIS (Federal Commission for Protection against Sanitary Risks)', iconSrc: '/images/industries/medical-device/COFEPRIS.png' },
    { title: 'PMDA (The Pharmaceuticals and Medical Devices Agency)', iconSrc: '/images/industries/medical-device/PMDA.png' },
    { title: 'ANVISA (Brazilian Health Regulatory Agency)', iconSrc: '/images/industries/medical-device/ANVISA.png' },
    { title: 'TGA (Therapeutic Goods Administration)', iconSrc: '/images/industries/medical-device/TGA.png' }
  ];

  return (
    <>
      <Head>
        <title>Medical Devices | Pubrica</title>
        <meta 
          name="description" 
          content="Ensure your medical device meets regulatory standards with our expert Clinical Evaluation Reports (CER) services. We provide comprehensive support from data collection to evidence appraisal." 
        />
        <link 
          rel="canonical" 
          href="/Industries/medical-device" 
        />
      </Head>

      {/* BANNER SECTION */}
      <div className="w-full bg-[#343a40] py-16 px-4 md:px-12 flex justify-center mb-12">
        <div className="w-full max-w-5xl border border-gray-600 bg-[#343a40] text-white py-10 px-6 md:px-16 text-center space-y-3 shadow-md">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Medical Devices
          </h1>
          <p className="text-xs md:text-sm text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Ensure your medical device meets regulatory standards with our expert Clinical Evaluation Reports (CER) services. We provide comprehensive support from data collection to evidence appraisal, helping you achieve compliance efficiently.
          </p>
        </div>
      </div>

      <div className="w-full bg-white text-gray-800 pb-16 px-4 md:px-8 space-y-20">
                {/* SECTION: CLASSES OF CLINICAL EVALUATION REPORT FOR MEDICAL DEVICES */}
        <section className="max-w-6xl mx-auto space-y-10 pt-16">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32]">
              Classes of Clinical Evaluation Report for Medical Devices
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              CER for medical devices is typically categorized based on the risk class of the medical device under regulations such as the MDR 2017/745 or other regional frameworks. The classes reflect the potential risk a device poses to patients. Here&apos;s a detailed breakdown:
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f9fafb] border-b border-gray-200 text-gray-900 text-sm font-bold">
                    <th className="py-4 px-6">Class</th>
                    <th className="py-4 px-6">Description</th>
                    <th className="py-4 px-6">Examples</th>
                    <th className="py-4 px-6">CER Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs md:text-sm text-gray-700">
                  <tr className="bg-[#f2fcf5]">
                    <td className="py-4 px-6 font-bold text-gray-900">Class I Devices (Low Risk)</td>
                    <td className="py-4 px-6">Non-invasive devices or those with minimal risk to the user.</td>
                    <td className="py-4 px-6">Bandages, stethoscopes, examination gloves.</td>
                    <td className="py-4 px-6">• Clinical evaluation is often based mainly on literature review and well-documented experience.<br/>• Clinical data requirements are generally less stringent than those for higher-risk classes.</td>
                  </tr>
                  <tr className="bg-[#fffef0]">
                    <td className="py-4 px-6 font-bold text-gray-900">Class IIa Devices (Medium-Low Risk)</td>
                    <td className="py-4 px-6">Moderately invasive or pose moderate risk.</td>
                    <td className="py-4 px-6">Dental fillings, infusion pumps, ultrasound equipment.</td>
                    <td className="py-4 px-6">• Requires more detailed clinical data than Class I.<br/>• May include post-market clinical follow-up (PMCF) or limited clinical investigations.</td>
                  </tr>
                  <tr className="bg-[#fcf4f4]">
                    <td className="py-4 px-6 font-bold text-gray-900">Class IIb Devices (Medium-High Risk)</td>
                    <td className="py-4 px-6">Invasive or significant impact on patient health if they fail.</td>
                    <td className="py-4 px-6">Ventilators, anaesthesia equipment, and implantable devices like pacemakers (non-life-sustaining).</td>
                    <td className="py-4 px-6">• CER must rely on robust clinical evidence.<br/>• Usually requires clinical investigations or well-controlled studies in addition to the literature.</td>
                  </tr>
                  <tr className="bg-[#fcf0f0]">
                    <td className="py-4 px-6 font-bold text-gray-900">Class III Devices (High Risk)</td>
                    <td className="py-4 px-6">Devices that are life-sustaining or life-supporting, or have a high risk of serious health consequences.</td>
                    <td className="py-4 px-6">Heart valves, implantable defibrillators, some orthopaedic implants.</td>
                    <td className="py-4 px-6">• Requires extensive clinical data from trials and real-world evidence.<br/>• CER is a critical component for regulatory approval and must demonstrate safety, performance, and clinical benefit comprehensively.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION: WHAT IS THE IMPORTANCE OF POST-MARKET SURVEILLANCE FOR MEDICAL DEVICES? */}
        <section className="max-w-6xl mx-auto space-y-10 pt-16">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32]">
              What Is The Importance Of Post-Market Surveillance For Medical Devices?
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              PMS is important to ensure the safety, efficacy, and performance of medical devices after they are released to the market and used by the public.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllPMS ? pmsCards : pmsCards.slice(0, 3)).map((card, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-2 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{card.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {!showAllPMS && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setShowAllPMS(true)}
                className="bg-[#1b3b32] text-white font-bold text-sm py-3 px-8 rounded-full hover:bg-[#122822] transition-colors shadow"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        {/* SECTION: WHAT POST-MARKET SURVEILLANCE GUIDELINES SHOULD THE MEDICAL DEVICE INDUSTRY CONSIDER? */}
        <section className="max-w-6xl mx-auto space-y-10 pt-16">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32]">
              What Post-Market Surveillance Guidelines Should The Medical Device Industry Consider?
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              PMS guidelines for the medical industry include references such as the Medical Device Guidance Documents (MEDDEV) and the Medical Device Coordination Group (MDCG) guidelines in the EU. PMS guidelines from different organizations are listed below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(showAllGuidelines ? guidelineCards : guidelineCards.slice(0, 3)).map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex items-center space-x-4">
                <div className="relative w-10 h-10 rounded-lg bg-[#f0f4f1] shrink-0 overflow-hidden">
                  <Image src={item.iconSrc} alt="" fill className="object-contain p-1" sizes="40px" />
                </div>
                <h3 className="font-bold text-gray-900 text-xs md:text-sm">{item.title}</h3>
              </div>
            ))}
          </div>

          {!showAllGuidelines && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setShowAllGuidelines(true)}
                className="bg-[#1b3b32] text-white font-bold text-sm py-3 px-8 rounded-full hover:bg-[#122822] transition-colors shadow"
              >
                Load More
              </button>
            </div>
          )}
        </section>

      </div>
    </>
  );
};

export default MedicalDeviceIndustry;