const Input = ({
  type,
  name,
  id,
  placeholder,
  values,
  errors,
  handleChange,
  handleBlur,
  touched,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={id}
        className="w-full font-sans  text-md outline-none rounded-[10px] mt-[4px] mb-[1rem] py-[12px] px-[1.2rem]  border-[1px] border-light text-secondary"
        placeholder={placeholder}
        value={values}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {errors[name] && touched[name] && (
        <span className="text-red-600 text-ex_sm font-sans font-normal block absolute bottom-0">
          {errors[name]}
        </span>
      )}
    </div>
  );
};
export default Input;
