
import userManual from "@/public/assets/userManual.svg";
import Image from "next/image";
const Book = ({name}) => {
  return (
    <div className="py-[0.625rem] flex gap-[1.25rem] items-center pl-[1.625rem] pr-[1.313rem]  bg-white   rounded-[10px] ">
      <Image
        src={userManual}
        width={35}
        height={35}
        className="mx-auto"
        alt="businessman"
      />
      <p className="text-orange font-bold">{name}</p>
    </div>
  );
};

export default Book;
