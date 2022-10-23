import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
const SignupFormHook = () => {
  const schemaValidation = Yup.object({
    firstName: Yup.string()
      .required("Please enter your first name")
      .max(10, "Must be 10 characters or less"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  const watchShowAge = watch("showAge", false);
  const onSubmit = async (values) => {
    if (isValid) console.log("send data to backend");
    //     after successfully submitted

    // then reset form
    // reset({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    // });
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleSetDemoData = () => {
    setValue("firstName", "Duy");
    setValue("lastName", "Hoang");
    setValue("email", "duypro2308@gmail.com");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          {...register("firstName")}
        />
        {errors?.firstName && (
          <div className="text-sm text-red-500">
            {errors.firstName?.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          autoComplete="off"
          type="text"
          id="lastName"
          placeholder="Please enter last name"
          className="p-4 rounded-md border border-gray-100"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email Address</label>
        <MyInput
          name="email"
          control={control}
          placeholder="Enter your email address"
          id="email"
        ></MyInput>
        {/* <input
          type="email"
          id="email"
          placeholder="Please enter email address"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        /> */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input type="number" placeholder="Please enter your age" />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white  border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <div>
        <button
          className="p-3 bg-green-400 text-white"
          onClick={handleSetDemoData}
        >
          Demo Data
        </button>
      </div>
    </form>
  );
};
// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border border-gray-100"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-100"
      {...field}
      {...props}
    />
  );
};

export default SignupFormHook;
