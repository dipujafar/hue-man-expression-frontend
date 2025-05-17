"use client";
import Image from "next/image";
import logo from "@/assets/image/logo.png";
import Container from "../Container";
import Link from "next/link";
import { Button } from "../../ui/button";
import NavLinks from "./NavLinks";
import SmallDeviceView from "./NavarSmall";
import { useAppSelector } from "@/redux/hooks";
import Cookies from "js-cookie";
import CustomAvatar from "../CustomAvatar";
import { useGetProfileQuery } from "@/redux/api/profileApi";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isLoggedIn = Cookies.get("hue-man-expressions-access-token");
  const {data:userData, isLoading} = useGetProfileQuery(undefined, {skip: !user || !isLoggedIn});




  console.log(userData);
  return (
    <div className=" bg-primary-white overflow-x-auto  mx-auto">
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
        <div className="hidden md:block">
          <NavLinks></NavLinks>
        </div>

        <div className="-translate-y-[2px] hidden md:block">
          {!user || !isLoggedIn ? (
            <Link href="/login">
              <Button className="relative overflow-hidden rounded-full bg-gradient-to-b  from-amber-800/90  via-amber-700/90  to-amber-500/90 lg:px-8 px-8  md:py-5   text-base  font-medium  text-white  shadow-[0_0_15px_rgba(251,191,36,0.5)] backdrop-blur-sm  transition-all  hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] /95 w-fit ">
                Login
              </Button>
            </Link>
          ) : (
            <Link href="/user-profile">
             <CustomAvatar img={userData?.data?.image} name={userData?.data?.name} className="size-12" fallbackClass="text-xl"></CustomAvatar>
            </Link>
          )}
        </div>

        <SmallDeviceView></SmallDeviceView>
      </Container>
    </div>
  );
};

export default Navbar;
