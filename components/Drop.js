import React from "react";
import { Arrow } from "@/public/assets/svg/Arrow";
import { useState } from "react";
import DropModel from "./DropModel";
import { useSelector } from "react-redux";
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
    <div className="px-[1.75rem] max-sm:px-0">
      <div className="shadow-md h-full bg-white  flex flex-col justify-between rounded-[20px] py-[1rem]">
        <div className="overflow-y-auto px-[2.5rem] py-[2.5rem] max-h-[25.25rem] ">
          {employee.map((value) => {
            return (
              <div
                className="flex justify-between items-center flex-wrap items_list relative py-[10px] cursor-pointer hover:fill-orange font-sans text-md text-secondary_light  font-medium hover:text-orange focus:text-orange"
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
      {isOpen ? (
        <DropModel closeModal={closeModal} employeeId={employeeId} />
      ) : null}
    </div>
  );
};

export default Drop;
