import AlternativeSupportOptions from "@/components/Home/AlternativeSupportOptions";
import HeroSub from "@/components/SharedComponents/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Opțiuni de sprijin alternativ | SafeSpace",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Acasă" },
    { href: "/alternative-support-options", text: "Opțiuni de sprijin alternativ" },
  ];
  return (
    <>
      <HeroSub
        title="Prețuri"
        description="Indiferent dacă ești o persoană fizică, o echipă mică sau o organizație în creștere, avem un plan potrivit nevoilor tale."
        breadcrumbLinks={breadcrumbLinks}
      />
      <AlternativeSupportOptions />
    </>
  );
};

export default page;
