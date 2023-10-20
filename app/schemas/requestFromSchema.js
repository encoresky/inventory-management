import * as Yup from "yup";
const letters = /^[a-z][a-z\s]*$/i;

export const requestFromSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Please enter a valid name with a minimum of 2 characters.")
    .max(25, "Please enter a name with 25 characters or fewer.")
    .matches(letters, "Is not in correct format")
    .required("Name is required"),
  title: Yup.string()
    .matches(letters, "Is not in correct format")
    .required("Title is required"),
  description: Yup.string()
    .matches(letters, "Is not in correct format")
    .required("Description is required"),
});
