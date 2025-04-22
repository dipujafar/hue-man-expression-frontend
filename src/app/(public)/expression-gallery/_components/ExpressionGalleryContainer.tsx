import Container from "@/components/shared/Container";
import PageTitle from "@/components/shared/PageTitle";
import BuyNowSection from "./BuyNowSection";
import AllCards from "./AllCards";
import ImportantInformation from "./ImportantInformation";
import waterMarkImage1 from "@/assets/terms/waterMarkImage1.png";
import waterMarkImage2 from "@/assets/terms/waterMarkImage2.png";
import waterMarkImage4 from "@/assets/terms/waterMarkImage5.png";
import waterMarkImage5 from "@/assets/terms/waterMarkImage4.png";
import waterMarkImage6 from "@/assets/terms/waterMarkImage10.png";
import waterMarkImage7 from "@/assets/terms/waterMarkImage9.png";
import Image from "next/image";

const ExpressionGalleryContainer = () => {
  return (
    <div className="relative ">
      {/* Watermark Images Container */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute top-0 left-0">
          <Image src={waterMarkImage1} alt="Watermark" className="opacity-80" />
        </div>
        <div className="absolute top-1/3 left-0">
          <Image src={waterMarkImage2} alt="Watermark" className="opacity-80" />
        </div>

        <div className="absolute top-36 right-0">
          <Image src={waterMarkImage5} alt="Watermark" className="opacity-80" />
        </div>
        <div className="absolute -bottom-10 right-0">
          <Image src={waterMarkImage6} alt="Watermark" className="opacity-80" />
        </div>
        <div className="absolute -bottom-10 left-0">
          <Image src={waterMarkImage7} alt="Watermark" className="opacity-80" />
        </div>
      </div>
      <div className="absolute top-[75%] ">
        <Image
          src={waterMarkImage4}
          alt="Watermark"
          className="opacity-40 xl:opacity-100"
        />
      </div>
      <div className="absolute top-[30%] right-0">
        <Image
          src={waterMarkImage4}
          alt="Watermark"
          className="opacity-40 xl:opacity-100"
        />
      </div>
      <div className="absolute top-[60%] right-0">
        <Image
          src={waterMarkImage4}
          alt="Watermark"
          className="opacity-40 xl:opacity-100"
        />
      </div>
      <div className="absolute top-[90%] right-0">
        <Image
          src={waterMarkImage4}
          alt="Watermark"
          className="opacity-40 xl:opacity-100"
        />
      </div>
      <div className="absolute top-[15%] ">
        <Image
          src={waterMarkImage4}
          alt="Watermark"
          className="opacity-40 xl:opacity-100"
        />
      </div>
      <div className="absolute top-[45%] ">
        <Image
          src={waterMarkImage4}
          alt="Watermark"
          className="opacity-40 xl:opacity-100"
        />
      </div>

      {/* Content  */}
      <div className="relative">
        <div className="lg:space-y-20 space-y-10">
          <PageTitle title="Representation Reflects the Beauty of Our Reality"></PageTitle>
          <Container className="lg:space-y-10 space-y-6 font-lucida">
            <p className="lg:text-3xl text-xl text-center text-[#482F10]">
              Experience the full power of Hue-man Expressions with
              our All-Inclusive Deck! This comprehensive package gives you
              access to all of our culturally inclusive, high-quality visuals.
              Designed to empower learners and enhance therapy or education
              sessions, this deck ensures that every professional and family has
              the tools they need to foster growth, representation, and
              engagement.
            </p>
            <div>
              <h3 className="lg:text-3xl text-xl text-center text-[#C37E19] font-medium mb-4">
                Why Choose the All-Inclusive Deck?
              </h3>
              <ul className="max-w-3xl mx-auto lg:text-3xl text-xl lg:space-y-4 space-y-2 ">
                <li>
                  • Culturally Inclusive: Celebrate diversity and ensure
                  learners see themselves reflected in their materials.
                </li>
                <li>
                  • Engaging & Relatable: Make learning fun and meaningful with
                  visuals designed to connect.
                </li>
                <li>
                  • Convenient & Complete: Access every card in one easy
                  package, no need to pick and choose.
                </li>
              </ul>
            </div>
          </Container>
          <Container>
            <BuyNowSection></BuyNowSection>
          </Container>
          <Container>
            <AllCards></AllCards>
          </Container>
          <Container>
            <ImportantInformation></ImportantInformation>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ExpressionGalleryContainer;
