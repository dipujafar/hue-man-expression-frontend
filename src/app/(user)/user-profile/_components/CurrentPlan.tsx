"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetMySubscriptionQuery } from "@/redux/api/subscriptonApi";
import Link from "next/link";

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
  console.log(subscriptionData?.data?.package_name);
  return (
    <div className="max-w-72 mx-auto h-72 rounded-lg p-6 flex flex-col items-center justify-center space-y-8 bg-gradient-to-br from-[#4C3519] to-[#807557] text-white">
      <h2 className="text-2xl font-medium">My Plan</h2>
      {isSubscriptionLoading ? (
        <Skeleton className="h-10 w-[90px]" />
      ) : (
        <p className="text-4xl font-bold">
          ${subscriptionAmount(subscriptionData?.data?.package_name)}
        </p>
      )}
     {isSubscriptionLoading ? (
        <Skeleton className="h-10 w-[90px]" />
      ) : (
          <Link href={`/expression-gallery-dashboard#${subscriptionData?.data?.package_name}`}>
        <Button
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
        >
          Update
        </Button>
      </Link>
      )}
 
    </div>
  );
};

export default CurrentPlan;
