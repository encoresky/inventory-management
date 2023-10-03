const Toggle = ({setToggleState,toggleState}) => {
  return (
    <div className={`bg-primary_light flex rounded-[1.875rem]`}>
      <button
        className={`btnToggle ${
          toggleState === "pick" ? " text-white bg-black" : ""
        }`}
        onClick={()=>setToggleState("pick")}
      >
        Pick
      </button>
      <button
        className={`btnToggle ${
          toggleState === "drop" ? " text-white bg-black" : ""
        }`}
        onClick={()=>setToggleState("drop")}
      >
        Drop
      </button>
    </div>
  );
};

export default Toggle;
