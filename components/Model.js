import Image from "next/image";
import { useEffect } from "react";
import profile from "@/public/assets/profile.jpg";
import Button from "./Button";
import SelectButton from "./SelectButton";
import mobile from "@/public/assets/mobile.png";
export default function Model({ isVisible, closeModal }) {
  useEffect(() => {
    if (document) {
      document.body.style.overflow = isVisible ? "hidden" : "auto";
    }
  }, [isVisible]);
  if (!isVisible) return null;

  return (
    <>
      <div className=" fixed inset-0 backdrop-blur-sm flex justify-center items-center z-[2]" id="modelWrapper" onClick={(e)=>e.target.id === "modelWrapper" ? closeModal():"" }>
        <div className="w-[48rem]  transform px-[2.5rem] pt-[2.063rem] pb-[2.625rem] bg-white rounded-[20px] shadow-lg transition-all">
          <div className="flex items-center justify-between ">
            <div className="flex gap-[1.5rem] items-center">
              <Image
                src={profile}
                height={40}
                width={40}
                className="rounded-[50%]"
              />
              <figcaption className="text-1xl font-sans font-medium text-secondary">
                Nishant Sen
              </figcaption>
            </div>
            <button
              className="text-2xl text-secondary hover:text-red_primary"
              onClick={closeModal}
            >
              &#10006;
            </button>
          </div>
          <h4 className=" pt-[2rem] pb-[1.125rem] font-sans text-secondary text-1xl font-medium">
            Item List <span className="text-orange">(4)</span>
          </h4>
          <div className="overflow-auto">
            <div className="max-h-[20rem] overflow-y-auto">
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
                <SelectButton Select="Drop" Selected="Droped" />
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
                <SelectButton Select="Drop" Selected="Droped" />
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

                <SelectButton Select="Drop" Selected="Droped" />
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
                <SelectButton Select="Drop" Selected="Droped" />
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
                <SelectButton Select="Drop" Selected="Droped" />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-[3.8rem] pt-[2rem] items-center">
            <Button
              className="text-xl text-secondary font-sans font-normal decoration-1 underline decoration-secondary"
              name="Confirm"
            />
            <Button className="btn-primary" name="Confirm" />
          </div>
        </div>
      </div>
    </>
  );
}
