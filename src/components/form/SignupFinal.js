import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
const SignupFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("firstName is Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("lastName is Required"),
        email: Yup.string().email().required("Email is Required"),
        intro: Yup.string().required("Intro is Required"),
        job: Yup.string().required("Job is Required"),
        terms: Yup.boolean().oneOf([true], "Please check terms and conditions"),
      })}
      onSubmit={(values, actions) => {
        console.log(actions);
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form className="p-10 w-full max-w-[500px] mx-auto">
            <MyInput
              label="FirstName"
              placeholder="Enter your FirstName"
              id="firstName"
              name="firstName"
            ></MyInput>
            <MyInput
              label="LastName"
              placeholder="Enter your LastName"
              id="lastName"
              name="lastName"
            ></MyInput>
            <MyInput
              label="Email Address"
              placeholder="Enter your Email Address"
              id="email"
              name="email"
              type="email"
            ></MyInput>
            <MyTextArea
              label="Introduce Yourself"
              placeholder="Enter your Introduce"
              id="intro"
              name="intro"
            ></MyTextArea>
            <MySelectBox label="Your Job" id="job" name="job">
              <option value="frontend">FrontEnd Developer</option>
              <option value="backtend">Backend Developer</option>
              <option value="fullstack">FullStack Developer</option>
            </MySelectBox>
            <MyCheckBox name="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckBox>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                disabled={formik.isSubmitting}
              >
                Button
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
// rest paramater
// spread operator
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} /> {children}
      </label>

      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default SignupFinal;
