  "use client"
import PlusIcon from '@/public/assets/svg/PlusIcon';
import RightIcon from '@/public/assets/svg/RightIcon';
import { useState } from 'react';

const SelectButton = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      className={`flex gap-[1rem] w-[9rem]  font-medium text-md border-[1px] items-center	rounded-[5px] font-sans justify-center ${
        isSelected ? 'border-black text-white bg-black' : 'border-light text-secondary_light '
      } p-2 m-2 rounded-md`}
      onClick={toggleSelect}
    >
      {isSelected ? 'Selected' : 'Select'} 
      {isSelected ? <RightIcon/> : <PlusIcon/>} 
    </button>
  );
};

export default SelectButton;
