"use client";
import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const MethodsToHandleAbuse = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };
  const leftAnimation1 = {
    initial: { x: "-100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  };

  const leftAnimation2 = {
    initial: { x: "-100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 1 },
  };
  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  };

  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-heroBg rounded-3xl py-16 sm:px-20 px-5"
        >
          <motion.div {...TopAnimation} className="text-center">
            <h2 className="md:text-35 sm:text-28 text-24 text-midnight_text font-semibold mb-5 dark:text-white lg:max-w-full sm:max-w-75% mx-auto">
              Moduri gratuite de a gestiona
              <span className="text-primary max-w-max ml-2">
                abuzurile
              </span>
            </h2>
            <p className="font-medium md:max-w-75% text-17 mx-auto text-muted dark:text-white dark:text-opacity-70">
              Suntem partenerul tău <b>gratuit</b> în lupta împotriva violenței domestice.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-11">
            <motion.div {...TopAnimation} className="col-span-2">
              <div className="bg-white dark:bg-darkmode rounded-2xl">
                <div className="grid xl:grid-cols-2 xl:gap-10">
                  <div className="xl:py-14 py-8 xl:pl-9 px-9">
                    <h3 className="md:text-25 text-20 font-medium text-midnight_text dark:text-white mb-6">
                      Resurse educaționale
                    </h3>
                    <p className="text-muted dark:text-white dark:text-opacity-70 md:text-18 text-16 md:mb-14 mb-8">
                      Accesează resursele educaționale pentru a afla cum să te protejezi în fața abuzurilor de orice fel.
                    </p>
                    <Link
                      href="#"
                      className="text-17 flex gap-2 items-center hover:text-blue-700 text-primary "
                    >
                      Accesează resursele
                      <Icon
                        icon="solar:alt-arrow-right-linear"
                        width="13"
                        height="13"
                      />
                    </Link>
                  </div>
                  <div>
                    <Image
                      src="/images/method/card.png"
                      alt="card"
                      width={459}
                      height={289}
                      className="xl:w-full w-75% mx-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="h-full flex flex-col gap-4 lg:col-span-1 col-span-2">
              <motion.div
                {...leftAnimation1}
                className="bg-white dark:bg-darkmode flex gap-1 items-center rounded-2xl overflow-hidden"
              >
                <div className="flex-1 pl-8 py-5">
                  <h3 className="md:text-25 text-20 font-medium text-midnight_text dark:text-white mb-6">
                    Linii naționale de urgență
                  </h3>
                  <p className="text-muted dark:text-white dark:text-opacity-70 md:text-18 text-16 md:mb-14 mb-8">
                    Accesează numerele naționale de urgență pentru a primi ajutor în caz de urgență.
                  </p>
                  <Link
                    href="#"
                    className="text-17 flex gap-2 items-center hover:text-blue-700 text-primary "
                  >
                    Sună acum
                    <Icon
                      icon="solar:alt-arrow-right-linear"
                      width="13"
                      height="13"
                    />
                  </Link>
                </div>
                <div className="flex-1 w-full h-full">
                  <Image
                    src="/images/method/method1.jpg"
                    alt="image"
                    width={232}
                    height={375}
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
              <motion.div
                {...leftAnimation2}
                className="bg-white dark:bg-darkmode flex gap-1 items-center rounded-2xl overflow-hidden"
              >
                <div className="flex-1 pl-8 py-5">
                  <h3 className="md:text-25 text-20 font-medium text-midnight_text dark:text-white mb-6">
                    Chat privat cu un specialist
                  </h3>
                  <p className="text-muted dark:text-white dark:text-opacity-70 md:text-18 text-16 md:mb-14 mb-8">
                    Discută cu un specialist psihologic sau juridic în mod gratuit, oricând ai nevoie.
                  </p>
                  <Link
                    href="#"
                    className="text-17 flex gap-2 items-center hover:text-blue-700 text-primary "
                  >
                    Inițiază discuția
                    <Icon
                      icon="solar:alt-arrow-right-linear"
                      width="13"
                      height="13"
                    />
                  </Link>
                </div>
                <div className="flex-1 w-full h-full">
                  <Image
                    src="/images/method/method3.jpg"
                    alt="image"
                    width={232}
                    height={375}
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
            <div className="h-full flex flex-col gap-4 lg:col-span-1 col-span-2">
              <motion.div
                {...rightAnimation}
                className="bg-white dark:bg-darkmode rounded-2xl overflow-hidden flex flex-col h-full"
              >
                <div className="flex-1">
                  <Image
                    src="/images/method/method2.png"
                    alt="image"
                    width={232}
                    height={375}
                    className="w-full"
                  />
                </div>
                <div className="flex-1 px-9 flex justify-center flex-col py-9">
                  <h3 className="md:text-25 text-20 font-medium text-midnight_text dark:text-white mb-6">
                    Comunitate
                  </h3>
                  <p className="text-muted dark:text-white dark:text-opacity-70 md:text-18 text-16 md:mb-14 mb-8">
                    Interacționează cu alți utilizatori pentru a împărtăși experiențele și a obține suport din partea membrilor.
                  </p>
                  <Link
                    href="#"
                    className="text-17 flex gap-2 items-center hover:text-blue-700 text-primary "
                  >
                    Intră în comunitate
                    <Icon
                      icon="solar:alt-arrow-right-linear"
                      width="13"
                      height="13"
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodsToHandleAbuse;
