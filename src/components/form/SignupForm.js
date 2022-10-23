import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignupForm = () => {
  //   const validate = (values) => {
  //     const errors = {};
  //     if (!values.firstName) {
  //       errors.firstName = "firstName is Required";
  //     } else if (values.firstName.length > 20) {
  //       errors.firstName = "Must be 20 characters or less";
  //     }
  //     if (!values.lastName) {
  //       errors.lastName = "lastName is Required";
  //     } else if (values.lastName.length > 20) {
  //       errors.lastName = "Must be 20 characters or less";
  //     }
  //     return errors;
  //   };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("firstName is Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("lastName is Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">FirstName</label>
        <input
          autoComplete="off"
          type="text"
          id="firstName"
          placeholder="Please enter first name"
          className="p-4 rounded-md border border-gray-100"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-400">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          autoComplete="off"
          type="text"
          id="lastName"
          placeholder="Please enter last name"
          className="p-4 rounded-md border border-gray-100"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-400">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Button
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
