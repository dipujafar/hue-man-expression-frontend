"use client";
import { Button } from "@/components/ui/button";
import { useGetMySubscriptionQuery } from "@/redux/api/subscriptonApi";
import React from "react";

const CurrentPlan = () => {
  const  {data: subscriptionData, isLoading: isSubscriptionLoading} = useGetMySubscriptionQuery(undefined);
  console.log(subscriptionData);
  return (
    <div className="max-w-72 mx-auto h-72 rounded-lg p-6 flex flex-col items-center justify-center space-y-8 bg-gradient-to-br from-[#4C3519] to-[#807557] text-white">
      <h2 className="text-2xl font-medium">My Plan</h2>
      <div className="text-4xl font-bold">$100</div>
      <Button
        variant="outline"
        className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
      >
        Update
      </Button>
    </div>
  );
};

export default CurrentPlan;
