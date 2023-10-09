import React from "react";
import Table from "@/components/Table";
import Details from "@/components/Details";
import BackButton from "@/components/BackButton";
const page = () => {
  return (
    <>
      <div className="max-w-[1366px] px-[2.688rem]">
        <BackButton />
        <div className="mb-[1.94rem] mt-[2rem]">
          <Details />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </>
  );
};

export default page;
