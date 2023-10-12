"use client";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Search from "@/components/Search";
import { Arrow } from "@/public/assets/svg/Arrow";
import Burger from "@/public/assets/svg/Burger";
import { usePathname } from "next/navigation";
import { useState } from "react";
function LayoutMain({ children }) {
  const route = usePathname();
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  return (
    <>
      {route !== "/details" ? (
        <div className="layout flex max-lg:flex-col">
          <div className="flex  justify-between ">
            <button
              className="burgericon p-[10px] bg-primary rounded-r-[10px]"
              onClick={() => setOpenLeft(!openLeft)}
            >
              <Burger/>
            </button>
            <button
              className="burgericon p-[10px] bg-primary rounded-l-[10px] "
              onClick={() => setOpenRight(!openRight)}
            >
              <span className="rotate-[270deg]  block"> <Arrow/></span>
             
            </button>
          </div>
          <div
            className={`header w-[14.1%] leftSideBar h-screen   max-lg:w-[30%] ${
              openLeft ? "open" : ""
            }`}
          >
            <button
              className=" bg-white  burgericon p-[10px]  absolute top-0 right-0"
              onClick={() => setOpenLeft(!openLeft)}
            >
              &#10006;
            </button>
            <LeftSidebar />
          </div>
          <div className="dynamicContent pb-[1.875rem] h-screen w-[64.08%] max-lg:w-[100%] px-[0.75rem] relative">
            <div className="pt-[14px] pb-[1.5rem] w-[75.4%]  mx-auto">
              <Search
                className="pt-[15px] pb-[13px] pl-[2.125rem] pr-[2.125rem]"
                placeholder="Search Your Item here"
              />
            </div>
            {children}
          </div>
          <div
            className={`footer rightSideBar pb-[1.875rem] pt-[14px]  w-[21.82%]  max-lg:w-[30%]  h-screen bg-primary_light px-[1.313rem] ${
              openRight ? "open" : ""
            }`}
          >
            <button
              className="burgericon"
              onClick={() => setOpenRight(!openRight)}
            >
              &#10006;
            </button>
            <RightSidebar />
          </div>
        </div>
      ) : (
        <div className="py-[2rem] overflow-y-scroll">{children}</div>
      )}
    </>
  );
}

export default LayoutMain;
