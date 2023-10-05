"use client";
import Image from "next/image";
import Button from "./Button";
import profile from "@/public/assets/profile.jpg";
import Select from "react-select";
import { Arrow } from "@/public/assets/svg/Arrow";

const customStyle = {
  control: (provided) => ({
    ...provided,
    height:50,
    paddingLeft: 12,
    paddingRight: 18,
    margin: 0,
    marginLeft: 0,
    border: "1px solid rgba(32, 32, 32, 0.50)",
    borderRadius: "10px",
    color: "#202020",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    backgroundColor: "white",
    outline: "none",
    cursor: "pointer",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #DE7139",
    },
  }),
  
  option: (provided,state) => ({
    ...provided,
    color: state.isSelected ? "#DF7A45" : "#202020",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    backgroundColor: state.isSelected ? "transparent" : "transparent",
    padding: '10px 0',
    lineHeight: 'normal',
    position: 'relative',
    cursor: "pointer",
    "&:hover": {
      color: '#DF7A45',
      background:'transparent',
    },
    "&:not(:last-child):after": {
      content: '""',
      border: 'none',
      borderBottom: '1px dashed rgba(32, 32, 32, 0.50)',
      color:'#fff',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
    },

  }),
  singleValue: (provided,state) => ({
    ...provided,
    color: '#202020',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',

  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 10,
    border:'none',
    marginTop: 0,
    padding:"0 10px",
    background: "#F5F6FA",
    boxShadow:'0px 4px 2px 0px rgba(80, 80, 80, 0.10)',

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
    value: "devendra Sharma",
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
        <div>Devendra Sharma</div>
      </div>
    ),
  },
  {
    value: "Pradeep",
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
        <div>Pradeep</div>
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
                    DropdownIndicator: Arrow,
                    IndicatorSeparator: () => null,
                  }}
                  styles={customStyle}
                  className="customOption"
                />
              </div>
              <div div className="relative w-[35.42%]">
                <Select
                  menuPlacement="auto"
                  options={options2}
                  components={{
                    DropdownIndicator: Arrow,
                    IndicatorSeparator: () => null,
                  }}
                  styles={customStyle}
                  className="customOption"
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
