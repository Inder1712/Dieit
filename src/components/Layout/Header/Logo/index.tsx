import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <img
        src= "images/logo/logo.png"
        alt="logo"
        width={70}
        height={0}
        style={{ height: "auto" }}
        
      />
    </Link>
  );
};

export default Logo;
