import Image from "next/image";
import young_woman from "@/public/assets/young_woman.png";
const Request = () => {
  return (
    <div className="bg-primary rounded-[10px]  shadow-sm max-w-[16.125rem] flex items-center justify-center gap-[1rem] py-[14px] px-[1.75rem]">
      <div>
        <Image
          src={young_woman}
          width={"auto"}
          height={"auto"}
          alt="young_woman"
        />
      </div>
      <button className="text-orange font-sans font-bold text-md text-center">Request a new requirement</button>
    </div>
  );
};

export default Request;
