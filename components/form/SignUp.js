"use client";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Input from "./Input";
import FormLabel from "./FormLabel";
import Link from "next/link";
import Button from "../Button";
import { signUpschema } from "@/app/schemas/signupschema";
import { useFormik } from "formik";
import { Arrow } from "@/public/assets/svg/Arrow";

const SignUp = ({ lang }) => {
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
    validationSchema: signUpschema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
    },
  });

  return (
    <div className="flex relative items-center h-screen justify-center flex-col  overflow-auto pd-[1rem]">
      <div className="w-[31.25rem] max-ex_sm:w-full bg-white  px-[1.25rem] py-[1.9rem] shadow-sm rounded-[10px]  overflow-auto">
        <Link
          href="/"
          className="font-sans flex text-1xl duration-300 ease-in-out font-medium absolute max-sm:static max-sm:pb-[1rem] top-[10px] left-[10px] hover:fill-orange hover:text-orange hover:underline hover:underline-offset-4"
        >
          <span className="rotate-[270deg]">
            <Arrow />
          </span>
          Home
        </Link>
        <div>
          <Image src={logo} width={160} height="auto" alt="logo" />
        </div>
        <h1 className="text-[40px] font-bold text-primary text-center pb-[1rem]">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <FormLabel name="First Name" id="userfname" />
          <Input
            name="fname"
            placeholder="Enter Your First Name"
            id="userfname"
            type="text"
            values={values.fname}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
          <FormLabel name="Last Name" id="userfname" />

          <Input
            name="lname"
            placeholder="Enter Your Last Name"
            id="userlname"
            type="text"
            values={values.lname}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
          />
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
          <FormLabel name="Position" id="userPos" />

          <Input
            name="position"
            placeholder="Enter Your Position"
            id="userPos"
            type="text"
            values={values.position}
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
              name="Sign Up"
              className="btn-primary max-ex_sm:w-full px-[2rem]"
            />
            <p className="text-secondary text-[14px] mt-[20px]">
              Already have an account?
              <Link
                href="/login"
                className="hover:text-orange hover:underline hover:underline-offset-4"
              >
                &nbsp;Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
