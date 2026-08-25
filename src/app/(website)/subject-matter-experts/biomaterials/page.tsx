import type { Metadata } from 'next';
import SimpleSubjectPage from '@/components/subject-matter-experts/SimpleSubjectPage';
import { SERVICES_EXPERTISE } from '@/lib/subject-matter-experts/servicesExpertise';

export const metadata: Metadata = {
  title: 'Biomaterials - Pubrica',
  description: 'Subject matter experts in biomaterials — publication and writing support for biomaterial engineering, tissue engineering, and drug delivery research.',
};

const RELATED_SUBJECTS = [
  'Bioinspired materials', 'Biomaterials – cells', 'Biomaterials – proteins', 'Biomaterials – vaccines',
  'Biomedical materials', 'Biomineralization', 'Biotechnology', 'DNA and RNA', 'Drug delivery', 'Implants',
  'Molecular genetics', 'Materials chemistry', 'Materials science', 'Optical materials and structures', 'Tissues',
];

export default function BiomaterialsPage() {
  return (
    <SimpleSubjectPage
      title="Biomaterials"
      relatedSubjects={RELATED_SUBJECTS}
      servicesExpertise={SERVICES_EXPERTISE}
      paragraphs={[
        'Any substance that has been specifically tailored to interact with a biological system to treat, augment, repair, or replace a tissue for the betterment of the human body is called biomaterials. Biomaterial engineering has become an in-demand field of research as every new material serves a massive number of people, and the industries have invested a lot of money in their research and development. Biomaterial science requires attention from multiple therapeutic areas include biology, chemistry, [tissue engineering](/subject-matter-experts/tissue-engineering), medicine and material science. Biomaterials can be derived from natural as well as synthetic material according to the requirement using different approaches like metallic components, composite materials, polymers and ceramics. In the past, biomaterials are used majorly in dental applications, [drug delivery](/subject-matter-experts/drug-delivery-system) and surgery. Whereas, in recent times, biomaterials were widely used in artificial ligaments and tendons, blood vessel prostheses, bone cement, bone plates, breast implants, cochlear replacements, contact lenses, dental implants for tooth fixation, drug delivery mechanisms, heart valves, intraocular lenses for eye surgery, joint replacements, nerve conduits, pins and screws for fracture stabilisation, skin repair devices, stents, surgical mesh, surgical sutures, clips, and staples for wound closure, sustainable materials and vascular grafts. A biomaterial can provide a physiological response which will support the function and performance. Biomaterials used for the bone-implant are intended to promote growth and later the biomaterials will be washed out of the body as they are biocompatible and dissolve into surrounding interstitial fluids.',
        'Pubrica provides support in [writing](/services/physician-writing-services) a clinical [case report](/services/research-services) for rare diseases. Pubrica offers you complete publishing support across a variety of publications, journals, and books. We provide comprehensive support from translating your concept to incisive report, and we will be with you through the entire [publication stages](/services/publication-support/journal-submission). We assist medical doctors, students, hospitals, and pharma and device manufacturers in their quest for a credible writing partner. We have experts across subjects such as life science, medical and technology. Due to our consistent, high-quality writing, we can publish in journals with high impact factor includes Advanced Functional Materials, Biomaterials, Advanced Healthcare Materials, Biofabrication, Tissue Engineering – Part B: Reviews, Acta Biomaterialia, Biomacromolecules, Journal of the Royal Society Interface, ACS Biomaterial Science and Engineering, and Journal of Colloid and Interface Science.',
      ]}
    />
  );
}
