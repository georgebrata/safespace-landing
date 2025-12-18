"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";
import toast, { Toaster } from "react-hot-toast";
import AuthDialogContext from "@/app/context/AuthDialogContext";

const Signin = ({ signInOpen }: { signInOpen?: (open: boolean) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    void username;
    void password;

    // In static export mode we don't have NextAuth API routes.
    await new Promise((r) => setTimeout(r, 400));

    setLoading(false); // Set loading to false once the sign-in attempt completes

    const message = "Autentificarea este dezactivată în varianta statică (SSG).";
    setError(message);
    toast(message);

    authDialog?.setIsFailedDialogOpen(true); // Open failed dialog
    setTimeout(() => {
      authDialog?.setIsFailedDialogOpen(false);
    }, 1100);

    signInOpen?.(false);
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>
      <SocialSignIn />
      <span className="z-1 relative my-8 block text-center">
        <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-border dark:bg-dark_border"></span>
        <span className="text-body-secondary relative z-10 inline-block bg-white px-3 text-base dark:bg-dark">
          SAU
        </span>
        <Toaster />
      </span>
      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Nume de utilizator"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border placeholder:text-gray-400  border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            required
            value={password}
            placeholder="Parolă"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary hover:bg-darkprimary dark:hover:bg-darkprimary! px-5 py-3 text-base text-white transition duration-300 ease-in-out "
            disabled={loading} // Disable button while loading
          >
            Autentificare
            {loading && <Loader />} {/* Show loader when loading */}
          </button>
        </div>
      </form>
      {error && <div className="text-red-500">{error}</div>}{" "}
      {/* Display error message */}
      <Link
        href="/"
        className="mb-2 inline-block text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
      >
        Ai uitat parola?
      </Link>
      <p className="text-body-secondary text-base">
        Nu ai cont încă?{" "}
        <Link href="/" className="text-primary hover:underline">
          Înregistrare
        </Link>
      </p>
    </>
  );
};

export default Signin;
