import { Card, CardContent } from "@/components/ui/card";
import { cardData } from "@/utils";
import { Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AllPurchasedCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gap-5 gap-3">
        {cardData?.map((data) => (
          <div key={data?._id}>
            <Link href={`/${data?.href}/pdf-preview`}>
            <Card
              style={{
                boxShadow: "0px 0.411px 10.278px 0px rgba(0, 0, 0, 0.15)",
              }}
            >
              <CardContent className="pt-6  ">
                <div className="flex items-center gap-2 justify-end xl:text-xl mb-3 font-merienda text-[#684B3C] " >
                  <Printer />
                  <h1>{data?.print}  Print remaining</h1>
                </div>
                <Image
                  src={data?.image}
                  alt="card_Image"
                  width={1200}
                  height={1200}
                  className="max-h-[530px]"
                ></Image>
                <h5 className="text-center mt-3   text-[#684B3C] truncate font-lucida">
                  {data?.title}
                </h5>
              </CardContent>
            </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPurchasedCards;
