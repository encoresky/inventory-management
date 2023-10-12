import React from "react";
import { Arrow } from "@/public/assets/svg/Arrow";
import { useState } from "react";
import Model from "./Model";
import { useSelector } from "react-redux";

const Drop = () => {
  const employee = useSelector((state) => state.employees.employee);
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="px-[1.75rem] ">
      <div className="shadow-md h-full bg-white  flex flex-col justify-between rounded-[20px] py-[1rem]">
        <div className="overflow-y-auto px-[2.5rem] py-[2.5rem] max-h-[25.25rem] ">
          {
            employee.map((value)=>{
              return(
                <div className="flex justify-between items-center flex-wrap items_list relative py-[10px] cursor-pointer hover:fill-orange font-sans text-md text-secondary_light  font-medium hover:text-orange focus:text-orange"  onClick={()=>setIsOpen(true)} key={value.id}>
                <div className="flex gap-[2.1rem]">
                  <div>
                    <h5 className="">
                      {value.name}
                    </h5>
                  </div>
                </div>
                <span className="rotate-90">
                  <Arrow/>
                </span>
              </div>
              )
            })
          }
          </div>
      </div>
      ​<Model isVisible={isOpen} closeModal={closeModal}/>
    </div>
  );
};

export default Drop;
