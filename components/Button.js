const Button = ({ className, name,onClick ,isDisabled}) => {
  return <button disabled ={isDisabled ? true : false} className={className} onClick={onClick}>{name}</button>;
};

export default Button;
