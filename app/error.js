"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("error", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl text-red_primary font-medium font-sans">
        Something went wrong!
      </h2>
      {/* <p className="font-sans font-normal text-xl "> {error}</p> */}
      <div className="flex gap-[1rem] mt-[1.5rem]">
        <button className="btn-secondary text-xl" onClick={() => reset()}>
          Try again
        </button>
        <Link className="btn-secondary text-xl" href="/">
          Home
        </Link>
      </div>
    </div>
  );
}
