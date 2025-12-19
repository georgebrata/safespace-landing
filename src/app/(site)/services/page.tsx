import HeroSub from "@/components/SharedComponents/HeroSub";
import PlatformFunctionalities from "@/components/Home/PlatformFunctionalities";
import PlatformBenefits from "@/components/Home/PlatformBenefits";
import HowItWorksVideo from "@/components/Home/HowItWorksVideo";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Formular de risc",
};

const Services = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Acasă" },
    { href: "/services", text: "Formular de risc" },
  ];
  return (
    <>
      <HeroSub
        title="Formular de risc"
        description="Completează formularul pentru a identifica rapid nivelul de risc și pentru a primi recomandări personalizate."
        breadcrumbLinks={breadcrumbLinks}
      />
      <PlatformFunctionalities />
      <PlatformBenefits />
      <HowItWorksVideo />
    </>
  );
};

export default Services;
