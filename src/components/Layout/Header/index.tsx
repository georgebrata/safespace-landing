"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { Icon } from "@iconify/react";
import { ThemeToggleButton } from "./ThemeToggleButton";

const Header: React.FC = () => {
  const pathUrl = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Function to handle scroll to set sticky class
  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  // Function to handle click outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  // Effect to handle body overflow
  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Reset scrolling
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`fixed h-24 top-0 py-1 z-50 w-full bg-transparent transition-all ${
        sticky ? "shadow-lg bg-white dark:bg-darkheader" : "shadow-none"
      }`}
    >
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex justify-between lg:items-center xl:gap-16 lg:gap-8 px-4 py-6">
        <Logo />
        <nav className="hidden lg:flex grow items-center xl:justify-start justify-center space-x-10 text-17 text-midnight_text">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {/* TODO: Theme toggle button is not implemented yet */}
          {/* <ThemeToggleButton sticky={sticky} isHome={pathUrl === "/"} /> */}
          {/* <Link
            href="#"
            className="hidden lg:flex items-center bg-primary border border-primary hover:border-primary dark:text-white text-white px-4 py-2  gap-2 rounded-lg text-16 font-semibold hover:bg-transparent hover:text-primary dark:hover:text-primary"
            onClick={() => {
              setIsSignInOpen(true);
            }}
          >
            Sign In
            <Icon icon="solar:arrow-right-linear" width="24" height="24" />
          </Link>
          {isSignInOpen && (
            <div
              ref={signInRef}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 m-0"
            >
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg dark:bg-midnight_text bg-white px-8 py-14 text-center">
                <button
                  onClick={() => setIsSignInOpen(false)}
                  className="bg-[url(/images/icon/closed.svg)] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
                  aria-label="Închide fereastra de autentificare"
                ></button>
                <Signin />
              </div>
            </div>
          )} */}
          <Link
            href="#"
            className="hidden lg:flex items-center border border-primary dark:hover:border-primary bg-transparent dark:text-primary text-primary  px-4 py-2  gap-2 rounded-lg text-16 font-semibold hover:bg-primary hover:text-white dark:hover:text-white"
            onClick={() => {
              setIsSignUpOpen(true);
            }}
          >
            Autentificare specialist
            <Icon icon="solar:arrow-right-linear" width="24" height="24" />
          </Link>
          {isSignUpOpen && (
            <div
              ref={signUpRef}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-midnight_text">
                <button
                  onClick={() => setIsSignUpOpen(false)}
                  className="bg-[url(/images/icon/closed.svg)] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
                  aria-label="Închide fereastra de înregistrare"
                ></button>
                <SignUp />
              </div>
            </div>
          )}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block lg:hidden p-2 rounded-lg"
            aria-label="Deschide/închide meniul mobil"
          >
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
          </button>
        </div>
      </div>
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0  h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
            Menu
          </h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Închide meniul mobil"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-midnight_text"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start p-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <div className="mt-4 flex flex-col space-y-4 w-full">
            <Link
              href="#"
              className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
              onClick={() => {
                setIsSignInOpen(true);
                setNavbarOpen(false); // Close the mobile menu
              }}
            >
              Autentificare
            </Link>
            <Link
              href="#"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => {
                setIsSignUpOpen(true);
                setNavbarOpen(false); // Close the mobile menu
              }}
            >
              Înregistrare
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
