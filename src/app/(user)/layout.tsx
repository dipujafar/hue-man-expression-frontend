import { ReactNode } from "react";
import SidebarNavigation from "./_components/Sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex font-inter">
      <SidebarNavigation></SidebarNavigation>
      <div className="bg-[#F0E8DE] 2xl:px-32 2xl:py-24 xl:px-24 xl:py-16 md:px-16 md:py-10 px-2 py-2 w-full min-h-screen">
        <div className="bg-white w-full h-full rounded-lg px-12 py-16">{children}</div>
      </div>
    </div>
  );
};

export default layout;
