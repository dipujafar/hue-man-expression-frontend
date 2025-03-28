import PageTitle from "@/components/shared/PageTitle";
import React from "react";
import BannerSection from "./BannerSection";
import RepresentationSection from "./RepresentationSection";
import FooterSection from "@/components/shared/FooterSection";
import Container from "@/components/shared/Container";
import DownloadAppSection from "./DownloadAppSection";
import waterMarkImage1 from "@/assets/our-purpose/waterMarkImage1.png";
import waterMarkImage2 from "@/assets/our-purpose/waterMarkImage2.png";
import waterMarkImage3 from "@/assets/our-purpose/waterMarkImage3.png";
import waterMarkImage4 from "@/assets/our-purpose/waterMarkImage4.png";
import waterMarkImage6 from "@/assets/our-purpose/waterMarkImage6.png";
import Image from "next/image";

const HomeContainer = () => {
  return (
    <div className="relative !z-[99]">
      {/* water mark Images */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute md:-top-16 top-0 left-0">
          <Image
            src={waterMarkImage1}
            alt="Watermark"
            className="opacity-40 xl:opacity-100"
          />
        </div>
        <div className="absolute top-[20%] left-0">
          <Image src={waterMarkImage2} alt="Watermark" className="opacity-80" />
        </div>
        <div className="absolute md:-top-16 top-0 right-0 ">
          <Image src={waterMarkImage3} alt="Watermark" className="opacity-80" />
        </div>
        <div className="absolute top-[45%] ">
          <Image src={waterMarkImage4} alt="Watermark" className="opacity-80" />
        </div>

        <div className="absolute  bottom-0 ">
          <Image src={waterMarkImage2} alt="Watermark" className="opacity-80" />
        </div>

        <div className="absolute md:-bottom-16 bottom-0 right-0 ">
          <Image src={waterMarkImage3} alt="Watermark" className="opacity-80" />
        </div>
      </div>
      <div className="absolute -bottom-10 right-0">
        <Image src={waterMarkImage6} alt="Watermark" className="opacity-80" />
      </div>

      <div className="lg:space-y-10  space-y-6">
        <PageTitle title="Hue-Man Expressions"></PageTitle>
        <div className="lg:space-y-24 space-y-12">
          <BannerSection></BannerSection>
          <RepresentationSection></RepresentationSection>
          <DownloadAppSection></DownloadAppSection>
          <Container>
            <FooterSection></FooterSection>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
