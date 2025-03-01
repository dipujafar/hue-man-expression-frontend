import Container from "@/components/shared/Container";
import AppleStoreImage from "@/assets/common/appleStoreAppImage.png";
import playStoreImage from "@/assets/common/PlayStoreAppImage.png";
import mobileAppImage from "@/assets/home/mobileApp.png";
import waterMarkImage from "@/assets/home/downloadAppSectionBg.png";
import Image from "next/image";

const DownloadAppSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#715E48] to-[#84775F] py-14 relative overflow-hidden z-0">
      {/* Watermark Image (Absolute) */}
      <div className="absolute inset-0 z-10">
        <Image
          src={waterMarkImage}
          alt="Watermark"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <Container className="relative flex justify-between items-center z-20">
        <div className="space-y-3 text-primary-white flex-1">
          <h1 className="text-5xl font-bold text-[#C38119]">Download</h1>
          <h1 className="text-5xl font-bold"> Our App TODAY!</h1>
          <p className="max-w-xl">
            The Hue-man Expressions App is a groundbreaking digital platform
            designed to address the gap in representation within educational and
            therapeutic resources. By offering high-quality, culturally
            inclusive visuals and tools, the app supports effective
            communication, learning, and engagement.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Image src={AppleStoreImage} alt="appleStoreImage" />
            <Image src={playStoreImage} alt="playStoreImage" />
          </div>
        </div>

        {/* Mobile App Image */}
        <div className="flex-1">
          <Image src={mobileAppImage} alt="mobileAppImage" />
        </div>
      </Container>
    </div>
  );
};

export default DownloadAppSection;
