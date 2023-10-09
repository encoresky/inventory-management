import React from "react";
import Image from "next/image";
import arrowRight from "@/public/assets/ep_arrow-up.svg";
import { Arrow } from "@/public/assets/svg/Arrow";
import { useState } from "react";
import Model from "./Model";

const Drop = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="px-[1.75rem]">
      <div className="shadow-md h-full flex flex-col justify-between rounded-[20px] px-[2.5rem] py-[2.5rem]">
        <div className="max-h-[31.25rem] overflow-y-auto">
          <div className="flex justify-between items-center flex-wrap items_list relative py-[10px]"  onClick={()=>setIsOpen(true)}>
            <div className="flex gap-[2.1rem]">
              <div>
                <h5 className="font-sans text-md text-secondary_light  font-medium hover:text-orange focus:text-orange">
                  Nishant Sen
                </h5>
              </div>
            </div>
            <span className="rotate-90">
              <Arrow/>
            </span>
          </div>
          
          <div className="flex justify-between items-center flex-wrap items_list relative py-[10px]" >
            <div className="flex gap-[2.1rem]">
              <div>
                <h5 className="font-sans text-md text-secondary_light  font-medium hover:text-orange focus:text-orange">
                  Nishant Sen
                </h5>
              </div>
            </div>
            <span className="rotate-90">
              <Arrow/>
            </span>
          </div>
          <div className="flex justify-between items-center flex-wrap items_list relative py-[10px] ">
            <div className="flex gap-[2.1rem]">
              <div>
                <h5 className="font-sans text-md text-secondary_light  font-medium hover:text-orange focus:text-orange">
                  Nishant Sen
                </h5>
              </div>
            </div>
            <span className="rotate-90">
              <Arrow/>
            </span>
          </div>
          <div className="flex justify-between items-center flex-wrap items_list relative py-[10px] ">
            <div className="flex gap-[2.1rem]">
              <div>
                <h5 className="font-sans text-md text-secondary_light  font-medium hover:text-orange focus:text-orange">
                  Nishant Sen
                </h5>
              </div>
            </div>
            <button className="">
              <Image
                src={arrowRight}
                width={30}
                height={30}
                alt="arrowUp"
                className="mx-auto rotate-90"
              />
            </button>
          </div>
        </div>
      </div>
      ​<Model isVisible={isOpen} closeModal={closeModal}/>
    </div>
  );
};

export default Drop;
