import { InteractionIcon1 } from "@/public/assets/svg/InteractionIcon";
import { InteractionIcon2 } from "@/public/assets/svg/InteractionIcon";
import { InteractionIcon3 } from "@/public/assets/svg/InteractionIcon";

const DeviceInteraction = () => {
  return (
    <>
      <div className="h-[127px] max-sm:h-[180px] max-ex_sm:h-[270px] flex max-ex_sm:flex-col border-dashed border-light_secondary border-[1px] rounded-[10px] items-center justify-center ">
        <div className="w-[33.33%] interactionCol max-ex_sm:w-full">
          <div className="w-[60%] group  max-sm:w-full max-sm:p-[1rem] max-ex_sm:p-[0.5rem] flex flex-col items-center justify-center  mx-auto">
            <span>
              <InteractionIcon1 className="fill-orange group-hover:fill-primary " />
            </span>
            <p className="pt-[1rem] ease-in-out duration-300 group-hover:text-orange text-ex_sm text-secondary font-sans font-medium text-center">
              Please power off devices before submitting them.
            </p>
          </div>
        </div>
        <div className="w-[33.33%] interactionCol max-ex_sm:w-full">
          <div className="w-[60%] group max-sm:w-full max-sm:p-[1rem] max-ex_sm:p-[0.5rem] flex flex-col items-center justify-center mx-auto">
            <span>
              <InteractionIcon2 className="fill-orange group-hover:fill-primary ease-in-out duration-300" />
            </span>
            <p className="pt-[1rem] ease-in-out duration-300 group-hover:text-orange text-ex_sm text-secondary font-sans font-medium text-center">
              Kindly keep devices charged whenever possible.
            </p>
          </div>
        </div>
        <div className="interactionCol w-[33.33%]  max-ex_sm:w-full ">
          <div className="w-[60%] group max-sm:w-full max-sm:p-[1rem] max-ex_sm:p-[0.5rem] flex flex-col items-center justify-center mx-auto">
            <span>
              <InteractionIcon3 className="fill-orange group-hover:fill-primary ease-in-out duration-300" />
            </span>
            <p className="pt-[1rem] ease-in-out duration-300 group-hover:text-orange text-ex_sm text-secondary font-sans font-medium text-center">
              Handle devices with care, avoiding any lid damage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceInteraction;
