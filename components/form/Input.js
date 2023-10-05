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
        className="w-full text-md outline-none rounded-[5px] mt-[4px] mb-[1.5rem] p-[10px]  border-[1px] border-secondary text-secondary"
        placeholder={placeholder}
        value={values}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {errors[name] && touched[name] && (
        <span className="text-red-600 text-[14px] block absolute bottom-0">{errors[name]}</span>
      )}
    </div>
  );
};
export default Input;
