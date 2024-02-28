/*
    This component is responsible for rendering the register form. It uses the useForm hook to handle the form state and validation.
    - has title of "Register"
    - includes form fields for full name, password, confirm password, email, and license number
    - includes a terms and conditions checkbox
    - has a register button that is disabled until the form is valid
    - includes form validation logic for all fields
    - all fields are required
    - includes a link to the login page
*/

import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface RegisterFormProps {
    onSubmit: (formData: FieldValues) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" {...register('fullName', { required: true })} />
                    {errors.fullName && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register('password', { required: true })} />
                    {errors.password && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" {...register('confirmPassword', { required: true })} />
                    {errors.confirmPassword && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email', { required: true })} />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="licenseNumber">License Number</label>
                    <input type="text" id="licenseNumber" {...register('licenseNumber', { required: true })} />
                    {errors.licenseNumber && <span>This field is required</span>}
                </div>
                <div>
                    <input type="checkbox" id="termsAndConditions" {...register('termsAndConditions', { required: true })} />
                    <label htmlFor="termsAndConditions">I agree to the terms and conditions</label>
                    {errors.termsAndConditions && <span>This field is required</span>}
                </div>
                <button type="submit" disabled={Object.keys(errors).length > 0}>Register</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default RegisterForm;