"use client";
import Image from "next/image";
import img1 from "@/public/assets/img1.png";
import img2 from "@/public/assets/img2.png";
import SelectButton from "@/components/SelectButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/features/product/productSlice";

function Cart() {
  const router = useRouter();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredProducts);
  const isLoading = useSelector((state) => state.product.loading);
  const isError = useSelector((state) =>state.product.isError);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (isLoading) return <div>Loading....... </div>;
  if (isError) return <div>{isError}</div>;
  return (
    <>
      <div className="cartMain flex flex-wrap gap-[1.25rem] max-h-[25rem] pb-[7.625rem] px-[1.75rem] overflow-y-auto">
        {products.map((value) => {
          return(
          <div
            className="cart w-[28%] border-[1px] flex flex-col justify-between items-center bg-white  border-light rounded-[10px] text-center pt-[1.813rem] pb-[12px]
         px-[1.563rem] ease-in-out 	duration-300 hover:bg-primary_light cursor-pointer"
            id="cartWrapper"
            onClick={(e) =>
              e.target.id === "cartWrapper" ? router.push("/details") : ""
            }
            key={value.id}
          >
            <div>
              <div
                className="imgContainer"
                onClick={() => router.push("/details")}
              >
                <Image
                  src={img2}
                  width={54}
                  height={110}
                  alt="home icon"
                  className="mx-auto"
                />
              </div>
              <div
                className="pb-[1rem]"
                onClick={() => router.push("/details")}
              >
                <h3 className="text-md font-normal text-secondary_light font-sans mt-[14px] mb-[6px]">
                  {value.product}
                </h3>
                <p className="text-light_secondary">{value.description}</p>
              </div>
            </div>
            <SelectButton Select="Select" Selected="Selected" />
          </div>
          )
        })}
      </div>
    </>
  );
}

export default Cart;
