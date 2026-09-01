import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import GuideLayout from '@/components/guides/GuideLayout';

export const metadata: Metadata = {
  title: 'Understanding Disability-Adjusted Life Year (DALY): A Comprehensive Overview - Pubrica',
  description:
    'A comprehensive overview of the Disability-Adjusted Life Year (DALY) — the equation, its comparison to QALY, and its use in public health research.',
};

const TOC = [
  { id: 'daly', label: 'DALY vs. QALY' },
  { id: 'medical', label: 'Medical Conditions Included in a DALY Score' },
  { id: 'how', label: 'How Can You Improve Your DALY Score?' },
  { id: 'why', label: 'Why Are DALYs Useful?' },
  { id: 'of', label: 'Limitations of DALY' },
  { id: 'conclusion', label: 'Conclusion' },
];

export default function DalyOverviewPage() {
  return (
    <GuideLayout
      title="Understanding Disability-Adjusted Life Year (DALY): A Comprehensive Overview"
      eyebrow="An Academy Guide"
      toc={TOC}
    >
      <p className="text-gray-600 leading-relaxed text-sm mb-4">
        The Disability-Adjusted Life Year (DALY) is an important measure in epidemiology and public health used to describe the total burden of disease. It includes the years of life lost (YLL) because of premature mortality and the years lived with disability (YLD), providing a summary measure of population health. DALY enables researchers, healthcare professionals, and policymakers to prioritize interventions, allocate resources, and monitor health outcomes globally.
        <sup className="text-[10px]">
          {' '}
          <a href="https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates/global-health-estimates-leading-causes-of-dalys" target="_blank" rel="noopener noreferrer" className="text-[#004d40]">[1]</a>
        </sup>
      </p>
      <p className="text-gray-600 leading-relaxed text-sm mb-6">
        Health interventions aim to prevent or mitigate DALYs, thereby maximizing the number of years a person spends in good health.
        <sup className="text-[10px]">
          {' '}
          <a href="http://ghcearegistry.org/orchard/the-daly" target="_blank" rel="noopener noreferrer" className="text-[#004d40]">[2]</a>
        </sup>
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-8">
        <h4 className="text-sm font-bold text-slate-900 mb-2">Equation Box</h4>
        <p className="text-gray-600 text-sm mb-2">Mathematically, a DALY is represented by the equation:</p>
        <p className="text-slate-800 font-mono text-sm font-semibold mb-3">DALY = YLL + YLD</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
          <li>YLL is derived from the number of deaths (n) multiplied by the standard life expectancy at the age of death (L1). This reflects lost life expectancy.</li>
          <li>YLD is derived from the number of new cases of a disease (I) multiplied by a disability weight (DW) multiplied by the average time a person would live with the disease until remission or death (L2). This measure reflects the loss of quality of life for an affected individual from injury or illness.</li>
        </ul>
      </div>

      <h2 id="daly" className="text-xl font-bold text-gray-900 mt-8 mb-4">DALY vs. QALY</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-4">
        DALY and the Quality-Adjusted Life Year (QALY) are two widely used health status measures that represent health outcomes with respect to the amount of time and quality of life experienced by individuals. The QALY was the first developed health status measure and is most used in more developed countries. A QALY can be described as a year of life lived in full health.
        <sup className="text-[10px]">
          {' '}
          <a href="http://ghcearegistry.org/orchard/the-daly" target="_blank" rel="noopener noreferrer" className="text-[#004d40]">[2]</a>,{' '}
          <a href="https://www.webmd.com/a-to-z-guides/what-is-daly" target="_blank" rel="noopener noreferrer" className="text-[#004d40]">[3]</a>
        </sup>
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
        <h4 className="text-sm font-bold text-slate-900 mb-2">Info Box</h4>
        <p className="text-gray-600 text-sm mb-2">Both metrics use a scale of 0&ndash;1 to represent the quality of life:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
          <li>QALY: 0 is equivalent to death; 1 represents perfect health.</li>
          <li>DALY: 0 represents perfect health; 1 equates to death.</li>
        </ul>
      </div>

      <p className="text-gray-600 leading-relaxed text-sm mb-2">
        In this way, a QALY indicates the number of years in full health gained, while a DALY indicates the number of years in full health lost. It is for this reason that health interventions tend to aim to maximize QALYs while aiming to minimize DALYs.
      </p>
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        One final note is that the QALY model typically uses preference-based weights, while the DALY typically uses standardized weights for the levels of disability. This difference makes the DALY an effective measure for comparing disease burdens between countries, especially in developing countries.
      </p>

      <h2 id="medical" className="text-xl font-bold text-gray-900 mt-8 mb-4">What Medical Conditions and Disabilities Are Included in a DALY Score?</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">
        DALY encompasses a broad range of health conditions, injuries, and disabilities that affect a given population when it generates a score. These include:
        <sup className="text-[10px]">
          {' '}
          <a href="https://www.webmd.com/a-to-z-guides/what-is-daly" target="_blank" rel="noopener noreferrer" className="text-[#004d40]">[3]</a>
        </sup>
      </p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-4">
        <li>Lifestyle-related health conditions, including diabetes, heart disease, cancer, and high cholesterol</li>
        <li>Birth defects and age-related, gene-related health conditions such as Alzheimer&rsquo;s</li>
        <li>Pregnancy and pregnancy-related conditions</li>
        <li>Nutritional deficiencies</li>
        <li>Physical disability such as blindness or deafness</li>
        <li>Physical violence and injuries due to road accidents</li>
        <li>Substance abuse</li>
        <li>Mental health conditions such as anxiety or depression</li>
      </ul>
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        This wide coverage makes DALY a robust disease impact measurement tool for health intervention assessment and preventive healthcare evaluation.
      </p>

      <h2 id="how" className="text-xl font-bold text-gray-900 mt-8 mb-4">How Can You Improve Your DALY Score?</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">Research suggests that you can increase the total years lived in good health and reduce the overall burden of disease by:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-8">
        <li>Reducing your body mass index (BMI), a measure of body fat based on height and weight.</li>
        <li>Cutting back or quitting smoking.</li>
        <li>Cutting back or quitting alcohol.</li>
        <li>Improving physical activity and exercise.</li>
      </ul>

      <h2 id="why" className="text-xl font-bold text-gray-900 mt-8 mb-4">Why Are DALYs Useful?</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">Investigating the burden of disease may clarify:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-8">
        <li>Primary causes of death by age, sex, and disease</li>
        <li>Causes of death in different global regions</li>
        <li>Number of people affected by disease and disability by geography</li>
        <li>Number of people made ill every year, locally and globally</li>
        <li>What causes populations to lose good health and full, productive lives</li>
      </ul>

      <h2 id="of" className="text-xl font-bold text-gray-900 mt-8 mb-4">Are There Any Limitations to DALY?</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        DALY uses just one number to capture all costs and losses from diseases or disabilities, but it might not capture the whole picture. That&rsquo;s because no disease or disability is the same, nor is a person&rsquo;s capacity to cope with them. To illustrate, having asthma for a few years is not the same as living with schizophrenia. This is challenging to calculate, and one must consider the social determinants of various international populations&rsquo; health outcomes.
      </p>

      <h2 id="conclusion" className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">
        Disability-Adjusted Life Years (DALY) is a measure of disease burden that includes early death together with years lived with disability. Effectively, it helps public health policymakers and researchers prioritize interventions and directions for health policy and resource allocation. While it has its shortcomings, it is ultimately a valuable and practical outcome for evidence-based public health planning to monitor global health.
      </p>
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        Need help understanding Disability-Adjusted Life Year (DALY) for your own research? Our Pubrica consultants are here to guide you &mdash;{' '}
        <Link href="/order-now" className="text-blue-600 no-underline hover:no-underline">Get Expert Publishing Support</Link> or{' '}
        <Link href="/contact" className="text-blue-600 no-underline hover:no-underline">Schedule a Free Consultation</Link>.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">References</h2>
      <ol className="list-decimal pl-5 space-y-2 text-gray-600 text-xs">
        <li>
          Global health estimates: Leading causes of DALYs. Who.int.{' '}
          <a href="https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates/global-health-estimates-leading-causes-of-dalys" target="_blank" rel="noopener noreferrer" className="text-[#004d40] underline">
            who.int
          </a>
        </li>
        <li>
          Global health CEA &ndash; the DALY. Ghcearegistry.org.{' '}
          <a href="http://ghcearegistry.org/orchard/the-daly" target="_blank" rel="noopener noreferrer" className="text-[#004d40] underline">
            ghcearegistry.org
          </a>
        </li>
        <li>
          Sreenivas, S. (2023, January 19). What is DALY?{' '}
          <a href="https://www.webmd.com/a-to-z-guides/what-is-daly" target="_blank" rel="noopener noreferrer" className="text-[#004d40] underline">
            webmd.com
          </a>
        </li>
      </ol>
    </GuideLayout>
  );
}
