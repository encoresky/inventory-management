"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/logo.svg";
import ListSvg from "@/public/assets/svg/ListSvg";
import userManual from "@/public/assets/userManual.svg";
import businessman from "@/public/assets/businessman.png";
import { usePathname } from "next/navigation";
import AdminIcon from "@/public/assets/svg/AdminIcon";
import HomeIcon from "@/public/assets/svg/HomeIcon";

const getCurrentDateTime = () => {
  const currentDateTime = new Date();

  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedTime = currentDateTime.toLocaleString("en-US", optionsTime);

  const optionsDate = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const formattedDate = currentDateTime.toLocaleString("en-US", optionsDate);

  return { formattedTime, formattedDate };
};

const LeftSidebar = ({ setOpenLeft }) => {
  const pathname = usePathname();
  const linkCss =
    "hover:text-orange hover:fill-orange flex ease-in-out duration-300 flex-col items-center	gap-[0.75rem]";
  const [formattedTime, setFormattedTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const { formattedTime, formattedDate } = getCurrentDateTime();
    setFormattedTime(formattedTime);
    setFormattedDate(formattedDate);
  }, []);

  return (
    <div className="wrapper h-full">
      <div className="bg-white h-[115px] pl-[1rem] pt-[14px] pb-[20px]">
        <div className="logo" onClick={() => setOpenLeft(false)}>
          <Link href="/">
            <Image src={logo} width={160} height="auto" alt="logo" />
          </Link>
        </div>
        <span className="text-md font-medium text-black font-sans">
          {formattedTime} <br /> <span>{formattedDate}</span>
        </span>
      </div>
      <div
        className={` nav flex-col flex  rounded-tr-[10px] bg-primary pb-[0.625rem] `}
      >
        <div className="flex  flex-col  justify-center flex-grow items-center	gap-[2rem] pt-[2rem]">
          <Link
            href="/"
            className={`${linkCss} ${
              pathname === "/"
                ? "fill-orange text-orange"
                : "fill-white text-white"
            }`}
            onClick={() => setOpenLeft(false)}
          >
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link
            href="/list"
            className={`${linkCss} ${
              pathname === "/list"
                ? "fill-orange text-orange"
                : "fill-white text-white"
            }`}
            onClick={() => setOpenLeft(false)}
          >
            <ListSvg />
            <span>List</span>
          </Link>
          <Link
            href="/login"
            className={`${linkCss} ${
              pathname === "/login"
                ? "fill-orange text-orange"
                : "fill-white text-white"
            }`}
            onClick={() => setOpenLeft(false)}
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
              height="auto"
              priority={true}
              className="mx-auto"
              alt="businessman"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="top-[-1.25rem] max-w-[10.688rem] relative">
            <div className="py-[0.625rem] flex gap-[1.25rem] items-center pl-[1.625rem] pr-[1.313rem]  bg-white   rounded-[10px] ">
              <Image
                src={userManual}
                width={35}
                height="auto"
                priority={true}
                className="mx-auto"
                alt="businessman"
                style={{ objectFit: "contain" }}
              />
              <button className="text-orange font-bold">Guidance manual</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSidebar;
