"use client";
import React from "react";
import Search from "./Search";
import DateDropdownPicker from "./DatePicker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "@/features/historyProducts/historyProductSlice";
import {filterHistory} from"@/features/historyProducts/historyProductSlice";
const Table = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history.filteredHistory);
  const isLoading = useSelector((state) => state.history.loading);
  const isError = useSelector((state) => state.history.isError);
  
  const [search, setSearch] = useState();
  const [selectedDate,setSelectedDate] = useState();

  useEffect(() => {
    dispatch(fetchHistory());
  }, []);
  useEffect(() => {
    dispatch(filterHistory(search));
  }, [search,selectedDate]);
  if (isLoading) return <div>Loading....... </div>;
  if (isError) return <div>{isError}</div>;
  return (
    <div className="rounded-[10px] border border-light_secondary pt-[1.125rem] pb-[2rem] pl-[1.75rem] pr-[1.125rem]">
      <div className="w-full flex items-center  justify-between">
        <p className="text-secondary font-sans font-medium text-1xl">History</p>
        <div className="flex gap-[1.5rem]">
          <div className="w-[13.375rem]">
            <DateDropdownPicker selectedDate = {selectedDate} setSelectedDate = {setSelectedDate} />
          </div>
          <div className="w-[22.5rem]">
            <Search
              className="py-[11px]  pl-[1.75rem] pr-[4rem]"
              placeholder="Search by name"
              setSearch ={setSearch}
              search = {search}
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
                    {history.map((value) => {
                      return (
                        <tr
                          className=" l border-dashed border-light_secondary border-b-[1px]"
                          key={value.id}
                        >
                          <td className="py-[1rem]">{value.id}</td>
                          <td className="py-[1rem]">{value.user}</td>
                          <td className="py-[1rem]">{value.pick}</td>
                          <td className="py-[1rem]">{value.drop}</td>
                          <td className="py-[1rem]">{value.comment}</td>
                        </tr>
                      );
                    })}
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
