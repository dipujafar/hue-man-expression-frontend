import React from "react";
import { Mr_Dafoe } from "next/font/google";
import Container from "./Container";
import { cn } from "@/lib/utils";

const mr_dafoe = Mr_Dafoe({
  subsets: ["latin"],
  variable: "--font-mr-dafoe",
  weight: ["400"],
  display: "swap",
});

const PageTitle = ({ title, className }: { title: string, className?: string }) => {
  return (
    <Container className={mr_dafoe.className}>
      <h1 className={cn("text-main-text-color md:text-7xl text-4xl text-center", className)}>
        <i> {title}</i>
      </h1>
    </Container>
  );
};

export default PageTitle;
