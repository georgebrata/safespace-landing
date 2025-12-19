import React from "react";
import type { Metadata } from "next";
import { ComingSoon } from "@/components/SharedComponents/ComingSoon";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Formular | SafeSpace",
  description: "Formular de risc",
  alternates: { canonical: "/formular" },
};

export default function FormularPage() {
  return <ComingSoon title={metadata.description as string} message="Lucrăm la formularul de evaluare. Revino în curând pentru a-l completa." />;
}

