import React from "react";
import Search from "./Search";
import DateDropdownPicker from "./DatePicker";

const Table = () => {
  return (
    <div className="rounded-[10px] border border-light_secondary pt-[1.125rem] pb-[2rem] pl-[1.75rem] pr-[1.125rem]"> 
      <div className="w-full flex items-center  justify-between">
        <p className="text-secondary font-sans font-medium text-1xl">History</p>
        <div className="flex gap-[1.5rem]">
          <div className="w-[13.375rem]">
            <DateDropdownPicker />
          </div>
          <div className="w-[22.5rem]">
            <Search
              className="py-[11px]  pl-[1.75rem] pr-[4rem]"
              placeholder="Search by name"
            />
          </div>
        </div>
      </div>
      <div className="containe">
        <div className="flex flex-col pt-[1.8rem]">
          <div className="overflow-auto">
            <div className="min-w-full">
              <div className="overflow-hidden">
                <table className="text-center w-full">
                  <thead className="bg-primary_light ">
                    <tr>
                      <th scope="col" className="">
                        S. NO.
                      </th>
                      <th scope="col" className="">
                        User Name
                      </th>
                      <th scope="col" className="">
                        Pick-up time
                      </th>
                      <th scope="col" className="">
                        Drop time
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Comment
                      </th>
                    </tr>
                  </thead>
                  <tbody className="last:border-none ">
                    <tr className=" l border-dashed border-light_secondary border-b-[1px]">
                      <td className="py-[1rem]">1</td>
                      <td className="py-[1rem]">Ankush lokhande</td>
                      <td className="py-[1rem]">01:00 PM</td>
                      <td className="py-[1rem]">6:30 PM</td>
                      <td className="py-[1rem]">
                        I forget to charge it, So please charge before next use
                      </td>
                    </tr>
                    <tr className="border-dashed border-light_secondary border-b-[1px]">
                      <td className="py-[1rem]">1</td>
                      <td className="py-[1rem]">Ankush lokhande</td>
                      <td className="py-[1rem]">01:00 PM</td>
                      <td className="py-[1rem]">6:30 PM</td>
                      <td className="py-[1rem]">
                        I forget to charge it, So please charge before next use
                      </td>
                    </tr>
                    <tr className="  border-dashed border-light_secondary border-b-[1px]">
                      <td className="py-[1rem]">1</td>
                      <td className="py-[1rem]">Ankush lokhande</td>
                      <td className="py-[1rem]">01:00 PM</td>
                      <td className="py-[1rem]">6:30 PM</td>
                      <td className="py-[1rem]">
                        I forget to charge it, So please charge before next use
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
