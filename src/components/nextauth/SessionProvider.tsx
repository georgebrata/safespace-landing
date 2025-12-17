"use client";
import React from "react";

export default function SessionProviderComp({
  children,
  session,
}: {
  children: React.ReactNode;
  // Kept for API compatibility with the previous NextAuth-based implementation.
  // In static export mode we don't have server sessions.
  session: null;
}) {
  void session;
  return <>{children}</>;
}
