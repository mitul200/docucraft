import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <div className="hidden lg:flex">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Protocol"
            className="h-6 w-auto"
            height={24}
            width={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
