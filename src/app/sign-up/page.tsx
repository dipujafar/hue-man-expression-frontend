import React from "react";
import SingUpForm from "./components/SingUpForm";
import waterMarkImage6 from "@/assets/our-purpose/waterMarkImage6.png";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="relative !z-[99]">
      <div className="absolute bottom-0 right-0">
        <Image src={waterMarkImage6} alt="Watermark" className="opacity-80" />
      </div>
      <div className="absolute md:-top-10 -left-3 ">
        <Image src={waterMarkImage6} alt="Watermark" className="opacity-80" />
      </div>

      {/* main contents */}
      <div className="flex justify-center">
        <SingUpForm></SingUpForm>
      </div>
    </div>
  );
};

export default SignUpPage;
