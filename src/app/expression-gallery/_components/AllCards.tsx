import Container from "@/components/shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import CommonButton from "@/components/ui/common-button";
import { cardData } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const AllCards = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-14 gap-9">
        {cardData?.map((data) => (
          <div key={data?._id}>
            <Card>
              <CardContent className="pt-6 ">
                <Image
                  src={data?.image}
                  alt="card_Image"
                  width={1200}
                  height={1200}
                  className="max-h-[530px]"
                ></Image>
                <h5 className="text-center mt-3 text-lg text-[#684B3C] truncate font-lucida">
                  {data?.title}
                </h5>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <Card className="max-w-[400px] mx-auto  lg:mt-14 mt-9">
        <CardContent className="pt-6">
          <Image
            src={"/cardImag13.png"}
            alt="card_Image"
            width={1200}
            height={1200}
            className="max-h-[530px]"
          ></Image>
        </CardContent>
      </Card>
      <div className="lg:mt-10 mt-5 space-y-5">
        <div className="flex gap-x-6 gap-y-2 justify-center flex-wrap text-2xl font-merienda text-[#684B3C]">
          <h1>Price: $25 each</h1>
          <h1>Bundle (Boy & Girl): $45</h1>
        </div>
        <Link href="#" className=" flex justify-center ">
          <CommonButton>Buy Now</CommonButton>
        </Link>
      </div>
    </Container>
  );
};

export default AllCards;
