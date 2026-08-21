import Breadcrumb from "@/components/seo/Breadcrumb";
import PublicationServicesGrid from "@/features/services/components/PublicationServicesGrid";
import ServiceHero from "@/features/services/components/ServiceHero";
import ServiceOverview from "@/features/services/components/ServiceOverview";
import ServiceRejectionTable from "@/features/services/components/ServiceRejectionTable";
import { PUBLICATION_SUPPORT_SERVICE } from "@/lib/data-service";
import TherapeuticAreasGrid from "@/features/services/components/TherapeuticAreasGrid";
import PublicationServices from "@/features/services/components/PublicationServices";
import PubricaResourceHub from "@/features/services/components/PubricaResourceHub";

const service = PUBLICATION_SUPPORT_SERVICE;

export const metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
        ]}
      />

      <ServiceHero service={service} />

      <ServiceOverview />
      <ServiceRejectionTable service={service} />
      <PublicationServicesGrid />
      <TherapeuticAreasGrid />
      <PublicationServices />
      <PubricaResourceHub />
    </>
  );
}