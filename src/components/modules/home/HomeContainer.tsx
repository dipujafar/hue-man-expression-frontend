import PageTitle from "@/components/shared/PageTitle";
import React from "react";
import BannerSection from "./BannerSection";
import RepresentationSection from "./RepresentationSection";
import FooterSection from "@/components/shared/FooterSection";
import Container from "@/components/shared/Container";
import DownloadAppSection from "./DownloadAppSection";
import DownloadApp from "@/components/shared/DownloadApp";

const HomeContainer = () => {
  return (
    <div className="relative !z-[99]">
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
