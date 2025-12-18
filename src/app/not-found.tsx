import NotFound from "@/components/NotFound";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina 404 | SafeSpace",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Acasă" },
    { href: "/contact", text: "404" },
  ];
  return (
    <>
      <HeroSub
        title="404"
        description="Nu găsim pagina pe care o cauți."
        breadcrumbLinks={breadcrumbLinks}
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
