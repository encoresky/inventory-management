"use client";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Search from "@/components/Search";
import { usePathname } from "next/navigation";
function LayoutMain({children}) {
    const route = usePathname();
  return (
    <>
      {route !== "/details" ? (
        <div className="layout flex">
          <div className="header w-[14.1%]  h-screen">
            <LeftSidebar />
          </div>
          <div className="dynamicContent pb-[1.875rem] h-screen w-[64.08%] px-[0.75rem] relative">
            <div className="pt-[14px] pb-[1.5rem] w-[75.4%] mx-auto">
              <Search
                className="pt-[15px] pb-[13px] pl-[2.125rem] pr-[2.125rem]"
                placeholder="Search Your Item here"
              />
            </div>
            {children}
          </div>
          <div className="footer pb-[1.875rem] pt-[14px]  w-[21.82%]  h-screen bg-primary_light px-[1.313rem]">
            <RightSidebar />
          </div>
        </div>
      ) : (
        <div className="py-[2rem]">{children}</div>
      )}
    </>
  );
}

export default LayoutMain;
