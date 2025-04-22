import PageTitle from "@/components/shared/PageTitle";
import AppDisplay from "./AppDisplay";
import DescriptionSection from "./DescriptionSection";
import SubscriptionPlan from "./SubscriptionPlan";
import DownloadApp from "@/components/shared/DownloadApp";
import waterMarkImage1 from "@/assets/terms/waterMarkImage1.png";
import waterMarkImage2 from "@/assets/terms/waterMarkImage2.png";
import waterMarkImage4 from "@/assets/terms/waterMarkImage5.png";
import waterMarkImage5 from "@/assets/terms/waterMarkImage4.png";
import waterMarkImage6 from "@/assets/terms/waterMarkImage10.png";
import waterMarkImage7 from "@/assets/terms/waterMarkImage9.png";
import Image from "next/image";

const ToolkitPageContainer = () => {
  return (
    <div className="relative">
      {/* Watermark Images Container */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute top-1/4 left-0">
          <Image src={waterMarkImage1} alt="Watermark" className="opacity-80" />
        </div>
        <div className="absolute top-[54%] left-0">
          <Image src={waterMarkImage2} alt="Watermark" className="opacity-80" />
        </div>

        <div className="absolute top-36 right-0">
          <Image src={waterMarkImage5} alt="Watermark" className="opacity-80" />
        </div>
        <div className="absolute -bottom-10 right-0">
          <Image src={waterMarkImage6} alt="Watermark" className="opacity-80" />
        </div>
        <div className="absolute -bottom-10 left-0">
          <Image src={waterMarkImage7} alt="Watermark" className="opacity-80" />
        </div>
      </div>
      <div className="absolute top-3/4 right-0">
        <Image src={waterMarkImage4} alt="Watermark" />
      </div>
      <div className="absolute top-1/2 ">
        <Image
          src={waterMarkImage4}
          alt="Watermark"
          className="opacity-40 xl:opacity-100"
        />
      </div>

      {/* Content */}
      <div className="space-y-10 lg:space-y-20 z-10 relative">
        <PageTitle title="The App Experience"></PageTitle>
        <AppDisplay></AppDisplay>
        <DescriptionSection></DescriptionSection>
        <SubscriptionPlan></SubscriptionPlan>
        <div>
          <h4 className="max-w-4xl text-center lg:text-2xl text-xl font-lucida mx-auto mb-5 text-[#482F10]">
            Discover the power of inclusion with the Hue-man Expressions App.
            Download now and begin your journey towards creating meaningful,
            equitable, and engaging learning experiences.
          </h4>
          <DownloadApp></DownloadApp>
        </div>
      </div>
    </div>
  );
};

export default ToolkitPageContainer;
