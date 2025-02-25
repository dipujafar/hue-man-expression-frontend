"use client";
import Container from "@/components/shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
  return (
    <Container>
      <Carousel
        opts={{
          loop: true,
          duration: 55,
          align: "start",
        }}
        plugins={[
          // @ts-ignore
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full pl-4 pr-2"
      >
        <CarouselContent className="relative">
          {bannerImage?.map((image: string, index: number) => (
            <CarouselItem key={index}>
              <Image
                src={image}
                width={2400}
                height={2400}
                alt="banner_image"
                quality={100}
                className=" w-full max-w-[2500px] rounded-3xl max-h-[350px] md:max-h-[400px] lg:max-h-[480px] 2xl:max-h-[600px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Container>
  );
};

export default BannerSection;
