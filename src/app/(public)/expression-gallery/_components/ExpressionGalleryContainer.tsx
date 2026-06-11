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
import AllCardsForSmallScreen from "./AllCardsForSmallScreen";
import { features, platforms } from "./data";
import Link from "next/link";

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
        <div className="lg:space-y-16 space-y-10 text-center">
          <div>
            <PageTitle title="Representation Reflects the Beauty of Our Reality" />
            <p className=" mt-5 lg:text-3xl text-xl text-center text-[#C37E19] font-medium ">
              Meeting You Where You Are
            </p>
          </div>
          <Container className="lg:space-y-10 space-y-6 font-lucida">
            <div className="space-y-4 text-start">
              <p className="lg:text-3xl text-xl text-center text-[#482F10]">
                Hue-man Expressions is available across multiple platforms to
                ensure that access to culturally relevant, high-quality
                materials is never a barrier.
              </p>

              <p className="lg:text-3xl text-xl text-center text-[#482F10]">
                Whether you’re a clinician running sessions, a teacher building
                lesson plans, or a parent supporting your child at home, our
                resources are designed to fit seamlessly into your daily
                routine.
              </p>
            </div>
            <div>
              <h3 className="lg:text-3xl text-xl text-center text-[#C37E19] font-medium mb-4">
                Why Hue-man Expressions?
              </h3>
              <div className="md:mt-10 mt-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-slate-200 bg-slate-50/30 backdrop-blur p-8 transition-shadow hover:shadow-lg"
                  >
                    <div className="text-4xl">{feature.icon}</div>
                    <h3 className="mt-4 text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-balance lg:text-3xl text-xl text-center text-[#C37E19] font-medium">
                Shop Your Way
              </h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                Access Hue-man Expressions on the platform that works best for
                you:
              </p>

              <div className="md:mt-10 mt-5 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
                {platforms.map((platform, index) => (
                  <Link
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-lg border border-slate-200 bg-slate-50/30 backdrop-blur p-8 transition-all duration-300 hover:border-[#C37E19]/50 hover:shadow-xl"
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="text-4xl">{platform.icon}</div>
                      <h3 className="mt-4 text-xl font-semibold text-slate-900">
                        {platform.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {platform.description}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#C37E19] px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-amber-600">
                        Visit Store
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </Link >
                ))}
              </div>
            </div>
          </Container>
          {/* <Container>
            <BuyNowSection></BuyNowSection>
          </Container> */}
          <Container>
            <div className="lg:block hidden">
              <AllCards />
            </div>
            <div className="lg:hidden">
              <AllCardsForSmallScreen />
            </div>
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
