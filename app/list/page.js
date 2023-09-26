import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Image src="/profile.png" width={100} height={100} alt="logo" />
      </div>
      <div className="bg-primary ">
        <div className="">
          <ul>
            <li><Link href="#" className="text-white"> home </Link> </li>
            <li><Link href="#" className="text-white">About</Link> </li>
            <li><Link href="#" className="text-white">Contact</Link> </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
