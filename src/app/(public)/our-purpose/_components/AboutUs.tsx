import sectionImage from "@/assets/our-purpose/aboutUsImage.png";
import InfoSection from "@/components/shared/InfoSection";

const AboutUs = () => {
  return (
    <div className="section-margin">
      <InfoSection
        image={sectionImage}
        title="About Us"
        contentClass="flex flex-col  max-w-2xl"
        descriptionClass="text-primary-black "
        waterMarkClass="-bottom-16 right-0"
        // imageClass="w-auto justify-self-end"
        className=" lg:flex-row-reverse"
      >
        <div className="space-y-5">
          <p>
            Hue-man Expressions was founded with a deep commitment to filling a
            critical gap in educational and therapeutic resources. Recognizing
            the lack of diverse representation in traditional tools, we set out
            to create culturally relevant visual communication resources for
            Behavior Analysis, Speech Therapy, and Special Education. Our tools
            feature Black and brown children, teens, and adults, making therapy
            more relatable, engaging, and effective for neurodivergent learners.
          </p>
          <p>
            Guided by the belief that “Representation Reflects the Beauty of Our
            Reality,” Hue-man Expressions is dedicated to celebrating diversity
            in every resource we create. We are not just about acknowledging
            differences; we are about celebrating them, ensuring that every
            child, teen, and adult sees their unique identity reflected in the
            tools that guide their learning and growth.
          </p>
          <div>
            <h4 className="font-semibold">
              Why Hue-man Expressions is Important:
            </h4>
            <p>
              Hue-man Expressions is not just a business—it is a movement toward
              greater inclusion and equity in educational and therapeutic
              practices. In a world where representation is often overlooked, we
              ensure that Black and brown children, teens, and adults are not
              just participants in the learning process but are reflected in the
              resources used to help them succeed. Our work empowers learners by
              offering tools that resonate with their experiences, creating an
              environment where they feel seen, heard, and valued. We believe
              that true learning happens when individuals can connect with the
              materials that support their growth—and at Hue-man Expressions, we
              make that connection possible.
            </p>
          </div>
        </div>
      </InfoSection>
    </div>
  );
};

export default AboutUs;
