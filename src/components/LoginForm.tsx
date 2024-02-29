/*
        This component is responsible for rendering the login form. It uses the useForm hook to handle the form state and validation.
        - has title of "Login"
        - includes form fields for email and password
        - has a login button that is disabled until the form is valid
        - includes form validation logic for all fields
        - use react-hook-form
        - all fields are required
        - includes a link to the register page
*/
import Link from "next/link";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

interface LoginFormProps {
  onSubmit: (formData: FieldValues) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return (
    <div className="flex flex-col h-screen">
      <div className="mx-auto">
        <h2>Login</h2>
      </div>
      <form
        className="flex flex-col w-full mt-4 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full">
          <input
            className="w-full h-10 border-2 border-gray-300 bg-transparent placeholder-gray-500"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Email is required</span>}
        </div>
        <div className="flex w-full">
          <input
            className="w-full h-10 border-2 border-gray-300 bg-transparent placeholder-gray-500"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Password is required</span>}
        </div>
        <button
          className="bg-primary text-white uppercase h-[40px]"
          type="submit"
          disabled={!isValid}
        >
          Login
        </button>
      </form>
      <div className="flex mt-2">
        Don’t have an account?{" "}
        <Link className="mx-2 text-primary underline" href="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
