"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { useNewsletterSignup } from "@/hooks/useNewsletterSignup";

const JoinCommunity = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [email, setEmail] = useState<string>("");
  const { status, subscribe } = useNewsletterSignup();

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

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon
          key={`full-${i}`}
          icon="ph:star-fill"
          className="w-5 h-5 text-yellow-500"
        />
      );
    }

    if (halfStars) {
      stars.push(
        <Icon
          key="half"
          icon="ph:star-half-fill"
          className="w-5 h-5 text-yellow-500"
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Icon
          key={`empty-${i}`}
          icon="ph:star-bold"
          className="w-5 h-5 text-yellow-500"
        />
      );
    }

    return stars;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    const ok = await subscribe(email);
    if (ok) setEmail("");
  };

  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-heroBg rounded-3xl p-2"
        >
          <motion.div
            {...TopAnimation}
            className="text-center lg:px-20 px-4 pt-20"
          >
            <div className="flex justify-center">
              <Image
                src="/images/search/free.png"
                alt="image"
                width={67}
                height={38}
              />
            </div>
            <h2 className="text-midnight_text font-bold dark:text-white md:text-35 sm:text-28 text-24">
              Intra în comunitatea
              <span className="lg:text-35 text-primary text-24 ml-2">
                SafeSpace
              </span>
            </h2>
            <div className="md:max-w-75% mx-auto mt-6">
              <div className="flex lg:items-center md:items-start bg-white dark:bg-darkHeroBg shadow-md rounded-2xl overflow-hidden">
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full items-stretch"
                >
                  <label className="sr-only" htmlFor="newsletter-email">
                    Adresa de email
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Introdu adresa ta de email."
                    className="grow px-4 py-5 pl-6 text-midnight_text dark:text-heroBg text-17 focus:outline-hidden bg-white dark:bg-darkHeroBg"
                  />
                <div className="flex lg:items-center lg:justify-start justify-center mr-4">
                  <button
                    type="submit"
                    disabled={status.state === "submitting"}
                    aria-busy={status.state === "submitting"}
                    className="text-17 flex items-center bg-primary text-white py-3 px-8 rounded-lg w-36 my-2 border border-primary hover:text-primary hover:bg-transparent disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    Hai cu noi
                  </button>
                </div>
                </form>
              </div>
              {status.state === "success" && (
                <p className="mt-4 text-14 text-green dark:text-white dark:text-opacity-70">
                  Te-ai înscris cu succes în comunitate.
                </p>
              )}
              {status.state === "error" && (
                <p className="mt-4 text-14 text-danger_text" role="alert">
                  {status.message}
                </p>
              )}
              <div className="flex items-center justify-center my-7">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon
                    icon="solar:unread-outline"
                    width="24"
                    height="24"
                    className="text-white"
                  />
                </div>
                <p className="ml-4 text-17 text-muted dark:text-white dark:text-opacity-50">
                  Fără spam sau vânzări de date, doar suport și comunitate de ajutor reciproc.
                </p>
              </div>
            </div>
          </motion.div>
          {/* <motion.div {...bottomAnimation}>
            {review.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl lg:py-16 sm:py-10 py-5 my-2 lg:px-24 sm:px-12 px-6 dark:bg-darkmode"
              >
                <div className="grid lg:grid-cols-2 lg:gap-0 gap-7">
                  <div>
                    <div className="mb-10">
                      <Image
                        src="/images/search/double.png"
                        alt="image"
                        width={52}
                        height={39}
                      />
                    </div>
                    <p className="text-midnight_text dark:text-white text-base mb-9">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="flex sm:items-center sm:gap-2 sm:flex-row flex-col">
                        <h3 className="font-medium text-base text-midnight_text dark:text-white">
                          {item.name}
                        </h3>
                        <Icon
                          icon="bytesize:minus"
                          className="sm:block hidden"
                        />
                        <h5 className="text-muted dark:text-muted text-base">
                          {item.post}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:items-center items-start lg:justify-evenly sm:flex-row flex-col lg:gap-0 gap-10">
                    <div>
                      <div className="sm:mb-8 mb-5">
                        <div className="flex gap-2 mb-3">
                          {renderStars(parseFloat(item.appstorerating))}
                        </div>
                        <p className="text-muted text-base">
                          <span className="text-midnight_text dark:text-white font-bold">
                            {item.appstorerating}
                          </span>
                          /5 — din peste 1800 de evaluări
                        </p>
                      </div>
                      <div>
                        <Link href="#">
                          <Image
                            src="/images/search/app.png"
                            alt="app store"
                            width={130}
                            height={44}
                          />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="sm:mb-8 mb-5">
                        <div className="flex gap-2 mb-3">
                          {renderStars(parseFloat(item.gplayrating))}
                        </div>
                        <p className="text-muted text-base">
                          <span className="text-midnight_text dark:text-white font-bold">
                            {item.gplayrating}
                          </span>
                          /5 — din peste 1800 de evaluări
                        </p>
                      </div>
                      <div>
                        <Link href="/">
                          <Image
                            src="/images/search/google.png"
                            alt="google play"
                            width={130}
                            height={44}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
