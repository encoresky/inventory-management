"use client";
import RequestFromImage from "@/public/assets/RequestFromImage.png";
import Image from "next/image";
import FormLabel from "./FormLabel";
import Input from "./Input";
import { useFormik } from "formik";
import { requestFromSchema } from "@/app/schemas/requestFromSchema";

const RequestFormModel = ({ closeModal }) => {
  const initialValues = {
    name: "",
    title: "",
    description: "",
  };
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: requestFromSchema,
      onSubmit: (values, { setSubmitting }) => {
        console.log(values);
      },
    });
  return (
    <div
      className="fixed inset-0 backdrop-blur-sm  flex justify-center bg-model_bg items-center z-[9]"
      id="modelWrapper"
      onClick={(e) => (e.target.id === "modelWrapper" ? closeModal() : "")}
    >
      <div className="pl-[3.5rem] pr-[2.5rem] pb-[2.313rem] pt-[2.875rem] max-ex_sm:px-[1rem] bg-white rounded-[29px] shadow-lg max-w-[46.938rem] transform transition-all">
        <div className="flex mb-[2.5rem] items-center justify-between max-ex_sm:mb-[1rem]">
          <h3 className="text-secondary font-sans text-1xl font-bold">
            Request a new requirement
          </h3>
          <button
            onClick={closeModal}
            className="text-secondary font-sans text-2xl ease-in-out duration-300 hover:text-red_primary"
          >
            &#10006;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between gap-[1rem] max-ex_sm:flex-col-reverse">
            <div className="w-[62.6%] max-ex_sm:w-full">
              <FormLabel name="Requested by" id="name" />
              <Input
                name="name"
                placeholder="Your good name here"
                id="name"
                type="text"
                values={values.name}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
              />

              <FormLabel name="Title" id="title" />
              <Input
                name="title"
                placeholder="Title of requirement"
                id="title"
                type="text"
                values={values.title}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
              />
              <FormLabel name="Description " id="Desc" />
              <div className="relative">
                <textarea
                  name="description"
                  id="Desc"
                  placeholder="Describe yourself here..."
                  rows="4"
                  className="w-full  font-sans text-md outline-none rounded-[10px] mt-[4px] mb-[1rem] py-[12px] px-[1rem]  border-[1px] border-light text-secondary"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                ></textarea>
                {errors.description && touched.description && (
                  <span className="text-red-600 text-ex_sm font-sans font-normal block absolute bottom-0">
                    {errors.description}
                  </span>
                )}
              </div>
            </div>
            <div className="w-[30.28%] max-ex_sm:w-[40%] pt-[10px]">
              <Image
                src={RequestFromImage}
                width={360}
                height="auto"
                priority={true}
                alt="RequestFromImage"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div className="flex justify-end gap-[3.8rem] items-center pl-[2.5rem] max-sm:px-[0.7rem] pt-[3rem] max-ex_sm:pt-0">
            <button
              type="submit"
              className="text-xl text-secondary font-sans font-normal ease-in-out duration-300 hover:text-orange hover:decoration-orange decoration-1 underline decoration-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestFormModel;
