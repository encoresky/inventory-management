import React from "react";
import Image from "next/image";
import mob from "@/public/assets/mob.png";
import robot from "@/public/assets/robot.png";
import Button from "./Button";
import userManual from "@/public/assets/userManual.svg";
const Details = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex  gap-[2.5rem]">
          <div className="text-center w-[69.42%] bg-primary_light rounded-[10px] flex-col flex items-center justify-center pt-[1.375rem] pb-[1.688rem]">
            <div className="ImageContainer">
              <Image src={mob} alt="Mobile" width={138} height={281} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-sans  font-bold text-secondary mb-[1.5rem] ">
              IPhone 6S (Rose Gold)
            </h2>
            <h2 className="text-1xl font-sans  font-bold text-secondary mb-[1rem] ">
              IPhone 6S (Rose Gold)
            </h2>
            <ul className="font-sans pl-[1.5rem] font-normal text-secondary_light leading-7 text-sm list-disc">
              <li>16 GB ROM</li>
              <li>11.94 cm (4.7 inch) Retina HD Display</li>
              <li>12MP Rear Camera | 5MP Front Camera</li>
              <li>
                A9 Chip with 64-bit Architecture and M9 Motion Co-processor
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[17%]">
          <div className=" mb-[0.95rem] rounded-[10px] flex flex-col items-center gap-[2.5rem] bg-white shadow-lg pt-[2.063rem] px-[2.063rem] pb-[1.563rem] ">
            <div className="max-w-[100%]">
              <Image src={robot} alt="robot" width={66} height={121} />
            </div>
            <Button className="btn-secondary" name="Report an issue" />
          </div>
          <div className="py-[0.625rem] shadow-lg flex gap-[1.25rem] items-center pl-[1.625rem] pr-[1.313rem]  bg-white   rounded-[10px] ">
            <Image
              src={userManual}
              width={35}
              height={35}
              className="mx-auto"
              alt="businessman"
            />
            <p className="text-orange font-bold">Points to keep 
            in mind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
