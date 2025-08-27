"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useGetPrintsQuery,
  useUpdatePrintDataMutation,
} from "@/redux/api/printApi";
import { cardData } from "@/utils";
import { Printer } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const AllPurchasedCards = () => {
  const router = useRouter();
  const { data: cardDataWithPrintCount, isLoading: isPrintDataLoading } =
    useGetPrintsQuery(undefined);
  const [updatePrintCount] =
    useUpdatePrintDataMutation();

  const [allCardsData, setAllCardsData] = useState(cardData || []);

  const handlePrintAndRedirect = async (
    id: string,
    href: string,
    print: string
  ) => {
    if (parseInt(print) >= 10) {
      toast.error("You can not print more than 10 cards. Please renew your plan.");
      return;
    }

    try {
      await updatePrintCount(id).unwrap();
      router.push(`/${href}/pdf-preview`);
    } catch (error) {
      router.push(`/${href}/pdf-preview`);
    }
  };

  useEffect(() => {
    if (cardDataWithPrintCount?.data?.length > 0 || allCardsData?.length > 0) {
      cardDataWithPrintCount?.data?.forEach((card: any) => {
        const matchingCard = allCardsData?.find(
          (c) => c?.title?.toLowerCase() === card?.card?.toLowerCase()
        );

        if (matchingCard) {
          matchingCard._id = card?._id;
          matchingCard.print = card?.print_count;
        }
      });
    }
  }, [cardDataWithPrintCount?.data, allCardsData]);

  console.log(allCardsData);

  if (isPrintDataLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gap-5 gap-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-2 justify-end xl:text-xl mb-3">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="w-full h-[300px] rounded-md" />
              <Skeleton className="h-4 w-2/3 mx-auto mt-4" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gap-5 gap-3">
        {allCardsData?.map((data) => (
          <div key={data?._id}>
            <Card
              className="cursor-pointer"
              style={{
                boxShadow: "0px 0.411px 10.278px 0px rgba(0, 0, 0, 0.15)",
              }}
              onClick={() =>
                handlePrintAndRedirect(
                  data?._id?.toString(),
                  data?.href,
                  data?.print
                )
              }
            >
              <CardContent className="pt-6  ">
                <div className="flex items-center gap-2 justify-end xl:text-xl mb-3 font-merienda text-[#684B3C] cursor-pointer">
                  <Printer />
                  <h1>{10 - parseInt(data?.print)} Print remaining</h1>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPurchasedCards;
