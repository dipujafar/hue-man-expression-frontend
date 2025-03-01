import AppleStoreImage from "@/assets/common/appleStoreAppImage.png";
import playStoreImage from "@/assets/common/PlayStoreAppImage.png";
import Image from "next/image";
import Container from "./Container";
const DownloadApp = () => {
  return (
    <Container>
      <h1 className="text-center lg:text-5xl text-3xl text-[#C38119] mb-5 font-semibold">
        Download The App
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-2 ">
        <Image src={AppleStoreImage} alt="appleStoreImage"></Image>
        <Image src={playStoreImage} alt="playStoreImage"></Image>
      </div>
    </Container>
  );
};

export default DownloadApp;
