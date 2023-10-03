"use client"
import Toggle from "@/components/Toggle";
import Proceed from "@/components/Proceed";
import Tab from "@/components/Tab";
import Cart from "@/components/Cart";
import React, { useState } from "react";
import Drop from "@/components/Drop";


export default function Home() {
  const [toggleState, setToggleState] = useState("pick");
  return (
    <div>
      <div className="w-[75.4%] mx-auto">
        <Toggle setToggleState = {setToggleState} toggleState = {toggleState}/>
      </div>
      {
          toggleState ==="pick" ? <Tab/> : ""
        }
      <div className="mt-[2rem]  flex flex-col justify-between">
        {
          toggleState ==="pick" ?  <Cart /> : <Drop/>
        }
        <Proceed />
      </div>
    </div>
  );
}
