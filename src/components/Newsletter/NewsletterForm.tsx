
"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNewsletterSignup } from "@/hooks/useNewsletterSignup";

export type NewsletterFormProps = {
  inputClassName?: string;
  buttonClassName?: string;
};

export const NewsletterForm = ({
  inputClassName = "",
  buttonClassName = "",
}: NewsletterFormProps) => {
  const [email, setEmail] = useState<string>("");
  const { status, setStatus, subscribe } = useNewsletterSignup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await subscribe(email);
    if (ok) setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2" noValidate>
      <div className="relative">
        <label className="sr-only" htmlFor="footer-newsletter-email">
          Adresa de email
        </label>
        <input
          id="footer-newsletter-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introdu adresa ta de email"
          className={inputClassName}
        />

        <button
          type="submit"
          aria-label="Înscrie-te la newsletter"
          disabled={status.state === "submitting"}
          className={buttonClassName}
        >
          <Icon icon="solar:plain-2-linear" className="text-22 text-foottext" />
        </button>
      </div>

      {status.state === "success" && (
        <p className="mt-2 text-14 text-green">Te-ai înscris cu succes în comunitate.</p>
      )}
      {status.state === "error" && (
        <p className="mt-2 text-14 text-danger_text" role="alert">
          {status.message}
        </p>
      )}
    </form>
  );
};

