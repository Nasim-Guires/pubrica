"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

interface SectionItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

const pubricaData: SectionItem[] = [
    {
        id: "publishing-support-publishers",
        title: "Publishing Support Services for Publishers",
        content: (
            <div className="space-y-4">
                <p>
                    At Pubrica, we offer a wide range of value-added publishing support services designed to assist publishers in managing the complexities of journal publication. Our services help publishers streamline their processes and reach the right audience for successful dissemination of content. With over 200 academic luminaries and industry veterans in Science, Technology, Engineering, Mathematics (STEM), and medicine, covering 170 research topics, Pubrica delivers succinct, structured, cohesive, and collated content, ensuring you reach the right audience effectively.
                </p>

                <p className="font-bold text-[18px]">Our Publishing Support Services Include:</p>

                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Peer Review Services:</p>
                        <p>Comprehensive peer review management, ensuring the quality and integrity of published research.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Editorial Services:</p>
                        <p>Professional editing and proofreading to enhance the clarity, accuracy, and readability of manuscripts.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Publishing Services:</p>
                        <p>Assistance with the entire publishing process, from manuscript submission to final publication.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Business Development Services:</p>
                        <p>Strategies and support for expanding reach and improving the business aspects of publishing.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Why Choose Pubrica for Publishing Support?</p>

                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Expert Team:</p>
                        <p>Over 200 academic luminaries and industry veterans in Science, Technology, Engineering, Mathematics (STEM), and medicine.</p>
                        <p>Expertise across 170 research topics, ensuring a deep understanding of various fields.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Quality Content:</p>
                        <p>We deliver succinct, structured, cohesive, and collated content, enhancing the impact and readability of published research.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Targeted Reach:</p>
                        <p>Our services help publishers effectively reach their target audience, increasing the visibility and success of their publications.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Streamlined Processes:</p>
                        <p>Simplify the complex process of journal publication with our end-to-end support, from peer review to business development.</p>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for comprehensive publishing support services that enhance the quality, reach, and success of your journal publications.
                </p>
            </div>
        ),
    },
    {
        id: "heor-services",
        title: "Health Economics and Outcomes Research (HEOR)",
        content: (
            <div className="space-y-4">
                <p>
                    At Pubrica, we offer specialized services in Health Economics and Outcomes Research (HEOR) to support healthcare decision-making and policy development. Our expert team provides comprehensive analyses and studies to demonstrate the value and impact of healthcare interventions.
                </p>

                <p className="font-bold text-[18px]">Our HEOR Services Include:</p>

                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Cost-Effectiveness Analysis:</p>
                        <p>Rigorous evaluation of the cost and benefits of healthcare interventions to determine their economic value and inform resource allocation decisions.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Health Technology Assessment (HTA):</p>
                        <p>In-depth assessment of healthcare technologies to evaluate their clinical effectiveness, cost-effectiveness, and broader impact on healthcare systems.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Real-World Evidence (RWE) Studies:</p>
                        <p>Collection and analysis of real-world data to provide insights into the effectiveness, safety, and value of healthcare interventions in everyday clinical practice.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Quality of Life Studies:</p>
                        <p>Comprehensive studies assessing the impact of healthcare interventions on patients’ quality of life, providing valuable information for patient-centered care and decision-making.</p>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for expert HEOR services that provide robust and actionable insights, helping you demonstrate the value of healthcare interventions and make informed decisions.
                </p>
            </div>
        ),
    },
    {
        id: "new-product-discovery",
        title: "New Product Discovery and Development",
        content: (
            <div className="space-y-4">
                <p>
                    At Pubrica, we understand that process development requires a dynamic and innovative approach to create high-quality products while minimizing risk and meeting stringent regulatory requirements. Our comprehensive strategy helps clients enhance their chances of success, ensuring efficient and effective outcomes.
                </p>

                <p className="font-bold text-[18px]">Our Approach to Product Development:</p>

                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Risk Mitigation:</p>
                        <p>Thoughtful product development reduces project risks, promotes a robust and adaptable manufacturing process, and ensures the consistent delivery of high-quality products.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Regulatory Compliance:</p>
                        <p>We ensure all products meet stringent regulatory requirements, adapting to the ever-changing needs of the commercial world.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Timely Delivery:</p>
                        <p>Our process is designed to deliver products on target, on budget, and on schedule, fulfilling the expectations of businesses and stakeholders.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Our Offerings Include:</p>

                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Drug and Molecular Research:</p>
                        <p>Conducting advanced research to discover new drugs and molecular compounds.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Disease Process Insights:</p>
                        <p>Providing new insights into disease processes, enabling the design of products to stop or reverse disease effects.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Active Substance Research:</p>
                        <p>Investigating active substances to uncover new applications and technological advances.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Scientific Discovery:</p>
                        <p>Exploring new scientific knowledge that leads to innovative applications and breakthroughs.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Scientific Discovery and Intelligence Services</p>
                <p>
                    Our scientific PhD research team is dedicated to answering your most pressing questions and supporting your research initiatives. We assist in formulating questions, developing hypotheses, testing predictions, and conducting thorough analyses.
                </p>

                <p className="font-bold text-[18px]">Our Scientific Discovery and Intelligence Services Include:</p>

                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Identification of Novel Research Opportunities:</p>
                        <p>Discovering new areas for research and development to drive innovation.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Scientific Data Mining:</p>
                        <p>Extracting valuable insights from vast datasets to inform research and development.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Competitive Intelligence and Benchmarking:</p>
                        <p>Analyzing industry trends and benchmarking against competitors to stay ahead in the market.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Trend Analysis and Forecasting:</p>
                        <p>Conducting trend analysis and forecasting to predict future developments and opportunities.</p>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for your new product discovery and development needs. Our expert team and innovative approach ensure the creation of high-quality products that meet regulatory standards and commercial demands.
                </p>
            </div>
        ),
    },
    {
        id: "cme-content-development",
        title: "Continuing Medical Education (CME) Content Development",
        content: (
            <div className="space-y-4">
                <p>
                    At Pubrica, we specialize in developing high-quality Continuing Medical Education (CME) content for a wide range of healthcare and life science industries. Our services cater to pharmaceutical companies, medical device manufacturers, clinics, private practices, CROs, healthcare systems, biotechnology companies, nutraceutical and dietary supplement companies, health and wellness product providers, and other life science industries.
                </p>

                <p className="font-bold text-[18px]">Our CME Content Development Services Target:</p>

                <div>
                    <p className="font-bold text-[17px]">Healthcare Professionals:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                        <li>Doctors and Physicians across all specialties</li>
                        <li>Chiropractors</li>
                        <li>Biomedical Laboratory Scientists</li>
                        <li>Professors and Principal Investigators</li>
                        <li>Executives and Purchasing Personnel</li>
                        <li>Educators, Nurses, and Therapists</li>
                        <li>Pharmacists, Dentists, and Allied Healthcare Professionals</li>
                    </ul>
                </div>

                <p className="font-bold text-[18px] pt-2">Our Offerings Include:</p>

                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Evidence-Based Medical and Clinical Review Articles:</p>
                        <p>Providing comprehensive and scholarly reviews of current medical and clinical practices.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Medical Infographics:</p>
                        <p>Summarizing the latest guidelines and clinical information in an easy-to-understand visual format.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Clinical Case Reports:</p>
                        <p>Detailed reports on clinical cases across various therapeutic areas including radiology, cardiology, orthopaedics, emergency medicine, neurology, internal medicine, nuclear medicine, oncology, OB-GYN, otolaryngology, and more.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Why Choose Pubrica for CME Content Development?</p>

                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Expertise and Quality:</p>
                        <p>Our firm has a unique process for developing instructional content that ensures high quality and satisfaction of client needs. We work with subject matter experts, content authors, professors, teachers, and doctors who are PhD scientists and clinicians.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Comprehensive Approach:</p>
                        <p>We provide tailored CME content that meets the educational needs of various healthcare professionals, ensuring it is evidence-based and peer-reviewed.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Strong Industry Relationships:</p>
                        <p>As a leading supplier of medical and educational content, we have developed excellent working relationships with academic institutes, universities, and healthcare professionals.</p>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for your CME content development needs and benefit from our expertise, quality, and comprehensive approach to continuing medical education.
                </p>
            </div>
        ),
    },
    {
        id: "branding-marketing-1",
        title: "Branding Marketing & Communication content Development",
        content: (
            <div className="space-y-4">
                <p>
                    At Pubrica, we offer comprehensive marketing and branding content development services tailored to the needs of pharmaceutical companies, medical device manufacturers, clinics, private practices, CROs, healthcare systems, biotechnology companies, nutraceutical and dietary supplement companies, health and wellness product providers, and other life science industries.
                </p>

                <p className="font-bold text-[18px]">Our Services Target Diverse Audiences:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Doctors and Physicians across all specialties</li>
                    <li>Chiropractors</li>
                    <li>Biomedical Laboratory Scientists</li>
                    <li>Professors and Principal Investigators</li>
                    <li>Executives and Purchasing Personnel</li>
                    <li>Educators, Nurses, and Therapists</li>
                    <li>Pharmacists, Dentists, and Allied Healthcare Professionals</li>
                </ul>

                <p className="font-bold text-[18px] pt-2">Our Content Development Offerings Include:</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Blog Posts:</p>
                        <p>Engaging and informative articles tailored to your target audience.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Booklets and Brochures:</p>
                        <p>Comprehensive and visually appealing informational materials.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">E-Books:</p>
                        <p>In-depth digital publications on various medical and scientific topics.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Flyers and Landing Pages:</p>
                        <p>Eye-catching and effective promotional materials for online and offline use.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Newsletters:</p>
                        <p>Regular updates and news tailored to your audience’s interests.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">PowerPoint Presentations:</p>
                        <p>Professional and impactful presentations for conferences and meetings.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Press Releases:</p>
                        <p>Well-crafted announcements to communicate your latest developments.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Social Media Posts:</p>
                        <p>Engaging content for various social media platforms to boost your online presence.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Web Content:</p>
                        <p>SEO-optimized content for your website to attract and retain visitors.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Testimonials and Video Scripts:</p>
                        <p>Compelling narratives and scripts to highlight your success stories and offerings.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Therapeutic Areas Covered:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Radiology</li>
                    <li>Cardiology</li>
                    <li>Orthopaedics</li>
                    <li>Emergency Medicine</li>
                    <li>Neurology</li>
                    <li>Internal Medicine</li>
                    <li>Nuclear Medicine</li>
                    <li>Oncology</li>
                    <li>OB-GYN</li>
                    <li>Otolaryngology</li>
                    <li>And many more</li>
                </ul>

                <p className="font-bold text-[18px] pt-2">Why Choose Pubrica for Marketing and Branding Content?</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Expertise and Quality:</p>
                        <p>Our in-house team of dedicated medical writers analyzes your healthcare offerings, target audiences, and marketing needs to create meaningful, SEO-optimized content.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Comprehensive Approach:</p>
                        <p>We offer a wide range of content types, ensuring that all your branding and marketing communication needs are met.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Established Process:</p>
                        <p>Over the years, we have developed a unique process for creating instructional content that guarantees client satisfaction and high-quality output.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Marketing and Medical Communication Services:</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Medical Marketing Strategy:</p>
                        <p>Developing strategic plans to effectively market your medical products and services.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Product Launch and Branding:</p>
                        <p>Comprehensive support for launching new products and building strong brand identities.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Digital Marketing and Social Media Management:</p>
                        <p>Managing your digital presence and creating impactful social media campaigns.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Content Creation and Campaign Management:</p>
                        <p>Crafting compelling content and managing marketing campaigns to achieve your goals.</p>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for expert branding and marketing communication content development that enhances your visibility, engages your audience, and drives success in the healthcare and life science industries.
                </p>
            </div>
        ),
    },
    {
        id: "branding-marketing-2",
        title: "Branding Marketing & Communication content Development",
        content: (
            <div className="space-y-4">
                <p>
                    At Pubrica, we offer comprehensive marketing and branding content development services tailored to the needs of pharmaceutical companies, medical device manufacturers, clinics, private practices, CROs, healthcare systems, biotechnology companies, nutraceutical and dietary supplement companies, health and wellness product providers, and other life science industries.
                </p>

                <p className="font-bold text-[18px]">Our Services Target Diverse Audiences:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Doctors and Physicians across all specialties</li>
                    <li>Chiropractors</li>
                    <li>Biomedical Laboratory Scientists</li>
                    <li>Professors and Principal Investigators</li>
                    <li>Executives and Purchasing Personnel</li>
                    <li>Educators, Nurses, and Therapists</li>
                    <li>Pharmacists, Dentists, and Allied Healthcare Professionals</li>
                </ul>

                <p className="font-bold text-[18px] pt-2">Our Content Development Offerings Include:</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Blog Posts:</p>
                        <p>Engaging and informative articles tailored to your target audience.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Booklets and Brochures:</p>
                        <p>Comprehensive and visually appealing informational materials.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">E-Books:</p>
                        <p>In-depth digital publications on various medical and scientific topics.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Flyers and Landing Pages:</p>
                        <p>Eye-catching and effective promotional materials for online and offline use.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Newsletters:</p>
                        <p>Regular updates and news tailored to your audience’s interests.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">PowerPoint Presentations:</p>
                        <p>Professional and impactful presentations for conferences and meetings.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Press Releases:</p>
                        <p>Well-crafted announcements to communicate your latest developments.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Social Media Posts:</p>
                        <p>Engaging content for various social media platforms to boost your online presence.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Web Content:</p>
                        <p>SEO-optimized content for your website to attract and retain visitors.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Testimonials and Video Scripts:</p>
                        <p>Compelling narratives and scripts to highlight your success stories and offerings.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Therapeutic Areas Covered:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Radiology</li>
                    <li>Cardiology</li>
                    <li>Orthopaedics</li>
                    <li>Emergency Medicine</li>
                    <li>Neurology</li>
                    <li>Internal Medicine</li>
                    <li>Nuclear Medicine</li>
                    <li>Oncology</li>
                    <li>OB-GYN</li>
                    <li>Otolaryngology</li>
                    <li>And many more</li>
                </ul>

                <p className="font-bold text-[18px] pt-2">Why Choose Pubrica for Marketing and Branding Content?</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Expertise and Quality:</p>
                        <p>Our in-house team of dedicated medical writers analyzes your healthcare offerings, target audiences, and marketing needs to create meaningful, SEO-optimized content.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Comprehensive Approach:</p>
                        <p>We offer a wide range of content types, ensuring that all your branding and marketing communication needs are met.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Established Process:</p>
                        <p>Over the years, we have developed a unique process for creating instructional content that guarantees client satisfaction and high-quality output.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Marketing and Medical Communication Services:</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Medical Marketing Strategy:</p>
                        <p>Developing strategic plans to effectively market your medical products and services.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Product Launch and Branding:</p>
                        <p>Comprehensive support for launching new products and building strong brand identities.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Digital Marketing and Social Media Management:</p>
                        <p>Managing your digital presence and creating impactful social media campaigns.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Content Creation and Campaign Management:</p>
                        <p>Crafting compelling content and managing marketing campaigns to achieve your goals.</p>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for expert branding and marketing communication content development that enhances your visibility, engages your audience, and drives success in the healthcare and life science industries.
                </p>
            </div>
        ),
    },
    {
        id: "patient-education",
        title: "Patient Education",
        content: (
            <div className="space-y-4">
                <p className="font-bold text-[18px]">Tailored Content for Healthcare Professionals</p>
                <p>
                    Pubrica provides comprehensive marketing and branding content development services to pharmaceutical, medical device, nutraceutical, and life science industries. Our peer-reviewed content targets a wide range of healthcare professionals, including doctors, educators, nurses, therapists, pharmacists, dentists, and other allied healthcare professionals.
                </p>

                <p className="font-bold text-[18px] pt-2">Services Offered Under Patient Education:</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Product Labels:</p>
                        <p>Clear and informative labels for pharmaceuticals and medical devices.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Medical Education and Awareness Content:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Disease and drug information</li>
                            <li>Patient guides and brochures</li>
                            <li>Educational materials for various therapeutic areas</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Product Descriptions:</p>
                        <p className="mb-1">Detailed descriptions for products in therapeutic areas such as:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Radiology</li>
                            <li>Cardiology</li>
                            <li>Orthopaedics</li>
                            <li>Emergency Medicine</li>
                            <li>Neurology</li>
                            <li>Internal Medicine</li>
                            <li>Nuclear Medicine</li>
                            <li>Oncology</li>
                            <li>OB-GYN</li>
                            <li>Otolaryngology</li>
                        </ul>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for expert patient education content that enhances understanding, compliance, and engagement across the healthcare spectrum.
                </p>
            </div>
        ),
    },
    {
        id: "education-content-development",
        title: "Education Content Development",
        content: (
            <div className="space-y-4">
                <p className="font-bold text-[18px]">Comprehensive Services for Educational Content</p>
                <p>
                    Pubrica offers exceptional educational content development services to industries, educational institutions, software developers, and business executives worldwide. With a proven track record of providing high-quality academic content to national and international universities and institutes, we have honed a unique process that ensures client satisfaction and superior quality.
                </p>

                <p className="font-bold text-[18px] pt-2">Our Services under Educational Content Development:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Curriculum Development</li>
                    <li>eLearning Modules</li>
                    <li>Training Manuals and Guides</li>
                    <li>Workshop and Webinar Planning</li>
                </ul>

                <p className="font-bold text-[18px] pt-2">Expert Collaboration and Customized Solutions</p>
                <p>
                    As a leading educational content provider for academic institutes and universities, Pubrica has built strong working relationships with subject matter experts, content authors, professors, teachers, and other academic stakeholders. Our collaborative approach guarantees that your educational content is tailored to meet your specific needs, ensuring both accuracy and engagement.
                </p>

                <p className="font-bold text-[18px] pt-2">Why Choose Pubrica for Educational Content Development?</p>
                <div className="space-y-2">
                    <p><span className="font-bold">Proven Expertise:</span> Years of experience in delivering top-notch educational content to prestigious institutions.</p>
                    <p><span className="font-bold">Quality Assurance:</span> Rigorous processes to ensure that the content meets the highest standards of quality and relevance.</p>
                    <p><span className="font-bold">Collaborative Approach:</span> Strong partnerships with academic professionals to create content that is accurate, engaging, and effective.</p>
                    <p><span className="font-bold">Global Reach:</span> Serving clients worldwide with customized educational content solutions.</p>
                </div>

                <p className="pt-2">
                    Partner with Pubrica for your educational content development needs and experience the difference that expertise and quality can make.
                </p>
            </div>
        ),
    },
    {
        id: "translation-and-localization",
        title: "Translation and Localiation",
        content: (
            <div className="space-y-4">
                <p>
                    At Pubrica, we offer expert translation and localization services to ensure your medical and scientific content is accurately adapted for global audiences. Our services help you effectively communicate across languages and cultures, enhancing the reach and impact of your work.
                </p>

                <p className="font-bold text-[18px]">Our Translation and Localization Services Include:</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Multilingual Document Translation:</p>
                        <p>Professional translation of documents into multiple languages, ensuring accuracy and clarity in medical and scientific terminology.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Localization of Medical and Scientific Content:</p>
                        <p>Adapting your content to suit the cultural and linguistic nuances of target regions, making it relevant and accessible to local audiences.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Cross-Cultural Adaptation:</p>
                        <p>Adjusting content to meet the cultural expectations and sensitivities of different regions, ensuring effective communication and engagement.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Why Choose Pubrica for Translation and Localization?</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Expert Linguists:</p>
                        <p>Our team comprises experienced linguists with specialized knowledge in medical and scientific fields, ensuring precise and contextually accurate translations.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Quality Assurance:</p>
                        <p>Rigorous quality control processes to ensure high standards of accuracy and consistency across all translated content.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Cultural Sensitivity:</p>
                        <p>In-depth understanding of cultural nuances to effectively adapt content for diverse audiences, enhancing its relevance and impact.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Comprehensive Solutions:</p>
                        <p>From document translation to complete localization and cross-cultural adaptation, we offer end-to-end solutions tailored to your specific needs.</p>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for reliable and professional translation and localization services that help you communicate your medical and scientific content effectively across global markets.
                </p>
            </div>
        ),
    },
    {
        id: "ethics-and-compliance",
        title: "Ethics And Compliance",
        content: (
            <div className="space-y-4">
                <p>
                    At Pubrica, we provide comprehensive ethics and compliance services to ensure your research and publications adhere to the highest ethical standards and regulatory requirements. Our expert team is dedicated to maintaining integrity and compliance throughout your research process.
                </p>

                <p className="font-bold text-[18px]">Our Ethics and Compliance Services Include:</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Ethical Review Preparation:</p>
                        <p>Assisting in the preparation of documents and protocols for ethical review boards, ensuring all aspects of your research meet ethical guidelines.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Compliance Audits:</p>
                        <p>Conducting thorough audits to ensure compliance with regulatory standards and guidelines, identifying and addressing any potential issues.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Adherence to International Guidelines and Standards:</p>
                        <p>Ensuring your research and publications comply with international ethical guidelines and standards, including ICJME, COPE, and ISMPP.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Why Choose Pubrica for Ethics and Compliance?</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Expert Guidance:</p>
                        <p>Our team comprises experts in ethical standards and compliance, providing you with accurate and up-to-date advice.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Thorough Assessments:</p>
                        <p>We conduct detailed assessments and audits to ensure all aspects of your research are ethically sound and compliant with regulations.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Comprehensive Support:</p>
                        <p>From preparing for ethical reviews to ensuring ongoing compliance, we offer end-to-end support tailored to your specific needs.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">International Standards:</p>
                        <p>We ensure adherence to global ethical guidelines and standards, enhancing the credibility and acceptance of your research.</p>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for professional ethics and compliance services that safeguard the integrity of your research and ensure adherence to the highest standards.
                </p>
            </div>
        ),
    },
    {
        id: "consulting-services",
        title: "Consulting Services",
        content: (
            <div className="space-y-4">
                <p>
                    At Pubrica, we offer expert consulting services to support your research, innovation, and business development needs. Our team of seasoned professionals provides strategic guidance and practical solutions to help you achieve your goals and drive success.
                </p>

                <p className="font-bold text-[18px]">Our Consulting Services Include:</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Strategic Research Consulting:</p>
                        <p>Providing expert advice on research strategies, helping you design and implement effective research projects that align with your objectives.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Innovation and Product Development:</p>
                        <p>Assisting in the development of innovative products and solutions, from initial concept to market-ready products, ensuring a robust and successful development process.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Market Research and Analysis:</p>
                        <p>Conducting comprehensive market research and analysis to provide insights into market trends, customer needs, and competitive landscapes, guiding your strategic decisions.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Business Development Support:</p>
                        <p>Offering support for business development activities, including identifying opportunities, creating growth strategies, and enhancing your market presence.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Why Choose Pubrica for Consulting Services?</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Expert Insight:</p>
                        <p>Our consultants are industry veterans with extensive experience in their respective fields, providing you with valuable insights and guidance.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Tailored Solutions:</p>
                        <p>We offer customized consulting services that are specifically designed to meet your unique needs and objectives.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Innovative Approach:</p>
                        <p>We leverage the latest trends and technologies to drive innovation and ensure the success of your projects.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Comprehensive Support:</p>
                        <p>From strategic planning to execution, we provide end-to-end support to help you achieve your research and business goals.</p>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for consulting services that deliver strategic insights, innovative solutions, and comprehensive support to drive your success in research and business development.
                </p>
            </div>
        ),
    },
    {
        id: "coding-and-algorithm-development",
        title: "Coding And Algorithm Development",
        content: (
            <div className="space-y-4">
                <p>
                    At Pubrica, we specialize in providing cutting-edge coding and algorithm development services to support your research and technological needs. Our team of experts develops tailored solutions that integrate advanced technologies to enhance your research capabilities and outcomes.
                </p>

                <p className="font-bold text-[18px]">Our Coding and Algorithm Development Services Include:</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Development of Custom Algorithms:</p>
                        <p>Creating bespoke algorithms designed to meet your specific research requirements, ensuring optimal performance and accuracy.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Machine Learning and AI Integration:</p>
                        <p>Implementing machine learning and artificial intelligence techniques to analyze complex data, automate processes, and derive meaningful insights.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Data Processing and Analysis Tools:</p>
                        <p>Developing robust tools for efficient data processing and analysis, enabling you to manage and interpret large datasets with ease.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Software Development for Research Applications:</p>
                        <p>Crafting specialized software solutions tailored for research applications, enhancing the functionality and efficiency of your research processes.</p>
                    </div>
                </div>

                <p className="font-bold text-[18px] pt-2">Why Choose Pubrica for Coding and Algorithm Development?</p>
                <div className="space-y-3">
                    <div>
                        <p className="font-bold text-[17px]">Expertise and Innovation:</p>
                        <p>Our team comprises skilled professionals with expertise in coding, machine learning, AI, and software development, bringing innovative solutions to your research.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Customized Solutions:</p>
                        <p>We provide tailored development services that are specifically designed to address your unique research challenges and objectives.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Advanced Technologies:</p>
                        <p>We leverage the latest technologies and methodologies to deliver cutting-edge solutions that enhance your research capabilities.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[17px]">Comprehensive Support:</p>
                        <p>From initial development to implementation and maintenance, we offer end-to-end support to ensure the success of your projects.</p>
                    </div>
                </div>

                <p className="pt-2">
                    Choose Pubrica for expert coding and algorithm development services that empower your research with advanced technologies and customized solutions.
                </p>
            </div>
        ),
    },
];

