import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const MedicalDeviceIndustryPage: NextPage = () => {
  return (
    <>
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
        
        {/* SECTION 1: ENHANCING COMPLIANCE & MARKET READINESS */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] tracking-tight">
              Enhancing Compliance and Market Readiness of Medical Devices Through Expert CER, Post-Market Surveillance, and Data Collection Services
            </h2>
          </div>

          <div className="clearfix text-gray-700 text-sm md:text-base leading-relaxed space-y-6">
            {/* CIRCULAR FLOATING IMAGE CONTAINER */}
            <div className="float-right ml-8 mb-6 w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden shadow-md bg-[#eaf4ef] p-3 flex items-center justify-center relative">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/images/industries/medical-device/Enhancing-Compliance-and-Market-Readiness-of-Medical-Devices-1.png" 
                  alt="Medical Device Operating Room" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              The medical device industry plays a critical role in modern healthcare, delivering innovative solutions that enhance patient outcomes, improve diagnostics, and streamline treatment processes. Spanning a wide range of products from simple instruments to complex, technology-driven devices, this industry is at the forefront of medical innovation, combining engineering, biotechnology, and regulatory compliance to meet global health needs.
            </p>
            <p>
              Navigating regulatory requirements for medical devices can be complex, and CERs play a critical role in demonstrating safety and performance in compliance with international standards such as the EU Medical Device Regulation (MDR 2017/745) and other global frameworks. A well-prepared CER not only supports regulatory submissions but also ensures that medical devices consistently meet the highest standards of clinical safety and effectiveness.
            </p>
            <p>
              Post-market surveillance (PMS) further strengthens this process by monitoring the performance and safety of medical devices once they are on the market, focusing not only on quality assurance but also on regulatory compliance and timely reporting to local authorities. This proactive vigilance ensures cooperation with national authorities, enhances patient safety, and drives continuous improvement in medical device performance, ultimately safeguarding public health while supporting market sustainability.
            </p>
          </div>

          {/* KEY FEATURES LIST */}
          <div className="clear-both pt-4 space-y-4">
            <h3 className="text-base font-bold text-gray-900">Key Features Include:</h3>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              <li className="flex items-start space-x-3">
                <span className="text-red-600 font-bold text-sm mt-0.5">➔</span>
                <span>Clinical investigation of the device under evaluation.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600 font-bold text-sm mt-0.5">➔</span>
                <span>Clinical investigation or other studies reported in the scientific literature for an equivalent device.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600 font-bold text-sm mt-0.5">➔</span>
                <span>Peer-reviewed scientific literature reporting on other clinical experiences of the device being evaluated or an equivalent device.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600 font-bold text-sm mt-0.5">➔</span>
                <span>Clinically relevant PMS data with specific emphasis on post-market clinical follow-up (PMCF).</span>
              </li>
            </ul>

            <div className="pt-6">
              <GetFreeQuoteButton/>
            </div>
          </div>
        </section>

        {/* SECTION 2: OUR EXPERTISE IN MEDICAL DEVICES (EXACT CENTRALLY ALIGNED CIRCULAR WHEEL LAYOUT) */}
        <section className="max-w-7xl mx-auto space-y-10 pt-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32]">
              Our Expertise in Medical Devices Includes
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide end-to-end support for medical device companies, helping them navigate the entire product lifecycle, from research and development to market access and PMS. Our services are designed to ensure compliance, efficiency, and safety, keeping patient welfare at the center of every solution.
            </p>
          </div>

          {/* EXACT DESKTOP RADIAL CONTAINER */}
          <div className="relative w-full max-w-5xl mx-auto h-[600px] hidden lg:flex items-center justify-center">
            
            {/* CENTER CIRCLE IMAGE */}
            <div className="absolute z-10 w-[340px] h-[340px] rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100 flex items-center justify-center">
              <Image 
                src="/images/industries/medical-device/Our-Expertise-in-Medical-Devices-Includes.png" 
                alt="Medical Professional" 
                fill
                className="object-cover"
              />
            </div>

            {/* CARD 1: Left Top */}
            <div className="absolute top-[80px] left-[20px] w-[280px] bg-white border border-gray-200 rounded-xl p-4 shadow-md space-y-1 z-20">
              <h3 className="font-bold text-[#c5221f] text-xs md:text-sm">Regulatory Submissions</h3>
              <p className="text-[11px] text-gray-600 leading-tight">Support for global regulatory compliance, including FDA, CE marking, and other regional approvals.</p>
            </div>

            {/* CARD 2: Left Middle */}
            <div className="absolute top-[250px] left-[-20px] w-[280px] bg-white border border-gray-200 rounded-xl p-4 shadow-md space-y-1 z-20">
              <h3 className="font-bold text-[#c5221f] text-xs md:text-sm">Risk Management & Vigilance Reporting</h3>
              <p className="text-[11px] text-gray-600 leading-tight">Guidance on ISO 14971-based risk assessments, incident reporting, and corrective actions.</p>
            </div>

            {/* CARD 3: Left Bottom */}
            <div className="absolute bottom-[40px] left-[40px] w-[280px] bg-white border border-gray-200 rounded-xl p-4 shadow-md space-y-1 z-20">
              <h3 className="font-bold text-[#c5221f] text-xs md:text-sm">Medical Writing & Scientific Support</h3>
              <p className="text-[11px] text-gray-600 leading-tight">Professional scientific writing, clinical study reports, and regulatory documentation for devices ranging from Class I to Class III.</p>
            </div>

            {/* CARD 4: Right Top */}
            <div className="absolute top-[80px] right-[20px] w-[280px] bg-white border border-gray-200 rounded-xl p-4 shadow-md space-y-1 z-20">
              <h3 className="font-bold text-[#c5221f] text-xs md:text-sm">Clinical Evaluation Reports (CERs)</h3>
              <p className="text-[11px] text-gray-600 leading-tight">Comprehensive preparation and maintenance of CERs to demonstrate safety and performance in line with MDR and ISO 13485 requirements.</p>
            </div>

            {/* CARD 5: Right Middle */}
            <div className="absolute top-[250px] right-[-20px] w-[280px] bg-white border border-gray-200 rounded-xl p-4 shadow-md space-y-1 z-20">
              <h3 className="font-bold text-[#c5221f] text-xs md:text-sm">Post-Market Surveillance (PMS)</h3>
              <p className="text-[11px] text-gray-600 leading-tight">Collection, analysis, and reporting of post-market data to ensure ongoing device safety and compliance.</p>
            </div>

            {/* CARD 6: Right Bottom */}
            <div className="absolute bottom-[40px] right-[40px] w-[280px] bg-white border border-gray-200 rounded-xl p-4 shadow-md space-y-1 z-20">
              <h3 className="font-bold text-[#c5221f] text-xs md:text-sm">Technical Documentation & Dossiers</h3>
              <p className="text-[11px] text-gray-600 leading-tight">End-to-end support in preparing high-quality technical files and design dossiers.</p>
            </div>

          </div>

          {/* MOBILE / TABLET STACKED FALLBACK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
            {[
              {
                title: 'Clinical Evaluation Reports (CERs)',
                description: 'Comprehensive preparation and maintenance of CERs to demonstrate safety and performance in line with MDR and ISO 13485 requirements.'
              },
              {
                title: 'Regulatory Submissions',
                description: 'Support for global regulatory compliance, including FDA, CE marking, and other regional approvals.'
              },
              {
                title: 'Post-Market Surveillance (PMS)',
                description: 'Collection, analysis, and reporting of post-market data to ensure ongoing device safety and compliance.'
              },
              {
                title: 'Risk Management & Vigilance Reporting',
                description: 'Guidance on ISO 14971-based risk assessments, incident reporting, and corrective actions.'
              },
              {
                title: 'Technical Documentation & Dossiers',
                description: 'End-to-end support in preparing high-quality technical files and design dossiers.'
              },
              {
                title: 'Medical Writing & Scientific Support',
                description: 'Professional scientific writing, clinical study reports, and regulatory documentation for devices ranging from Class I to Class III.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-1">
                <h3 className="font-bold text-[#c5221f] text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </section>

        {/* SECTION 3: MEDICAL DEVICE SEGMENTS WE SERVE */}
        <section className="max-w-6xl mx-auto space-y-10 pt-16">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32]">
              Medical Device Segments We Serve
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Pubrica, we provide specialized support across a wide range of medical device segments, helping manufacturers navigate regulatory compliance, clinical evaluation, and post-market requirements with precision and efficiency. Our expertise spans multiple device categories, ensuring tailored solutions for every stage of your product lifecycle. Key Segments Include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Diagnostic & Imaging Devices',
                description: 'MRI, CT, ultrasound systems, X-ray machines, and laboratory diagnostic equipment.',
                iconSrc: '/images/industries/medical-device/Diagnostic-Imaging-Devices.png',
              },
              {
                title: 'Therapeutic Devices',
                description: 'Surgical instruments, infusion pumps, dialysis equipment, and physiotherapy devices.',
                iconSrc: '/images/industries/medical-device/Therapeutic-Devices.png',
              },
              {
                title: 'Monitoring Devices',
                description: 'Wearable devices, patient monitors, and remote monitoring systems.',
                iconSrc: '/images/industries/medical-device/Monitoring-Devices.png',
              },
              {
                title: 'Implants & Prosthetics',
                description: 'Orthopaedic implants, cardiovascular devices, dental implants, and prosthetic limbs.',
                iconSrc: '/images/industries/medical-device/Implants-ProstheticsDevices.png',
              },
              {
                title: 'Digital Health & Software',
                description: 'Mobile health applications, AI-based diagnostic tools, and software-as-a-medical-device (SaMD).',
                iconSrc: '/images/industries/medical-device/Digital-Health-Software.png',
              },
              {
                title: 'Surgical & Hospital Devices',
                description: 'Surgical instruments, operating room equipment, anaesthesia machines, and infusion pumps.',
                iconSrc: '/images/industries/medical-device/Surgical-Hospital-Devices.png',
              }
            ].map((segment, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
                <div>
                  <div className="relative w-10 h-10 mb-3">
                    <Image src={segment.iconSrc} alt="" fill className="object-contain" sizes="40px" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{segment.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{segment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default MedicalDeviceIndustryPage;