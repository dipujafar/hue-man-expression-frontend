"use client";
import SectionBg from "@/assets/expression-gallery/bgImage.png";
import Image from "next/image";
import CommonButton from "@/components/ui/common-button";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";

const BuyNowSection = () => {
  const [createPayment, { isLoading }] = useCreatePaymentMutation();
  return (
    <div className="relative ">
      <Image
        src={SectionBg}
        alt="sectionBgImage"
        className="w-full min-h-[150px]"
      ></Image>
      <div className="absolute inset-0 ">
        <div className="flex flex-col justify-center items-center w-full h-full px-4 py-4 text-primary-white lg:gap-y-8 md:gap-y-2">
          <div className="flex flex-col justify-center items-center lg:gap-y-4 md:gap-y-2 gap-y-1">
            <p className="text-center text-primary-white xl:text-2xl  md:text-sm text-[12px]  xl:max-w-6xl md:max-w-3xl max-w-xl">
              Ready to Transform Your Sessions? Purchase the All-Inclusive Deck
              today for just $100 and unlock a world of representation and
              learning!
            </p>

            <CommonButton disable={isLoading}>Buy Now</CommonButton>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowSection;
