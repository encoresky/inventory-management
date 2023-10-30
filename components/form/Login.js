"use client";
import FormLabel from "./FormLabel";
import Input from "./Input";
import Link from "next/link";
import Button from "../Button";
import { loginschema } from "@/app/schemas/loginschema";
import { useFormik } from "formik";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { Arrow } from "@/public/assets/svg/Arrow";

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
    <div className="flex relative items-center py-[2rem] h-screen justify-center flex-col">
      <div className="w-[500px] max-sm:w-[100%] bg-white  px-[1.25rem] py-[1.9rem] shadow-sm rounded-[10px] ">
        <Link
          href="/"
          className="font-sans flex text-1xl duration-300 ease-in-out font-medium absolute  top-[10px] left-[10px] hover:fill-orange hover:text-orange hover:underline hover:underline-offset-4"
        >
          <span className="rotate-[270deg]">
            <Arrow />
          </span>
          Home
        </Link>
        <div>
          <Image src={logo} width={160} height="auto" alt="logo" />
        </div>
        <h1 className="text-[40px] font-bold text-primary text-center font-sans pb-[1rem]">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <FormLabel name="Email" id="userEmail" />
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
          <FormLabel name="Password" id="userPass" />
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
          <div className="flex items-center gap-[1rem] max-ex_sm:flex-col max-ex_sm:items-start justify-between mt-[0.5rem]">
            <Button
              name="Login"
              className="btn-primary px-[2rem] max-ex_sm:w-full"
            />
            <p className="text-secondary text-[14px]">
              Don't have an account?
              <Link
                href="/signUp"
                className=" font-sans text-sm font-normal hover:text-orange hover:underline hover:underline-offset-4"
              >
                &nbsp;Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
