import React from "react";
import Table from "@/components/Table";
import Details from "@/components/Details";
import Button from "@/components/Button";
import Link from "next/link";
import { Arrow } from "@/public/assets/svg/Arrow";
const page = () => {
  return (
    <div>
      <div className="max-w-[1366px] px-[2.688rem]">
        <div>
          <Link
            className="text-1xl flex font-sans gap-[10px] text-secondary font-bold"
            href="/"
          >
            <span className="rotate-[270deg]">
              <Arrow />
            </span>
            <span> Back</span>
          </Link>
        </div>
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
