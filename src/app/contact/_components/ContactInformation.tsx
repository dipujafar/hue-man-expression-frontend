import facebookIcon from "@/assets/icon/facebook.png";
import instagramIcon from "@/assets/icon/instragram.png";
import tiktokIcon from "@/assets/icon/tiktok.png";
import tptIcon from "@/assets/icon/tpt.png";
import etsyIcon from "@/assets/icon/etsy.png";
import Image from "next/image";
import Link from "next/link";

const ContactInformation = () => {
  return (
    <div className="lg:space-y-14 space-y-6 text-[#684B3C]">
      {/* =============== social media */}
      <div>
        <h1 className="md:text-3xl font-montserrat  font-bold text-xl">
          Social Media
        </h1>

        <div className="flex gap-x-2  items-center  w-full ">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="border border-black p-1 rounded-full hover:bg-[#c7a290] duration-500"
          >
            <Image
              src={instagramIcon}
              alt="LinkedInIcon"
              className="size-7"
            ></Image>
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="border border-black p-1 rounded-full hover:bg-[#c7a290] duration-500"
          >
            <Image
              src={facebookIcon}
              alt="facebookIcon"
              className="size-7"
            ></Image>
          </Link>
          <Link
            href="https://www.tiktok.com"
            target="_blank"
            className="border border-black p-1 rounded-full hover:bg-[#c7a290] duration-500"
          >
            <Image src={tiktokIcon} alt="xIcon" className="size-7"></Image>
          </Link>
          <Link
            href="https://www.teacherspayteachers.com/store/hue-man-expressions"
            target="_blank"
            className="border border-black p-1 rounded-full hover:bg-[#c7a290] duration-500"
          >
            <Image src={tptIcon} alt="xIcon" className="size-7"></Image>
          </Link>
          <Link
            href="https://www.etsy.com/shop/HuemanExpressions?ref=dashboard-header"
            target="_blank"
            className="border border-black p-1 rounded-full hover:bg-[#c7a290] duration-500"
          >
            <Image src={etsyIcon} alt="xIcon" className="size-7"></Image>
          </Link>
        </div>
      </div>
      {/* ============== contact info ====================== */}
      <div>
        <h1 className="md:text-3xl font-montserrat  font-bold text-xl">
          Contact
        </h1>
        <p className="lg:text-xl text-lg">huemanexpressions@gmail.com</p>
      </div>

      {/* ======================== location =============== */}
      <div>
        <h1 className="md:text-3xl font-montserrat  font-bold text-xl">
          Based in
        </h1>
        <p className="lg:text-xl text-lg font-medium">Atlanta, GA</p>
      </div>
    </div>
  );
};

export default ContactInformation;
