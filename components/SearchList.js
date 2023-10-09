import React from "react";
import SelectButton from "./SelectButton";

const SearchList = ({setSearchVal}) => {
  return (
    <div className="shadow-md h-full flex flex-col justify-between bg-white rounded-[20px] px-[2.5rem] py-[2.5rem] ">
      <div className="max-h-[31.25rem] overflow-y-auto">
        <div className="flex justify-between items-center flex-wrap items_list relative pt-[10px] pb-[3px]">
          <div className="" onClick={(e)=>setSearchVal('i am here')}>
            <h5 className="font-sans text-sm text-secondary_light font-normal">
              IPhone 6S
            </h5>
            <span>D-4 | 4GB ram </span>
          </div>
          <SelectButton Select="Select" Selected="Selected" />
        </div>
      </div>
    </div>
  );
};

export default SearchList;
