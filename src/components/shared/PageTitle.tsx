import React from "react";
import { Mr_Dafoe } from "next/font/google";
import Container from "./Container";
const mr_dafoe = Mr_Dafoe({
  subsets: ["latin"],
  variable: "--font-mr-dafoe",
  weight: ["400"],
  display: "swap",
});

const PageTitle = ({ title }: { title: string }) => {
  return (
    <Container className={mr_dafoe.className}>
      <h1 className="text-main-text-color md:text-7xl text-4xl text-center">
        <i> {title}</i>
      </h1>
    </Container>
  );
};

export default PageTitle;
