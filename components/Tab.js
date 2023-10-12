import React from 'react'
import Button from './Button'
import { useState,useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { filterProduct } from '@/features/product/productSlice'



const Tab = () => {
  const products = useSelector((state) => state.product.products);
  // const filterValue= useSelector((state) => state.product.filteredProducts);
  const [category ,setCategory] = useState("phone");
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(filterProduct(category))
  },[category,products])
  return (
    <div className='flex gap-[1rem] justify-center mt-[1.5rem]'>
       <Button name="Smartphone"className={`btnTab ${category === "phone" ? 'bg-black text-white border-transparent':'' }`} onClick={()=>(setCategory("phone"))}/> 
       <Button name="Cables" className={`btnTab ${category=== "Cable" ? 'bg-black text-white border-transparent':'' }`} onClick={()=>setCategory("Cable")}/> 
       <Button name="Adapters" className={`btnTab ${category=== "adapters" ? 'bg-black text-white border-transparent':'' }`}onClick={()=>setCategory("adapters")} /> 
       <Button name="Laptops" className={`btnTab ${category=== "Laptops" ? 'bg-black text-white border-transparent':'' }`} onClick={()=>setCategory("Laptops")}/> 
       <Button name="Accessories" className={`btnTab ${category=== "Accessories" ? 'bg-black text-white border-transparent':'' }`} onClick={()=>setCategory("Accessories")}/> 
    </div>
  )
}

export default Tab
