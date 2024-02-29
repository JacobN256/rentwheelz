import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import Link from "next/link";

interface RegisterFormProps {
  onSubmit: (formData: FieldValues) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <h1>Register</h1>
      </div>
      <form
        className="flex flex-col w-full mt-4 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full">
          <input
            className="w-full h-10 border-2 border-gray-300 bg-transparent placeholder-gray-500"
            type="text"
            id="fullName"
            placeholder="Full Name"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span>This field is required</span>}
        </div>
        <div className="flex w-full space-x-4">
          <div className="flex w-full">
            <input
              className="w-full h-10 border-2 border-gray-300 bg-transparent placeholder-gray-500"
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="flex w-full">
            <input
              className="w-full h-10 border-2 border-gray-300 bg-transparent placeholder-gray-500"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && <span>This field is required</span>}
          </div>
        </div>
        <div className="flex w-full space-x-4">
          <div className="flex flex-col w-full">
            <input
              className="w-full h-10 border-2 border-gray-300 bg-transparent placeholder-gray-500"
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="flex flex-col w-full">
            <input
              className="w-full h-10 border-2 border-gray-300 bg-transparent placeholder-gray-500"
              type="text"
              id="licenseNumber"
              placeholder="License Number"
              {...register("licenseNumber", { required: true })}
            />
            {errors.licenseNumber && <span>This field is required</span>}
          </div>
        </div>
        <div className="flex flex-row space-x-4 align-left">
          <input
            className="border-2 border-gray-300 bg-transparent"
            type="checkbox"
            id="termsAndConditions"
            {...register("termsAndConditions", { required: true })}
          />
          <label htmlFor="termsAndConditions">
            I agree to the terms and conditions
          </label>
          {errors.termsAndConditions && <span>This field is required</span>}
        </div>
        <button
          className="bg-primary text-white uppercase h-[40px]"
          type="submit"
          disabled={Object.keys(errors).length > 0}
        >
          Register
        </button>
      </form>

      <div className="flex mt-2">
        Already have an account? <Link className="mx-2 text-primary underline" href="/">Login</Link>
      </div>
    </div>
  );
};

export default RegisterForm;
