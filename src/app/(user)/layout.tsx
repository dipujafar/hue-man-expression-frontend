import { ReactNode } from "react";
import SidebarNavigation from "./_components/Sidebar";
import SmallDeviceSidebar from "./_components/SmallDeviceSidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex font-inter">
      <SidebarNavigation></SidebarNavigation>
      <div className="bg-[#F0E8DE] 2xl:px-32 2xl:py-24 xl:px-16 xl:py-16 md:px-10 md:py-8 sm:px-6 sm:py-5 px-2 py-2 w-full h-screen overflow-y-auto">
        <SmallDeviceSidebar></SmallDeviceSidebar>
        <div className="bg-white w-full  rounded-lg xl:px-12 px-6 py-16">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
