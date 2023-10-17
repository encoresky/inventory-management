"use client";
import Toggle from "@/components/Toggle";
import Proceed from "@/components/Proceed";
import Tab from "@/components/Tab";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import Drop from "@/components/Drop";
import ProcessModel from "@/components/ProcessModel";
import { useSelector } from "react-redux";
export default function Home() {
  const data = useSelector((state) => state.product.products);
  const [toggleState, setToggleState] = useState("pick");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState();
  const [category, setCategory] = useState("phone");

  useEffect(() => {
    const filteredItems = products.filter(
      (product) => product.category == category
    );
    setFilteredProducts(filteredItems);
  }, [category, products]);

  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedpurpose, setSelectedpurpose] = useState("");

  const payload = {
    selectedItem: selectedItem,
    userId: selectedUserId,
    purposeId: selectedpurpose,
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="w-[75.4%] max-sm:w-[100%] mx-auto">
        <Toggle setToggleState={setToggleState} toggleState={toggleState} />
      </div>
      {toggleState === "pick" ? (
        <Tab setCategory={setCategory} category={category} />
      ) : (
        ""
      )}
      <div className="mt-[2rem]  flex flex-col justify-between">
        {toggleState === "pick" ? (
          <Card
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            products={products}
            setProducts={setProducts}
            filteredProducts={filteredProducts}
          />
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

      {isOpen ? (
        <ProcessModel
          closeModal={closeModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          payload={payload}
          products={products}
        />
      ) : (
        ""
      )}
    </>
  );
}
