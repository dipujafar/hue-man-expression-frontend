import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import RepresentationImage from "@/assets/home/RepresentationSectionImage.png";
import Image from "next/image";
import designImage from "@/assets/home/designImage1.png";
import designImage2 from "@/assets/home/designImage2.png";

const RepresentationSection = () => {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="bg-gradient-to-r from-[#4C3519] to-[#807557] py-20 z-0">
        <Container className="flex flex-col-reverse md:flex-row justify-between gap-x-2 text-primary-white items-center gap-y-5">
          {/* Content */}
          <div className="xl:space-y-8 md:space-y-4 space-y-3 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-start z-10">
            <h2 className="font-baloo xl:text-5xl text-3xl font-bold">
              Representation reflects the beauty of our reality!
            </h2>
            <p className="lg:text-lg font-lora">
              We create tools and resources designed to empower learners,
              educators, and therapists through authentic representation.
            </p>
            {/* <Button className="bg-primary-white text-[#684B3C] hover:text-primary-white group overflow-hidden rounded-none hover:bg-primary-white/70 hover:rounded-md">
              Learn more |{" "}
              <ChevronsRight className="group-hover:translate-x-5 duration-1000" />
            </Button> */}
          </div>
          {/* Image */}
          <div className="flex-1 z-10">
            <Image src={RepresentationImage} alt="RepresentationImage" />
          </div>
        </Container>
      </div>

      {/* Absolute images above background but below content */}
      <div className="absolute top-0 left-0 z-1">
        <Image src={designImage} alt="designImage" className="!z-[1]" />
      </div>
      <div className="absolute -bottom-1 right-0 z-1 hidden md:block">
        <Image src={designImage2} alt="designImage" className="!z-[1]" />
      </div>
    </div>
  );
};

export default RepresentationSection;
