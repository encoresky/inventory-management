"use client";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import FormLabel from "./FormLabel";
import Input from "./Input";
import Link from "next/link";
import Button from "../Button";
import { loginschema } from "@/app/schemas/loginschema";
import { useFormik } from "formik";
const Login = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    position: "",
    password: "",
  };
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    setFieldValue,
    isSubmitting,
    touched,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: loginschema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
    },
  });

  return (
    <div className="flex items-center py-11  flex-col">
      <div className="w-[500px] bg-white  px-[20px] py-[40px] shadow-sm rounded-[10px] ">
        <div className="">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <h1 className="text-[40px] font-bold text-primary text-center font-sans">
          Login 
        </h1>
        <form onSubmit={handleSubmit}>
          <FormLabel name="email" id="userEmail" />
          <Input
            name="email"
            placeholder="Enter Your Email"
            id="userEmail"
            type="email"
            values={values.email}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
          <FormLabel name="password" id="userPass" />
          <Input
            name="password"
            placeholder="Enter Your Password"
            id="userPass"
            type="password"
            values={values.password}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
          <div className="flex justify-between mt-[0.5rem]">
            <Button name="Login" className="btn-primary px-[2rem]" />
            <p className="text-secondary text-[14px] mt-[20px]">
              Don't have an account? 
              <Link
                href="/signUp"
                className=" font-sans text-sm font-normal hover:text-orange hover:underline hover:underline-offset-4"
              >
                 Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
