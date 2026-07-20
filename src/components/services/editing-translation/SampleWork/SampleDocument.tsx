import ManuscriptColumn from "./ManuscriptColumn";

export const originalParagraphs = [
  `The ability of non-invasive radiofrequency treatments to treat several dermatological issues at once is one of its main benefits. Radiofrequency technology provides customizable treatment choices that may be personalized to match the individual needs and preferences of each patient, whether it is being utilized for scar correction, skin tightening, or wrinkle reduction. Non-invasive radiofrequency techniques also involve less discomfort and recovery time, which makes them appropriate for those with hectic schedules who cannot afford lengthy recuperation times.`,

  `There are several varieties of non-invasive radiofrequency devices on the market, and they all work in different ways to rejuvenate skin. Using a single electrode, monopolar radiofrequency devices penetrate the skin deeply to produce heat energy that tightens loose skin and promotes the formation of collagen. Contrarily, bipolar radiofrequency devices target fine lines and wrinkles by delivering energy to a superficial depth through the use of two electrodes positioned near to one another.`,
];

export const translatedParagraphs = [
  `La capacidad de los tratamientos de radiofrecuencia no invasivos para tratar varios problemas dermatológicos a la vez es uno de sus principales beneficios. La tecnología de radiofrecuencia ofrece opciones de tratamiento personalizables que pueden personalizarse para satisfacer las necesidades y preferencias individuales de cada paciente, ya sea que se utilice para corregir cicatrices, tensar la piel o reducir las arrugas. Las técnicas de radiofrecuencia no invasiva también implican menos molestias y tiempo de recuperación, lo que las hace apropiadas para quienes tienen agendas agitadas y no pueden permitirse tiempos de recuperación prolongados.`,

  `Existen varias variedades de dispositivos de radiofrecuencia no invasivos en el mercado y todos funcionan de diferentes maneras para rejuvenecer la piel. Los dispositivos de radiofrecuencia monopolar penetran profundamente en la piel para producir energía térmica que tensa la piel flácida y promueve la formación de colágeno. Por el contrario, los dispositivos de radiofrecuencia bipolar atacan las líneas finas y las arrugas entregando energía a una profundidad superficial mediante el uso de dos electrodos colocados uno cerca del otro.`,
];
export default function SampleDocument() {
  return (
    <div className="border border-slate-300 rounded-sm bg-white shadow-xl max-w-5xl mx-auto overflow-hidden">
      <div className="bg-[#D9DEE0] text-center py-3 border-b border-slate-300">
        <h3 className="text-sm md:text-base font-bold text-[#0A4D5C]">
          Check out Our Editing and Translation Services Sample Work
        </h3>
      </div>

      <div className="relative bg-white p-6 md:p-10">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <span className="text-6xl md:text-9xl font-black tracking-widest rotate-[330deg]">
            SAMPLE
          </span>
        </div>

        <div className="relative z-10">
          {/* Brand */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-6 h-6 rounded-sm bg-[#1F2431] flex items-center justify-center">
              <span className="text-white text-[10px]">🧠</span>
            </div>

            <div className="text-right">
              <div className="text-[#0A4D5C] font-black text-xl tracking-wider">
                PUBRICA
              </div>

              <span className="text-[8px] tracking-widest text-slate-500 uppercase">
                Knowledge Works
              </span>
            </div>
          </div>

          {/* Columns */}
          <div className="grid md:grid-cols-2 gap-8 text-justify">
            <ManuscriptColumn
              title="Original Manuscript (English)"
              paragraphs={originalParagraphs}
            />

            <ManuscriptColumn
              title="Translated Manuscript (Spanish)"
              titleColor="text-green-600"
              bordered
              paragraphs={translatedParagraphs}
            />
          </div>

          <div className="mt-12 pt-4 border-t border-slate-100 text-center">
            <p className="text-[10px] text-slate-400">
              Copyright © 2026 Pubrica. No part of this document may be
              published without permission of the author.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
