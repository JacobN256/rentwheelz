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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input type="email" {...register("email", { required: true })} />
                    {errors.email && <span>Email is required</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span>Password is required</span>}
                </div>
                <button type="submit" disabled={!isValid}>
                    Login
                </button>
            </form>
            <p>
                Don’t have an account? <a href="/register">Register</a>
            </p>
        </div>
    );
};

export default LoginForm;
