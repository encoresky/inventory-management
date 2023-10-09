"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { Arrow } from "@/public/assets/svg/Arrow";
const BackButton = () => {
  const router = useRouter();
  return (
    <div className="text-1xl flex font-sans gap-[10px] text-secondary font-bold" onClick={()=>router.back()}> 
        <span className="rotate-[270deg]">
          <Arrow />
        </span>
        <span> Back</span>
    </div>
  );
};

export default BackButton;