export default function PubricaServicesAccordion() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div className={`w-full max-w-5xl mx-auto p-4 bg-[#f4f4f4] ${poppins.className}`}>
            <div className="space-y-3">
                {pubricaData.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                        <div
                            key={item.id}
                            className="bg-white border border-[#8cc63f] rounded-none overflow-hidden transition-all duration-200"
                        >
                            {/* Accordion Header */}
                            <button
                                type="button"
                                onClick={() => toggleAccordion(item.id)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-[#0f4c5c] hover:bg-gray-50 focus:outline-none transition-colors"
                            >
                                <span className="text-[18px] sm:text-[20px] font-bold text-[#0c4a60]">
                                    {item.title}
                                </span>
                                <span className="text-[#8cc63f] text-2xl font-bold ml-4 select-none">
                                    {isOpen ? "−" : "+"}
                                </span>
                            </button>

                            {/* Accordion Body */}
                            {isOpen && (
                                <div className="px-6 pb-6 pt-2 border-t border-transparent text-[#333333] text-[16px] leading-relaxed">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <p className="mt-8 text-[16px] text-[#444444] leading-relaxed">
                Our goal is to enhance the visibility and impact of your medical device products and research, ensuring they not only meet the highest standards of safety and efficacy but also achieve significant market presence.
            </p>
        </div>
    );
}