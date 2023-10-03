import React from 'react'
import Button from './Button'

const Tab = () => {
  return (
    <div className='flex gap-[1rem] justify-center mt-[1.5rem]'>
       <Button name="Smartphone" className='btnTab bg-black text-white border-transparent'/> 
       <Button name="Cables" className='btnTab'/> 
       <Button name="Adapters" className='btnTab'/> 
       <Button name="Laptops" className='btnTab'/> 
    </div>
  )
}

export default Tab
