import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="nav ">
      <div className="logo bg-white">
        <Image src="/profile.png" width={100} height={100} alt="logo" />
      </div>
        <div className="h-full">
          <ul>
            <li><Link href="/" className="text-white"> home </Link> </li>
            <li><Link href="/list" className="text-white">List</Link> </li>
            <li><Link href="/admin" className="text-white">Admin</Link> </li>
          </ul>
        </div>
      </div>
  );
};

export default Header;
