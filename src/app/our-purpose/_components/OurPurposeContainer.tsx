import Container from "@/components/shared/Container";
import PageTitle from "@/components/shared/PageTitle";
import Mission from "./Mission";
import AboutUs from "./AboutUs";
import Founder from "./Founder";

const OurPurposeContainer = () => {
  return (
    <div>
      <Container className="space-y-16">
        <PageTitle title="Our Purpose"></PageTitle>

        <Mission></Mission>

        <AboutUs></AboutUs>
        <Founder></Founder>
      </Container>
    </div>
  );
};

export default OurPurposeContainer;
