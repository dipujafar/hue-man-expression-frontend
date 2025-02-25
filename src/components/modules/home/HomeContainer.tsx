import PageTitle from "@/components/shared/PageTitle";
import React from "react";
import BannerSection from "./BannerSection";

const HomeContainer = () => {
  return (
    <div className="relative !z-[99]">
      <div className="lg:space-y-10  space-y-6">
        <PageTitle title="Hue-Man Expressions"></PageTitle>
        <BannerSection></BannerSection>
      </div>
    </div>
  );
};

export default HomeContainer;
