import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons/ArrowRightIcon";

const ContactInfo = () => {
  return (
    <>
      <section className="dark:bg-darkmode pt-8 pb-24">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-28 gap-8">
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-heroBg dark:bg-search p-4 flex items-center justify-center rounded-full">
                <img src="/images/contact-page/safespace email.png" alt="SafeSpace Email" width={90} height={90} />
              </div>
              <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Email
                  </span>
                  <p className="text-DeepOcean font-normal text-xl max-w-80 pt-3 pb-7 dark:text-white dark:text-opacity-50">
                    Suntem aici să prevenim și să reducem violeța domestică. Scrie un email și îți răspundem cât mai repede putem.
                  </p>
                </div>
                <div>
                  <Link href="mailto:contact@safespace.eu" className="text-primary text-18 font-medium flex items-center gap-3 group hover:text-midnight_text dark:hover:text-white">
                    Trimite un email
                    <ArrowRightIcon className="text-primary group-hover:text-midnight_text dark:group-hover:text-white" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="p-4 flex items-center justify-center rounded-full">
              <img src="/images/contact-page/safespace phone.png" alt="SafeSpace Telephone" width={80} height={80} />
              </div>
              <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Telefon
                  </span>
                  <p className="text-DeepOcean font-normal text-xl max-w-80 pt-3 pb-7 dark:text-white dark:text-opacity-50">
                    Ne poți contacta la numărul de telefon 0773 364 612 în intervalul orar 09:00 - 18:00, luni - vineri.
                  </p>
                </div>
                <div>
                  <Link href="tel:+40773364612" className="text-primary text-18 font-medium flex items-center gap-3 group hover:text-midnight_text dark:hover:text-white">
                    Sună la telefon
                    <ArrowRightIcon className="text-primary group-hover:text-midnight_text dark:group-hover:text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="md:pt-32 pt-11 md:pb-28 pb-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938779.7831767448!2d71.05098621661072!3d23.20271516446136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1715676641521!5m2!1sen!2sin" width="1114" height="477" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg w-full"></iframe>
          </div> */}
        </div>
        {/* <div className="border-b border-solid border-border dark:border-dark_border"></div> */}
      </section>
    </>
  );
};

export default ContactInfo;
