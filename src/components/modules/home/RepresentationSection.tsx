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
      <div className="bg-gradient-to-r from-[#4C3519] to-[#807557] py-20">
        <Container className="flex flex-col-reverse md:flex-row justify-between gap-x-2 text-primary-white items-center gap-y-5">
          <div className="xl:space-y-8 md:space-y-4 space-y-3 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-start">
            <h2 className="font-baloo xl:text-5xl text-3xl  font-bold">
              Representation reflects the beauty of our reality!
            </h2>
            <p className="lg:text-lg font-lora">
              We create tools and resources designed to empower learners,
              educators, and therapists through authentic representation.
            </p>
            <Button className="bg-primary-white text-[#684B3C] hover:text-primary-white group overflow-hidden rounded-none">
              Learn more |{" "}
              <ChevronsRight className="group-hover:translate-x-5 duration-1000 " />
            </Button>
          </div>
          <div className="flex-1">
            <Image src={RepresentationImage} alt=" RepresentationImage"></Image>
          </div>
        </Container>
      </div>

      <div className="absolute top-0 ">
        <Image src={designImage} alt="designImage"></Image>
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src={designImage2} alt="designImage"></Image>
      </div>
    </div>
  );
};

export default RepresentationSection;
