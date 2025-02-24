import sectionImage from "@/assets/our-purpose/purposeImage1.png";
import InfoSection from "@/components/shared/InfoSection";

const Mission = () => {
  return (
    <div className="section-margin ">
      <InfoSection
        image={sectionImage}
        title="MISSION"
        contentClass="flex flex-col  max-w-2xl"
        descriptionClass="text-primary-black "
        waterMarkClass="-bottom-16 right-0"
        imageClass="w-auto justify-self-end"
        className="items-center"
      >
        <div>
          <p>
            At Hue-man Expressions, our mission is to provide inclusive and
            empowering visual resources that reflect the beauty of diversity. We
            are dedicated to creating educational and therapeutic tools that
            authentically represent Black and brown children, teens, and adults,
            ensuring every learner sees themselves in the materials they engage
            with. Through our commitment to representation, we aim to foster
            more meaningful, engaging, and effective therapy experiences for
            neurodivergent individuals.
          </p>
        </div>
      </InfoSection>
    </div>
  );
};

export default Mission;
