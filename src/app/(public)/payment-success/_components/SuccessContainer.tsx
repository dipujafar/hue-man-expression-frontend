"use client";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import lottieAni from "@/assets/lottie-files/Main Scene _5.json";
import Link from "next/link";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const SuccessContainer = () => {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  useEffect(() => {
    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    const interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }, []);
  return (
    <>
      <Container className="flex items-center justify-center flex-col min-h-[calc(100vh-240px)]">
        <Lottie
          animationData={lottieAni}
          loop={false}
          className="w-[300px] md:w-[500px] lg:w-[700px] h-fit max-h-[480px]"
        ></Lottie>

        <h1 className="text-5xl font-medium text-green-800">Successfully </h1>
        <div className="mt-1 space-x-2">
          <Link href={"/"} replace>
            <Button variant={"outline"} className=" text-primary-orange w-[120px]">
              Home
            </Button>
          </Link>
          <Link href={"/user-profile"} replace>
            <Button className="bg-[#684B3C] w-[120px]">Dashboard</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default SuccessContainer;
