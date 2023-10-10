"use client";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Input from "./Input";
import FormLabel from "./FormLabel";
import Link from "next/link";
import Button from "../Button";
import { signUpschema } from "@/app/schemas/signupschema";
import { useFormik } from "formik";

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
    <div className="flex items-center  justify-center flex-col  overflow-auto py-[1rem]">
      <div className="w-[31.25rem] bg-white  px-[20px] py-[40px] shadow-sm rounded-[10px] max-h-[33.25rem] overflow-auto">
        <div className="">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <h1 className="text-[40px] font-bold text-primary text-center">
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
          <div className="flex justify-between">
            <Button name='Sign Up' className="btn-primary px-[2rem]" />
            <p className="text-secondary text-[14px] mt-[20px]">
              Already have an account?
              <Link
                href="/login"
                className="hover:text-orange hover:underline hover:underline-offset-4"
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

export default SignUp;
