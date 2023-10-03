"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/logo.svg";
import home from "@/public/assets/home.svg";
import ListSvg from "@/public/assets/svg/ListSvg";
import admin from "@/public/assets/admin.svg";
import businessman from "@/public/assets/businessman.png";
import userManual from "@/public/assets/userManual.svg";
import { usePathname } from "next/navigation";
import AdminIcon from "@/public/assets/svg/AdminIcon";
import HomeIcon from "@/public/assets/svg/HomeIcon";

const LeftSidebar = () => {
  const pathname = usePathname();
  const linkCss = "text-white flex  flex-col items-center	gap-[0.75rem]";
  return (
    <div className="wrapper h-full">
      <div className="bg-white h-[115px] pl-[1rem] pt-[14px] pb-[20px]">
        <div className="logo">
          <Image src={logo} width={160} height={45} alt="logo" />
        </div>
        <span className="text-md font-medium text-black font-sans">
          02:37 PM <br /> <span>26 September, 2023</span>
        </span>
      </div>
      <div className="nav flex-col flex justify-between rounded-tr-[10px] bg-primary pb-[0.625rem]">
        <div className="flex  flex-col items-center	gap-[2rem] pt-[2rem]">
          <Link
            href="/"
            className={` ${linkCss} ${
              pathname === "/" ? "activeLink" : "navLink"
            }`}
          >
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link
            href="/list"
            className={` ${linkCss} ${
              pathname === "/list" ? "activeLink" : "navLink"
            }`}
          >
            <ListSvg />
            <span>List</span>
          </Link>
          <Link
            href="/admin"
            className={` ${linkCss} ${
              pathname === "/admin" ? "activeLink" : "navLink"
            }`}
          >
            <AdminIcon />
            <span>Admin</span>
          </Link>
        </div>
        <div className="px-[8px] mx-auto">
          <div>
            <Image
              src={businessman}
              width={100}
              height={0}
              className="mx-auto"
              alt="businessman"
            />
          </div>
          <div className="py-[0.625rem] flex gap-[1.25rem] items-center pl-[1.625rem] pr-[1.313rem] max-w-[10.688rem] bg-white relative top-[-1.25rem] rounded-[10px] ">
            <Image
              src={userManual}
              width={35}
              height={35}
              className="mx-auto"
              alt="businessman"
            />
            <p className="text-orange font-bold">Guidance manual</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSidebar;
