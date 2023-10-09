const Button = ({ className, name,onClick }) => {
  return <button className={className} onClick={onClick || ""}>{name}</button>;
};

export default Button;
