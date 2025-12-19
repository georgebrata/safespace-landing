import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Autentificare | SafeSpace",
};

const SigninPage = () => {
  return (
    <div className="dark:bg-darkmode xl:px-120 lg:px-40 md:px-20 px-4 py-10">
      <Breadcrumb pageName="Autentificare" />

      <Signin />
    </div>
  );
};

export default SigninPage;
