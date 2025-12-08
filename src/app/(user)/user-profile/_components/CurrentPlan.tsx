"use client";
import { Button } from "@/components/ui/button";
import { useGetMySubscriptionQuery } from "@/redux/api/subscriptonApi";
import Link from "next/link";
import CurrentPlanSkeleton from "./CurrentPlanSkeleton";

const subscriptionAmount = (packageName: string) => {
  switch (packageName) {
    case "combo":
      return 100;
    case "single":
      return 25;
    case "bundle":
      return 45;
    default:
      return 0;
  }
};

const CurrentPlan = () => {
  const { data: subscriptionData, isLoading: isSubscriptionLoading } =
    useGetMySubscriptionQuery(undefined);


  if (isSubscriptionLoading) {
    return <CurrentPlanSkeleton />
  }

  if (!subscriptionData?.data?.length) {
    return <div className="flex items-center justify-center flex-col gap-y-1.5">
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
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        subscriptionData?.data?.map((plan: any, idx: number) => <div key={idx} className="h-72 rounded-lg p-6 flex flex-col items-center justify-center space-y-8 bg-gradient-to-br from-[#4C3519] to-[#807557] text-white">
          <h2 className="text-2xl font-medium">My Plan</h2>

          <p className="text-4xl font-bold">
            ${subscriptionAmount(plan?.package_name)}
          </p>

          <Link href={`/expression-gallery-dashboard#${plan?.package_name}`}>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
            >
              Add
            </Button>
          </Link>
        </div>)
      }

    </div>
  );
};

export default CurrentPlan;
