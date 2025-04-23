"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TableOfContents } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/image/logo.png";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Settings, ImageIcon } from "lucide-react";
import Greeting from "./Greeting";
import { LogoutIcon } from "./Sidebar";
import { useState } from "react";

const SmallDeviceSidebar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden block my-3">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <TableOfContents size={30} />
        </SheetTrigger>
        <SheetContent className="pt-10" side={"left"}>
          <div className="h-screen w-full    lg:flex flex-col pb-16   overflow-y-auto scroll-hide ">
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
                  onClick={() => setOpen(false)}
                  href="/user-profile"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 hover:bg-white/50 transition-colors",
                    pathName === "/user-profile" &&
                      " text-purple-600 font-medium"
                  )}
                >
                  <Home size={18} />
                  <span>Profile</span>
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  href="/expressions-hub"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 hover:bg-white/50 transition-colors",
                    pathName === "/expressions-hub" &&
                      " text-purple-600 font-medium"
                  )}
                >
                  <ImageIcon size={18} />
                  <span>Hueman Expressions Hub</span>
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  href="/expression-gallery-dashboard"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 hover:bg-white/50 transition-colors",
                    pathName === "/expression-gallery-dashboard" &&
                      " text-purple-600 font-medium"
                  )}
                >
                  <ImageIcon size={18} />
                  <span>Expressions Gallery</span>
                </Link>
              </nav>
            </div>

            {/* Settings Navigation */}
            <div className="mt-auto">
              <h3 className=" font-semibold text-gray-700 mb-4 tracking-wider">
                SETTINGS
              </h3>
              <nav className="space-y-2">
                <Link
                  onClick={() => setOpen(false)}
                  href="/settings"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 hover:bg-white/50 transition-colors",
                    pathName === "/settings" && " text-purple-600 font-medium"
                  )}
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  href="/"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-500 hover:bg-white/50 transition-colors"
                >
                  <LogoutIcon></LogoutIcon>
                  <span>Logout</span>
                </Link>
              </nav>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SmallDeviceSidebar;
