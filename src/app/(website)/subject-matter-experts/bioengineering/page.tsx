import type { Metadata } from 'next';
import SimpleSubjectPage from '@/components/subject-matter-experts/SimpleSubjectPage';
import { SERVICES_EXPERTISE } from '@/lib/subject-matter-experts/servicesExpertise';

export const metadata: Metadata = {
  title: 'Bioengineering - Pubrica',
  description: 'Subject matter experts in bioengineering — publication and writing support for biomedical devices, tissue engineering, and biotechnology research.',
};

const RELATED_SUBJECTS = [
  'Air pollution control', 'Biochemical engineering', 'Bioinformatics', 'Biological systems engineering',
  'Biology', 'Biomechanical engineering', 'Biomechanics', 'Biomimetics', 'Bionics', 'Clinical engineering',
  'Emissions trading', 'Environmental health engineering', 'Genetic engineering', 'Hazardous-waste management',
  'Human-factors engineering', 'Medicine', 'Neural engineering', 'Pharmaceutical engineering',
  'Solid-waste management', 'Synthetic biology', 'Tissue engineering', 'Wastewater treatment',
];

export default function BioengineeringPage() {
  return (
    <SimpleSubjectPage
      title="Bioengineering"
      heroImage={{ src: "https://pubrica.com/wp-content/uploads/2024/06/Bioengineering.webp", alt: "Bioengineering" }}
      relatedSubjects={RELATED_SUBJECTS}
      servicesExpertise={SERVICES_EXPERTISE}
      paragraphs={[
        'Bioengineering is a field of engineering and the study of medicine and biology as has application in all [medicinal engineering](/subject-matter-experts/medicinal-chemistry) fields while associating chemical engineering, electrical engineering, mechanical engineering and material science. Bioengineering helps to assist defective body parts or specific functions like hearing aids, substitute organs, artificial limbs, etc. Not only for humankind but bioengineering also support the fermentation process to achieve biosynthesis. Bioengineering is also known as biological engineering as it uses the fundamental principles of biology and engineer tools to create economically viable technologies for the betterment of human lives. Bioengineering also requires knowledge from applied science which includes biocatalysts, biomechanics, bioinformatics, bio-filtration process, and polymer science, etc. It also provides the researcher with the knowledge in designing medical devices, biocompatible materials, diagnostic equipment, renewable bioenergy, agricultural engineering, and ecological engineering to improve the technology and be efficient in producing cutting-edge tools to save lives and to have an equipped lifestyle. Bioengineering will be significantly utilised in designing concepts based on [biotechnology](/subject-matter-experts/biotechnology), [life sciences](/subject-matter-experts/life-sciences) and engineering, which includes genetic modification of organisms, [tissue engineering](/subject-matter-experts/tissue-engineering), bioprocess engineering, [biomedical engineering](/subject-matter-experts/biomedical-engineering), etc. In coordinating with physicians and researchers, bioengineering professional can use traditional principles and apply the techniques to answer real-world biological problems.',
        'Pubrica provides support in [writing](/services/physician-writing-services) a clinical [case report](/services/research-services) for rare diseases. Pubrica offers you complete publishing support across a variety of publications, journals, and books. We provide comprehensive support from translating your concept to incisive report, and we will be with you through the entire [publication stages](/services/publication-support/journal-submission). We assist medical doctors, students, hospitals, and pharma and device manufacturers in their quest for a credible writing partner. We have experts across subjects such as life science, medical and technology. Due to our consistent, high-quality writing, we can publish in journals with high impact factor includes Nature Nanotechnology, Nature Biotechnology, Annual Review of Biophysics, Nano Today, Nano Letters, Nature Biomedical Engineering, Trends in Biotechnology, Biotechnology Advances, Metabolic Engineering, Current Opinion in Biotechnology, Lab on a Chip – Miniaturisation for Chemistry and Biology, Wiley interdisciplinary reviews, Nanomedicine and nanobiotechnology, and Bioresource Technology.',
      ]}
    />
  );
}
