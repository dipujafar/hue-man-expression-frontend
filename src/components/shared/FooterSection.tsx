import SectionBg from "@/assets/our-purpose/sectionBgImage.png";
import logoNameImage from "@/assets/common/Hue-Man-Expressions.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const FooterSection = () => {
  return (
    <div className="relative">
      <Image src={SectionBg} alt="sectionBgImage"></Image>
      <div className="absolute inset-0 ">
        <div className="flex flex-col justify-center items-center w-full h-full px-4 py-4 text-primary-white lg:gap-y-8 md:gap-y-2">
          <Image src={logoNameImage} alt="logoNameImage" className="px-4" />
          <div className="flex flex-col justify-center items-center lg:gap-y-4 md:gap-y-2 gap-y-1">
            <p className="text-center text-primary-white lg:text-2xl md:text-xl text-[9px]  max-w-6xl">
              Hue-man Expressions is not just a business, it is a movement
              toward greater inclusion and equity in educational and therapeutic
              practices.
            </p>
            <Link href="#">
              <Button className="relative overflow-hidden rounded-full bg-gradient-to-b  from-amber-800/90  via-amber-700/90  to-amber-500/90 lg:px-14 px-8  md:py-6 py-2 h-7  md:text-lg text-[12px]  font-medium  text-white  shadow-[0_0_15px_rgba(251,191,36,0.5)] backdrop-blur-sm  transition-all  hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] /95 w-fit ">
                Sign-up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
