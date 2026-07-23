"use client";

import React from "react";
import {
  FileCheck2,
  MessageSquare,
  Languages,
  Award,
  RefreshCw,
} from "lucide-react";

// --- Support Services Data ---
interface SupportService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

const supportServices: SupportService[] = [
  {
    id: "formatting",
    title: "Journal-specific Formatting",
    description:
      "Our technical experts help you comply with your target journal's guidelines, including word limit, language style, and general layout requirements.",
    icon: <FileCheck2 className="w-6 h-6 text-indigo-600" />,
    iconBgColor: "bg-purple-100",
  },
  {
    id: "qna",
    title: "Free and Unlimited Q&A with your editor",
    description:
      "Communicate with your translator or editor to clarify any doubts, request revision of sections, respond to queries, etc.",
    icon: <MessageSquare className="w-6 h-6 text-amber-600" />,
    iconBgColor: "bg-amber-100",
  },
  {
    id: "retranslation",
    title: "Free re-translation",
    description:
      "Our quality guarantee is paramount to every service we offer. If you are not satisfied with the quality of the translation, we will retranslate your paper at no added cost.",
    icon: <Languages className="w-6 h-6 text-indigo-600" />,
    iconBgColor: "bg-purple-100",
  },
  {
    id: "certificate",
    title: "Free editing certificate",
    description:
      "On completion of translation and editing, you can request an editing certificate, which has been recommended by many international journals.",
    icon: <Award className="w-6 h-6 text-amber-600" />,
    iconBgColor: "bg-amber-100",
  },
  {
    id: "reediting",
    title: "Re-editing support",
    description:
      "If you've made further changes to the document after our translation and editing, please resubmit your updated document for a 60% discount on further editing assistance.",
    icon: <RefreshCw className="w-6 h-6 text-indigo-600" />,
    iconBgColor: "bg-purple-100",
  },
];

export default function SupportServicesAndSampleWork() {
  return (
    <div className="w-full bg-[#f4f6f8] text-slate-800 font-sans py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ======================================= */}
        {/* SECTION 1: SUPPORT SERVICES             */}
        {/* ======================================= */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
              Additional And Post-Translation Support Services
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              We provide several free, value-added benefits to help you make the
              most of our expertise. You can be assured of assistance from our
              expert translators and editors even after we have sent you the
              translated manuscript. Check out the details of the free benefits
              we provide and our post-translation support services.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {supportServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4"
              >
                {/* Circular Pastel Icon Container */}
                <div
                  className={`w-12 h-12 rounded-full ${service.iconBgColor} flex items-center justify-center shrink-0 mt-1`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================= */}
        {/* SECTION 2: SAMPLE WORK SHOWCASE         */}
        {/* ======================================= */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
              Translation with Editing Services Sample Work
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Ensure your research communicates globally with Pubrica&apos;s
              Translation with Editing Services. Achieve accurate, polished, and
              publication-ready translations with expert guidance.
            </p>
          </div>

          {/* Document Sample Outer Frame */}
          <div className="bg-white border border-slate-300 rounded-md shadow-sm overflow-hidden max-w-5xl mx-auto">
            {/* Grey Banner Header */}
            <div className="bg-[#e2e8f0] border-b border-slate-300 py-3 px-4 text-center">
              <h3 className="text-sm sm:text-base font-bold text-[#003B46] tracking-wide">
                Checkout Our Sample Work of the Translation with Editing Service
              </h3>
            </div>

            {/* Document Content */}
            <div className="p-6 sm:p-10 relative bg-white">
              {/* Logo Header */}
              <div className="flex justify-end mb-6">
                <div className="bg-[#003B46] text-white px-3 py-1.5 font-bold text-lg tracking-wider rounded-sm text-right">
                  PUBRICA
                  <div className="text-[9px] font-normal tracking-normal text-slate-200 -mt-1">
                    Knowledge Works
                  </div>
                </div>
              </div>

              {/* Side-by-Side Manuscript Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* Left Column: Original (Spanish) */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-900 border-b pb-1">
                    Original Manuscript (Spanish)
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed text-justify font-serif">
                    La diabetes tipo 2 (DT2) es una carga creciente, con un
                    estimado de 416,70 millones de adultos afectados en todo el
                    mundo y 110,58 millones de pacientes en China [1]. Es una
                    enfermedad metabólica crónica caracterizada por
                    hiperglucemia, causada por la incapacidad de las células
                    &beta; pancreáticas para secretar suficiente insulina o por
                    la incapacidad del cuerpo para usar eficazmente la insulina
                    secretada [2]. La DT2 influye tanto en la salud física como
                    mental. Aproximadamente dos quintas partes de los pacientes
                    experimentan problemas mentales, como ansiedad, depresión y
                    angustia diabética [3]. Entre los pacientes con DT2, la
                    angustia diabética (AD) es el problema psicológico más común
                    [4]. Una revisión sistemática encontró que la prevalencia
                    global general de AD fue del 36,0% en pacientes con DT2 [5].
                    Un estudio también mostró que aproximadamente entre el 42,5%
                    y el 77,2% de los chinos con DT2 experimentan AD [6].
                  </p>
                </div>

                {/* Right Column: Translated (English) */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-[#2e7d32] border-b pb-1">
                    Translated Manuscript (English)
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed text-justify font-serif">
                    Type 2 diabetes (T2D) is a growing burden, with an estimated
                    416.70 million adults affected worldwide and 110.58 million
                    patients in China [1]. It is a chronic metabolic disease
                    characterized by hyperglycaemia, caused by the inability of
                    pancreatic &beta; cells to secrete sufficient insulin or the
                    inability of the body to effectively use the secreted
                    insulin [2]. T2D affects both physical and mental health.
                    Approximately two-fifths of patients experience mental
                    problems, such as anxiety, depression, and diabetes distress
                    [3]. Among patients with T2D, diabetes distress (DD) is the
                    most common psychological problem [4]. A systematic review
                    found that the overall global prevalence of DD was 36.0% in
                    patients with T2D [5]. A study also showed that
                    approximately 42.5%&ndash;77.2% of Chinese patients with T2D
                    experience DD [6].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
