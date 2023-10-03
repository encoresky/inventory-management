"use client";
import Image from "next/image";
import Button from "./Button";
import arrowUp from "@/public/assets/ep_arrow-up.svg";
import profile from "@/public/assets/profile.jpg";
import Select from "react-select";
import { customDropdownIndicator } from "@/public/assets/svg/customDropdownIndicator";

const customStyle = {
  control: (provided) => ({
    ...provided,
    height:50,
    paddingLeft: 12,
    paddingRight: 5,
    margin: 0,
    marginLeft: 0,
    border: "1px solid rgba(32, 32, 32, 0.50)",
    borderRadius: "10px",
    color: "#202020",
    fontFamily: "DM Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    backgroundColor: "white",
    outline: "none",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #DE7139",
    },
  }),
};
const options = [
  {
    value: "apple",
    label: (
      <div className="flex gap-[10px] items-center">
        <div>
          <Image
            src={profile}
            width={30}
            height={30}
            alt="arrowUp"
            className="rounded-[50%] selectImage"
          />
        </div>
        <div>Apple</div>
      </div>
    ),
  },
  {
    value: "apple",
    label: (
      <div className="flex gap-[10px] items-center">
        <div>
          <Image
            src={profile}
            width={30}
            height={30}
            alt="arrowUp"
            className="rounded-[50%] selectImage"
          />
        </div>
        <div>Apple</div>
      </div>
    ),
  },
  {
    value: "apple",
    label: (
      <div className="flex gap-[10px] items-center">
        <div>
          <Image
            src={profile}
            width={30}
            height={30}
            alt="arrowUp"
            className="rounded-[50%] selectImage"
          />
        </div>
        <div>Apple</div>
      </div>
    ),
  },
];
const options2 = [
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock" },
  { value: "jazz", label: "Jazz" },
  { value: "orchestra", label: "Orchestra" },
];

function Proceed() {
  return (
    <div className="px-[1.75rem]">
      <div className="proceedWrapper bg-primary_light absolute rounded-[10px]  bottom-[15px]  py-[1.25rem] px-[1.25rem]">
        <div className="flex justify-between">
          <div className="w-[53.82%] max-w-[432px]">
            <div className="flex justify-between">
              <div className="relative w-[58.1%]">
                <Select
                  menuPlacement="auto"
                  options={options}
                  components={{
                    DropdownIndicator: customDropdownIndicator,
                  }}
                  styles={customStyle}
                  className="outline-none shadow-none"
                />
              </div>
              <div div className="relative w-[35.42%]">
                <Select
                  menuPlacement="auto"
                  options={options2}
                  components={{
                    DropdownIndicator: customDropdownIndicator,
                  }}
                  styles={customStyle}
                  className="outline-none shadow-none"
                />
              </div>
            </div>
          </div>
          <div>
            <Button className="btn-primary w-full" name="Proceed" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proceed;

{
  /* <select className=" w-full appearance-none border border-light bg-primary_light font-sans text-md rounded-md px-[12px]  py-[10px]  text-secondary_light font-medium focus:outline-none focus:border-orange">
<option>
  {/* <Image src={profile} width={30} height={40} className="rounded-[50%]" alt="arrowUp" /> */
}
//   Option 1
// </option>
// <option>Option 2</option>
// <option>Option 3</option>
// </select> */}
