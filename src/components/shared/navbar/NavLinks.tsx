"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    href: "/#",
  },
  {
    label: "Ambassador Program",
    href: "/ambassador-program",
  },
  {
    label: "Representation Toolkit",
    href: "/#",
  },
  {
    label: "Social Expressions",
    href: "/contact",
  },
];

const NavLinks = () => {
  const currentPathName = usePathname();

  return (
    <div className="flex gap-x-4">
      {navLinks?.map((link, index) => (
        <p key={index} className="group relative">
          <Link href={link.href}>
            <h3 className="text-primary-black hover:text-primary-blue cursor-pointer truncate ">
              {link.label}
            </h3>
          </Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100 origin-left"></span>
          {currentPathName === link.href && (
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform  transition-transform duration-700 ease-in-out scale-x-100 origin-left"></span>
          )}
        </p>
      ))}
    </div>
  );
};

export default NavLinks;
