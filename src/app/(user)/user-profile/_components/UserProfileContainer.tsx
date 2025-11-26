"use client";
import { useGetProfileQuery } from "@/redux/api/profileApi";
import CurrentPlan from "./CurrentPlan";
import { Skeleton } from "@/components/ui/skeleton";

const UserProfileContainer = () => {
  const { data: UserData, isLoading: isUserDataLoading } =
    useGetProfileQuery(undefined);
  return (
    <div className="space-y-14">
      <div className="md:space-y-6 space-y-4 ">
        <h1 className="xl:text-5xl md:text-3xl text-2xl font-merienda font-semibold text-[#FFA21B]">
          My Profile
        </h1>
        <hr className="border-dotted border border-[#837959]" />
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
          <div>
            <h3 className="font-medium">Full Name</h3>
            {isUserDataLoading ? (
              <Skeleton className="h-5 w-3/4" />
            ) : (
              <p className="text-[#7E7E7E]">{UserData?.data?.name}</p>
            )}
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            {isUserDataLoading ? (
              <Skeleton className="h-5 w-3/4" />
            ) : (
              <p className="text-[#7E7E7E]">{UserData?.data?.email}</p>
            )}
          </div>
        </div>
      </div>
      <div className="md:space-y-6 space-y-4 ">
        <h1 className="xl:text-5xl md:text-3xl text-2xl font-merienda font-semibold text-[#FFA21B]">
          Purchased Plan
        </h1>
        <hr className="border-dotted border border-[#837959]" />
        <div>
          <CurrentPlan></CurrentPlan>
        </div>
      </div>
    </div>
  );
};

export default UserProfileContainer;
