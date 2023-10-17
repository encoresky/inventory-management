import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import SelectButton from "./SelectButton";
import { useSelector } from "react-redux";

export default function DropModel({ closeModal, employeeId }) {
  const products = useSelector((state) => state.product.products);
  const employee = useSelector((state) => state.employees.employee);
  const allowedProducts = useSelector(
    (state) => state.SelectedProduct.SelectedProduct[0]
  );
  const [SelectedProduct, setSelectedProducts] = useState('');
  const [employeeVal, setEmployeeVal] = useState('');

  useEffect(() => {

    const filterId = allowedProducts.filter(
      (allowedId) => allowedId.epId === employeeId
    );

    const filteremployee = employee.filter(
      (allowedId) => allowedId.id === employeeId
    );

    setEmployeeVal(filteremployee);

    const filterValue = filterId.map((id) => {
      return products.find((product) => product.id == id.proId);
    })

    setSelectedProducts(filterValue);
  }, [employeeId]);
  const handleSelect = (isSelected, id) => {
    if (isSelected) {
      // setSelectedItem([...selectedItem,id])
    } else {
      // const res = selectedItem.filter((item)=>item!==id)
      // setSelectedItem(res)
    }
  };

  if (SelectedProduct === '') {
    return
  }
  return (
    <>
      <div
        className=" fixed inset-0 backdrop-blur-sm flex justify-center bg-model_bg  items-center z-[2]"
        id="modelWrapper"
        onClick={(e) => (e.target.id === "modelWrapper" ? closeModal() : "")}
      >
        <div className="w-[48rem]  transform px-[2.5rem] pt-[2.063rem] pb-[2.625rem] bg-white rounded-[20px] shadow-lg transition-all">
          <div className="flex items-center justify-between ">
            <div className="flex gap-[1.5rem] items-center">
              <Image
                src={employeeVal[0]['proImage']}
                width={44}
                height={44}
                priority={true}
                className="rounded-[50%]"
                alt="img"
              />
              <figcaption className="text-1xl font-sans font-medium text-secondary">
                {employeeVal[0]['name']}
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
            <span className="text-orange">({SelectedProduct.length})</span>
          </h4>
          <div className="overflow-auto ">
            <div className="max-h-[20rem] overflow-y-auto pr-[10px]">
              {SelectedProduct?.map((value) => {
                return (
                  <div
                    className="flex justify-between items-center gap-[2rem] items_list relative py-[12.5px]"
                    key={value.id}
                  >
                    <div className="flex gap-[2.1rem]">
                      <Image
                        src={value.image}
                        width={44}
                        height={44}
                        priority={true}
                        alt="arrowUp"
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
                    <div>
                      <SelectButton
                        Select="Drop"
                        Selected="Selected"
                        defaultSelected="true"
                        onChange={(isSelected) => {
                          handleSelect(isSelected, value.id);
                        }}
                      />
                    </div>
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
            <Button className="btn-primary" name="Confirm" onClick={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
}
