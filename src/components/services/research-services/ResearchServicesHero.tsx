import React from 'react';

interface FeatureItem {
  text: string;
  highlightWords?: string[]; // Optional words to color blue or bold
}

interface ResearchHeroProps {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  imageUrl?: string;
  features?: FeatureItem[];
  brochureUrl?: string;
}

export const ResearchServicesHero: React.FC<ResearchHeroProps> = ({
  title = "Research Services: Integrating Scientific Rigor and Innovation with Precision and Insight",
  subtitle = "Delivering end-to-end scientific research support solutions that combine methodological excellence, domain expertise, and global compliance standards to drive impactful, high-quality outcomes.",
  paragraphs = [
    "Selecting the proper research partner establishes whether your work meets publication standards, regulatory compliance, and global credibility. At Pubrica, we combine scientific rigor, methodological integrity, and domain expertise to deliver outputs that are accurate, reproducible, and impactful.",
    "Our team of PhD-qualified medical writers, biostatisticians, data scientists, and subject matter experts, every project will utilize either PRISMA, Cochrane, PROSPERO, JBI, or any other globally recognized framework. We have extensive experience from academic research, clinical trials, bioinformatics, healthcare, pharma, and biotech, ensuring we can help you go from concept to published with confidence."
  ],
  imageUrl = "/images/research-microscope.jpg", // Replace with your public asset path
  features = [
    { text: "15+ years of global experience in delivering high-quality academic, clinical, and healthcare research solutions." },
    { text: "5,000+ completed projects including systematic reviews, meta-analyses, bioinformatics studies, and clinical trial analyses." },
    { text: "Team of 30+ PhD-qualified experts in medical writing, biostatistics, AI & ML research, epidemiology, and clinical sciences." },
    { text: "Proven track record in working with top universities, global CROs, pharma, biotech, and medical device companies." },
    { text: "End-to-end support from novelty & gap identification to data sourcing, protocol development, manuscript writing, peer review, and journal submission." },
    { text: "Advanced capabilities in statistical programming (SAS, R, SPSS), AI-driven data analysis, and bioinformatics for proteomics and genomics research." },
    { text: "Publication success assistance in high-impact factor journals, ensuring methodological accuracy, compliance, and transparency." },
    { text: "Dedicated project coordinators for personalized support and seamless communication throughout the project." },
    { text: "Commitment to originality with plagiarism and AI-content checks, ensuring authenticity and academic integrity." }
  ],
  brochureUrl = "#"
}) => {
  
  // Helper function to dynamically add styling to specific terms if needed
  // For standard use, it falls back to rendering the clean text string.
  const renderFeatureText = (item: FeatureItem) => {
    return <span className="text-gray-700 text-[15px] leading-relaxed">{item.text}</span>;
  };

  return (
    <section className="w-full bg-[#f4f9fc] py-12 px-6 md:px-12 lg:px-24 font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Headings */}
        <header className="mb-8">
          <h1 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-4 leading-snug">
            {title}
          </h1>
          <p className="text-[#2c5c6c] text-base md:text-lg font-medium max-w-5xl leading-relaxed">
            {subtitle}
          </p>
        </header>

        {/* Content Body & Image Column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Text Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-gray-700 text-[15px] leading-relaxed">
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* Decorative Image Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative">
              {/* Dark Green Background Card Frame */}
              <div className="absolute inset-0 bg-[#0c3434] rounded-xl transform translate-x-4 translate-y-4 w-[320px] h-[220px] md:w-[380px] md:h-[260px]" />
              
              {/* Actual Image foreground */}
              <div className="relative bg-white p-2 rounded-xl shadow-lg w-[320px] h-[220px] md:w-[380px] md:h-[260px] overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt="Scientist analyzing samples using a laboratory microscope" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature List Section */}
        <div className="mt-10 mb-8 max-w-5xl">
          <ul className="space-y-3.5">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                {/* Square Red Bullet Point */}
                <span className="inline-block w-1.5 h-1.5 bg-[#b00000] rounded-sm mt-2 flex-shrink-0" />
                {renderFeatureText(item)}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <a
            href={brochureUrl}
            className="inline-block bg-[#b00000] hover:bg-[#900000] text-white font-semibold px-7 py-3 rounded-full shadow-md transition-colors duration-200 text-sm tracking-wide"
          >
            View Brochure
          </a>
        </div>

      </div>
    </section>
  );
};

export default ResearchServicesHero;