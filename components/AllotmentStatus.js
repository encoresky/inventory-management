import Image from "next/image";
import React from "react";
import ep_arrow from "@/public/assets/ep_arrow.svg"
const AllotmentStatus = () => {
  return (
    <>
      <h2 className="flex gap-[2.5rem] items-center mb-[1rem]">
      <span> Allotment Status</span> <Image src={ep_arrow} width={24} height={24} alt="arrow" />
      </h2>
      <div className="AllotmentWrapper flex gap-[10px] max-w-[13.313rem] flex-wrap ">
        <div className="AllotmentBlock py-[12px] px-[8px] w-[81px] bg-light text-secondary_light rounded-[10px]">
          <p className="text-sm font-sans font-medium">Cables</p>
          <h5 className="text-xl font-sans font-medium mt-[5px]">
            {" "}
            <span className="text-secondary_light">3 </span> /{" "}
            <span className="text-orange"> 10 </span>
          </h5>
        </div>
        <div className="AllotmentBlock py-[12px] px-[8px] w-[122px] bg-light text-secondary_light rounded-[10px]">
          <p className="text-sm font-sans font-medium">Smartphones</p>
          <h5 className="text-xl font-sans font-medium mt-[5px]">
            {" "}
            <span className="text-secondary_light">12 </span> /{" "}
            <span className="text-orange"> 20 </span>
          </h5>
        </div>
        <div className="AllotmentBlock py-[12px] px-[8px] w-[122px] bg-light text-secondary_light rounded-[10px]">
          <p className="text-sm font-sans font-medium">Laptops</p>
          <h5 className="text-xl font-sans font-medium mt-[5px]">
            {" "}
            <span className="text-secondary_light">35 </span> /{" "}
            <span className="text-orange">48</span>
          </h5>
        </div>
        <div className="py-[12px] px-[8px] w-[81px] bg-light text-secondary_light rounded-[10px]">
          <p className="text-sm font-sans font-medium">Adapters</p>
          <h5 className="text-xl font-sans font-medium mt-[5px]">
            {" "}
            <span className="text-secondary_light">5 </span> /{" "}
            <span className="text-orange"> 9 </span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default AllotmentStatus;
