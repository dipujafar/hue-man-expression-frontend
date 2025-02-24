import sectionImage from "@/assets/our-purpose/founderImage.png";
import InfoSection from "@/components/shared/InfoSection";

const Founder = () => {
  return (
    <div className="">
      <InfoSection
        image={sectionImage}
        title="Founder Spotlight"
        contentClass="flex flex-col  max-w-2xl"
        descriptionClass="text-primary-black "
        waterMarkClass="-bottom-16 right-0"
        imageClass="w-auto"
      >
        <div className="space-y-5">
          <p>
            Rashida Biera, BCBA and Owner of Hue-man Expressions, is an advocate
            for diversity, equity, and inclusion in the field of Applied
            Behavior Analysis. Originally from Brooklyn, New York, Rashida now
            resides in Atlanta, Georgia. With over a decade of experience in the
            social service industry, she has worked in various capacities—from
            Direct Support Professional to Program Director—before earning her
            master’s degree in Applied Behavior Analysis with an emphasis in
            Autism from Ball State University and becoming a BCBA in 2020.
          </p>
          <p>
            Currently serving as a Regional Director for an autism agency in
            Atlanta, Rashida oversees client care and leads a team of BCBAs. She
            has worked closely with children aged 2-13, focusing on integrating
            families into treatment plans and providing parent training.
            Rashida’s passion for representation and her deep understanding of
            the field have been foundational in the creation of Hue-man
            Expressions, a company that empowers clients by ensuring they are
            seen and heard in the materials used to support their development.
          </p>
        </div>
      </InfoSection>
    </div>
  );
};

export default Founder;
