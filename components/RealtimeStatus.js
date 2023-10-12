import React from "react";
import ep_arrow from "@/public/assets/ep_arrow.svg";
import Image from "next/image";

const RealtimeStatus = () => {
  return (
    <div>
      <h2 className="flex gap-[2.5rem] items-center mb-[1rem] ">
        Allotment Status
        <Image src={ep_arrow} width={24} height={24} alt="arrow" />
      </h2>
      <div className="max-h-[14rem] overflow-y-auto">
        <ul className="list-none RealtimeStatusList">
          <li className="text-black font-sans text-md font-normal py-[12px] relative">
            Rajat : IPhone 14 pro 9:00 AM
          </li>
          <li className="text-black font-sans text-md font-normal py-[12px] relative">
            Rajat : IPhone 14 pro 9:00 AM
          </li>

          <li className="text-black font-sans text-md font-normal py-[12px] relative">
            Rajat : IPhone 14 pro 9:00 AM
          </li>

          <li className="text-black font-sans text-md font-normal py-[12px] relative">
            Rajat : IPhone 14 pro 9:00 AM
          </li>
          <li className="text-black font-sans text-md font-normal py-[12px] relative">
            Rajat : IPhone 14 pro 9:00 AM
          </li>

          <li className="text-black font-sans text-md font-normal py-[12px] relative">
            Rajat : IPhone 14 pro 9:00 AM
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RealtimeStatus;
