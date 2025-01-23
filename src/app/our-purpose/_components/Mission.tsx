import sectionImage from "@/assets/our-purpose/purposeImage1.png";
import InfoSection from "@/components/shared/InfoSection";
import { Button } from "@/components/ui/button";

const Mission = () => {
  return (
    <div className="section">
      <InfoSection
        image={sectionImage}
        title="MISSION"
        subTitle="About us"
        contentClass="flex flex-col justify-center max-w-2xl"
        descriptionClass="text-primary-black"
        waterMarkClass="-bottom-16 right-0"
      >
        <div>
          <p>
            At Hue-Man Links Incorporated, our mission is to connect families
            whose loved ones are neurodivergent with qualified, specialized
            sitters. We understand the demands and challenges families face, and
            we're dedicated to providing trusted, compassionate care that offers
            peace of mind. Our goal is to ease the burden, giving families the
            confidence to take time for themselves, knowing their loved one is
            in capable and caring hands. We strive to be the link that supports
            families in finding the right care, so they can focus on balance and
            well-being. 
          </p>
        </div>
      </InfoSection>
    </div>
  );
};

export default Mission;
