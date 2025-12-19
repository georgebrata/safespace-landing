import React from "react";
import type { Metadata } from "next";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { VolunteerRegistrationForm } from "@/components/Volunteer/VolunteerRegistrationForm";

export const metadata: Metadata = {
  title: "Voluntar",
  description:
    "Înscrie-te ca voluntar SafeSpace dacă ești avocat sau psiholog. Profilul va fi verificat manual înainte de publicare.",
  alternates: { canonical: "/voluntar" },
};

export default function VoluntarPage() {
  const breadcrumbLinks = [
    { href: "/", text: "Acasă" },
    { href: "/voluntar", text: "Voluntar" },
  ];

  return (
    <>
      <HeroSub
        title="Voluntar"
        description="Înscriere voluntari"
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode pb-24">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <h1 className="text-midnight_text dark:text-white mb-4">
                Înscriere
              </h1>
              <p className="text-17 text-muted dark:text-white dark:text-opacity-70">
                Dacă ești <span className="font-semibold">avocat</span> sau{" "}
                <span className="font-semibold">psiholog</span> și vrei sa faci voluntariat 100% remote, te invităm să te înscrii în platforma SafeSpace.
              </p>
              <p className="mt-4 text-17 text-muted dark:text-white dark:text-opacity-70">
                Înscrierea și folosirea platformei este complet gratuită. Profilul tău va fi marcat ca{" "}
                <span className="font-semibold">Pending</span> până la verificarea
                manuală a acreditărilor.
              </p>
              <p className="mt-4 text-17 text-muted dark:text-white dark:text-opacity-70">
                După verificare, profilul tău va fi afișat public și vei putea începe să oferi suport pentru victimele care au nevoie.
              </p>
              <p className="mt-4 text-17 text-muted dark:text-white dark:text-opacity-70">
              Platforma contorizează automat numărul total de ore de suport oferite de voluntari iar la final de lună îți trimite pe email un certificat de voluntariat cu numărul de ore pe care le-ai <i>donat</i> în luna respectivă.
              </p>
            </div>
            <div className="lg:col-span-7">
              <VolunteerRegistrationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

