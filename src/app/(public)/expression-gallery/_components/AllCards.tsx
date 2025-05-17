import Container from "@/components/shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import CommonButton from "@/components/ui/common-button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cardData } from "@/utils";
import Image from "next/image";

const AllCards = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5">
        {cardData?.map((data) => (
          <div key={data?._id}>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card>
                  <CardContent className="pt-6 cursor-pointer ">
                    <Image
                      src={data?.image}
                      alt="card_Image"
                      width={1200}
                      height={1200}
                      className="max-h-[530px]"
                    ></Image>
                    <h5 className="text-center mt-3 text-[#684B3C] truncate font-lucida">
                      {data?.title}
                    </h5>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className=" lg:w-full w-[250px] max-w-lg">
                <div className="space-y-2">
                  <h1 className="xl:text-xl font-medium md:text-center text-[#684B3C]">
                    {data?.hoverTitle}
                  </h1>
                  <div>
                    {data?.title !== "Sequence Cards" && (
                      <p className="font-medium text-center">
                        Total Cards:  {data?.total_card}{" "}
                      </p>
                    )}
                    {data?.title === "Sequence Cards" && (
                      <p className="font-medium text-center">
                        Scenarios Included:  {data?.total_card}{" "}
                      </p>
                    )}
                    {data?.title === "Social Story Cards" && (
                      <p className="font-medium text-center">
                        Scenarios Included: 5
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h5 className="xl:text-lg font-medium">
                      {data?.description?.title} :
                    </h5>
                    <p className="xl:text-base text-sm">
                      {data?.description?.description?.map((des) => (
                        <p>{des}</p>
                      ))}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </div>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Card className="max-w-[400px] mx-auto mt-5 ">
            <CardContent className="pt-6">
              <Image
                src={"/cardImag13.png"}
                alt="card_Image"
                width={1200}
                height={1200}
                className="max-h-[530px]"
              ></Image>
              <h5 className="text-center mt-3  text-[#684B3C] truncate font-lucida">
                AAC Core Board Lanyards (Sold Separately)
              </h5>
            </CardContent>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent className=" lg:w-full w-[250px] max-w-lg">
          <div className="space-y-2">
            <h1 className="xl:text-xl font-medium md:text-center text-[#684B3C]">
              Portable boards featuring essential vocabulary for communication.
            </h1>
            <div>
              <p className="font-medium text-center">
                Price: $25 each | Bundle (Boy & Girl): $45
              </p>
            </div>
            <div className="space-y-1">
              <h5 className="MD:text-lg md:font-medium">
                Illustrated Terms: Visuals may vary across boy and girl boards
              </h5>
              <p>
                • More, Eat, Drink, Play, Help, Sleepy, Jump, Hurt, All Done,
                Loud, Mad, Yes, Hey, Bathroom Button: Buy Now
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="lg:mt-10 mt-5 space-y-5">
        <div className="flex gap-x-6 gap-y-2 justify-center flex-wrap md:text-2xl text-xl font-merienda text-[#684B3C]">
          <h1>Price: $25 each</h1>
          <h1>Bundle (Boy & Girl): $45</h1>
        </div>
        <div className=" flex justify-center">
          <CommonButton>Buy Now</CommonButton>
        </div>
      </div>
    </Container>
  );
};

export default AllCards;
