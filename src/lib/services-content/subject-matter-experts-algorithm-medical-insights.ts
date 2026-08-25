import type { ArticleBlock } from '@/components/services/ServiceArticleRenderer';

export const ARTICLE_BLOCKS: ArticleBlock[] = [
  {
    type: 'p',
    text: 'Medical algorithms are mathematical models that aid in decision-making or recommendations in medicine. They incorporate multiple factors, including patient symptoms, medical history, and investigations. Medical algorithms assist decision-making in various realms, such as diagnosis, treatment planning, and even clinical research.',
  },
  {
    type: 'p',
    text: 'Most practitioners only engage with a small piece of [algorithm](/services/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation) medicine in practice. Nevertheless, there is an increasing demand for algorithms for use in health care as the amount of medical data grows.[[1]](https://doi.org/10.1007/s40520-023-02552-2)',
  },
  { type: 'h2', text: 'What is a Clinical Practice Algorithm?' },
  {
    type: 'p',
    text: 'A clinical practice algorithm is a systematic, graphical representation that is intended to assist clinicians in deciding what constitutes optimal healthcare for a specific clinical condition. The algorithm combines a clinical algorithm, which is a step-by-step protocol designed to standardize the procedure towards a diagnosis, treatment, or management of a particular condition. The notion of an algorithm within medicine is broader than just decision trees, including substantive clinical guidelines that include evidence-based practices and clinical expertise, allowing patient care to be timely and effective.[[2]](https://mdanderson.libguides.com/c.php?g=564859&p=3890701)',
  },
  { type: 'h2', text: 'Types of Medical Algorithms' },
  {
    type: 'p',
    text: 'Medical algorithms are systematic, step-by-step processes that are used by clinicians to assist with diagnosis, treatment, and clinical decision-making. They encompass both straightforward flowcharts and more advanced computational models and often exist as part of an electronic health record (EHR) system or clinical decision support tool.[[3]](https://doi.org/10.1186/s12874-024-02276-5)',
  },
  {
    type: 'table',
    rows: [
      ['Type', 'Description', 'Examples & Applications'],
      [
        'Diagnostic Algorithms',
        'Organized tools that help to determine a disease or a medical condition based on patient symptoms, clinical signs, laboratory results, or imaging studies. They assist clinicians in reducing diagnostic error and improving accuracy in clinical reasoning.',
        'Algorithms to assess fever to differentiate bacterial versus viral infection. Diagnostic algorithms for diabetes, cardiovascular disease. Image-analysis-driven diagnostic aids in radiology or pathology.',
      ],
      [
        'Treatment Algorithms',
        'Systematic and instructional tools used by clinicians to diagnose and prescribe suitable treatments. They assist in choosing proper therapies and promote consistency in performance and adherence to clinical practice guidelines.',
        'Protocols for managing hypertension. Selection of drugs, lifestyle interventions. Chemotherapy guidelines depending upon cancer stage.',
      ],
      [
        'Clinical Research Algorithms',
        'Enable research design, data analysis, and outcome assessment in clinical research. They offer reproducible and standardized methods for trial and observational studies.',
        'Assigning participants in clinical trials using randomization algorithms. Algorithms to calculate sample size and conduct statistical analyses. Protocol adherence monitoring systems.',
      ],
      [
        'Predictive Algorithms',
        'Estimate the probability of disease risk, treatment outcomes, or patient prognosis based on historical information, clinical indicators, and occasionally machine learning models.',
        'Risk calculators for cardiovascular events (Framingham Risk Score). Predicting diabetes onset based on clinical and lifestyle characteristics. Lifestyle models to reduce hospital readmission.',
      ],
      [
        'Prescriptive Algorithms',
        'Take another step beyond prediction by recommending specific, implementable interventions tailored to the individual patient. They often integrate predictive models with optimization approaches to support clinical decisions.',
        'Personalized drug dosing (insulin, for example). AI-enabled therapy recommendations. Dynamic treatment plans for patients with multiple conditions. Allocation of resources in critical care units.',
      ],
    ],
  },
  { type: 'h3', text: 'Why Healthcare Needs Medical Algorithms' },
  {
    type: 'p',
    text: 'Since the evolution of medical knowledge, the expansion of diagnostic options, the variety of treatment choices, and the volume of information available on patients, the complexity of modern healthcare can no longer be overstated. Medical algorithms offer a mechanism for orderly engagement with this complexity, and facilitate clinical decision-making that is grounded in evidence, efficient, and focused on patient needs.[[9]](https://www.mdpi.com/1999-4893/17/3/105)',
  },
  { type: 'h2', text: 'Conclusion' },
  {
    type: 'p',
    text: 'Medical [algorithms](/services/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation) are essential in contemporary healthcare for enhancing accuracy, efficiency, and patient outcomes. They offer a methodical approach to clinical decision-making, define clinical practice, facilitate optimal allocation of resources, and are congruous with technological innovations. As the volume of medical knowledge expands and the complexity of healthcare increases, well-designed algorithms are not only beneficial but necessary for safe, effective, and tailored patient care.',
  },
  { type: 'h2', text: 'References' },
  {
    type: 'ol',
    items: [
      'Woodman, R. J., & Mangoni, A. A. (2023). A comprehensive review of machine learning algorithms and their application in geriatric medicine: present and future. Aging clinical and experimental research, 35(11), 2363–2397. [https://doi.org/10.1007/s40520-023-02552-2](https://doi.org/10.1007/s40520-023-02552-2)',
      'Clinical practice guidelines. (2016, September 16). Libguides.com. [https://mdanderson.libguides.com/c.php?g=564859&p=3890701](https://mdanderson.libguides.com/c.php?g=564859&p=3890701)',
      'Scala, A., Trunfio, T. A., & Improta, G. (2024). The classification algorithms to support the management of the patient with femur fracture. BMC medical research methodology, 24(1), 150. [https://doi.org/10.1186/s12874-024-02276-5](https://doi.org/10.1186/s12874-024-02276-5)',
      'Ahsan, M. M., Luna, S. A., & Siddique, Z. (2022). Machine-Learning-Based Disease Diagnosis: A Comprehensive Review. Healthcare (Basel, Switzerland), 10(3), 541. [https://doi.org/10.3390/healthcare10030541](https://doi.org/10.3390/healthcare10030541)',
      'Morris A. H. (2003). Treatment algorithms and protocolized care. Current opinion in critical care, 9(3), 236–240. [https://doi.org/10.1097/00075198-200306000-00012](https://doi.org/10.1097/00075198-200306000-00012)',
      'Sarker I. H. (2021). Machine Learning: Algorithms, Real-World Applications and Research Directions. SN computer science, 2(3), 160. [https://doi.org/10.1007/s42979-021-00592-x](https://doi.org/10.1007/s42979-021-00592-x)',
      'Lee, J. Y., & Lee, S. Y. (2024). Development of an AI-Based Predictive Algorithm for Early Diagnosis of High-Risk Dementia Groups among the Elderly: Utilizing Health Lifelog Data. Healthcare (Basel, Switzerland), 12(18), 1872. [https://doi.org/10.3390/healthcare12181872](https://doi.org/10.3390/healthcare12181872)',
      'Mishra, P. (2019, May 10). What is prescriptive analytics? Analytics Vidhya. [https://www.analyticsvidhya.com/blog/2019/05/practical-introduction-prescriptive-analytics/](https://www.analyticsvidhya.com/blog/2019/05/practical-introduction-prescriptive-analytics/)',
    ],
  },
];
