import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import BecomeVolunteer from "@/components/Home/BecomeVolunteer";
import JoinCommunity from "@/components/Home/JoinCommunity";

export const metadata: Metadata = {
  title: "Contact | SafeSpace",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Acasă" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact"
        description="Suntem aici să te ajutăm. Scrie-ne și îți răspundem cât mai repede."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <BecomeVolunteer  />
      <JoinCommunity />
      {/* <Location /> */}
    </>
  );
};

export default page;
