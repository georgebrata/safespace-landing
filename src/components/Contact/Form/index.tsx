
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

const ContactForm = () => {
  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "submitting" }
    | { state: "success" }
    | { state: "error"; message: string }
  >({ state: "idle" });

  const supabase = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anonKey) return null;
    return createClient(url, anonKey);
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (!supabase) {
      setStatus({
        state: "error",
        message:
          "Lipsește configurarea Supabase. Setează NEXT_PUBLIC_SUPABASE_URL și NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      });
      return;
    }

    setStatus({ state: "submitting" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      // NOTE: table `contactMessage` column is currently named `fistname` in DB
      // (typo in schema). Keep this key to match the existing schema.
      fistname: String(formData.get("firstName") ?? "").trim(),
      lastname: String(formData.get("lastName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const { error } = await supabase.from("contactMessage").insert(payload);

    if (error) {
      setStatus({
        state: "error",
        message: `Nu am putut trimite mesajul. ${error.message}`,
      });
      return;
    }

    form.reset();
    setStatus({ state: "success" });
  };

  return (
    <>
      <section className="dark:bg-darkmode pb-24">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="col-span-6">
              <h2 className="max-w-max text-40 font-bold mb-9">
                Trimite un mesaj
              </h2>
              <form
                className="flex flex-wrap w-full m-auto justify-between"
                onSubmit={handleSubmit}
              >
                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="first-name"
                      className="pb-3 inline-block text-17"
                    >
                      Prenume*
                    </label>
                    <input
                      className="w-full text-17 px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                      id="first-name"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      type="text"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="last-name"
                      className="pb-3 inline-block text-17"
                    >
                      Nume*
                    </label>
                    <input
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                      id="last-name"
                      name="lastName"
                      autoComplete="family-name"
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="email"
                      className="pb-3 inline-block text-17"
                    >
                      Adresă de email*
                    </label>
                    <input
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      type="email"
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="phone"
                      className="pb-3 inline-block text-17"
                    >
                      Telefon*
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      pattern="^(?:\+40\s*|0)\s*(?:7\d{2}|[23]\d{2})[\s-]*\d{3}[\s-]*\d{3}$"
                      placeholder="07xx xxx xxx"
                      title="Introduceți un număr valid din România (ex: 07xx xxx xxx sau +40 7xx xxx xxx)"
                      aria-describedby="phone-hint"
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                    />
                    <p id="phone-hint" className="mt-2 text-14 text-muted dark:text-white dark:text-opacity-70">
                      07xx xxx xxx sau +40 7xx xxx xxx.
                    </p>
                  </div>
                </div>
                <div className="mx-0 my-2.5 w-full">
                  <label htmlFor="message" className="pb-3 inline-block text-17">
                    Mesaj*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Scrie aici mesajul tău…"
                    className="w-full text-17 px-4 py-3 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                  />
                </div>
                <div className="mx-0 my-2.5 w-full">
                  <button
                    className="bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={status.state === "submitting"}
                  >
                    {status.state === "submitting" ? "Se trimite..." : "Trimite mesaj"}
                  </button>

                  {status.state === "success" && (
                    <p className="mt-3 text-14 text-green dark:text-white dark:text-opacity-70">
                      Mesajul a fost trimis. Îți mulțumim!
                    </p>
                  )}

                  {status.state === "error" && (
                    <p className="mt-3 text-14 text-danger_text" role="alert">
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
            <div className="col-span-6">
              <Image
                src="/images/contact-page/safespace contact.png"
                alt="SafeSpace Contact"
                width={1300}
                height={0}
                quality={100}
                style={{ width: "100%", height: "auto" }}
                className="bg-no-repeat bg-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
