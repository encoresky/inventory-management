"use client"
import Image from "next/image";
import deleteIcon from "@/public/assets/delete.svg";
import mobile from "@/public/assets/mobile.png";
import Button from "./Button";
import { useSelector } from "react-redux";
import { useState } from "react";


const List = () => {
  const products = useSelector((state) => state.product.products);
  const [productsItam, setProductsItam] = useState(products);
  const handleDelete = (id) => {
    if (id) {
      const res = productsItam.filter((product) => product.id != id);
      setProductsItam(res);
    }
  };
  return (
    <div className="shadow-md h-full flex flex-col justify-between rounded-[20px]">
      <h4 className=" pt-[2.5rem] pl-[2.5rem] font-sans text-secondary text-1xl font-medium">
        Item List <span className="text-orange">({productsItam?.length})</span>
      </h4>
      <div className="overflow-auto">
        <div className=" px-[2.5rem] pb-[2.5rem] pt-[1rem]">
          {productsItam?.map((value) => {
            return (
              <div className="flex justify-between items-center flex-wrap items_list relative py-[12.5px]" key={value.id}>
                <div className="flex gap-[2.1rem]">
                  <Image src={value?.image}
                    width={44}
                    height={44}
                    priority={true} alt="arrowUp"
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
                {/* <button className="" onClick={()=>handleDelete(value.id)}>
              <Image
                src={deleteIcon}
                width={30}
                height="auto"
                priority={true}
                alt="arrowUp"
                style={{ 
                  width: 'auto',
                  margin:'0 auto'
               }}
              />
              <p className="font-sans text-mini_sm font-normal text-red_primary">
                Remove
              </p>
            </button> */}
              </div>

            )
          })}

        </div>
      </div>
      <div className="flex justify-end gap-[3.8rem] items-center px-[2.5rem] py-[1rem]">
        <Button
          className="text-xl text-secondary font-sans font-normal hover:text-orange hover:decoration-orange
           decoration-1 underline decoration-secondary"
          name="Cancel"
        />
        <Button className="btn-primary" name="Confirm" />
      </div>
    </div>
  );
};

export default List;
