import React, { FC } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { BreadcrumbLink } from "@/types/breadcrumb";

interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, breadcrumbLinks }) => {
  return (
      <section className="text-center bg-cover pt-36 pb-20 relative dark:bg-darkmode overflow-x-hidden">
        <div className="w-full h-full absolute z-0 bg-heroBg rounded-b-[119px] -left-1/4 top-0 dark:bg-search"></div>
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative z-1 flex justify-between">
          <h2 className="text-midnight_text text-50 relative font-bold dark:text-white ">
            {title}
          </h2>
          <Breadcrumb links={breadcrumbLinks} />
        </div>
      </section>
  );
};

export default HeroSub;
