import React, { useEffect, useState } from "react";
import SelectButton from "./SelectButton";
import { useSelector } from "react-redux";

const SearchList = ({ setSearch, search }) => {
  const products = useSelector((state) => state.product.products);
  const [searchList, setSearchList] = useState([]);
  const handleSelect = (isSelected,id)=>{

  }

  useEffect(() => {
    handleSearch(search);
  }, [search]);
  const handleSearch = (action) => {
    const lowerCaseAction = action.toLowerCase();
    const filteredList = products.filter(
      (product) =>
        product.productname.toLowerCase().includes(lowerCaseAction) ||
        product.desc.toLowerCase().includes(lowerCaseAction) ||
        product.category.toLowerCase().includes(lowerCaseAction)
    );
    setSearchList(filteredList);
  };

  return (
    <div className="shadow-md mt-[1rem] h-full  flex flex-col justify-between bg-white rounded-[20px] px-[2.5rem] py-[2.5rem] overflow-y-auto ">
      <div className="max-h-[31.25rem]">
       {
        searchList.length===0 ? <p className="text-red-700 text-md font-sans font-bold">Not found. Please try a different search term.</p>:(
       
        searchList?.map((value) => {
          return (
            <div
              className="flex justify-between items-center gap-[1rem] items_list relative pt-[10px] pb-[3px]"
              key={value.id}
            >
              <div className="w-[70%]" onClick={(e) => setSearch("i am here")}>
                <h5 className="font-sans text-sm text-secondary_light font-normal">
                  {value.productname}
                </h5>
                <span>{value.desc}</span>
              </div>
              <div>
                <SelectButton Select="Select" Selected="Selected" onChange={(isSelected)=>{handleSelect(isSelected,value.id)}}/>
              </div>
            </div>
          );
        }))}
      </div>
    </div>
  );
};

export default SearchList;
