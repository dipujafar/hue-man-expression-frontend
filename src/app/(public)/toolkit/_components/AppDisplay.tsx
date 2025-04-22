import Container from "@/components/shared/Container";
import mobileAppImage from "@/assets/home/mobileApp.png";
import waterMarkImage from "@/assets/home/downloadAppSectionBg.png";
import Image from "next/image";

const AppDisplay = () => {
  return (
    <div className="bg-gradient-to-r from-[#493824] to-[#6d614a] py-2 relative overflow-hidden z-0">
      {/* Watermark Image (Absolute) */}
      <div className="absolute inset-0 z-10">
        <Image
          src={waterMarkImage}
          alt="Watermark"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <Container className="relative flex justify-center z-20">
        <Image src={mobileAppImage} alt="mobileAppImage" />
      </Container>
    </div>
  );
};

export default AppDisplay;
