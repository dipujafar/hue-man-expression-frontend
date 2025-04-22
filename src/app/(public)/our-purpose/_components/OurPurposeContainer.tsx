import Container from "@/components/shared/Container";
import PageTitle from "@/components/shared/PageTitle";
import Mission from "./Mission";
import AboutUs from "./AboutUs";
import Founder from "./Founder";
import waterMarkImage1 from "@/assets/our-purpose/waterMarkImage1.png";
import waterMarkImage2 from "@/assets/our-purpose/waterMarkImage2.png";
import waterMarkImage3 from "@/assets/our-purpose/waterMarkImage3.png";
import waterMarkImage4 from "@/assets/our-purpose/waterMarkImage4.png";
import waterMarkImage5 from "@/assets/our-purpose/waterMarkImage5.png";
import waterMarkImage6 from "@/assets/our-purpose/waterMarkImage6.png";
import Image from "next/image";
import FooterSection from "@/components/shared/FooterSection";

const OurPurposeContainer = () => {
  return (
    <div className="relative !z-[99]">
      <div className="space-y-10 lg:space-y-32">
        <PageTitle title="Our Purpose"></PageTitle>
        <Container>
          <Mission></Mission>
        </Container>
        <div className="relative">
          <Container>
            <AboutUs></AboutUs>
          </Container>
          <div className="absolute -top-40 z-[-99] ">
            <Image src={waterMarkImage2} alt="watermark"></Image>
          </div>
          <div className="absolute -bottom-32 z-[-99] ">
            <Image src={waterMarkImage4} alt="watermark"></Image>
          </div>
          <div className="absolute bottom-1/3 -left-3 z-[-99] ">
            <Image src={waterMarkImage6} alt="watermark"></Image>
          </div>
        </div>
        <div className="relative">
          <Container>
            <Founder></Founder>
          </Container>
          <div className="absolute -bottom-32 z-[-99] ">
            <Image src={waterMarkImage5} alt="watermark"></Image>
          </div>
          <div className="absolute bottom-1/3 right-0 z-[-8] ">
            <Image src={waterMarkImage6} alt="watermark"></Image>
          </div>
        </div>
        <Container>
          <FooterSection></FooterSection>
        </Container>
      </div>
      {/* watermark images */}
      <div className="absolute md:-top-16 -top-8 z-[-9] ">
        <Image src={waterMarkImage1} alt="watermark"></Image>
      </div>

      <div className="absolute md:-top-16 -top-8 right-0  z-[-9] ">
        <Image src={waterMarkImage3} alt="watermark"></Image>
      </div>
      <div className="absolute -bottom-0 right-0  z-[-9] ">
        <Image src={waterMarkImage3} alt="watermark"></Image>
      </div>
      <div className="absolute -bottom-0   z-[-9] ">
        <Image src={waterMarkImage2} alt="watermark"></Image>
      </div>
    </div>
  );
};

export default OurPurposeContainer;
