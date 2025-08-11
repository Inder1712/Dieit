import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src= {`${getImagePrefix()}images/logo/logo.png`}
        alt="logo"
        width={70}
        height={0}
        style={{ height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
