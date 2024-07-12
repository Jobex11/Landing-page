import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="logo.svg" width={40} height={40} priority alt="logo" />
    </Link>
  );
};

export default Logo;
