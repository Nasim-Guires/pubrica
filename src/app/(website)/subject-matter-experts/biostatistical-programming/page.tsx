import type { Metadata } from 'next';
import SimpleSubjectPage from '@/components/subject-matter-experts/SimpleSubjectPage';
import { SERVICES_EXPERTISE } from '@/lib/subject-matter-experts/servicesExpertise';

export const metadata: Metadata = {
  title: 'Biostatistical Programming - Pubrica',
  description: 'Subject matter experts in biostatistical programming — descriptive and comparative analytics, advanced statistical modeling, and disease surveillance publication support.',
};

export default function BiostatisticalProgrammingPage() {
  return (
    <SimpleSubjectPage
      title="Biostatistical Programming"
      servicesExpertise={SERVICES_EXPERTISE}
      paragraphs={[
        'Biostatistics is the branch of statistics as it deals with the statistical data process related to the analysis of biological organisms. The science of biostatistics helps in designing biological experiments and interpreting the collected data to answers questions like the working nature of the new formulation, the cause of cancer and associated diseases, and the survival rate of a patient cause severe illness, etc. In general, biostatistics is the application of statistical principles which helps developing questions and identifying problems in biological fields such as medicine and public health. Biostatistics usually includes both descriptive and analytical domains. The analytical methods are mainly used for design and analysis of public health research. Finding the accurate mathematical hypotheses, biological models and the statistical test is essential for study design which is a mandatory prerequisite for quality study outcome. Early clinical trials are typical challenges for biostatistics in translational science, and the biomarker validation is an essential gatekeeper of translational success impossible without proper statistical procedures.',
        'Pubrica provides support in descriptive and comparative analytics, advanced statistical modeling, disease surveillance and much more, through developing the biostatistical programming. Pubrica offers you complete publishing support across a variety of publications, journals, and books. We provide comprehensive support from translating your concept to incisive report, and we will be with you through the entire publication stages. We assist medical doctors, students, hospitals, and pharma and device manufacturers in their quest for a credible writing partner.',
        'We have experts across subjects such as life science, medical and technology. Due to our consistent, high-quality writing, we can publish in journals with high impact factor includes Vital and Health Statistics; Series 2: Data Evaluation and Methods Research, Journal of the American Statistical Association, Journal of the Royal Statistical Society: Series B (Statistical Methodology), Proceedings of the IEEE Computer Society Conference on Computer Vision and Pattern Recognition, Foundations and Trends in Machine Learning, Advances in Data Analysis and Classification, and Journal of Statistical Software.',
      ]}
    />
  );
}
