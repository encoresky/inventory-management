"use client";
import { Arrow } from "@/public/assets/svg/Arrow";
import { useSelector } from "react-redux";
const RealtimeStatus = () => {
  const allowedProductsStates = useSelector(
    (state) => state.employees.employee
  );
  return (
    <div>
      <h2 className=" flex gap-[2.5rem] items-center mb-[1rem] ">
        Realtime Status
        <span className="rotate-[90deg]">
          <Arrow />
        </span>
      </h2>
      <div className="realtimeStatusWrapper overflow-y-auto">
        <ul className="list-none RealtimeStatusList pr-[10px]">
          {allowedProductsStates.map((value) => {
            return (
              <li
                className="text-black font-sans text-md font-normal py-[12px] relative"
                key={value.id}
              >
                {value.name} : IPhone 14 pro 9:00 AM
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RealtimeStatus;
