import Image from "next/image";
import logo from "@/assets/image/logo.png";
import Container from "./Container";
import { div } from "framer-motion/client";
import Link from "next/link";

const navLinks = [
  {
    label: "Rooted in Representation",
    href: "/",
  },
  {
    label: "Behind the Mission",
    href: "/",
  },
  {
    label: "Expression Gallery",
    href: "/",
  },
  {
    label: "Ambassador Program",
    href: "/",
  },
  {
    label: "Representation Toolkit",
    href: "/",
  },
  {
    label: "Social Expressions",
    href: "/",
  },
  {
    label: "Log In",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <div className=" bg-primary-white overflow-x-auto">
      <Container className="flex justify-between gap-x-2 items-center">
        <Image
          src={logo}
          alt="logo"
          width={1200}
          height={1200}
          className="w-auto h-auto max-w-[200px] max-h-[100px]"
        />
        <div className="flex gap-x-4">
          {navLinks?.map((link, index) => (
            <Link href={link.href} key={index}>
              <h3 className="text-primary-black hover:text-primary-blue cursor-pointer truncate ">
                {link.label}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
