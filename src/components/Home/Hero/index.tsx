"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Heroimage } from "@/app/api/data";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 1 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 1 },
  };
  return (
    <section className="relative pt-44 mb-14 bg-cover bg-center dark:bg-darkmode">
      <div className="w-full h-full absolute z-0 bg-heroBg rounded-b-[119px] -left-1/4 top-0 dark:bg-midnight_text"></div>
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) relative z-1 md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-12 items-center">
          <motion.div {...leftAnimation} className="lg:col-span-7 col-span-12">
            <h1 className="md:text-40 sm:text-30 text-24 text-midnight_text lg:text-start mb-9 lg:w-full w-3/4">
              Platforma pentru
              <br />
              <span className="bg-border dark:bg-darkHeroBg  md:text-40 text-30 rounded-lg lg:text-start text-primary max-w-max">
              prevenirea și reducerea
              </span>
              <br />
              violenței domestice
            </h1>
            <p className="sm:text-19 text-16 text-muted dark:text-white dark:text-opacity-70 text-start lg:max-w-full sm:max-w-75%">
              Ajutăm la identificarea și gestionarea eficientă a riscurilor de violență, <br/>
              oferind <b>suport specializat gratuit</b> pentru victimele abuzurilor de orice fel.
            </p>
            <div className="flex items-center mt-12 gap-11">
              <div>
                <Link
                  href="/formular"
                  className="text-17 flex gap-2 items-center bg-primary text-white py-3 px-8 rounded-lg border border-primary hover:text-primary hover:bg-transparent"
                >
                  Sunt eu o victimă?
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="13"
                    height="13"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href="/formular"
                  className="text-17 flex gap-2 items-center text-muted dark:text-white dark:text-opacity-70 hover:text-primary"
                >
                  Susține o victimă
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="13"
                    height="13"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:my-28 my-12">
              <p className="text-20 text-muted dark:text-white dark:text-opacity-70 text-start mb-7">
                Alături de partenerii
              </p>
              <div className="flex space-x-6 justify-start w-full">
                {Heroimage.map((item, index) => (
                  <Link key={index} href="/">
                    <Image
                      src={item.lightimage}
                      alt="image"
                      width={115}
                      height={30}
                      className="block dark:hidden"
                      // style={{ width: "100%", height: "100%" }}
                    />
                    <Image
                      src={item.darkimage}
                      alt="image"
                      width={115}
                      height={30}
                      className="hidden dark:block"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="lg:col-span-5 col-span-12 pl-20 lg:block hidden"
          >
            <Image
              src="/images/hero/safespace-hero-image.png"
              alt="image"
              width={498}
              height={651}
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
