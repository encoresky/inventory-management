const FormLabel = ({ name, id }) => {
  return (
    <label
      htmlFor={id}
      className=" text-xl font-medium font-sans  text-secondary "
    >
      {name}
    </label>
  );
};

export default FormLabel;