"use client";
import { useGetMySubscriptionQuery } from "@/redux/api/subscriptonApi";
import AllPurchasedCards from "./AllPurchasedCards";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";


const ExpressionHubPageContainer = () => {
  const [comboSubscription, setComboSubscription] = useState<boolean>(false);
  const { data: subscriptionData, isLoading: isSubscriptionLoading } =
    useGetMySubscriptionQuery(undefined);


    useEffect(() => {
      subscriptionData?.data?.forEach((plan: any) => {
        if (plan?.package_name === "combo") {
          setComboSubscription(true);
        }
      });
    },)
    console.log(subscriptionData?.data);



  // const { data, isLoading: PrintDataLoading } = useGetPrintsQuery(undefined);
  // const [updatePrintCount, { isLoading: updatePrintCountLoading }] =
  //   useUpdatePrintDataMutation();

  // console.log(data);

  // ------------------ if there is initial loading then show this skeleton  ------------------
  if (isSubscriptionLoading) {
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

  // ------------------ if there is active single or bundle subscription then show this message  ------------------
  if (subscriptionData?.data?.length > 0 && !comboSubscription) {
    return (
      <div>
        <div className="min-h-[calc(100vh-250px)] flex items-center justify-center flex-col gap-y-1.5">
          <h1 className="md:text-2xl text-lg font-bold text-center">
            Your purchased AAC Core Board Lanyards (Sold Separately)
          </h1>
          <p className="md:text-lg font-medium">
            You received your AAC Core Board Lanyards in your email with all
            cards
          </p>
          <p>
            If do no receive the email yet, we will send it to you as soon as
            possible.
          </p>
        </div>
      </div>
    );
  }

  // ------------------ if there is active combo subscription then show all purchased cards  ------------------

  if (comboSubscription) {
    return (
      <div>
        <AllPurchasedCards></AllPurchasedCards>
      </div>
    );
  }

  //  ------------------ if there is no active subscription then show this message  and  this action button  ------------------
  if (subscriptionData?.data?.length == 0) {
    return (
      <div>
        <div className="min-h-[calc(100vh-250px)] flex items-center justify-center flex-col gap-y-1.5">
          <h1 className="md:text-2xl text-lg font-bold text-center">
            You do not any active subscription
          </h1>
          <p className="md:text-lg font-medium">
            Please purchase a subscription for all card with details.
          </p>
          <Link href={`/expression-gallery-dashboard#combo`}>
            <Button className="bg-gradient-to-br from-[#4C3519] to-[#807557]">
              Purchase
            </Button>
          </Link>
        </div>
      </div>
    );
  }
};

export default ExpressionHubPageContainer;
