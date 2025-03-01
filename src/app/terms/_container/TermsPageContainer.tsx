import PageTitle from "@/components/shared/PageTitle";
import TermsConditions from "./TermsConditions";
import waterMarkImage1 from "@/assets/terms/waterMarkImage1.png";
import waterMarkImage2 from "@/assets/terms/waterMarkImage2.png";
import waterMarkImage3 from "@/assets/terms/waterMarkImage4.png";
import waterMarkImage4 from "@/assets/terms/waterMarkImage5.png";
import Image from "next/image";

const TermsPageContainer = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Content  */}
      <div className="relative lg:space-y-10 space-y-6 z-10">
        <PageTitle title="Terms and Conditions" />
        <TermsConditions />
      </div>

      {/* Watermark images */}
      <div className="absolute top-0 left-0">
        <Image src={waterMarkImage1} alt="Watermark" className="opacity-80" />
      </div>
      <div className="absolute top-1/2 left-0">
        <Image src={waterMarkImage2} alt="Watermark" className="opacity-80" />
      </div>
      <div className="absolute top-0 right-0">
        <Image src={waterMarkImage3} alt="Watermark" className="opacity-80" />
      </div>
      <div className="absolute top-1/2">
        <Image src={waterMarkImage4} alt="Watermark" className="opacity-80" />
      </div>
      <div className="absolute top-3/4 right-0">
        <Image src={waterMarkImage4} alt="Watermark" className="opacity-80" />
      </div>
    </div>
  );
};

export default TermsPageContainer;
