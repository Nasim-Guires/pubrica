import ProofreadingHeroSection from "@/components/services/editing-and-translation/proofreading/ProofreadingHeroSection";
import ProofreadingProcessAndTypes from "@/components/services/editing-and-translation/proofreading/ProofreadingProcessAndTypes";
import PubricaServicesAndAudience from "@/components/services/editing-and-translation/proofreading/ProofreadingServicesAndAudience";
import PubricaProofreadingDetails from "@/components/services/editing-and-translation/proofreading/PubricaProofreadingDetails";
import TestimonialsAndFAQ from "@/components/services/editing-and-translation/proofreading/TestimonialsAndFAQ";


const page = () => {
  return (
    <>
      <ProofreadingHeroSection />
      <PubricaServicesAndAudience />
      <ProofreadingProcessAndTypes />
      <PubricaProofreadingDetails />
      <TestimonialsAndFAQ/>
    </>
  );
};

export default page;
