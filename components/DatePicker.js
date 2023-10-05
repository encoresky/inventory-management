"use client"
import CalendarIcon from "@/public/assets/svg/CalendarIcon";
import { Arrow } from "@/public/assets/svg/Arrow";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateDropdownPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="relative">
      <span className="absolute left-[1.5rem] top-[11px] z-[1] pointer-events-none">
        <CalendarIcon />
      </span>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/YY"
        className="py-[10px] pr-[2rem] pl-[3.5rem] rounded-[1.562rem] w-full  border-[1px] border-[#D9D9D9] outline-none"
      />
      <span className="absolute right-[0.8rem] top-[10px] rotate-[180deg] pointer-events-none">
        <Arrow />
      </span>
    </div>
  );
};

export default DateDropdownPicker;
