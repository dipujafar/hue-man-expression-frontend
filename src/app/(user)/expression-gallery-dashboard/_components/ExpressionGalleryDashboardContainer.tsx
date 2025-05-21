import Container from "@/components/shared/Container";
import PageTitle from "@/components/shared/PageTitle";

import waterMarkImage1 from "@/assets/terms/waterMarkImage1.png";
import waterMarkImage2 from "@/assets/terms/waterMarkImage2.png";
import waterMarkImage4 from "@/assets/terms/waterMarkImage5.png";
import waterMarkImage5 from "@/assets/terms/waterMarkImage4.png";
import waterMarkImage6 from "@/assets/terms/waterMarkImage10.png";
import waterMarkImage7 from "@/assets/terms/waterMarkImage9.png";
import Image from "next/image";
import AllCardsDashboard from "./AllCardsDashboard";
import ImportantInformationDashboard from "./ImportantInformationDashboard";
import BuyNowSection from "@/app/(public)/expression-gallery/_components/BuyNowSection";

const ExpressionGalleryDashboardContainer = () => {
  return (
    <div className="relative ">
      {/* Watermark Images Container */}
     

      {/* Content  */}
      <div className="relative">
        <div className="lg:space-y-10 space-y-6">
          <PageTitle
            title="Representation Reflects the Beauty of Our Reality"
            className="md:text-5xl text-3xl"
          ></PageTitle>
          <div className="lg:space-y-10 space-y-6 font-lucida">
            <p className="xl:text-xl text-lg text-center text-[#482F10]">
              Experience the full power of Hue-man Expressions with
              our All-Inclusive Deck! This comprehensive package gives you
              access to all of our culturally inclusive, high-quality visuals.
              Designed to empower learners and enhance therapy or education
              sessions, this deck ensures that every professional and family has
              the tools they need to foster growth, representation, and
              engagement.
            </p>
            <div>
              <h3 className="xl:text-3xl text-2xl text-center text-[#C37E19] font-medium mb-4">
                Why Choose the All-Inclusive Deck?
              </h3>
              <ul className="max-w-5xl mx-auto xl:text-xl text-lg lg:space-y-4 space-y-2 ">
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
          </div>
          <BuyNowSection></BuyNowSection>
          <AllCardsDashboard></AllCardsDashboard>
          <ImportantInformationDashboard></ImportantInformationDashboard>
        </div>
      </div>
    </div>
  );
};

export default ExpressionGalleryDashboardContainer;
