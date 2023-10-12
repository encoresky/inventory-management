  "use client"
import PlusIcon from '@/public/assets/svg/PlusIcon';
import RightIcon from '@/public/assets/svg/RightIcon';
import { useState } from 'react';

const SelectButton = ({Selected , Select, onChange}) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => {
    setIsSelected((prevSelected) => !prevSelected);
     onChange(!isSelected);
  };
  
  return (
    <button
      className={`flex gap-[1rem] w-[9rem]  font-medium text-md border-[1px] items-center	rounded-[5px] font-sans justify-center p-2  ${
        isSelected ? 'border-black text-white bg-black' : 'border-light text-secondary_light '
      }`}
      onClick={toggleSelect}
    >
      {isSelected ? Selected : Select } 
      {isSelected ? <RightIcon/> : <PlusIcon/>} 
    </button>
  );
};

export default SelectButton;
