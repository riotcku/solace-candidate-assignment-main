"use client";

import SectionContainer from "@/app/components/SectionContainer";
import AdvocatesPage from "@/app/pages/advocates";

export default function Home() {
  return (
    <main className="text-charcoal">
      <SectionContainer className="pb-4 bg-solace-light-green flex flex-row align-center">
        <span className="text-2xl font-semibold">Solace Advocates Search</span>
      </SectionContainer>
      <AdvocatesPage/>
    </main>
  );
}
