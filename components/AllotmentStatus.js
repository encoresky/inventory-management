import { Arrow } from "@/public/assets/svg/Arrow";
const AllotmentStatus = () => {
  return (
    <>
      <div className="AllotmentWrapper pt-[1rem] h-[226px]">
        <h2 className="flex gap-[2.5rem] items-center mb-[1rem]">
          <span> Allotment Status</span>
          <span className="rotate-[90deg]">
            <Arrow />
          </span>
        </h2>
        <div className="flex justify-between  flex-wrap w-full mt-[1rem]">
          <div className="AllotmentBlock w-[39%] py-[12px] px-[10px]  bg-light text-secondary_light rounded-[10px]">
            <p className="text-sm font-sans font-medium">Laptops</p>
            <h5 className="text-xl font-sans font-medium mt-[5px]">
              {" "}
              <span className="text-secondary_light">35 </span> /{" "}
              <span className="text-orange">48</span>
            </h5>
          </div>
          <div className="py-[12px] px-[10px] w-[59%] bg-orange_secondary text-secondary_light rounded-[10px]">
            <p className="text-sm font-sans font-medium">Adapters</p>
            <h5 className="text-xl font-sans font-medium mt-[5px]">
              {" "}
              <span className="text-secondary_light">5 </span> /{" "}
              <span className="text-orange"> 9 </span>
            </h5>
          </div>
        </div>
        <div className="flex justify-between  flex-wrap w-full mt-[1rem]">
          <div className="AllotmentBlock w-[59%] bg-orange_secondary py-[12px] px-[10px]  bg-light text-secondary_light rounded-[10px]">
            <p className="text-sm font-sans font-medium">Laptops</p>
            <h5 className="text-xl font-sans font-medium mt-[5px]">
              {" "}
              <span className="text-secondary_light">35 </span> /{" "}
              <span className="text-orange">48</span>
            </h5>
          </div>
          <div className="py-[12px] px-[10px] w-[39%] bg-light text-secondary_light rounded-[10px]">
            <p className="text-sm font-sans font-medium">Adapters</p>
            <h5 className="text-xl font-sans font-medium mt-[5px]">
              {" "}
              <span className="text-secondary_light">5 </span> /{" "}
              <span className="text-orange"> 9 </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllotmentStatus;
