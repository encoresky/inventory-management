import * as Yup from "yup";
const letters = /^[a-z][a-z\s]*$/i;
const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const loginschema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter a Valid Email Address")
    .matches(email, "Is not in correct format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
