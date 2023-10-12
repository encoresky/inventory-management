import Image from "next/image";
import deleteIcon from "@/public/assets/delete.svg";
import profile from "@/public/assets/profile.jpg";
import Button from "./Button";
import SelectButton from "./SelectButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function ProcessModel({ closeModal, payload }) {
  const [selectedItemId, setSelectedItemId] = useState(payload.selectedItem);
  const [selectedItem, setSelectedItem] = useState();

 
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    const filterValue = selectedItemId.map((id) => {
      return products.find((product) => product.id == id);
    });
    setSelectedItem(filterValue);
  }, []);

  const handleDelete = (id) => {
    if(id){
      const res = selectedItem.filter((product)=>product.id !=id);
      setSelectedItem(res);
    }
  };

  return (
    <>
      <div
        className=" fixed inset-0 backdrop-blur-sm flex justify-center bg-model_bg items-center z-[2]"
        id="modelWrapper"
        onClick={(e) => (e.target.id === "modelWrapper" ? closeModal() : "")}
      >
        <div className="w-[48rem]  transform px-[2.5rem] pt-[2.063rem] pb-[2.625rem] bg-white rounded-[20px] shadow-lg transition-all">
          <div className="flex items-center justify-between ">
            <div className="flex gap-[1.5rem] items-center">
              <Image
                src={profile}
                height={40}
                width={40}
                className="rounded-[50%]"
                alt="Prifile"
              />
              <figcaption className="text-1xl font-sans font-medium text-secondary">
                Nishant Sen
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
            Item List <span className="text-orange">({products.length})</span>
          </h4>
          <div className="overflow-auto ">
            <div className="max-h-[20rem] overflow-y-auto pr-[10px]">
              {selectedItem?.map((value) => {
                return (
                  <div
                    className="flex justify-between items-center flex-wrap items_list relative py-[12.5px]"
                    key={value.id}
                  >
                    <div className="flex gap-[2.1rem]">
                      <Image
                        src={value.image}
                        width={22}
                        height={44}
                        alt="img"
                      />
                      <div>
                        <h5 className="font-sans text-sm text-secondary_light font-normal">
                          {value.productname}
                        </h5>
                        <p className="font-sans  font-normal text-light_secondary text-mini_sm">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                    <button className="" onClick={()=> handleDelete(value.id)}>
                      <Image
                        src={deleteIcon}
                        width={30}
                        height={30}
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
              className="text-xl text-secondary font-sans font-normal decoration-1 underline decoration-secondary"
              name="Cancel"
              onClick={closeModal}
            />
            <Button className="btn-primary" name="Confirm" onClick={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
}
