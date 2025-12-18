import Pricing from "@/components/Home/Pricing";
import HeroSub from "@/components/SharedComponents/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Prețuri | SafeSpace",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Acasă" },
    { href: "/pricing", text: "Prețuri" },
  ];
  return (
    <>
      <HeroSub
        title="Prețuri"
        description="Indiferent dacă ești o persoană fizică, o echipă mică sau o organizație în creștere, avem un plan potrivit nevoilor tale."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Pricing />
    </>
  );
};

export default page;
