"use client";

import React, { useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Icon } from "@iconify/react";

type SpecialistType = {
  id: number;
  name: string;
  description: string | null;
};

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

type FormValues = {
  fullname: string;
  email: string;
  phone: string;
  website: string;
  about: string;
  typeId: string; // keep as string for <select>
};

const getSupabaseClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey);
};

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const VolunteerRegistrationForm = () => {
  const supabase = useMemo(() => getSupabaseClient(), []);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [types, setTypes] = useState<SpecialistType[]>([]);
  const [values, setValues] = useState<FormValues>({
    fullname: "",
    email: "",
    phone: "",
    website: "",
    about: "",
    typeId: "",
  });

  useEffect(() => {
    const load = async () => {
      if (!supabase) return;
      const { data, error } = await supabase
        .from("specialist_type")
        .select("id,name,description")
        .order("id", { ascending: true });
      if (!error && data) {
        setTypes(data as SpecialistType[]);
      }
    };
    void load();
  }, [supabase]);

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const validateStep = (s: 1 | 2 | 3): string | null => {
    if (!values.fullname.trim()) return "Te rugăm să completezi numele complet.";
    if (!values.email.trim() || !isValidEmail(values.email.trim()))
      return "Te rugăm să completezi o adresă de email validă.";

    if (s >= 2) {
      if (!values.typeId) return "Te rugăm să alegi profesia.";
    }

    return null;
  };

  const next = () => {
    const error = validateStep(step);
    if (error) {
      setStatus({ state: "error", message: error });
      return;
    }
    setStatus({ state: "idle" });
    setStep((prev) => (prev === 1 ? 2 : 3));
  };

  const back = () => {
    setStatus({ state: "idle" });
    setStep((prev) => (prev === 3 ? 2 : 1));
  };

  const submit = async (): Promise<void> => {
    const error = validateStep(3);
    if (error) {
      setStatus({ state: "error", message: error });
      return;
    }

    if (!supabase) {
      setStatus({
        state: "error",
        message:
          "Lipsește configurarea Supabase. Setează NEXT_PUBLIC_SUPABASE_URL și NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      });
      return;
    }

    setStatus({ state: "submitting" });

    const payload = {
      fullname: values.fullname.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || null,
      website: values.website.trim() || null,
      about: values.about.trim() || null,
      type: values.typeId ? Number(values.typeId) : null,
      isVerified: false, // Pending until manually verified
    };

    const { error: insertError } = await supabase.from("specialists").insert(payload);

    if (insertError) {
      setStatus({
        state: "error",
        message: `Nu am putut trimite înscrierea. ${insertError.message}`,
      });
      return;
    }

    setStatus({ state: "success" });
  };

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <div className="bg-white dark:bg-midnight_text rounded-2xl border border-border dark:border-dark_border p-6 sm:p-10">
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-16 text-muted dark:text-white dark:text-opacity-70">
            Pasul {step} din 3
          </p>
          <p className="text-16 text-muted dark:text-white dark:text-opacity-70">
            {progress}%
          </p>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-heroBg dark:bg-dark_b">
          <div
            className="h-2 rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-6 rounded-xl bg-heroBg dark:bg-dark_b p-4">
        <p className="text-16 text-midnight_text dark:text-white">
          După trimitere, contul tău va fi marcat ca <span className="font-bold">Pending</span>{" "}
          până când verificăm manual acreditările profesionale.
        </p>
        <p className="mt-2 text-14 text-muted dark:text-white dark:text-opacity-70">
          Vei primi un răspuns pe email după verificare.
        </p>
      </div>

      {status.state === "success" ? (
        <div className="rounded-xl border border-border dark:border-dark_border p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green text-white">
            <Icon icon="solar:check-circle-bold" width="26" height="26" />
          </div>
          <h3 className="text-midnight_text dark:text-white mb-2">Înscriere trimisă</h3>
          <p className="text-16 text-muted dark:text-white dark:text-opacity-70">
            Mulțumim! Înscrierea ta este în așteptare și va fi verificată manual.
          </p>
        </div>
      ) : (
        <>
          {step === 1 && (
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="fullname" className="pb-3 inline-block text-17">
                  Nume complet*
                </label>
                <input
                  id="fullname"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.fullname}
                  onChange={(e) => setField("fullname", e.target.value)}
                  className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  placeholder="Ex: Popescu Andreea"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="pb-3 inline-block text-17">
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={values.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                    placeholder="exemplu@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="pb-3 inline-block text-17">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                    placeholder="07xx xxx xxx"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="typeId" className="pb-3 inline-block text-17">
                  Profesia*
                </label>
                <select
                  id="typeId"
                  required
                  value={values.typeId}
                  onChange={(e) => setField("typeId", e.target.value)}
                  className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                >
                  <option value="">Alege profesia</option>
                  {types.map((t) => (
                    <option key={t.id} value={String(t.id)}>
                      {t.name}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-14 text-muted dark:text-white dark:text-opacity-70">
                  Te poți înscrie ca voluntar doar dacă ești avocat sau psiholog.
                </p>
              </div>

              <div>
                <label htmlFor="website" className="pb-3 inline-block text-17">
                  Website
                </label>
                <input
                  id="website"
                  type="url"
                  autoComplete="url"
                  value={values.website}
                  onChange={(e) => setField("website", e.target.value)}
                  className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  placeholder="https://..."
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="about" className="pb-3 inline-block text-17">
                  Despre tine
                </label>
                <textarea
                  id="about"
                  rows={6}
                  value={values.about}
                  onChange={(e) => setField("about", e.target.value)}
                  className="w-full text-17 px-4 py-3 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  placeholder="Ex: experiență, specializări, disponibilitate..."
                />
              </div>

              <div className="rounded-xl border border-border dark:border-dark_border p-4">
                <p className="text-16 text-midnight_text dark:text-white">
                  Verificare manuală
                </p>
                <p className="mt-2 text-14 text-muted dark:text-white dark:text-opacity-70">
                  După înscriere, vom verifica manual acreditările tale. Până atunci, profilul este{" "}
                  <span className="font-semibold">Pending</span> și nu va fi afișat public.
                </p>
              </div>
            </div>
          )}

          {status.state === "error" && (
            <p className="mt-6 text-14 text-danger_text" role="alert">
              {status.message}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={back}
              disabled={step === 1 || status.state === "submitting"}
              className="px-5 py-3 rounded-lg border border-border dark:border-dark_border text-midnight_text dark:text-white disabled:opacity-50"
            >
              Înapoi
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                disabled={status.state === "submitting"}
                className="px-6 py-3 rounded-lg bg-primary text-white border border-primary hover:bg-transparent hover:text-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Continuă
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={status.state === "submitting"}
                aria-busy={status.state === "submitting"}
                className="px-6 py-3 rounded-lg bg-primary text-white border border-primary hover:bg-transparent hover:text-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.state === "submitting" ? "Se trimite..." : "Trimite înscrierea"}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

