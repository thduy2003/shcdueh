import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignupFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("firstName is Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("lastName is Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">FirstName</label>
          <Field
            name="firstName"
            type="text"
            id="firstName"
            placeholder="Please enter first name"
            className="p-4 rounded-md border border-gray-100"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">LastName</label>
          <Field
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Please enter last name"
            className="p-4 rounded-md border border-gray-100"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Button
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupFormV2;
