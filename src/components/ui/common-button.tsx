"use client";
import React, { ReactNode } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const CommonButton = ({
  children,
  className,
  disable,
  submitHandler,
}: {
  children: ReactNode;
  className?: string;
  disable?: boolean;
  submitHandler?: () => void;
}) => {
  return (
    <Button
      disabled={disable}
      onClick={submitHandler}
      className={cn(
        `relative overflow-hidden rounded-full bg-gradient-to-b  from-amber-800/90  via-amber-700/90  to-amber-500/90 lg:px-14 px-8  2xl:py-6 xl:py-5 md:py-4 py-2 h-7  md:text-lg text-[12px]  font-medium  text-white  shadow-[0_0_15px_rgba(251,191,36,0.5)] backdrop-blur-sm  transition-all  hover:shadow-[0_0_20px_rgba(251,191,36,0.6)]/95 w-fit`,
        className
      )}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
