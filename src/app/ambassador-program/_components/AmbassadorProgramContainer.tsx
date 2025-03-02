import Container from "@/components/shared/Container";
import PageTitle from "@/components/shared/PageTitle";
import ApplicationForm from "./ApplicationForm";
import waterMarkImage1 from "@/assets/terms/waterMarkImage1.png";
import waterMarkImage2 from "@/assets/terms/waterMarkImage2.png";
import waterMarkImage4 from "@/assets/terms/waterMarkImage5.png";
import waterMarkImage5 from "@/assets/terms/waterMarkImage4.png";
import Image from "next/image";

const AmbassadorProgramContainer = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Watermark Images - Set behind everything */}
      <div className="absolute top-0 left-0 z-0">
        <Image src={waterMarkImage1} alt="Watermark" className="opacity-80" />
      </div>
      <div className="absolute top-1/2 left-0 z-0">
        <Image src={waterMarkImage2} alt="Watermark" className="opacity-80" />
      </div>
      <div className="absolute top-1/2 right-0 z-0">
        <Image src={waterMarkImage4} alt="Watermark" className="opacity-80" />
      </div>
      <div className="absolute top-3/4 right-0 z-0">
        <Image src={waterMarkImage4} alt="Watermark" className="opacity-80" />
      </div>
      <div className="absolute top-0 right-0 z-0">
        <Image src={waterMarkImage5} alt="Watermark" className="opacity-80" />
      </div>

      {/* Content - Placed above the watermark images */}
      <div className="relative z-10 flex flex-col items-center justify-center lg:gap-y-16 gap-y-8">
        <PageTitle title="Voices in Action"></PageTitle>
        <Container>
          <p className="lg:text-3xl text-xl text-center max-w-4xl text-[#482F10] font-lucida">
            Join Our Mission! <br /> Amplify representation and inspire change.
            Help us reach more educators, families, and therapists who can
            benefit from authentic materials.
          </p>
        </Container>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default AmbassadorProgramContainer;
