import { PhysicianServicesList } from "@/components/services/physician-writing-services/PhysicianServicesList";
import { PhysicianWhoWeServe } from "@/components/services/physician-writing-services/PhysicianWhoWeServe";
import { PhysicianWritingExtensions } from "@/components/services/physician-writing-services/PhysicianWritingExtensions";
import { PhysicianWritingHero } from "@/components/services/physician-writing-services/PhysicianWritingHero";
import { TherapeuticAndComplianceSpecialties } from "@/components/services/physician-writing-services/TherapeuticAndComplianceSpecialties";
import React from "react";

const page = () => {
  return (
    <>
      <PhysicianWritingHero />
      <PhysicianServicesList/>
      <PhysicianWhoWeServe/>
      <TherapeuticAndComplianceSpecialties/>
      <PhysicianWritingExtensions/>
    </>
  );
};

export default page;
