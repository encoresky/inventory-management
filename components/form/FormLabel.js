const FormLabel = ({ name, id }) => {
  return (
    <label
      htmlFor={id}
      className=" text-md font-medium font-sans  text-secondary "
    >
      {name}
    </label>
  );
};

export default FormLabel;
