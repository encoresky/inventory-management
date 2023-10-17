"use client";
import Image from "next/image";
import deleteIcon from "@/public/assets/delete.svg";
import Button from "./Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function ProcessModel({
  closeModal,
  payload,
  setSelectedItem,
  selectedItem,
  products,
}) {
  const [items, setItems] = useState([]);
  const [employee, setEmployees] = useState([]);
  const product = products;
  const employees = useSelector((state) => state.employees.employee);

  useEffect(() => {
    const filteremployee = employees.find(
      (employees) => employees.id == payload.userId
    );
    const res = product.filter((item) => {
      if (selectedItem.includes(item?.id)) {
        return item;
      }
    });
    setEmployees(filteremployee);
    setItems(res);
  }, [payload]);

  const handleDelete = (id) => {
    if (id) {
      const res = payload.selectedItem.filter((item) => item !== id);
      setSelectedItem(res);
    }
  };

  if (employee.length === 0 && items.length === 0) {
    return;
  }
  return (
    <>
      <div
        className="fixed inset-0 backdrop-blur-sm flex justify-center bg-model_bg items-center z-[2]"
        id="modelWrapper"
        onClick={(e) => (e.target.id === "modelWrapper" ? closeModal() : "")}
      >
        <div className="w-[48rem]  transform px-[2.5rem] pt-[2.063rem] pb-[2.625rem] bg-white rounded-[20px] shadow-lg transition-all">
          <div className="flex items-center justify-between ">
            <div className="flex gap-[1.5rem] items-center">
              <Image
                src={employee?.proImage}
                width={40}
                height={40}
                priority={true}
                alt="Prifile"
                style={{
                  borderRadius: "50%",
                }}
              />
              <figcaption className="text-1xl font-sans font-medium text-secondary">
                {employee?.name}
              </figcaption>
            </div>
            <button
              className="text-2xl text-secondary hover:text-red_primary"
              onClick={closeModal}
            >
              &#10006;
            </button>
          </div>
          <h4 className=" pt-[2rem] pb-[1.125rem] font-sans text-secondary text-1xl font-medium">
            Item List{" "}
            <span className="text-orange">({selectedItem?.length})</span>
          </h4>
          <div className="overflow-auto ">
            <div className="max-h-[20rem] overflow-y-auto pr-[10px]">
              {items?.map((value) => {
                return (
                  <div
                    className="flex justify-between items-center flex-wrap items_list relative py-[12.5px]"
                    key={value?.id}
                  >
                    <div className="flex gap-[2.1rem]">
                      <Image
                        src={value?.image}
                        width={22}
                        height={22}
                        priority={true}
                        alt="img"
                      />
                      <div>
                        <h5 className="font-sans text-sm text-secondary_light font-normal">
                          {value?.productname}
                        </h5>
                        <p className="font-sans  font-normal text-light_secondary text-mini_sm">
                          {value?.desc}
                        </p>
                      </div>
                    </div>
                    <button
                      className=""
                      onClick={() => handleDelete(value?.id)}
                    >
                      <Image
                        src={deleteIcon}
                        width={30}
                        height="auto"
                        priority={30}
                        alt="arrowUp"
                        className="mx-auto"
                      />
                      <p className="font-sans text-mini_sm font-normal text-red_primary">
                        Remove
                      </p>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end gap-[3.8rem] pt-[2rem] items-center">
            <Button
              className="text-xl text-secondary font-sans font-normal decoration-1 underline decoration-secondary hover:text-orange hover:decoration-orange"
              name="Cancel"
              onClick={closeModal}
            />
            <Button
              className="btn-primary"
              name="Confirm"
              onClick={closeModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}
