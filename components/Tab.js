import React from 'react'
import Button from './Button'
import { useState,useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { filterProduct } from '@/features/product/productSlice'



const Tab = () => {
  const products = useSelector((state) => state.product.products);
  // const filterValue= useSelector((state) => state.product.filteredProducts);
  const [category ,setCategory] = useState(1)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(filterProduct(category))
  },[category,products])
  return (
    <div className='flex gap-[1rem] justify-center mt-[1.5rem]'>
       <Button name="Smartphone"className={`btnTab ${category=== 1 ? 'bg-black text-white border-transparent':'' }`} onClick={()=>(setCategory(1))}/> 
       <Button name="Cables" className={`btnTab ${category=== 4 ? 'bg-black text-white border-transparent':'' }`} onClick={()=>setCategory(4)}/> 
       <Button name="Adapters" className={`btnTab ${category=== 5 ? 'bg-black text-white border-transparent':'' }`}onClick={()=>setCategory(5)} /> 
       <Button name="Laptops" className={`btnTab ${category=== 3 ? 'bg-black text-white border-transparent':'' }`} onClick={()=>setCategory(3)}/> 
    </div>
  )
}

export default Tab
