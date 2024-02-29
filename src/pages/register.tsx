/*
    This is the Register page
    - includes navbar with a left hand side link called RentWheelz and a right hand side link called Login.
    - Rentwheelz link should navigate to the root page /
    - Login link should navigate to the login page /
    - content is centered on the page
    - uses the RegisterForm component to render the register form
*/
import React from "react";
import Link from "next/link";
import RegisterForm from "../components/RegisterForm";
import "../app/globals.css";
import Navbar from "@/components/Navbar";

const Register: React.FC = () => {
  const handleRegisterSubmit = async (formData: any) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // Handle the response here

      if (response.status === 200) {
        const data = await response.json();
        window.location.href = "/cars";
      }
    } catch (error) {
      // Handle the error here
    }
  };

  return (
    <div className="h-screen">
      <Navbar links={[{ label: "login", href: "/" }]} />

      <div className="max-w-[50%] m-auto">
        <RegisterForm onSubmit={handleRegisterSubmit} />
      </div>
    </div>
  );
};

export default Register;
