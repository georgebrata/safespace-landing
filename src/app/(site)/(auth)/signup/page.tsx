import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Înregistrare | SafeSpace",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pagina de înregistrare" />

      <SignUp />
    </>
  );
};

export default SignupPage;
