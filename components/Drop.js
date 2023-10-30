import React from "react";
import { Arrow } from "@/public/assets/svg/Arrow";
import { useState } from "react";
import DropModel from "./DropModel";
import { useSelector } from "react-redux";
import DeviceInteraction from "./DeviceInteraction";
const Drop = () => {
  const employee = useSelector((state) => state.employees.employee);
  const [isOpen, setIsOpen] = useState(false);
  const [employeeId, setEmployeeId] = useState();

  function closeModal() {
    setIsOpen(false);
  }
  const openModel = (id) => {
    setIsOpen(true);
    setEmployeeId(id);
  };
  return (
    <div className="px-[1.75rem] max-sm:px-0 pt-[2rem] ">
      <div className="dropWrapper shadow-md  h-full bg-white  py-[2rem] rounded-[20px] mb-[1rem]">
        <div className="overflow-y-auto px-[2.5rem]  h-full">
          <div>
            {employee.map((value) => {
              return (
                <div
                  className="flex justify-between items-center flex-wrap items_list relative py-[10px] cursor-pointer hover:fill-orange font-sans text-md text-secondary_light  font-medium hover:text-orange focus:text-orange ease-in-out duration-300"
                  onClick={() => openModel(value.id)}
                  key={value.id}
                >
                  <div className="flex gap-[2.1rem]">
                    <div>
                      <h5 className="">{value.name}</h5>
                    </div>
                  </div>
                  <span className="rotate-90">
                    <Arrow />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <DeviceInteraction />
      {isOpen ? (
        <DropModel closeModal={closeModal} employeeId={employeeId} />
      ) : null}
    </div>
  );
};

export default Drop;
