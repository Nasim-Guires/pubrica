import type { ArticleBlock } from '@/components/services/ServiceArticleRenderer';

export const ARTICLE_BLOCKS: ArticleBlock[] = [
  {
    "type": "h2",
    "text": "Table of Content"
  },
  {
    "type": "p",
    "text": "The CONSORT (Consolidated Standards of Reporting Trials) guidelines are standards designed to facilitate transparent and accurate reporting of randomized controlled trials (RCTs). The CONSORT is composed of a 25-item checklist, which focuses on the reporting of the trial design, analysis, and interpretation. [[1]](https://doi.org/10.4103/sja.SJA_559_18)"
  },
  {
    "type": "img",
    "src": "https://pubrica.com/wp-content/uploads/2025/05/Founders-and-Editorial-Leadership.png",
    "alt": ""
  },
  {
    "type": "h2",
    "text": "1. Overview of CONSORT Guidelines"
  },
  {
    "type": "p",
    "text": "The goal of the CONSORT guidelines is to improve the quality of RCTs by providing researchers a framework for reporting. The focus of the guidelines is to clarify the methodological accuracy of the researcher’s work and the study’s findings and results; efforts should facilitate all individuals assessing the validity of a trial (researchers, practitioners, policy makers, etc.) [[2]](https://doi.org/10.1001/jama.2022.21022)"
  },
  {
    "type": "img",
    "src": "https://pubrica.com/wp-content/uploads/2025/05/Core-Principles-The-Four-Pillars.png",
    "alt": "Core Principles The Four Pillars"
  },
  {
    "type": "h2",
    "text": "2. Key Features of CONSORT Guidelines"
  },
  {
    "type": "ul",
    "items": [
      "Unambiguous method: Ensure transparency in trial design, methods, and analysis.",
      "Accurate reporting: Assist authors in reporting key details such as sample size, randomization procedures, and blinding procedures.",
      "Transparency in data: Stress the importance of being specific about the trial outcomes, the flow of participants, and adverse events. [[3]](https://doi.org/10.1016/j.jclinepi.2010.03.004)"
    ]
  },
  {
    "type": "h2",
    "text": "3. Types of CONSORT Guidelines"
  },
  {
    "type": "p",
    "text": "The guidelines cover many aspects of reporting a clinical trial and help ensure all details are reported. Below are the two broad categories of CONSORT guidelines."
  },
  {
    "type": "table",
    "rows": [
      [
        "",
        "Consort 2010",
        "Consort 2017"
      ],
      [
        "Description",
        "The [CONSORT 2010](https://legacyfileshare.elsevier.com/promis_misc/CONSORT-2010-Checklist.pdf) statement contains a 25-item checklist for optimizing the reporting of RCTs. The checklists contain essential information related to trial design, randomization methods, and sample size calculations.",
        "The [CONSORT 2017](https://www.equator-network.org/reporting-guidelines/consort-non-pharmacological/) extension provides guidelines specifically for reporting trials of non-pharmaceutical interventions, such as surgical or behavioural interventions."
      ],
      [
        "Main Points",
        "Title and Abstract: The title and abstract specified the trial design. Participants: Provided eligibility criteria and the number of participants included. Measures: Primary and systematic outcome measures clearly stated.",
        "Focus on interventions other than drugs (e.g., surgery, physiotherapy). Specific recommendations for trials with complex interventions."
      ]
    ]
  },
  {
    "type": "h2",
    "text": "4. Key Sections of CONSORT Guidelines"
  },
  {
    "type": "p",
    "text": "Here are the critical sections covered by the CONSORT guidelines:"
  },
  {
    "type": "h3",
    "text": "4.1. Trial Design"
  },
  {
    "type": "ul",
    "items": [
      "Randomized Design: Specify if the study employed a randomized controlled trial design.",
      "Blinding: Discuss if blinding (single or double) was used.",
      "Control Group: Explain if there was a control group and how things were handled."
    ]
  },
  {
    "type": "h3",
    "text": "4.3. Outcome Measures"
  },
  {
    "type": "ul",
    "items": [
      "Methods: Describe the statistical methods that were used to conduct the data analysis.",
      "Intention-to-Treat: Describe whether an intention-to-treat analysis was done."
    ]
  },
  {
    "type": "h2",
    "text": "5. Example of Reporting in CONSORT Format"
  },
  {
    "type": "p",
    "text": "Below is an example of how to report a clinical trial based on CONSORT guidelines."
  },
  {
    "type": "table",
    "rows": [
      [
        "Section",
        "Reported Information"
      ],
      [
        "Trial Design",
        "Randomized, double-blind, placebo-controlled trial."
      ],
      [
        "Participants",
        "150 participants, aged 18–65, were randomized from 500 screened volunteers."
      ],
      [
        "Intervention",
        "100 mg of drug A vs. placebo daily for 12 weeks."
      ],
      [
        "Primary Outcome",
        "Improvement in blood pressure (mmHg) measured at baseline and 12 weeks."
      ],
      [
        "Statistical Methods",
        "Linear regression is used to compare means between groups."
      ]
    ]
  },
  {
    "type": "h3",
    "text": "6. CONSORT Checklist"
  },
  {
    "type": "ul",
    "items": [
      "The CONSORT checklist, an essential component of these guidelines, consists of the following categories:IntroductionRationale for the trial",
      "Specific objectives"
    ]
  },
  {
    "type": "p",
    "text": "Methods"
  },
  {
    "type": "ul",
    "items": [
      "Trial design, randomization, and blinding",
      "Outcome measures"
    ]
  },
  {
    "type": "p",
    "text": "Results"
  },
  {
    "type": "ul",
    "items": [
      "Participant flow diagram",
      "Outcome data"
    ]
  },
  {
    "type": "p",
    "text": "Discussion"
  },
  {
    "type": "ul",
    "items": [
      "Interpretation of findings",
      "Limitations"
    ]
  },
  {
    "type": "h3",
    "text": "7. Importance of CONSORT Guidelines"
  },
  {
    "type": "p",
    "text": "Adhering to CONSORT guidelines offers several advantages:"
  },
  {
    "type": "ul",
    "items": [
      "Improved Reproducibility: Open reporting will allow researchers to reproduce and validate trials.",
      "Improve Trust: Accurate and detailed health research reporting builds trust among clinicians and patients.",
      "Better Policy Decisions: Transparency reporting allows policymakers to make good-quality and reliable policy decisions."
    ]
  },
  {
    "type": "h3",
    "text": "8. Benefits of Following CONSORT"
  },
  {
    "type": "ul",
    "items": [
      "Peer Review Efficiency: Supports faster and more effective peer review.",
      "Greater Transparency: Encourages transparency in clinical trial reporting.",
      "Enhanced Reporting: Reduces bias and misinterpretation in clinical trials"
    ]
  },
  {
    "type": "h2",
    "text": "Conclusion"
  },
  {
    "type": "p",
    "text": "The CONSORT statement is an important resource for researchers investigating randomized controlled trials. By using these benchmarks, it is more likely that clinical trial reports will be transparent, replicable, and will serve the medical community more effectively. The use of the CONSORT statement improves research quality and promotes the ethically responsible use of clinical evidence in making healthcare decisions."
  },
  {
    "type": "p",
    "text": "Unsure how to target a CONSORT Guidelines: A Comprehensive Guide? Our academic consultants are here to guide you. [Get Expert Publishing Support] or [Schedule a Free Consultation]"
  },
  {
    "type": "h2",
    "text": "Frequently Asked Questions (FAQs)"
  },
  {
    "type": "p",
    "text": "1. What are CONSORT guidelines?"
  },
  {
    "type": "p",
    "text": "The guidelines developed by CONSORT (Consolidated Standards of Reporting Trials) are recommendations for transparent and accurate reporting of randomized controlled trials (RCTs). They improve the quality of reporting and ease the process of replicating trials"
  },
  {
    "type": "p",
    "text": "2. Why are CONSORT guidelines important?"
  },
  {
    "type": "p",
    "text": "They improve transparency, ensure reproducibility, and assist in evaluating the credibility of trial findings for healthcare decision making."
  },
  {
    "type": "p",
    "text": "3. What is the CONSORT 2010 checklist?"
  },
  {
    "type": "p",
    "text": "The 2010 CONSORT checklist encompasses 25 items, covering sections on trial design, participant flow, randomization, outcome measures, statistical methods, and discussion."
  },
  {
    "type": "p",
    "text": "4. What’s the difference between CONSORT 2010 and CONSORT 2017?"
  },
  {
    "type": "p",
    "text": "CONSORT 2017 expands the guidance for trials with non-pharmaceutical interventions (e.g., surgery or therapy), whereas CONSORT 2010 had drug trials as its focus."
  },
  {
    "type": "p",
    "text": "5.How can I use the CONSORT guidelines?"
  },
  {
    "type": "p",
    "text": "Use the CONSORT checklist to structure your trial report. You should also include the content of trial design, participant flow, outcomes measures, and statistical analyses."
  },
  {
    "type": "h2",
    "text": "References"
  },
  {
    "type": "ol",
    "items": [
      "Cuschieri S. (2019). The CONSORT statement. Saudi journal of anaesthesia, 13(Suppl 1), S27–S30. [https://doi.org/10.4103/sja.SJA_559_18](https://doi.org/10.4103/sja.SJA_559_18)",
      "Butcher, N. J., Monsour, A., Mew, E. J., Chan, A.-W., Moher, D., Mayo-Wilson, E., Terwee, C. B., Chee-A-Tow, A., Baba, A., Gavin, F., Grimshaw, J. M., Kelly, L. E., Saeed, L., Thabane, L., Askie, L., Smith, M., Farid-Kapadia, M., Williamson, P. R., Szatmari, P., … Offringa, M. (2022). Guidelines for reporting outcomes in trial reports: The CONSORT-outcomes 2022 extension: The CONSORT-outcomes 2022 extension. JAMA: The Journal of the American Medical Association, 328(22), 2252–2264. [https://doi.org/10.1001/jama.2022.21022](https://doi.org/10.1001/jama.2022.21022)",
      "Moher, D., Hopewell, S., Schulz, K. F., Montori, V., Gøtzsche, P. C., Devereaux, P. J., Elbourne, D., Egger, M., Altman, D. G., & Consolidated Standards of Reporting Trials Group. (2010). CONSORT 2010 Explanation and Elaboration: Updated guidelines for reporting parallel group randomised trials. Journal of Clinical Epidemiology, 63(8), e1-37. [https://doi.org/10.1016/j.jclinepi.2010.03.004](https://doi.org/10.1016/j.jclinepi.2010.03.004)"
    ]
  }
];
