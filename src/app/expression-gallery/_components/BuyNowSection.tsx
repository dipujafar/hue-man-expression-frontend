import SectionBg from "@/assets/expression-gallery/bgImage.png";
import logoNameImage from "@/assets/common/Hue-Man-Expressions.png";
import Image from "next/image";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const BuyNowSection = () => {
  return (
    <div className="relative border-2 ">
      <Image
        src={SectionBg}
        alt="sectionBgImage"
        className="w-full min-h-[150px]"
      ></Image>
      <div className="absolute inset-0 ">
        <div className="flex flex-col justify-center items-center w-full h-full px-4 py-4 text-primary-white lg:gap-y-8 md:gap-y-2">
          <div className="flex flex-col justify-center items-center lg:gap-y-4 md:gap-y-2 gap-y-1">
            <p className="text-center text-primary-white lg:text-2xl md:text-lg text-[12px]  xl:max-w-6xl md:max-w-3xl max-w-xl">
              Ready to Transform Your Sessions? Purchase the All-Inclusive Deck
              today for just $100 and unlock a world of representation and
              learning!
            </p>
            <Link href="/sign-up">
              <Button className="relative overflow-hidden rounded-full bg-gradient-to-b  from-amber-800/90  via-amber-700/90  to-amber-500/90 lg:px-14 px-8  md:py-6 py-2 h-7  md:text-lg text-[12px]  font-medium  text-white  shadow-[0_0_15px_rgba(251,191,36,0.5)] backdrop-blur-sm  transition-all  hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] /95 w-fit ">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowSection;
