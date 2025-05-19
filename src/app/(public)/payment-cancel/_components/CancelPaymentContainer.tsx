"use client";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import Link from "next/link";
import lottieAni from "@/assets/lottie-files/error_animation.json";

const CancelPaymentContainer = () => {
  return (
    <>
      <Container className="flex items-center justify-center flex-col min-h-[calc(100vh-250px)]">
        <Lottie
          animationData={lottieAni}
          loop={true}
          className="w-[300px] md:w-[500px] lg:w-[500px]"
        ></Lottie>

        <h1 className="text-5xl font-medium text-green-800">
          Something went wrong{" "}
        </h1>
        <div className="mt-5 space-x-2">
          <Link href={"/"}>
            <Button
              variant={"outline"}
              className="bg-[#684B3C] text-white  px-16 py-6 text-lg"
            >
              Home
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default CancelPaymentContainer;
