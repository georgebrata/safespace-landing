import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={160}
        height={50}
        quality={100}
        className="dark:hidden"
      />

      <Image
        src="/images/logo/logo1.svg"
        alt="logo"
        width={140}
        height={30}
        quality={100}
        className="hidden dark:block"
      />
    </Link>
  );
};

export default Logo;
