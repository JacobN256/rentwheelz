/*
  this is the login page
  - includes navbar with a left hand side link called RentWheelz and a right hand side link called Register. 
  - Rentwheelz link should navigate to the root page /
  - Register link should navigate to the register page /register
  - content is centered on the page
  - uses the LoginForm component to render the login form
*/
import React from "react";
import Link from "next/link";
import LoginForm from "../components/LoginForm";
import "../app/globals.css";
import Navbar from "@/components/Navbar";

const LoginPage: React.FC = () => {
  const handleLoginSubmit = async (formData: any) => {
    try {
      const response = await fetch("/api/login", {
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
      <Navbar links={[{ label: "register", href: "/register" }]} />

      <div className="max-w-[50%] m-auto">
        <LoginForm onSubmit={handleLoginSubmit} />
      </div>
    </div>
  );
};

export default LoginPage;
