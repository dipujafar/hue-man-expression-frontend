"use client";
import Link from "next/link";
import Image from "next/image";
import { Home, Settings,  ImageIcon } from "lucide-react";
import logo from "@/assets/image/logo.png";
import Greeting from "./Greeting";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SidebarNavigation() {
    const pathName = usePathname();
    
    console.log(pathName);
  return (
    <div className="h-screen  w-72 bg-[#AA9880] lg:flex flex-col py-8 xl:px-6 px-4 hidden overflow-y-auto ">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Link href="/">
          <div>
            <Image
              src={logo}
              alt="Company Logo"
              width={1200}
              height={1200}
              className=" max-w-40"
            />
          </div>
        </Link>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center mb-8">
        <div className="size-32 rounded-full overflow-hidden mb-2 border-8 border-[#A99E90]  flex-center">
          <Image
            src="/user-profile.png"
            alt="User Avatar"
            width={1200}
            height={1200}
            className="size-24 rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <Greeting></Greeting>
          <p className=" font-medium">Istiak Ahmed</p>
        </div>
      </div>

      {/* Overview Navigation */}
      <div className="mb-8">
        <h3 className=" font-semibold text-gray-700 mb-4 tracking-wider">
          OVERVIEW
        </h3>
        <nav className="space-y-2">
          <Link
            href="/user-profile"
            className={cn("flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 hover:bg-white/50 transition-colors", pathName === "/user-profile" && "bg-white text-purple-600 font-medium" )}
          >
            <Home size={18} />
            <span>Profile</span>
          </Link>
          <Link
            href="/expressions-hub"
            className={cn("flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 hover:bg-white/50 transition-colors", pathName === "/expressions-hub" && "bg-white text-purple-600 font-medium" )}
          >
            <ImageIcon size={18} />
            <span>Hueman Expressions Hub</span>
          </Link>
          <Link
            href="/gallery"
            className={cn("flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 hover:bg-white/50 transition-colors", pathName === "/expression-gallery" && "bg-white text-purple-600 font-medium" )}
          >
            <ImageIcon size={18} />
            <span>Expressions Gallery</span>
          </Link>
        </nav>
      </div>

      {/* Settings Navigation */}
      <div className="mt-auto">
        <h3 className="text-xs font-semibold text-gray-700 mb-4 tracking-wider">
          SETTINGS
        </h3>
        <nav className="space-y-2">
          <Link
            href="/settings"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-800 hover:bg-white/50 transition-colors"
          >
            <Settings size={18} />
            <span>Settings</span>
          </Link>
          <Link
            href="/logout"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-500 hover:bg-white/50 transition-colors"
          >
            <LogoutIcon></LogoutIcon>
            <span>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

function LogoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M6.43335 5.54016C6.64002 3.14016 7.87335 2.16016 10.5733 2.16016H10.66C13.64 2.16016 14.8333 3.35349 14.8333 6.33349V10.6802C14.8333 13.6602 13.64 14.8535 10.66 14.8535H10.5733C7.89335 14.8535 6.66002 13.8868 6.44002 11.5268"
        stroke="#F13E3E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 8.5H2.91333"
        stroke="#F13E3E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.40008 6.2666L2.16675 8.49994L4.40008 10.7333"
        stroke="#F13E3E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
