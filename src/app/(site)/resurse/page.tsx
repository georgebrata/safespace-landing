import React from "react";
import type { Metadata } from "next";
import { ComingSoon } from "@/components/SharedComponents/ComingSoon";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Resurse | SafeSpace",
  description: "Resurse educaționale",
  alternates: { canonical: "/resurse" },
};

export default function ResursePage() {
  return <ComingSoon title={metadata.description as string} message="În curând ..." />
}

