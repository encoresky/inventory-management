import React from "react";

const SearchList = ({setSearchVal}) => {
  return (
    <div className="shadow-md h-full flex flex-col justify-between bg-white rounded-[20px] px-[2.5rem] py-[2.5rem] ">
      <div className="max-h-[31.25rem] overflow-y-auto">
        <div className="flex justify-between items-center flex-wrap items_list relative py-[12.5px]">
          <div className="" onClick={(e)=>setSearchVal('i am here')}>
            <h5 className="font-sans text-sm text-secondary_light font-normal">
              IPhone 6S
            </h5>
          </div>
          <button className="">
            <p className="font-sans text-mini_sm font-normal text-red_primary">
              Remove
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
