import Image from "next/image";
import logo from "@/assets/image/logo.png";
import Link from "next/link";
import facebookIcon from "@/assets/icon/facebook.png";
import instagramIcon from "@/assets/icon/instragram.png";
import tiktokIcon from "@/assets/icon/tiktok.png";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-[#684B3C] py-16">
      <Container>
        <div className="flex flex-col flex-wrap md:justify-between justify-center gap-y-10 gap-x-2 md:flex-row items-center">
          {/* Logo and description */}
          <div>
            <Image
              src={logo}
              alt="logo"
              width={1200}
              height={1200}
              className="w-auto h-auto mx-auto max-w-[120px] max-h-[100px]"
            />
            <p className="mt-4 text-primary-white/70 mx-auto text-center">
              © COPYRIGHT {new Date().getFullYear()}
            </p>
          </div>

          {/* Links and supports informations */}

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-primary-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-primary-white">
              <li>
                <Link href="/sign-in">Log In </Link>
              </li>
              <li>
                <Link href="/social-expressions">Social Expressions</Link>
              </li>
              <li>
                <Link href="/terms">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-5">
            {/* social media links */}
            <div className="flex gap-x-2 items-center xl:justify-start justify-center  w-full mt-2 xl:ml-16">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                className="border p-1 rounded-full"
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
                className="border p-1 rounded-full"
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
                className="border p-1 rounded-full"
              >
                <Image src={tiktokIcon} alt="xIcon" className="size-7"></Image>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
