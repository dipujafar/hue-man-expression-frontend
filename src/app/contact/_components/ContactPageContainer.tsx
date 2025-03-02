import PageTitle from "@/components/shared/PageTitle";
import React from "react";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import Container from "@/components/shared/Container";
import waterMarkImage1 from "@/assets/terms/waterMarkImage1.png";
import waterMarkImage2 from "@/assets/terms/waterMarkImage2.png";
import waterMarkImage4 from "@/assets/terms/waterMarkImage5.png";
import Image from "next/image";

const ContactPageContainer = () => {
  return (
    <div className="relative ">
      {/* Content  */}
      <div className="relative md:space-y-20 space-y-10 z-10">
        <PageTitle title="The Conversation Continues"></PageTitle>
        <Container className="flex justify-center gap-x-6 lg:flex-row  flex-col-reverse items-center gap-y-10">
          <ContactInformation></ContactInformation>
          <ContactForm></ContactForm>
        </Container>
      </div>

      {/* Watermark images */}
      <div className="absolute top-0 left-0">
        <Image src={waterMarkImage1} alt="Watermark" className="opacity-80" />
      </div>

      <div className="absolute top-0 right-0">
        <Image
          src={waterMarkImage2}
          alt="Watermark"
          className="opacity-80 rotate-180"
        />
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

export default ContactPageContainer;
