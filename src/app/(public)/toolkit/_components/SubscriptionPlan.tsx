import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

const SubscriptionPlan = () => {
  return (
    <Container>
      <div className="lg:mb-14 mb-7">
        <h4 className="lg:text-4xl md:text-2xl text-xl text-[#C37E19] font-merienda text-center lg:mb-4 ">
          Subscription Plan
        </h4>
        <hr className="border border-black/30" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row xl:gap-x-8 gap-x-4 gap-y-4">
          <div
            className="py-10 px-10 rounded flex-1"
            style={{ background: "rgba(104, 75, 60, 0.05)" }}
          >
            <h1 className="xl:text-3xl md:text-2xl text-xl text-center font-medium lg:mb-[160px] mb-[120px]">
              Monthly Plan
            </h1>
            <h3 className="xl:text-5xl md:text-3xl text-2xl text-center font-medium mb-[60px] truncate">
              $19.99 <span className="text-2xl font-normal">/month</span>
            </h3>
            <div className="flex justify-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="bg-[#684B3C]">Get Started</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="bg-primary-white text-black p-2 mt-2 text-xl">
                    <h1>
                      It will be redirected to the mobile application when the
                      mobile application is published.
                    </h1>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div
            className="py-10 px-10 rounded text-primary-white flex-1"
            style={{
              background:
                "linear-gradient(330deg, #807557 7.44%, #4C3519 98.31%)",
            }}
          >
            <div className="lg:mb-[120px] mb-[80px]">
              <h1 className="xl:text-3xl md:text-2xl text-xl text-center font-medium">
                Annual Plan
              </h1>
              <p className="lg:max-w-[250px] text-center">
                Save $90 annually compared to the monthly plan
              </p>
            </div>
            <h3 className="xl:text-5xl md:text-3xl text-2xl text-center font-medium mb-[60px] truncate">
              $149 <span className="text-2xl font-normal">/year</span>
            </h3>
            <div className="flex justify-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="bg-transparent  border">
                    Get Started
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="bg-primary-white text-black p-2 mt-2 text-xl">
                    <h1>
                      It will be redirected to the mobile application when the
                      mobile application is published.
                    </h1>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <h4 className="mt-5  lg:text-2xl text-xl font-lucida max-w-4xl mx-auto text-[#684B3C]">
        Important Note: Subscriptions are non-refundable and auto-renew unless
        canceled at least 48 hours before the renewal date.
      </h4>
    </Container>
  );
};

export default SubscriptionPlan;
