import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NewsletterForm } from "@/components/Newsletter/NewsletterForm";

const Footer = () => {
  const quickLinks: Array<{ label: string; href: string; icon: string; disabled?: boolean }> = [
    { label: "Contact", href: "/contact", icon: "ph:users-three" },
    { label: "Devino voluntar", href: "/voluntar", icon: "ph:user-plus" },
    { label: "Formular de risc", href: "/formular-de-risc", icon: "ph:shield-check", disabled: true },
    { label: "Resurse educaționale", href: "/blog", icon: "heroicons-outline:document-text", disabled: true },
    { label: "Jurnal privat", href: "/jurnal-privat", icon: "ph:notebook", disabled: true },
  ];

  const emergencyLinks: Array<{ label: string; href: string; icon: string }> = [
    { label: "Urgență: 112", href: "tel:112", icon: "ph:phone-call" },
    { label: "Linia ANES", href: "tel:0800500333", icon: "ph:phone-call" },
    { label: "Numărul Unic 119", href: "tel:119", icon: "ph:phone-call" },
  ];

  const legalLinks: Array<{ label: string; href: string }> = [
    { label: "Termeni și condiții", href: "#" },
    { label: "Politica de confidențialitate", href: "#" },
    { label: "Declinarea responsabilității", href: "#" },
  ];

  return (
    <footer className="pt-8 mt-14 bg-midnight_text relative after:content-[''] after:absolute after:bg-[url(/images/footer/bgline.png)] after:bg-no-repeat after:w-52 after:h-24 after:right-0 after:top-28 xl:after:block after:hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-2">
        <div className="flex lg:items-center justify-between lg:flex-row flex-col border-b border-dark_border pb-14 mb-16 px-2">
          <div className="flex sm:flex-nowrap flex-wrap gap-6">
            <div className="flex items-center text-foottext text-16">
              <Icon icon="weui:location-outlined" className="w-7 h-7 mr-3" />
              <div className="flex flex-col">
                <span>Strada 13 Septembrie 12a, Cluj-Napoca</span>
                <span>România</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-foottext">
              <Icon icon="majesticons:phone-retro-line" className="w-7 h-7" />
              <Link href="tel:+40773364612" className="text-16 hover:text-primary">
                <span> +40773364 612</span>
              </Link>
            </div>
            <div className="flex items-center text-foottext gap-2">
              <Icon icon="clarity:email-line" className="w-7 h-7" />
              <Link
                href="#"
                className="inline-flex items-center text-16 hover:text-primary"
              >
                <span>contact@safespace.eu</span>
              </Link>
            </div>
          </div>
          <div className="flex gap-4 mt-4 lg:mt-0">
            {/* <Link href="#" className="text-muted hover:text-primary">
              <Icon icon="fe:facebook" width="32" height="32" />
            </Link>
            <Link href="#" className="text-muted hover:text-primary">
              <Icon icon="fa6-brands:square-twitter" width="32" height="32" />
            </Link>
            <Link href="#" className="text-muted hover:text-primary">
              <Icon icon="fa6-brands:linkedin" width="32" height="32" />
            </Link> */}
          </div>
        </div>
        <div className="grid grid-cols-12 sm:mb-16 mb-8 pt-8 px-4 gap-4 relative before:content-[''] before:absolute before:w-20 before:h-20 before:bg-[url(/images/footer/bgcir.png)] before:bg-no-repeat before:-left-36 before:bottom-9 lg:before:block before:hidden">
          <div className="md:col-span-3 col-span-12 mb-8 md:mb-0">
            <h4 className="text-18 text-white dark:text-white mb-3">
              Link-uri Utile
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href} className={item.disabled ? "opacity-50 cursor-not-allowed" : ""}>
                  {item.disabled ? <span className="inline-flex items-center gap-2 text-foottext text-16 opacity-50 cursor-not-allowed">
                    <Icon icon={item.icon} className="w-5 h-5" aria-hidden="true" />
                    <span>{item.label + " (în curând)"}</span>
                  </span> : <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-foottext text-16 hover:underline"
                  >
                    <Icon icon={item.icon} className="w-5 h-5" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                  }
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 col-span-12 mb-8 md:mb-0">
            <h4 className="text-18 text-white dark:text-white mb-3">
              Suport de Urgență
            </h4>
            <ul className="space-y-3">
              {emergencyLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-foottext text-16 hover:underline"
                    aria-label={item.label}
                  >
                    <Icon icon={item.icon} className="w-5 h-5" aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 col-span-12">
            <p className="text-18 text-white font-bold">Hai în comunitate</p>
            <NewsletterForm
              inputClassName="bg-search placeholder:text-gray-300 text-white! py-3 pl-5 w-full rounded-md pr-14"
              buttonClassName="absolute right-4 top-1/2 -translate-y-1/2 disabled:opacity-60 disabled:cursor-not-allowed"
            />
            {/* <p className="text-18 text-white font-bold pt-4 pb-1">Descarcă aplicația</p>
            <div className="flex">
              <a href="">
                <Image
                  src="/images/footer/play.png"
                  alt="Google Play"
                  width={1000}
                  height={1000}
                  className="w-auto h-auto mr-5"
                />
              </a>
              <a href="">
                <Image
                  src="/images/footer/store.png"
                  alt="App Store"
                  width={1000}
                  height={1000}
                  className="w-auto h-auto"
                />
              </a>
            </div> */}
            <p className="text-12 text-foottext sm:mb-0 my-4">
              Nu facem spam, doar suport.
            </p>
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col justify-between py-10 mt-8">
          <p className="text-16 text-foottext sm:mb-0 mb-4 px-4">
            SafeSpace © Copyright {new Date().getFullYear()}
            
            {/*. Created with 💖 + 🤖 by <Link
              href="https://georgebrata.ro"
              target="_blank"
              className="hover:underline"
            >
              George.
            </Link> */}
          </p>
          {/* TODO: legal links are not implemented yet */}
          {/* <div className="flex gap-4">
            {legalLinks.map((item) => (
              <div key={item.label}>
                <Link href={item.href} className="text-foottext hover:text-primary">
                  {item.label}
                </Link>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
