"use client";
import Toggle from "@/components/Toggle";
import Proceed from "@/components/Proceed";
import Tab from "@/components/Tab";
import Card from "@/components/Card";
import React, { useState } from "react";
import Drop from "@/components/Drop";
import ProcessModel from "@/components/ProcessModel";
export default function Home() {
  const [toggleState, setToggleState] = useState("pick");
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedpurpose, setSelectedpurpose] = useState("");
  const payload = {
    selectedItem: selectedItem,
    userId: selectedUserId,
    purposeId: selectedpurpose,
  };
  return (
    <>
      <div className="w-[75.4%] mx-auto">
        <Toggle setToggleState={setToggleState} toggleState={toggleState} />
      </div>
      {toggleState === "pick" ? <Tab /> : ""}
      <div className="mt-[2rem]  flex flex-col justify-between">
        {toggleState === "pick" ? (
          <Card selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        ) : (
          <Drop />
        )}
      </div>
      {toggleState === "pick" ? (
        <Proceed
          setSelectedpurpose={setSelectedpurpose}
          selectedpurpose={selectedpurpose}
          selectedUserId={selectedUserId}
          selectedItem={selectedItem}
          setSelectedUserId={setSelectedUserId}
          setIsOpen={setIsOpen}
        />
      ) : (
        ""
      )}

      {isOpen &&
        selectedItem.length !== 0 &&
        selectedpurpose !== "" &&
        selectedUserId !== "" && (
          <ProcessModel closeModal={closeModal} payload={payload} />
        )}
    </>
  );
}
