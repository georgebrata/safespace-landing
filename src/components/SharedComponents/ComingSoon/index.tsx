"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const ComingSoon = ({ title = "În curând", message = "" }: { title?: string, message?: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);

  const leftAnimation = {
    initial: { x: "-10%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "-10%", opacity: 0 },
    transition: { duration: 0.8, delay: 0.1 },
  };

  const rightAnimation = {
    initial: { x: "10%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "10%", opacity: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4"
      >
        <div className="bg-heroBg dark:bg-midnight_text rounded-3xl lg:px-16 px-6 py-12">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <motion.div {...leftAnimation}>
              <h1 className="text-midnight_text dark:text-white mb-4">
                {title}
              </h1>
              <p className="text-17 text-muted dark:text-white dark:text-opacity-70 max-w-prose">
                {message}
              </p>
            </motion.div>

            <motion.div {...rightAnimation} className="flex justify-center">
              <div className="w-full max-w-lg">
                <Image
                  src="/images/404.svg"
                  alt="În curând"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

