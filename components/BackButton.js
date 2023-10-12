"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { Arrow } from "@/public/assets/svg/Arrow";
const BackButton = () => {
  const router = useRouter();
  return (
    <button className="text-1xl flex font-sans gap-[10px] items-center hover:text-orange hover:fill-orange text-secondary font-bold" onClick={()=>router.back()}> 
        <span className="rotate-[270deg]">
          <Arrow />
        </span>
        <span>Back</span>
    </button>
  );
};
export default BackButton;
