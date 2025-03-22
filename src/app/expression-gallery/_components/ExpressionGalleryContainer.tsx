import Container from "@/components/shared/Container";
import PageTitle from "@/components/shared/PageTitle";
import BuyNowSection from "./BuyNowSection";
import AllCards from "./AllCards";
import ImportantInformation from "./ImportantInformation";

const ExpressionGalleryContainer = () => {
  return (
    <div className="relative ">
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
