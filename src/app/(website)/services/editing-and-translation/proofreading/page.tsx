import ProofreadingHeroSection from "@/components/services/editing-and-translation/proofreading/ProofreadingHeroSection";
import ProofreadingProcessAndTypes from "@/components/services/editing-and-translation/proofreading/ProofreadingProcessAndTypes";
import PubricaServicesAndAudience from "@/components/services/editing-and-translation/proofreading/ProofreadingServicesAndAudience";
import PubricaProofreadingDetails from "@/components/services/editing-and-translation/proofreading/PubricaProofreadingDetails";
import TestimonialsAndFAQ from "@/components/services/editing-and-translation/proofreading/TestimonialsAndFAQ";
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Expert Proofreading Service for Research Writing Help',
  description: 'Get expert help to refine your writing, remove language errors, and improve clarity so your documents look professional and easy to understand.',
  slug: '/services/editing-and-translation/proofreading',
});

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
