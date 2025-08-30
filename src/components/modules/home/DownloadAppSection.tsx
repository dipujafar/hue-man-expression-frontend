import Container from "@/components/shared/Container";
import AppleStoreImage from "@/assets/common/appleStoreAppImage.png";
import playStoreImage from "@/assets/common/PlayStoreAppImage.png";
import mobileAppImage from "@/assets/home/mobileApp2.png";
import waterMarkImage from "@/assets/home/downloadAppSectionBg.png";
import Image from "next/image";

import { PopoverContent } from "@radix-ui/react-popover";
import { Popover, PopoverTrigger } from "@/components/ui/popover";

const DownloadAppSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#493824] to-[#6d614a] py-14 relative overflow-hidden z-0">
      {/* Watermark Image (Absolute) */}
      <div className="absolute inset-0 z-10">
        <Image
          src={waterMarkImage}
          alt="Watermark"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <Container className="relative flex flex-col-reverse lg:flex-row justify-between items-center z-20">
        <div className="md:space-y-3 space-y-1 text-primary-white flex-1">
          <h1 className="md:text-5xl text-2xl  font-bold text-[#C38119]">
            Download
          </h1>
          <h1 className="md:text-5xl text-2xl font-bold"> Our App TODAY!</h1>
          <p className="max-w-xl">
            The Hue-man Expressions App is a groundbreaking digital platform
            designed to address the gap in representation within educational and
            therapeutic resources. By offering high-quality, culturally
            inclusive visuals and tools, the app supports effective
            communication, learning, and engagement.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap justify-center items-center gap-2 ">
              <Popover>
                <PopoverTrigger asChild>
                  <Image src={AppleStoreImage} alt="appleStoreImage"></Image>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="bg-primary-white text-black p-2 mt-2 text-xl">
                    <h1>
                      It will be redirected to the mobile application when the
                      mobile application is published.
                    </h1>
                  </div>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Image src={playStoreImage} alt="playStoreImage"></Image>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="bg-primary-white text-black p-2 mt-2 text-xl">
                    <h1>
                      It will be redirected to the mobile application when the
                      mobile application is published.
                    </h1>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
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
