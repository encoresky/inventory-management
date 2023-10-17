"use client";
import Image from "next/image";
import SelectButton from "@/components/SelectButton";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect} from "react";
const Card=({ selectedItem, setSelectedItem,products,setProducts,category})=> {
  const router = useRouter();
  const data = useSelector((state) => state.product.products);
  

  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.product.loading);
  // const isError = useSelector((state) =>state.product.isError);
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);
  // if (isLoading) return <div>Loading....... </div>;
  // if (isError) return <div>{isError}</div>;
  

  const handleSelect = (isSelected, id) => {
    if (isSelected) {
      setSelectedItem([...selectedItem, id]);
    } else {
      const res = selectedItem.filter((item) => item !== id);
      setSelectedItem(res);
    }
  };

  useEffect(()=>{
    const res = data.map((item)=>{
      if(selectedItem.includes(item?.id)){
        return {...item,isSelected:true}
      }else{
        return {...item,isSelected:false}
      }
    })
    setProducts(res)
  },[selectedItem])


  return (
    <>
      <div className="cardMain flex flex-wrap gap-[1.25rem] max-h-[25rem] pb-[7.625rem] px-[1.75rem] overflow-y-auto">
        {products?.map((value) => {
          return (
            <div
              className="card w-[28%] border-[1px] flex flex-col justify-between items-center bg-white  border-light rounded-[10px] text-center pt-[1.813rem] pb-[12px]
         px-[1.563rem] ease-in-out 	duration-300 hover:bg-primary_light cursor-pointer"
              id="cardWrapper"
              onClick={(e) =>
                e.target.id === "cardWrapper" ? router.push("/details") : ""
              }
              key={value.id}
            >
              <div
                className="imgContainer"
                onClick={() => router.push("/details")}
              >
                <Image
                  src={value?.image || ""}
                  width={100}
                  height="auto"
                  priority={true}
                  alt="home icon"
                  className="mx-auto"
                />
              </div>
              <div
                className="pb-[1rem]"
                onClick={() => router.push("/details")}
              >
                <h3 className="text-md font-normal text-secondary_light font-sans mt-[14px] mb-[6px]">
                  {value?.productname}
                </h3>
                <p className="text-light_secondary">{value?.desc}</p>
              </div>
              <SelectButton
                onChange={(isSelected) => {
                  handleSelect(isSelected, value.id);
                }}
                Select="Select"
                Selected="Selected"
                value={value?.isSelected}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
