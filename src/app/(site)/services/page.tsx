import HeroSub from "@/components/SharedComponents/HeroSub";
import Payment from "@/components/Home/Payment";
import Benefit from "@/components/Home/Benefit";
import Spend from "@/components/Home/Spend";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Formular de risc | SafeSpace",
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
      <Payment />
      <Benefit />
      <Spend />
    </>
  );
};

export default Services;
