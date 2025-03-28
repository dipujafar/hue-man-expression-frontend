"use client";
import { useEffect, useRef, useState } from "react";
import CommonButton from "@/components/shared/common-button";
import Container from "@/components/shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const bannerImage = [
  "/bannerImage1.png",
  "/bannerImage2.png",
  "/bannerImage3.png",
  "/bannerImage4.png",
];

const BannerSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    // Call once to set initial state
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Container>
      <div className="relative">
        <div>
          <Carousel
            opts={{
              loop: true,
              duration: 60,
              align: "start",
            }}
            plugins={[plugin?.current]}
            className="w-full pl-2 pr-2"
            setApi={setApi}
          >
            <CarouselContent>
              {bannerImage?.map((image: string, index: number) => (
                <CarouselItem key={index}>
                  <Image
                    src={image || "/placeholder.svg"}
                    width={2400}
                    height={2400}
                    alt="banner_image"
                    quality={100}
                    className=" w-full max-w-[2500px] rounded-3xl max-h-[450px] md:max-h-[500px] lg:max-h-[680px] xl:max-h-[750px] 2xl:max-h-[900px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="space-y-3 absolute inset-0 text-white bg-black bg-opacity-50 rounded-2xl">
          <div className="flex justify-center items-center flex-col h-full 2xl:px-20 md:px-5 gap-y-5 ">
            <p className="lg:text-5xl text-xl text-center font-lucida">
              Empowering communication. Celebrating diversity. Changing lives.
            </p>
            <CommonButton className="">Explore the App</CommonButton>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4 absolute -bottom-6 left-0 right-0">
          {bannerImage.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all ${
                current === index ? "w-8 bg-black" : "w-2.5 bg-black/50"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BannerSection;
