import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-105px)] page-margin bg-main-bg-color">
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
