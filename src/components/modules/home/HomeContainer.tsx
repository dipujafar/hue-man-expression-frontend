import PageTitle from "@/components/shared/PageTitle";
import React from "react";
import BannerSection from "./BannerSection";
import RepresentationSection from "./RepresentationSection";

const HomeContainer = () => {
  return (
    <div className="relative !z-[99]">
      <div className="lg:space-y-10  space-y-6">
        <PageTitle title="Hue-Man Expressions"></PageTitle>
        <div className="lg:space-y-24 space-y-12">
          <BannerSection></BannerSection>
          <RepresentationSection></RepresentationSection>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
