import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Autentificare | SafeSpace",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pagina de autentificare" />

      <Signin />
    </>
  );
};

export default SigninPage;
