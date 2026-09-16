"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  description: string;
  highlights: { title: string; text: string }[];
  footer: string;
}

const accordionData: AccordionItem[] = [
  {
    id: "diagnostic",
    title: "Diagnostic Applications",
    description:
      "Cardiology has evolved with cutting-edge diagnostic technologies that allow for early detection and comprehensive assessment of cardiovascular conditions.",
    highlights: [
      {
        title: "Electrocardiography (ECG) and Echocardiography",
        text: "help identify rhythm abnormalities and evaluate cardiac function.",
      },
      {
        title: "Cardiac MRI and CT imaging",
        text: "deliver precise anatomical visualization for congenital, structural, and ischemic heart diseases.",
      },
      {
        title: "Holter Monitoring and Stress Testing",
        text: "provide valuable data for long-term cardiac assessment and risk stratification.",
      },
    ],
    footer:
      "At Pubrica, we assist researchers in developing diagnostic protocols, preparing manuscripts, and interpreting imaging data for publication in high-impact cardiology journals.",
  },
  {
    id: "interventional",
    title: "Interventional and Therapeutic Applications",
    description:
      "Modern cardiology relies heavily on interventional and minimally invasive techniques that have transformed patient care.",
    highlights: [
      {
        title: "Angioplasty, Stenting, and Catheter Ablation",
        text: "have replaced traditional open-heart procedures in many cases.",
      },
      {
        title: "Pacemakers, ICDs, and TAVR (Transcatheter Aortic Valve Replacement)",
        text: "are pivotal in treating complex rhythm and valvular disorders.",
      },
    ],
    footer:
      "Pubrica's team provides systematic review support, clinical trial documentation, and regulatory-compliant medical writing for interventional cardiology research, ensuring your findings align with journal and ethical standards.",
  },
];

export default function CardiologySectioncard() {
  // Set to `null` so all accordions start closed by default
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-4 text-[#1a2b32]">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-[#0f3d3e] mb-2">
        Applications of Cardiology
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 text-[15px]">
        At Pubrica, we recognize that cardiology is one of the most dynamic and
        impactful fields in medical science, dedicated to understanding,
        diagnosing, and managing disorders of the heart and vascular system. Our
        expert scientific writers, researchers, and editors support cardiology
        professionals, clinicians, and academicians in advancing cardiovascular
        research, clinical practice, and publication excellence.
      </p>

      {/* Accordion List */}
      <div className="space-y-3">
        {accordionData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="border-b border-gray-200">
              {/* Accordion Header Button */}
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between bg-[#0f3d3e] text-white px-5 py-3 rounded-sm transition-colors duration-200 text-left font-medium"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                  <span className="text-base tracking-wide">{item.title}</span>
                </div>
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="py-4 px-2 text-gray-700 space-y-3 text-[15px] leading-relaxed animate-fadeIn">
                  <p>{item.description}</p>
                  <ul className="space-y-2 list-none pl-0">
                    {item.highlights.map((point, index) => (
                      <li key={index}>
                        <strong className="font-semibold text-black">
                          {point.title}{" "}
                        </strong>
                        {point.text}
                      </li>
                    ))}
                  </ul>
                  <p>{item.footer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}