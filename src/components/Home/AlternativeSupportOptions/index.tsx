"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Icon } from "@iconify/react";

const AlternativeSupportOptions = () => {
  type FeatureCell =
    | { kind: "text"; value: string }
    | { kind: "bool"; value: boolean };

  type PlanId = "national-emergency" | "brightsky" | "safespace";

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const featureRows: Array<{ id: string; label: string }> = [
    // keep ~10% of rows as bool icons
    { id: "always-available", label: "Disponibil 24/7" },

    // richer comparisons (text)
    { id: "cost", label: "Cost" },
    { id: "access", label: "Cum accesezi sprijinul" },
    { id: "personalization", label: "Personalizare" },
    { id: "specialization", label: "Specializare" },
    { id: "education", label: "Educație" },
    { id: "safety-plan", label: "Plan de siguranță" },
    { id: "local-resources", label: "Resurse locale / direcționare" },
    { id: "documentation", label: "Documentare" },
    { id: "privacy", label: "Confidențialitate & utilizare discretă" },
  ];

  const planFeatureMatrix: Record<PlanId, FeatureCell[]> = {
    "national-emergency": [
      { kind: "bool", value: true }, // 24/7
      { kind: "text", value: "Gratuit" },
      { kind: "text", value: "Apel telefonic" },
      { kind: "text", value: "Limitată" },
      { kind: "text", value: "Generalist" },
      { kind: "text", value: "Nu" },
      { kind: "text", value: "Instrucțiuni în timp real" },
      { kind: "text", value: "În funcție de instituție" },
      { kind: "text", value: "Nu" },
      { kind: "text", value: "Standard" },
    ],
    brightsky: [
      { kind: "bool", value: true }, // 24/7
      { kind: "text", value: "Gratuit" },
      { kind: "text", value: "Aplicație mobilă" },
      { kind: "text", value: "Limitată" },
      { kind: "text", value: "Nespecializat" },
      { kind: "text", value: "Da" },
      { kind: "text", value: "Da" },
      { kind: "text", value: "Parțial" },
      { kind: "text", value: "Da" },
      { kind: "text", value: "Bună" },
    ],
    safespace: [
      { kind: "bool", value: true }, // 24/7
      { kind: "text", value: "Gratuit" },
      { kind: "text", value: "Aplicație + resurse online" },
      { kind: "text", value: "Da" },
      { kind: "text", value: "Da" },
      { kind: "text", value: "Da" },
      { kind: "text", value: "Da" },
      { kind: "text", value: "Da" },
      { kind: "text", value: "Da" },
      { kind: "text", value: "Ridicată" },
    ],
  };

  const plans: Array<{
    id: PlanId;
    title: string;
  }> = [
    { id: "national-emergency", title: "Numere naționale de urgență" },
    { id: "brightsky", title: "Aplicatia BrightSky" },
    { id: "safespace", title: "Platforma SafeSpace" },
  ];

  const renderFeatureCell = (cell: FeatureCell): JSX.Element => {
    if (cell.kind === "text") {
      return <span>{cell.value}</span>;
    }

    const isEnabled = cell.value;
    const icon = isEnabled ? "solar:unread-outline" : "iconamoon:close-fill";
    const badgeClass = isEnabled ? "bg-blue-500" : "bg-danger";

    return (
      <span className={`w-5 h-5 ${badgeClass} rounded-full flex items-center justify-center`}>
        <Icon icon={icon} width="18" height="18" className="text-white" />
      </span>
    );
  };

  return (
    <>
      <section className="dark:bg-darkmode overflow-hidden py-14">
        <div
          ref={ref}
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 "
        >
          <motion.div {...TopAnimation}>
            <h2 className="dark:text-white text-midnight_text text-center md:text-35 sm:text-28 text-24">
              Compară opțiuni de
              <span className="text-primary max-w-max ml-2">sprijin</span> alternativ
            </h2>
            {/* <p className="text-base text-6 font-normal text-muted dark:text-darktext text-center m-auto py-6 lg:max-w-50% sm:max-w-75%">
              Vezi rapid diferențele dintre numerele de urgență naționale,
              aplicația BrightSky și SafeSpace — de la disponibilitate 24/7 la
              suport personalizat, specializat și resurse educaționale.
            </p> */}
          </motion.div>
          <motion.div {...bottomAnimation}>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 items-end mt-12">
              <div>
                {featureRows.map((row, idx) => (
                  <p
                    key={row.id}
                    className={`${
                      idx === 0 ? "pb-3" : "py-3"
                    } border-b border-border dark:border-dark_border text-muted text-17`}
                  >
                    {row.label}
                  </p>
                ))}
              </div>

              {plans.map((plan) => {
                const values = planFeatureMatrix[plan.id];

                return (
                  <div
                    key={plan.id}
                    className="bg-white dark:bg-midnight_text pt-8 px-8 rounded-lg border border-border dark:border-dark_border"
                  >
                    <h3 className="text-22 font-bold text-midnight_text text-center dark:text-primary" >
                      {plan.title}
                    </h3>

                    <div className="mt-10 mb-2">
                      {values.map((cell, idx) => {
                        const isLastRow = idx === values.length - 1;
                        const withBorder = !isLastRow
                          ? "border-b border-border dark:border-dark_border"
                          : "";
                        const padding = idx === 0 ? "pb-3" : "py-3";

                        return (
                          <div
                            key={`${plan.id}-${featureRows[idx]?.id ?? idx}`}
                            className={`${padding} ${withBorder} text-muted text-center flex justify-center`}
                          >
                            {renderFeatureCell(cell)}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AlternativeSupportOptions;
