"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { perks } from "@/app/api/data";

const Mobile = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };
  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div ref={ref} className="grid md:grid-cols-12 items-center lg:gap-12 gap-6">
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <h2 className="lg:text-35 text-24 text-midnight_text font-semibold dark:text-white">
              Portofele mobile pentru
              <br />
              <span className="lg:text-35 text-24 text-primary font-semibold lg:max-w-max">
                orice situație
              </span>
            </h2>
            <p className="mt-6 text-muted dark:text-white dark:text-opacity-70 lg:text-17 lg:max-w-full max-w-75%">
              Cardurile emise prin noi pot fi adăugate ușor în portofele mobile,
              pentru cumpărături online, în magazin sau în aplicații.
            </p>
            <div className="flex flex-col gap-6 mt-16">
              {perks.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Icon
                      icon="solar:unread-outline"
                      width="24"
                      height="24"
                      className="text-white"
                    />
                  </div>
                  <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-start">
              <Link
                href="#"
                className="lg:text-17 flex gap-4 items-center bg-primary text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg mt-12 border border-primary hover:text-primary hover:bg-transparent"
              >
                Începe acum
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="13"
                  height="13"
                />
              </Link>
            </div>
          </motion.div>
          <motion.div {...rightAnimation} className="lg:col-span-6 col-span-12">
            <div className="lg:max-w-full max-w-75% mx-auto">
              <Image
                src="/images/mobile/mobile.png"
                alt="image"
                width={555}
                height={634}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
