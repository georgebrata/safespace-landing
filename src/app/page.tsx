import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import PlatformFunctionalities from "@/components/Home/PlatformFunctionalities";
import PlatformBenefits from "@/components/Home/PlatformBenefits";
import HowItWorksVideo from "@/components/Home/HowItWorksVideo";
import MethodsToHandleAbuse from "@/components/Home/MethodsToHandleAbuse";
import PlatformProcessSteps from "@/components/Home/PlatformProcessSteps";
import JoinCommunity from "@/components/Home/JoinCommunity";
import BecomeVolunteer from "@/components/Home/BecomeVolunteer";
import AlternativeSupportOptions from "@/components/Home/AlternativeSupportOptions";

export const metadata: Metadata = {
  title: "SafeSpace",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <PlatformFunctionalities />
      <PlatformBenefits />
      <PlatformProcessSteps />
      {/* <HowItWorksVideo /> */}
      <MethodsToHandleAbuse />
      <BecomeVolunteer />
      <JoinCommunity />
      {/* <AlternativeSupportOptions /> */}
    </main>
  );
}
