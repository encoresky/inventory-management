import React from "react";
import Table from "@/components/Table";
import Details from "@/components/Details";
import BackButton from "@/components/BackButton";
const page = () => {
  return (
    <div className="py-[2rem] overflow-y-auto ">
      <div className="max-w-full px-[2.688rem] max-sm:px-[0.75rem]">
        <BackButton />
        <div className="mb-[1.94rem] mt-[2rem]">
          <Details />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default page;
