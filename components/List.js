import Image from "next/image";
import deleteIcon from "@/public/assets/delete.svg";
import mobile from "@/public/assets/mobile.png";
import Button from "./Button";

const List = () => {
  return (
    <div className="shadow-md h-full flex flex-col justify-between rounded-[20px]  ">
      <div>
        <h4 className=" pt-[2.5rem] pl-[2.5rem] font-sans text-secondary text-1xl font-medium">
          Item List <span className="text-orange">(4)</span>
        </h4>
        <div className="max-h-[31.5rem] px-[2.5rem] pb-[2.5rem] pt-[1rem] overflow-y-auto">
          <div className="flex justify-between items-center flex-wrap items_list relative py-[12.5px]">
            <div className="flex gap-[2.1rem]">
              <Image src={mobile} width={22} height={44} alt="arrowUp" />
              <div>
                <h5 className="font-sans text-sm text-secondary_light font-normal">
                  IPhone 6S
                </h5>
                <p className="font-sans  font-normal text-light_secondary text-mini_sm">
                  Rose Gold
                </p>
              </div>
            </div>
            <button className="">
              <Image
                src={deleteIcon}
                width={30}
                height={30}
                alt="arrowUp"
                className="mx-auto"
              />
              <p className="font-sans text-mini_sm font-normal text-red_primary">
                Remove
              </p>
            </button>
          </div>
          <div className="flex justify-between items-center flex-wrap items_list relative py-[12.5px]">
            <div className="flex gap-[2.1rem]">
              <Image src={mobile} width={22} height={44} alt="arrowUp" />
              <div>
                <h5 className="font-sans text-sm text-secondary_light font-normal">
                  IPhone 6S
                </h5>
                <p className="font-sans  font-normal text-light_secondary text-mini_sm">
                  Rose Gold
                </p>
              </div>
            </div>
            <button className="">
              <Image
                src={deleteIcon}
                width={30}
                height={30}
                alt="arrowUp"
                className="mx-auto"
              />
              <p className="font-sans text-mini_sm font-normal text-red_primary">
                Remove
              </p>
            </button>
          </div>
          <div className="flex justify-between items-center flex-wrap items_list relative py-[12.5px]">
            <div className="flex gap-[2.1rem]">
              <Image src={mobile} width={22} height={44} alt="arrowUp" />
              <div>
                <h5 className="font-sans text-sm text-secondary_light font-normal">
                  IPhone 6S
                </h5>
                <p className="font-sans  font-normal text-light_secondary text-mini_sm">
                  Rose Gold
                </p>
              </div>
            </div>
            <button className="">
              <Image
                src={deleteIcon}
                width={30}
                height={30}
                alt="arrowUp"
                className="mx-auto"
              />
              <p className="font-sans text-mini_sm font-normal text-red_primary">
                Remove
              </p>
            </button>
          </div>
          <div className="flex justify-between items-center flex-wrap items_list relative py-[12.5px]">
            <div className="flex gap-[2.1rem]">
              <Image src={mobile} width={22} height={44} alt="arrowUp" />
              <div>
                <h5 className="font-sans text-sm text-secondary_light font-normal">
                  IPhone 6S
                </h5>
                <p className="font-sans  font-normal text-light_secondary text-mini_sm">
                  Rose Gold
                </p>
              </div>
            </div>
            <button className="">
              <Image
                src={deleteIcon}
                width={30}
                height={30}
                alt="arrowUp"
                className="mx-auto"
              />
              <p className="font-sans text-mini_sm font-normal text-red_primary">
                Remove
              </p>
            </button>
          </div>
          <div className="flex justify-between items-center flex-wrap items_list relative py-[12.5px]">
            <div className="flex gap-[2.1rem]">
              <Image src={mobile} width={22} height={44} alt="arrowUp" />
              <div>
                <h5 className="font-sans text-sm text-secondary_light font-normal">
                  IPhone 6S
                </h5>
                <p className="font-sans  font-normal text-light_secondary text-mini_sm">
                  Rose Gold
                </p>
              </div>
            </div>
            <button className="">
              <Image
                src={deleteIcon}
                width={30}
                height={30}
                alt="arrowUp"
                className="mx-auto"
              />
              <p className="font-sans text-mini_sm font-normal text-red_primary">
                Remove
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-[3.8rem] items-center">
        <Button
          className="text-xl text-secondary font-sans font-normal decoration-1 underline decoration-secondary"
          name="Confirm"
        />
        <Button className="btn-primary" name="Confirm" />
      </div>
    </div>
  );
};

export default List;
