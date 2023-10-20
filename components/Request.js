import Image from "next/image";
import young_woman from "@/public/assets/young_woman.png";
const Request = ({ setIsOpen }) => {
  return (
    <>
      <button
        className="bg-primary shadow-sm rounded-[10px] h-[87.27px]"
        onClick={() => setIsOpen(true)}
      >
        <div className="mx-auto max-w-[16.125rem] flex items-center justify-center gap-[1rem] py-[14px] px-[1.75rem]">
          <div>
            <Image
              src={young_woman}
              width={73}
              height="auto"
              priority={true}
              alt="young_woman"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-orange font-sans font-bold text-md text-center">
            Request a new requirement
          </p>
        </div>
      </button>
    </>
  );
};

export default Request;
