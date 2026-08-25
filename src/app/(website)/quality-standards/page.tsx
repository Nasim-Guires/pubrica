import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata: Metadata = {
  title: 'Quality Standards - Pubrica',
  description: 'Quality and ethical standards governing every Pubrica engagement — our mission, team roles, and quality guarantee.',
};

export default function QualityStandardsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Quality Standards', href: '/quality-standards' }]} />

      <section className="bg-[#1b2e2b] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-600 p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Quality and Ethical Standards</h1>
          <p className="text-sm md:text-base text-gray-300">
            Our mission is to help researchers get published and succeed in sharing their work with the world. We are committed to the highest standards of quality and ethics in every aspect of our service.
          </p>
        </div>
      </section>

      <div className="bg-white py-16 font-sans">
        <Container className="max-w-4xl prose prose-primary">
          <h2 className="text-xl font-bold text-gray-900 font-display mt-0 mb-4">Introduction and Objectives</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            PUBRICA is dedicated to instilling the values that underpin these guidelines within its workforce. As a mission-driven organization, our primary goal is to facilitate researchers in achieving publication success on a global scale. We are committed to integrating quality and ethical standards into every facet of our service delivery.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Mission of PUBRICA</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">
            PUBRICA&rsquo;s mission is centered on expediting, ensuring fairness, and enhancing the utility of research communication. Through our unique approach, we offer specialized services and technology to support researchers throughout their publication journey. Our distinctiveness in the industry is exemplified by:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li><strong>Professional Editors:</strong> All PUBRICA papers are meticulously edited by trained, full-time professional editors, ensuring consistent, top-tier quality for each manuscript.</li>
            <li><strong>Expert Team:</strong> Headquartered in the US, our team comprises over 250 US-trained researchers, providing research editing by experts with native English proficiency.</li>
            <li><strong>Customer-Centric Approach:</strong> Our Research Communication Partners offer personalized concierge support, ensuring a seamless experience for our clients.</li>
            <li><strong>Trust and Reputation:</strong> PUBRICA is the preferred partner for many of the world&rsquo;s leading research institutions, societies, and publishers, reflecting our commitment to ethical, high-quality services.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Our Team</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            PUBRICA&rsquo;s team encompasses Academic Editors, Academic Translation Advisors, Illustrators, Quality Control Supervisors, Formatting Specialists, Customer Support Specialists, and Research Communication Partners.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">Academic Editor (AE)</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">AEs play a crucial role in academic manuscript editing within their respective fields of study. Their responsibilities include:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-4">
            <li>Conducting primary editing on academic manuscripts to meet PUBRICA standards.</li>
            <li>Applying field-specific knowledge for high-quality editing aligned with customer and journal expectations.</li>
            <li>Collaborating with Customer Service to address customer inquiries and provide tailored manuscript service solutions.</li>
            <li>Utilizing PUBRICA&rsquo;s latest technology for efficient and high-quality edits.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            AEs are measured on submission-ready edited manuscripts delivered on time, timely and collegial solutions to customer problems, and going beyond expectations to meet customer needs.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">Academic Translation Advisor (ATA)</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">ATAs provide premium translation services.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">Research Communication Partner (RCP)</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">RCPs assist customers along the editing process, being the main contact for any service-related inquiries and guaranteeing customer contentment.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">Customer Support Representative (CSR)</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            CSRs act as the initial point of contact, offering excellent support in multiple languages. They interact closely with PUBRICA customers, providing expertise on our services, policies, and websites.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Quality Guarantee</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">
            PUBRICA stands behind a 100% satisfaction guarantee, ensuring dependable author services of the highest quality.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li><strong>Editing Guarantee:</strong> If a paper edited by PUBRICA is rejected due to English language errors, we will re-edit it for free.</li>
            <li><strong>Formatting Guarantee:</strong> We assure you that your paper will adhere to your intended journal&rsquo;s formatting guidelines, and should any problems arise, we&rsquo;ll reformat it at no extra cost.</li>
            <li><strong>Translation Guarantee:</strong> Every paper submitted for translation is eligible for a PUBRICA editing certificate, and we offer free re-editing if the English requires improvement.</li>
            <li><strong>Figure Preparation Guarantee:</strong> Formatted figures and tables meet journal requirements, and we resolve any issues for free.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Highest Levels of Customer Service</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            PUBRICA strives for the highest standards of customer experience, supporting authors in navigating our services, answering questions, restoring trust, and offering expertise throughout the publication process.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li><strong>Ethics:</strong> PUBRICA is deeply committed to ethical practices in its business and research. Policies and procedures are in place to ensure ethical behavior, and we actively discourage the use of services that lack transparency in writing or rewriting papers.</li>
            <li><strong>COPE Partners/Membership:</strong> PUBRICA and its parent company are Associate Corporate members of the Committee on Publication Ethics (COPE), aligning with COPE&rsquo;s principles to serve authors and publishers effectively.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Our Approach to Service Delivery</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li><strong>People:</strong> Trusting and valuing our team members; rigorously selecting based on experience and knowledge; investing in rigorous training for high standards.</li>
            <li><strong>Policies:</strong> Designed to maintain high quality and add value at every stage; providing consistency across papers with reasonable flexibility.</li>
            <li><strong>Procedures:</strong> Supporting customers and employees for consistently high-quality work; keeping procedures simple yet effective to avoid frustration.</li>
            <li><strong>Technology:</strong> Utilizing technology for fair and predictable distribution of work; tracking papers, meeting deadlines, and intelligently solving customer challenges.</li>
            <li><strong>Ethics:</strong> Outlining boundaries for staff operations based on ethical principles.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Partnerships</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            PUBRICA is a trusted name in scholarly publishing, working with reputable universities, institutions, journals, and publishers. We actively avoid partnerships with entities engaged in unethical practices and ensure our partners align with our ethical values. In conclusion, PUBRICA is unwavering in its commitment to quality, ethics, and customer satisfaction, striving to make a positive impact on the global research publication landscape.
          </p>
        </Container>
      </div>
    </>
  );
}
