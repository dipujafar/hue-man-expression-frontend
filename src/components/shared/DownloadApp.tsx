import AppleStoreImage from "@/assets/common/appleStoreAppImage.png";
import playStoreImage from "@/assets/common/PlayStoreAppImage.png";
import Image from "next/image";
import Container from "./Container";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
const DownloadApp = () => {
  return (
    <Container>
      <h1 className="text-center lg:text-5xl text-3xl text-[#C38119] mb-5 font-semibold">
        Download The App
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-2 ">
        <Popover>
          <PopoverTrigger asChild>
            <Image src={AppleStoreImage} alt="appleStoreImage"></Image>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="bg-primary-white text-black p-2 mt-2 text-xl">
              <h1>
                It will be redirected to the mobile application when the mobile
                application is published.
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
                It will be redirected to the mobile application when the mobile
                application is published.
              </h1>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </Container>
  );
};

export default DownloadApp;
