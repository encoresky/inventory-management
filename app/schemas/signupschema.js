import * as Yup from "yup";
const letters = /^[a-z][a-z\s]*$/i;
const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const signUpschema = Yup.object().shape({
  fname: Yup.string()
    .min(2)
    .max(25)
    .matches(letters, "Is not in correct format")
    .required("First Name is required"),
  lname: Yup.string()
    .min(2)
    .max(25)
    .matches(letters, "Is not in correct format")
    .required("Last Name is required"),
    position: Yup.string()
    .min(2)
    .max(25)
    .matches(letters, "Is not in correct format")
    .required("Position is required"),
  email: Yup.string()
    .email("Please Enter a Valid Email Address")
    .matches(email, "Is not in correct format")
    .required("Email is required"),
  password: Yup.string().min(6).max(10).required("Password is required"),
});
