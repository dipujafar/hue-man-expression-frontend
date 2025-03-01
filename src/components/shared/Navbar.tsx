import Image from "next/image";
import logo from "@/assets/image/logo.png";
import Container from "./Container";
import Link from "next/link";
import { Button } from "../ui/button";

const navLinks = [
  {
    label: "Rooted in Representation",
    href: "/",
  },
  {
    label: "Behind the Mission",
    href: "/our-purpose",
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
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className=" bg-primary-white overflow-x-auto">
      <Container className="flex justify-between gap-x-4 items-center  px-4 md:px-6  xl:px-16 2xl:px-28">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            width={1200}
            height={1200}
            className="w-auto h-auto max-w-[200px] max-h-[100px]"
          />
        </Link>
        <div className="flex gap-x-4">
          {navLinks?.map((link, index) => (
            <p key={index} className="group relative">
              <Link href={link.href}>
                <h3 className="text-primary-black hover:text-primary-blue cursor-pointer truncate ">
                  {link.label}
                </h3>
              </Link>
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100 origin-left"></span>
            </p>
          ))}
        </div>

        <div className="-translate-y-[2px]">
          <Link href="/sign-up">
            <Button className="relative overflow-hidden rounded-full bg-gradient-to-b  from-amber-800/90  via-amber-700/90  to-amber-500/90 lg:px-8 px-8  md:py-5   text-base  font-medium  text-white  shadow-[0_0_15px_rgba(251,191,36,0.5)] backdrop-blur-sm  transition-all  hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] /95 w-fit ">
              Login
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
