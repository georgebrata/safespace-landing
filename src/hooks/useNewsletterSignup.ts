import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { useMemo, useState } from "react";

type NewsletterStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

const getPublicIp = async (): Promise<string | null> => {
  // Best-effort: client-side public IP lookup.
  // If it fails (adblock, network, etc.) we still save the email.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2500);

  try {
    const res = await fetch("https://api.ipify.org?format=json", {
      signal: controller.signal,
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { ip?: unknown };
    return typeof json.ip === "string" ? json.ip : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
};

const getSupabaseBrowserClient = (): SupabaseClient | null => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey);
};

export const useNewsletterSignup = () => {
  const [status, setStatus] = useState<NewsletterStatus>({ state: "idle" });

  const supabase = useMemo(() => getSupabaseBrowserClient(), []);

  const subscribe = async (emailRaw: string): Promise<boolean> => {
    const email = emailRaw.trim();
    if (!email) {
      setStatus({ state: "error", message: "Introdu o adresă de email." });
      return false;
    }

    if (!supabase) {
      setStatus({
        state: "error",
        message:
          "Lipsește configurarea Supabase. Setează NEXT_PUBLIC_SUPABASE_URL și NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      });
      return false;
    }

    setStatus({ state: "submitting" });

    const ip = await getPublicIp();

    const { error } = await supabase.from("newsletter").insert({ email, ip });

    if (error) {
      setStatus({
        state: "error",
        message: `Nu am putut salva email-ul. ${error.message}`,
      });
      return false;
    }

    setStatus({ state: "success" });
    return true;
  };

  return { status, setStatus, subscribe };
};

